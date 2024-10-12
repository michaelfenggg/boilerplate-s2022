import React, { useState } from 'react';
import './index.css';
import { Link, useLocation } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import arrow from './imgs/arrow.png';
import michaelPic from './imgs/michael_pic.jpg';
import izzyPic from './imgs/izzy_pic.jpg';
import lihiniPic from './imgs/lihini_pic.jpg';

interface ProfileData {
  name: string;
  imgURL: string;
  description: string;
  traitsList: string[];
}

const imageMap: { [key: string]: string } = {
  Michael: michaelPic,
  Izzy: izzyPic,
  Lihini: lihiniPic,
};

function ProfileNoCard() {
  const location = useLocation();
  const { profile }: { profile: ProfileData } = location.state;
  const [currentTrait, setCurrentTraitIndex] = useState(0);
  const traits = profile.traitsList;
  const pic = imageMap[profile.name];

  const nextTrait = () => {
    setCurrentTraitIndex((prevIndex) => (prevIndex + 1) % traits.length);
  };

  return (
    <div>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-image">
            <img src={pic} alt={profile.name} className="profile-pic" />
          </div>
          <div className="traits">
            <Typography variant="h5">{profile.name}</Typography>
            <Typography variant="body1">{traits[currentTrait]}</Typography>
          </div>
          <div>
            <button
              onClick={nextTrait}
              className="arrow-button"
              aria-label="Next Toxic Trait"
              type="button"
            >
              <img src={arrow} alt="Next" />
            </button>
          </div>
        </div>
        <div className="back">
          <Link to="/Project">Back to Team!</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileNoCard;
