import styled from 'styled-components';

const Button = styled.button`
 
background-color: ${props => props.bc || "transparent"}; ;
border: ${props => props.border || 'none'};;
border-radius: ${props => props.radius || "3px"};;
margin: ${props => props.margin || "0"};
box-shadow: 0 0 3px 1px rgb(220, 220, 220);
padding: ${props => props.padding || "0.25rem 1.5rem"};;
color: ${props => props.color || "grey"};
font-size: ${props => props.fs || "1rem"};;
width: ${props => props.width || "100%"};

`;
const IconButton = styled.button`   
        border:none;
        background-color: transparent;
`;


const SubmitButton = styled(Button)`
    background-color: ${props => props.bgcolor || '#2563eb'};
    color: ${props => props.color || '#f8fafc'}; 
    font-weight: ${props => props.fw || '700'}; 
    font-size: ${props => props.fs || '14px'};
`

export {Button, IconButton, SubmitButton}


 
 