"use client";

import { usePathname } from "next/navigation";
import { getAllSlugs } from "./../../data/people";

// Individual business cards render without the site navbar and footer.
// Everything else — including /business-card itself and any 404 under it —
// keeps the chrome so people are never stranded without navigation.
const chromeFreeRoutes = getAllSlugs().map((slug) => `/business-card/${slug}`);

export default function LayoutShell({
  navbar,
  footer,
  children,
}: {
  navbar: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideChrome = chromeFreeRoutes.includes(pathname.replace(/\/$/, ""));

  return (
    <>
      {!hideChrome && navbar}
      {children}
      {!hideChrome && footer}
    </>
  );
}