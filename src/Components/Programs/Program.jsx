import React from 'react';
import './Program.css'; // Ensure this path is correct
import program1 from '../../assets/pgm-1.png';
import program2 from '../../assets/pgm-2.jpeg';
import program3 from '../../assets/pgm-3.jpg';

const Programs = () => {
  return (
    <div className="program">
      <div className="program-item">
        <img src={program1} alt="Program 1" />
        <p className="description">Mission Statement:
        "Our mission is to reduce food waste and combat hunger by connecting surplus food with NGOs dedicated to feeding the needy. Together, we create a community where no food goes to waste, and no person goes unfed."</p>
      </div>
      <div className="program-item">
        <img src={program2} alt="Program 2" />
        <p className="description">How It Works:
        "We partner with restaurants, hotels, and individuals who have surplus food, ensuring it reaches NGOs that distribute it to those in need. Through this platform, food donations can be easily scheduled, tracked, and delivered, maximizing efficiency and impact."</p>
      </div>
      <div className="program-item">
        <img src={program3} alt="Program 3" />
        <p className="description">Get Involved:
        "Want to make a difference? Join our network of volunteers and NGOs committed to a sustainable, hunger-free world. Whether you’re an individual or an organization, there's a role for you in fighting hunger and supporting the underprivileged."</p>
      </div>
    </div>
  );
};

export default Programs;
