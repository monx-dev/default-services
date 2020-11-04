import admin from 'firebase-admin';

export const firebase = () => {
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      }),
      databaseURL: 'https://platform-8cf3f.firebaseio.com',
    });
  }

  return admin;
};

export type Firebase = typeof admin;
