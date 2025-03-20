import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
const token = localStorage.getItem("auth-token");
const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();
	const apiUrl = import.meta.env.VITE_BACKEND_URL;
	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
const res = await fetch(`${apiUrl}/api/messages/${selectedConversation._id}`, {
  method: "GET", // Assuming you're using a GET request
  headers: {
    "Authorization": `Bearer ${token}`,  // Sending the token in the Authorization header
    "Content-Type": "application/json", // Optional, depending on your backend requirements
  },
  credentials: "include",  // Include cookies in the request
});
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessages(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;