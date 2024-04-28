'use client';
// import { Box, Paper, Popover } from '@mui/material';
// import React from 'react';
// import CarouselItem from '../CarouselItem';

// export default function CarouselItemWithPopover({
//   videoUrl,
//   posterUrl,
//   id,
// }: {
//   videoUrl: string;
//   posterUrl: string;
//   id: number;
// }) {
//   const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

//   const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };
//   const open = Boolean(anchorEl);

//   return (
//     <Box
//       sx={{
//         flex: 1,
//         margin: '5px',
//         position: 'relative',
//       }}
//     >
//       <Paper
//         sx={{
//           height: 255,
//           display: 'block',
//           overflow: 'hidden',
//           width: '100%',
//           backgroundImage: `url(${posterUrl})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           color: 'white',
//           padding: '20px',
//         }}
//         aria-owns={open ? 'mouse-over-popover' : undefined}
//         aria-haspopup='true'
//         onMouseEnter={handlePopoverOpen}
//         onMouseLeave={handlePopoverClose}
//       ></Paper>
//       <Popover
//         anchorOrigin={{
//           vertical: 'center',
//           horizontal: 'center',
//         }}
//         transformOrigin={{
//           vertical: 'center',
//           horizontal: 'center',
//         }}
//         sx={{
//           pointerEvents: 'none',
//         }}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handlePopoverClose}
//         disableRestoreFocus
//       >
//         <CarouselItem videoUrl={videoUrl} />
//       </Popover>
//     </Box>
//   );
// }

import { Box, Paper, Popover, Typography } from '@mui/material';
import React from 'react';
import CarouselItem from '../CarouselItem';

export default function CarouselItemWithPopover({
  videoUrl,
  posterUrl,
  lebal,
  id,
}: {
  videoUrl: string;
  posterUrl: string;
  lebal: string;
  id: number;
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  let timeout: ReturnType<typeof setTimeout>;

  function handlePopoverOpen(event: React.MouseEvent<HTMLElement>) {
    const target = event.currentTarget;
    timeout = setTimeout(() => {
      setAnchorEl(target);
    }, 500);
  }

  const handlePopoverClose = () => {
    console.log('hello');
    clearTimeout(timeout);
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <Box
        sx={{
          flex: 1,
          margin: '5px',
          position: 'relative',
        }}
      >
        <Paper
          sx={{
            height: 255,
            display: 'block',
            overflow: 'hidden',
            width: '100%',
            backgroundImage: `url(${posterUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: '20px',
          }}
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup='true'
          onMouseEnter={(e) => handlePopoverOpen(e)}
        >
          <Typography variant='h3' component='h2' color={'white'}>
            {lebal}
          </Typography>
        </Paper>
      </Box>
      <Box
    onMouseEnter = {() => console.log('mouser entered ')}
       onMouseLeave={handlePopoverClose}>
        <Popover
          id='mouse-over-popover'
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          sx={{
            pointerEvents: 'none',
            transitionDelay: '10s',
          }}
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <CarouselItem
            videoUrl={videoUrl}
            label={lebal}
            posterUrl={posterUrl}
          />
        </Popover>
      </Box>
    </>
  );
}
