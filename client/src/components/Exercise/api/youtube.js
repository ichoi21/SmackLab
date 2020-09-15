import React,{useState, Component} from 'react'
import axios from 'axios';


const API = 'AIzaSyCYJMKESdsoL4L-RCg5dcX-m-s6ki7JLwc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: "snippet",
        maxResults: 5,
        key: API
    }
})