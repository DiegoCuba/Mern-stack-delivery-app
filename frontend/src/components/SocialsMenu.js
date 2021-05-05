import styled  from 'styled-components'
import facebook from '../img/facebook-f-brands.svg'
import instagram from '../img/instagram-brands.svg'
import twitter from '../img/twitter-brands.svg'
const StyledSocialsMenu = styled.article`
display:flex;
padding:20px 0;
justify-content:center;
`;
const SocialLink= styled.div`
display:grid;
width:30px;
height:30px;
background-color:#fcba1c;
border-radius:50%; 
margin: 0 5px;
cursor:pointer;
transition:all 0.5s ease;
&:hover{
  background-color: ${ (props )=> (props.primary ? "#F0F0F0" : "#F0F0F0")};
}

`;
const SocialIcone= styled.img`
width:20px;
height:20px;
place-self:center;
`;



export default function SocialsMenu(props){

  return(
    <StyledSocialsMenu>
        <SocialLink as="a" href="/"><SocialIcone src={facebook} alt="facebook"></SocialIcone></SocialLink>
        <SocialLink as="a" href="/"><SocialIcone src={instagram} alt="instagram"></SocialIcone></SocialLink>
        <SocialLink as="a" href="/"><SocialIcone src={twitter} alt="twitter"></SocialIcone></SocialLink>
    
    </StyledSocialsMenu>
  )
}