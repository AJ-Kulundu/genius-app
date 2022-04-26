import React from 'react'
import { useArtistSongsQuery } from "../../../services/api";
function Songs() {
   const {data} = useArtistSongsQuery(130);
   console.log(data)
  return (
    <div>Songs</div>
  )
}

export default Songs