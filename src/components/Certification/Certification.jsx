import React from 'react';
import { useState } from "react";
import './Certification.css';
import {certifactes} from '../../portfolio';

const Certification = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section id='certification' className="certificates">
      <h2>Certificates</h2>
      <div className="certificates__grid">
        {certifactes.map((cert, index) => (
          <div key={index} className="certificate__card">
            <img
              src={cert.image}
              alt={cert.alt}
              className="certificate__image"
              onClick={() => setSelectedImage(cert.image)}
            />
            <h4>{cert.title}</h4>
          </div>
        ))}
      </div>

            {/* Modal for Full-Screen Image */}
            {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImage} alt="Certificate" className="modal-image" />
        </div>
      )}
    </section>
  );
};


export default Certification;
