import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components'


const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        <Route path={process.env.REACT_APP_DOMAIN_RELATIVE_ROOT_URL} exact element={<Feed />} />
        <Route path={`${process.env.REACT_APP_DOMAIN_RELATIVE_ROOT_URL}/video/:id`} element={<VideoDetail />} />
        <Route path={`${process.env.REACT_APP_DOMAIN_RELATIVE_ROOT_URL}/channel/:id`} element={<ChannelDetail />} />
        <Route path={`${process.env.REACT_APP_DOMAIN_RELATIVE_ROOT_URL}/search/:searchTerm`} element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App