import Box from '@mui/material/Box';
import { FC } from 'react';
import { useHelpDialog } from '../use-help-dialog';
import './App.css';
import Game from './Game';
import HelpDialog from './HelpDialog';

const App: FC = () => {
  const { isDialogShown, hideDialog } = useHelpDialog();

  return (
    <Box pt={10}>
      <Game />
      <HelpDialog open={isDialogShown} onClose={hideDialog} />
    </Box>
  );
};

export default App;
