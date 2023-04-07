import { Messaging, getMessaging, getToken } from 'firebase/messaging';
import { initializeApp } from 'firebase/app';
import { toast } from 'react-toastify';

type ICallback = (token: string) => void;

class FirebasePlugin {
  messaging: Messaging | undefined;

  static get instance() {
    return new FirebasePlugin();
  }

  constructor() {
    if (!this.messaging) this.getFirebaseInstance();
  }

  getFirebaseInstance() {
    const firebaseInit = initializeApp({
      apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
      appId: import.meta.env.VITE_FIREBASE_APPID,
    });

    this.messaging = getMessaging(firebaseInit);
  }

  async getFcmToken(callback: ICallback) {
    try {
      const token = await getToken(this.messaging as Messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPIDKEY,
      });

      if (!token)
        toast.error(
          'No Token Found, Request the permission notification to generate the token'
        );

      callback(token);
    } catch (error) {
      toast.error('An error while retrive the token');
    }
  }
}

export default FirebasePlugin;
