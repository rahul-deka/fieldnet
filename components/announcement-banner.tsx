import { AnnouncementBannerClient } from "./announcement-banner-client";

async function getAnnouncement() {
  try {
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    
    if (!scriptUrl) {
      return null;
    }

    const response = await fetch(`${scriptUrl}?action=getAnnouncement`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (data && data.status === 'active') {
      return data;
    }

    return null;
  } catch (error) {
    console.error('Failed to fetch announcement:', error);
    return null;
  }
}

export async function AnnouncementBanner() {
  const announcement = await getAnnouncement();

  if (!announcement) {
    return null;
  }

  return <AnnouncementBannerClient announcement={announcement} />;
}
