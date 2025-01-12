import React, { useState } from 'react';
import './Contact.css';
import QRCode from "../assets/qr.png"; // Replace with the actual QR code image path

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-container">
      {/* Header Section */}
      <section className="contact-header text-center py-5 mt-5 pt-5">
        <h1 className="fw-bold display-4 mt-5">Contact Us</h1>
       
      </section>

      <div className="container mt-5">
        {/* Donate Us Section */}
        <section className="donate-us-section py-5 text-center">
          <h2 className="fw-bold mb-4">Support Our Mission: Donate to Us</h2>
          <p className="text-muted mb-4">
            Your contribution helps us empower underserved communities through education, healthcare, and sustainability. Every donation makes a difference!
          </p>
          <div className="row align-items-center">
            <div className="col-md-6">
              <h4 className="fw-bold">Bank Details</h4>
              <p><strong>Account Name:</strong> Umang Social Foundation</p>
              <p><strong>Account Number:</strong> 123456789</p>
              <p><strong>Bank Name:</strong> ABC Bank</p>
              <p><strong>IFSC Code:</strong> ABCD0123456</p>
            </div>
            <div className="col-md-6 text-center">
              <h4 className="fw-bold mb-3">Scan to Donate</h4>
              <img src={QRCode} alt="Donate QR Code" className="qr-code" />
            </div>
          </div>
        </section>

        <div className="row mt-5">
          {/* Contact Information Section */}
          <div className="col-md-6 mb-4">
            <section className="contact-info">
              <h2 className="fw-bold mb-3">Reach Out to Us</h2>
              <p>Email: <a href="mailto:hello@reallygreatsite.com" className="text-primary">hello@reallygreatsite.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="text-primary">+123-456-7890</a></p>
              <div className="social-media mt-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
            </section>

            {/* Location Section */}
            <section className="location mt-5">
              <h2 className="fw-bold mb-3">Find Us Here</h2>
              <p>123 Anywhere St., Any City 12345</p>
              <div className="map-container">
                <iframe
                  title="Map"
                  src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_URL"
                  width="100%"
                  height="250"
                  frameBorder="0"
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </section>
          </div>

          {/* Contact Form Section */}
          <div className="col-md-6">
            <section className="contact-form">
              <h2 className="fw-bold mb-3">Send Us a Message</h2>
              {isSubmitted ? (
                <p className="alert alert-success">
                  Thank you for reaching out! We’ll get back to you as soon as possible.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name*</label>
                    <input type="text" id="name" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email*</label>
                    <input type="email" id="email" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" id="subject" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message*</label>
                    <textarea id="message" className="form-control" rows="4" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-100">Send Message</button>
                </form>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
