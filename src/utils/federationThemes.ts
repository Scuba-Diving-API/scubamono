// Color themes for different sports federations
export const federationThemes = {
  diving: {
    primary: "var(--color-brightblue)",
    secondary: "var(--color-darkblue)",
    accent: "var(--color-cyan-600)",
    className: "theme-diving",
  },
  icehockey: {
    primary: "var(--color-diuprimary)",
    secondary: "var(--color-diusecondary)",
    accent: "var(--color-diuaccent)",
    className: "theme-icehockey",
  },
  bueskydning: {
    primary: "#2e7d32",  // green-800
    secondary: "#1b5e20", // green-900
    accent: "#66bb6a",    // green-400
    className: "theme-bueskydning",
  },
  swimming: {
    primary: "#0099cc",
    secondary: "#006699",
    accent: "#b3e6ff",
    className: "theme-swimming",
  },
  sailing: {
    primary: "#4b5eab",
    secondary: "#2c366e",
    accent: "#d6ddf7",
    className: "theme-sailing",
  },
  rowing: {
    primary: "#d9534f",
    secondary: "#c9302c",
    accent: "#f7d6d5",
    className: "theme-rowing",
  },
  triathlon: {
    primary: "#5cb85c",
    secondary: "#449d44",
    accent: "#ddf2dd",
    className: "theme-triathlon",
  },
  canoekayak: {
    primary: "#f0ad4e",
    secondary: "#ec971f",
    accent: "#fcefdc",
    className: "theme-canoekayak",
  },
};

// Get theme colors based on federation ID
export const getThemeColors = (federationId: string) => {
  return federationThemes[federationId as keyof typeof federationThemes] || federationThemes.diving;
};
