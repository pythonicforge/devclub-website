import styled from 'styled-components';

export const StatusContainer = styled.div`
    border-radius: 2rem;
    font-family: ${({ theme }) => theme.typography.font};
    display: flex;
    align-items: center;
    gap: 0.35rem;
    padding: 2.5px 1rem;
    justify-content: center;
    background-color: ${({ status }) => {
        switch (status) {
            case 'upcoming':
                return '#f0f0f0';
            case 'in progress':
                return '#fff9c6'; 
            case 'running':
                return '#DEFFE1'; 
            default:
                return '#ffffff';
        }
    }};
    color: ${({ status }) => {
        switch (status) {
            case 'upcoming':
                return '#000000'; 
            case 'in progress':
                return '#aea026';
            case 'running':
                return '#007D02';
            default:
                return '#000000';
        }
    }};
`

export const StatusIndicator = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ status }) => {
        switch (status) {
            case 'upcoming':
                return '#000000';
            case 'in progress':
                return '#aea026';
            case 'running':
                return '#007D02';
            default:
                return '#ffffff';
        }
    }};
`

export const StatusText = styled.p`
    font-size: 1rem;
    padding: 0;
    margin: 0;
    text-transform: capitalize;
`