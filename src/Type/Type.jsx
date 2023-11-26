import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Mock data for tour types and packages
const tourTypes = ["Adventure", "Cultural", "Beach", "Mountain"];
const packagesData = {
  Adventure: [
    { id: 1, name: "Mountain Trek", price: 500, duration: "3 days" },
    { id: 2, name: "Jungle Safari", price: 400, duration: "2 days" },
  ],
  Cultural: [
    { id: 3, name: "Historical Sites Tour", price: 300, duration: "2 days" },
    { id: 4, name: "Cultural Immersion", price: 450, duration: "3 days" },
  ],
  Beach: [
    { id: 5, name: "Island Paradise", price: 600, duration: "4 days" },
    { id: 6, name: "Sunset Relaxation", price: 350, duration: "2 days" },
  ],
  Mountain: [
    { id: 7, name: "Alpine Adventure", price: 550, duration: "3 days" },
    { id: 8, name: "Snowy Peaks Exploration", price: 700, duration: "5 days" },
  ],
};

// TourType component to display each tour type
const TourType = ({ type }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{type}</h3>
      <Link to={`/packages/${type.toLowerCase()}`}>
        <button>Explore {type} Packages</button>
      </Link>
    </div>
  );
};

// Package component to display each package
const Package = ({ match }) => {
  const type = match.params.type;
  const packages = packagesData[type];

  return (
    <div>
      <h2>{type} Packages</h2>
      {packages.map((pkg) => (
        <div
          key={pkg.id}
          style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}
        >
          <h3>{pkg.name}</h3>
          <p>Price: ${pkg.price}</p>
          <p>Duration: {pkg.duration}</p>
          <Link to={`/packages/${type.toLowerCase()}/${pkg.id}`}>
            <button>View Package</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

// PackageDetail component to display details of a specific package
const PackageDetail = ({ match }) => {
  const type = match.params.type;
  const packageId = match.params.packageId;
  const packageDetail = packagesData[type].find(
    (pkg) => pkg.id.toString() === packageId
  );

  return (
    <div>
      <h2>{packageDetail.name}</h2>
      <p>Price: ${packageDetail.price}</p>
      <p>Duration: {packageDetail.duration}</p>
      <p>Additional details about the package...</p>
    </div>
  );
};

// Main component that renders the list of tour types
const TourTypes = () => {
  return (
    <div>
      <h1>Tour Types</h1>
      {tourTypes.map((type) => (
        <TourType key={type} type={type} />
      ))}
    </div>
  );
};

// App component that sets up the routes
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/packages/:type/:packageId" component={PackageDetail} />
        <Route path="/packages/:type" component={Package} />
        <Route exact path="/" component={TourTypes} />
      </Switch>
    </Router>
  );
};

export default App;
