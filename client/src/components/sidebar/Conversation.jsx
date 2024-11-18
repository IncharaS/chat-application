import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
	const {onlineUsers} = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex gap-2 items-center hover:bg-sky-700 rounded-2xl p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-700" : ""}
			`}
				onClick={() => setSelectedConversation(conversation)}
			>
				

<div className="relative w-12 h-12" >
  {/* Avatar Circle */}
  <div
    className="avatar flex items-center justify-center w-12 h-12 rounded-full text-b font-bold  from-purple-500 to-blue-500" style={{ backgroundColor: "#b4d9d1" }}
  >
    {conversation.fullName
      ? conversation.fullName
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
      : "?"}
  </div>

  {/* Online Status Indicator */}
  {isOnline && (
    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
  )}
</div>



				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-bold text-BROWN'>{conversation.username}</p>
						<span className='text-xl'>{emoji}</span>
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Conversation;