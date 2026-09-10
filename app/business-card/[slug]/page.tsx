import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BusinessCard from "./../../../components/BusinessCard";
import { COMPANY, getAllSlugs, getPerson } from "./../../../data/people";

// Only the slugs in the dictionary are built — anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);

  if (!person) {
    return { title: "Digital Business Card | DOHSH All Safety Consultancy" };
  }

  const company = person.company ?? COMPANY.name;

  return {
    title: `${person.name} | Digital Business Card`,
    description: `Digital business card for ${person.name}, ${person.role} of ${company}.`,
    openGraph: {
      title: `${person.name} | ${company}`,
      description: `${person.role}, ${company}`,
      images: [person.photo],
    },
  };
}

export default async function BusinessCardPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = getPerson(slug);

  if (!person) {
    notFound();
  }

  return <BusinessCard person={person} />;
}