import axios from "axios";

interface currValuesType {
  username: string;
  password: string;
  email?: string;
}

export const formSubmit = async (
  isSignUp: Boolean,
  currValues: currValuesType,
) => {
  if (isSignUp) {
    const token = await axios.post(
      "https://backend.mihir-k1.workers.dev/api/v1/user/signup",
      currValues,
    );
    localStorage.setItem("token", token.data);
  } else {
    try {
      const token = await axios.post(
        "https://backend.mihir-k1.workers.dev/api/v1/user/signin",
        currValues,
      );
      localStorage.setItem("token", token.data);
      return {
        success: true,
      };
    } catch (err: any) {
      return {
        success: false,
        status: err.response.status,
      };
    }
  }
};
