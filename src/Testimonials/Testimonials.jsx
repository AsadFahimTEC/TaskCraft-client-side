
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className='mt-6'>
      <div className="container">
        <section id="testim" className="testim">
          <div className="testim-cover">
            <div className="wrap">
              <span
                id="right-arrow"
                className="arrow right fa fa-chevron-right"
              ></span>
              <span
                id="left-arrow"
                className="arrow left fa fa-chevron-left "
              ></span>
              <ul id="testim-dots" className="dots">
                <li className="dot active"></li>
                <li className="dot"></li>
                <li className="dot"></li>
                <li className="dot"></li>
                <li className="dot"></li>
              </ul>
              <div id="testim-content" className="cont">
                <div className="active">
                  <div className="img">
                    <img
                      src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg"
                      alt=""
                    />
                  </div>
                  <h2>Lorem P. Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>

                <div>
                  <div className="img">
                    <img
                      src="https://timesofindia.indiatimes.com/thumb/msid-75752690,width-800,height-600,resizemode-4/75752690.jpg"
                      alt=""
                    />
                  </div>
                  <h2>Mr. Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>

                <div>
                  <div className="img">
                    <img
                      src="https://p16.muscdn.com/img/musically-maliva-obj/1627333501517830~c5_720x720.jpeg"
                      alt=""
                    />
                  </div>
                  <h2>Lorem Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>

                <div>
                  <div className="img">
                    <img
                      src="https://p16-sg-default.akamaized.net/aweme/1080x1080/tiktok-obj/1666413671597057.jpeg"
                      alt=""
                    />
                  </div>
                  <h2>Lorem De Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>

                <div>
                  <div className="img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKLJe1Lrz2N3ufVSwQokSJ79jGBbIptXuVnsdxMmNUlE14ohwp&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <h2>Ms. Lorem R. Ipsum</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <script src="https://use.fontawesome.com/1744f3f671.js"></script>
      <script src="./Testimonials.js"></script>
    </div>
  );
};

export default Testimonials;
