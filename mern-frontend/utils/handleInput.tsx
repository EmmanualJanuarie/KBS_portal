import { useState, useMemo } from "react";

export const OTP_INPUT_FUNC = () => {
     const [inputs, setInputs] = useState<{[key: string]: string}>({
        input1: '', input2: '', input3: '',
        input4: '', input5: '', input6: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;

        setInputs((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    //combining inputs
    const combinedInputs = useMemo(()=>{
        return (inputs.input1 + inputs.input2 + inputs.input3 + inputs.input4 + inputs.input5 + inputs.input6);
    }, [inputs]);

    return { inputs, handleInputChange, combinedInputs}
}

export const EMAIL_INPUT_FUNC = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    return {email, handleEmailChange}
}