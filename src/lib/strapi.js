import Strapi from "strapi-sdk-js";

const strapi = new Strapi({url: process.env.NEXT_PUBLIC_API_URL, store: {
  key: "strapi_jwt"
}});

export default strapi;