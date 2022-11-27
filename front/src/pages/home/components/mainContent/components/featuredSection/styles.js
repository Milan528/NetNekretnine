import styled from "styled-components";

export const Section = styled.section`
  display: none;
  padding: 4.5rem 0 2rem;
  // @media screen and (min-width: 1025px) {
  //   padding: 7.5rem 0 1rem;
  // }
  // @media screen and (min-width: 769px) and (max-width: 1024px) {
  //   padding: 3rem 13rem;
  // }
  // @media screen and (min-width: 320px) and (max-width: 768px) {
  //   padding: 3.5rem 0 1rem;
  // }
`;

export const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  > span {
    color: var(--second-color);
    font-size: var(--small-font-size);

    @media screen and (min-width: 1025px) {
      font-size: var(--h2-font-size);
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: var(--h3-font-size);
    }
  }
  > h2 {
    font-size: var(--h1-font-size);
    margin-bottom: 1rem;
    > span {
      color: var(--second-color);
    }
  }
`;

export const MySwiperWrapper = styled.div`
  height: 400px;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: initial;
    bottom: 2.5rem;
    width: initial;
    height: initial;
    background-color: var(--container-color);
    border: 2px solid var(--text-color-light);
    padding: 6px;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    color: var(--first-color);
  }
  .swiper-button-prev {
    left: calc(50% - 3rem);
  }
  .swiper-button-next {
    right: calc(50% - 3rem);
  }
`;
