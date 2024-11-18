import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="w-full max-w-md p-6 rounded-lg shadow-md " style={{ backgroundColor: "#CBC0D3" }}>

				<h1 className="text-4xl text-black font-bold text-center mb-4">Login</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className="block text-black mb-1">Username</label>
						<input
							type="text"
							placeholder="Enter username"
							className="w-full p-2 rounded-md  text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
							style={{ backgroundColor: "#EBE7EE" }}
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div className="mt-3">
						<label className="block text-black mb-1">Password</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full p-2 rounded-md  text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
							style={{ backgroundColor: "#EBE7EE" }}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link to="/signup" className="text-black hover:underline hover:text-gray-400 mt-3 inline-block">
						{"Don't"} have an account?
					</Link>

					<div className="mt-4">
						<button
						className="w-full py-2 rounded-lg text-black text-lg font-medium"
						style={{ backgroundColor: "#EBE7EE", hover: { backgroundColor: "#FDD8F6" } }}
						disabled={loading}
						>
							{loading ? <span className="loading loading-spinner"></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;



// const Login = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Login
// 					<span className='text-gray-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>
// 					<a href='#' className='text-sm  hover:underline hover:text-gray-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2'>Login</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;