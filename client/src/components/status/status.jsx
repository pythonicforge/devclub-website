import React from 'react';
import { StatusContainer, StatusIndicator, StatusText } from './status.styles';

const Status = ({ status }) => (
  <StatusContainer status={status}>
    <StatusIndicator status={status} />
    <StatusText>{status}</StatusText>
  </StatusContainer>
);

export default Status;