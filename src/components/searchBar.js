import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import Stack from '@mui/material/Stack'

const SearchBar = ({ func }) => {
  const [search, setSearch] = func;

  return (
    <Stack spacing={2} direction={"row"}>
      <TextField label="Search Artist" variant="outlined"  />
      <Button color="primary" variant="contained" ml={2} onClick={(e) => setSearch(e.target.value)}>
        Search
      </Button>
    </Stack>
  );
};

export default SearchBar;
