import headerImage from "../../assets/headerImage.png";
import phoneCategoryImage from "../../assets/phoneCategoryImage.svg";
import deliveryIcon from "../../assets/deliveryIcon.svg";
import priceIcon from "../../assets/priceIcon.svg";
import discountIcon from "../../assets/discountIcon.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import style from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={style.LandingContainer}>
      <header className={style.headerContainer}>
        <div className={style.headerSecOne}>
          <div className={style.secOneInfo}>
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Id leo
              in vitae turpis massa sed elementum. Pharetra vel turpis nunc eget
              lorem dolor sed viverra.
            </p>
          </div>
          <div className={style.secOneBtn}>
            <button>Ver más</button>
          </div>
        </div>
        <div className={style.headerSecTwo}>
          <img src={headerImage} alt="Man with shoping bags" />
        </div>
      </header>
      <div className={style.bodyContainer}>
        <div className={style.featuresContainer}>
          <div className={style.featureTitle}>
            <h2>Productos destacados</h2>
          </div>
          <div className={style.featuresImages}>
            <img src={phoneCategoryImage} alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className={style.bannerInfoContainer}>
          <div className={style.bannerInfoFrame}>
            <div className={style.banner}>
              <div className={style.bannerImage}>
                <img src={deliveryIcon} alt="" />
              </div>
              <div className={style.bannerInfo}>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className={style.banner}>
              <div className={style.bannerImage}>
                <img src={priceIcon} alt="" />
              </div>
              <div className={style.bannerInfo}>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className={style.banner}>
              <div className={style.bannerImage}>
                <img src={discountIcon} alt="" />
              </div>
              <div className={style.bannerInfo}>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.categorySlider}>
        <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
        height: 400,
        perPage:3,
        perMove:1,
        autoplay: true,
        interval: 3000,
        pagination: false
      } }
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img src={priceIcon} alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image2.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image3.jpg" alt="Image 3"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image4.jpg" alt="Image 4"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image5.jpg" alt="Image 5"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image6.jpg" alt="Image 6"/>
      </SplideSlide>
    </Splide>
        </div>
      </div>
    </div>
  );
}
