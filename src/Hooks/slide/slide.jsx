import slide1 from "../../Image/slide/slide1.svg";
import slide2 from "../../Image/slide/slide2.svg";
import slide3 from "../../Image/slide/slide3.svg";
import slide4 from "../../Image/slide/slide4.svg";
import slide5 from "../../Image/slide/slide5.svg";
import right from "../../Image/slide/right.png";
import left from "../../Image/slide/left.png";
import { styled } from "styled-components";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import SlideBox from "./style";

const Img = styled.img``;

const ImgSlider = () => {
  const data = [slide1, slide2, slide3, slide4, slide5];

  return (
    <SlideBox>
      <Carousel
        fullHeightHover={true}
        interval={3000}
        autoPlay={true}
        infiniteLoop={true}
        NextIcon={<Img src={right} alt="NextBtn"></Img>}
        PrevIcon={<Img src={left} alt="PrevBtn"></Img>}
        animation="slide"
        className="carousel"
      >
        {data &&
          data.map((item, idx) => {
            return (
              <Paper key={idx}>
                <img src={item} alt="slide-Img" className="Imgslider" />
              </Paper>
            );
          })}
      </Carousel>
    </SlideBox>
  );
};

export default ImgSlider;
