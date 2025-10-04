import { useEffect, useState } from "react";

const SHEET_ID = "1wjVwbCJ8p3l-WAJ7s2fMqK5uHBEatodgVc6wJoW7ksg";
const API_KEY = "AIzaSyCEJHF8faiqlEzqDc-IKR9Xpsol9VMOFjI";
const SHEET_NAME = "portada";

export function useGoogleImages() {
  const [images, setImages] = useState({
    img1: "",
    img2: "",
    logo: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      setError(null);
      try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}!A2:B4?key=${API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("No se pudo obtener la hoja de cálculo");
        const data = await res.json();
        const values = data.values || [];
        // Buscar por nombre en la columna A
        let portada = "";
        let galeria = "";
        let logo = "";
        values.forEach(row => {
          if (row[0] === "Portada") portada = row[1];
          if (row[0] === "Galeria") galeria = row[1];
          if (row[0] === "Logo") logo = row[1];
        });
        // Si la URL no es absoluta, forzar ruta local
        const fixUrl = (url: string, fallback: string) => {
          if (url && /^https?:\/\//.test(url)) return url;
          return fallback;
        };
        setImages({
          img1: fixUrl(portada, "/imgp/1.webp"),
          img2: fixUrl(galeria, "/imgp/2.webp"),
          logo: fixUrl(logo, "/imgp/logo.webp")
        });
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  return { ...images, loading, error };
}
