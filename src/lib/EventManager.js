export default class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(callback);
  }

  emit(event, payload) {
    if (!this.listeners.has(event)) return;

    this.listeners.get(event).forEach((callback) => {
      callback(payload);
    });
  }

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners.get(event);

    if (!listeners) return;

    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerToRemove
    );

    this.listeners.set(event, filteredListeners);
  }
}
