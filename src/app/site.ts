/**
 * Single source of truth for the canonical URL and the identity details that
 * feed metadata, the sitemap, robots.txt and the Person structured data.
 *
 * NEXT_PUBLIC_SITE_URL overrides the default, which is the domain currently
 * serving the site. Note that manifest.ts points at https://kamensgh.com —
 * once that domain is attached to the project, set it here (or via the env
 * var) and everything else follows.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://kamensgh.vercel.app";

export const PERSON = {
  name: "Kwame Mensah",
  alternateName: "Kwame Ampoma Mensah",
  jobTitle: "Frontend Engineer",
  email: "kamensgh@gmail.com",
  github: "https://github.com/kamensgh",
  linkedin: "https://www.linkedin.com/in/kwame-mensah/",
  cv: "/Kwame_Mensah.pdf",
} as const;

export const TITLE = "Kwame Mensah – Frontend Engineer (React, React Native)";

export const DESCRIPTION =
  "Frontend engineer building React and React Native products — payments, " +
  "fintech and public-sector platforms including GHANA.GOV, Hubtel and the " +
  "ECG PowerApp.";
