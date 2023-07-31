import React from 'react'
import { Typography, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 10,
    margin: '20px 80px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid gray',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}))

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography variant='h3' align='center'>
          Web-RTC Video Chat
        </Typography>
      </AppBar>
      {/* VidePlayer */}
      <VideoPlayer />
      {/* Options -> Notifications */}
      <Options>
        <Notifications />
      </Options>
    </div>
  )
}

export default App