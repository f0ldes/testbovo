
/* Global site tag tool: (google analytics) */

export const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-P9YDS7KZPH';

//possible types:
type GTagEvent = {
    action: string;
    category?: string;
    label?: string;
    value?: number;
}

export const pageview = (url: string) => {
    if (GA_TRACKING_ID) {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: url,
        });
      } else {
        console.warn("Google Analytics Tracking ID is missing");
      }
};

if (!GA_TRACKING_ID) {
    console.warn("Google Analytics Tracking ID is not defined");
}

export const event = ({ action, category, label, value  }: GTagEvent) => {
    if (GA_TRACKING_ID) {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value,
        });
      } else {
        console.warn("Google Analytics Tracking ID is missing");
      }
};

