import React from 'react';
import LiveEditor from '../../components/LiveEditor';

const chapters = [
  {
    id: 'css-shadows',
    title: '21. CSS Shadows (Zero to Pro)',
    content: (
      <div>
        <h2>CSS Shadows - Elements aur Text ko 3D Depth Dena</h2>
        <p>
          CSS mein shadows aapke design ko flat se 3D aur realistic bana sakte hain.
          Hum mainly do tarah ke shadows use karte hain: <code>box-shadow</code> aur <code>text-shadow</code>.
          Chaliye inko detail mein samajhte hain.
        </p>

        <h3>1. Box Shadow (<code>box-shadow</code>)</h3>
        <p>
          <code>box-shadow</code> kisi bhi block element (jaise div, section) ke charo taraf ek shadow add karta hai.
          Iske 6 possible values hote hain:
        </p>
        <ul>
          <li><strong>h-offset (Horizontal):</strong> Shadow left-right kitna khiskega. (Positive = Right, Negative = Left)</li>
          <li><strong>v-offset (Vertical):</strong> Shadow up-down kitna khiskega. (Positive = Bottom, Negative = Top)</li>
          <li><strong>blur-radius (Optional):</strong> Shadow kitna dhundhla (blur) hoga. By default 0 (sharp edge) hota hai.</li>
          <li><strong>spread-radius (Optional):</strong> Shadow ka size kitna expand hoga. Positive value expand karegi, negative shrink.</li>
          <li><strong>color (Optional):</strong> Shadow ka rang. Hamesha rgba() use karna better hota hai opacity control ke liye.</li>
          <li><strong>inset (Optional):</strong> Agar aap is word ko add karte ho, toh shadow element ke andar (inside) ki taraf dikhega.</li>
        </ul>

        <LiveEditor title="Box Shadow Basics" initialCode={`<style>
  .box-container { display: flex; gap: 20px; padding: 20px; flex-wrap: wrap; }
  .box {
    width: 100px; height: 100px;
    background-color: #3498db; color: white;
    display: flex; align-items: center; justify-content: center;
    border-radius: 10px; font-family: sans-serif;
  }

  .shadow-1 {
    /* h-offset, v-offset, color */
    box-shadow: 10px 10px black; 
  }
  
  .shadow-2 {
    /* h-offset, v-offset, blur, color */
    box-shadow: 10px 10px 15px rgba(0,0,0,0.5); 
  }
  
  .shadow-3 {
    /* h-offset, v-offset, blur, spread, color */
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.3); 
  }
  
  .shadow-inset {
    /* inset shadow */
    box-shadow: inset 5px 5px 10px rgba(0,0,0,0.6);
  }
</style>
<div class="box-container">
  <div class="box shadow-1">Sharp</div>
  <div class="box shadow-2">Blurred</div>
  <div class="box shadow-3">Spread</div>
  <div class="box shadow-inset">Inset</div>
</div>`} />

        <h3>2. Multiple Box Shadows</h3>
        <p>
          Aap ek hi element par comma (,) se separate karke multiple shadows laga sakte hain. Yeh complex neon effects ya layered 3D effects (jaise neumorphism) banane mein kaam aata hai.
        </p>

        <LiveEditor title="Multiple Shadows, Neumorphism & Neon Effect" initialCode={`<style>
  .container { display: flex; gap: 40px; padding: 40px; background: #e0e5ec; align-items: center;}
  
  /* Neumorphism Effect */
  .neumorphic-box {
    width: 120px; height: 120px;
    background-color: #e0e5ec;
    border-radius: 20px;
    display: flex; align-items: center; justify-content: center;
    font-family: sans-serif; color: #7a7a7a; font-weight: bold;
    /* Ek light shadow top-left se, ek dark shadow bottom-right se */
    box-shadow: 
      9px 9px 16px rgb(163,177,198,0.6), 
      -9px -9px 16px rgba(255,255,255, 0.5);
  }

  /* Neon Glow Effect */
  .neon-button {
    padding: 15px 30px;
    background: #111; color: #fff;
    border: 2px solid #0ff; border-radius: 8px;
    font-size: 1.2rem; font-family: sans-serif; cursor: pointer;
    transition: 0.3s;
    /* Multiple glowing shadows */
    box-shadow: 
      0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff,
      inset 0 0 10px #0ff;
  }
  
  .neon-button:hover {
    background: #0ff; color: #111;
    box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff;
  }
</style>
<div class="container">
  <div class="neumorphic-box">Neumorphism</div>
  <div style="background: #000; padding: 30px; border-radius: 20px;">
    <button class="neon-button">Neon Glow</button>
  </div>
</div>`} />

        <h3>3. Text Shadow (<code>text-shadow</code>)</h3>
        <p>
          <code>text-shadow</code> sirf text ke characters par apply hota hai.
          Syntax: <code>text-shadow: h-offset v-offset blur-radius color;</code>.
          Isme `spread-radius` aur `inset` values nahi hote. Box shadow ki tarah isme bhi multiple shadows de sakte hain.
        </p>
        
        <LiveEditor title="Text Shadows Examples" initialCode={`<style>
  .text-container { font-family: sans-serif; padding: 20px; background: #222; color: #eee; }
  .text-container p { font-size: 3rem; font-weight: bold; margin: 15px 0; }

  .basic-shadow {
    text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.8);
  }

  .glowing-text {
    color: #fff;
    text-shadow: 
      0 0 5px #ff00ff,
      0 0 10px #ff00ff,
      0 0 20px #ff00ff;
  }

  .d-text {
    color: #f1c40f;
    /* 3D typography using multiple solid shadows */
    text-shadow: 
      1px 1px 0 #d35400, 2px 2px 0 #d35400, 3px 3px 0 #d35400,
      4px 4px 0 #d35400, 5px 5px 5px rgba(0,0,0,0.5);
  }
</style>
<div class="text-container">
  <p class="basic-shadow">Basic Shadow</p>
  <p class="glowing-text">Glowing Text</p>
  <p class="d-text">3D Typography</p>
</div>`} />
      </div>
    )
  },
  {
    id: 'css-gradients',
    title: '22. CSS Gradients (Advanced)',
    content: (
      <div>
        <h2>CSS Gradients - Smooth Color Transitions</h2>
        <p>
          CSS Gradients ek aisi technique hai jisme aap multiple colors ko ek doosre mein smoothly blend (mix) kar sakte ho, bina kisi image file ko use kiye. CSS Gradients ko <code>background-image</code> property ke through lagaya jata hai, kyuki CSS inhe ek image ki tarah treat karta hai.
        </p>
        <p>Gradients mainly teen tarah ke hote hain: <strong>Linear</strong>, <strong>Radial</strong>, aur <strong>Conic</strong>.</p>

        <h3>1. Linear Gradients (<code>linear-gradient()</code>)</h3>
        <p>
          Linear gradients ek straight line (sidhi rekha) mein colors ko blend karte hain. Aap inki direction, angle aur color stops (kaha kaunsa color hoga) control kar sakte ho.
        </p>
        <ul>
          <li><strong>Direction:</strong> <code>to right</code>, <code>to bottom right</code>, etc.</li>
          <li><strong>Angle:</strong> <code>45deg</code>, <code>180deg</code>, etc.</li>
          <li><strong>Color stops:</strong> Kis point tak color rahega, e.g., <code>red 50%, blue 50%</code> (yeh sharp transition create karta hai).</li>
        </ul>

        <LiveEditor title="Linear Gradients" initialCode={`<style>
  .grad-box {
    width: 200px; height: 100px;
    margin-bottom: 10px; color: white; display: flex;
    align-items: center; justify-content: center; font-family: sans-serif;
    font-weight: bold; text-shadow: 1px 1px 2px black;
  }
  
  .linear-1 {
    /* Default direction: top to bottom */
    background-image: linear-gradient(red, yellow);
  }
  
  .linear-2 {
    /* Direction: left to right */
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  }
  
  .linear-3 {
    /* Using angles (45deg) and multiple colors */
    background-image: linear-gradient(45deg, #ff9a9e, #fecfef, #a18cd1);
  }

  .linear-4 {
    /* Hard stops: Creating a striped background */
    background-image: linear-gradient(to right, #ff758c 50%, #ff7eb3 50%);
  }
</style>
<div class="grad-box linear-1">Top to Bottom</div>
<div class="grad-box linear-2">To Right (Color Stops)</div>
<div class="grad-box linear-3">45 Degree Multi-color</div>
<div class="grad-box linear-4">Hard Stops (Stripes)</div>
`} />

        <h3>2. Radial Gradients (<code>radial-gradient()</code>)</h3>
        <p>
          Radial gradients center se bahar ki taraf (outwards) expand hote hain, circle ya ellipse shape mein.
          Aap iska shape (<code>circle</code>, <code>ellipse</code>), size (<code>closest-side</code>, <code>farthest-corner</code>), aur position (<code>at center</code>, <code>at top left</code>) set kar sakte hain.
        </p>

        <LiveEditor title="Radial Gradients" initialCode={`<style>
  .grad-box {
    width: 150px; height: 150px;
    margin: 10px; color: white; display: inline-flex;
    align-items: center; justify-content: center; font-family: sans-serif;
    font-weight: bold; text-shadow: 1px 1px 2px black; text-align: center;
  }
  
  .radial-1 {
    /* Default is ellipse at center */
    background-image: radial-gradient(red, yellow, green);
  }
  
  .radial-2 {
    /* Force circle shape */
    background-image: radial-gradient(circle, #84fab0, #8fd3f4);
  }
  
  .radial-3 {
    /* Position radial gradient */
    background-image: radial-gradient(circle at top left, #f6d365, #fda085);
  }
</style>
<div>
  <div class="grad-box radial-1">Default Ellipse</div>
  <div class="grad-box radial-2">Circle Shape</div>
  <div class="grad-box radial-3">Circle at Top Left</div>
</div>`} />

        <h3>3. Conic Gradients (<code>conic-gradient()</code>)</h3>
        <p>
          Conic gradients color ko ek center point ke charo taraf (circle ki circumference par) rotate karte hain. Pie charts aur color wheels banane ke liye ye best hain.
        </p>

        <LiveEditor title="Conic Gradients" initialCode={`<style>
  .conic-box {
    width: 150px; height: 150px; border-radius: 50%;
    margin: 10px; display: inline-block;
  }
  
  .conic-1 {
    /* Basic conic */
    background-image: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
  }
  
  .conic-2 {
    /* Pie chart using hard stops */
    background-image: conic-gradient(
      #ff6b6b 0deg 120deg, 
      #4ecdc4 120deg 240deg, 
      #ffe66d 240deg 360deg
    );
  }
</style>
<div>
  <div class="conic-box conic-1"></div>
  <div class="conic-box conic-2"></div>
</div>`} />

        <h3>4. Repeating Gradients</h3>
        <p>
          Agar aap chahte ho ki gradient pattern repeat hota rahe jab tak container fill na ho jaye, toh hum <code>repeating-linear-gradient()</code>, <code>repeating-radial-gradient()</code> ya <code>repeating-conic-gradient()</code> ka use karte hain.
        </p>

        <LiveEditor title="Repeating Gradients" initialCode={`<style>
  .repeat-box {
    width: 200px; height: 150px;
    margin: 10px; display: inline-block;
  }
  
  .repeat-1 {
    background-image: repeating-linear-gradient(
      45deg,
      yellow,
      yellow 10px,
      black 10px,
      black 20px
    );
  }
  
  .repeat-2 {
    background-image: repeating-radial-gradient(
      circle,
      #3498db,
      #3498db 10px,
      white 10px,
      white 20px
    );
  }
</style>
<div>
  <div class="repeat-box repeat-1"></div>
  <div class="repeat-box repeat-2"></div>
</div>`} />
      </div>
    )
  },
  {
    id: 'css-transforms',
    title: '23. CSS Transforms (2D & 3D)',
    content: (
      <div>
        <h2>CSS Transforms - Elements ko Move, Scale, Rotate aur Skew karna</h2>
        <p>
          <code>transform</code> property CSS mein ek superpower hai. Yeh aapko allow karti hai kisi bhi element ka position, size aur angle badalne ki bina normal document flow ko disturb kiye.
          Matlab agar aap ek box ko transform karte ho, toh aaspas ke dusre elements apni jagah se nahi hilte.
        </p>

        <h3>1. 2D Transforms</h3>
        <ul>
          <li><strong><code>translate(X, Y)</code>:</strong> Element ko uski current position se shift karta hai.</li>
          <li><strong><code>scale(X, Y)</code>:</strong> Element ka size bada ya chhota karta hai. (1 normal hai, 2 double hai, 0.5 half hai).</li>
          <li><strong><code>rotate(angle)</code>:</strong> Element ko rotate karta hai, jaise <code>45deg</code>, <code>90deg</code>, ya <code>-20deg</code>.</li>
          <li><strong><code>skew(X-angle, Y-angle)</code>:</strong> Element ko tircha (tilt) karta hai.</li>
          <li><strong><code>transform-origin</code>:</strong> Yeh batata hai ki transform ka center point kya hoga (default center, center hota hai).</li>
        </ul>

        <LiveEditor title="2D Transforms Examples" initialCode={`<style>
  .container { display: flex; gap: 30px; padding: 50px; flex-wrap: wrap;}
  .box {
    width: 100px; height: 100px;
    background: #e74c3c; color: white;
    display: flex; align-items: center; justify-content: center;
    transition: 0.5s; font-family: sans-serif; font-weight: bold;
    cursor: pointer;
  }
  
  .translate-box:hover {
    /* move 20px right, 20px down */
    transform: translate(20px, 20px);
    background: #3498db;
  }
  
  .scale-box:hover {
    /* increase size by 1.5x */
    transform: scale(1.5);
    background: #2ecc71;
  }
  
  .rotate-box:hover {
    /* rotate 45 degrees */
    transform: rotate(45deg);
    background: #f1c40f; color: black;
  }
  
  .skew-box:hover {
    /* skew X by 20deg */
    transform: skewX(20deg);
    background: #9b59b6;
  }
  
  .multi-box:hover {
    /* Multiple transforms */
    transform: translate(30px, -30px) rotate(360deg) scale(1.2);
    background: #34495e;
  }
  
  .origin-box {
    transform-origin: top left;
  }
  .origin-box:hover {
    transform: rotate(45deg);
    background: #e67e22;
  }
</style>
<div class="container">
  <div class="box translate-box">Translate</div>
  <div class="box scale-box">Scale</div>
  <div class="box rotate-box">Rotate</div>
  <div class="box skew-box">Skew</div>
  <div class="box multi-box">Multiple</div>
  <div class="box origin-box">Origin TL</div>
</div>
<p style="text-align:center; font-family:sans-serif;">Hover over boxes to see transforms!</p>`} />

        <h3>2. 3D Transforms</h3>
        <p>
          3D transforms se aap Z-axis (screen ke andar ya bahar ki taraf) mein elements ko manipulate kar sakte hain.
          Lekin 3D illusion banane ke liye aapko parent element par <code>perspective</code> property lagani padti hai, jo batati hai ki viewer screen se kitna door hai.
        </p>
        <ul>
          <li><strong><code>perspective</code>:</strong> Parent par lagta hai. Choti value (e.g., 200px) zyada intense 3D effect deti hai, badi value (e.g., 1000px) subtle effect deti hai.</li>
          <li><strong><code>rotateX()</code>, <code>rotateY()</code>:</strong> 3D space mein rotate karna.</li>
          <li><strong><code>translateZ()</code>:</strong> Element ko aapki taraf lana ya screen ke pichhe bhejna.</li>
          <li><strong><code>transform-style: preserve-3d</code>:</strong> Yeh ensure karta hai ki children elements bhi 3D space mein rahein, flat na ho jayein.</li>
        </ul>

        <LiveEditor title="3D Transforms (Flip Card)" initialCode={`<style>
  /* The scene needs perspective */
  .scene {
    width: 200px; height: 260px;
    perspective: 600px; /* Important for 3D */
    margin: 20px auto;
  }
  
  .card {
    width: 100%; height: 100%;
    position: relative;
    transition: transform 0.8s;
    /* preserve-3d is crucial to keep back face in 3D */
    transform-style: preserve-3d;
    cursor: pointer;
  }
  
  .scene:hover .card {
    /* Flip the card 180deg on Y axis */
    transform: rotateY(180deg);
  }
  
  .face {
    position: absolute;
    width: 100%; height: 100%;
    /* Hide the back of the element when facing away */
    backface-visibility: hidden;
    display: flex; align-items: center; justify-content: center;
    font-size: 2rem; font-family: sans-serif; font-weight: bold;
    border-radius: 10px; color: white;
  }
  
  .face-front {
    background: #3498db;
  }
  
  .face-back {
    background: #e74c3c;
    /* Already rotated 180deg so it's the back */
    transform: rotateY(180deg);
  }
</style>
<div class="scene">
  <div class="card">
    <div class="face face-front">Front</div>
    <div class="face face-back">Back!</div>
  </div>
</div>
<p style="text-align:center; font-family:sans-serif;">Hover over the card to flip it!</p>`} />
      </div>
    )
  },
  {
    id: 'css-transitions',
    title: '24. CSS Transitions (Smooth State Changes)',
    content: (
      <div>
        <h2>CSS Transitions - Jhatke se nahi, Pyar se badlo</h2>
        <p>
          Normally CSS mein jab koi state change hoti hai (jaise <code>:hover</code> par color change), toh wo instantly hoti hai, jhatke se.
          <strong>Transitions</strong> us change ko smooth bana dete hain ek duration dekar.
        </p>

        <h3>Transition Properties</h3>
        <ul>
          <li><strong><code>transition-property</code>:</strong> Kis property ko animate karna hai (e.g., <code>background-color</code>, <code>transform</code>, ya <code>all</code>).</li>
          <li><strong><code>transition-duration</code>:</strong> Animation kitni der chalegi (e.g., <code>0.3s</code> ya <code>500ms</code>).</li>
          <li><strong><code>transition-timing-function</code>:</strong> Speed curve kaisa hoga. (e.g., <code>ease</code> (default), <code>linear</code>, <code>ease-in</code>, <code>ease-out</code>, <code>cubic-bezier</code>).</li>
          <li><strong><code>transition-delay</code>:</strong> Animation shuru hone se pehle kitna wait karna hai.</li>
        </ul>

        <h3>Shorthand Syntax</h3>
        <p><code>transition: property duration timing-function delay;</code></p>
        <p>Example: <code>transition: all 0.5s ease-in-out 0.1s;</code></p>

        <LiveEditor title="Transitions - Timing Functions" initialCode={`<style>
  .track {
    border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;
    background: #f9f9f9;
  }
  
  .car {
    width: 50px; height: 30px;
    background: crimson; color: white;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.7rem; font-family: sans-serif; font-weight: bold;
    border-radius: 5px;
    /* Base styling, no hover */
  }

  /* Different timing functions */
  .linear { transition: transform 2s linear; }
  .ease { transition: transform 2s ease; }
  .ease-in { transition: transform 2s ease-in; }
  .ease-out { transition: transform 2s ease-out; }
  .ease-in-out { transition: transform 2s ease-in-out; }
  .steps { transition: transform 2s steps(5); }
  
  /* Trigger transition on hover of the parent container */
  .race-track:hover .car {
    transform: translateX(300px);
  }
</style>
<div class="race-track" style="cursor: pointer;">
  <p style="font-family:sans-serif; margin-bottom: 5px;">Hover Here to Start Race!</p>
  <div class="track"><div class="car linear">linear</div></div>
  <div class="track"><div class="car ease">ease</div></div>
  <div class="track"><div class="car ease-in">ease-in</div></div>
  <div class="track"><div class="car ease-out">ease-out</div></div>
  <div class="track"><div class="car ease-in-out">ease-in-out</div></div>
  <div class="track"><div class="car steps">steps(5)</div></div>
</div>`} />

        <h3>Multiple Transitions</h3>
        <p>Aap comma lagakar ek element ki alag-alag properties ko alag-alag time de sakte hain.</p>
        <LiveEditor title="Multiple Transitions" initialCode={`<style>
  .btn {
    padding: 15px 30px; font-size: 1.2rem;
    background: transparent; color: #2ecc71;
    border: 2px solid #2ecc71; border-radius: 5px;
    cursor: pointer;
    
    /* Color changes in 0.3s, but Transform takes 0.8s */
    transition: background 0.3s ease, color 0.3s ease, transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  .btn:hover {
    background: #2ecc71;
    color: white;
    transform: translateY(-10px) scale(1.1);
  }
</style>
<div style="padding: 50px; text-align: center;">
  <button class="btn">Hover Me</button>
</div>`} />
      </div>
    )
  },
  {
    id: 'css-animations',
    title: '25. CSS Animations (Keyframes)',
    content: (
      <div>
        <h2>CSS Animations - Complex Sequences without JS</h2>
        <p>
          Transitions hover ya focus jaise events par depend karte hain, aur sirf start (A) se end (B) tak jaate hain.
          <strong>Animations</strong> apne aap chal sakti hain, aur inme A se B, B se C, C se D tak complex steps banaye ja sakte hain <code>@keyframes</code> ka use karke.
        </p>

        <h3><code>@keyframes</code> Rule</h3>
        <p>Keyframes animation ka blueprint hota hai, jisme percentage (0% se 100%) ya keywords (from, to) ke through steps define kiye jate hain.</p>

        <LiveEditor title="Basic Keyframes Animation" initialCode={`<style>
  /* Step 1: Define keyframes */
  @keyframes bounce {
    0%   { transform: translateY(0); background-color: #3498db; }
    50%  { transform: translateY(-100px) scaleY(1.1); background-color: #e74c3c; }
    100% { transform: translateY(0); background-color: #3498db; }
  }

  .ball {
    width: 50px; height: 50px; border-radius: 50%;
    margin: 100px auto 0;
    
    /* Step 2: Apply animation */
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: infinite; /* loop forever */
    animation-timing-function: ease-in-out;
  }
</style>
<div class="ball"></div>`} />

        <h3>Animation Properties in Detail</h3>
        <ul>
          <li><strong><code>animation-name</code>:</strong> Jo naam <code>@keyframes</code> mein diya hai.</li>
          <li><strong><code>animation-duration</code>:</strong> 1 cycle kitni der chalegi.</li>
          <li><strong><code>animation-timing-function</code>:</strong> Speed curve (linear, ease, etc.).</li>
          <li><strong><code>animation-delay</code>:</strong> Shuru hone se pehle wait time.</li>
          <li><strong><code>animation-iteration-count</code>:</strong> Kitni baar chalegi (e.g., <code>3</code>, ya <code>infinite</code>).</li>
          <li><strong><code>animation-direction</code>:</strong> 
            <code>normal</code> (0% to 100%), 
            <code>reverse</code> (100% to 0%), 
            <code>alternate</code> (A to B, then B to A), 
            <code>alternate-reverse</code>.
          </li>
          <li><strong><code>animation-fill-mode</code>:</strong> Animation khatam hone ke baad element kis state mein rahega (e.g., <code>forwards</code> usko aakhiri keyframe ki state mein rok deta hai).</li>
          <li><strong><code>animation-play-state</code>:</strong> <code>running</code> ya <code>paused</code>.</li>
        </ul>

        <h3>Shorthand Syntax</h3>
        <p><code>animation: name duration timing-function delay iteration-count direction fill-mode;</code></p>
        <p>Example: <code>animation: slideIn 2s ease-in 1s infinite alternate forwards;</code></p>

        <LiveEditor title="Advanced Animation Example (Loading Spinner)" initialCode={`<style>
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes colorPulse {
    0% { border-top-color: #3498db; }
    33% { border-top-color: #e74c3c; }
    66% { border-top-color: #f1c40f; }
    100% { border-top-color: #3498db; }
  }

  .spinner {
    width: 60px; height: 60px;
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #3498db; /* Initial color */
    border-radius: 50%;
    margin: 50px auto;
    
    /* Applying two animations simultaneously */
    animation: 
      spin 1s linear infinite,
      colorPulse 3s linear infinite;
  }
</style>
<div class="spinner"></div>`} />
      </div>
    )
  },
  {
    id: 'css-filters',
    title: '26. CSS Filters & Backdrop-filter',
    content: (
      <div>
        <h2>CSS Filters - Images aur Elements ko Edit karna</h2>
        <p>
          CSS <code>filter</code> property aapko Photoshop jaise effects (blur, brightness, contrast) directly browser mein apply karne ki azaadi deti hai. Ye sirf images par hi nahi, balki kisi bhi HTML element par kaam karti hai.
        </p>

        <h3>Common Filter Functions</h3>
        <ul>
          <li><strong><code>blur(px)</code>:</strong> Element ko dhundhla karta hai.</li>
          <li><strong><code>brightness(%)</code>:</strong> 100% normal hai, &gt;100% brighter, &lt;100% darker.</li>
          <li><strong><code>contrast(%)</code>:</strong> Contrast adjust karta hai.</li>
          <li><strong><code>grayscale(%)</code>:</strong> Image ko black & white banata hai (100% matlab fully grey).</li>
          <li><strong><code>sepia(%)</code>:</strong> Vintage yellow/brown effect deta hai.</li>
          <li><strong><code>invert(%)</code>:</strong> Colors ko invert (negative) karta hai. Dark mode effects ke liye achha hai.</li>
          <li><strong><code>hue-rotate(deg)</code>:</strong> Color wheel ke according colors change karta hai.</li>
          <li><strong><code>drop-shadow(x y blur color)</code>:</strong> Ye <code>box-shadow</code> se alag hai. Ye PNG image ke actual content (transparent background ko chhod kar) ke shape ke hisaab se shadow banata hai!</li>
        </ul>

        <LiveEditor title="Filters in Action" initialCode={`<style>
  .grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
  }
  
  .box {
    height: 100px;
    background-image: url('https://images.unsplash.com/photo-1506744626753-1fa28f673b0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    display: flex; align-items: flex-end; justify-content: center;
    padding-bottom: 5px; color: white; font-weight: bold; font-family: sans-serif;
    text-shadow: 1px 1px 3px black;
  }

  .f-blur { filter: blur(3px); }
  .f-gray { filter: grayscale(100%); }
  .f-sepia { filter: sepia(80%); }
  .f-bright { filter: brightness(150%); }
  .f-contrast { filter: contrast(200%); }
  .f-hue { filter: hue-rotate(90deg); }
  .f-invert { filter: invert(100%); }
  
  /* Combining filters */
  .f-multi { filter: grayscale(50%) blur(2px) contrast(150%); }

</style>
<div class="grid">
  <div class="box">Normal</div>
  <div class="box f-blur">Blur</div>
  <div class="box f-gray">Grayscale</div>
  <div class="box f-sepia">Sepia</div>
  <div class="box f-bright">Brightness</div>
  <div class="box f-contrast">Contrast</div>
  <div class="box f-hue">Hue-Rotate</div>
  <div class="box f-invert">Invert</div>
  <div class="box f-multi">Combined</div>
</div>`} />

        <h3><code>backdrop-filter</code> (Glassmorphism Effect)</h3>
        <p>
          Jabki <code>filter</code> element khud par apply hota hai, <strong><code>backdrop-filter</code></strong> element ke <em>pichhe (behind)</em> jo content hai, us par effect (jaise blur) apply karta hai. Yeh modern UI designs mein Glassmorphism (kaanch jaisa frosted glass effect) banane ke liye bahut use hota hai. Note: Element ka background thoda transparent (rgba) hona chahiye tabhi pichhe ka effect dikhega.
        </p>

        <LiveEditor title="Backdrop Filter - Glassmorphism" initialCode={`<style>
  .bg-container {
    height: 250px;
    background-image: url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80');
    background-size: cover;
    background-position: center;
    display: flex; align-items: center; justify-content: center;
    padding: 20px;
  }

  .glass-card {
    width: 300px;
    padding: 30px;
    border-radius: 15px;
    
    /* Background slightly transparent white */
    background: rgba(255, 255, 255, 0.2);
    
    /* A light border to make it look like glass */
    border: 1px solid rgba(255, 255, 255, 0.5);
    
    /* The magic! Blurring the background behind this card */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px); /* For Safari */
    
    color: white; font-family: sans-serif;
    text-align: center;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  }
</style>
<div class="bg-container">
  <div class="glass-card">
    <h3>Glassmorphism</h3>
    <p>Using backdrop-filter: blur()</p>
  </div>
</div>`} />
      </div>
    )
  },
  {
    id: 'css-variables',
    title: '27. CSS Variables (Custom Properties)',
    content: (
      <div>
        <h2>CSS Variables - Don't Repeat Yourself (DRY)</h2>
        <p>
          Pehle CSS mein ek color ko 50 jagah use karne ke liye color ka hex code bar-bar copy-paste karna padta tha. Agar color change karna ho toh 50 jagah change karna padta.
          <strong>CSS Variables (Custom Properties)</strong> is problem ko solve karte hain.
        </p>

        <h3>1. Declaring Variables</h3>
        <p>
          Variables hamesha <code>--</code> (double hyphen) se shuru hote hain. Globally available banane ke liye inhein <code>:root</code> pseudo-class ke andar define kiya jata hai, jo HTML document ke root tag (<code>&lt;html&gt;</code>) ko target karta hai.
        </p>

        <h3>2. Using Variables (<code>var()</code>)</h3>
        <p>
          Variable ko call karne ke liye <code>var(--variable-name)</code> function ka use karte hain. Aap fallback value bhi de sakte ho: <code>var(--main-color, red)</code>. Agar variable define nahi hai toh fallback chalega.
        </p>

        <LiveEditor title="Variables Basics & Theming" initialCode={`<style>
  /* Define variables globally */
  :root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --text-color: #333;
    --spacing-md: 15px;
    --border-radius: 8px;
  }

  .theme-box {
    background-color: var(--primary-color);
    color: white;
    padding: var(--spacing-md);
    border-radius: var(--border-radius);
    font-family: sans-serif;
    margin-bottom: var(--spacing-md);
  }

  .theme-btn {
    background-color: var(--secondary-color);
    color: white;
    padding: var(--spacing-md);
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
  }
  
  /* Fallback Example */
  .fallback-text {
    /* --brand-color exist nahi karta, to tomato color use hoga */
    color: var(--brand-color, tomato); 
    font-weight: bold;
    font-family: sans-serif;
  }
</style>
<div>
  <div class="theme-box">I use CSS variables for styling!</div>
  <button class="theme-btn">Action Button</button>
  <p class="fallback-text">I am using a fallback color!</p>
</div>`} />

        <h3>3. Scoping of Variables</h3>
        <p>
          Aap variables ko sirf specific elements ke andar bhi define kar sakte hain. Tab vo sirf us element aur uske children ko milenge.
        </p>

        <LiveEditor title="Local Scope vs Global Scope" initialCode={`<style>
  :root {
    --box-color: #bdc3c7; /* Global gray */
  }

  .local-scope {
    --box-color: #8e44ad; /* Overridden locally for this container */
  }

  .my-box {
    background-color: var(--box-color);
    padding: 20px;
    margin: 10px;
    color: white;
    font-family: sans-serif;
    border-radius: 5px;
  }
</style>
<div>
  <div class="my-box">I use Global Variable (Gray)</div>
  
  <div class="local-scope">
    <div class="my-box">I use Local Variable (Purple)</div>
  </div>
</div>`} />

        <h3>4. Power of CSS Variables: Responsive & Theming (Dark Mode)</h3>
        <p>
          Media queries ya class selectors ke andar jab aap variable ki value badalte hain, toh jahan bhi wo variable use hua hai, wo automatically update ho jata hai!
        </p>

        <LiveEditor title="Simple Dark Mode using Variables" initialCode={`<style>
  /* Light Theme Variables (Default) */
  .app-container {
    --bg-color: #ffffff;
    --text-color: #222222;
    --card-bg: #f4f4f4;
    --btn-bg: #3498db;
    
    background-color: var(--bg-color);
    color: var(--text-color);
    padding: 30px;
    font-family: sans-serif;
    transition: 0.3s;
  }
  
  /* Dark Theme Variables override */
  /* Using a checkbox hack to toggle classes for demo purposes */
  .dark-mode-toggle:checked ~ .app-container {
    --bg-color: #121212;
    --text-color: #ffffff;
    --card-bg: #2d2d2d;
    --btn-bg: #e74c3c;
  }

  .card {
    background-color: var(--card-bg);
    padding: 20px;
    border-radius: 10px;
    transition: 0.3s;
  }

  .btn {
    background-color: var(--btn-bg);
    color: white; padding: 10px 20px; border: none;
    border-radius: 5px; margin-top: 15px; cursor: pointer;
    transition: 0.3s;
  }
</style>
<div>
  <input type="checkbox" id="toggle" class="dark-mode-toggle" style="margin-bottom: 20px;">
  <label for="toggle" style="font-family: sans-serif; font-weight: bold; cursor: pointer;">Toggle Dark Mode 🌙</label>
  
  <div class="app-container">
    <h2>My Awesome App</h2>
    <div class="card">
      <p>This card changes color dynamically based on variables.</p>
      <button class="btn">Read More</button>
    </div>
  </div>
</div>`} />
        
        <h3>5. Using <code>calc()</code> with Variables</h3>
        <p>
          CSS Variables CSS <code>calc()</code> function ke saath bahut badhiya kaam karte hain dynamic sizing ke liye.
        </p>
        <LiveEditor title="calc() with Variables" initialCode={`<style>
  :root {
    --base-size: 16px;
    --spacing-unit: 8px;
  }
  
  .dynamic-text {
    /* 16px * 2 = 32px */
    font-size: calc(var(--base-size) * 2);
    /* 8px * 3 = 24px */
    margin-bottom: calc(var(--spacing-unit) * 3);
    font-family: sans-serif;
    color: #2c3e50;
  }
  
  .dynamic-box {
    width: calc(100% - var(--spacing-unit) * 4);
    background: #e67e22;
    padding: var(--spacing-unit);
    color: white; font-family: sans-serif;
  }
</style>
<div>
  <div class="dynamic-text">Dynamic Font Size</div>
  <div class="dynamic-box">Dynamic Width Box</div>
</div>`} />

      </div>
    )
  }
];

export default chapters;
