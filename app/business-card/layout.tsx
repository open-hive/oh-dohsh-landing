import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Business Card | DOHSH All Safety Consultancy",
  description: "Digital business cards for the DOHSH All Safety Consultancy team.",
};

export default function BusinessCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}