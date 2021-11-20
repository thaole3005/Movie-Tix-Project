import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TODAY } from '../../../../util/setting';


const arrThu = [
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
    "Chủ nhật",
];


export default function ListDate() {
    const [value, setValue] = React.useState(0);
    // console.log("value", value)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    //   console.log("newValue", newValue)
    };


    const renderDate = () => {
        return [...arrThu,...arrThu].map((thu, index) => {
            const nextDay = new Date(TODAY);
            nextDay.setDate(TODAY.getDate() + index);
            // console.log("nexDay", nextDay.getDate());
            return (

                <Tab key={index} label={<div className="d-flex flex-column"> 
                        <span>{thu}</span>
                        {nextDay.getDate() < 10 ? <span>0{nextDay.getDate()}</span> : <span>{nextDay.getDate()}</span>  }
                    </div>} 
                />
            )
          
        })
    }


    return (
        <div className= "list_date_tab">
             <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        TabIndicatorProps={{
            style: { background: "red", height: "2px", bottom:0 }
        }}
      >
          {renderDate()}
        {/* <Tab label={<div className="d-flex flex-column"> <span>thứ 2</span> <span>01</span>  </div>} /> */}
        {/* <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" /> */}
      </Tabs>
        </div>
    )
}
