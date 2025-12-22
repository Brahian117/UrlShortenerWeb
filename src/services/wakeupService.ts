import settings from "../settings/appsettings"

export const wakeUpDb = async () => {
      try {
        await fetch(`${settings.wakeupUrl}`);
        console.log("DB awake!");
      } catch (error) {
        console.error("Timing error", error);
      }
    };