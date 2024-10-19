/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import './index.css';
import { Link, useLocation } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
// eslint-disable-next-line import/no-extraneous-dependencies
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

// import arrow from './imgs/arrow.png';
import michaelPic from './imgs/michael_pic.jpg';
import izzyPic from './imgs/izzy_pic.jpg';
import lihiniPic from './imgs/lihini_pic.jpg';

interface ProfileData {
  name: string;
  imgURL: string;
  description: string;
  school: string;
  gradYear: string;
  traitsList: string[];
}

export default function MediaControlCard() {
  const theme = useTheme();
  const location = useLocation();
  const { profile }: { profile: ProfileData } = location.state;
  const [currentTrait, setCurrentTraitIndex] = useState(0);
  const traits = profile.traitsList;
  const pic = profile.imgURL;

  const nextTrait = () => {
    setCurrentTraitIndex((prevIndex) => (prevIndex + 1) % traits.length);
  };

  const prevTrait = () => {
    setCurrentTraitIndex(
      (prevIndex) => (prevIndex - 1 + traits.length) % traits.length,
    );
  };

  return (
    <div className="center">
      <Card className="card">
        <Box className="content">
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {profile.name}
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: 'text.secondary' }}
            >
              Toxic Traits
              <Typography variant="body1">{traits[currentTrait]}</Typography>
            </Typography>
          </CardContent>
          <Box className="controls">
            <IconButton aria-label="previous" onClick={prevTrait}>
              {theme.direction === 'rtl' ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next" onClick={nextTrait}>
              {theme.direction === 'rtl' ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={pic}
          alt="profile pic"
        />
      </Card>
      <Link to="/Project" style={{ marginTop: 16 }}>
        Back to Team!
      </Link>
    </div>
  );
}
// function Profile() {

//   return (
//     <div>
//       <div className="profile-container">
//         <div className="profile">
//           <div className="profile-image">
//             <img src={pic} alt={profile.name} className="profile-pic" />
//           </div>
//           <div className="traits">
//             <Typography variant="h5">{profile.name}</Typography>
//             <Typography variant="body1">{traits[currentTrait]}</Typography>
//           </div>
//           <div>
//             <button
//               onClick={nextTrait}
//               className="arrow-button"
//               aria-label="Next Toxic Trait"
//               type="button"
//             >
//               <img src={arrow} alt="Next" />
//             </button>
//           </div>
//         </div>
//         <div className="back">
//           <Link to="/Project">Back to Team!</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
