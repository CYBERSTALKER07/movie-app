import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import WatchLaterIcon from '@mui/icons-material/WatchLater'; // Import WatchLaterIcon
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../mainpath/Paths'; // Adjust the import path as needed

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  const handleNavigation = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate(PATHS.HOME);
        break;
      case 1:
        navigate(PATHS.SEARCH);
        break;
      case 2:
        navigate(PATHS.ARCHIVE);
        break;
      case 3:
        navigate(PATHS.WATCHLIST);
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleNavigation}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Search" icon={<SearchIcon />} />
          <BottomNavigationAction label="Watchlist" icon={<WatchLaterIcon />} /> {/* Add Watchlist */}
        </BottomNavigation>
      </Paper>
    </Box>  
  );
}