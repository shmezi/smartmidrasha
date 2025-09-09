// useWebSocket.js
import { useEffect, useState } from 'react';
import websocketService from './websocketService';


export function useWebSocket(messageType) {
    const [messages, setMessages] = useState([]);
    const [isConnected, setIsConnected] = useState(websocketService.isConnected);


    useEffect(() => {
        // Connect to WebSocket
        websocketService.connect();


        // Add message listeners
        const messageCallback = (data) => {
            setMessages(prev => [...prev, data]);
        };


        const connectCallback = () => {
            setIsConnected(true);
        };


        const disconnectCallback = () => {
            setIsConnected(false);
        };


        websocketService.addCallbacks(messageType, messageCallback);
        websocketService.addCallbacks('connect', connectCallback);
        websocketService.addCallbacks('disconnect', disconnectCallback);


        // Cleanup
        return () => {
            websocketService.removeCallbacks(messageType, messageCallback);
            websocketService.removeCallbacks('connect', connectCallback);
            websocketService.removeCallbacks('disconnect', disconnectCallback);
        };
    }, [messageType]);


    const sendMessage = (data) => {
        return websocketService.sendMessage({
            type: messageType,
            ...data
        });
    };


    return {
        messages,
        isConnected,
        sendMessage
    };
}