export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [k: string]: any;
};

export function pageview(url: string) {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === 'undefined') return;
  if (!(window as any).gtag) return;
  (window as any).gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: url,
    page_title: document.title,
  });
}

export function event({ action, category, label, value, ...rest }: GTagEvent) {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === 'undefined') return;
  if (!(window as any).gtag) return;
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    ...rest,
  });
}

export default { GA_MEASUREMENT_ID, pageview, event };
