import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doris Kehinana | Digital Business Card",
  description: "Digital Business Card for Doris Kehinana, Founder & CEO of DOHSH.",
};

export default function BusinessCardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
