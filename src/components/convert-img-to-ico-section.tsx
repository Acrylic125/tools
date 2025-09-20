"use client";

import { useState } from "react";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "./ui/shadcn-io/dropzone";
import { Download, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Button } from "./ui/button";

export function ConvertImgToIcoSection() {
  const [files, setFiles] = useState<File[]>([]);
  const [dropdownError, setDropdownError] = useState<string | null>(null);

  const handleDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    setDropdownError(null);
  };

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <Dropzone
        // Only accept images
        accept={{
          "image/*": [".png", ".jpg", ".jpeg", ".tiff", ".svg", ".ico"],
        }}
        maxSize={1024 * 1024 * 10}
        minSize={1024}
        onDrop={handleDrop}
        onError={(err) => setDropdownError(err.message)}
        src={files}
      >
        <DropzoneEmptyState />
        <DropzoneContent />
        {dropdownError && (
          <Alert variant="error" className="w-full max-w-md mt-4">
            <AlertTitle className="text-center font-bold">
              Invalid file!
            </AlertTitle>
            <AlertDescription className="w-full text-center justify-center font-medium">
              {dropdownError}
            </AlertDescription>
          </Alert>
        )}
      </Dropzone>

      <Button className="w-fit">Convert and Download</Button>
    </div>
  );
}
