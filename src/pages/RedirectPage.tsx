import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function RedirectPage() {
  const { code } = useParams();
const url = `${import.meta.env.VITE_API_URL}/${code}`;

  useEffect(() => {
    async function resolve() {
      try {
        const res = await fetch(
          url
        );

        if (!res.ok) throw new Error();

        const { longUrl } = await res.json();
        window.location.replace(longUrl);
      } catch {
        window.location.replace("/");
      }
    }

    if (code) resolve();
  }, [code]);

  return <p className="text-white text-center mt-10">Redirigiendo…</p>;
}
