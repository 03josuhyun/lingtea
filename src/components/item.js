import React from "react";
//import Product from "../pages/Product";
//import productData from "../data/productDate";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProductCard = ({ product, onCartClick }) => {

  const navigate = useNavigate();

  return (

    <ItemBox>
      <ItemImg>
        <ProductImage
          src={product.image}
          alt={product.title}
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(`/detail/${product.id}`)}
        />

        <Cartbtn type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            try {
              if (typeof onCartClick === 'function') {
                onCartClick(product);
                alert("장바구니에 상품이 담겼습니다.");
              }
            } catch (error) {
              console.error("장바구니 담기 중 리덕스 에러 발생:", error);
              alert("장바구니 추가 중 오류가 발생했습니다. (스토어 코드를 확인하세요)");
            }
          }}
        >
          <img src={process.env.PUBLIC_URL + '/assets/btncart.png'} alt="장바구니" />
        </Cartbtn>
        <Heartbtn
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <img src={process.env.PUBLIC_URL + '/assets/btnheart.png'} alt="" />
        </Heartbtn>
      </ItemImg>
      <ItemInfo>
        <ItemTitle>
          {product.title}
        </ItemTitle>
        <ItemSmallTitle>
          {product.smalltitle}
        </ItemSmallTitle>
        <PriceBox>
          <Price>
            {product.price.toLocaleString()}원
          </Price>
          <Delprice>
            {product.delprice.toLocaleString()}원
          </Delprice>
        </PriceBox>
        <Pricedetail>
          {product.pricedetail}
        </Pricedetail>
      </ItemInfo>
    </ItemBox>

  );
};

export default ProductCard;

const ItemBox = styled.div`
width: 280px
`;

const ItemImg = styled.div`
position: relative;
  width: 280px;
  height: 280px;
`;

const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  cursor: pointer;
  display: block;
`;

const Cartbtn = styled.button`
position: absolute;
top: 10px;
right: 10px;
z-index: 100;

width: 30px;
height: 30px;
padding: 0;

border: none;
border-radius: 10px;
background-color: white;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

img {
    width: 30px;
    height: 30px;
    display: block;
  }
`;

const Heartbtn = styled.button`
position: absolute;
top: 50px;
right: 10px;
z-index: 100;

width: 30px;
height: 30px;
padding: 0;

border: none;
border-radius: 10px;
background-color: white;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

img {
    width: 30px;
    height: 30px;
    display: block;
  }
`;

const ItemInfo = styled.div `
height: 240px;
padding: 10px;
`;

const ItemTitle = styled.p `
font-size: 20px;
font-weight: blod;
`;

const ItemSmallTitle = styled.p `
font-size: 16px;
color: #777;
`;

const PriceBox = styled.div `
display: flex;
margin-top: 10px;
`;

const Price = styled.p `
font-size: 20px;
font-weight: normal;
`;

const Delprice = styled.del `
display: inline-block;
font-size: 16px;
font-weight: normal;
color: #777;
margin: 4px;
`;

const Pricedetail = styled.span `
border-radius: 10px;
color: #008bfc;
background-color: #ebf4fc;
padding: 5px 10px;
display: inline-block;
margin-top: 10px;
`;