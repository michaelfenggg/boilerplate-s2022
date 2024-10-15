import React, { useState } from 'react';
import { Chip, Stack, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MichaelImage from './imgs/MichaelImage.jpg';
import IzzyImage from './imgs/izzy_pic.jpg';
import LihiniImage from './imgs/LihiniImage.png';
import './index.css';
import AddUserModal from './AddUserModal';

interface Profile {
  name: string;
  imgURL: string;
  description: string;
  school: string;
  gradYear: string;
  traitsList: string[];
}

const initialProfiles: Profile[] = [
  {
    name: 'Michael',
    imgURL: MichaelImage,
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
    imgURL: IzzyImage,
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
    imgURL: LihiniImage,
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
      <Card sx={{ maxWidth: 300, margin: 2, cursor: 'pointer', boxShadow: 3 }}>
        <img
          src={profile.imgURL}
          alt={profile.name}
          style={{
            width: '100%',
            height: 180,
            objectFit: 'cover',
          }}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {profile.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile.school} | Class of {profile.gradYear}
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
  const [profiles, setProfiles] = useState<Profile[]>(initialProfiles);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addProfile = (newProfile: Profile) => {
    setProfiles([...profiles, newProfile]);
  };

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
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        style={{ marginTop: '20px' }}
      >
        Add User
      </Button>
      <AddUserModal open={open} handleClose={handleClose} addProfile={addProfile} />
    </div>
  );
}

export default Project;