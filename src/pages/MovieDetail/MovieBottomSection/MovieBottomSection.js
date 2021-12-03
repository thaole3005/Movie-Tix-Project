import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import LichChieu from './LichChieu/LichChieu';
import ThongTin from './ThongTin';
import DanhGia from './DanhGia/DanhGia';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles(theme => ({
    indicator: {
      background: "cyan", height: "10px", top: "35px" 
    }
  }));

  
export default function MovieBottomSection(props) {
 
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    
    const movieBottomSection = useRef(null);
    useEffect(() => {
     
      // console.log("height bottom", movieBottomSection.current.offsetTop);
      //lấy chiều cao của MovieBottomSection so với top
      let movieBottomHeight = movieBottomSection.current.offsetTop;
      props.setMovieBottomSection_Height(movieBottomHeight);
  
  }, [])

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };


    return (
        <div className="container movie_bottom_section" ref={movieBottomSection}>
        <Box sx={{ bgcolor: 'none', width: 600, margin: '0 auto'}}>
      <AppBar position="static" style={{boxShadow:"none", outline: 'none',backgroundColor:"transparent"}} >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        //   TabIndicatorProps={{ className: classes.indicator }}
        TabIndicatorProps={{
            style: { background: "red", height: "3px", bottom:0 }
          }}
        >
          <Tab label="Lịch chiếu" {...a11yProps(0)} className ="tab_header"/>
          <Tab label="Thông tin" {...a11yProps(1)}  className ="tab_header"/>
          <Tab label="Đánh giá" {...a11yProps(2)}  className ="tab_header"/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <LichChieu/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ThongTin/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <DanhGia/>
        </TabPanel>
      </SwipeableViews>
    </Box>
        </div>
    )
}
