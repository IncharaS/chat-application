
import { useAuthContext } from '../../context/AuthContext';
import { TiMessages } from 'react-icons/ti';

const Header = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="bg-slate-700 px-6 py-3 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <TiMessages className="text-white text-3xl" />
        <span className="text-white text-xl font-semibold">Chat App</span>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-white text-sm md:text-base font-medium">
          {authUser.fullName}
        </span>
        <img
          src={authUser.profilePicture}
          alt="Profile"
          className="w-9 h-9 rounded-full border border-gray-300 shadow-sm"
        />
      </div>
    </div>
  );
}

export default Header;
