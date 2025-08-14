'use client';
import type { Metadata } from "next";
import "./globals.scss";
import "../styles/global.css";
import { Outfit, Jost, Crimson_Pro } from "next/font/google";
import CourseProvider from "@/components/provider/course-provider";
// import { ApolloProvider } from '@apollo/client'; // NEW: Add Apollo Provider
// import { apolloClient } from '@/lib/apollo-client'; // NEW: Import Apollo Client

const outfit_bold = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-body",
});
const outfit_heading = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-heading",
});
const outfit_p = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-p",
});
const jost_primary = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-primary",
});
const crismon_secondary = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-secondary",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit_bold.variable} ${outfit_heading.variable} ${outfit_p.variable} ${jost_primary.variable} ${crismon_secondary.variable}`}
      >
        <CourseProvider>
          {children}
        </CourseProvider>
        {/* NEW: Wrap with Apollo Provider */}
        {/* <ApolloProvider client={apolloClient}>
          {children}
        </ApolloProvider> */}
      </body>
    </html>
  );
}