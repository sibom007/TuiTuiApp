import { axiosBaseQuery } from "@/Helper/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`,
  }),
  tagTypes: ["Profile", "Image", "Colour"],
  endpoints: () => ({}),
});
