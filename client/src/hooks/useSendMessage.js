import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
const token = localStorage.getItem("auth-token");
const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();
	const apiUrl = import.meta.env.VITE_BACKEND_URL;
	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const res = await fetch(`${apiUrl}/api/messages/send/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
				Authorization: `Bearer ${token}`, 
			});
			const data = await res.json();
			if (data.error) throw new Error(data.error);

			setMessages([...messages, data]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;