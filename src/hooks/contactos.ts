import { useState } from "react";

const ENDPOINT = "https://script.google.com/macros/s/AKfycbwnKRWjTpaJh1l1_Pnw1dpxXEFGyMwCa0qRRqFJpMnN9VZIFHHxEPtxaq7wuQUUWosEZQ/exec";

export function useContactos() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendContact = async ({ nombre, email, telefono, mensaje }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const params = new URLSearchParams({
        nombre,
        email,
        telefono: telefono || "",
        mensaje
      });
      const res = await fetch(`${ENDPOINT}?${params.toString()}`);
      if (!res.ok) throw new Error("No se pudo enviar el mensaje");
      setSuccess(true);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { sendContact, loading, error, success };
}
