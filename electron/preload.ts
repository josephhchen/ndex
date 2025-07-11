import { contextBridge } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  // Add any API methods you want to expose to the renderer process
  // For example:
  // sendMessage: (message: string) => ipcRenderer.send('message', message),
  // onMessage: (callback: (message: string) => void) => ipcRenderer.on('message', callback),
});

// TypeScript declarations for the exposed API
declare global {
  interface Window {
    electronAPI: {
      // Add your API methods here
      // sendMessage: (message: string) => void;
      // onMessage: (callback: (message: string) => void) => void;
    };
  }
} 