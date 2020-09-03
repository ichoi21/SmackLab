import { useState } from "react";
import axios from "axios";

const CreateUser = () => {
    useEffect(() => {
        const newUser= {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        };

        const [user, setUser] = useState(newUser);
        const [submitted, setSubmitted] = useState(false);

        const handleInputChange = event => {
            setUser({ ...user, [event.target.name]: event.target.value});
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            axios.post("/signup", user)
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) { 
                console.log(error);
            });
        }
    }, [setUser]);
}

export default CreateUser;
