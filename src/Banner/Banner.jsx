import {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image:
        "https://i.postimg.cc/Y9zszSvr/best-cheap-places-for-couples-to-travel.jpg",
      title: "City Escape Delight",
      description:
        "Embark on a rejuvenating urban retreat with our City Escape Delight package. Immerse yourself in the vibrant energy of metropolitan life while enjoying curated experiences that capture the essence of each city. From iconic landmarks to hidden gems, this package offers a perfect blend of cultural exploration, culinary delights, and relaxation.",
    },
    {
      image:
        "https://i.postimg.cc/RZb6q1G9/hero1-89.jpg",
      title: "Culinary Odyssey Delight",
      description:
        'Indulge your senses with the Culinary Odyssey Delight package, a gastronomic journey designed for food connoisseurs and culinary enthusiasts. Immerse yourself in the rich tapestry of global flavors as you savor exquisite dishes crafted by renowned chefs. From street food markets to Michelin-starred restaurants, this package offers a diverse culinary adventure that will tantalize your taste buds.',
    },
    {
      image:
        "https://i.postimg.cc/HxYfK5Dc/smiling-young-couple-walking-with-backpacks-green-hills-summer-day-52137-37130.jpg",
      title: "Adventure Seeker's Quest",
      description:
        "For the thrill-seekers and adventure enthusiasts, our Adventure Seeker's Quest package is your ticket to heart-pounding excitement and adrenaline-pumping experiences. From mountain summits to raging rivers, this package is designed to satisfy your craving for adventure. Whether you're an avid hiker, a water sports enthusiast, or a daredevil ready for new challenges, join us on a Quest that promises thrilling escapades and unforgettable moments.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container text-white bg-blue-600 mt-6 ml-6 mr-6 flex flex-col md:flex-row">
      <div className="slider-content w-full md:w-3/4">
        <Slider {...settings} afterChange={handleSlideChange}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-slide">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="slider-details w-full md:w-1/4  p-6">
        <div className="slider-details-inner">
          <h2 className="text-4xl font-bold mb-4 text-white">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg text-white font-montserrat font-bold mb-8">
            {slides[currentSlide].description}
          </p>
          <button className="ml-2 bg-green-200 text-[#000] font-medium text-sm px-6 py-3 rounded-md transition duration-300 hover:bg-red-500">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
