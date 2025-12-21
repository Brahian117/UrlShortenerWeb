import { useState } from "react";
import { generateShortLink } from "../../services/urlService";
export const Hero = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await generateShortLink(url);
      setShortUrl(result.shortenedUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Server error, contact admin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-bg-main text-text-main">
      <div className="card w-full max-w-xl">
        <h1 className="text-4xl font-bold text-center mb-4">URL Shortener</h1>
        <p className="text-center text-text-muted mb-8">
          Paste a long URL and generate a short link
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="url"
            placeholder="https://example.com/very/long/url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="input-base"
          />

          <button
            type="submit"
            className="btn-primary cursor-pointer"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate short link"}
          </button>
        </form>

        {shortUrl && (
          <p className="mt-4 text-center text-success">
            Short URL: <a href={shortUrl}>{shortUrl}</a>
          </p>
        )}

        {error && <p className="mt-4 text-center text-error">{error}</p>}
      </div>
    </section>
  );
};
