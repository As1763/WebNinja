import React from 'react';
import LiveEditor from '../../components/LiveEditor';

const proLevelChapters = [
  {
    id: 'css-pro-glassmorphism',
    title: '7. Pro Level: Advanced Glassmorphism',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">7. Next Level Glassmorphism UI</h2>
        <p>
          Glassmorphism modern web design ka sabse bada trend hai. Ye ek aisa effect hai jahan element transparent aur blurred glass ki tarah dikhta hai, aur uske piche ka colorful background jhalakta hai. Ise pro level par banane ke liye humein <code>backdrop-filter</code>, semitransparent borders, aur glowing orbs ki zaroorat padti hai.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Glassmorphism ki Secret Recipe:</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Translucent Background:</strong> <code>background: rgba(255, 255, 255, 0.1);</code> (Safed rang, par bahut kam opacity ke sath).</li>
          <li><strong>Backdrop Blur:</strong> <code>backdrop-filter: blur(20px);</code> (Ye piche ke content ko dhundhla kardeta hai, jo actual 'glass' effect deta hai).</li>
          <li><strong>Glass Border:</strong> Ek patli transparent white ya gradient border element ki depth badhati hai.</li>
          <li><strong>Shadow:</strong> Halka sa drop shadow card ko background se alag karta hai.</li>
        </ul>

        <LiveEditor title="Extreme Glassmorphism Dashboard & Glowing Orbs" initialCode={`<style>
  body { 
    margin: 0; 
    height: 100vh; 
    background-color: #0f172a; 
    font-family: 'Inter', system-ui, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  
  /* Animated Glowing Orbs Behind the Glass */
  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    z-index: 1;
    animation: float 10s infinite alternate ease-in-out;
  }
  
  .orb-1 {
    width: 300px; height: 300px;
    background: #ec4899; /* Pink */
    top: -50px; left: -50px;
  }
  
  .orb-2 {
    width: 400px; height: 400px;
    background: #8b5cf6; /* Purple */
    bottom: -100px; right: -50px;
    animation-delay: -5s;
  }
  
  .orb-3 {
    width: 250px; height: 250px;
    background: #06b6d4; /* Cyan */
    top: 40%; left: 40%;
    animation-duration: 15s;
  }

  @keyframes float {
    0% { transform: translate(0, 0) scale(1); }
    100% { transform: translate(50px, 50px) scale(1.2); }
  }

  /* The Pro Glass Card */
  .glass-card {
    position: relative;
    z-index: 10;
    width: 400px;
    padding: 40px;
    border-radius: 24px;
    
    /* THE MAGIC */
    background: rgba(255, 255, 255, 0.05); /* Very light transparent white */
    backdrop-filter: blur(24px); /* The blurring effect */
    -webkit-backdrop-filter: blur(24px); /* For Safari */
    
    /* Depth through borders */
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    
    /* Elegant Shadow */
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
    color: white;
  }
  
  .glass-card h2 {
    margin-top: 0;
    font-weight: 300;
    letter-spacing: 2px;
  }
  
  .glass-card .balance {
    font-size: 3rem;
    font-weight: 700;
    margin: 10px 0;
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  }
  
  .glass-btn {
    margin-top: 30px;
    width: 100%;
    padding: 15px;
    border-radius: 12px;
    border: none;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
  }
  
  .glass-btn:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }
</style>

<div class="orb orb-1"></div>
<div class="orb orb-2"></div>
<div class="orb orb-3"></div>

<div class="glass-card">
  <h2>CURRENT BALANCE</h2>
  <div class="balance">$12,450.00</div>
  <p style="color: rgba(255,255,255,0.7); margin-top: 5px;">**** **** **** 4231</p>
  
  <button class="glass-btn">Transfer Funds</button>
</div>`} />
      </div>
    )
  },
  {
    id: 'css-pro-3d',
    title: '8. Pro Level: Interactive 3D CSS',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">8. Next Level Interactive 3D CSS</h2>
        <p>
          CSS mein hum sirf 2D layouts nahi, balki asli 3D objects aur animations bhi bana sakte hain bina kisi WebGL ya JavaScript canvas ke! Ise achieve karne ke liye humein <code>perspective</code> aur <code>transform-style: preserve-3d;</code> ka combined use karna padta hai.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">3D Space ke Rules:</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Perspective (Camera lens):</strong> Parent element par lagaya jata hai. Ye tay karta hai ki viewer object se kitna door hai. Choti value (e.g., 400px) matlab extreme 3D distortion. Badi value (e.g., 1000px) matlab subtle 3D.</li>
          <li><strong>Transform-Style:</strong> Isko <code>preserve-3d</code> karna zaruri hai warna saare child elements flat 2D screen par chipak jayenge.</li>
          <li><strong>Rotations & Translations:</strong> Hum X, Y, aur Z axis me elements ko ghumate (rotate) aur khiskate (translate) hain ek box banane ke liye.</li>
        </ul>

        <LiveEditor title="Extreme 3D Hover Card & Rotating Cube" initialCode={`<style>
  body { 
    margin: 0; 
    height: 100vh; 
    background-color: #1a1a2e; 
    font-family: sans-serif;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
  }
  
  /* ===========================
     EXAMPLE 1: 3D FLIP CARD
     =========================== */
  .card-container {
    perspective: 1000px; /* The Camera */
    width: 250px;
    height: 350px;
  }
  
  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d; /* Keep children in 3D space */
    cursor: pointer;
  }
  
  .card-container:hover .card {
    transform: rotateY(180deg); /* Flip it! */
  }
  
  .card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    backface-visibility: hidden; /* Hide the back when facing away */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 15px 35px rgba(0,0,0,0.5);
  }
  
  .card-front {
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
    color: #333;
  }
  
  .card-back {
    background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%);
    color: #333;
    transform: rotateY(180deg); /* Start flipped backwards */
  }
  
  /* ===========================
     EXAMPLE 2: 3D ROTATING CUBE
     =========================== */
  .scene {
    width: 200px;
    height: 200px;
    perspective: 600px;
  }

  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: rotateCube 10s infinite linear;
  }

  @keyframes rotateCube {
    0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
    100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
  }

  .cube-face {
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    backdrop-filter: blur(5px);
    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
  }

  /* Positioning each face in 3D space */
  .cube-face-front  { transform: rotateY(  0deg) translateZ(100px); background: rgba(255, 0, 0, 0.2); }
  .cube-face-right  { transform: rotateY( 90deg) translateZ(100px); background: rgba(0, 255, 0, 0.2); }
  .cube-face-back   { transform: rotateY(180deg) translateZ(100px); background: rgba(0, 0, 255, 0.2); }
  .cube-face-left   { transform: rotateY(-90deg) translateZ(100px); background: rgba(255, 255, 0, 0.2); }
  .cube-face-top    { transform: rotateX( 90deg) translateZ(100px); background: rgba(255, 0, 255, 0.2); }
  .cube-face-bottom { transform: rotateX(-90deg) translateZ(100px); background: rgba(0, 255, 255, 0.2); }
</style>

<!-- FLIP CARD -->
<div class="card-container">
  <div class="card">
    <div class="card-face card-front">
      <h1>HOVER ME</h1>
      <p>I am in 3D Space</p>
    </div>
    <div class="card-face card-back">
      <h1>WOW!</h1>
      <p>Perfect Flip!</p>
    </div>
  </div>
</div>

<!-- ROTATING CUBE -->
<div class="scene">
  <div class="cube">
    <div class="cube-face cube-face-front">FRONT</div>
    <div class="cube-face cube-face-back">BACK</div>
    <div class="cube-face cube-face-right">RIGHT</div>
    <div class="cube-face cube-face-left">LEFT</div>
    <div class="cube-face cube-face-top">TOP</div>
    <div class="cube-face cube-face-bottom">BOT</div>
  </div>
</div>`} />
      </div>
    )
  }
];

export default proLevelChapters;
