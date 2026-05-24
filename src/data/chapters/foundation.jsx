import React from 'react';
import LiveEditor from '../../components/LiveEditor';

const chapters = [
  {
    id: 'css-introduction',
    title: '1. Introduction to CSS: Absolute Zero se Pro Tak',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">1. CSS Kya Hai aur Kaise Kaam Karta Hai?</h2>
        <p>
          CSS (Cascading Style Sheets) web ki duniya ka makeup kit hai. Agar HTML aapki website ka skeleton (haddiyan) hai, toh CSS uski skin, kapde aur style hai. CSS ke bina web pages bilkul boring aur dull lagte hain. Is chapter mein hum CSS ko basic se lekar pro level tak samjhenge, bina kuch chhode.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">CSS Syntax (CSS Likhne ka Tarika)</h3>
        <p>CSS likhne ka rule bohot simple hai. Hum ek <strong>Selector</strong> chunte hain (jaise ki kaunse HTML element ko design karna hai), aur uske andar <strong>Declaration Block</strong> banate hain curly braces <code>{`{ }`}</code> ka use karke. Har declaration mein ek <strong>Property</strong> hoti hai (jaise color, font-size) aur ek <strong>Value</strong> hoti hai (jaise red, 16px).</p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-md font-mono text-sm shadow-inner overflow-x-auto">
          {`selector {
  property: value;
  property: value;
}`}
        </pre>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 mt-6">CSS Apply Karne Ke 3 Tarike</h3>
        <p>HTML ke andar CSS ko 3 alag-alag tariko se add kiya jaa sakta hai. Har tarike ka apna use-case hota hai.</p>
        
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>1. Inline CSS:</strong> HTML tag ke andar hi <code>style</code> attribute ka use karke. Iska specificity sabse high hota hai, par isko use karna avoid karna chahiye kyunki code messy ho jata hai aur reuse nahi kar sakte.</li>
          <li><strong>2. Internal CSS:</strong> HTML document ke <code>&lt;head&gt;</code> section mein <code>&lt;style&gt;</code> tag ke andar CSS likhna. Ye single page applications ya landing pages ke liye theek hai jahan alag se file nahi banani hoti.</li>
          <li><strong>3. External CSS:</strong> Ek alag <code>.css</code> file banana aur usko HTML ke <code>&lt;head&gt;</code> mein <code>&lt;link&gt;</code> tag se connect karna. <strong>Pro developers humesha yahi use karte hain</strong> kyunki isse HTML clean rehta hai, caching achi hoti hai, aur ek CSS file puri website pe apply ho sakti hai.</li>
        </ul>

        <LiveEditor title="Interactive Example: Inline vs Internal CSS" initialCode={`<style>
  /* Ye Internal CSS hai */
  .internal-box {
    background-color: #3498db;
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    font-family: sans-serif;
    margin-bottom: 15px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
</style>

<!-- Ye element internal CSS use kar raha hai -->
<div class="internal-box">
  Main Internal CSS se style hua hoon!
</div>

<!-- Ye element inline CSS use kar raha hai -->
<div style="background-color: #e74c3c; color: white; padding: 20px; border-radius: 8px; text-align: center; font-family: sans-serif; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  Main Inline CSS se style hua hoon! Meri priority zyada hai.
</div>`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 mt-6">Cascade, Specificity aur Inheritance (Pillars of CSS)</h3>
        <p>CSS ka full form hi "Cascading" se shuru hota hai. Iska matlab hai rule top-to-bottom apply hote hain. Lekin kabhi-kabhi conflict hota hai jab ek hi element par do alag color apply ho jayein. Yahan 3 rules kaam aate hain:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Inheritance:</strong> Kuch properties parent element se child mein automatic aati hain (jaise <code>color</code>, <code>font-family</code>). Lekin borders, paddings aur margins inherit nahi hote.</li>
          <li><strong>Cascade:</strong> Agar do rules ki specificity same hai, toh jo rule CSS mein <strong>baad mein (niche)</strong> likha gaya hai, wo apply hoga. The last one wins.</li>
          <li><strong>Specificity:</strong> Ye CSS ka "Power Level" hai. Jis rule ka power zyada hoga, wahi apply hoga.<br/>
          <strong>Priority Order:</strong> <code>!important</code> &gt; Inline Style &gt; ID &gt; Class/Pseudo-class/Attribute &gt; Element/Pseudo-element.</li>
        </ul>

        <div className="bg-red-50 p-4 border-l-4 border-red-500 rounded-md my-4">
          <p className="font-bold text-red-800">The Curse of !important</p>
          <p className="text-red-900 text-sm"><code>!important</code> CSS ka sabse powerful hathiyar hai jo specificity ke saare rules tod deta hai. Lekin ise last resort ki tarah use karna chahiye. Agar aap iska zyada use karenge, toh aage chal kar debugging karna ek nightmare ban jayega.</p>
        </div>

        <LiveEditor title="Interactive Example: Specificity Clash" initialCode={`<style>
  body { font-family: sans-serif; padding: 10px; }
  
  /* Element selector (Low power: 0,0,0,1) */
  p {
    color: green;
    padding: 10px;
    background: #f0f0f0;
    border-radius: 4px;
  }
  
  /* Class selector (Medium power: 0,0,1,0) */
  .my-text {
    color: blue;
  }
  
  /* ID selector (High power: 0,1,0,0) */
  #special-text {
    color: red;
  }
  
  /* !important (God Mode) - Try uncommenting the next line to see the magic */
  /* p { color: purple !important; } */
</style>

<p id="special-text" class="my-text">
  Mera color kya hoga? ID jeetegi, isliye main RED rahunga!
</p>
<p class="my-text">
  Mera koi ID nahi hai, toh Class jeetegi, main BLUE rahunga!
</p>
<p>
  Mere paas sirf tag hai, main GREEN rahunga!
</p>`} />
      </div>
    )
  },
  {
    id: 'css-selectors',
    title: '2. CSS Selectors: Targeting like a Sniper',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">2. CSS Selectors (Zero to Pro)</h2>
        <p>Selectors CSS ka sabse crucial hissa hain. Agar aap HTML elements ko accurately target nahi kar sakte, toh aap achhi styling nahi kar sakte. Hum sab basic se lekar complex attribute selectors tak discuss karenge.</p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">1. Basic Selectors</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Universal Selector (<code>*</code>):</strong> Ye pure page ke har ek element ko target karta hai. Ise zyada use nahi karna chahiye kyunki ye performance slow kar sakta hai, par CSS reset (<code>margin: 0; padding: 0; box-sizing: border-box;</code>) mein ye bohot kaam aata hai.</li>
          <li><strong>Type (Tag) Selector (<code>h1, div, p</code>):</strong> Sidha HTML tag ka naam likho. Ye poore page mein maujood sabhi tags par apply hoga. Iska use base styling ke liye hota hai.</li>
          <li><strong>Class Selector (<code>.classname</code>):</strong> HTML mein <code>class="..."</code> attribute ko target karta hai. Ek hi class multiple elements ko di jaa sakti hai. <strong>Pro tip:</strong> 90% time aap classes hi use karoge styling ke liye kyunki ye reusable hoti hain.</li>
          <li><strong>ID Selector (<code>#idname</code>):</strong> HTML mein <code>id="..."</code> ko target karta hai. ID page par unique honi chahiye. Iski specificity bahut high hoti hai, isliye modern developers ise styling ke bajaye JavaScript hook ya internal page linking anchor ki tarah use karte hain.</li>
        </ul>

        <LiveEditor title="Basic Selectors in Action" initialCode={`<style>
  /* Universal Selector for quick reset */
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
  }
  
  /* Type Selector */
  h2 {
    color: #2c3e50;
  }
  
  /* Class Selector */
  .highlight {
    background-color: #f1c40f;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    color: #333;
    display: inline-block;
    margin-bottom: 10px;
  }
  
  /* ID Selector */
  #main-heading {
    border-bottom: 3px solid #e74c3c;
    padding-bottom: 5px;
    display: inline-block;
  }
</style>

<h2 id="main-heading">Hello Web Developers</h2>
<p>Main ek simple paragraph hoon jo default browser styles override karke render ho raha hai.</p>
<div class="highlight">Main ek div hoon, Class ke through highlight hua hoon!</div>
<br>
<span class="highlight">Main span hoon par same class use kar raha hoon. Reusability!</span>`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 mt-6">2. Grouping aur Chaining Selectors</h3>
        <p>Code ko chhota (DRY - Don't Repeat Yourself) rakhne ke liye selectors combine kiye jate hain.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Grouping (<code>h1, h2, p</code>):</strong> Comma laga kar ek saath multiple elements par same CSS laga sakte hain.</li>
          <li><strong>Chaining (<code>.btn.primary</code>):</strong> Bina space diye. Iska matlab hai wo element jispe "btn" aur "primary" dono classes ek saath lagi hon. Ye multiple class inheritance banata hai.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 mt-6">3. Attribute Selectors (Ninja Level)</h3>
        <p>Attribute selectors un elements ko target karte hain jinke andar specific HTML attributes ya values hain. Forms aur specific links ko style karne mein ye magic ki tarah kaam aate hain.</p>
        
        <div className="overflow-x-auto my-4 shadow-sm rounded-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-50 text-left text-gray-600">
                <th className="border-b p-3 font-semibold">Selector</th>
                <th className="border-b p-3 font-semibold">Meaning</th>
                <th className="border-b p-3 font-semibold">Example Use Case</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="hover:bg-gray-50"><td className="border-b p-3 font-mono bg-gray-100 rounded">[attr]</td><td className="border-b p-3">Has the attribute present</td><td className="border-b p-3"><code>[disabled]</code> (all disabled inputs)</td></tr>
              <tr className="hover:bg-gray-50"><td className="border-b p-3 font-mono bg-gray-100 rounded">[attr="val"]</td><td className="border-b p-3">Exact string match</td><td className="border-b p-3"><code>[type="checkbox"]</code></td></tr>
              <tr className="hover:bg-gray-50"><td className="border-b p-3 font-mono bg-gray-100 rounded">[attr~="val"]</td><td className="border-b p-3">Space-separated word match</td><td className="border-b p-3"><code>[class~="btn"]</code></td></tr>
              <tr className="hover:bg-gray-50"><td className="border-b p-3 font-mono bg-gray-100 rounded">[attr|="val"]</td><td className="border-b p-3">Exact or starts with val- (hyphen)</td><td className="border-b p-3"><code>[lang|="en"]</code> matches en, en-US</td></tr>
              <tr className="hover:bg-gray-50"><td className="border-b p-3 font-mono bg-gray-100 rounded">[attr^="val"]</td><td className="border-b p-3">Starts with</td><td className="border-b p-3"><code>[href^="https"]</code> (secure external links)</td></tr>
              <tr className="hover:bg-gray-50"><td className="border-b p-3 font-mono bg-gray-100 rounded">[attr$="val"]</td><td className="border-b p-3">Ends with</td><td className="border-b p-3"><code>[href$=".pdf"]</code> (PDF links)</td></tr>
              <tr className="hover:bg-gray-50"><td className="border-b p-3 font-mono bg-gray-100 rounded">[attr*="val"]</td><td className="border-b p-3">Contains substring anywhere</td><td className="border-b p-3"><code>[href*="google"]</code> (links containing 'google')</td></tr>
              <tr className="hover:bg-gray-50"><td className="border-b p-3 font-mono bg-gray-100 rounded">[attr="val" i]</td><td className="border-b p-3">Case-insensitive match (flag)</td><td className="border-b p-3"><code>[href$=".PDF" i]</code> matches .pdf, .PDF</td></tr>
            </tbody>
          </table>
        </div>

        <LiveEditor title="Attribute Selectors Playground" initialCode={`<style>
  body { font-family: system-ui, sans-serif; padding: 20px; }
  
  /* Elements having 'disabled' attribute */
  input[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
    background: #eee;
  }
  
  /* Exact match */
  input[type="text"] {
    border: 2px solid #3498db;
    padding: 8px;
    border-radius: 4px;
    width: 200px;
  }

  /* Starts with 'https' - External secure links */
  a[href^="https"] {
    color: #27ae60;
    font-weight: bold;
    text-decoration: none;
    display: block;
    margin: 5px 0;
  }
  a[href^="https"]::after {
    content: ' 🔒'; /* Adds a lock icon using pseudo-element */
  }

  /* Ends with '.pdf' case-insensitive */
  a[href$=".pdf" i] {
    color: #c0392b;
    font-weight: bold;
    display: block;
    margin: 5px 0;
  }
  a[href$=".pdf" i]::before {
    content: '📄 '; /* Adds document icon */
  }

  /* Contains 'tutorial' anywhere */
  a[href*="tutorial"] {
    background-color: #f1c40f;
    padding: 2px 5px;
    border-radius: 3px;
    color: black;
    text-decoration: none;
    display: inline-block;
    margin: 5px 0;
  }

  /* Multiple conditions grouped */
  input {
    margin-bottom: 10px;
    display: block;
  }
</style>

<form>
  <input type="text" placeholder="Enter name (Blue border)">
  <input type="password" placeholder="Password (Default border)">
  <input type="text" value="Can't edit me" disabled>
</form>

<hr style="margin: 20px 0; border: 1px solid #eee;">

<div style="display: flex; flex-direction: column;">
  <a href="https://google.com">Google (Secure)</a>
  <a href="http://insecure-site.com" style="color:gray;">Normal HTTP Website</a>
  <a href="/downloads/syllabus.PDF">Download Syllabus (Caps works!)</a>
  <a href="/posts/css-tutorial-basics">Read Advanced CSS Tutorial</a>
</div>`} />
      </div>
    )
  },
  {
    id: 'css-combinators',
    title: '3. Combinators: Relational Targeting',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">3. Combinators (Relations Samajhna)</h2>
        <p>HTML ek tree structure (DOM tree) hota hai. Usme parent, child, aur siblings hote hain. Combinators humein in relationships ke basis par elements target karne ki shakti dete hain. Iske bina humein har element par class lagani padti, jo HTML ko bloat kar deti. CSS mein 4 main combinators hote hain.</p>

        <h3 className="text-xl font-semibold text-blue-600 border-b pb-2">1. Descendant Combinator (Space <code> </code>)</h3>
        <p>Space ka matlab hota hai "ke andar". <code>div p</code> ka matlab hai wo saare <code>&lt;p&gt;</code> jo <code>&lt;div&gt;</code> ke andar hain, chahe wo kitne bhi deep nested kyun na ho (child, grandchild, great-grandchild sab).</p>

        <h3 className="text-xl font-semibold text-blue-600 border-b pb-2 mt-4">2. Child Combinator (<code>&gt;</code>)</h3>
        <p>Greater-than sign ka matlab hota hai "Direct Child" ya "Beta". <code>div &gt; p</code> ka matlab hai sirf wo <code>&lt;p&gt;</code> jo direct <code>&lt;div&gt;</code> ke immediate andar aate hain. Grandchildren (pote/potiyon) par ye laagu nahi hoga.</p>

        <h3 className="text-xl font-semibold text-blue-600 border-b pb-2 mt-4">3. Adjacent Sibling Combinator (<code>+</code>)</h3>
        <p>Plus sign ka matlab hai "Turant baad wala bhai". <code>h1 + p</code> ka matlab hai wo <code>&lt;p&gt;</code> jo <code>&lt;h1&gt;</code> ke <strong>just baad</strong> aata hai. Dono ka parent same hona chahiye aur dono eksaath bagal-bagal hone chahiye.</p>

        <h3 className="text-xl font-semibold text-blue-600 border-b pb-2 mt-4">4. General Sibling Combinator (<code>~</code>)</h3>
        <p>Tilde sign ka matlab hai "Baad aane wale saare bhai". <code>h1 ~ p</code> ka matlab hai <code>&lt;h1&gt;</code> ke baad aane wale <strong>saare</strong> <code>&lt;p&gt;</code>, chahe unke beech mein koi aur element kyun na aa jaye (parent same hona chahiye).</p>

        <LiveEditor title="Combinators Masterclass" initialCode={`<style>
  body { font-family: sans-serif; padding: 20px; background: #fafafa; }
  .box { 
    border: 2px solid #ccc; 
    padding: 15px; 
    margin-bottom: 20px; 
    background: white;
    border-radius: 8px;
  }

  /* 1. Descendant (Space) - Box ke andar saare spans */
  .box span {
    color: #e74c3c;
    font-weight: bold;
  }

  /* 2. Direct Child (>) - Box ke sirf immediate spans */
  .box > span {
    background-color: #f1c40f;
    padding: 3px 6px;
    border-radius: 4px;
    color: black;
  }

  /* 3. Adjacent Sibling (+) - H3 ke just baad wala p */
  h3 + p {
    font-size: 18px;
    color: #2980b9;
    border-left: 4px solid #2980b9;
    padding-left: 10px;
    background: #ebf5fb;
    padding: 10px;
    border-radius: 0 4px 4px 0;
  }

  /* 4. General Sibling (~) - .marker ke baad aane wale saare li */
  .marker ~ li {
    color: #8e44ad;
    text-decoration: underline;
    text-underline-offset: 4px;
  }
</style>

<div class="box">
  <span>Main direct child hoon (Yellow bg & Bold)</span>
  <div style="margin-top: 10px; padding: 10px; border: 1px dashed gray;">
    <span>Main grandchild hoon (Sirf Red text kyuki main direct child nahi hu)</span>
  </div>
  <span style="display:block; margin-top: 10px;">Main bhi direct child hoon</span>
</div>

<hr style="border-top: 1px solid #ccc;">

<h3>Chapter 1: The Beginning</h3>
<p>Ye paragraph h3 ke JUST baad hai (Mujhpe '+' apply hua hai aur left border aayi hai).</p>
<p>Ye doosra paragraph hai, uspe '+' combinator kaam nahi karega, so no styling for me.</p>

<hr style="border-top: 1px solid #ccc;">

<ul style="line-height: 1.8;">
  <li>Item 1</li>
  <li class="marker" style="font-weight:bold;">Item 2 (Main ek MARKER class hoon)</li>
  <li>Item 3 (Mujhpe '~' apply hoga, main purple ho jaunga)</li>
  <div style="color: gray; font-size: 0.9em;">--- Beech mein ek random div aa gaya ---</div>
  <li>Item 4 (Mujhpe bhi '~' apply hoga kyuki main marker ka bhai hoon)</li>
</ul>`} />

        <div className="bg-blue-50 p-4 border-l-4 border-blue-500 rounded-md">
          <p className="font-bold text-blue-800">Pro Tip for Performance:</p>
          <p className="text-blue-900 text-sm mt-1">Browser CSS selectors ko <strong>Right-to-Left</strong> padhta hai. Jaise <code>.container div span</code>. Browser pehle pure page mein saare <code>span</code> dhoondega, fir un spans pe iterate karke check karega kya unka parent <code>div</code> hai, fir check karega kya wo <code>.container</code> mein hai. Isliye unnecessarily deep descendant selectors avoid karne chahiye. Ek seedhi class dena (e.g., <code>.container-span</code>) BEM architecture me best practice maani jati hai.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-pseudo-classes',
    title: '4. Pseudo-classes: State and Structure based Styling',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">4. Pseudo-classes (:hover, :focus, :nth-child aur bohot kuch)</h2>
        <p>Pseudo-class CSS mein ek keyword hota hai jo selector ke end mein lagta hai (single colon <code>:</code> ke saath). Ye kisi element ke <strong>specific state</strong> (jaise jab mouse upar ho) ya document tree mein uski <strong>position</strong> ko target karta hai.</p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">1. User Action & Link Pseudo-classes</h3>
        <p>Ye interactions aur link states par depend karte hain.</p>
        <ul className="list-disc ml-6 space-y-1">
          <li><code>:link</code> - Unvisited links ke liye.</li>
          <li><code>:visited</code> - Visited links ke liye (Privacy reasons se sirf colors wagera change allow hote hain, width/height jaisi layout properties nahi taaki user browsing history leak na ho).</li>
          <li><code>:hover</code> - Jab user element pe mouse (cursor) lekar aata hai. Hover devices (mobiles) pe unreliable hota hai.</li>
          <li><code>:active</code> - Jab user click kar raha hota hai (mouse down state). Ye button pressing feel ke liye best hai.</li>
          <li><code>:focus</code> - Jab element focus mein ho (tab key se ya click karke, e.g., input fields).</li>
          <li><code>:focus-visible</code> - Focus state <strong>sirf tab</strong> dikhata hai jab keyboard navigation (Tab) se focus kiya gaya ho. Agar mouse click se click ho to outline hide karta hai (Accessibility ke liye modern best practice).</li>
          <li><code>:focus-within</code> - Agar parent ke andar ka koi bhi child focus mein hai, toh parent par ye class active ho jayegi. Form wrappers style karne ke liye magic trick.</li>
        </ul>

        <div className="bg-yellow-50 p-4 border-l-4 border-yellow-500 rounded-md my-4">
          <p className="font-bold text-yellow-800">LoVe HAte Rule:</p>
          <p className="text-yellow-900 text-sm">Links ko style karte waqt specificity clashes se bachne ke liye order yaad rakhein: <strong>L</strong>ink, <strong>V</strong>isited, <strong>H</strong>over, <strong>A</strong>ctive. (LVHA)</p>
        </div>

        <LiveEditor title="Interactive Forms & Buttons" initialCode={`<style>
  body { padding: 20px; font-family: sans-serif; }
  
  /* Button Hover & Active States */
  .btn {
    padding: 12px 24px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 4px 0 #2980b9;
    transition: all 0.1s ease; 
  }
  .btn:hover {
    background-color: #5dade2;
  }
  .btn:active {
    box-shadow: 0 0px 0 #2980b9;
    transform: translateY(4px); /* Pushing down effect */
  }

  /* Focus Within Magic */
  .form-group {
    border: 2px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    margin-top: 30px;
    transition: all 0.3s ease;
    background: white;
  }
  /* MAGIC HAPPENDS HERE */
  .form-group:focus-within {
    border-color: #9b59b6; 
    background-color: #f9f0fc;
    box-shadow: 0 4px 15px rgba(155, 89, 182, 0.2);
  }
  .form-group label {
    font-weight: bold;
    color: #555;
    transition: color 0.3s;
  }
  .form-group:focus-within label {
    color: #9b59b6;
  }
  .form-group input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
  }
  .form-group input:focus {
    border-bottom: 2px solid #9b59b6;
  }
  
  /* Focus Visible for custom accessible outline */
  button:focus-visible {
    outline: 3px dashed #e74c3c;
    outline-offset: 4px;
  }
</style>

<button class="btn">Click me hard!</button>

<div class="form-group">
  <label>Your Name:</label>
  <input type="text" placeholder="Click inside me to see :focus-within magic">
</div>`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 mt-6">2. Structural Pseudo-classes (The DOM Tree Ninjas)</h3>
        <p>Inse HTML structure ke elements ko position ke basis par select kiya jata hai bina extra classes lagaye. Table rows stripe karne ya grids design karne mein best hain.</p>

        <ul className="list-disc ml-6 space-y-1">
          <li><code>:first-child</code> - Parent ka sabse pehla bacha.</li>
          <li><code>:last-child</code> - Parent ka aakhri bacha.</li>
          <li><code>:only-child</code> - Agar element apne parent ka akela bacha hai.</li>
          <li><code>:first-of-type</code> / <code>:last-of-type</code> - Apne tag name ka pehla ya aakhri element parent ke andar. Ye tab use hota hai jab child elements mixed tags ke ho.</li>
          <li><code>:nth-child(n)</code> - Specific index wala element target karne ke liye. (Formula: <code>an+b</code>)
            <ul className="list-circle ml-6 mt-1 text-sm text-gray-700">
              <li><code>:nth-child(even)</code> ya <code>:nth-child(2n)</code></li>
              <li><code>:nth-child(odd)</code> ya <code>:nth-child(2n+1)</code></li>
              <li><code>:nth-child(3)</code> - Sirf 3rd element.</li>
              <li><code>:nth-child(3n)</code> - Har 3rd element (3, 6, 9...).</li>
            </ul>
          </li>
        </ul>

        <LiveEditor title="Nth-child Pattern Magic" initialCode={`<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px;
    background: #ecf0f1;
    border-radius: 8px;
  }
  .grid-item {
    background: white;
    padding: 20px;
    text-align: center;
    font-weight: bold;
    border-radius: 4px;
    border: 1px solid #bdc3c7;
  }
  
  /* Even child: Light blue */
  .grid-item:nth-child(even) {
    background-color: #d6eaf8;
  }

  /* Har 3rd element: Highlight red border */
  .grid-item:nth-child(3n) {
    border: 2px solid #e74c3c;
    color: #c0392b;
  }

  /* First aur Last elements pe special effect */
  .grid-item:first-child {
    background-color: #2ecc71;
    color: white;
  }
  .grid-item:last-child {
    background-color: #34495e;
    color: white;
  }
</style>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
</div>`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 mt-6">3. Form Validations aur States</h3>
        <p>HTML5 forms ko bina JavaScript ke valid/invalid style dena mumkin hai:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="list-disc ml-6 space-y-1">
            <li><code>:checked</code> - Radio buttons aur checkboxes ke liye jo active/ticked hain.</li>
            <li><code>:disabled</code> - Disable hue inputs/buttons ke liye.</li>
            <li><code>:read-only</code> - Jin inputs par readonly attribute laga ho.</li>
          </ul>
          <ul className="list-disc ml-6 space-y-1">
            <li><code>:valid</code> - Agar input ka data HTML5 rules match kare (jaise email mein @).</li>
            <li><code>:invalid</code> - Agar form input format galat ho.</li>
            <li><code>:required</code> / <code>:optional</code> - Fields jinki demand jaruri hai ya nahi.</li>
          </ul>
        </div>

        <LiveEditor title="Zero-JS Form State Validations" initialCode={`<style>
  body { font-family: sans-serif; padding: 20px;}
  .input-wrapper {
    position: relative;
    width: 250px;
    margin-bottom: 20px;
  }
  input[type="email"] {
    width: 100%;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: 0.3s;
  }

  /* Valid state: Green Theme */
  input[type="email"]:valid {
    border-color: #2ecc71;
    background-color: #eafaf1;
  }
  
  /* Invalid state (if not empty): Red Theme */
  input[type="email"]:invalid:not(:placeholder-shown) {
    border-color: #e74c3c;
    background-color: #fadbd8;
  }

  /* Checkbox logic */
  input[type="checkbox"] { 
    transform: scale(1.3); 
    margin-right: 10px; 
    accent-color: #e74c3c;
  }
  
  /* Checkbox check hone par uske bhai (label) ka style change karna */
  input[type="checkbox"]:checked + label {
    text-decoration: line-through;
    color: #7f8c8d;
    font-style: italic;
  }
</style>

<div class="input-wrapper">
  <label style="display:block; margin-bottom:5px; font-weight:bold;">Email (Auto-validates):</label>
  <input type="email" placeholder="test@domain.com" required>
</div>

<div style="display: flex; align-items: center; padding: 10px; background: #f9f9f9; border-radius: 6px; width: fit-content;">
  <input type="checkbox" id="task1">
  <label for="task1" style="transition: 0.2s; cursor: pointer;">Learn CSS Pseudo-classes</label>
</div>`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 mt-6">4. Modern & Logical Pseudo-classes (Advanced Level)</h3>
        <p>Modern CSS aisi powerful pseudo-classes leke aaya hai jinhone frameworks ka architecture badal ke rakh diya hai.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong><code>:not(selector)</code>:</strong> Ye exclusions banata hai. E.g., <code>li:not(.active)</code>.</li>
          <li><strong><code>:is(selector list)</code>:</strong> CSS choti karta hai. Puraane syntax <code>header p, main p, footer p</code> ko aap <code>:is(header, main, footer) p</code> likh sakte hain. Iski specificity list mein sabse highest powerful selector ke barabar hoti hai.</li>
          <li><strong><code>:where(selector list)</code>:</strong> Bilkul <code>:is()</code> jaisa hai, par iski <strong>specificity hamesha 0 hoti hai</strong>. Libraries banane wale ise bohot use karte hain taaki aap asani se styles override kar sakein bina <code>!important</code> ke.</li>
          <li><strong><code>:has(selector)</code> (The Parent Selector):</strong> Ye CSS ka 'Holy Grail' hai. Ye kehta hai "Agar parent ke andar falana child hai, toh parent par styling apply karo". Puraani CSS mein child se parent target karna namumkin tha.</li>
        </ul>

        <LiveEditor title="The Power of :has() and :is()" initialCode={`<style>
  body { font-family: sans-serif; padding: 20px; background: #f4f6f7; }
  
  .card {
    background: white;
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    transition: 0.3s;
  }

  /* :is() example */
  :is(h1, h2, h3).heading {
    margin-top: 0;
    color: #2c3e50;
  }

  /* :not() example - Har p tag jo '.special' nahi hai */
  p:not(.special) {
    color: #7f8c8d;
    font-size: 14px;
  }
  .special { color: #e67e22; font-weight: bold; }

  /* :has() MAGIC! 
     Agar card ke andar image hai, toh CARD (Parent) ka background badal do */
  .card:has(img) {
    border: 2px solid #3498db;
    box-shadow: 0 10px 20px rgba(52, 152, 219, 0.2);
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .card img {
    border-radius: 50%;
    width: 60px; height: 60px; object-fit: cover;
  }

  /* Forms mein :has() ka jalwa */
  .custom-checkbox-wrapper {
    padding: 15px; border: 2px dashed #bdc3c7; border-radius: 8px; cursor: pointer; transition: 0.2s;
  }
  .custom-checkbox-wrapper:has(input:checked) {
    border-color: #27ae60;
    background: #eaeded;
  }

</style>

<div class="card">
  <h3 class="heading">Normal Card</h3>
  <p>Main normal card ka paragraph hoon. :not() property mujhpe apply hui hai.</p>
  <p class="special">Main exception hoon!</p>
</div>

<div class="card">
  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar">
  <div>
    <h3 class="heading">Card WITH Image</h3>
    <p>Parent card ki styling :has() ne badal di kyunki mere andar img tag mil gaya!</p>
  </div>
</div>

<label class="custom-checkbox-wrapper" style="display: block;">
  <input type="checkbox" style="margin-right: 10px;">
  Select this checkbox to highlight the whole dashed box parent!
</label>`} />
      </div>
    )
  },
  {
    id: 'css-pseudo-elements',
    title: '5. Pseudo-elements: Generating Virtual Elements',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">5. Pseudo-elements (Bina HTML ke Element create karna)</h2>
        <p>Pseudo-elements CSS ka ek advanced tarika hai document ke specific <strong>hisson</strong> ko style karne ya naye virtual elements add karne ka. Pseudo-classes state batati hain (jaise :hover), jabki pseudo-elements virtually DOM mein inject hote hain. Inhe denote karne ke liye double colon <code>::</code> ka use hota hai (CSS3 format).</p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">1. ::before aur ::after (The Heavy Lifters)</h3>
        <p>Ye dono web design me revolution laaye hain. Ye kisi element ke content ke theek <strong>pehle (before)</strong> aur <strong>baad mein (after)</strong> ek virtual box inject kar dete hain.</p>
        <div className="bg-red-50 p-4 border-l-4 border-red-500 rounded-md my-4 shadow-sm">
          <p className="font-bold text-red-800">Critical Rule for ::before/::after</p>
          <p className="text-red-900 text-sm">Inke kaam karne ke liye <code>content: "";</code> property dena <strong>zaroori (mandatory)</strong> hai. Bina <code>content</code> attribute ke, pseudo-element browser render hi nahi karega, bhale hi andar space <code>" "</code> ya empty string ho.</p>
        </div>

        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Use Cases:</strong> Custom bullets banana, icons inject karna, quotes add karna, hover underline animations, custom shapes (triangles) aur tooltip banana.</li>
          <li>Ye elements natively <code>display: inline;</code> hote hain, jinhe jarurat padne par <code>block</code> ya absolute positioning di jati hai.</li>
        </ul>

        <LiveEditor title="::before and ::after Magic Animations" initialCode={`<style>
  body { font-family: sans-serif; display: flex; flex-direction: column; gap: 40px; padding: 30px;}
  
  /* Example 1: Inserting Icons/Quotes */
  .quote {
    font-size: 1.2rem;
    font-style: italic;
    color: #555;
    position: relative;
    padding: 0 30px;
    width: fit-content;
  }
  .quote::before {
    content: "❝";
    font-size: 3rem;
    color: #3498db;
    position: absolute;
    left: -10px;
    top: -20px;
    opacity: 0.3;
  }
  .quote::after {
    content: "❞";
    font-size: 3rem;
    color: #3498db;
    position: absolute;
    right: -10px;
    bottom: -40px;
    opacity: 0.3;
  }

  /* Example 2: The Famous Animated Underline */
  .cool-link {
    text-decoration: none;
    color: #2c3e50;
    font-weight: 900;
    font-size: 24px;
    position: relative; 
    display: inline-block;
  }
  
  .cool-link::after {
    content: ""; /* REQUIRED */
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: #e74c3c;
    left: 0;
    bottom: -5px;
    transform: scaleX(0); /* Hidden at start */
    transform-origin: right; /* Shuru mein shrink from right hoga */
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  .cool-link:hover::after {
    transform: scaleX(1); /* Full width on hover */
    transform-origin: left; /* Grow from left */
  }
  
  /* Example 3: CSS Only Tooltip */
  .tooltip {
    position: relative;
    cursor: help;
    border-bottom: 2px dotted #7f8c8d;
    font-weight: bold;
  }
  .tooltip::after {
    content: attr(data-tip); /* WOW! Reading HTML data attribute value */
    position: absolute;
    bottom: 150%;
    left: 50%;
    transform: translateX(-50%);
    background: #2c3e50;
    color: white;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  /* Little triangle for tooltip */
  .tooltip::before {
    content: "";
    position: absolute;
    bottom: 110%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: #2c3e50 transparent transparent transparent;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  .tooltip:hover::after, .tooltip:hover::before {
    opacity: 1;
    visibility: visible;
    bottom: 130%; /* slight slide-up animation */
  }
  .tooltip:hover::before { bottom: 90%; }
</style>

<div class="quote">
  CSS is not just a language, it's an art.
</div>

<div>
  <a href="#" class="cool-link">Hover Me For Magic Underline</a>
</div>

<div>
  Main ek <span class="tooltip" data-tip="Look! No JavaScript involved!">Smart Tooltip</span> element hoon. Hover me.
</div>`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 mt-6">2. Content Formatting Pseudo-elements</h3>
        <p>In pseudo-elements ka use text ke parts ko style karne ke liye hota hai.</p>

        <ul className="list-disc ml-6 space-y-2">
          <li><strong><code>::first-letter</code>:</strong> Paragraph ke pehle letter ko target karta hai. Drop-cap design (Magazines & Newspaper style) banane ke liye best hai.</li>
          <li><strong><code>::first-line</code>:</strong> Block-level element ki pehli line ko target karta hai. Screen resize hone par pehli line mein kitne word aayenge ye browser khud hisaab lagata hai.</li>
          <li><strong><code>::selection</code>:</strong> Jab user text ko mouse se drag karke select (highlight) karta hai, us area ka background aur text color override karne ke liye.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2 mt-6">3. UI Component Pseudo-elements</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong><code>::placeholder</code>:</strong> Input aur Textarea tags ke placeholder hint ka color, font aur opacity change karne ke liye.</li>
          <li><strong><code>::marker</code>:</strong> List items (<code>&lt;li&gt;</code>) ke bullets (dots) ya numbers (1, 2, 3) ko style karne ke liye (Color, font-size). Pehle ye bahut mushkil tha, dev <code>::before</code> use karte the, par ab native support hai.</li>
          <li><strong><code>::backdrop</code>:</strong> Native <code>&lt;dialog&gt;</code> HTML element (Modal) ya full-screen element ke peeche ke background (dark overlay) ko style karne ke liye.</li>
        </ul>

        <LiveEditor title="Text Styling & UI Elements" initialCode={`<style>
  body { padding: 20px; font-family: 'Times New Roman', Times, serif; line-height: 1.6; background: #fffdf5;}
  
  /* Text Selection highlight color override */
  ::selection {
    background-color: #f39c12;
    color: #fff;
    text-shadow: none;
  }

  /* Drop Cap styling */
  .article-text::first-letter {
    font-size: 5rem;
    font-weight: 900;
    float: left;
    margin-right: 15px;
    margin-top: -10px;
    line-height: 1;
    color: #8e44ad;
    text-shadow: 2px 2px 0px rgba(0,0,0,0.1);
  }

  /* First line of paragraph */
  .article-text::first-line {
    text-transform: uppercase;
    font-weight: bold;
    color: #2c3e50;
    letter-spacing: 1px;
  }

  /* Modern List Marker Styling */
  ul.custom-marker {
    list-style-type: '⚡ '; /* Custom character! */
    font-family: sans-serif;
    margin-top: 30px;
  }
  ul.custom-marker li::marker {
    color: #f1c40f;
    font-size: 1.5rem;
  }

  /* Form Placeholder Styling */
  .custom-input {
    padding: 15px;
    font-size: 18px;
    width: 300px;
    margin-top: 30px;
    border: 2px solid #bdc3c7;
    border-radius: 8px;
    font-family: sans-serif;
    outline: none;
    transition: 0.3s;
  }
  .custom-input:focus { border-color: #3498db; box-shadow: 0 0 10px rgba(52,152,219,0.2); }
  
  /* Targeting the placeholder itself */
  .custom-input::placeholder {
    color: #95a5a6;
    font-style: italic;
    letter-spacing: 1px;
    transition: 0.2s opacity;
  }
  .custom-input:focus::placeholder {
    opacity: 0.3; /* Fade out placeholder on focus */
  }
</style>

<p class="article-text">
  Once upon a time in the world of web development, CSS was just used to add simple colors and fonts. 
  But today, CSS is incredibly powerful. You can build entire animations, state transitions, and complex layouts without a single line of JavaScript. Try selecting this text with your mouse to see the custom selection color in action! Notice how the first line stays uppercase even if you resize the browser window.
</p>

<ul class="custom-marker">
  <li>Bade aur custom symbol wale bullets</li>
  <li>Sirf CSS ::marker se banaye gaye</li>
  <li>Bina extra HTML ya ::before tricks ke</li>
</ul>

<input type="text" class="custom-input" placeholder="Type something cool...">`} />
      </div>
    )
  }
];

export default chapters;
