import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'
import { fetchChannelDetailsFromAPI, fetchChannelVideosFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const { id } = useParams()

  console.log(id, channelDetail, videos)
  useEffect(() => {
    fetchChannelDetailsFromAPI(id).then((data) => {
      setChannelDetail(data?.items[0])
    })
    fetchChannelVideosFromAPI(id).then((data) => {
      setVideos(data?.items)
    })
  }, [id])
  console.log("ChannelDetail")
  return (
    <Box minHight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(41,41,116,0.7567401960784313) 35%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}>          
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr:{sm:'100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail