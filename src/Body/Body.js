import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { useDataLayerValue } from "../Util/DataLayer";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SongRow from "../SongRow/SongRow";
const Body = ({ spotify }) => {
  const [{ global_top_50 }, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
        <img src={global_top_50?.images[0]?.url} alt='' />
        <div className='body__infoText'>
          <h2> {global_top_50?.name}</h2>

          <p>{global_top_50?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilledIcon className='body__shuffle' />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}{" "}
        {global_top_50?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
