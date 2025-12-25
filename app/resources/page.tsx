import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import BackToTopButton from "@/components/back-to-top";
import Reveal from "@/components/reveal";
import { fetchResources, type Resource } from "@/lib/sanity";
import { FileText, Eye } from "lucide-react";

export const revalidate = 60; // Revalidate every 60 seconds

async function getResources() {
  try {
    return await fetchResources();
  } catch (error) {
    console.error("Failed to fetch resources:", error);
    return [];
  }
}

export default async function ResourcesPage() {
  const resources = await getResources();

  // Group resources by category
  const groupedResources = resources.reduce((acc, resource) => {
    const category = resource.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(resource);
    return acc;
  }, {} as Record<string, Resource[]>);

  const categoryTitles: Record<string, string> = {
    'industry-reports': 'Industry Reports',
    'methodology-notes': 'Methodology Notes',
    'whitepapers': 'Whitepapers',
    'case-studies': 'Case Studies',
    'other': 'Other Resources',
  };

  return (
    <>
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Resources
            </h1>
            <p className="text-lg text-slate-600">
              Helpful whitepapers, reports and methodology notes.
            </p>
          </div>

          {resources.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600">No resources available yet.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(groupedResources).map(([category, categoryResources]) => (
                <div key={category}>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                    {categoryTitles[category] || category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categoryResources.map((resource) => (
                      <div
                        key={resource._id}
                        className="block p-6 border border-slate-200 bg-white hover:shadow-md transition-shadow rounded-lg"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3 flex-1">
                            <FileText className="w-6 h-6 text-slate-400 flex-shrink-0 mt-1" />
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                                {resource.title}
                              </h3>
                              <p className="text-slate-600 mb-4">
                                {resource.description}
                              </p>
                              <div className="flex items-center justify-between">
                                {/* {resource.publishedAt && (
                                  <p className="text-sm text-slate-500">
                                    Published: {new Date(resource.publishedAt).toLocaleDateString()}
                                  </p>
                                )} */}
                                {resource.pdfFile?.asset?.url && (
                                  <a
                                    href={resource.pdfFile.asset.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                                  >
                                    <Eye className="w-4 h-4" />
                                    <span>View PDF</span>
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
