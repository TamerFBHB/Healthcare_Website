import styled from 'styled-components';

export const Heading = styled.h1`
text-align: center;
color: green;
`;

export const Content = styled.div`
overflowY: scroll;
height: 2500px;
`;

export const Button = styled.div`
position: fixed;
width: fit-content;
right: 20px ;
bottom: 40px;
font-size: 3rem;
z-index: 1;
cursor: pointer;
color: var(--btnColor);
`
