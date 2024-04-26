import { Box, Stack } from '@mui/material'
import React from 'react'

const Videos = ({videos}) => {
  // console.log(videos)
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {videos?.map((e,index) =>(
        <Box key={index}>
          {e.id.videoId && <VideoCard/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos