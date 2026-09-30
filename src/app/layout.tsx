import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SITE_URL, PERSON, TITLE, DESCRIPTION } from "./site";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase lets the relative image paths below resolve to absolute URLs,
  // which is what crawlers and link unfurlers require.
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Kwame Mensah",
  },
  description: DESCRIPTION,
  applicationName: "Kwame Mensah",
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  keywords: [
    "Kwame Mensah",
    "Frontend Engineer",
    "React Developer",
    "React Native Developer",
    "Next.js",
    "TypeScript",
    "Ghana",
    "Fintech",
    "Payments",
  ],
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: PERSON.name,
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_GB",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kwame Mensah — Frontend Engineer, React and React Native",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// Person markup is what search engines and AI assistants read to work out who
// this site is about, and to tie it to the same person's other profiles.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON.name,
  alternateName: PERSON.alternateName,
  jobTitle: PERSON.jobTitle,
  description: DESCRIPTION,
  url: SITE_URL,
  email: `mailto:${PERSON.email}`,
  image: `${SITE_URL}/images/abstract.png`,
  sameAs: [PERSON.github, PERSON.linkedin],
  knowsAbout: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Vue.js",
    "Frontend Engineering",
    "Payments",
    "Fintech",
  ],
  subjectOf: {
    "@type": "DigitalDocument",
    name: "Kwame Mensah — CV",
    url: `${SITE_URL}${PERSON.cv}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          // Serialised from a literal we control, so there is no user input to escape.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
