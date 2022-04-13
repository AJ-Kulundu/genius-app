import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const SearchBar = () => {
  return (
    <TextField label="Search Artist" variant="outlined">
      <InputAdornment position="end">
        <IconButton >
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    </TextField>
  );
};

export default SearchBar;
