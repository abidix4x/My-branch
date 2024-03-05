"use client"
import React from "react";
import { useToast } from "../ui/use-toast";
import { CldImage, CldUploadWidget} from "next-cloudinary";
import { title } from "process";
import { Divide } from "lucide-react";
import Image from "next/image";
import { dataUrl, getImageSize } from "@/lib/utils";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  publicId: string;
  image: any;
  type: string;
};
//CAN BE BETTER 
const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type,
}: MediaUploaderProps) => {
  const { toast } = useToast();
  const onUploadSuccessHandler = (result: any) => {

    setImage((prevState:any)=>({
        ...prevState,
          secureURL: result.info.secure_url,
          width: result?.info?.width,
          height: result?.info?.height,
          publicId: result?.info?.public_id,
    
    }))
    onValueChange(result?.info?.public_id)

    toast({
      title: "Image Uploaded successfully",
      description: "1 credidt was deducted from your balance",
      duration: 5000,
      className: "success-toast",
    });
  };
  const onUploadErrorHandler = () => {
    toast({
      title: "Something went wrong while uploading",
      description: "Please try again",
      duration: 5000,
      className: "error-toast",
    });
  };


  return (
    <CldUploadWidget
      uploadPreset="abhDev_Imagin"
      options={{
        multiple: false,
        resourceType: "image",
      }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) => (
        <div className="flex flex-col gap-4">
          <h3 className="h3-bold text-dark-600">Original image</h3>
          {publicId ? (
            <>
                <div className="cursor-pointer overflow-hidden rounded-[10px]">
                    <CldImage
                        width={getImageSize(type,image,"width")}
                        height={getImageSize(type,image,"height")}
                        alt='image'
                        src={publicId}
                        sizes={"(max-width :767px) 100vw, 50 vw"}
                        placeholder={dataUrl as PlaceholderValue}
                        className="media-uploader_cldImage"
                    />
                </div>
            </>
          ) : (
            <div className="media-uploader_cta" onClick={() => open()}>
              <div className="media-uploader_cta-image">
                <Image
                  alt=""
                  src="/assets/icons/add.svg"
                  width={24}
                  height={24}
                />
              </div>
              <p className="p-14-medium">Click Here To Upload an Image</p>
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MediaUploader;
