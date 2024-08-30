import React from "react";
import "../styles/Home.css"; // Correct path to the CSS file

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>ToolboxAI</h1>
        <img src="/AI (2).png" alt="Logo" className="top-right-image" />
      </header>
      <br></br>
      <div className="container">
        <div className="row" id="row1">
          <p>
            Welcome to ToolboxAI.com, your go-to platform powered by artificial
            intelligence. Explore a carefully curated collection of websites
            full of AI-generated details and direct links. Experience the future
            of web discovery with ToolboxAI.com!
          </p>
        </div>
        <div className="row" id="row2">
          <p style={{ textAlign: "justify" }}>
            <b style={{ color: "blue" }}>People using AI tools</b>
          </p>
          <br />
          <div className="image-gallery">
            <img
              src="/Leonardo_Phoenix_Create_a_dynamic_and_engaging_image_showcasin_1.jpg"
              alt="AI Tool 1"
            />
            <img
              src="/Leonardo_Phoenix_Create_a_dynamic_and_engaging_image_showcasin_2.jpg"
              alt="AI Tool 2"
            />
            <img
              src="/Leonardo_Phoenix_Create_a_dynamic_and_engaging_image_showcasin_3.jpg"
              alt="AI Tool 3"
            />
          </div>
        </div>
        <div className="row" id="row5">
          <p>
            <button
              className="explore-button"
              onClick={() => (window.location.href = "/tools")}
            >
              Explore the tools
            </button>
          </p>
        </div>
        <div className="row" id="row4">
          <ul>
            <li style={{ color: "blue" }}>
              <b>WHY CHOOSE US</b>
            </li>
            <li>
              <b>Comprehensive AI Hub:</b> Access a diverse range of AI tools
              and resources in one centralized platform.
            </li>
            <li>
              <b>User-Centric Interface:</b> Streamlined access with direct
              links for quick tool exploration and reduced search time.
            </li>
            <li>
              <b>Continuous Updates:</b> Stay ahead with regularly refreshed
              content to match the dynamic AI landscape.
            </li>
            <li>
              <b>One-Stop Destination:</b> Catering to beginners and seasoned AI
              enthusiasts alike.
            </li>
            <li>
              <b>Simplified Information:</b> Clear descriptions and easy
              navigation aid understanding for all levels of expertise.
            </li>
            <li>
              <b>Interactive Engagement:</b> Contribute and shape the platform's
              growth through an interactive feedback system.
            </li>
          </ul>
        </div>
        <div className="row" id="row3">
          Email:{" "}
          <a className="email-link" href="mailto:contact@toolboxai.com">
            contact@toolboxai.com
          </a>
          <br />
          <p>Phone: +1 (123) 456-7890</p>
          <br />
          <p>
            Social Media:
            <a className="contact-link" href="https://twitter.com/toolboxai">
              Twitter
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/company/toolboxai"
            >
              LinkedIn
            </a>
            <a
              className="facebook-link"
              href="https://www.facebook.com/toolboxai"
            >
              Facebook
            </a>
          </p>
        </div>
        {/* Popup Section */}
        <div className="popup" id="popup">
          <span
            className="close-btn"
            onClick={() =>
              (document.getElementById("popup").style.display = "none")
            }
          >
            ×
          </span>
          <p>Let's explore the world of AI tools.</p>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 ToolboxAI</p>
      </footer>
    </div>
  );
};

export default HomePage;
