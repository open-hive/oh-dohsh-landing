"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen flex items-center justify-center bg-white py-20 px-4">
          <div className="w-full max-w-lg text-center">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Something went wrong
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mt-3">
              The site failed to load. Reloading usually fixes it.
            </p>

            {error.digest && (
              <p className="text-gray-400 text-xs font-mono mt-4">Reference: {error.digest}</p>
            )}

            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center px-6 py-3.5 mt-8 bg-[#0092CE] text-white rounded-2xl font-semibold hover:bg-[#01B9EB] transition-colors"
            >
              Reload the site
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}