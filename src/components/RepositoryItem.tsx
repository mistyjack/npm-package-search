import { FC } from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export interface RepositoryItemProps {
  name: string;
  link: string;
}

const RepositoryItem: FC<RepositoryItemProps> = ({ name, link }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={link} target="_blank">
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

export default RepositoryItem;
