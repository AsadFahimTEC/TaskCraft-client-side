import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

const TypeDetails = () => {
  const { tab } = useParams();
  const allPackages = useLoaderData();

  const tabData = allPackages.filter((packageItem) => packageItem.tab === Number(tab));

  return (
    <div>
      <h2>Tab {tab} Data</h2>
      {tabData.map((packageItem) => (
        <div key={packageItem.id}>
          <p>{packageItem.tripTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default TypeDetails;
