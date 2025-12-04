import { useState } from "react";

/**
 * displays tge new user modal
 * 
 * @function NewUserModal
 * @returns script that renders in modal
 */
interface Data {
    label: string; type: string; placeholder:string; maxLength?: number;
}

const inputData: Data[] = [
    {label: "First Name",type: "text", placeholder: "Enter Name"},
    {label: "Last Name", type: "text", placeholder: "Enter Surname"},
    {label: "Cell Number", type: "tel", placeholder: "Enter Cell Number", maxLength: 10},
    {label: "Email Address", type: "email", placeholder: "Enter Email"}
    
]
export default function NewUserModal(){
    const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

    const generatePassword = () => {
		const randomPass = Math.random().toString(36).slice(-10); 
		setPassword(randomPass);
	};
    
    return(
        <>
            <div className="flex justify-center p-6">
			<div className="bg-white/95 shadow-2xl rounded-xl p-8 w-full max-w-2xl text-black border-gray">
				
				<h2 className="text-4xl font-extrabold mb-6 tracking-wide color-gold text-center">
					New User
				</h2>

				<form className="grid grid-cols-1 gap-6">

					{/* Dynamic Inputs */}
					{inputData.map((input, index) => (
						<div key={index} className="flex flex-col gap-1">
							<label className="font-semibold">{input.label}</label>

							<input
								type={input.type}
								maxLength={input.maxLength}
								placeholder={input.placeholder}
								className="bg-white/95 text-black rounded-xl p-3 w-full shadow-sm focus:ring-2 focus:ring-yellow-300 outline-none border-gray"
								required
							/>
						</div>
					))}

					{/* Password Field */}
					<div className="flex flex-col gap-1">
						<label className="font-semibold">Password</label>

						<div className="flex gap-2">
							<input
								type={showPassword ? "text" : "password"}
								placeholder="Enter Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="bg-white/95 text-black rounded-xl p-3 w-full shadow-sm focus:ring-2 focus:ring-yellow-300 outline-none border-gray"
								required
							/>

							{/* Toggle Password Button */}
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="px-3 bg-white/90 text-black rounded-xl shadow hover:bg-white transition border-gray"
							>
								{showPassword ? "Hide" : "Show"}
							</button>

							{/* Generate Password Button */}
							<button
								type="button"
								onClick={generatePassword}
								className="px-3 bg-gold/95 text-white rounded-xl transition"
							>
								Gen
							</button>
						</div>
					</div>

					{/* Expiry Date */}
					<div className="flex flex-col gap-1">
						<label className="font-semibold">Contract Expiry Date</label>
						<input
							type="date"
							className="bg-white/95 text-black rounded-xl p-3 shadow-sm focus:ring-2 focus:ring-yellow-300 outline-none border-gray"
							required
						/>
					</div>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full bg-gold/95 hover:bg-gold text-white font-bold text-lg p-3 rounded-xl transition shadow"
					>
						Add User
					</button>

				</form>
			</div>
		</div>
        </>
    );

}