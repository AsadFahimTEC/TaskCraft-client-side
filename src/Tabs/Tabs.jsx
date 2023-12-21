
import { useSpring, animated } from "react-spring";
import "./UserSection.css";

const UserSection = () => {
  const userTypes = [
    {
      type: "Developers",
      benefits: [
        "Access to a variety of coding resources",
        "Collaborate with other developers",
        "Stay updated on the latest technologies",
      ],
    },
    {
      type: "Corporate Professionals",
      benefits: [
        "Efficient project management tools",
        "Collaboration with team members",
        "Task tracking and organization",
      ],
    },
    {
      type: "Bankers",
      benefits: [
        "Financial analytics and reporting",
        "Secure data management",
        "Collaborate with financial experts",
      ],
    },
    // Add more user types as needed
  ];

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={fadeIn} className="user-section-container">
      <h2 className="user-section-title">Who Can Benefit?</h2>
      <div className="user-cards-container">
        {userTypes.map((user, index) => (
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
