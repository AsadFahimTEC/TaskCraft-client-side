import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FacebookShareButton, FacebookIcon } from 'react-share';

// Mock data for tourist stories
const storiesData = [
    {
      id: 1,
      title: 'JiveDiscover',
      content: 'Unleash the wanderlust within you with JiveDiscover.Explore diverse cultures, scenic wonders, and thrilling experiences across the globe. Your journey begins here.',
    },
    {
      id: 2,
      title: 'JiveVoyages',
      content: 'Embark on unforgettable journeys with JiveVoyages. Immerse yourself in extraordinary destinations, curated for those who seek more from travel. Let your adventures unfold.',
    },
    {
      id: 3,
      title: 'JiveDestiny',
      content: 'JiveDestiny invites you to chart your own course. Enjoy tailor-made tours that blend adventure, culture, and relaxation. Your destiny is to explore, and we are here to guide you.',
    },
    {
      id: 4,
      title: 'JiveOdyssey',
      content: 'Join the JiveOdyssey and navigate a world of wonders. From epic landscapes to hidden gems, each journey is a chapter in your personal odyssey. Where will your story take you.',
    },
    {
      id: 5,
      title: 'JiveWanderlust',
      content: 'Embrace your inner wanderer with JiveWanderlust. Roam freely, create stories, and let the world be your canvas. Start your journey of endless discovery.',
    },
    {
      id: 6,
      title: 'JiveHorizons',
      content: 'At JiveHorizons, we invite you to broaden your horizons. Discover new landscapes, cultures, and perspectives. Your next horizon is an invitation to adventure.',
    },
  ];



// TouristStory component to display each story
const TouristStory = ({ story, onViewDetails}) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3 className='text-xl text-red-500'>{story.title}</h3>
      <Link to={`/services/${story.id}`}>
      <p className='text-green-600'>{story.content}</p></Link>
      <div className='flex gap-4 mt-3'>
      <button className='btn btn-xs btn-secondary' onClick={() => onViewDetails(story.id)}>Share Story</button>
      <Link to={`/services/${story.id}`}>
      <button className='btn btn-xs btn-primary'>More Details</button>
      </Link>
      </div>
      
    </div>
  );
};

// StoryDetail component to display the details of a selected story
const StoryDetail = ({ story, onShare }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3 className='text-xl text-red-500'>{story.title}</h3>
      <p className='text-green-600'>{story.content}</p>
      <FacebookShareButton url={window.location.href} quote={story.title}>
        <FacebookIcon className='mt-2' size={32} round />
        Share on Facebook
      </FacebookShareButton>
      <button onClick={onShare}></button>
     
    </div>
  );
};

// Main component that renders the list of tourist stories
const AllStory = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const onViewDetails = (storyId) => {
    const selected = storiesData.find((story) => story.id === storyId);
    setSelectedStory(selected);
  };

  const onShare = () => {
    // Custom share logic can be implemented here
    // alert('Custom Share Logic');
  };

  return (
    <div>
      <h1 className='mt-2 text-2xl text-center text-blue-700'>Tourist Stories</h1>
      {storiesData.map((story) => (
        <TouristStory key={story.id} story={story} onViewDetails={onViewDetails} />
      ))}
      {selectedStory && <StoryDetail story={selectedStory} onShare={onShare} />}
    </div>
  );
};

export default AllStory;