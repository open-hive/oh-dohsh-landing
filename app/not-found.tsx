import Link from "next/link";
import { Home, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center bg-light py-20 px-4">
      <div className="w-full max-w-lg text-center">
        <p className="text-primary font-bold font-heading text-6xl">404</p>

        <h1 className="text-2xl font-bold text-dark font-heading tracking-tight mt-4">
          We can&apos;t find that page
        </h1>
        <p className="text-gray-500 text-sm leading-relaxed mt-3 max-w-md mx-auto">
          The page may have moved, or the link may be incomplete. Check the address, or head back
          to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-primary text-white rounded-2xl font-semibold shadow-lg shadow-primary/30 hover:bg-secondary transition-colors"
          >
            <Home className="w-5 h-5" />
            Back to homepage
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}