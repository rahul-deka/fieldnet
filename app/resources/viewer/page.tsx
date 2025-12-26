"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PDFViewerPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pdfUrl = searchParams.get("url");
  const [error, setError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    
    setIsMobile(checkMobile());

    if (!pdfUrl) {
      setError(true);
    } else if (checkMobile()) {
      // On mobile, redirect directly to the PDF URL to use native viewer
      window.location.href = pdfUrl;
    }
  }, [pdfUrl]);

  const handleClose = () => {
    if (isMobile) {
      // On mobile, try to go back in history
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push('/resources');
      }
    } else {
      window.close();
    }
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

  // On mobile, show loading message while redirecting
  if (isMobile) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Opening PDF...</p>
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
