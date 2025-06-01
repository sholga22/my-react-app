import { useState, useCallback } from 'react';

type SendData = {
    title: string;   // event wich must be sendet 
    [key: string]: any; // and athers parameters
};

export function useSendToMake() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const send = useCallback(async (data: SendData) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            console.log("Try to send:", data);
            const response = await fetch('https://hook.eu2.make.com/f5camrl3e2koelc8th968bz4ti85pwur', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),  // send event
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            setSuccess(true);
        } catch (err: any) {
            setError(err.message || 'Unknown error');
        } finally {
            setLoading(false);
        }
    }, []);

    return { send, loading, error, success };
}