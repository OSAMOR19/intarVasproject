import type { Metadata } from "next";
import "../src/index.css";
import { ClientProviders } from "@/components/providers/ClientProviders";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import LoadingScreen from "@/components/common/LoadingScreen";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "IntarVAS - Smart Telecom Solutions",
  description: "Transform your business communication with IntarVAS",
  icons: {
    icon: [
      {
        url: "/intarvasfavicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/intarvasfavicon.svg",
    apple: "/intarvasfavicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          async
          src="https://support.ccaas.intarvas.com/callback.js?uid=14626ee5-9eb1-4d63-8152-2d98cef8d037"
          charSet="utf-8"
        ></script>
      </head>
      <body>
        <ClientProviders>
          <LoadingScreen />
          <Toaster />
          <Sonner />
          <SiteHeader />
          {children}
          <SiteFooter />
        </ClientProviders>
      </body>
    </html>
  );
}

