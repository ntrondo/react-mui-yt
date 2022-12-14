import {Link} from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import {CheckCircle} from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'

const VideoCard = ({video: {id:{videoId}, snippet}}) => {
  const videoUrl = videoId ? `${process.env.REACT_APP_DOMAIN_RELATIVE_ROOT_URL}/video/${videoId}`:demoVideoUrl
  const channelUrl = snippet?.channelId ? `/channel/${snippet.channelId}`:demoChannelUrl
  
  return (
    <Card sx={{width:{xs:'100%', sm:'358px', md:'320px' }, boxShadow:'none', borderRadius:0}}>
      <Link to={videoUrl}>
      <CardMedia 
      image={snippet?.thumbnails?.high?.url}
      alt={snippet?.title}
      sx={{
        width:{xs: '100%', sm: '358px', md:'320px'}, 
        height:180
      }}
      />
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e', height:'106px'}}>
      <Link to={videoUrl}>
        <Typography
        variant='subtitle1'
        fontWeight='bold'
        color='#FFF'
        >
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}</Typography>
      </Link>
      <Link to={channelUrl}>
        <Typography
        variant='subtitle1'
        fontWeight='bold'
        color='gray'
        >
          {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
          <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/>
          </Typography>

      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard