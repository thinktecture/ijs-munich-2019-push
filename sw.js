self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('push', event => {
    const notification = event.data.json();
    self.registration.showNotification(notification.title, notification);
});
