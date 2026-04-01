declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

function gtag(...args: Parameters<Window["gtag"]>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

// CTA buttons in the hero section
export function trackCtaClick(buttonLabel: string) {
  gtag("event", "cta_click", {
    event_category: "engagement",
    event_label: buttonLabel,
  });
}

// Project modal opened
export function trackProjectView(projectId: string, projectTitle: string) {
  gtag("event", "project_view", {
    event_category: "portfolio",
    event_label: projectTitle,
    project_id: projectId,
  });
}

// Contact section — Calendly or email CTA
export function trackContactClick(contactType: "calendly" | "email") {
  gtag("event", "contact_click", {
    event_category: "conversion",
    event_label: contactType,
  });
}

// Social link clicks (LinkedIn, GitHub, Twitter)
export function trackSocialClick(platform: string) {
  gtag("event", "social_click", {
    event_category: "engagement",
    event_label: platform,
  });
}

// Navbar section navigation
export function trackNavClick(section: string) {
  gtag("event", "nav_click", {
    event_category: "navigation",
    event_label: section,
  });
}
