import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAxjPoI0E84ZNCZZqU4FDOXS9QUvkiTTKg",
  authDomain: "cro102-2c07a.firebaseapp.com",
  projectId: "cro102-2c07a",
  storageBucket: "cro102-2c07a.appspot.com", // Fix lỗi storageBucket
  messagingSenderId: "785019437704",
  appId: "1:785019437704:web:69164c9f6279792a64553d",
};

// Khởi tạo Firebase App
const app = initializeApp(firebaseConfig);

// Khởi tạo Firestore
const db = getFirestore(app);

// Khởi tạo Auth với AsyncStorage để lưu trạng thái đăng nhập
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, db, auth };
