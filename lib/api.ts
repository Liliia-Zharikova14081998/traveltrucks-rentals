import axios from "axios";

export interface FilterParams {
  location?: string;
  equipment?: string[];
  form?: string[];
}

const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

export const getCards = async (filters: FilterParams, page: number = 1) => {
  const params: any = { page, limit: 4 };

  if (filters.location) params.location = filters.location;
  if (filters.form?.length) params.form = filters.form[0];
  
  filters.equipment?.forEach((item: string) => {
    if (item === 'transmission') params.transmission = 'automatic';
    else params[item] = true;
  });

  const res = await instance.get("/campers", { params });
  return res.data.items || res.data;
};

export const getCardById = async (id: string) => {
  const res = await instance.get(`/campers/${id}`);
  return res.data;
};