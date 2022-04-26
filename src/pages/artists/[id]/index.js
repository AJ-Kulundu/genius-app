import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useArtistQuery } from "../../../services/api";
import {
  Box,
  Typography,
  List,
  ListItemText,
  Stack,
  Paper,
} from "@mui/material";
import Loader from "react-loaders";

function Artist() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading, isSuccess } = useArtistQuery(id);
  console.log(data);

  return (
    <div>
      {isLoading && (
        <Box height="75vh">
          <Loader type="pacman" />
        </Box>
      )}
      {error && <Typography>Error {error}occured</Typography>}
      {isSuccess && (
        <Box mt={2} mx={2} >
          <Paper sx={{p:4}} elevation={2}>
            <Typography>Artist:{data.response.artist.name}</Typography>
            <Image
              src={data.response.artist.image_url}
              alt={data.response.artist.name}
              width={200}
              height={200}
              borderRadius="lg"
            />
            <Typography variant="h6">AKA</Typography>
            <List>
              {data.response.artist.alternate_names.map((names, id) => (
                <ListItemText key={id} primary={names} />
              ))}
            </List>
          </Paper>
        </Box>
      )}
    </div>
  );
}

export default Artist;
