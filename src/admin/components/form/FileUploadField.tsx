import clsx from "clsx";
import React, { useRef, useState, useEffect } from "react";
import { ArrowUpCircleSolid, XMark } from "@medusajs/icons";
import { IconButton, Text } from "@medusajs/ui";
type FileUploadFieldProps = {
  onChange: (files: File[] | null) => void;
  value: File[] | string;
  filetypes?: string[];
  errorMessage?: string;
  placeholder?: React.ReactElement | string;
  className?: string;
  multiple?: boolean;
  text?: React.ReactElement | string;
};

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  onChange,
  value,
  filetypes,
  errorMessage = "",
  multiple = false,
  className = "",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (value && typeof value !== "string" && value.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(value[0]);
    } else {
      setSelectedImage(null);
      setFileUploadError(false);
    }
  }, [value, selectedImage]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList) {
      const filesArray = Array.from(fileList);
      onChange(filesArray);

      if (filesArray.length > 0) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result as string);
        };
        reader.readAsDataURL(filesArray[0]);
      }
    }
  };

  const handleFileDrop = (
    e: React.DragEvent<HTMLDivElement | HTMLLabelElement>
  ) => {
    setFileUploadError(false);
    e.preventDefault();

    const files: File[] = [];

    if (e.dataTransfer.items) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === "file") {
          const file = e.dataTransfer.items[i].getAsFile();
          if (file && filetypes && filetypes.indexOf(file.type) > -1) {
            files.push(file);
          }
        }
      }
    } else {
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        if (filetypes && filetypes.indexOf(e.dataTransfer.files[i].type) > -1) {
          files.push(e.dataTransfer.files[i]);
        }
      }
    }

    if (files.length > 0) {
      onChange(files);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFileUploadError(true);
    }
  };

  return (
    <div className="flex items-center gap-8 h-[200px]">
      <div
        onClick={() => inputRef?.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDrop={handleFileDrop}
        className={clsx(
          "h-full bg-ui-bg-component border-ui-border-strong transition-fg group flex w-full items-center justify-center gap-y-2 rounded-lg border border-dashed py-4 px-8 hover:border-ui-border-interactive focus:border-ui-border-interactive focus:shadow-borders-focus outline-none focus:border-solid cursor-pointer",
          className
        )}
      >
        {selectedImage || (value && value !== "null") ? (
          <div className="relative h-full">
            <img
              src={
                selectedImage || (typeof value === "string" ? value : undefined)
              }
              alt="Selected"
              className="w-full max-w-48 h-full object-container rounded"
            />

            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
                onChange(null);
              }}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 focus:outline-none"
            >
              <XMark className="text-white" />
            </IconButton>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer">
              <ArrowUpCircleSolid />
              <Text>Upload</Text>
            </span>
            <Text className="text-center">
              Choose images or drag & drop them here.
              <br />
              JPG, JPEG, PNG, and WEBP. Max 20 MB.
            </Text>
          </div>
        )}
        {fileUploadError && (
          <span className="text-rose-60">
            {errorMessage || "Please upload an image file"}
          </span>
        )}
        <input
          ref={inputRef}
          accept={filetypes?.join(", ")}
          multiple={multiple}
          type="file"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default FileUploadField;
