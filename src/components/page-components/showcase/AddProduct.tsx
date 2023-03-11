import { FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Modal from "@/components/molecules/Modal";
import { Button } from "@/components/molecules/Button";
import { Icon } from "@/components/molecules/Icon";

export interface AddProductModalProps {
  isOpen: boolean;
  setIsOpen: (event: any) => void;
}

const AddProductModal: FC<AddProductModalProps> = ({
  isOpen = false,
  setIsOpen,
}) => {
  const [showProgress, setShowProgress] = useState(false);

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles, "File Aaccepted");

    setShowProgress(true);
    setTimeout(() => {
      setShowProgress(false);
      alert("File uploaded successfully!");

      setTimeout(() => {
        alert("File upload completed!");
      }, 3000);
    }, 3000);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Modal
      title="Product Ingestion Tool"
      isOpen={isOpen}
      onClose={() => setIsOpen(!isOpen)}
    >
      <div className=" px-[90px] flex flex-col items-center justify-center w-full">
        <div className="w-[500px] p-[110px] text-center border rounded-xl m-10 text-[32px] font-light">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag and Drop your CSV file here</p>
            )}
            {showProgress && (
              <progress
                className="w-full h-4 rounded-full bg-black"
                max="100"
                value="100"
              ></progress>
            )}
          </div>
        </div>
        <p className="w-[500px] text-center text-[14px] text-[#666666]">
          In order to upload your product CSV without any issues, please make
          sure you have the correct CSV file format
        </p>
        <div className="py-2 flex flex-col items-center">
          <h2 className="text-[18px] py-5">
            Our latest CSV file format can be found here.
          </h2>
          <Button
            variant="outlined"
            className="h-[40px] w-[352px] !m-0"
            size="sm"
          >
            <Icon name="icon-document" /> Download CSV template
          </Button>
        </div>
        <div className="py-2 flex flex-col items-center">
          <h2 className="text-[18px] py-5">
            Further documentation about ingestion practices.
          </h2>
          <Button
            variant="outlined"
            className="h-[40px] w-[352px] !m-0"
            size="sm"
          >
            <Icon name="icon-book" /> Ingestion resources
          </Button>
        </div>
        <div className="py-2 flex flex-col items-center">
          <h2 className="text-[18px] py-5">
            Care to work on your existing product data?
          </h2>
          <Button
            variant="outlined"
            className="h-[40px] w-[352px] !m-0"
            size="sm"
          >
            <Icon name="icon-document" /> Download product inventory CSV
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddProductModal;
