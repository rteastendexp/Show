import { useEffect, useState } from 'react';

export interface ContactoPagina {
  id: string;
  tel_1: string;
  tel_2: string;
  correo: string;
  instagram: string;
  facebook: string;
  whatsapp: string;
}

interface UseContactosPaginaResult {
  contactos: ContactoPagina[];
  loading: boolean;
  error: string | null;
}

const API_KEY = "AIzaSyCEJHF8faiqlEzqDc-IKR9Xpsol9VMOFjI"; // tu API key real
const SPREADSHEET_ID = "1wjVwbCJ8p3l-WAJ7s2fMqK5uHBEatodgVc6wJoW7ksg"; // tu ID de hoja real
const SHEET_NAME = 'contactos_de_pagina';

export function useContactosPagina(): UseContactosPaginaResult {
  const [contactos, setContactos] = useState<ContactoPagina[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContactos() {
      setLoading(true);
      setError(null);
      try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('No se pudo obtener los contactos');
        const data = await res.json();
        const [header, ...rows] = data.values;
        const contactosData: ContactoPagina[] = rows.map((row: string[]) => {
          const obj: any = {};
          header.forEach((col: string, i: number) => {
            obj[col] = row[i] || '';
          });
          return obj as ContactoPagina;
        });
        setContactos(contactosData);
      } catch (e: any) {
        setError(e.message || 'Error desconocido');
      } finally {
        setLoading(false);
      }
    }
    fetchContactos();
  }, []);

  return { contactos, loading, error };
}
