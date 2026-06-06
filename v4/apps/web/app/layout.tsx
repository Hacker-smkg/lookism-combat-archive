import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../components/providers";
import { AppShell } from "../components/app-shell";

export const metadata: Metadata = {
  title: "Lookism System V4",
  description: "Next.js + Expo V4 MVP for the Lookism-inspired System training app."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
