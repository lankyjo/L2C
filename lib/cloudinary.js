import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(imageData) {
  try {
    const result = await cloudinary.v2.uploader.upload(imageData, {
      folder: "blog_images",
      resource_type: "image",
    });

    return result.secure_url; // ✅ Return the Cloudinary URL
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Failed to upload image to Cloudinary");
  }
}
