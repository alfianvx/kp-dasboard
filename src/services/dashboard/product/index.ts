import { http } from "@/lib/http";
import { TProductForm } from "@/types/schema/Product";

export const getProducts = async () => {
  return await http.get("/product").then((response) => response.data);
};

export const getProductById = async (id: string, token: string | undefined) => {
  return await http
    .get(`/product/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);
};

export const deleteProduct = (id: string, token: string | undefined) => {
  return http.delete(`/product/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createProduct = (
  data: TProductForm,
  token: string | undefined
) => {
  return http.post("/product", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProduct = (
  id: string,
  data: TProductForm,
  token: string | undefined
) => {
  return http.put(`/product/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
