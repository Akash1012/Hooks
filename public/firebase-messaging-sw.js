importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
const firebaseConfig = {
  apiKey: "AIzaSyClr6vfcXLBdJOiOR4YcDp1-fUmKw7nfIQ",
  authDomain: "push-835d4.firebaseapp.com",
  projectId: "push-835d4",
  storageBucket: "push-835d4.appspot.com",
  messagingSenderId: "45023312408",
  appId: "1:45023312408:web:f72c349a95418bced2216d",
  measurementId: "G-GZY361Z03C",
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
