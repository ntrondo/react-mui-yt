import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'
import { flexbox } from '@mui/system'

const ChannelCard = ({ channelDetail }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px'
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent
        sx={{
          display: flexbox,
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff'
        }}
      >

      </CardContent>
    </Link>
  </Box>
)

export default ChannelCard