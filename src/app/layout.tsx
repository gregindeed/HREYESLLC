import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "H REYES LLC — Family Holdings",
  description:
    "H Reyes LLC is a private family holdings company managing diversified assets across real estate, ventures, and legacy investments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Theme
          appearance="dark"
          accentColor="gold"
          grayColor="sand"
          radius="small"
          scaling="100%"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
