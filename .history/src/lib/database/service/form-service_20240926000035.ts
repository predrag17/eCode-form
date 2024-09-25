import axiosInstance from "@/config/axios-instance";
import { Form } from "../model/form"

export const saveFormDetails = async (formData: Form) => {
    try {
      const response = await axiosInstance.post("/api/save-form", formData);
      return response.data;
    } catch (error) {
      console.error("Error submitting form data", error);
    }
  };
  