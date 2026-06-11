import type { Metadata } from "next";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

const baseUrl = "https://velorastudio.com";

export function createMetadata({ title, description, path = "/" }: MetadataInput): Metadata {
  const url = new URL(path, baseUrl);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Velora Studio",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    alternates: {
      canonical: url
    }
  };
}
