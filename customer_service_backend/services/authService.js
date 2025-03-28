import axios from "axios";

export const loginWithGoogle = async () => {
  try {
    const res = await axios.get("http://localhost:5000/auth/google");
    return res.data;
  } catch (error) {
    console.error("Google Login Error:", error);
  }
};
