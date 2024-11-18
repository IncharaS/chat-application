import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="w-full max-w-md p-6 rounded-lg shadow-md bg-black bg-opacity-90" style={{ backgroundColor: "#CBC0D3" }}>
				<h1 className="text-4xl text-black font-bold text-center mb-4">Sign Up</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className="block text-black mb-1">Full Name</label>
						<input
							type="text"
							placeholder="Enter your full name"
							className="w-full p-2 rounded-md  text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
							style={{ backgroundColor: "#EBE7EE" }}
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div className="mt-3">
						<label className="block text-black mb-1">Username</label>
						<input
							type="text"
							placeholder="Enter unique username"
							className="w-full p-2 rounded-md  text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
							style={{ backgroundColor: "#EBE7EE" }}
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div className="mt-3">
						<label className="block text-black mb-1">Password</label>
						<input
							type="password"
							placeholder="Enter password"
							className="w-full p-2 rounded-md text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
							style={{ backgroundColor: "#EBE7EE" }}
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div className="mt-3">
						<label className="block text-black mb-1">Confirm Password</label>
						<input
							type="password"
							placeholder="Confirm password"
							className="w-full p-2 rounded-md  text-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
							style={{ backgroundColor: "#EBE7EE" }}
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<div className="mt-3">
						<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
					</div>

					<Link to="/login" className="text-black hover:underline hover:text-gray-400 mt-3 inline-block">
						Already have an account?
					</Link>

					<div className="mt-4">
						<button
							className="w-full py-2 rounded-lg  text-black text-lg font-medium"
							style={{ backgroundColor: "#EBE7EE", hover: { backgroundColor: "#FDD8F6" } }}
							disabled={loading}
						>
							{loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
