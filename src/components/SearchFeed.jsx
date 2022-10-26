import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { fetchFromAPI2 } from '../utils/fetchFromAPI'
import { Sidebar, Videos } from './'

const SearchFeed = () => {
  const {searchTerm} = useParams()
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI2(searchTerm)
      .then((data) => { setVideos(data.items) })
  }, [searchTerm])
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
        Search Results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed