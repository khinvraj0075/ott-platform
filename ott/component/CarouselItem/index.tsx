import { Add, Cancel } from '@mui/icons-material';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import { Box, CardActionArea, List, ListItem } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CarouselItem({
  videoUrl,
  label,
  posterUrl,
}: {
  videoUrl: string;
  label: string;
  posterUrl: string;
}) {
  return (
    <Card
      sx={{
        maxWidth: 700,
        backgroundColor: 'black',
        position: 'relative',
        borderRadius: 'none',
      }}
    >
      <CardActionArea>
        <video
          // poster={posterUrl}
          muted
          autoPlay
          height='250'
          src={videoUrl}
          style={{ width: '100%' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: 1,
          }}
        >
          <Typography
            variant='h3'
            gutterBottom
            color={'white'}
            sx={{ position: 'absolute', right: 150, top: -30 }}
          >
            {label}
          </Typography>
        </div>
        <CardContent sx={{ color: 'white' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <PlayCircleFilledIcon sx={{ fontSize: 40, marginRight: 1 }} />

              <Add
                sx={{
                  fontSize: 40,
                  border: 3,
                  borderRadius: 50,
                  marginRight: 1,
                }}
              />
              <Cancel sx={{ fontSize: 40, marginRight: 1 }} />
              <RecommendOutlinedIcon sx={{ fontSize: 40, marginRight: 1 }} />
            </Box>
            <Box>
              <ExpandCircleDownOutlinedIcon sx={{ fontSize: 40 }} />
            </Box>
          </Box>
          <VolumeUpRoundedIcon
            sx={{
              fontSize: 40,
              border: 3,
              borderRadius: 50,
              position: 'absolute',
              top: 190,
              right: 30,
            }}
          />

          <Box sx={{ display: 'flex', alignItems: 'center', paddingY: 1 }}>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ border: 1, paddingX: 1, color: 'white' }}
            >
              U/A 13+
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary '
              sx={{ paddingX: 1 }}
            >
              2 Episodes
            </Typography>
            <Typography
              variant='body2'
              color='text.secondary'
              sx={{ border: 1, paddingX: 1, color: 'white' }}
            >
              HD
            </Typography>
          </Box>

          <List
            component={'ul'}
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              fontSize: 20,
            }}
          >
            <ListItem disablePadding alignItems={'flex-start'}>
              Goofy
            </ListItem>
            <ListItem>Varity Tv</ListItem>
            <ListItem sx={{ marginRight: 5 }}>celebrites</ListItem>
          </List>
        </CardContent>
        
      </CardActionArea>
    </Card>
  );
}
