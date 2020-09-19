import React, { createContext, useState } from "react";
import { Provider } from 'react-redux';

const BMIContext = createContext({});

const BMIProvider = ({children}) => {
    const initialState = {
        age: 28,
        genderClass: "Male or Female",
        height: 171,
        weight: 73,
        activity: 10,
        bmi: 22.49,
        bfp: 0,
        bmiClass: "Normal",
        bmr: 0,
        tdee: 0,
    }
    
    const [BMI, setBMI] = useState(initialState);

    return (
        <BMIContext.Provider value={{ BMI, setBMI }}>
            {children}
        </BMIContext.Provider>
    )
}

const useBMIContext = () => {
    return React.useContext(BMIContext)
}

export default { BMIProvider, useBMIContext };
