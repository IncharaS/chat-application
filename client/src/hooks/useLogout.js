import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
const token = localStorage.getItem("auth-token");
const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();
	const apiUrl = import.meta.env.VITE_BACKEND_URL;
	const logout = async () => {
		setLoading(true);
try {
  const res = await fetch(`${apiUrl}/api/auth/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,  // Adding the token in the Authorization header
    },
    credentials: "include",  // Ensure cookies (like jwt) are included in the request
  });
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.removeItem("chat-user");
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};
export default useLogout;