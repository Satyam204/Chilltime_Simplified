import React, { useEffect, useState } from 'react'
import {img_300, unavailable} from "../../config/config"
import "./singlecontent.css"
import { Badge, Button } from '@mui/material'
import axios from 'axios'

const SingleContent = (
    {
        id,
        poster,
        title,
        date,
        media_type,
        vote_average,
    }) => {

  const [video, setVideo] = useState();

  
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

 useEffect(() => {
    fetchVideo();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='media'>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
   <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
      <Button
      variant="contained"
      color="primary"
      target="__blank"
      href={`https://bollywood.eu.org/?type=search&page=1&name=${title}&cat=${media_type}`}
      >Download Movie</Button>
    </div>
  )
}

export default SingleContent
