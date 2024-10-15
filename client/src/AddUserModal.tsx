import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { Profile } from './types';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface AddUserModalProps {
  open: boolean;
  handleClose: () => void;
  addProfile: (profile: Profile) => void;
}

function AddUserModal({ open, handleClose, addProfile }: AddUserModalProps) {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [gradYear, setGradYear] = useState('');
  const [traits, setTraits] = useState<string[]>(['', '', '', '', '']);
  const [image, setImage] = useState<File | null>(null);

  const handleTraitChange = (index: number, value: string) => {
    const newTraits = [...traits];
    newTraits[index] = value;
    setTraits(newTraits);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProfile: Profile = {
      name,
      imgURL: image ? URL.createObjectURL(image) : '',
      description: `${name}'s toxic traits`,
      school,
      gradYear,
      traitsList: traits,
    };
    addProfile(newProfile);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2" gutterBottom>
          Add New User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="School"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Graduation Year"
            value={gradYear}
            onChange={(e) => setGradYear(e.target.value)}
            margin="normal"
            required
          />
          {traits.map((trait, index) => (
            <TextField
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              fullWidth
              label={`Trait ${index + 1}`}
              value={trait}
              onChange={(e) => handleTraitChange(index, e.target.value)}
              margin="normal"
              required
            />
          ))}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            style={{ margin: '10px 0' }}
          />
          <Button type="submit" variant="contained" color="primary">
            Add User
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default AddUserModal;
