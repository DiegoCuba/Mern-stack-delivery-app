import styled  from 'styled-components'
import AppContext from '../../context/app-context'
import {  useContext} from 'react'
import {CartButton,CartIcon} from '../menu/MenuItem'
import shoopingCartIcon from '../../img/shopping-cart-solid.svg';
import useAddToCartButton from '../../hooks/useAddToCartButton'
import useProductDetails from '../../hooks/useProductDetails'
import {StyledLink } from '../Header'
import defaultImage from '../../img/default-image.png';

export const GoBackLink = styled(StyledLink)`
position:absolute;
left:15px;
margin: 0 ;
font-size:15px;
padding: 10px 0;
z-index:800;
&:before{
  content : "<-- ";
  margin-right:3px;
}
`;
const ProductDetails = styled.main`
    width: 90vw;
    padding: 58px 15px 20px;
    margin: 0px auto;
    display: flex;
  height: 100%;
max-height: 800px;
    flex-direction: column;
    justify-content: flex-start;
@media screen and (min-width:550px){
 width:70vw;
}
@media screen and (min-width:850px){
 width:50vw;
}
@media screen and (min-width:850px){
 width:50vw;
}
@media screen and (min-width:1200px){
    width: 70vw;
    height: 100%;
    max-height: 800px;
}
`
const PrductImg = styled.img`
position:relative;
left:50%;
transform:translate(-50%, 0);
max-width: 350px;
    max-height: 350px;
    height: 100%;

`;
const ImageWrapper =styled.div`
    min-height: 300px;
  background-image: ${props => props.isLoaded ? 'none' : `url(${defaultImage})`};
      background-repeat: no-repeat;
    background-size: 100% auto;
    backface-visibility: hidden;
    background-position: center;
   @media screen and (min-width:400px){
background-size: auto 100%;
    }
`;
const Name =styled.h2`
    margin: 10px 0 ;
letter-spasing:0;
line-height:35px;
max-width:200px;
font-size:30px;
text-transform:capitalize ;
@media screen and (min-width:600px){
  font-size:35px;
  margin-bottom: 20px;
  max-width:100%;
}
`
const Line = styled.div`

width:100%;
height:1px;
background:#fcaf01;
margin:5px auto;
`
;

const ThisCartButton =styled(CartButton)`
transform:scale(0.8);
margin-top:-45px;
margin-bottom:10px;
@media screen and (min-width:600px){
margin-top:-50px;
transform:scale(1);
}

`;
const Deltail = styled.p`
line-height:25px;
text-transform:capitalize ;
& > b {
color: ${props => props.theme.darckYellow};

}
`;
const Description = styled(Deltail)`
text-transform:none;

` 
export default function ProductDetailsPage(){


    const {cartProducts,addToCart,addToTotalCost,setIsLoading,isLoading}  = useContext(AppContext);

const {isInShoppingCart,isLoaded,thisProductInfo,goBackPath,setIsLoaded} = useProductDetails({cartProducts,setIsLoading})

 const {handlerAddToCartAndAddToTotalCost,isAdded} = useAddToCartButton(thisProductInfo,cartProducts,addToCart,addToTotalCost)


  return(
      isLoading ? null :   
      
<ProductDetails >
    
             <GoBackLink to={goBackPath} > Regresar</GoBackLink>
<ImageWrapper  isLoaded={isLoaded}>
  <PrductImg src={thisProductInfo?.img}  alt={thisProductInfo?.name} onLoad={()=> setIsLoaded(true)} />
  </ImageWrapper>
    <Line/>
  <Name>{thisProductInfo?.name}</Name>
  {(!isInShoppingCart) ? 
  <ThisCartButton isAdded={isAdded}
       onClick={ () =>
        {handlerAddToCartAndAddToTotalCost(thisProductInfo,thisProductInfo?.price)}
        }>
          <CartIcon style={{  position:'absolute'}} src={shoopingCartIcon} alt="add-to-cart"/>
          </ThisCartButton>
        : null
}
    <Line/>
     <Deltail><b>Categoría:</b>{thisProductInfo?.category}</Deltail>
   <Deltail><b>Porción:</b>{thisProductInfo?.size}</Deltail>
   <Deltail><b>Precio:</b>${thisProductInfo?.price}</Deltail>
  <Description><b>Descripción:</b>{thisProductInfo?.description}</Description>
    
  
</ProductDetails>
  );
}