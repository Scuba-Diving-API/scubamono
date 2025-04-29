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
    primary: "var(--color-pink)",
    secondary: "var(--color-bueblue)",  
    accent: "var(--color-gray)",
    className: "theme-bueskydning",
  },
  skydiving: {
    primary: "#1e3a8a", // blue-900
    secondary: "#1e40af", // blue-800
    accent: "#93c5fd", // blue-300
    className: "theme-skydiving",
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
