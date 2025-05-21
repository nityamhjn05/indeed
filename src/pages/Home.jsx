import React from 'react';
import Header from '../components/Header';
import { Box, Typography, Button, styled, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routePath } from '../routes/route';

const HeroContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '60px 80px',
  height: 'calc(100vh - 64px)',
  backgroundColor: theme.palette.mode === 'dark' ? '#1E2A38' : '#f5f5f5',
  borderRadius: '0 0 60px 60px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    padding: '40px 20px',
  },
}));

const TextBox = styled(Box)(({ theme }) => ({
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    marginTop: '30px',
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '3.5rem',
  lineHeight: 1.25,
  fontWeight: 700,
  marginBottom: '32px',
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
}));

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const animatedImage =
    "https://images.ctfassets.net/pdf29us7flmy/5r34jiS1YfJuoRzqp3XH6y/6fba6547e16cd0ad08ae28dad306015d/Screen_Shot_2023-01-11_at_9.21.31_AM.png";

  return (
    <>
      <Header />
      <HeroContainer>
        <TextBox>
          <StyledTypography>
            Let's make your next <br />
            great hire. Fast.
          </StyledTypography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate(routePath.create)}
            sx={{
              width: 220,
              height: 60,
              fontSize: 16,
              fontWeight: 700,
              textTransform: 'none',
              borderRadius: 2,
            }}
          >
            Post a job
          </Button>
        </TextBox>

        <ImageBox>
          <img
            src={animatedImage}
            alt="home"
            style={{
              width: '650px',       // 🔼 Increased from 500px
              maxWidth: '100%',
              borderRadius: '16px',
            }}
          />
        </ImageBox>
      </HeroContainer>
    </>
  );
};

export default Home;
