import { Product } from "./productslist";

const API = "https://coding-challenge-api.aerolab.co/products";
export const Gets = async () => {
  const res = await fetch(API, {
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VlZTk4MWM2YWVhMDAwMjFiZGRkODIiLCJpYXQiOjE2NzY2MDE3Mjl9.JscB6n3XXQtCXdyJ80xr-17fVtggiq0CRhVwjM-1Amg",
    },
  });
  const data = (await res.json()) as Product[];
  return data;
};
