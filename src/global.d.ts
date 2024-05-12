interface Window {
    gtag: (command: string, trackingId: string, options?: Record<string, any>) => void;
    dataLayer: any[];
    _paq: any[];
  }