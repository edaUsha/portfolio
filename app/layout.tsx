import type { Metadata } from "next";
import { Inter, Space_Grotesk, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Usha Rao Patteti — Data Scientist & ML Engineer",
  description:
    "Portfolio of Usha Rao Patteti, a Data Analytics graduate specializing in Machine Learning, NLP, Computer Vision, and Generative AI. Building intelligent solutions that solve real-world problems.",
  keywords: [
    "Data Scientist",
    "Machine Learning Engineer",
    "NLP",
    "Computer Vision",
    "Generative AI",
    "RAG",
    "Python",
    "LangChain",
    "Chennai",
    "India",
  ],
  authors: [{ name: "Usha Rao Patteti" }],
  creator: "Usha Rao Patteti",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://usharao.dev",
    title: "Usha Rao Patteti — Data Scientist & ML Engineer",
    description:
      "Building intelligent solutions using Machine Learning, NLP, Computer Vision and Generative AI.",
    siteName: "Usha Rao Patteti Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usha Rao Patteti — Data Scientist & ML Engineer",
    description:
      "Building intelligent solutions using Machine Learning, NLP, Computer Vision and Generative AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${dancingScript.variable}`}
    >
      <body className="font-body antialiased bg-white text-navy-900">
        {children}
      </body>
    </html>
  );
}
