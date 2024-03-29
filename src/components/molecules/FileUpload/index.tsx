import { useState, useCallback, ReactNode, FC, useEffect } from "react";
import clsx from "clsx";
import { useDropzone } from "react-dropzone";
import { FileCard } from "../FileCard";
import { Button } from "../Button";
import { fonts } from "../../../config/fonts";
import { clsVariants } from "./utils";
import ProductIcon from "./ProductIcon";

export interface FileUploadProps {
  acceptedFileTypes?: string[];
  variant?: keyof typeof clsVariants;
  labelText?: string;
  handleUpload?: (file: any) => void;
  handleAcceptedFiles?: (acceptedFiles: any) => void;
  hasFilePreview?: boolean;
  handleFilePreviewClick?: (event: any) => void;
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
  idInput?: string;
  imageUrl?: string;
}

export const FileUpload: FC<FileUploadProps> = ({
  variant = "rectangle",
  acceptedFileTypes = [
    "image/jpeg",
    "image/png",
    "image/heic",
    "application/pdf",
  ],
  hasFilePreview = true,
  labelText = "",
  icon,
  handleAcceptedFiles = () => {},
  handleFilePreviewClick = () => {},
  handleUpload = () => { },
  className,
  disabled,
  idInput,
  imageUrl,
}) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if(imageUrl) {
      setPreviewUrl(imageUrl);
    }
  }, [])

  const renderButton = () => {
    return (
      <Button
        variant="outlined"
        className={clsx(
          "!max-w-[216px] mt-4",
          fonts.fontWeights.regular,
          fonts.text.md
        )}
        onClick={() => {
          if (file) {
            handleUpload(file);
          } else {
            // @ts-ignore
            document?.querySelector?.(`input${idInput ? '#' + idInput : ''}[type="file"]`)?.click?.();
          }
        }}
      >
        {file ? "Upload" : "Select"}
      </Button>
    );
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    handleAcceptedFiles(acceptedFiles);
    setFile(acceptedFiles[0]);
    setPreviewUrl(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  // , isDragActive
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // @ts-ignore
    accept: acceptedFileTypes,
    maxFiles: 1,
  });

  return (
    <div className={clsx(clsVariants[variant].clsContainer, disabled && 'opacity-40 pointer-events-none' ,className)}>
      {!!labelText && (
        <p
          className={clsx(
            fonts.fontWeights.light,
            fonts.text.md,
            "text-shades-black tracking-[.06em] absolute bg-shades-white top-[-10px] left-5 px-2"
          )}
        >
          {labelText}
        </p>
      )}

      <div className={clsVariants[variant].clsWrapper}>
        <div {...getRootProps()} className={clsVariants[variant].clsDropzone}>
          <input id={idInput} {...getInputProps()} />

          {!!hasFilePreview && previewUrl && (
            <>
              <FileCard
                src={previewUrl}
                variant={variant}
                icon={icon}
                onClick={handleFilePreviewClick}
              />
            </>
          )}
          {variant === "product" && (
            <>
              {(!file || !hasFilePreview) && <div><ProductIcon /></div>}
              {renderButton()}
            </>
          )}
        </div>
        {variant !== "product" && renderButton()}
      </div>
    </div>
  );
};
