import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const chapters = [
  {
    id: 'css-shadows',
    title: '21. CSS Shadows & Effects',
    content: (
      <div>
        <h2>CSS Shadows (box-shadow & text-shadow)</h2>
        <p>Shadows ek flat design ko depth aur realism deti hain. CSS mein shadows lagana bahut aasaan hai.</p>

        <h3>1. Box Shadow</h3>
        <p>Yeh div, buttons, cards jaise elements pe shadow lagata hai.</p>
        <p><strong>Syntax:</strong> <code>box-shadow: horizontal vertical blur spread color;</code></p>
        <CodeBlock>{`.card {
  /* x-offset: 5px, y-offset: 10px, blur: 15px, color: black with 20% opacity */
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
}

.button-glow {
  /* Glow effect ke liye spread aur bright color use karo */
  box-shadow: 0 0 15px 5px rgba(108, 43, 217, 0.4);
}`}</CodeBlock>

        <h3>2. Inset Shadow</h3>
        <p>Shadow ko element ke andar (inner shadow) ki taraf dikhane ke liye <code>inset</code> keyword lagao. Yeh pressed ya khokhla effect deta hai.</p>
        <CodeBlock>{`.pressed-button {
  background-color: #eee;
  box-shadow: inset 2px 2px 5px rgba(0,0,0,0.3);
}`}</CodeBlock>

        <h3>3. Text Shadow</h3>
        <p>Text ke piche shadow banane ke liye. (Isme spread radius nahi hota).</p>
        <CodeBlock>{`.title {
  /* x-offset, y-offset, blur, color */
  text-shadow: 2px 2px 4px #000000;
}

.neon-text {
  /* Multiple shadows comma se separate karke (Neon glow trick) */
  color: #fff;
  text-shadow: 
    0 0 5px #fff, 
    0 0 10px #ff00ff, 
    0 0 20px #ff00ff, 
    0 0 40px #ff00ff;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek card banao. Uspe pehle normal bottom drop-shadow lagao. Fir usi par hover karne par (hover pseudo-class use karke) shadow ka blur aur offset badha do (aisa lagega jaise card upar uth raha ho).</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-gradients',
    title: '22. CSS Gradients (Linear & Radial)',
    content: (
      <div>
        <h2>CSS Gradients</h2>
        <p>Gradients do ya zyada colors ka smooth transition hota hai. Yeh background-image property ki tarah kaam karte hain.</p>

        <h3>1. Linear Gradients</h3>
        <p>Ek direction (line) mein colors ka mix hona.</p>
        <CodeBlock>{`.bg-linear {
  /* Default top to bottom */
  background: linear-gradient(#e66465, #9198e5);
  
  /* Left se Right */
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  
  /* Angle pe (45 degrees) */
  background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
  
  /* Hard lines (sharp transition at 50%) */
  background: linear-gradient(to right, red 50%, blue 50%);
}`}</CodeBlock>

        <h3>2. Radial Gradients</h3>
        <p>Center se bahar ki taraf circular shape mein colors ka mix hona.</p>
        <CodeBlock>{`.bg-radial {
  /* Default center se */
  background: radial-gradient(circle, #ff7e5f, #feb47b);
  
  /* Position change karna */
  background: radial-gradient(circle at top left, #12c2e9, #c471ed);
}`}</CodeBlock>

        <h3>3. Text par Gradient lagana (Pro Trick!)</h3>
        <p>Aap background gradient ko text ke andar clipping karke gradient text bana sakte ho.</p>
        <CodeBlock>{`.gradient-text {
  /* Pehle background gradient do */
  background: linear-gradient(45deg, #ff00cc, #333399);
  
  /* Background ko sirf text ke andar clip karo */
  background-clip: text;
  -webkit-background-clip: text; /* Safari/Chrome support */
  
  /* Asli text color ko transparent kardo taaki peeche ka gradient dikhe */
  color: transparent;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek button banao jiska background ek 45 degree ka linear gradient ho. Uspe hover karne par gradient ke colors reverse ho jayein (dusra gradient lagao hover state mein).</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-transforms',
    title: '23. CSS Transforms (Rotate, Scale, Translate)',
    content: (
      <div>
        <h2>CSS Transforms (2D)</h2>
        <p>Transform property se aap elements ko rotate (ghumana), scale (chhota-bada karna), translate (move karna), aur skew (tircha karna) kar sakte hain.</p>

        <h3>1. Translate (Move karna)</h3>
        <p>Element ko uski current position se move karta hai (bina document flow tode).</p>
        <CodeBlock>{`.box {
  /* X-axis pe 50px right, Y-axis pe 20px down */
  transform: translate(50px, 20px);
  
  /* Sirf Y axis pe upar jana hai (negative value) */
  transform: translateY(-10px); 
}`}</CodeBlock>
        <p className="info-box"><strong>Centering Trick:</strong> <code>position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);</code> se exact center hota hai.</p>

        <h3>2. Scale (Size badhana/ghatana)</h3>
        <p>Scale ki value decimals mein hoti hai. 1 matlab normal size. 0.5 matlab aadha. 2 matlab doguna.</p>
        <CodeBlock>{`.card:hover {
  /* Dono taraf 10% badh jayega */
  transform: scale(1.1);
  
  /* Sirf X-axis pe patla karna */
  transform: scaleX(0.5);
}`}</CodeBlock>

        <h3>3. Rotate (Ghumana)</h3>
        <p>Angles degrees (deg) mein diye jate hain.</p>
        <CodeBlock>{`.icon {
  transform: rotate(45deg); /* Clockwise */
  transform: rotate(-90deg); /* Anti-clockwise */
}`}</CodeBlock>

        <h3>4. Multiple Transforms ek saath</h3>
        <p>Agar ek se zyada transform lagane hain, toh unhe space dekar ek hi line mein likhna hota hai. Agar alag-alag line mein likhoge toh sirf aakhri wala chalega!</p>
        <CodeBlock>{`.animated-element {
  /* Sahi tareeqa */
  transform: translateX(20px) rotate(45deg) scale(1.2);
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek chhota box banao (e.g., 50x50px, background orange). Hover pseudo class lagakar use <code>scale(1.5)</code> aur <code>rotate(180deg)</code> dono ek sath do, taaki jab uspar mouse aaye toh wo bada ho aur ghoom jaye.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-transitions',
    title: '24. CSS Transitions (Smooth Effects)',
    content: (
      <div>
        <h2>CSS Transitions</h2>
        <p>Jab koi property (jaise color ya size) badalti hai, toh wo ekdam se (jhatke se) badalti hai. Transition property is badlaav ko smooth banati hai.</p>

        <h3>1. Transition Properties</h3>
        <p>Hume 4 cheezein batani hoti hain:</p>
        <ul className="styled-list">
          <li><strong>property:</strong> Kis property pe transition lagana hai? (all, background-color, transform, etc.)</li>
          <li><strong>duration:</strong> Kitna time lagega? (0.3s, 500ms)</li>
          <li><strong>timing-function:</strong> Speed ki speed kaisi hogi? (ease, linear, ease-in, ease-out)</li>
          <li><strong>delay:</strong> Kitni der baad shuru hoga? (0s)</li>
        </ul>

        <CodeBlock>{`.btn {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  
  /* Transition humesha normal state me likhte hain, hover state me NAHI! */
  transition-property: background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.btn:hover {
  background-color: red; /* Ab blue se red banne me 0.3s lagenge */
}`}</CodeBlock>

        <h3>2. Transition Shorthand</h3>
        <p>Developers property ki bajaye shorthand use karte hain. Order: property duration timing-function delay</p>
        <CodeBlock>{`.card {
  transform: translateY(0);
  box-shadow: 0 0 0 rgba(0,0,0,0);
  
  /* Shorthand for multiple transitions (comma separated) */
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  
  /* Ya phir sabpe ek sath lagane ke liye */
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}`}</CodeBlock>

        <p className="info-box"><strong>Performance Tip:</strong> Browser ke liye <code>transform</code> aur <code>opacity</code> ko animate karna sabse aasaan hota hai. Width, height, ya margin animate karne se performance issue aa sakta hai low-end phones par.</p>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Pichhle task wala box lo jisme scale aur rotate lagaya tha. Bas base class me <code>transition: transform 0.5s ease-out;</code> add kardo aur dekho ab wo box kitna smoothly bada hota aur ghoomta hai hover karne par!</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-animations',
    title: '25. Animations & Keyframes',
    content: (
      <div>
        <h2>CSS Animations & @keyframes</h2>
        <p>Transitions sirf A se B state mein (jaise normal se hover) jate hain aur hover hatane pe wapas aate hain. Animations bina kisi interaction (jaise hover) ke chal sakti hain, aur A se B, phir B se C, C se D tak complex sequence bana sakti hain.</p>

        <h3>1. @keyframes define karna</h3>
        <p>Keyframes animation ka rasta (timeline) define karte hain.</p>
        <CodeBlock>{`/* Animation ka naam rakha 'bounce' */
@keyframes bounce {
  0% { 
    transform: translateY(0); 
  }
  50% { 
    transform: translateY(-30px); /* Upar jayega */
  }
  100% { 
    transform: translateY(0); /* Wapas neeche aayega */
  }
}`}</CodeBlock>

        <h3>2. Animation apply karna</h3>
        <p>Keyframe banne ke baad use element pe lagana padta hai.</p>
        <CodeBlock>{`.ball {
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50%;
  
  /* name | duration | timing | count */
  animation: bounce 2s ease-in-out infinite;
}`}</CodeBlock>

        <h3>3. Animation Details</h3>
        <ul className="styled-list">
          <li><code>animation-iteration-count</code>: Kitni baar chalani hai (number ya <code>infinite</code>)</li>
          <li><code>animation-direction</code>: Kya aage-peeche donon chalani hai? (<code>alternate</code> use karein taaki end se start wapas smooth ho)</li>
          <li><code>animation-fill-mode</code>: Animation khatam hone ke baad kahan ruke? (<code>forwards</code> rakhne se wo apne last frame par ruki rahegi).</li>
        </ul>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek loading spinner (ek gol chakkar) banao. Usme ek border lagao jisme ek side ki border transparent ho. Ek <code>spin</code> naam ka @keyframes banao jo 0% par rotate(0deg) ho aur 100% par rotate(360deg). Use 1 second linear infinite animation se chalao.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-variables',
    title: '26. CSS Variables (Custom Properties)',
    content: (
      <div>
        <h2>CSS Variables</h2>
        <p>Pehle agar ek brand color (jaise #6c5ce7) 50 jagah use hota tha, aur use badalna pade, toh 50 jagah edit karna padta tha. CSS Variables ne ise bilkul aasaan bana diya.</p>

        <h3>1. Variable Define Karna (:root)</h3>
        <p>Variables hamesha <code>--</code> se shuru hote hain. Inhe <code>:root</code> (jo HTML tag ke barabar hai) mein rakhne se wo poori site ke liye global ban jate hain.</p>
        <CodeBlock>{`:root {
  --primary-color: #6c5ce7;
  --secondary-color: #a29bfe;
  --bg-color: #f4f4f9;
  --text-dark: #2d3436;
  --main-padding: 20px;
  --radius-lg: 12px;
}`}</CodeBlock>

        <h3>2. Variable Use Karna (var())</h3>
        <p>Variable ki value ko apply karne ke liye <code>var()</code> function ka use hota hai.</p>
        <CodeBlock>{`body {
  background-color: var(--bg-color);
  color: var(--text-dark);
}

.button {
  background-color: var(--primary-color);
  padding: var(--main-padding);
  border-radius: var(--radius-lg);
}`}</CodeBlock>

        <h3>3. Theming (Dark Mode Logic)</h3>
        <p>CSS Variables ka sabse bada faida Theming hai. Hum ek class add karke poori website ke colors badal sakte hain!</p>
        <CodeBlock>{`/* Default Light Theme (Root pe) */
:root {
  --bg: #ffffff;
  --text: #000000;
}

/* Dark Theme overrides */
body.dark-theme {
  --bg: #121212;
  --text: #ffffff;
}

/* Ab body mein hamesha var hi use hoga, automatically theme adjust hogi */
body {
  background-color: var(--bg);
  color: var(--text);
  transition: background-color 0.3s;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Apne code mein do colors define karo root me: <code>--main-bg</code> aur <code>--main-color</code>. Ek box ko ye variables do. Phir ek hover pseudo-class (box:hover) me in variables ki value redefine kardo. Dekho var() bina HTML change kiye colors switch kardega!</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-functions-units',
    title: '27. Modern CSS Functions & Units',
    content: (
      <div>
        <h2>Modern CSS Power: calc(), clamp() & Units</h2>
        <p>CSS ab ek static language nahi rahi. Isme powerful math functions aa gaye hain.</p>

        <h3>1. calc()</h3>
        <p>Ye function aapko CSS properties mein calculations (+, -, *, /) karne deta hai. Sabse zaroori baat: Aap alag-alag units mix kar sakte ho!</p>
        <CodeBlock>{`.container {
  /* Poori width (100%) minus dono taraf ka 20px padding */
  width: calc(100% - 40px);
}`}</CodeBlock>

        <h3>2. clamp(min, ideal, max)</h3>
        <p>Ye responsive typography aur sizing ka jaadu hai. Ye value ko dynamically badalne deta hai, ek minimum aur maximum limit ke andar.</p>
        <CodeBlock>{`h1 {
  /* Min size: 24px
     Ideal size: 5 viewport width (Screen ke hisab se badhega)
     Max size: 48px */
  font-size: clamp(24px, 5vw, 48px);
}`}</CodeBlock>
        <p>Is ek line se h1 phone pe 24px rahega, laptop pe badhega, aur bade monitor pe 48px se bada nahi hoga. No Media Queries required!</p>

        <h3>3. Relative Units (em vs rem)</h3>
        <ul className="styled-list">
          <li><code>px</code>: Absolute hai, user zoom in kare toh change nahi hota.</li>
          <li><code>em</code>: Apne parent element ke font-size se multiply hota hai. (Agar parent 16px hai, toh 2em = 32px). Problem ye hai ki agar divs ke andar divs hon, toh ye multiply hota jata hai.</li>
          <li><code>rem</code>: Root-em. Yeh hamesha <code>&lt;html&gt;</code> ke font-size (default 16px) se multiply hota hai. Ye sabse safe aur best practice hai sizing aur spacing ke liye. (e.g. 1rem = 16px, 1.5rem = 24px).</li>
        </ul>

        <h3>4. Viewport Units (vh, vw)</h3>
        <ul className="styled-list">
          <li><code>100vh</code>: Screen ki poori Lambaai (Height).</li>
          <li><code>100vw</code>: Screen ki poori Chaudaai (Width).</li>
        </ul>
        <CodeBlock>{`.full-screen-hero {
  min-height: 100vh; /* Browser ki tab ki height jitna */
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek h1 tag banao. Uski font-size me <code>clamp(1rem, 10vw, 4rem)</code> daalo. Phir browser window ko chhota bada karke dekho ki text kaise automatically scale hota hai!</p>
        </div>
      </div>
    )
  }
];

export default chapters;
