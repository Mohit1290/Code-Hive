import React, { useState } from "react";
import "./dashboard.css";
import Blog from "../containers/blog/Blog";
import Footer from "../containers/footer/Footer";
import Possibility from "../containers/possibility/Possibility";
import Features from "../containers/features/Features";
import CodeHive from "../containers/CodeHive/CodeHive";
import Header from "../containers/header/Header";
import Navbar from "./Navbar/Navbar2";
import Brand from "./brand/Brand";
import CTA from "./cta/CTA";

const Dashboard = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <CodeHive />
      <Possibility />
      <Features />

      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};
export default Dashboard;
