import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import farmer from "../assets/farmer.avif";
import soil from "../assets/soil.jpeg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          <span style={{ color: "hsl(134, 28%, 45%)" }}>सफल होगी फसल</span>

          <br />
          <span style={{ fontWeight: "400" }}>without any hustle</span>
        </h1>
        <p>
          कृषिCloud is a platform that offers a wide variety of fertilizers,
          website is designed to provide a seamless shopping experience for our
          customers. The user-friendly interface allows customers to browse
          through our products with ease, filter their search based on their
          specific requirements, and make purchases with just a few clicks.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={farmer} alt="farmer" className="main-img" />
        <img src={soil} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 1.5;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
