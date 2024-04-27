import { Box, Stack } from '@mui/material'
import React from 'react'
import {VideoCard , ChannelCard} from './'
const Videos = ({videos}) => {
  // console.log(videos)
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {videos?.map((e,index) =>(
        <Box key={index}>
          {e.id.videoId && <VideoCard video={e}/>}
          {e.id.channelId && <ChannelCard channelDetail={e}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos