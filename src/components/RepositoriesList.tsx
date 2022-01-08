import { FC, FormEvent, useEffect, useState, useRef } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import RepositoryItem from './RepositoryItem';
import Typography from '@mui/material/Typography';

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };

  useEffect(() => {
    return inputRef.current?.focus();
  }, [inputRef]);

  console.log(data);
  return (
    <section>
      <Container sx={{ py: 5 }} maxWidth="md">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Search For a Package
          </Typography>
          <form onSubmit={onSubmit}>
            <TextField
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              fullWidth
              color="primary"
              placeholder="Search packages on NPM"
              id="search-box"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <Button type="submit" variant="contained" color="primary">
                      Search
                    </Button>
                  </InputAdornment>
                ),
              }}
              inputProps={{
                ref: inputRef,
              }}
            />
          </form>
        </Box>

        {error && <Alert severity="error">{error}</Alert>}
        {loading && <CircularProgress color="primary" />}
        {!error &&
          !loading &&
          data.map((name) => (
            <RepositoryItem
              name={name.split(' ')[0]}
              link={name.split(' ')[1]}
              key={name}
            />
          ))}
      </Container>
    </section>
  );
};

export default RepositoriesList;
