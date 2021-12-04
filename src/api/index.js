import axios from "axios";
import { root_url } from "./constants";

export const fetchChapters = (userAddress)=>{
    return axios.post(root_url+`/chapters`,{userAddress});
}

export const fetchOptions =()=>{
    return axios.get(root_url+`/options`);
}

export const fetchChaptersQuestion=(data)=>{
    const {chapterId,userId} = data;
    return axios.post(root_url+`/chapters/${chapterId}/questions`,{userId})
}

export const getUser=(userAddress)=>{
    return axios.post(`${root_url}/users/`,{userAddress})
}

export const submitAnswer=(data)=>{
    return axios.post(`${root_url}/submit_answer`,{data});
}