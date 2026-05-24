import React from 'react';
import LiveEditor from '../../components/LiveEditor';

const chapters = [
  {
    id: 'css-introduction',
    title: '1. Introduction to CSS: Absolute Zero se Shuruwaat',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">1. CSS Kya Hai aur Kaise Kaam Karta Hai?</h2>
        <p>
          CSS (Cascading Style Sheets) web ki duniya ka makeup kit hai. Agar HTML aapki website ka skeleton (haddiyan) hai, toh CSS uski skin, kapde aur style hai. CSS ke bina web pages bilkul boring aur sife black and white lagte hain. Is chapter mein hum CSS ki bilkul basic neev (foundation) rakhenge.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">CSS Syntax (CSS Likhne ka Tarika)</h3>
        <p>CSS likhne ka rule bohot hi simple hai. Hum ek <strong>Selector</strong> chunte hain (jaise ki HTML ka kaunsa tag design karna hai), aur uske andar <strong>Declaration Block</strong> banate hain curly braces <code>{`{ }`}</code> ka use karke. Har declaration mein ek <strong>Property</strong> hoti hai (kya change karna hai) aur ek <strong>Value</strong> hoti hai (kaisa rakhna hai).</p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md font-mono text-sm shadow-inner overflow-x-auto">
{`selector {
  property: value;
  dusri-property: value;
}`}
        </pre>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 mt-6">CSS Apply Karne Ke 3 Tarike</h3>
        <p>HTML ke andar CSS ko 3 alag-alag tariko se add kiya jaa sakta hai. Har tarike ka apna use-case hota hai.</p>
        
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>1. Inline CSS:</strong> HTML tag ke andar hi <code>style="..."</code> attribute ka use karke. Ise use karna avoid karna chahiye kyunki code bahut messy ho jata hai aur hum us styling ko dusri jagah reuse nahi kar sakte.</li>
          <li><strong>2. Internal CSS:</strong> HTML page ke <code>&lt;head&gt;</code> section mein <code>&lt;style&gt;</code> tag ke andar CSS likhna. Ye single page website ke liye theek hai.</li>
          <li><strong>3. External CSS:</strong> Ek alag file banana (jaise <code>style.css</code>) aur usko HTML ke <code>&lt;head&gt;</code> mein <code>&lt;link&gt;</code> tag se connect karna. <strong>Pro developers humesha yahi use karte hain</strong> kyunki isse HTML clean rehta hai aur ek CSS file se poori website design ho sakti hai.</li>
        </ul>

        <div className="bg-blue-50 p-4 border-l-4 border-blue-500 rounded-md my-4">
          <p className="font-bold text-blue-800">External CSS ko HTML se kaise jodein?</p>
          <p className="text-blue-900 text-sm mt-1">Apne HTML file ke <code>&lt;head&gt;</code> tag ke andar ye line likhein:<br/>
          <code>&lt;link rel="stylesheet" href="style.css"&gt;</code></p>
        </div>

        <LiveEditor title="Example: Inline vs Internal CSS" initialCode={`<style>
  /* Ye Internal CSS hai */
  .internal-box {
    background-color: #3498db;
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    font-family: sans-serif;
    margin-bottom: 15px;
  }
</style>

<!-- Ye element internal CSS use kar raha hai -->
<div class="internal-box">
  Main Internal CSS se style hua hoon!
</div>

<!-- Ye element inline CSS use kar raha hai -->
<div style="background-color: #e74c3c; color: white; padding: 20px; border-radius: 8px; text-align: center; font-family: sans-serif;">
  Main Inline CSS se style hua hoon!
</div>`} />

      </div>
    )
  },
  {
    id: 'css-basic-selectors',
    title: '2. Basic Selectors & Colors',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">2. Basic Selectors aur Colors</h2>
        <p>CSS mein <strong>Selectors</strong> ka kaam hota hai HTML elements ko dhoondhna (target karna) taaki hum unpar color ya design apply kar sakein.</p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">3 Sabse Zaruri Selectors</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Element Selector (Tag name):</strong> Sidha HTML tag ka naam likho. Jaise <code>h1</code> ya <code>p</code>. Isse page ke saare h1 ya p tags target ho jayenge.</li>
          <li><strong>Class Selector (<code>.classname</code>):</strong> HTML tag mein <code>class="..."</code> attribute dekar CSS mein <code>.</code> (dot) lagakar target karna. Yeh sabse zyada use hota hai.</li>
          <li><strong>ID Selector (<code>#idname</code>):</strong> HTML mein <code>id="..."</code> attribute dekar CSS mein <code>#</code> lagakar target karna. ID ek page par sirf ek hi bar use honi chahiye.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 mt-6">Colors in CSS</h3>
        <p>CSS mein hum alag alag tarike se rang (colors) bhar sakte hain:</p>
        <ul className="list-disc ml-6 space-y-1 text-sm">
          <li><strong>Color Name:</strong> Jaise <code>red</code>, <code>blue</code>, <code>tomato</code></li>
          <li><strong>HEX Code:</strong> Jaise <code>#ff0000</code> (red), <code>#000000</code> (black)</li>
          <li><strong>RGB / RGBA:</strong> Jaise <code>rgb(255, 0, 0)</code> aur transparency ke liye <code>rgba(255, 0, 0, 0.5)</code></li>
        </ul>

        <LiveEditor title="Basic Selectors & Colors in Action" initialCode={`<style>
  /* Element Selector */
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #f4f4f4;
  }
  
  h2 {
    color: #333333;
  }
  
  /* Class Selector (Bahut important) */
  .highlight-box {
    background-color: white;
    color: #2c3e50;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  /* ID Selector */
  #special-text {
    color: tomato;
    font-weight: bold;
    font-size: 20px;
  }
  
  /* Multiple Elements same styling (Grouping) */
  .text-blue, .text-green {
    font-size: 18px;
    font-weight: bold;
  }
  .text-blue { color: rgb(41, 128, 185); }
  .text-green { color: #27ae60; }
</style>

<h2>Selectors ka Jaadu</h2>

<div class="highlight-box">
  <p>Main ek normal paragraph hoon ek class ke andar.</p>
</div>

<div class="highlight-box">
  <p id="special-text">Mera color ID ki madad se Tomato ho gaya hai!</p>
</div>

<p class="text-blue">Main blue class use kar raha hoon.</p>
<p class="text-green">Main green class use kar raha hoon.</p>`} />
      </div>
    )
  },
  {
    id: 'css-box-model',
    title: '3. The Box Model: Margin, Padding & Border',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">3. The CSS Box Model (Website ka Dhancha)</h2>
        <p>CSS mein har HTML element ko ek chaukore <strong>Box (Dabba)</strong> maana jata hai. Iss box ke 4 hisse hote hain (Andar se bahar ki taraf):</p>
        
        <ul className="list-disc ml-6 space-y-2 mt-4">
          <li><strong>Content:</strong> Box ka actual content (jaise Text ya Image).</li>
          <li><strong>Padding:</strong> Content aur Border ke beech ka khali space. (Dabbe ke andar ki jagah)</li>
          <li><strong>Border:</strong> Padding aur Content ke chaaron taraf ek line ya deewar.</li>
          <li><strong>Margin:</strong> Border ke bahar ka khali space, jo do elements (dabbo) ko aapas me takrane se rokta hai.</li>
        </ul>

        <div className="bg-green-50 p-4 border-l-4 border-green-500 rounded-md my-4 shadow-sm">
          <p className="font-bold text-green-800">Secret Ninja Tip: Box-Sizing</p>
          <p className="text-green-900 text-sm">Jab hum width (chaudai) set karte hain, toh by default Padding aur Border usme ALAG SE add ho jate hain, jisse dabba bada ho jata hai. Is problem ko rokne ke liye hum humesha CSS ki starting mein <code>box-sizing: border-box;</code> lagate hain. Isse padding aur border fix width ke andar hi fit ho jate hain!</p>
        </div>

        <LiveEditor title="Box Model Playground" initialCode={`<style>
  /* Universal reset (Good Practice) */
  * {
    box-sizing: border-box; 
    margin: 0; 
    padding: 0;
  }
  
  body {
    font-family: sans-serif;
    background-color: #e2e8f0;
    padding: 30px;
  }
  
  .box {
    background-color: #3498db;
    color: white;
    width: 300px; /* Dabbe ki chaudai */
    
    /* PADDING: Andar ki space (Top, Right, Bottom, Left) */
    padding: 20px;
    
    /* BORDER: Deewar ki motai, style, color */
    border: 5px solid #2980b9;
    
    /* MARGIN: Bahar ki space */
    margin-bottom: 20px;
  }
  
  .box-two {
    background-color: #e74c3c;
    color: white;
    width: 300px;
    padding: 10px 30px; /* Top/Bottom 10px, Left/Right 30px */
    border: 3px dashed #c0392b;
  }
</style>

<div class="box">
  <p>Box 1: Mere andar 20px ki padding hai aur 5px ka solid border hai. Mere neeche 20px ka margin hai.</p>
</div>

<div class="box-two">
  <p>Box 2: Mere paas margin nahi hai, aur border dashed (tooti hui line) hai.</p>
</div>`} />
      </div>
    )
  },
  {
    id: 'css-text-fonts',
    title: '4. Typography: Text & Fonts Formatting',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">4. Text aur Fonts ko Sundar Banana</h2>
        <p>Text formatting se website ki readability aur sundarta bohot badh jati hai. Aaiye dekhte hain text ke kuch zaroori properties.</p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Font Properties</h3>
        <ul className="list-disc ml-6 space-y-1 text-sm">
          <li><code>font-family:</code> Text ka font style (jaise Arial, Times New Roman, ya Google Fonts).</li>
          <li><code>font-size:</code> Text kitna bada ya chhota hoga (px, rem, ya em mein).</li>
          <li><code>font-weight:</code> Text kitna mota (bold) hoga (100 se 900 tak, ya 'bold', 'normal').</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 mt-4">Text Alignment & Spacing</h3>
        <ul className="list-disc ml-6 space-y-1 text-sm">
          <li><code>text-align:</code> Text ko left, right, center ya justify karne ke liye.</li>
          <li><code>text-decoration:</code> Underline add karna ya hatana (mostly links ke liye <code>none</code> karte hain).</li>
          <li><code>text-transform:</code> Text ko uppercase, lowercase ya capitalize karne ke liye.</li>
          <li><code>line-height:</code> Do lines ke beech ka gap.</li>
          <li><code>letter-spacing:</code> Do aksharo (letters) ke beech ka gap.</li>
        </ul>

        <LiveEditor title="Text and Font Styling" initialCode={`<style>
  body {
    background-color: #f9f9f9;
    padding: 20px;
  }
  
  .title {
    font-family: 'Segoe UI', sans-serif;
    font-size: 36px;
    font-weight: 800; /* Extra Bold */
    color: #2c3e50;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    
    /* Text par thodi parchhai (shadow) */
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }
  
  .paragraph {
    font-family: Georgia, serif;
    font-size: 18px;
    color: #34495e;
    line-height: 1.8; /* Lines ke beech space badhane se padhna asan hota hai */
    text-align: justify; /* Newspaper style alignment */
    max-width: 600px;
    margin: 20px auto; /* Center karne ke liye automatic margin */
  }
  
  .fancy-link {
    display: block;
    text-align: center;
    font-family: sans-serif;
    color: #e74c3c;
    font-weight: bold;
    font-size: 20px;
    text-decoration: none; /* Underline hata deta hai */
  }
  
  .fancy-link:hover {
    text-decoration: underline; /* Mouse aane par underline dikhegi */
  }
</style>

<h1 class="title">Web Ninja Styling</h1>

<p class="paragraph">
  CSS Typography website ki pehchan hoti hai. Ek achha font aur sahi line-height padhne wale ko lamba article padhne par majboor kar sakti hai. Humesha sans-serif fonts (jaise Arial, Helvetica) screen par padhne mein zyada asan hote hain.
</p>

<a href="#" class="fancy-link">Mujh par hover karke dekhein!</a>`} />
      </div>
    )
  }
];

export default chapters;
