import { useEffect } from "react";
import { useParams } from "react-router-dom";
import settings from "../settings/appsettings"


export function RedirectPage() {
  const { code } = useParams();
const url = `${settings.apiUrl}/${code}`;

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
  }, [code, url]);

  return <p className="text-white text-center mt-10">Redirecting…</p>;
}
