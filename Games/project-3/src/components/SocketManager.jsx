import React, { useEffect } from 'react';
import io from 'socket.io-client';

const SocketManager = () => {
  const socket = io('http://your-server-address');

  useEffect(() => {
    socket.on('codeUpdated', () => {
      console.log('Code updated! Reloading the application...');
      window.location.reload(); // Or more granular reload logic
    });

    // Cleanup function to disconnect socket on component unmount
    return () => socket.disconnect();
  }, []);
  socket.emit('codeUpdated');

  return null; // This component doesn't render anything
};

export default SocketManager;
