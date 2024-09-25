import { Form } from "../model/form"

export const saveFormDetails = async (formData: Form) => {
    try {
      const response = await axios.post("/api/save-form", formData);
      return response.data;
    } catch (error) {
      console.error("Error submitting form data", error);
    }
  };
  