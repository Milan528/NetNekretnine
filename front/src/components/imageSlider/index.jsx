import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Container,
  ControlsContainer,
  Image,
  ImageContainer,
  Slide,
  SlidesContainer,
} from "./styles";

const ImageSlider = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    return () => {
      setActiveSlide(0);
    };
  }, [slides]);

  const handlePrevClick = () => {
    if (slides.length > 1) {
      if (activeSlide > 0) {
        setActiveSlide((prev) => prev - 1);
      } else {
        setActiveSlide(slides.length - 1);
      }
    }
  };

  const handleNextClick = () => {
    if (slides.length > 1) {
      if (activeSlide < slides.length - 1) {
        setActiveSlide((prev) => prev + 1);
      } else {
        setActiveSlide(0);
      }
    }
  };

  const createSlidingImages = (allImages) => {
    const slidingImages = [];
    let first = 0,
      second = 0,
      third = 0;

    if (allImages.length > 2) {
      first = activeSlide === 0 ? allImages.length - 1 : activeSlide - 1;
      second = activeSlide;
      third = activeSlide === allImages.length - 1 ? 0 : activeSlide + 1;
      slidingImages[0] = {
        index: first,
        content: allImages[first],
      };
      slidingImages[1] = {
        index: second,
        content: allImages[second],
      };
      slidingImages[2] = {
        index: third,
        content: allImages[third],
      };
    } else if (allImages.length === 2) {
      slidingImages[0] = {
        index: 0,
        content: allImages[0],
      };
      slidingImages[1] = {
        index: 1,
        content: allImages[1],
      };
    } else {
      slidingImages[0] = {
        index: activeSlide,
        content: allImages[activeSlide],
      };
    }
    return slidingImages;
  };

  const handleSlideClick = (slideIndex) => {
    setActiveSlide(slideIndex);
  };
  return slides.length > 0 ? (
    <Container>
      <ImageContainer>
        {console.log(activeSlide)}
        <Image image={slides[activeSlide]} />
      </ImageContainer>
      <ControlsContainer>
        <box-icon
          id="prev"
          name="chevron-left"
          type="solid"
          onClick={handlePrevClick}
        ></box-icon>
        <SlidesContainer>
          {createSlidingImages(slides).map((image, index) => {
            return (
              <Slide
                key={index}
                image={image.content}
                isSelected={
                  index ===
                  (slides.length === 2
                    ? activeSlide
                    : slides.length > 1
                    ? 1
                    : 0)
                }
                onClick={() => handleSlideClick(image.index)}
              />
            );
          })}
        </SlidesContainer>
        <box-icon
          id="next"
          name="chevron-right"
          type="solid"
          onClick={handleNextClick}
        ></box-icon>
      </ControlsContainer>
    </Container>
  ) : null;
};

export default ImageSlider;
