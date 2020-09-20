import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { useDataLayerValue } from "../Util/DataLayer";
const Body = ({ spotify }) => {
  const [{ global_top_50 }, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
        <img src={global_top_50?.images[0]?.url} alt='' />
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>{global_top_50?.name}</h2>
          <p>{global_top_50?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
