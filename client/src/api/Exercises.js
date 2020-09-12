import React, {useEffect, useState} from 'react';
import axios from 'axios';
import pic0 from "../images/pic0.png"
import pic1 from "../images/pic1.png"
import pic2 from "../images/pic2.png"
import pic3 from "../images/pic3.png"
import pic4 from "../images/pic4.png"
import pic5 from "../images/pic5.png"
import pic6 from "../images/pic6.png"
const picArray = [pic0, pic1, pic2, pic3, pic4, pic5, pic6];

const api = axios.create({
    baseURL: "https://wger.de/api/v2/exercisecategory/"
});

// const api = axios.get("https://wger.de/api/v2/exercisecategory/");
const image = axios.create({
    baseURL: "https://wger.de/api/v2/exerciseimage/"
});

const Exercises = () => {
    
    const [state, setState] = useState({name:[], image: []});



    const getMuscles = ()=>{

        api.get('/').then(res=>{
            console.log(res.data.results);
            image.get('/').then(img=>{
                console.log(img.data.results);
                setState( {
                    name: res.data.results,
                    image: img.data.results,
                });
            });
        });
    }

    useEffect(() => {
        getMuscles();
    }, []);

   
    return (
        <div className="container" style={{border: '1px solid'}}>
            
            {state.name.map((exercises, index) => (
                
                <div className="card" style={{width: "800px"},{height: "800px"}}>
                <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" style={{width: "100px"},{height: "700px"}}src={picArray[index]} alt="no worky"/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4" key={index}>{exercises.name}<i className="material-icons right">more_vert</i></span>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                  <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
              </div>
                )
                
                           
            )}
        </div>
    )
}

export default Exercises
