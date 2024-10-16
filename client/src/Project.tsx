import React, { useState } from 'react';
import {
  Chip,
  Stack,
  Card,
  CardContent,
  Typography,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
// want to first create function that gets all users in the database 
// which will have the user_ids which we can then pass into deleteuser function
// set the list of initialprofiles to be equal to whatever is returned by the getAllUsers function
// then the list of initialprofiles will have ids that we can pass into axios
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

function ProfileCard({
  profile,
  onDelete,
}: {
  profile: Profile;
  onDelete: (name: string) => void;
}) {
  return (
    <Card sx={{ maxWidth: 300, margin: 2, cursor: 'pointer', boxShadow: 3 }}>
      <Link
        to={`/profiles/${profile.name}`}
        state={{ profile }}
        style={{ textDecoration: 'none' }}
      >
        <img
          src={profile.imgURL}
          alt={profile.name}
          style={{
            width: '100%',
            height: 180,
            objectFit: 'cover',
          }}
        />
      </Link>
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
        {/* Delete Button */}
        <Button
          variant="outlined"
          size="small"
          color="error"
          onClick={() => onDelete(profile.name)}
          style={{ marginTop: '7px', marginBottom: '-10px' }}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
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

  const deleteProfile = (name: string) => {
    // Filter out the profile with the given name
    // axios is basically connecting frontend to the backend (specifically routes)
    // axios.delete(`localhost:3000/Project/${userid}`)
    const updatedProfiles = profiles.filter((profile) => profile.name !== name);
    setProfiles(updatedProfiles);
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
          <ProfileCard
            key={profile.name}
            profile={profile}
            onDelete={deleteProfile}
          />
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
      <AddUserModal
        open={open}
        handleClose={handleClose}
        addProfile={addProfile}
      />
    </div>
  );
}

export default Project;
