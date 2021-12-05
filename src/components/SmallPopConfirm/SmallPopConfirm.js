import React from 'react'
import { Popconfirm, message, Button } from 'antd';

// const text = 'Are you sure to delete this task?';

// function confirm() {
//   alert('Clicked on Yes.');
// }


export default function SmallPopConfirm(props) {
    const {children, title, okText, cancelText, confirmCallBack} = props;
    return (
    //     <Popconfirm
    //     placement="topRight"
    //     title={text}
    //     onConfirm={confirm}
    //     okText="Yes"
    //     cancelText="No"
    //   >
    //     <Button>TR</Button>
    //   </Popconfirm>


        <Popconfirm
        placement="topRight"
        title={title}
        onConfirm={confirmCallBack}
        okText={okText}
        cancelText={cancelText}
    >
        {children}
    </Popconfirm>
    )
}
