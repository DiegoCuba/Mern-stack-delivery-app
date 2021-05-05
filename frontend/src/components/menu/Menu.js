import styled  from 'styled-components'
import useMenuProductsDispayer from '../../hooks/useMenuProductsDispayer'
import useMenuSorter from '../../hooks/useMenuSorter'
import AppContext from '../../context/app-context'
import {   useContext } from 'react'
import SearchBar from '../SearchBar'
import SortProductsOptions from '../SortProductsOptions'
import Item  from './MenuItem'


const StyledMenu= styled.section`
min-height:100vh;
width:100vw;
padding: 58px 15px 15px 15px;
margin:0;

margin-bottom:20px;
text-aling:center;

`;
export const SectionTitle= styled.h2`
text-align:center;
text-transform: uppercase;
color:#fcba1c;
text-shadow: 2px 2px 2px #000;
`;
const MenuWrapper= styled.section`
display:flex;
flex-wrap: wrap;

padding: 20px 0;
margin: 0 0px;
width:100%;

`;
const CategoryTitle = styled.h3 `
text-align:center;
margin: 10px 5px;
text-shadow: -1px -1px 0 #fcba1c;
text-transform:capitalize ;
& + h3:before {
  content:"- ";
}
`
const CategoryWrapper = styled.article`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:center;
`;
export const ProductsSection = styled.div`
display:flex;

flex-flow:row wrap;
padding:0 ;
 justify-content:center;
 justify-content:center;
width: 95%;
margin:0 auto;

`;
export const NotFaundMessage = styled.h4`
margin-top: 20px;

`;


export default function Menu() {

    const {products,menuSortPreference,isLoading}  = useContext(AppContext);
    let {menuSearchQuery}  = useContext(AppContext);
const activeProducts = products.filter(product=> product.active === true ) 
  const getCategorysFilter = activeProducts.map(product => product.category);
  const categorys=[ ...new Set(getCategorysFilter)];

  const {toDisplayProducts} =useMenuProductsDispayer(menuSearchQuery,activeProducts)


 let {sortProducts} = useMenuSorter(menuSortPreference,toDisplayProducts)


 
  return(
  isLoading ? null :   

  <StyledMenu>

    <SectionTitle>Menú</SectionTitle>

<SearchBar/>


<MenuWrapper>


<CategoryWrapper >
  {categorys.map((category, index) =>
   <CategoryTitle key={index}>{category}</CategoryTitle>
)}
</CategoryWrapper >

<SortProductsOptions/>

  <ProductsSection >

    {   sortProducts.length !== 0 ?
       sortProducts.map(product =>

<Item key={product._id } item={product}/>)
 :
  <NotFaundMessage>No se han encontrado coincidencias, intenta de nuevo!!</NotFaundMessage>
  }

    
    </ProductsSection>


</MenuWrapper>


    
</StyledMenu>
  
);
}
  