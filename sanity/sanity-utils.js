import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "0jvwo9qt",
  dataset: "production",
  apiVersion: "2023-09-26",
});

export default client;

export async function getImagesLeft() {
  return client.fetch(
    groq`*[_type == "imagesLeft"]|order(orderRank){"alt": image.alt, "image": image.asset->{...}}`
  );
}

export async function getImagesRight() {
  return client.fetch(
    groq`*[_type == "imagesRight"]|order(orderRank){"alt": image.alt, "image": image.asset->{...}}`
  );
}

export async function getImagesMobile() {
  return client.fetch(
    groq`*[_type == "imagesMobile"]|order(orderRank){"alt": image.alt, "image": image.asset->{...}}`
  );
}

export async function getInfo() {
  return client.fetch(groq`*[_type == "info"]{...}`);
}

export async function getImprint() {
  return client.fetch(groq`*[_type == "imprint"]{...}`);
}
