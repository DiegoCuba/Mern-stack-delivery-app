
import styled  from 'styled-components'

   export  const Button= styled.a`
     box-shadow: 0 0 4px rgba(0,0,0,0.5);
padding: 15px 40px;
color:#fff;
width:max-content;
 background: #fcba1c;
  text-transform: uppercase;
  text-align:center;
  font-size: 16px;
  font-family: "Oswald", sans-serif;
  font-weight:600px;
 line-height:23.5px;
  cursor:pointer;
  letter-spacing:2px;
  border-radius:4px;
    text-decoration: none;
  transition:all 0.5s ease;
  &:hover{
    background-color:#171717 ;
  }
  & > * {
    cursor:pointer;
  }
    @media screen and (max-width: 550px){
   transform:scale(0.8);
`;
export const ButtonPrimary = styled(Button)`
  background:#e83c2e;
`;


