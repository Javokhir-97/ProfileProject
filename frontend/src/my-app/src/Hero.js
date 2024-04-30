// Hero.js
import React from "react";
import "./hero.css";

export function Hero() {
  return (
    <section className='hero-section panel hero-panel' name='Hero'>
      <div className="container">
        <h1>Welcome to Our Website</h1>
        <p>
          This is a sample hero section. You can replace this text with your own content. <br />
          This is a sample hero section. You can replace this text with your own content.
        </p>
        {/* <a href="google.com" class="btn">
          Learn More
        </a> */}
      </div>
    </section>
  );
}
