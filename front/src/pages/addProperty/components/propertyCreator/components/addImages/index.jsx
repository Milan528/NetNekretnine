import { useState } from "react";
import ImageSlider from "../../../../../../components/imageSlider";
import { Container, ControlsContainer, ImageSliderContainer } from "./styles";

const AddImages = () => {
  // const inpitRef = createRef();
  // onClick={() => inpitRef.current.onClick()} //ako nekad ono htmlFor ne radi vise
  const [images, setImages] = useState([]);

  const changeHandler = (event) => {
    let files = Array.from(event.target.files).map((file) => {
      return URL.createObjectURL(file);
    });
    setImages(files);
  };

  return (
    <Container>
      <ImageSliderContainer>
        <ImageSlider slides={images} />
      </ImageSliderContainer>
      <ControlsContainer>
        <label htmlFor="files">Upload Images</label>
        <input
          // ref={inpitRef}
          onChange={changeHandler}
          type="file"
          id="files"
          name="files"
          multiple
          accept="image/png, image/jpeg, image/jpg"
        ></input>
      </ControlsContainer>
    </Container>
  );
};

export default AddImages;
