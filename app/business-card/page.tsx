import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { COMPANY, getAllSlugs, getPerson } from "./../../data/people";

export default function BusinessCardIndex() {
  const team = getAllSlugs()
    .map((slug) => getPerson(slug))
    .filter((person) => person !== undefined);

  return (
    <section className="flex-1 bg-light py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-dark font-heading tracking-tight">
            Digital business cards
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Save a contact or share a card from the {COMPANY.name} team.
          </p>
        </div>

        <div className="space-y-3">
          {team.map((person) => (
            <Link
              key={person.slug}
              href={`/business-card/${person.slug}`}
              className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:border-primary/30 hover:shadow-md transition-all group"
            >
              <span className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 relative shrink-0">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </span>
              <span className="min-w-0">
                <span className="block text-dark font-semibold font-heading truncate">
                  {person.name}
                </span>
                <span className="block text-gray-500 text-sm truncate">{person.role}</span>
              </span>
              <ArrowRight className="w-5 h-5 text-gray-300 ml-auto shrink-0 group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}