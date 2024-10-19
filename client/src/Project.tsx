import React, { useState, useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';

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

// const initialProfiles: Profile[] = [
//   {
//     name: 'Michael',
//     imgURL: MichaelImage,
//     description: "Michael's toxic traits",
//     school: 'SEAS/Wharton',
//     gradYear: '2028',
//     traitsList: [
//       'will eat more than half your food if you split it with me!',
//       'might fuck up your hair if you come for a haircut',
//       "be a bitch when i'm hungry",
//       'will not put things in my calendar',
//       'will not wake up before 12pm',
//     ],
//   },
//   {
//     name: 'Izzy',
//     imgURL: IzzyImage,
//     description: "Izzy's toxic traits",
//     school: 'SEAS',
//     gradYear: '2027',
//     traitsList: [
//       'is allergic to everything',
//       'will fall asleep when watching movies',
//       'enjoys climbing like all engineering majors',
//       "doesn't have music taste",
//       "can't remember birthdays",
//     ],
//   },
//   {
//     name: 'Lihini',
//     imgURL: LihiniImage,
//     description: "Lihini's toxic traits",
//     school: 'SEAS',
//     gradYear: '2028',
//     traitsList: [
//       'split ends',
//       'actually enjoys bojack horseman',
//       'closeted celiac',
//       'in an improv group',
//       'always cold',
//     ],
//   },
// ];
// we want onDelete in profilecard after profile, and onDelete: (name: string) => void; after the profile: Profile

function ProfileCard({ profile, onDelete }: { profile: Profile; onDelete: (id: string) => void }) {
  const getImageSrc = (imgURL?: string) => {
    console.log(imgURL);
    if (!imgURL) {
      console.log("no imgurl");
      return MichaelImage;
    }
    if (imgURL.startsWith('http') || imgURL.startsWith('https')) {
      console.log("imgurl starts with http or https!");
      return imgURL;
    }
    try {
      console.log("trying cuz it didn't work :(");
      return require(`./imgs/${imgURL}`).default;
    } catch {
      console.log("catching cuz it didn't work again :(");
      return MichaelImage;
    }
  };
  
  return (
    <Card sx={{ maxWidth: 300, margin: 2, cursor: 'pointer', boxShadow: 3 }}>
      <Link
        to={`/profiles/${profile.name}`}
        state={{ profile }}
        style={{ textDecoration: 'none' }}
      >
        <img
          src={getImageSrc(profile.imgURL)}
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
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [open, setOpen] = useState(false);
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/toxicPerson/all');
      console.log('response');
      console.log(response);
      const jsonData = await response.json();
      console.log('jsonData');
      console.log(jsonData);
      setProfiles(jsonData);
    } catch (error) {
      console.error('There was an error fetching the data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleProfileClick = (profile: Profile) => {
    navigate('/profile', { state: { profile } });
  };

  const addProfile = async (newProfile: Profile) => {
    console.log(newProfile);
    await fetch('http://localhost:4000/api/toxicPerson/createPerson', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProfile),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  async function deleteProfile(name: string): Promise<void> {
    try {
      const response = await fetch(`http://localhost:4000/api/toxicPerson/deletePerson/${name}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete profile');
      }

      console.log('Profile deleted successfully');
      await fetchData(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  }

  // const deleteProfile = (name: string) => {
  //   // Filter out the profile with the given name
  //   // axios is basically connecting frontend to the backend (specifically routes)
  //   // axios.delete(`localhost:3000/Project/${userid}`)
  //   const updatedProfiles = profiles.filter((profile) => profile.name !== name);
  //   setProfiles(updatedProfiles);
  // };

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
            onDelete={deleteProfile}
            profile={profile}
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
