'use client'
import {useEffect, useState} from 'react';
import {socket} from "@/socket";


export default function Chat() {
    const [message, setMessage] = useState('');

    useEffect(() => {

    }, []);

    const sendMessage = () => {
        if (socket && message.trim()) {
            socket.emit('message', message);
            setMessage('');
        }
    };

    return (
        <div>

        </div>
    );
}