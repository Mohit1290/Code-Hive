import React from 'react';
import Feature from '../../components/feature/Feature';
import './CodeHive.css';

const CodeHive = () => (
  <div className="codehive section__margin" id="wgpt3">
    <div className="feature">
      <Feature title="Code hive is the ultimate coding platform" />
    </div>
    <div className="heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
    </div>
    <div className="container">
      <Feature
        title="Wide Range of Problems"
        text="The project can offer a range of coding exercises that simulate the types of problems that may appear in technical interviews. By practicing these exercises, users can improve their coding skills."
      />
      <Feature
        title="Interactive Coding Exercises"
        text="The project could include a series of interactive coding exercises, which would allow users to practice. These exercises could cover a range of topics and difficulty levels."
      />
      <Feature
        title="Technical Interview Practice"
        text=" In addition to coding exercises, the project could also offer technical interview practice. This could involve simulated interviews to help users prepare for the types of questions they may encounter in real interviews."
      />
    </div>
  </div>
);

export default CodeHive;
