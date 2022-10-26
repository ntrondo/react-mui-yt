import axios from 'axios'
//https://rapidapi.com/ytdlfree/api/youtube-v31
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    method: 'GET',
    params: {
      maxResults: '50',
      part: 'snippet,id'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchFromAPI2 = async (query) =>{
    const opt = {...options,url:`${BASE_URL}/search`, ...{params:{...options.params, q:query}}}
    return await request(opt)
  }
  export const fetchChannelDetailsFromAPI = async (id)=>{
    const opt = {...options, url:`${BASE_URL}/channels`}
    opt.params = {part:'snippet,statistics', id:id}
    return await request(opt)
  }
  export const fetchChannelVideosFromAPI=async (id)=>{
    const opt = {...options, url:`${BASE_URL}/search`}
    opt.params = {...opt.params, channelId:id, order:'date'}
    return await request(opt)
  }
  const request=async(opt)=>{
    //console.log(opt)
    const {data} = await axios.request(opt)
    //console.log(data)
    return data
  }