'use client';

import { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'screenfree_storage';

export interface Session {
    timestamp: number; // Start time
    duration: number;  // Seconds
}

interface StorageData {
    date: string;          // YYYY-MM-DD
    dailyTotal: number;    // seconds
    sessionStart: number | null; // timestamp
    isReportOpen: boolean; // Kept for state restoration if needed, though mostly manual now
    sessions?: Session[];  // [NEW] List of today's sessions
}

export const useDetox = () => {
    const [status, setStatus] = useState<'idle' | 'running' | 'report'>('idle');
    const [sessionSeconds, setSessionSeconds] = useState(0);
    const [dailySeconds, setDailySeconds] = useState(0);
    const [today, setToday] = useState('');
    const [sessions, setSessions] = useState<Session[]>([]);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const startTimeRef = useRef<number | null>(null);

    const getTodayString = () => {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    };

    useEffect(() => {
        const currentToday = getTodayString();
        setToday(currentToday);

        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const data: StorageData = JSON.parse(saved);

            if (data.date !== currentToday) {
                // New day reset
                setDailySeconds(0);
                setSessions([]);

                if (data.sessionStart) {
                    // Carry over: Resume counting from saved sessionStart
                    startTimeRef.current = data.sessionStart;
                    const now = Date.now();
                    const duration = Math.floor((now - data.sessionStart) / 1000);
                    setSessionSeconds(duration);
                    setStatus('running');
                    startTimer();
                } else {
                    setStatus('idle');
                }

                saveToStorage({
                    date: currentToday,
                    dailyTotal: 0,
                    sessionStart: data.sessionStart,
                    isReportOpen: false,
                    sessions: []
                });

            } else {
                // Same day restore
                setDailySeconds(data.dailyTotal);
                setSessions(data.sessions || []);

                if (data.sessionStart) {
                    startTimeRef.current = data.sessionStart;
                    const now = Date.now();
                    const duration = Math.floor((now - data.sessionStart) / 1000);
                    setSessionSeconds(duration);
                    setStatus('running');
                    startTimer();
                } else if (data.isReportOpen) {
                    setStatus('report');
                } else {
                    setStatus('idle');
                }
            }
        } else {
            // Init
            saveToStorage({
                date: currentToday,
                dailyTotal: 0,
                sessionStart: null,
                isReportOpen: false,
                sessions: []
            });
        }

        return () => stopTimer();
    }, []);

    // [NEW] Real-time date change check
    useEffect(() => {
        if (!today) return; // Wait for init

        const checkDate = () => {
            const current = getTodayString();
            if (current !== today) {
                // Date changed (Midnight transition)
                setToday(current);
                setDailySeconds(0);
                setSessions([]);

                // Update storage for the new day
                // We keep the current session running (startTimeRef) if it exists
                saveToStorage({
                    date: current,
                    dailyTotal: 0,
                    sessionStart: startTimeRef.current,
                    isReportOpen: status === 'report',
                    sessions: []
                });
            }
        };

        const timer = setInterval(checkDate, 1000); // Check every second
        return () => clearInterval(timer);
    }, [today, status]);

    const saveToStorage = (data: StorageData) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    };

    const startTimer = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        // Immediate update
        updateTimer();

        intervalRef.current = setInterval(() => {
            updateTimer();
        }, 1000);
    };

    const updateTimer = () => {
        if (startTimeRef.current) {
            const now = Date.now();
            const elapsed = Math.floor((now - startTimeRef.current) / 1000);
            setSessionSeconds(elapsed);
        }
    };

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const start = () => {
        const now = Date.now();
        startTimeRef.current = now;
        setStatus('running');
        setSessionSeconds(0);
        startTimer();

        saveToStorage({
            date: getTodayString(),
            dailyTotal: dailySeconds,
            sessionStart: now,
            isReportOpen: false,
            sessions: sessions
        });
    };

    const stop = () => {
        stopTimer();

        // Final calculation
        let finalSessionSeconds = sessionSeconds;
        if (startTimeRef.current) {
            const now = Date.now();
            finalSessionSeconds = Math.floor((now - startTimeRef.current) / 1000);
        }

        const newTotal = dailySeconds + finalSessionSeconds;
        // Accurate start time reconstruction
        const startTime = startTimeRef.current || (Date.now() - finalSessionSeconds * 1000);

        const newSession: Session = { timestamp: startTime, duration: finalSessionSeconds };
        // Cap at 100 sessions
        const newSessions = [...sessions, newSession].slice(-100);

        setDailySeconds(newTotal);
        setSessions(newSessions);

        setStatus('idle');
        setSessionSeconds(0);
        startTimeRef.current = null;

        saveToStorage({
            date: getTodayString(),
            dailyTotal: newTotal,
            sessionStart: null,
            isReportOpen: false,
            sessions: newSessions
        });
    };

    const openReport = () => {
        setStatus('report');
        saveToStorage({
            date: getTodayString(),
            dailyTotal: dailySeconds,
            sessionStart: null,
            isReportOpen: true,
            sessions: sessions
        });
    };

    const closeReport = () => {
        setStatus('idle');
        saveToStorage({
            date: getTodayString(),
            dailyTotal: dailySeconds,
            sessionStart: null,
            isReportOpen: false,
            sessions: sessions
        });
    };

    const resetData = () => {
        setDailySeconds(0);
        setSessions([]);

        saveToStorage({
            date: getTodayString(),
            dailyTotal: 0,
            sessionStart: startTimeRef.current, // Keep current session if running
            isReportOpen: status === 'report',
            sessions: []
        });
    };

    return {
        status,
        sessionSeconds,
        dailySeconds,
        sessions,
        today,
        start,
        stop,
        openReport,
        closeReport,
        resetData
    };
};
