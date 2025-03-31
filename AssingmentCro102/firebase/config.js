import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // ✅ Thêm Firestore
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDaDpkUpMENtl0GfOcLf3HGayriWW-uGHU",
  authDomain: "asmcro102-6714b.firebaseapp.com",
  projectId: "asmcro102-6714b",
  storageBucket: "asmcro102-6714b.firebasestorage.app",
  messagingSenderId: "1098719307293",
  appId: "1:1098719307293:web:906c011a0869dcd15248f4",
  measurementId: "G-5T6K508YM1"
};

const app = initializeApp(firebaseConfig);

// ✅ Sử dụng AsyncStorage để duy trì trạng thái đăng nhập
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// ✅ Khởi tạo Firestore
const db = getFirestore(app);

export { app, auth, db };