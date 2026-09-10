"use client";

import { usePathname } from "next/navigation";

// Routes that render without the site navbar and footer
const chromeFreeRoutes = ["/business-card"];

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
  const hideChrome = chromeFreeRoutes.some((route) =>
    pathname.replace(/\/$/, "").startsWith(route)
  );

  return (
    <>
      {!hideChrome && navbar}
      {children}
      {!hideChrome && footer}
    </>
  );
}