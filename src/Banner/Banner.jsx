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
        "https://i.postimg.cc/K87fWNHY/hr-admin-bg.jpg",
      title: "HR Administration Services",
      description:
        "Effortlessly handle HR tasks such as payroll processing, benefits administration, and employee record management with our comprehensive HR administration services. At PeoplePro, we offer a comprehensive suite of HR Administration Services designed to streamline your HR processes, enhance organizational efficiency, and empower your team to focus on strategic initiatives.",
    },
    {
      image:
        "https://i.postimg.cc/hPt7n0vj/photo-1565598469107-2bd14ae7e7e4-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg",
      title: "Employee Engagement Surveys",
      description:
        'Gauge and improve employee satisfaction with our engagement surveys, providing valuable insights into your workforces sentiment and areas for enhancement.PeoplePro offers comprehensive Employee Engagement Surveys designed to empower your company with actionable insights, foster a positive workplace culture, and enhance the overall employee experience.',
    },
    {
      image:
        "https://i.postimg.cc/x1KQFwQb/photo-1552664730-d307ca884978-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg",
      title: " Employee Communication Platforms",
      description:
        "Enhance internal communication and collaboration with our employee communication platforms, fostering a connected and informed workforce.In the dynamic landscape of modern workplaces, fostering clear and effective communication is paramount to organizational success.",
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
