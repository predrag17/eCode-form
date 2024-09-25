import { Form } from "../model/form"
import axios from "axios";

export const saveFormDetails = async (formData: Form) => {
    try {
      const response = await axios.post(`${process.env.API_BASE_URL}/save`, formData);
      return response.data;
    } catch (error) {
      console.error("Error submitting form data", error);
    }
  };
  