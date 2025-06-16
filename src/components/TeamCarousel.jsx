import React from 'react';
import './TeamCarousel.css';
import vanshika from '../assets/vanshika.jpeg';
import riya from '../assets/riya.jpeg';
import vansh from '../assets/vanshd.jpg';
import anushka from '../assets/anushka.jpeg';



const teamMembers = [
  {
    name: "Vanshika Yadav",
    role: "Founder & CEO",
    image: vanshika,
    bio: "Visionary leader with a passion for mental wellness and digital innovation.",
  },
  {
    name: "Vansh Deshwal",
    role: "Co-Founder & Designer",
    image: vansh,
    bio: "Blends calm aesthetics with meaningful user experience.",
  },
  {
    name: "Udit Jain",
    role: "Lead Developer",
    image: "https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?semt=ais_hybrid&w=740",
    bio: "Code whisperer. Builds scalable, responsive, and beautiful digital tools.",
  },
  {
    name: "Bhuvi Deshwal",
    image: "https://png.pngtree.com/png-vector/20241019/ourmid/pngtree-future-innovator-linkedin-profile-of-a-21-year-old-indian-professional-png-image_14113480.png",
    role: "Mental Health Advisor",
    bio: "Certified psychologist shaping calm-driven, science-backed content.",
  },
  {
    name: "Riya Garg ",
    image: riya,
    role: "Marketing Head",
    bio: "Brings CalmSphere to the world through creativity and empathy.",
  },
  {
    name: "Anushka Tyagi",
    role: "UI/UX Designer",
    image: anushka,
    bio: "Crafts intuitive and aesthetic user journeys with a touch of calm.",
  },
];

export default function TeamCarousel() {
  return (
    <section className="team-section">
      <h2 className="team-heading">Meet the Team</h2>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
