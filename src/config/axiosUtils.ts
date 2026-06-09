import api from "./axiosConfig";

export const fitMent = {
  getYears: async () => {
    const response = await api.request({
      method: "POST",
      url: "/fitment/year",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  },
  getMakes: async (year: string) => {
    const response = await api.request({
      method: "POST",
      url: "/fitment/make",
      headers: {
        "Content-Type": "application/json",
      },
      data: { year },
    });
    return response.data;
  },
  getModel: async (year: string, make: string) => {
    const response = await api.request({
      method: "POST",
      url: "/fitment/model",
      headers: {
        "Content-Type": "application/json",
      },
      data: { year, make },
    });
    return response.data;
  },
  getTrim: async (year: string, make: string, model: string) => {
    const response = await api.request({
      method: "POST",
      url: "/fitment/trim",
      headers: {
        "Content-Type": "application/json",
      },
      data: { year, make, model },
    });
    return response.data;
  },
  getTrimOptions: async (year: string, make: string, model: string, trim) => {
    const response = await api.request({
      method: "POST",
      url: "/fitment/trim-option",
      headers: {
        "Content-Type": "application/json",
      },
      data: { year, make, model, trim },
    });
    return response.data;
  },
  getProductByFitment: async (data: any) => {
    const response = await api.request({
      url: "/fitment/product-by-fitment",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
    return response.data;
  },
};
