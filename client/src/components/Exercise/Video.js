import React,{useState, useEffect} from 'react'
import axios from 'axios';
import ReactPlayer from "react-player";

    const API = 'AIzaSyDmw3fsSME-f_PHFez3Gd4gOVPNuz9b6TY';

   const Video = (props) => {

    const [state, setState] = useState({id:[]});
    let arr = [];

    const getVideo = () =>{
        axios.get(` https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=${API}&q=${props.name}`)
        .then((res) => {
           const id = console.log(res.data.items[0].id.videoId)
           arr.push(id);
        })
            
            setState({id: arr});
    }

    useEffect(() => {
       getVideo();
    }, [])
return (

    <>
    {state.id.map((vidid) =>{
        return(
            <ReactPlayer
            url= {`https://www.youtube.com/watch?v=${vidid}`}
          />  
        )
       
    })}
    </>
      
)
        
       
    
       
   }
    export default Video;
   