"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCw, Home } from "lucide-react";

export default function Error({
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
    <section className="flex-1 flex items-center justify-center bg-light py-20 px-4">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold text-dark font-heading tracking-tight">
          Something went wrong on this page
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mt-3 max-w-md mx-auto">
          The page failed to load. Try again, and if it keeps happening let us know what you were
          doing at the time.
        </p>

        {error.digest && (
          <p className="text-gray-400 text-xs font-mono mt-4">Reference: {error.digest}</p>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={reset}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-primary text-white rounded-2xl font-semibold shadow-lg shadow-primary/30 hover:bg-secondary transition-colors"
          >
            <RotateCw className="w-5 h-5" />
            Try again
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}