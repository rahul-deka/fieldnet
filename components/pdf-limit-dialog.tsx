"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, MessageSquare } from "lucide-react";

interface PdfLimitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PdfLimitDialog({
  open,
  onOpenChange,
}: PdfLimitDialogProps) {
  const router = useRouter();

  const handleContactRedirect = () => {
    const message = encodeURIComponent(
      "Hello, I would like to request access to additional PDF resources. I have reached my viewing limit and would appreciate the opportunity to access more of your valuable content."
    );
    router.push(`/contact?message=${message}`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-cyan-100 rounded-full">
              <FileText className="w-6 h-6 text-cyan-600" />
            </div>
            <DialogTitle className="text-xl">PDF Access Limit Reached</DialogTitle>
          </div>
          <DialogDescription className="text-base pt-2">
            You've reached your limit of 3 free PDF views. To access more resources, 
            please get in touch with the FieldNet team.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-slate-50 rounded-lg p-4 my-2">
          <p className="text-sm text-slate-700">
            Our team would be happy to provide you with extended access to our complete 
            library of whitepapers, reports, and methodology notes.
          </p>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto"
          >
            Close
          </Button>
          <Button
            type="button"
            onClick={handleContactRedirect}
            className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact FieldNet Team
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
