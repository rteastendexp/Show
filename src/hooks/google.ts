import { useEffect, useState } from "react";

const SHEET_ID = "1wjVwbCJ8p3l-WAJ7s2fMqK5uHBEatodgVc6wJoW7ksg";
const API_KEY = "AIzaSyCEJHF8faiqlEzqDc-IKR9Xpsol9VMOFjI";
const SHEET_NAME = "portada";

export function useGoogleImages() {
  // Forzar imágenes locales
  const [images, setImages] = useState({
    img1: "/imgp/1.webp",
    img2: "/imgp/2.webp",
    logo: "/imgp/logo.webp"
  });
  // No fetch, solo imágenes locales
  return { ...images, loading: false, error: null };
}
