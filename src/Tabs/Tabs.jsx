import Guides from "../Guides/Guides";
import Packages from "../Packages/Packages";
import "./Tabs.css";
const Tabs = () => {
  return (
    <div>
      <div className="tabs">
        <input type="radio" name="tabs" id="tab1" defaultChecked />
        <label htmlFor="tab1">
          <i className="fa fa-html5"></i>
          <span>Overview</span>
        </label>

        <input type="radio" name="tabs" id="tab2" />
        <label htmlFor="tab2">
          <i className="fa fa-css3"></i>
          <span>Packages</span>
        </label>

        <input type="radio" name="tabs" id="tab3" />
        <label htmlFor="tab3">
          <i className="fa fa-code"></i>
          <span>Guides</span>
        </label>

        <div id="tab-content1" className="tab-content">
          <h2>Amazing Winter Mountain Panorama</h2>
          <iframe className="mt-2" width="560" height="315" src="https://www.shutterstock.com/video/clip-1022239741-amazing-beautiful-winter-caucasian-mountain-panorama-view" frameBorder="0" allowfullscreen autoPlay></iframe>
        </div>

        <div id="tab-content2" className="tab-content">
          <Packages></Packages>
        </div>

        <div id="tab-content3" className="tab-content">
          <Guides></Guides>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
