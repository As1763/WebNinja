import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const chapters = [
  {
    id: 'css-colors',
    title: '6. CSS Colors (Har Tarika)',
    content: (
      <div>
        <h2>CSS Colors — Complete Guide</h2>
        <p>CSS mein colors define karne ke kai tarike hain. Har tarike ka apna use-case hai. Chaliye dekhte hain har ek tarika detail mein.</p>

        <h3>1. Named Colors</h3>
        <p>CSS mein 140+ predefined color names hain. Yeh sabse simple tarika hai, par design mein thoda restricted hota hai.</p>
        <CodeBlock>{`.box {
  background-color: tomato;
  color: white;
  border: 2px solid darkred;
}`}</CodeBlock>

        <h3>2. Hex Colors (#RRGGBB)</h3>
        <p>Hexadecimal colors <code>#</code> se shuru hote hain. Isme 6 characters hote hain, jo Red, Green, aur Blue (RGB) ki intensity batate hain (00 se FF tak).</p>
        <CodeBlock>{`.box {
  background-color: #ff6347; /* tomato color in hex */
  color: #ffffff;            /* white in hex */
}

/* Shorthand Hex: Agar dono characters same hain, toh 3 chars use kar sakte ho */
.box-short {
  color: #f00;               /* Same as #ff0000 (red) */
  background-color: #000;    /* Same as #000000 (black) */
}`}</CodeBlock>

        <h3>3. RGB Colors (rgb(R, G, B))</h3>
        <p>RGB ka matlab hai Red, Green, Blue. Har color ki value 0 se 255 ke beech hoti hai.</p>
        <CodeBlock>{`.box {
  background-color: rgb(255, 99, 71); /* tomato color in rgb */
  color: rgb(255, 255, 255);          /* white in rgb */
}`}</CodeBlock>

        <h3>4. RGBA Colors (rgba(R, G, B, A))</h3>
        <p>RGBA mein ek extra 'A' hota hai, jiska matlab hai <strong>Alpha (Transparency)</strong>. Alpha ki value 0 (completely transparent) se 1 (completely solid) ke beech hoti hai.</p>
        <CodeBlock>{`.overlay {
  /* Semi-transparent black background */
  background-color: rgba(0, 0, 0, 0.5); 
}

.text {
  /* Text color with 80% opacity */
  color: rgba(255, 255, 255, 0.8);
}`}</CodeBlock>

        <h3>5. HSL Colors (hsl(H, S, L))</h3>
        <p>HSL ka matlab hai Hue, Saturation, Lightness. Yeh human-readable format hai aur design adjustments mein bahut kaam aata hai.</p>
        <ul className="styled-list">
          <li><strong>Hue:</strong> Color wheel pe angle (0 to 360). 0 is red, 120 is green, 240 is blue.</li>
          <li><strong>Saturation:</strong> Color ki intensity (0% is grayscale, 100% is full color).</li>
          <li><strong>Lightness:</strong> Brightness (0% is black, 50% is normal, 100% is white).</li>
        </ul>
        <CodeBlock>{`.box {
  background-color: hsl(9, 100%, 64%); /* tomato color in hsl */
  color: hsl(0, 0%, 100%);             /* white in hsl */
}`}</CodeBlock>

        <h3>6. HSLA Colors (hsla(H, S, L, A))</h3>
        <p>HSLA mein Alpha (transparency) add hoti hai, bilkul RGBA ki tarah.</p>
        <CodeBlock>{`.overlay {
  background-color: hsla(0, 0%, 0%, 0.5); /* 50% transparent black */
}`}</CodeBlock>

        <h3>7. Special Keywords: currentColor & transparent</h3>
        <CodeBlock>{`/* transparent: Background ko completely transparent kar deta hai */
.button {
  background-color: transparent;
  border: 2px solid white;
}

/* currentColor: Element ke text color ko inherit karta hai */
.button-icon {
  color: #ff5722;
  border: 1px solid currentColor; /* Border bhi #ff5722 ho jayegi */
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek card element banao jiska background color RGBA format mein ho (with 50% transparency). Uske andar text likho aur us text ko HSLA color do. Finally, card pe ek border lagao jo <code>currentColor</code> property use kare.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-backgrounds',
    title: '7. CSS Backgrounds (Complete)',
    content: (
      <div>
        <h2>CSS Backgrounds</h2>
        <p>Elements ke pichhe kya dikhega, yeh hum CSS Background properties se control karte hain. Isme sirf solid colors hi nahi, images, gradients aur patterns bhi aa sakte hain.</p>

        <h3>1. background-color</h3>
        <p>Pichhle chapter mein humne colors dekhe the. Unhi formats (Hex, RGB, HSL) ko hum background-color ke liye use kar sakte hain.</p>
        <CodeBlock>{`body {
  background-color: #f0f0f0;
}`}</CodeBlock>

        <h3>2. background-image</h3>
        <p>Aap kisi element ke pichhe image set kar sakte ho using <code>url()</code>.</p>
        <CodeBlock>{`.hero-section {
  background-image: url('images/hero-bg.jpg');
}`}</CodeBlock>

        <h3>3. background-repeat</h3>
        <p>Default behavior mein image repeat hoti hai (tiling) agar image element se choti ho. Isey control karna zaroori hai.</p>
        <ul className="styled-list">
          <li><code>repeat</code> (default): X aur Y dono direction mein repeat.</li>
          <li><code>no-repeat</code>: Image sirf ek baar aayegi.</li>
          <li><code>repeat-x</code>: Sirf horizontally repeat.</li>
          <li><code>repeat-y</code>: Sirf vertically repeat.</li>
        </ul>
        <CodeBlock>{`.hero-section {
  background-image: url('images/pattern.png');
  background-repeat: no-repeat;
}`}</CodeBlock>

        <h3>4. background-size</h3>
        <p>Image ka size container ke hisab se kaise adjust hoga, yeh <code>background-size</code> batata hai.</p>
        <ul className="styled-list">
          <li><code>cover</code>: Image proportionally scale hoti hai taaki container ko poori tarah cover kar le (kuch hissa crop ho sakta hai). Sabse zyada use hota hai.</li>
          <li><code>contain</code>: Image proportionally scale hoti hai taaki poori image container mein fit ho (empty space bacha sakti hai).</li>
          <li>Specific size: <code>100% 100%</code> (stretching), <code>50px 50px</code>, etc.</li>
        </ul>
        <CodeBlock>{`.hero-section {
  background-image: url('images/hero-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}`}</CodeBlock>

        <h3>5. background-position</h3>
        <p>Image kahan se start hogi.</p>
        <CodeBlock>{`.hero-section {
  background-position: center; /* Center mein */
  /* Other options: top left, bottom right, 50% 50%, 10px 20px */
}`}</CodeBlock>

        <h3>6. background-attachment (Parallax Effect)</h3>
        <p>Kya scroll karne pe background image bhi scroll hogi?</p>
        <ul className="styled-list">
          <li><code>scroll</code> (default): Background element ke sath scroll hota hai.</li>
          <li><code>fixed</code>: Background viewport pe fixed rehta hai (Parallax effect create karta hai!).</li>
          <li><code>local</code>: Background element ke content ke sath scroll hota hai.</li>
        </ul>
        <CodeBlock>{`.parallax-bg {
  background-image: url('images/bg.jpg');
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}`}</CodeBlock>

        <h3>7. Shorthand: background</h3>
        <p>Aap sab properties ko ek hi line mein likh sakte ho.</p>
        <CodeBlock>{`.hero-section {
  /* color image repeat attachment position */
  background: #333 url('images/bg.jpg') no-repeat fixed center;
  background-size: cover; /* Background-size ko alag se likhna safe hota hai shorthand ke sath */
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek div banao jiska height 500px ho. Usme internet se ek image ka URL daalkar background set karo. Make sure ki image repeat na ho, poori screen ko cover kare, aur scroll karne par image fixed rahe (Parallax effect).</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-borders',
    title: '8. CSS Borders & Outline (Complete)',
    content: (
      <div>
        <h2>CSS Borders & Outlines</h2>
        <p>Elements ke chaaron taraf line (border) lagana web design ka ek basic part hai.</p>

        <h3>1. Border Properties</h3>
        <p>Border banane ke liye 3 properties chahiye: width, style, color.</p>
        <CodeBlock>{`.box {
  border-width: 2px;
  border-style: solid;
  border-color: #6c5ce7;
}`}</CodeBlock>

        <h3>2. Border Styles</h3>
        <ul className="styled-list">
          <li><code>solid</code>: Ek solid line.</li>
          <li><code>dashed</code>: Dash-dash wali line.</li>
          <li><code>dotted</code>: Dot-dot wali line.</li>
          <li><code>double</code>: Double line.</li>
          <li><code>groove</code>, <code>ridge</code>, <code>inset</code>, <code>outset</code>: 3D effects.</li>
          <li><code>none</code>: Border hatane ke liye.</li>
        </ul>
        <CodeBlock>{`.box-dashed { border: 2px dashed #e94560; }
.box-dotted { border: 2px dotted #00b894; }`}</CodeBlock>

        <h3>3. Border Shorthand</h3>
        <p>Darasal, developers hamesha shorthand use karte hain.</p>
        <CodeBlock>{`.card {
  /* width | style | color */
  border: 1px solid rgba(255,255,255,0.1);
}`}</CodeBlock>

        <h3>4. Individual Sides</h3>
        <p>Aap sirf top, right, bottom, ya left pe bhi border laga sakte ho.</p>
        <CodeBlock>{`.header {
  border-bottom: 2px solid #333; /* Sirf neeche border */
}

.quote-box {
  border-left: 5px solid #6c5ce7; /* Left side highlight */
  padding-left: 15px;
}`}</CodeBlock>

        <h3>5. Border Radius (Rounded Corners)</h3>
        <p>Sharp corners ko round karne ke liye.</p>
        <CodeBlock>{`.button {
  border-radius: 8px; /* Sabhi 4 corners 8px round */
}

.circle-img {
  border-radius: 50%; /* Perfect circle banane ke liye (agar width = height ho) */
}

.pill-shape {
  border-radius: 999px; /* Capsule jaisa shape */
}

/* Individual corners: top-left top-right bottom-right bottom-left */
.custom-shape {
  border-radius: 10px 0 10px 0;
}`}</CodeBlock>

        <h3>6. Outline vs Border</h3>
        <p>Outline bhi border jaisi lagti hai, lekin inme 2 main differences hain:</p>
        <ul className="styled-list">
          <li>Outline element ki width/height nahi badhati (wo space nahi gheriti). Box model ke bahar draw hoti hai.</li>
          <li>Outline commonly <code>:focus</code> state mein use hoti hai (accessibility ke liye).</li>
        </ul>
        <CodeBlock>{`.input-field {
  border: 1px solid #ccc;
}

.input-field:focus {
  outline: 2px solid #6c5ce7; /* Focus aane pe outline dikhegi */
  outline-offset: 2px; /* Outline aur border ke beech gap */
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek profile picture jaisa div banao (width aur height barabar ho). Uska border-radius 50% kardo (taaki wo gol ho jaye). Us par ek 5px ki solid colored border lagao. Fir uspe hover karne par ek outline aani chahiye jo uske border se thodi door ho (using outline-offset).</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-text',
    title: '9. CSS Text Properties (Har Ek)',
    content: (
      <div>
        <h2>CSS Text Properties</h2>
        <p>Text ko format aur style karne ke liye CSS mein bahut saari properties hain.</p>

        <h3>1. Color & Alignment</h3>
        <CodeBlock>{`p {
  color: #333;
  text-align: center; /* left, right, center, justify */
}`}</CodeBlock>

        <h3>2. Text Decoration</h3>
        <p>Links pe aane wali underline ya text ko kaatna (strikethrough).</p>
        <CodeBlock>{`a {
  text-decoration: none; /* Link se underline hatana (Very common!) */
}

.deleted-price {
  text-decoration: line-through; /* Text ko kaatna */
}

.custom-underline {
  text-decoration: underline;
  text-decoration-color: #e94560;
  text-decoration-style: wavy; /* solid, double, dotted, dashed, wavy */
  text-decoration-thickness: 2px;
}`}</CodeBlock>

        <h3>3. Text Transform</h3>
        <p>Text ke case ko control karna (bina HTML change kiye).</p>
        <CodeBlock>{`.title {
  text-transform: uppercase; /* SAB CAPITAL */
}
.subtitle {
  text-transform: capitalize; /* Har Word Ka Pehla Letter Capital */
}
.error {
  text-transform: lowercase; /* sab chhota */
}`}</CodeBlock>

        <h3>4. Spacing (Line, Letter, Word)</h3>
        <CodeBlock>{`p {
  line-height: 1.6; /* Line ke beech ki gap. (1.5 se 1.8 padhne mein achha hota hai) */
  letter-spacing: 1px; /* Letters ke beech ka gap */
  word-spacing: 5px; /* Words ke beech ka gap */
}`}</CodeBlock>

        <h3>5. Text Shadow</h3>
        <p>Text ke pichhe shadow lagana.</p>
        <CodeBlock>{`.neon-text {
  /* horizontal-offset | vertical-offset | blur-radius | color */
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.glowing-text {
  /* Multiple shadows for glow effect */
  color: #fff;
  text-shadow: 0 0 10px #fff, 0 0 20px #6c5ce7, 0 0 30px #6c5ce7;
}`}</CodeBlock>

        <h3>6. Text Overflow (Truncation)</h3>
        <p>Agar text card ya button se bada ho jaye, toh use dots (...) mein convert karna (Ellipsis trick!).</p>
        <CodeBlock>{`.truncate {
  white-space: nowrap; /* Text ko nayi line mein jaane se roko */
  overflow: hidden; /* Jo text box ke bahar jaye use chhupa do */
  text-overflow: ellipsis; /* Chhupe hue text ki jagah ... dikhao */
}`}</CodeBlock>
        <p className="info-box">Yeh teeno properties ek sath likhna zaroori hai kaam karne ke liye!</p>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek heading (h2) banao. Usme text-transform se sabhi letters ko uppercase karo. Ek acchi si letter-spacing do. Aur multiple text-shadows ka use karke ek 'Neon Glow' effect create karo.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-fonts',
    title: '10. CSS Fonts (Complete)',
    content: (
      <div>
        <h2>CSS Fonts</h2>
        <p>Typography website ke design ka aadha hissa hoti hai. Sahi font chunna aur use lagana aana chahiye.</p>

        <h3>1. Font Family</h3>
        <p>Font ka naam. Hamesha ek "fallback stack" dena chahiye, matlab agar pehla font load na ho, toh doosra chale, nahi toh teesra.</p>
        <CodeBlock>{`body {
  /* Pehle 'Open Sans' try karega. Nahi mila toh 'Helvetica'. Aakhir mein koi bhi sans-serif. */
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}`}</CodeBlock>

        <h3>2. Font Size, Weight & Style</h3>
        <CodeBlock>{`h1 {
  font-size: 32px; /* absolute unit */
  /* rem units better hote hain accessibility ke liye (e.g. 2rem) */
  
  font-weight: 700; /* 100(thin) se 900(black) tak. 400 is normal, 700 is bold */
  font-style: italic; /* normal, italic, oblique */
}`}</CodeBlock>

        <h3>3. Google Fonts Use Karna (Most Common)</h3>
        <p>Apni pasand ka font Google Fonts (fonts.google.com) se lana.</p>
        <p><strong>HTML mein (head section mein):</strong></p>
        <CodeBlock lang="html">{`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">`}</CodeBlock>
        <p><strong>CSS mein:</strong></p>
        <CodeBlock>{`body {
  font-family: 'Roboto', sans-serif;
}`}</CodeBlock>

        <h3>4. System Font Stack</h3>
        <p>Agar aap chahte ho ki aapki website native apps (Windows, Mac, iOS, Android) jaisi dikhe aur sabse fast load ho, toh System fonts use karo (jaise GitHub ya Twitter karte hain).</p>
        <CodeBlock>{`body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Google Fonts par jao aur wahan se do alag fonts select karo (Ek sans-serif jaise 'Inter' aur ek handwriting jaise 'Pacifico'). HTML file me unhe link karo. Fir headings me handwriting font apply karo aur paragraphs me sans-serif font. Unke font-weights aur font-sizes set karo.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-box-model-details',
    title: '11. Box Model (Puri Detail)',
    content: (
      <div>
        <h2>The CSS Box Model - Deep Dive</h2>
        <p>CSS mein har HTML element ek rectangular box hota hai. Box model yeh define karta hai ki element ka actual size kaise calculate hoga. Yeh 4 cheezon se milkar banta hai:</p>

        <ul className="styled-list">
          <li><strong>Content:</strong> Jisme text ya image hoti hai.</li>
          <li><strong>Padding:</strong> Content ke aas paas ki khali jagah (Border ke andar).</li>
          <li><strong>Border:</strong> Padding aur content ke bahar ki line.</li>
          <li><strong>Margin:</strong> Border ke bhi bahar ki khali jagah (Do elements ke beech ki doori).</li>
        </ul>

        <h3>1. Padding & Margin Shorthand Tricks</h3>
        <CodeBlock>{`.box {
  /* 4 values: top | right | bottom | left (Clockwise!) */
  padding: 10px 15px 20px 25px;
  
  /* 3 values: top | left-and-right | bottom */
  margin: 10px 20px 30px;
  
  /* 2 values: top-and-bottom | left-and-right */
  padding: 10px 20px; 
  
  /* 1 value: sabhi 4 sides */
  margin: 20px; 
}`}</CodeBlock>

        <h3>2. Margin Auto (The Centering Trick)</h3>
        <p>Agar aap kisi block element (jiski width fix ho) ko uske parent ke center mein lana chahte ho horizontally, toh <code>margin: auto</code> sabse purana aur effective tareeqa hai.</p>
        <CodeBlock>{`.container {
  width: 80%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  /* Ya shorthand: margin: 0 auto; */
}`}</CodeBlock>

        <h3>3. Margin Collapse (The Trap! 🪤)</h3>
        <p>Jab do vertical margins aapas mein milti hain, toh wo add hone ki bajaye, unme se jo <strong>sabse badi hoti hai</strong>, wo baqi reh jati hai. Isko <strong>Margin Collapse</strong> kehte hain.</p>
        <CodeBlock>{`h1 {
  margin-bottom: 30px;
}
p {
  margin-top: 20px;
}`}</CodeBlock>
        <p>In dono ke beech total margin <code>50px</code> nahi, balki <code>30px</code> hogi (kyunki 30px &gt; 20px). Yeh sirf vertical (top/bottom) margins ke sath hota hai.</p>

        <h3>4. The Ultimate Fix: box-sizing: border-box</h3>
        <p>Default HTML behavior mein, agar aap kisi element ki width 200px set karte ho, aur fir 20px padding dete ho, toh actual box ki width 240px ho jati hai (200 + 20 left + 20 right). Yeh layout break kar deta hai!</p>
        <p>Iska fix hai <code>border-box</code>. Isse width utni hi rehti hai, padding aur border width ke <strong>andar</strong> adjust ho jate hain.</p>
        <CodeBlock>{`/* Yeh code hamesha har project ke top pe likhna chahiye! */
* {
  box-sizing: border-box;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek parent div banao jiski width 400px aur background color red ho. Uske andar ek child div banao jiski width 100% ho, background color blue ho, aur padding 50px ho. <br/>Pehle normally dekho kya hota hai (Child parent se bahar nikal jayega!). Fir CSS ke top par <code>* {`{`} box-sizing: border-box; {`}`}</code> likhkar dekho magic!</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-sizing',
    title: '12. Width, Height & Overflow',
    content: (
      <div>
        <h2>Sizing Elements & Handling Overflow</h2>

        <h3>1. Width aur Height (Units)</h3>
        <ul className="styled-list">
          <li><code>px</code>: Exact pixels (fixed).</li>
          <li><code>%</code>: Parent element ke hisab se (responsive).</li>
          <li><code>auto</code>: Browser khud decide karega (block elements ke liye width by default puri jagah leti hai).</li>
          <li><code>vw / vh</code>: Viewport (Screen) ki width aur height. <code>100vh</code> ka matlab puri screen ki height cover karna.</li>
        </ul>
        <CodeBlock>{`.fullscreen-section {
  width: 100%;
  height: 100vh; /* Puri screen ki lambaai */
}`}</CodeBlock>

        <h3>2. Max aur Min Constraints</h3>
        <p>Elements ko zyada bada ya chhota hone se rokna.</p>
        <CodeBlock>{`.article {
  width: 100%;       /* Default mobile pe full width */
  max-width: 800px;  /* Lekin badi screen pe 800px se bada nahi hoga */
  margin: 0 auto;    /* Aur center ho jayega */
}`}</CodeBlock>

        <h3>3. Overflow (Bahar nikalte content ko handle karna)</h3>
        <p>Agar fixed height wale box ke andar content zyada aa jaye, toh wo bahar nikal jata hai. Isey <code>overflow</code> property theek karti hai.</p>
        <ul className="styled-list">
          <li><code>visible</code> (default): Content bahar nikal kar dikhega.</li>
          <li><code>hidden</code>: Jo content box se bahar jayega wo kat (hide) ho jayega.</li>
          <li><code>scroll</code>: Hamesha scrollbars dikhayega box par.</li>
          <li><code>auto</code>: Sirf tabhi scrollbar lagayega jab content box se bahar nikal raha ho (sabse zyada use hota hai).</li>
        </ul>
        <CodeBlock>{`.chat-box {
  height: 400px;
  overflow-y: auto; /* Agar messages 400px se zyada honge toh vertical scrollbar aayega */
}`}</CodeBlock>

        <h3>4. CSS calc() function</h3>
        <p>Aap CSS ke andar math calculations kar sakte ho. Yeh layout banane mein bahut kaam aata hai, khaas kar tab jab aap units mix karna chahein (jaise percentages aur pixels).</p>
        <CodeBlock>{`.sidebar {
  width: 250px;
}
.main-content {
  /* Puri screen ki width mein se 250px minus kardo sidebar ke liye */
  width: calc(100% - 250px);
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek div banao jiski height and width sirf 100px ho. Usme ek lamba paragraph daalo jo usme fit na ho sake. Ab us box pe alag-alag properties apply karke dekho: pehle <code>overflow: hidden;</code> fir <code>overflow: auto;</code>.</p>
        </div>
      </div>
    )
  }
];

export default chapters;
