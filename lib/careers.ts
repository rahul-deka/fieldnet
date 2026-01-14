import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'gnx2wo2k',
  dataset: 'production',
  apiVersion: '2023-10-21',
  useCdn: true,
});

export async function fetchCareers() {
  return client.fetch(`*[_type == "career"]|order(_createdAt desc){
    _id,
    title,
    location,
    type,
    experience,
    qualification,
    about,
    responsibilities,
    ideal,
    why
  }`);
}
