import { useState } from "react";
import Header from "../components/Header";
import { Typography, styled, Box, TextField, Button } from '@mui/material';
import Dropdown from "../components/Dropdown";
import { savePost } from "../services/api";
import { useNavigate } from "react-router-dom";
import { routePath } from "../routes/route";

const Component = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark' ? '#121212' : '#F5F5F5',
  padding: '80px 200px',
}));

const Container = styled(Box)(() => ({
  display: 'flex',
  background: '#ffffff',
  borderRadius: 20,
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 70px',
  color: '#000',
  boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
  '& > p': {
    fontSize: 35,
    fontWeight: 700
  }
}));

const FormWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 20,
  padding: 20,
  background: '#ffffff',
  color: '#000',
  borderRadius: 20,
  boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
  '& > *': {
    marginTop: '20px !important'
  }
}));

const defaultObj = {
  profile: '',
  type: '',
  description: '',
  experience: '',
  technology: [],
  salary: ''
};

const options = {
  type: ['Online', 'Offline'],
  experience: ['0-2 Years', '3-5 Years', '5 Years or more'],
  technology: ['Java', 'JavaScript', 'React', 'Angular', 'Node.js', 'Docker', 'AWS', 'HTML', 'CSS'],
  salary: ['Rs 0-300000', 'Rs 300000-500000', 'Rs 500000-800000', 'Rs 800000-1000000', 'Rs 1000000-1500000', 'Rs 1500000-2000000', 'Rs 2000000 or more']
};

const CreatePost = () => {
  const [data, setData] = useState(defaultObj);

  const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3zkKYlIHjjoQrE4e-a5xiJIaK0reWlcDhewsx8rjV87d8M82";
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, multiple } = e.target;

    if (multiple) {
      setData({
        ...data,
        [name]: typeof value === 'string' ? value.split(',') : value
      });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const saveJob = async () => {
    await savePost(data);
    navigate(routePath.posts);
  };

  return (
    <>
      <Header />
      <Component>
        <Container>
          <Typography>Create a job post</Typography>
          <img src={image} alt="create" style={{ maxHeight: 180 }} />
        </Container>

        <FormWrapper>
          <TextField
            placeholder="Job title"
            onChange={handleChange}
            name="profile"
            value={data.profile}
            InputProps={{
              sx: {
                color: '#000',
                backgroundColor: '#fff',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#000',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#000',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#000',
                }
              }
            }}
          />

          <Dropdown
            id="job-type-label"
            value={data.type}
            handleChange={handleChange}
            name="type"
            label="Job Type"
            options={options.type}
          />

          <TextField
            placeholder="Job description"
            onChange={handleChange}
            name="description"
            value={data.description}
            multiline
            rows={4}
            InputProps={{
              sx: {
                color: '#000',
                backgroundColor: '#fff',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#000',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#000',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#000',
                }
              }
            }}
          />

          <Dropdown
            id="experience-label"
            value={data.experience}
            handleChange={handleChange}
            name="experience"
            label="Experience"
            options={options.experience}
          />

          <Dropdown
            id="technology-label"
            value={data.technology}
            handleChange={handleChange}
            name="technology"
            label="Technology"
            options={options.technology}
            multiple
          />

          <Dropdown
            id="salary-label"
            value={data.salary}
            handleChange={handleChange}
            name="salary"
            label="Salary"
            options={options.salary}
          />

          <Button
            variant="contained"
            onClick={saveJob}
            sx={{
              backgroundColor: '#2557A7',
              color: '#fff',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: '#1c4489'
              }
            }}
          >
            Save Job
          </Button>
        </FormWrapper>
      </Component>
    </>
  );
};

export default CreatePost;
