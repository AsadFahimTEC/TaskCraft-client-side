
import { useSpring, animated } from "react-spring";
import "./UserSection.css";
import { useLoaderData } from "react-router-dom";

const UserSection = () => {
  const user = useLoaderData();
  console.log(user);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={fadeIn} className="user-section-container">
      <h2 className="user-section-title">Who Can Benefit?</h2>
      <div className="user-cards-container">
        {user.map((user, index) => (
          <animated.div key={index} className="user-card">
            <div className="user-card-content">
              <h3 className="user-card-title">{user.type}</h3>
              <ul className="user-card-list">
                {user.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </animated.div>
        ))}
      </div>
    </animated.div>
  );
};

export default UserSection;
