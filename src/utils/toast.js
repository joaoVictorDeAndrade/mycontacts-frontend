import EventManager from '../lib/EventManager.js';

export const toastEventManager = new EventManager();

export function toast({ type, text, duration }) {
  toastEventManager.emit('add-toast', { type, text, duration });
}
