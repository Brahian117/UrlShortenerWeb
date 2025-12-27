import settings from "../settings/appsettings"

export const wakeUpDb = async () => {
      try {
       const response = await fetch(`${settings.wakeupUrl}`);
       console.log(response.text());
      } catch (error) {
        console.error("Timing error", error);
        
      }
    };