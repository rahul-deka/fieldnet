import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

  if (!projectId) {
    return NextResponse.json({ error: 'Configuration error' }, { status: 500 });
  }

  // Fetch resource by ID
  const groq = `*[_type == "resource" && _id == "${id}"][0]{
    pdfFile{
      asset->{
        _id,
        url
      }
    }
  }`;

  const url = `https://${projectId}.api.sanity.io/v2023-10-21/data/query/${dataset}?query=${encodeURIComponent(groq)}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
    }

    const json = await res.json();
    const resource = json.result;

    if (!resource?.pdfFile?.asset?.url) {
      return NextResponse.json({ error: 'PDF not found' }, { status: 404 });
    }

    // Redirect to Sanity CDN URL
    return NextResponse.redirect(resource.pdfFile.asset.url);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch resource' }, { status: 500 });
  }
}
