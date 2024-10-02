import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import SchoolIcon from '@mui/icons-material/School';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';

import { TextField, Link, Typography, Grid } from '@mui/material';

/*List of profile information: */

/*MICHAEL - For the chips, look into incorporating it into the getProfiles() function +
  adding the chip info for each person into the profiles list*/
const profiles =  [
  {
    name: "Michael",
    imgURL: "https://www.google.com/imgres?q=stonks&imgurl=https%3A%2F%2Fcompote.slate.com%2Fimages%2F926e5009-c10a-48fe-b90e-fa0760f82fcd.png%3Fcrop%3D680%252C453%252Cx0%252Cy0&imgrefurl=https%3A%2F%2Fslate.com%2Fbusiness%2F2021%2F01%2Fstonks-not-stocks-got-it.html&docid=QqB3e8yppKhc2M&tbnid=hqSdxqwaUXHnCM&vet=12ahUKEwjUg8DEqPCIAxVuGFkFHclXGfAQM3oECBkQAA..i&w=680&h=453&hcb=2&ved=2ahUKEwjUg8DEqPCIAxVuGFkFHclXGfAQM3oECBkQAA",
    description:"Michael's toxic traits"
  },
  {
    name: "Izzy",
    imgURL: "https://www.google.com/imgres?q=stonks&imgurl=https%3A%2F%2Fcompote.slate.com%2Fimages%2F926e5009-c10a-48fe-b90e-fa0760f82fcd.png%3Fcrop%3D680%252C453%252Cx0%252Cy0&imgrefurl=https%3A%2F%2Fslate.com%2Fbusiness%2F2021%2F01%2Fstonks-not-stocks-got-it.html&docid=QqB3e8yppKhc2M&tbnid=hqSdxqwaUXHnCM&vet=12ahUKEwjUg8DEqPCIAxVuGFkFHclXGfAQM3oECBkQAA..i&w=680&h=453&hcb=2&ved=2ahUKEwjUg8DEqPCIAxVuGFkFHclXGfAQM3oECBkQAA",
    description:"Izzy's toxic traits"
  },
  {
    name: "Lihini",
    imgURL: "https://www.google.com/imgres?q=stonks&imgurl=https%3A%2F%2Fcompote.slate.com%2Fimages%2F926e5009-c10a-48fe-b90e-fa0760f82fcd.png%3Fcrop%3D680%252C453%252Cx0%252Cy0&imgrefurl=https%3A%2F%2Fslate.com%2Fbusiness%2F2021%2F01%2Fstonks-not-stocks-got-it.html&docid=QqB3e8yppKhc2M&tbnid=hqSdxqwaUXHnCM&vet=12ahUKEwjUg8DEqPCIAxVuGFkFHclXGfAQM3oECBkQAA..i&w=680&h=453&hcb=2&ved=2ahUKEwjUg8DEqPCIAxVuGFkFHclXGfAQM3oECBkQAA",
    description:"Lihini's toxic traits"
  },
];

function Project() {
  return (
    <div>
      <Typography variant="h2" textAlign="center">
      Meet the Squaddd
     </Typography>

      <div>
        {profiles.map((profile) => (<Link to={{pathname: /profiles/${profile.name}, state: {profile}, }}></Link>))}
      </div>
    </div>
  );
}

function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<SchoolIcon />} label="SEAS" color="info" />
      <Chip label="2028" color="info" />
    </Stack>
  );
}

function getProfiles() {
  return profiles.map((profile, index) =>
    <div className = "profile_card" key = "index">
      <img className = "profile_img" src = {profile.imgURL} />
      <h3>{profile.name}</h3> 
      <p>{profile.description}</p> 

    </div>
  
  )
}

export default Project;
