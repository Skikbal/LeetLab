import ImageKit from "imagekit";
import fs from "fs";
import {
  IMAGEKIT_PUBLIC_KEY,
  IMAGEKIT_PRIVATE_KEY,
  IMAGEKIT_ENDPOINT_URL,
} from "../config/envConfig.js";
import ApiError from "../utils/ApiError.js";

const imagekit = new ImageKit({
  publicKey: IMAGEKIT_PUBLIC_KEY,
  privateKey: IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: IMAGEKIT_ENDPOINT_URL,
});

const imagekitUpload = async (file) => {
  try {
   const filePath = fs.readFileSync(file.path);
    const image = await imagekit.upload({
      file: filePath,
      fileName: file.filename,
      fileType: "image",
      folder: "LeetLab",
    });
    if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
    return image.url;
  } catch (error) {
    if (fs.existsSync(file.path)) fs.unlinkSync(file.path);
    throw new ApiError(500, "Failed to upload image", error);
  }
};

export default imagekitUpload;
