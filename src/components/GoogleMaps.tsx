import React from "react";

interface GoogleMapsProps {
  height?: string;
}

const GoogleMaps: React.FC<GoogleMapsProps> = ({ height = "400px" }) => {
  return (
    <div style={{ width: "100%", height }}>
      <iframe
        title="Ireland Buses - Dublin Office Location"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "8px" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d595.4871834102413!2d-6.261707530326017!3d53.34417389891679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9ca2ec50b7%3A0x9f620efc586b87a5!2s19%20College%20Green%2C%20Dublin%202%2C%20D02%20VH77%2C%20Ireland!5e0!3m2!1sen!2sae!4v1762417065264!5m2!1sen!2sae"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
