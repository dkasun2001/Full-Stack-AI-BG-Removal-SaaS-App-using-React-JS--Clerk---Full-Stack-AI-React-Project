import React from "react";
import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br /> image in seconds
      </h1>

      <div className="flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center ">
        
        <div className="flex items-start gap-4 bg-white drop-shadow-lg p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={assets.upload_icon} alt="upload icon" />
          <div>
            <p className="text-xl font-medium">Upload Image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Select an image from your <br /> device to get started.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white drop-shadow-lg p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img
            className="max-w-9"
            src={assets.remove_bg_icon}
            alt="remove bg icon"
          />
          <div>
            <p className="text-xl font-medium">Remove Background</p>
            <p className="text-sm text-neutral-500 mt-1">
              Our AI will automatically remove <br /> background for you.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white drop-shadow-lg p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
          <img
            className="max-w-9"
            src={assets.download_icon}
            alt="download icon"
          />
          <div>
            <p className="text-xl font-medium">Download Image</p>
            <p className="text-sm text-neutral-500 mt-1">
              Save your new image with a <br /> transparent background.
            </p>
          </div>
        </div>

        {/* <div>
          <img src="" alt="Remove Background" />
          <div>
            <p>Remove Background</p>
            <p>Our AI will automatically remove the background for you.</p>
          </div>
        </div>
        <div>
          <img src="" alt="Download" />
          <div>
            <p>Download Result</p>
            <p>Save your new image with a transparent background.</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Steps;
