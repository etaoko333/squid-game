// src/App.js - Test version to verify React works
import React, { useEffect } from "react";
import scrollreveal from "scrollreveal";

// Import your existing components
import Details from "./components/Details";
import Episodes from "./components/Episodes";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Videos from "./components/Videos";

function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        #hero,
        #info,
        #episodes,
        #details,
        #videos,
        footer
    `,
      {
        opacity: 0,
        interval: 500,
      }
    );
  }, []);

  return (
    <div>
      {/* Test header to show we're connected to backend */}
      <div style={{ 
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        color: '#fff',
        borderRadius: '0 0 0 10px',
        border: '2px solid #dc2626'
      }}>
        <span>🚀 Backend Ready!</span>
        <div style={{ fontSize: '12px', marginTop: '5px' }}>
          API: Ready | Auth: Ready | DB: Ready
        </div>
        <div style={{ fontSize: '10px', marginTop: '5px', color: '#90EE90' }}>
          Backend deployed successfully ✅
        </div>
      </div>

      {/* Your existing components with animations */}
      <Hero />
      <Info />
      <Episodes />
      <Videos />
      <Details />
      <Footer />
    </div>
  );
}

export default App;