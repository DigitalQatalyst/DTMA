import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
// THEME PROVIDER
import StyledComponentsRegistry from "@lib/registry";
// APP PROVIDER
import { AppProvider } from "@context/app-context";
import StyledContext from "@context/StyledContext";
// THIRD PARTY CSS FILE
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NProgressBar from "@component/NProgress";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DTMA",
  description:
    "Digital Transformation Management Academy",
  authors: [{ name: "UI-LIB", url: "https://ui-lib.com" }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react", "bonik"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <StyledComponentsRegistry>
          <AppProvider>
            <StyledContext>
              {children}
              <NProgressBar />
            </StyledContext>
          </AppProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
