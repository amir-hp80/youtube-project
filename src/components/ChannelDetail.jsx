import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import fetchFromAPI from "../utils/fetchFromAPI";
const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState();

  useEffect(() => {
    (async () => {
      const res = await fetchFromAPI(
        `channels?part=snippet&id=${id}&maxResult=50`
      );
      setChannelDetail(res?.items[0]);

      const res2 = await fetchFromAPI(
        `search?channelId=${id}&part=snippet&order=date&maxResults=50`
      );
      setVideos(res2?.items);
    })();
  }, [id]);
  console.log(channelDetail, videos);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              " radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}></div>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        {/* <Box sx={{ mr: { sm: "100px" } }} /> */}
        <Videos videos={videos} justifyContent='center' />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
