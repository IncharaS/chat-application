import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const token = localStorage.getItem("auth-token");
const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);
	const apiUrl = import.meta.env.VITE_BACKEND_URL;
	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await fetch(`${apiUrl}/api/users`, {
  method: "GET", // Assuming you are making a GET request
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`, // Add the token here
  },
  credentials: "include", // Include cookies in the request
});

				const data = await res.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setConversations(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations };
};
export default useGetConversations;