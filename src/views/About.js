import '../App.css';
import UsaSlider from '../components/UsaSlider';
import { useState, useEffect, React } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <UsaSlider/>
      <Footer/>
    </div>
  );
}

export default About;