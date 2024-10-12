import React from 'react';
import { Chip, Stack, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
≤ HEAD
import MichaelImage from './imgs/MichaelImage.jpg';
import IzzyImage from './imgs/IzzyImage.png';
import LihiniImage from './imgs/LihiniImage.jpg';
=======
// import SchoolIcon from '@mui/icons-material/School';
>>>>>>> 56db2e908f3076e4d2beab8f47d2a0246e9f5695

interface Profile {
  name: string;
  imgURL: string;
  description: string;
  school: string;
  gradYear: string;
  traitsList: string[];
}

const profiles: Profile[] = [
  {
    name: 'Michael',
<<<<<<< HEAD
    imgURL: MichaelImage,
=======
    imgURL: './imgs/michael_pic.jpg',
>>>>>>> 56db2e908f3076e4d2beab8f47d2a0246e9f5695
    description: "Michael's toxic traits",
    school: 'SEAS/Wharton',
    gradYear: '2028',
    traitsList: [
      'will eat more than half your food if you split it with me!',
      'might fuck up your hair if you come for a haircut',
      "be a bitch when i'm hungry",
      'will not put things in my calendar',
      'will not wake up before 12pm',
    ],
  },
  {
    name: 'Izzy',
<<<<<<< HEAD
    imgURL: IzzyImage,
=======
    imgURL: './imgs/izzy_pic.png',
>>>>>>> 56db2e908f3076e4d2beab8f47d2a0246e9f5695
    description: "Izzy's toxic traits",
    school: 'SEAS',
    gradYear: '2027',
    traitsList: [
      'is allergic to everything',
      'will fall asleep when watching movies',
      'enjoys climbing like all engineering majors',
      "doesn't have music taste",
      "can't remember birthdays",
    ],
  },
  {
    name: 'Lihini',
<<<<<<< HEAD
    imgURL: LihiniImage,
=======
    imgURL: './imgs/lihini_pic.jpg',
>>>>>>> 56db2e908f3076e4d2beab8f47d2a0246e9f5695
    description: "Lihini's toxic traits",
    school: 'SEAS',
    gradYear: '2028',
    traitsList: [
      'split ends',
      'actually enjoys bojack horseman',
      'closeted celiac',
      'in an improv group',
      'always cold',
    ],
  },
];

function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Link
      to={`/profiles/${profile.name}`}
      state={{ profile }}
      style={{ textDecoration: 'none' }}
    >
      <Card sx={{ maxWidth: 200, margin: 2, cursor: 'pointer' }}>
        <img
          src={profile.imgURL}
          alt={profile.name}
          style={{
            width: '100%',
            height: 150,
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {profile.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile.description}
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center" mt={1}>
            <Chip label={profile.school} color="primary" />
            <Chip label={profile.gradYear} color="secondary" />
          </Stack>
        </CardContent>
      </Card>
    </Link>
  );
}

function Project() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Meet the Team
      </Typography>
      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
        {profiles.map((profile) => (
          <ProfileCard key={profile.name} profile={profile} />
        ))}
      </div>
    </div>
  );
}

<<<<<<< HEAD
=======
// function BasicChips() {
//   return (
//     <Stack direction="row" spacing={1}>
//       <Chip icon={<SchoolIcon />} label="SEAS" color="info" />
//       <Chip label="2028" color="info" />
//     </Stack>
//   );
// }

function getProfiles() {
  return profiles.map((profile, index) => (
    <div className="profile_card" key="index">
      <img className="profile_img" alt="profile_image" src={profile.imgURL} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <Stack direction="row" spacing={1}>
        {/* <Chip icon={<SchoolIcon />} label={profile.school} color="info" /> */}
        <Chip label={profile.gradYear} color="secondary" />
      </Stack>
    </div>
  ));
}

>>>>>>> 56db2e908f3076e4d2beab8f47d2a0246e9f5695
export default Project;
