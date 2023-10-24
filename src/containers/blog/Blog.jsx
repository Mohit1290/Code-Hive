import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="blog section__padding" id="blog">
    <div className="blog-heading">
      <h1 className="gradient__text">
        We provide a vast, <br /> library of features.
      </h1>
    </div>
    <div className="blog-container">
      <div className="blog-container_groupA">
        <Article
          imgUrl={blog01}
          text="Let us explore Code Hive?   Providing one - stop solution for all you coding and interview practice."
        />
      </div>
      <div className="blog-container_groupB">
        <Article
          imgUrl={blog02}
          text="Complete Interview Preperation."
        />
        <Article
          imgUrl={blog03}
          text="DSA for working professionals."
        />
        <Article
          imgUrl={blog04}
          text="Searching Algorithms."
        />
        <Article
          imgUrl={blog05}
          text="Explore practice problems."
        />
      </div>
    </div>
  </div>
);

export default Blog;
