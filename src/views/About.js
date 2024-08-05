import '../App.css';
import UsaSlider from '../components/UsaSlider';
import { useState, useEffect, React } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './holiday.css';

function About() {
  return (
    <div>
      <UsaSlider/>
    </div>
  );
}

export default About;