import styled from "styled-components";

const ProductImages = ({ image }) => {
  return (
    <Wrapper>
      <img src={image} alt="main" className="main" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }

  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    
  }
`;

export default ProductImages;
