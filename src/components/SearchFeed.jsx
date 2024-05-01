import { React, useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import fetchFromAPI from "../utils/fetchFromAPI";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()
  useEffect(() => {
    (async () => {
      const res = await fetchFromAPI(
        `search?part=snippet&q=${searchTerm}&maxResults=50`
      );
      setVideos(res.items);
    })();
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search Results for :{" "}
        <span style={{ color: "#f31503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
