import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/couple.jpg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            At कृषि Cloud you will find a wide range of fertilizers to suit all
            types of plants as their need . We offer organic and synthetic
            fertilizers, as well as specialty fertilizers for specific plants.
            All of our products are carefully selected from reputable brands to
            ensure that our customers receive the best possible quality. At our
            ecommerce website, we are committed to making the shopping
            experience as easy and enjoyable as possible. We offer fast and
            reliable shipping, easy returns, and secure online payment options.
            With our competitive prices and exceptional customer service, we are
            the go-to destination for all your fertilizer needs. We Thank you
            for choosing कृषि Cloud. We look forward to helping you achieve your
            farming goals!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
