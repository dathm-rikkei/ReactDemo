import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";

const MediaCard = (imageSource: any) => {
    return (
        <Card >
                  <CardHeader
         subheader="September 14, 2016"
      />
            <CardMedia sx={{ height: 100 }} image={imageSource.imageSource} title="green iguana" />
            <CardActions>
            </CardActions>
        </Card>
    );
};
export default MediaCard;
