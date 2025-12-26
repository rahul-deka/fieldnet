"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PDFViewerPage() {
  const searchParams = useSearchParams();
  const pdfUrl = searchParams.get("url");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!pdfUrl) {
      setError(true);
    }
  }, [pdfUrl]);

  const handleClose = () => {
    window.close();
  };

  if (error || !pdfUrl) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Invalid PDF URL</h1>
          <p className="text-slate-600 mb-4">The PDF you're trying to view could not be found.</p>
          <Button onClick={handleClose} variant="outline">
            Close Window
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white flex flex-col">
      {/* Floating back button */}
      <div className="absolute top-4 left-4 z-10">
        <Button
          onClick={handleClose}
          variant="ghost"
          size="sm"
          className="text-white hover:text-white hover:bg-white/30 flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </Button>
      </div>

      {/* PDF iframe */}
      <div className="flex-1 relative">
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
          className="w-full h-full border-0"
          title="PDF Viewer"
          style={{
            backgroundColor: '#ffffff'
          }}
        />
      </div>

      {/* Overlay to prevent right-click context menu */}
      <style jsx global>{`
        body {
          margin: 0;
          overflow: hidden;
        }
        iframe {
          pointer-events: auto;
        }
        /* Disable text selection in the viewer */
        .no-select {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
}
