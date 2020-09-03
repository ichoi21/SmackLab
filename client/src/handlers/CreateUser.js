import { useState, useEffect } from "react";
import axios from "axios";

const CreateUser = () => {
    const newUser= {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    };

    const [user, setUser] = useState(newUser);
    
    useEffect(() => {
        
        // const [submitted, setSubmitted] = useState(false);

        const HandleInputChange = event => {
            setUser({ ...user, [event.target.name]: event.target.value});
        };

        const HandleSubmit = (e) => {
            e.preventDefault();
            axios.post("/signup", user)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) { 
                console.log(error);
            });
        }
    });
}

export default CreateUser;
