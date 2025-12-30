"use client";

import { useState, useEffect } from "react";
import { FileText, Eye } from "lucide-react";
import { EmailGateDialog } from "@/components/email-gate-dialog";
import { type Resource } from "@/lib/sanity";

interface ResourcesContentProps {
  resources: Resource[];
}

export function ResourcesContent({ resources }: ResourcesContentProps) {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [showEmailDialog, setShowEmailDialog] = useState(false);
  const [pendingPdfUrl, setPendingPdfUrl] = useState<string | null>(null);
  const [pendingResourceTitle, setPendingResourceTitle] = useState<string | null>(null);

  // Check if email was already submitted (persists across sessions)
  useEffect(() => {
    const savedEmail = localStorage.getItem("resourceViewerEmail");
    if (savedEmail) {
      setIsEmailVerified(true);
    }
  }, []);

  // Group resources by category
  const groupedResources = resources.reduce((acc, resource) => {
    const category = resource.category || "other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(resource);
    return acc;
  }, {} as Record<string, Resource[]>);

  const categoryTitles: Record<string, string> = {
    "industry-reports": "Industry Reports",
    "methodology-notes": "Methodology Notes",
    whitepapers: "Whitepapers",
    "case-studies": "Case Studies",
    other: "Other Resources",
  };

  const handlePdfClick = (e: React.MouseEvent<HTMLAnchorElement>, pdfUrl: string, resourceTitle: string) => {
    e.preventDefault();
    if (!isEmailVerified) {
      setPendingPdfUrl(pdfUrl);
      setPendingResourceTitle(resourceTitle);
      setShowEmailDialog(true);
    } else {
      // Open PDF in custom viewer
      const viewerUrl = `/resources/viewer?url=${encodeURIComponent(pdfUrl)}`;
      window.open(viewerUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleEmailSubmit = (email: string) => {
    setIsEmailVerified(true);
    // Open the pending PDF in custom viewer
    if (pendingPdfUrl) {
      const viewerUrl = `/resources/viewer?url=${encodeURIComponent(pendingPdfUrl)}`;
      window.open(viewerUrl, "_blank", "noopener,noreferrer");
      setPendingPdfUrl(null);
      setPendingResourceTitle(null);
    }
  };

  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-600">No resources available yet.</p>
      </div>
    );
  }

  return (
    <>
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
                        <p className="text-slate-600 mb-4">{resource.description}</p>
                        <div className="flex items-center justify-between">
                          {resource.pdfFile?.asset?.url && (
                            <a
                              href="#"
                              onClick={(e) =>
                                handlePdfClick(e, resource.pdfFile.asset.url, resource.title)
                              }
                              className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 font-medium"
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

      <EmailGateDialog
        open={showEmailDialog}
        onOpenChange={setShowEmailDialog}
        onEmailSubmit={handleEmailSubmit}
        resourceTitle={pendingResourceTitle}
      />
    </>
  );
}
