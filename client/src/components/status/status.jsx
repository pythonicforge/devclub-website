import React from 'react'
import { StatusContainer, StatusIndicator, StatusText } from './status.styles';

const Status = ({ status }) => {
  return (
    <StatusContainer status={status}>
        <StatusIndicator status={status}/>
      <StatusText>In Progress</StatusText>
    </StatusContainer>
  );
};

export default Status