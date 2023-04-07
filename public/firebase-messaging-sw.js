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
        apiKey: "AIzaSyBT6kSfbc6qBJvKwV86SBjl0M4nmVoIFV4",
        authDomain: "rgb-treasury1.firebaseapp.com",
        projectId: "rgb-treasury1",
        storageBucket: "rgb-treasury1.appspot.com",
        messagingSenderId: "1078633825069",
        appId: "1:1078633825069:web:15ade4962fcd40e13409a4",
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
