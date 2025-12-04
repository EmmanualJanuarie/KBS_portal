import { useState } from "react";

export const OTP_INPUT_FUNC = () => {
     const [otp, setOtp] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
       const { value } = e.target;
       setOtp(value);
    };

    return {otp, handleInputChange}
}

export const EMAIL_INPUT_FUNC = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return {email, handleEmailChange}
}