import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2022-05-03", // or the latest API version available
  useCdn: process.env.NODE_ENV === "production", // set to false if you want to use the latest data from the Sanity API
};
export const sanityClient = createClient(config);

export const urlFor = (source) => {
  const builder = imageUrlBuilder(config);
  return builder.image(source);
};
