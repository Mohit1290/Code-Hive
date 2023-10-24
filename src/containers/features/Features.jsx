import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Interview preparation environment',
    text: 'This can help users feel more confident and prepared when they enter the interview room, and increase their chances of success.',
  },
  {
    title: 'Interactive coding excercises',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Wide range of libraries',
    text: 'By providing a wide range of libraries, users can gain exposure to different tools and frameworks, and learn how to integrate them into their coding projects.',
  },
  {
    title: 'Enhanced problem-solving abilities:',
    text: 'Using different libraries can help users approach problems from different angles and find more efficient solutions, thereby improving their problem-solving abilities.',
  },
];

const Features = () => (
  <div className="features section__padding" id="features">
    <div className="features-heading">
      <h1 className="gradient__text">
        Unlock your potential with hands-on coding exercises and challenges and
        Get the skills you need to succeed in coding and technical interviews.
      </h1>
      <p>Start right now on your coding journey</p>
    </div>
    <div className="features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
