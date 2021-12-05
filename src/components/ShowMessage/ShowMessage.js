import { message, Button, Space } from 'antd';

export const showMessage = (typeMessage, text) => {
    message[typeMessage](text);
  };