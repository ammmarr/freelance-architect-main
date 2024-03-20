import Slider from "react-slick";
import style from "./index.module.scss";
import { useRef } from "react";
import { TrendingFlat } from "@mui/icons-material";
const carouselData = [
  {
    h3: "Frank Lloyd Wright",
    p: "Form follows function; their unity embodies design, where purpose merges with artistry.",
  },
  {
    h3: "Zaha Hadid",
    p: "Designing for the future, my aim is to innovate spaces that inspire and endure.",
  },
  {
    h3: "Louis Kahn",
    p: "Great design begins immeasurably, evolves measurably, and ends immeasurably.",
  },
  {
    h3: "Mies van der Rohe",
    p: "Simplicity reigns supreme; 'Less is more' epitomizes design purity.",
  },
  {
    h3: "Le Corbusier",
    p: "Space, light, order—core elements shaping timeless architecture.",
  },
];
const QuotesCarousel = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  if (window.innerWidth < 630) {
    const clonedSettings = { ...settings, slidesToShow: 1 };
    settings = {
      ...clonedSettings,
    };
  }
  const sliderRef = useRef<Slider | null>(null);
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <TrendingFlat
          className={`${style.iconContainer} ${style.transformLeft}`}
          style={{ color: "inherite" }}
          onClick={goToPrevSlide}
        />

        <TrendingFlat
          className={`${style.iconContainer} ${style.transformRight}`}
          onClick={goToNextSlide}
        />
        <Slider {...settings} ref={(slider) => (sliderRef.current = slider)}>
          {carouselData.map((each: any, i: number) => (
            <div className={style.singleItemContainer} key={i}>
              <h3>{each.p}</h3>
              <p>{each.h3}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default QuotesCarousel;
