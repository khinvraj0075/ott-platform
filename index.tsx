'use client';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import CarouselItemWithPopover from '../CarouselItemWithPopover';

const AutoPlaySwipeableViews = SwipeableViews;

const videos = [
  {
    label: 'San',
    videoPath:
      'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
    posterPath: 'https://picsum.photos/200',
  },
  {
    label: 'Bird',
    videoPath:
      'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
    posterPath: 'https://picsum.photos/200',
  },
  {
    label: 'Bali',
    videoPath:
      'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
    posterPath: 'https://picsum.photos/200',
  },
  {
    label: 'Goč',
    videoPath:
      'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
    posterPath: 'https://picsum.photos/200',
  },
  {
    label: 'San ',
    videoPath:
      'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
    posterPath: 'https://picsum.photos/200',
  },
  {
    label: 'Bird',
    videoPath:
      'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
    posterPath: 'https://picsum.photos/200',
  },
  {
    label: 'Bali,',
    videoPath:
      'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
    posterPath: 'https://picsum.photos/200',
  },
  {
    label: 'Goč,',
    videoPath:
      'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
    posterPath: 'https://picsum.photos/200',
  },
  {
    label: 'San',
    videoPath:
      'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
    posterPath: 'https://picsum.photos/200',
  },
  {
    label: 'Bird',
    videoPath:
      'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
    posterPath: 'https://picsum.photos/200',
  },
  {
    label: 'San ',
    videoPath:
      'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
    posterPath: 'https://picsum.photos/200',
  },
  {
    label: 'Bird',
    videoPath:
      'https://utfs.io/f/916e1354-a1b6-4832-97ab-9fa95876b91a-bnyedt.mp4',
    posterPath: 'https://picsum.photos/200',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = Math.ceil(videos.length / 4);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  return (
    <Box sx={{ Width: 100, flexGrow: 1, position: 'relative' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
      >
        {Array.from({ length: maxSteps }).map((_, index) => (
          <div key={index}>
            <Box sx={{ display: 'flex' }}>
              {videos.slice(index * 4, index * 4 + 4).map((video, idx) => (
                <CarouselItemWithPopover
                  id={idx}
                  key={index}
                  videoUrl={video.videoPath}
                  posterUrl={video.posterPath}
                  lebal={video.label}
                />
              ))}
            </Box>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {activeStep !== maxSteps - 1 && (
        <Button
          size='small'
          onClick={handleNext}
          sx={{
            color: 'white',
            height: 250,

            position: 'absolute',
            top: '57.5%',
            left: '96.5%',
            transform: 'translate(-50%, -50%)',
            '&:hover': {
              height: 250,
              backgroundColor: 'black',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      )}

      {activeStep !== 0 && (
        <Button
          onClick={handleBack}
          sx={{
            color: 'white',
            height: 250,
            position: 'absolute',
            top: '57.5%',
            left: '3%',
            transform: 'translate(-50%,-50%)',
            fontSize: 'large',
            '&:hover': {
              height: 250,
              backgroundColor: 'black',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button>
      )}
    </Box>
  );
}

export default Carousel;
