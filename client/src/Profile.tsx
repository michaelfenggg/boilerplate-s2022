import React, { useState } from 'react';
import './index.css';
import { Link, useLocation } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import arrow from './imgs/arrow.png';

interface ProfileData {
  name: string;
  imgURL: string;
  description: string;
}

const traits = [
  'toxic trait',
  'trait 1',
  'trait 2',
  'trait 3',
  'trait 4',
  'trait 5',
];

function Profile() {
  const location = useLocation();
  const { profile }: { profile: ProfileData } = location.state;
  const [currentTrait, setCurrentTraitIndex] = useState(0);

  const nextTrait = () => {
    setCurrentTraitIndex((prevIndex) => (prevIndex + 1) % traits.length);
  };

  return (
    <div>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-image">
            <Typography variant="h5">{profile.name}</Typography>
            <img src={profile.imgURL} alt={profile.name} />
          </div>
          <div className="traits">
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

export default Profile;
