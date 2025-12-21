import settings from "../settings/appsettings"

export const generateShortLink = async (longUrl: string) => {
  try {
    const response = await fetch(`${settings.apiUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Url: longUrl }),
    });

    if (!response.ok) {
      throw new Error("Error gererating short link");
    }

    const data = await response.json();
    data.shortenedUrl = settings.domain + data.shortenedUrl;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
