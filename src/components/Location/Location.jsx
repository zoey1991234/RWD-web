// eslint-disable-next-line no-unused-vars
import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            參觀地點
          </h1>

          <div className="rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462784.8949392577!2d121.17672220378604!3d25.016862977571538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac72bce20a99%3A0x3f6a35cedd0ac2e0!2z6Ie65YyX!5e0!3m2!1szh-TW!2stw!4v1727686099666!5m2!1szh-TW!2stw"
              width="100%"         
              height="360"          
              allowfullscreen=""    
              loading="lazy"       
              referrerPolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px", border: "0" }}  
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
