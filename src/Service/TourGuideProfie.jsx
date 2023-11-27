import  { useState } from "react";
import { useParams } from "react-router-dom";

const TourGuideProfile = () => {
  const { guideId } = useParams();

  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState("");
  const [guideData, setGuideData] = useState({
    id: guideId,
    name: "Natasha Ali",
    profilePicture: "https://i.postimg.cc/X7tHsnp6/istockphoto-927659858-640x640.jpg",
    contactDetails: "+8801790856745",
    education: "Bachelor's in Tourism",
    skills: ["Communication", "Leadership", "Multilingual"],
    workExperience: "Tour Guide for 5 years",
    rating: 4.8,
    comments: [
      { user: "Alice", comment: "Great guide! Very knowledgeable." },
      { user: "Bob", comment: "Fantastic experience with John." },
    ],
  });

  const handleRatingChange = (event) => {
    setUserRating(parseFloat(event.target.value));
  };

  const handleCommentChange = (event) => {
    setUserComment(event.target.value);
  };

  const handleAddComment = () => {
    const newComment = { user: "User", comment: userComment };
    setGuideData((prevData) => ({
      ...prevData,
      rating: (prevData.rating + userRating) / 2,
      comments: [...prevData.comments, newComment],
    }));

    setUserRating(0);
    setUserComment("");
  };

  return (
    <div className="container mx-auto mt-6">
      <div className="max-w-3xl mx-auto bg-white rounded-md overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row items-center md:items-start p-6">
          <div className="md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h2 className="font-bold text-xl text-left">Tour Guide Profile</h2>
            <img
              src={guideData.profilePicture}
              alt="Guide Profile"
              className="rounded-full w-32 h-32 object-cover mx-auto md:mx-0"
            />
            <h2 className="text-2xl font-bold mt-4">{guideData.name}</h2>
            <p className="text-gray-600">{guideData.contactDetails}</p>
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-xl font-bold mb-2">About Me</h3>
            <p>{guideData.education}</p>
            <p className="mt-2">{guideData.workExperience}</p>

            <h3 className="text-xl font-bold mt-4 mb-2">Skills</h3>
            <ul className="list-disc pl-4">
              {guideData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mt-4 mb-2">Rating</h3>
            <p>{guideData.rating} stars</p>

            <h3 className="text-xl font-bold mt-4 mb-2">Comments</h3>
            <ul className="list-none">
              {guideData.comments.map((comment, index) => (
                <li key={index} className="mb-2">
                  <strong>{comment.user}:</strong> {comment.comment}
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Your Rating</h3>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={userRating}
                onChange={handleRatingChange}
                className="w-20 p-2 border border-gray-300 rounded mr-4"
              />
              <textarea
                placeholder="Leave a comment..."
                value={userComment}
                onChange={handleCommentChange}
                className="w-full p-2 mt-3 border border-gray-300 rounded"
              />
              <button
                onClick={handleAddComment}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGuideProfile;
