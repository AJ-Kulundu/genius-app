import {
  Typography,
  Button,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  Box,
  CardActions,
  IconButton,
  CardContent,
  Link,
} from "@mui/material";
import AudiotrackSharpIcon from "@mui/icons-material/AudiotrackSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import { useSearchQuery } from "../services/api";
import nextLink from "next/link";

export default function Home() {
  const { data, isLoading, isSuccess } = useSearchQuery();

  return (
    <Box mt={4}>
      {isLoading && <Typography>Loading...</Typography>}
      {isSuccess && (
        <Grid
          container
          direction="row"
          columns={2}
          spacing={12}
          justifyContent="space-around"
          alignItems="center"
          rowSpacing={4}
          columnSpacing={4}
        >
          {data.response.hits.map((hits, id) => (
            <Grid item key={id}>
              <Card raised sx={{ maxWidth: 350 }}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ width: 56, height: 56 }}
                      alt={hits.result.artist_names}
                      src={hits.result.primary_artist.header_image_url}
                    />
                  }
                  title={hits.result.title_with_featured}
                  subheader={hits.result.artist_names}
                />
                <CardMedia
                  component="img"
                  height={300}
                  src={hits.result.header_image_thumbnail_url}
                  alt={hits.result.title_with_featured}
                />
                <CardContent>
                  <Typography>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions>
                  <nextLink passHref>
                    <Link href={hits.result.primary_artist.api_path}>
                      <IconButton aria-label="Artist Link">
                        <PersonSharpIcon />
                      </IconButton>
                    </Link>
                  </nextLink>
                  <IconButton aria-label="Song Link">
                    <AudiotrackSharpIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
