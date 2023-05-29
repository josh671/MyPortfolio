import { Card, CardContent, Typography } from '@mui/material';

function MyCard() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Card content goes here.
          </Typography>
        </CardContent>
      </Card>
    );
  }

export default MyCard;