import React from 'react';
import LiveEditor from '../../components/LiveEditor';

const chapters = [
  {
    id: 'css-colors',
    title: '6. CSS Colors (Everything about Colors)',
    content: (
      <div>
        <h2>CSS Colors: Web Design ki Jaan</h2>
        <p>CSS mein colors apply karne ke bohot saare tareeqe hote hain. Sirf "red" ya "blue" likhna kaafi nahi hai, aaj kal hum HEX, RGB, HSL, aur latest features jaise <code>currentColor</code> aur <code>color-mix()</code> ka use karte hain. Chalo isko zero se pro level tak samajhte hain.</p>
        
        <h3>1. Color Keywords (Named Colors)</h3>
        <p>CSS mein 140+ standard color names hote hain jaise <code>red</code>, <code>tomato</code>, <code>dodgerblue</code>, <code>papayawhip</code>. Ye basic testing ke liye theek hain, par professional designs mein kam use hote hain.</p>
        
        <h3>2. HEX (Hexadecimal) Colors</h3>
        <p>HEX code <code>#</code> se start hota hai aur isme 6 characters hote hain (0-9 aur A-F). Pehle 2 characters Red, agle 2 Green, aur last 2 Blue ke liye hote hain. (RRGGBB). Isme alpha channel (transparency) bhi jod sakte hain 8 characters use karke (#RRGGBBAA).</p>

        <h3>3. RGB aur RGBA (Red, Green, Blue, Alpha)</h3>
        <p>RGB colors function <code>rgb(red, green, blue)</code> ka use karke define kiye jate hain. Har value 0 se 255 ke beech hoti hai. RGBA mein 'A' ka matlab Alpha hai jo opacity (transparency) define karta hai (0.0 se 1.0 ke beech).</p>

        <h3>4. HSL aur HSLA (Hue, Saturation, Lightness)</h3>
        <p>Designers ka favourite! <b>Hue</b> (color wheel par degree 0-360), <b>Saturation</b> (color ki intensity 0% se 100%), aur <b>Lightness</b> (kitna dark ya light hai 0% se 100%).</p>

        <h3>5. <code>currentColor</code> aur <code>color-mix()</code> (Advanced)</h3>
        <p><code>currentColor</code> ek variable ki tarah kaam karta hai jo current element ki <code>color</code> property ki value le leta hai. <code>color-mix()</code> do colors ko mix karne ke kaam aata hai, jo ek naya CSS feature hai.</p>

        <LiveEditor title="Interactive Example: Color Formats & Advanced Colors" initialCode={`
<style>
  .color-box {
    padding: 20px;
    margin: 10px 0;
    color: white;
    font-family: sans-serif;
    font-weight: bold;
    border-radius: 8px;
    text-align: center;
  }
  
  /* Named Color */
  .named { background-color: tomato; }
  
  /* HEX Color (with Alpha #ff5733cc) */
  .hex { background-color: #ff5733; }
  
  /* RGB / RGBA */
  .rgb { background-color: rgb(46, 204, 113); }
  .rgba { background-color: rgba(46, 204, 113, 0.5); color: #333; }
  
  /* HSL / HSLA */
  .hsl { background-color: hsl(210, 100%, 50%); }
  
  /* currentColor concept */
  .current-color-container {
    color: #8e44ad;
    border: 3px solid currentColor; /* Border gets the text color */
    padding: 10px;
    background: #f3f3f3;
  }
  .current-color-container svg {
    fill: currentColor; /* SVG gets the text color */
  }

  /* CSS Color Mix (Modern CSS) */
  .color-mix {
    background-color: color-mix(in srgb, red 40%, blue 60%);
  }
</style>

<div class="color-box named">Named Color: tomato</div>
<div class="color-box hex">HEX Color: #ff5733</div>
<div class="color-box rgb">RGB Color: rgb(46, 204, 113)</div>
<div class="color-box rgba">RGBA Color: rgba(46, 204, 113, 0.5) (50% transparent)</div>
<div class="color-box hsl">HSL Color: hsl(210, 100%, 50%)</div>
<div class="color-box color-mix">Color Mix: 40% Red + 60% Blue</div>

<div class="current-color-container">
  Main text color is purple. <br>
  Border uses <code>currentColor</code>.<br>
  <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
  SVG icon fill uses <code>currentColor</code>.
</div>
        `} />
      </div>
    )
  },
  {
    id: 'css-backgrounds',
    title: '7. CSS Backgrounds (Zero to Hero)',
    content: (
      <div>
        <h2>CSS Backgrounds</h2>
        <p>Element ke background ko style karna UI design ka sabse zaruri hissa hai. CSS mein backgrounds handle karne ke liye multiple properties hoti hain, aur inka shorthand version bhi kaafi powerful hota hai.</p>
        
        <h3>Sari Background Properties:</h3>
        <ul>
          <li><b><code>background-color</code></b>: Solid color set karne ke liye (HEX, RGB, etc.).</li>
          <li><b><code>background-image</code></b>: Image ya gradient set karne ke liye. (e.g., <code>url('image.jpg')</code>, <code>linear-gradient()</code>).</li>
          <li><b><code>background-repeat</code></b>: Image repeat hogi ya nahi (<code>repeat</code>, <code>no-repeat</code>, <code>repeat-x</code>, <code>repeat-y</code>).</li>
          <li><b><code>background-position</code></b>: Image kahan dikhegi (<code>center</code>, <code>top right</code>, <code>50% 50%</code>, <code>10px 20px</code>).</li>
          <li><b><code>background-size</code></b>: Image ka size kya hoga (<code>auto</code>, <code>cover</code> (puri space bharega aspect ratio maintain karke), <code>contain</code> (puri image dikhegi chahe space bach jaye), <code>100% 100%</code>).</li>
          <li><b><code>background-attachment</code></b>: Scroll par image ka behavior (<code>scroll</code> (default), <code>fixed</code> (parallax effect ke liye), <code>local</code>).</li>
          <li><b><code>background-clip</code></b>: Background color/image kahan tak expand hoga (<code>border-box</code>, <code>padding-box</code>, <code>content-box</code>, <code>text</code>).</li>
        </ul>

        <h3>Background Shorthand</h3>
        <p>Itni saari properties alag alag likhne ki jagah, hum shorthand ka use kar sakte hain:<br/> <code>background: color image position/size repeat attachment;</code></p>

        <LiveEditor title="Interactive Example: Background Properties & Gradients" initialCode={`
<style>
  .bg-demo {
    width: 100%;
    height: 250px;
    color: white;
    font-family: sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    margin-bottom: 20px;
    border-radius: 10px;
  }

  /* Linear Gradient Background */
  .gradient-bg {
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);
    color: #333;
    text-shadow: none;
  }

  /* Complex Background Image with Shorthand */
  .image-bg {
    /* fallback color, image, position / size, repeat, attachment */
    background: #333 url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80') center/cover no-repeat fixed;
  }

  /* Background Clip Text (Modern Effect) */
  .text-bg {
    background: linear-gradient(to right, #30CFD0 0%, #330867 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent; /* Text transparent hoga tabhi bg dikhega */
    font-size: 3rem;
    text-shadow: none;
    height: auto;
    padding: 20px;
    border: 2px dashed #ccc;
  }
</style>

<div class="bg-demo gradient-bg">Linear Gradient Background</div>
<div class="bg-demo image-bg">Background Image (Cover & Fixed Parallax)</div>
<div class="bg-demo text-bg">Background Clip Text Magic ✨</div>
        `} />
      </div>
    )
  },
  {
    id: 'css-borders',
    title: '8. CSS Borders & Outlines',
    content: (
      <div>
        <h2>CSS Borders: Box ko Shape Dena</h2>
        <p>Borders element ke padding aur margin ke beech ka hissa hote hain. CSS mein border ki width, style aur color ko alag-alag ya shorthand se define kiya ja sakta hai.</p>

        <h3>Border Properties</h3>
        <ul>
          <li><b><code>border-style</code></b>: solid, dashed, dotted, double, groove, ridge, inset, outset, none, hidden. (Bina style ke border nahi dikhega!)</li>
          <li><b><code>border-width</code></b>: thin, medium, thick ya fir specific value like 2px, 0.5rem.</li>
          <li><b><code>border-color</code></b>: Koi bhi color value (HEX, RGB, transparent).</li>
        </ul>

        <h3>Border Shorthand</h3>
        <p><code>border: 2px solid red;</code> (width style color)</p>

        <h3>Individual Sides</h3>
        <p>Aap specific side ka border bhi de sakte hain: <code>border-top</code>, <code>border-right</code>, <code>border-bottom</code>, <code>border-left</code>.</p>

        <h3>Border Radius (Corners ko Gol karna)</h3>
        <p><code>border-radius</code> se corners round hote hain. Isme aap 1 se leke 4 values de sakte hain (top-left, top-right, bottom-right, bottom-left).<br/>
        Pro tip: Perfect circle banane ke liye width aur height same rakhein aur <code>border-radius: 50%</code> de dein.<br/>
        Elliptical borders ke liye slash <code>/</code> ka use hota hai: <code>border-radius: 50% 20% / 10% 40%;</code></p>

        <h3>Outline vs Border</h3>
        <p><b>Outline</b> border ke bahar draw hoti hai aur element ki width/height (layout) ko affect nahi karti. Ye zyada tar accessibility (focus state) ke liye use hoti hai. Property: <code>outline: 2px solid blue; outline-offset: 5px;</code></p>

        <LiveEditor title="Interactive Example: Borders, Radius & Outlines" initialCode={`
<style>
  .box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    font-family: sans-serif;
  }
  .box {
    width: 150px;
    height: 150px;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
  }

  /* Shorthand Border */
  .border-1 {
    border: 5px dashed #ff5733;
  }

  /* Individual Sides */
  .border-2 {
    border-left: 10px solid #3498db;
    border-bottom: 5px double #2ecc71;
  }

  /* Border Radius - Circle */
  .circle {
    border: 3px solid #9b59b6;
    border-radius: 50%;
  }

  /* Complex Border Radius (Blob shape) */
  .blob {
    background: #f1c40f;
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }

  /* Outline with Offset */
  .outline-box {
    border: 2px solid black;
    outline: 4px solid #e74c3c;
    outline-offset: 8px; /* Outline ko border se dur push karta hai */
    margin: 15px; /* Margin jaruri hai varna outline cut jayegi */
  }
</style>

<div class="box-container">
  <div class="box border-1">Dashed Border</div>
  <div class="box border-2">Individual Borders</div>
  <div class="box circle">Border Radius 50%</div>
  <div class="box blob">Complex Radius (Blob)</div>
  <div class="box outline-box">Border + Outline Offset</div>
</div>
        `} />
      </div>
    )
  },
  {
    id: 'css-text',
    title: '9. CSS Text Formatting',
    content: (
      <div>
        <h2>CSS Text Formatting: Typography ka Jadoo</h2>
        <p>Text ko sundar aur readable banana ek achhe UI ki nishani hai. CSS mein text ko format karne ke liye bohot saari properties hain.</p>

        <h3>Important Text Properties</h3>
        <ul>
          <li><b><code>color</code></b>: Text ka color badalne ke liye.</li>
          <li><b><code>text-align</code></b>: Text ko align karne ke liye (<code>left</code>, <code>right</code>, <code>center</code>, <code>justify</code>).</li>
          <li><b><code>text-decoration</code></b>: Lines add/remove karne ke liye. (<code>none</code>, <code>underline</code>, <code>line-through</code>, <code>overline</code>). Iska shorthand bhi hai: <code>text-decoration: underline wavy red;</code></li>
          <li><b><code>text-transform</code></b>: Capitalization control (<code>uppercase</code>, <code>lowercase</code>, <code>capitalize</code>).</li>
          <li><b><code>line-height</code></b>: Lines ke beech ki spacing. Hamesha unitless number use karna best practice hai (jaise <code>1.5</code> badle mein <code>150%</code> ya <code>24px</code> ke).</li>
          <li><b><code>letter-spacing</code></b> & <b><code>word-spacing</code></b>: Letters aur words ke beech ka space adjust karne ke liye.</li>
          <li><b><code>text-indent</code></b>: Paragraph ki pehli line mein kitni space chhodni hai.</li>
          <li><b><code>white-space</code></b>: Spaces aur line breaks ko kaise handle karna hai (<code>nowrap</code>, <code>pre</code>, <code>pre-wrap</code>).</li>
          <li><b><code>text-shadow</code></b>: Text par shadow effect: <code>text-shadow: x-offset y-offset blur-radius color;</code></li>
        </ul>

        <LiveEditor title="Interactive Example: Advanced Text Formatting" initialCode={`
<style>
  .text-container {
    font-family: Arial, sans-serif;
    color: #333;
    max-width: 600px;
  }

  .title {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-shadow: 3px 3px 5px rgba(0,0,0,0.3);
    color: #2c3e50;
  }

  .paragraph {
    line-height: 1.6; /* Good readability */
    text-align: justify;
    text-indent: 40px; /* Indent first line */
    word-spacing: 2px;
  }

  .highlight {
    text-decoration: underline wavy #e74c3c 2px; /* CSS3 Text Decoration */
    font-weight: bold;
  }

  .truncate {
    width: 250px;
    border: 1px solid #ccc;
    padding: 10px;
    /* Truncate text with ellipsis ... */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
  }
</style>

<div class="text-container">
  <h1 class="title">Beautiful Typography</h1>
  
  <p class="paragraph">
    Yeh ek paragraph hai jisme humne <span class="highlight">justify alignment</span> aur line-height ka use kiya hai. Text ko padhne mein aasaani hoti hai agar line-height 1.5 ya 1.6 ke aas paas ho. Pehli line mein text-indent ki wajah se thodi space dikhai degi. CSS typography se aap kisi bhi boring text ko professional look de sakte hain.
  </p>

  <h3>Text Ellipsis (Truncation) Effect:</h3>
  <div class="truncate">
    Yeh text bohot zyada lamba hai aur box ke bahar chala jayega, isliye isko nowrap aur text-overflow: ellipsis karke cut kiya gaya hai.
  </div>
</div>
        `} />
      </div>
    )
  },
  {
    id: 'css-fonts',
    title: '10. CSS Fonts (Web Fonts & Google Fonts)',
    content: (
      <div>
        <h2>CSS Fonts: Apni Website ka Character Define Karein</h2>
        <p>Font ka selection website ke "mood" ko set karta hai. CSS fonts ke bare mein aapko ye sab pata hona chahiye:</p>

        <h3>Font Properties</h3>
        <ul>
          <li><b><code>font-family</code></b>: Font ka naam. Hamesha fallback fonts dena chahiye, aakhir mein generic family likhein (jaise <code>sans-serif</code>, <code>serif</code>, <code>monospace</code>).<br/>Example: <code>font-family: 'Open Sans', Arial, sans-serif;</code></li>
          <li><b><code>font-size</code></b>: Text ka size. Units: <code>px</code>, <code>em</code>, <code>rem</code>, <code>vw</code>. (Responsive design ke liye <code>rem</code> best hai).</li>
          <li><b><code>font-weight</code></b>: Font ki motai. Values: <code>normal</code> (400), <code>bold</code> (700), ya 100 se 900 tak numbers.</li>
          <li><b><code>font-style</code></b>: <code>normal</code>, <code>italic</code>, ya <code>oblique</code>.</li>
          <li><b><code>font-variant</code></b>: Jaise <code>small-caps</code> (chhote capital letters).</li>
        </ul>

        <h3>Font Shorthand</h3>
        <p>Shorthand likhte waqt order strictly follow karna hota hai: <br/><code>font: font-style font-variant font-weight font-size/line-height font-family;</code><br/>
        Example: <code>font: italic bold 16px/1.5 Arial, sans-serif;</code> (Sirf size aur family required hote hain).</p>

        <h3>Google Fonts aur <code>@font-face</code></h3>
        <p>User ke computer mein saare fonts nahi hote. Isliye hum Google Fonts ka use karte hain, ya apna font file server par host karke <code>@font-face</code> rule ke through load karte hain.</p>

        <LiveEditor title="Interactive Example: Using Custom Web Fonts" initialCode={`
<!-- Google Fonts ko HTML me import kar rahe hain -->
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Space+Mono&display=swap" rel="stylesheet">

<style>
  .system-font {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
  }

  .custom-font-1 {
    font-family: 'Dancing Script', cursive;
    font-size: 3rem;
    color: #e91e63;
    font-weight: 700;
  }

  .custom-font-2 {
    font-family: 'Space Mono', monospace;
    font-size: 1.2rem;
    background: #222;
    color: #0f0;
    padding: 10px;
    border-radius: 4px;
  }

  .shorthand-font {
    /* style variant weight size/line-height family */
    font: italic small-caps 600 1.5rem/2 'Times New Roman', serif;
    color: #3f51b5;
  }
</style>

<div>
  <p class="system-font">1. Yeh standard system font (Arial/Sans-serif) hai.</p>
  
  <p class="custom-font-1">2. This is Google Font "Dancing Script"</p>
  
  <p class="custom-font-2">3. This is Google Font "Space Mono" // Great for code</p>
  
  <p class="shorthand-font">4. yeh text css font shorthand property ka use karke style kiya gaya hai (Notice Small-Caps).</p>
</div>
        `} />
      </div>
    )
  },
  {
    id: 'css-box-model',
    title: '11. CSS Box Model (The Most Important Concept)',
    content: (
      <div>
        <h2>CSS Box Model: Har Element Ek Dabba Hai!</h2>
        <p>CSS mein <b>har ek HTML element ek rectangular box (dabba) hota hai</b>. Box model is baat ko describe karta hai ki is box ke andar space kaise distribute hota hai. Agar aapko Box Model samajh aa gaya, toh aadhi CSS samajh aa gayi.</p>

        <h3>Box Model ke 4 Hisse Hote Hain (Andar se Bahar tak):</h3>
        <ol>
          <li><b>Content</b>: Actual content (text, image). Iski width aur height hum CSS se define karte hain.</li>
          <li><b>Padding</b>: Content aur Border ke beech ka khali space. Yeh element ke <b>andar</b> hota hai aur iska background color wahi hota hai jo element ka hai.</li>
          <li><b>Border</b>: Padding aur Margin ke beech ki boundary.</li>
          <li><b>Margin</b>: Element ke border ke <b>bahar</b> ka space. Ye do elements ko ek dusre se door rakhne ke kaam aata hai. Ye hamesha transparent hota hai.</li>
        </ol>

        <div style={{ padding: '15px', backgroundColor: '#fff3cd', borderLeft: '5px solid #ffc107', margin: '20px 0', color: '#000' }}>
          <b>Aam Zindagi (Math Problem):</b> <br/>
          Agar aapne ek box banaya: <code>width: 200px; padding: 20px; border: 5px solid black;</code><br/>
          Toh actual box screen par kitni jagah lega?<br/>
          Ans: 200px (content) + 40px (left/right padding) + 10px (left/right border) = <b>250px!</b><br/>
          Yeh badhti hui width bohot dimaag kharab karti hai responsive design mein.
        </div>

        <h3>Mentos Zindagi: <code>box-sizing: border-box;</code></h3>
        <p>Is problem ko solve karne ke liye hum <code>box-sizing: border-box;</code> ka use karte hain. Isse kya hota hai ki jo <code>width: 200px</code> aapne di hai, padding aur border usi 200px ke <b>andar</b> adjust ho jate hain, box 200px se bada nahi hota! Modern web dev mein hum hamesha global level par isko apply karte hain.</p>

        <LiveEditor title="Interactive Example: Box Model & Box-Sizing" initialCode={`
<style>
  /* Global Box Sizing Reset (Best Practice) */
  * {
    /* Comment the below line to see the layout break */
    box-sizing: border-box; 
  }

  .container {
    width: 400px;
    background: #ddd;
    padding: 10px;
    margin-bottom: 20px;
  }

  .box-content-box {
    box-sizing: content-box; /* Default CSS behavior */
    width: 100%; /* Parent ka 100% (380px) */
    padding: 20px; /* Ab width mein add hoga! */
    border: 5px solid red;
    background: #ffcccc;
    margin-bottom: 15px;
  }

  .box-border-box {
    box-sizing: border-box; /* The Pro Way */
    width: 100%; /* Parent ka 100% (380px) */
    padding: 20px; /* Ab width ke andar adjust hoga! */
    border: 5px solid green;
    background: #ccffcc;
  }

  .box-model-demo {
    margin: 30px auto;
    width: 200px;
    height: 100px;
    background-color: lightblue;
    border: 10px solid navy;
    padding: 20px;
    text-align: center;
    font-weight: bold;
    outline: 2px dashed red; /* Just to show outer boundary limit */
  }
</style>

<h3>Width: 100% ka lafda samajhein</h3>
<div class="container">
  <div class="box-content-box">
    box-sizing: content-box (Default)<br>
    Main parent se bahar nikal jaunga kyunki meri total width = 100% + Padding(40) + Border(10).
  </div>

  <div class="box-border-box">
    box-sizing: border-box (Pro)<br>
    Main perfectly parent ke andar fit rahunga!
  </div>
</div>

<h3>Visualizing Margin, Border, Padding</h3>
<!-- Inspect element karke is div ka box model check karein browser mein -->
<div class="box-model-demo">
  Content
</div>
        `} />
      </div>
    )
  },
  {
    id: 'css-width-height',
    title: '12. CSS Width, Height & Max/Min',
    content: (
      <div>
        <h2>Width & Height: Sizing ka Khel</h2>
        <p>Elements ko size dena aasan lagta hai, par responsive design mein sirf <code>width</code> aur <code>height</code> dena kaafi nahi hai. Iske liye Max aur Min properties ka concept aana bohot zaruri hai.</p>

        <h3>1. <code>width</code> aur <code>height</code></h3>
        <p>Ye fix dimension dete hain. Values <code>px</code>, <code>%</code>, <code>vw</code>, <code>vh</code>, ya <code>auto</code> (default) ho sakti hain. Block level elements (jaise div) ki default width auto hoti hai (jo 100% space leti hai), aur default height content ke hisab se grow karti hai.</p>

        <h3>2. <code>max-width</code> aur <code>max-height</code></h3>
        <p>Element isse bada nahi ho sakta. <br/><b>Use case:</b> Image ya container ko screen choti hone par shrink hone dena (100% ya auto ki wajah se), par badi screen par ek limit ke baad faelne se rokna. Example: <code>max-width: 1200px; width: 100%;</code></p>

        <h3>3. <code>min-width</code> aur <code>min-height</code></h3>
        <p>Element isse chota nahi ho sakta. <br/><b>Use case:</b> Agar content kam bhi ho, toh bhi section kam se kam 1 screen ki height (<code>min-height: 100vh;</code>) le. Agar content jyada ho gaya, toh element auto-grow kar jayega (height mein cut nahi hoga).</p>

        <LiveEditor title="Interactive Example: Auto, 100%, Max & Min" initialCode={`
<style>
  .demo-wrapper {
    background: #f4f4f4;
    padding: 10px;
    border: 2px solid #333;
    resize: horizontal; /* Aap is box ko drag karke resize kar sakte hain (Browser dependent) */
    overflow: auto;
  }

  .box-fixed {
    width: 500px; /* Hamesha 500px rahega */
    background: #ff7675;
    padding: 10px;
    margin-bottom: 10px;
    color: white;
  }

  .box-responsive {
    width: 100%;
    max-width: 500px; /* 500px se bada nahi hoga, par chota ho sakta hai */
    background: #00b894;
    padding: 10px;
    margin-bottom: 10px;
    color: white;
  }

  .min-height-box {
    min-height: 150px; /* Kam se kam 150px height hogi */
    background: #0984e3;
    padding: 10px;
    color: white;
  }
</style>

<div class="demo-wrapper">
  <p>💡 <b>Tip:</b> Demo box ke right side ko drag karke chota/bada karke dekhein (Resize property active hai).</p>
  
  <div class="box-fixed">
    <b>Fixed Width: 500px</b><br>
    Agar screen/parent 500px se chota hua, toh main screen ke bahar chala jaunga aur horizontal scrollbar aayega (Not responsive).
  </div>

  <div class="box-responsive">
    <b>width: 100%; max-width: 500px;</b><br>
    Maximum main 500px tak jaunga. Par agar screen choti hui, toh main shrink ho jaunga! (Responsive approach ✅)
  </div>

  <div class="min-height-box">
    <b>min-height: 150px;</b><br>
    Mere andar content kam hai, phir bhi meri height kam se kam 150px rahegi. Agar content badh gaya, toh main aaram se grow ho jaunga, text bahar overflow nahi karega.
  </div>
</div>
        `} />
      </div>
    )
  }
];

export default chapters;
