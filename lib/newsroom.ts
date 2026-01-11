export type Newsroom = {
  _id: string;
  headline: string;
  summary: string;
  image: {
    asset: {
      url: string;
      _id: string;
    };
    alt?: string;
  };
  date: string;
  link?: string;
  category: string;
};

export async function fetchNewsroom(): Promise<Newsroom[]> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

  if (!projectId) {
    return [];
  }

  const groq = `*[_type == "newsroom"]{_id, headline, summary, date, link, category, image{alt, asset->{_id, url}}}|order(date desc)`;
  const url = `https://${projectId}.api.sanity.io/v2023-10-21/data/query/${dataset}?query=${encodeURIComponent(groq)}`;

  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    throw new Error(`Failed to fetch Sanity newsroom: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  return json.result || [];
}
