if('function' === typeof importScripts) {
    const firebaseVersion = '8.9.1';

    importScripts("https://www.gstatic.com/firebasejs/" + firebaseVersion + "/firebase-app.js");
    importScripts("https://www.gstatic.com/firebasejs/" + firebaseVersion + "/firebase-messaging.js");
    addEventListener('message', onMessage);

    function onMessage(e) {
        console.log(e)
    }

    // Initialize the Firebase app in the service worker by passing in the
    // messagingSenderId.
    const firebaseConfig = {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
    };

    firebase.initializeApp(firebaseConfig);

    // Retrieve an instance of Firebase Messaging so that it can handle background messages.
    const messaging = firebase.messaging();

    messaging.onBackgroundMessage(function(payload) {
        // do some work here

        /*
        if (!payload.notification && payload.webpush && payload.webpush.notification) {
            const notificationTitle = payload.webpush.notification.title;
            const notificationOptions = payload.webpush.notification;

            if (notificationOptions.image && !notificationOptions.icon) {
                notificationOptions.icon = notificationOptions.image;
            }

            return self.registration.showNotification(
                notificationTitle,
                notificationOptions
            );
        }
        */
    });
}
