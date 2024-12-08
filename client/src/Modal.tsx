import { FC, useState } from "react";
import { CgClose } from "react-icons/cg";
import { IoCopy, IoCopyOutline } from "react-icons/io5";

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  data:
    | {
        _id: string;
        url: string;
        shortCode: string;
      }
    | undefined;
};

export const Modal: FC<ModalProps> = ({ onClose, data }) => {
  const [copied, setCopied] = useState<{
    copied: boolean;
    message: string;
  }>({ copied: false, message: "Copy link" });

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`url-shortener-xmeg.onrender.com/${data?.shortCode}`);
      setCopied({
        copied: true,
        message: "Copied!",
      });

      setTimeout(() => {
        setCopied({ copied: false, message: "Copy link" });
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      onClick={onClose}
      className="absolute px-3 top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] bg-white shadow-lg rounded-md p-5"
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold">Your link is ready</h2>
          <CgClose onClick={onClose} className="hover:cursor-pointer" />
        </div>
        <p className="text-xs mb-2">
          Copy the link below to share and use on all platforms
        </p>

        <div
          className="flex flex-col items-center w-full py-5 px-2 space-y-5 bg-[#4ca5ff]/10
         rounded"
        >
          <p className="text-[#4ca5ff]">url-shortener-xmeg.onrender.com/{data?.shortCode}</p>
          {copied.copied ? (
            <div
              className="flex items-center p-2 rounded bg-blue-700 space-x-2 ring-2
            hover:cursor-pointer hover:bg-blue-700/80"
            >
              <IoCopy className="text-white" size={18} />
              {copied.message && (
                <p className="flex text-white text-sm justify-end">
                  {copied.message}
                </p>
              )}
            </div>
          ) : (
            <div
              onClick={handleCopyToClipboard}
              className="flex items-center p-2 rounded bg-blue-700 space-x-2 ring-2
             hover:cursor-pointer hover:bg-blue-700/80"
            >
              <IoCopyOutline className="text-white" size={18} />
              {copied.message && (
                <p className="flex text-white text-sm justify-end">
                  {copied.message}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
