import React from 'react'
import ShowTimeBody from './ShowTimeBody';

export default function ShowTime(props) {

    
    return (
        <div className="showTime">
            <div className="showTime_header"></div>
            <div className="showTime_body">  
                <ShowTimeBody/>
            </div>
            <div className="showTime_footer"></div>

        </div>
    )
}
