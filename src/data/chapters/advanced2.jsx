import React from 'react';
import LiveEditor from '../../components/LiveEditor';

const chapters = [
  {
    id: 'advanced-pseudo-classes',
    title: '28. Modern Pseudo-classes (:is, :where, :has, & More)',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Advanced Pseudo-classes in CSS</h2>
        <p className="text-gray-700">
          CSS mein recently aise pseudo-classes aaye hain jinhone selectors likhne ka tareeqa poori tarah badal diya hai. Pehle jo kaam karne ke liye JavaScript ya complex CSS rules likhne padte the, ab wo `:has`, `:is`, aur `:where` jaise modern pseudo-classes se aasani se ho jate hain. Is chapter mein hum in sabhi ko zero se le kar absolute pro level tak samjhenge. Kuch bhi nahi chhodenge!
        </p>

        <h3 className="text-xl font-semibold mt-6">1. The `:is()` Pseudo-class (The Specificity Matcher)</h3>
        <p className="text-gray-700">
          Jab aapke paas lamba selector list ho jismein bahut saari cheezein common hon, toh wahan <code>:is()</code> kaam aata hai. Ye code ko DRY (Don't Repeat Yourself) banata hai. Iski ek aur bohot zaroori property hai: <strong>Specificity</strong>. <code>:is()</code> ke andar jo sabse powerful (high specificity) selector hota hai, <code>:is()</code> uski specificity inherit kar leta hai.
        </p>
        <LiveEditor title="Understanding :is()" initialCode={`
<style>
  /* Bina :is() ke hume aise likhna padta tha: */
  /* header h1, header h2, header h3, main h1, main h2, main h3 { ... } */

  /* :is() ke saath: */
  :is(header, main, section) :is(h1, h2, h3) {
    color: #2c3e50;
    font-family: sans-serif;
    margin-bottom: 8px;
  }

  /* Specificity example: */
  /* :is(#id, .class) -> iski specificity id (#) ke barabar hogi */
  .demo-box :is(#important-btn, .normal-btn) {
    background-color: blue;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  /* Yahan .normal-btn ki specificity automatically high ho gayi kyunki wo #important-btn ke sath :is() mein hai! */
</style>

<header>
  <h1>This is Header H1</h1>
</header>
<main>
  <h2>This is Main H2</h2>
  <div class="demo-box">
    <button class="normal-btn">Normal Button (High Specificity Inherited)</button>
  </div>
</main>
        `} />

        <h3 className="text-xl font-semibold mt-6">2. The `:where()` Pseudo-class (The Zero Specificity Hero)</h3>
        <p className="text-gray-700">
          <code>:where()</code> bilkul <code>:is()</code> ki tarah kaam karta hai, selector grouping mein help karta hai. LAKIN ek bohot bada difference hai: <strong><code>:where()</code> ki specificity hamesha 0 hoti hai.</strong> Ye CSS Resets ya utility classes banane ke liye best tool hai, kyunki isko override karna kisi bhi dusre selector ke liye bohot aasan hota hai.
        </p>
        <LiveEditor title="The Power of :where()" initialCode={`
<style>
  /* :where() ki specificity ZERO hai */
  :where(.article, .post, .news) p {
    color: gray;
    font-size: 16px;
    line-height: 1.5;
  }

  /* Chhote se class selector ne isko aaram se override kar diya! */
  .highlight {
    color: red; /* Yeh jeet gaya, kyunki :where() 0 specificity laata hai */
  }
</style>

<div class="article">
  <p>Yeh paragraph gray hona chahiye kyunki :where se styled hai.</p>
  <p class="highlight">Lekin yeh paragraph red hai, kyunki .highlight ki specificity zyada hai. (10 vs 0)</p>
</div>
        `} />

        <h3 className="text-xl font-semibold mt-6">3. The `:has()` Pseudo-class (The Parent Selector!)</h3>
        <p className="text-gray-700">
          CSS developers ne 20 saal tak "Parent Selector" ka intezaar kiya hai. <code>:has()</code> wo jadoo hai. Agar aap chahte hain ki ek element par style apply ho, lekin TABHI jab uske <em>andar</em> koi specific child ya condition match ho, toh hum <code>:has()</code> use karte hain. Isse JavaScript ke kai DOM manipulations replace ho gaye hain!
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>div:has(img)</code> - Wo div jiske andar image hai.</li>
          <li><code>form:has(:invalid)</code> - Wo form jismein koi invalid input hai.</li>
          <li><code>h1:has(+ p)</code> - Wo h1 jiske theek baad ek paragraph aata ho.</li>
        </ul>
        <LiveEditor title="Mind-blowing :has() Examples" initialCode={`
<style>
  /* Example 1: Style a Card ONLY if it has an image */
  .card {
    border: 2px solid #ccc;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .card:has(img) {
    border-color: #3498db;
    background: #e8f4fd;
  }

  .card img {
    max-width: 100%;
    border-radius: 4px;
  }

  /* Example 2: Form reacting to invalid input completely in CSS! */
  .form-group {
    padding: 10px;
    border: 2px solid transparent;
  }

  /* Agar form group ke andar koi input focus mein hai, to pura group highlight ho! */
  .form-group:has(input:focus) {
    border-color: #2ecc71;
    background: #f0fdf4;
  }

  /* Agar input invalid hai aur interact ho chuka hai, group red ho jaye */
  .form-group:has(input:invalid:not(:placeholder-shown)) {
    border-color: #e74c3c;
    background: #fdf0f0;
  }
</style>

<div class="card">
  <h3>Card without Image</h3>
  <p>Yeh card normal rahega.</p>
</div>

<div class="card">
  <img src="https://via.placeholder.com/150" alt="placeholder">
  <h3>Card WITH Image</h3>
  <p>Is card ka border aur background change ho gaya kyunki isme image hai!</p>
</div>

<form>
  <div class="form-group">
    <label>Email (Try typing invalid email):</label><br>
    <input type="email" placeholder="enter email..." required>
  </div>
</form>
        `} />

        <h3 className="text-xl font-semibold mt-6">4. `:focus-within` and `:focus-visible`</h3>
        <p className="text-gray-700">
          Accessibility aur UX improve karne ke liye ye bohot zaroori hain.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong><code>:focus-within</code></strong>: Ye tab trigger hota hai jab kisi element ke <em>andar</em> ka koi bhi element focus ho. (Similar to <code>:has(:focus)</code>).</li>
          <li><strong><code>:focus-visible</code></strong>: Default <code>:focus</code> mouse clicks par bhi outline dikhata hai jo ugly lagta hai. <code>:focus-visible</code> browser ko batata hai ki sirf tabhi focus ring dikhao jab user Keyboard (Tab key) se navigate kar raha ho. Ye modern buttons ke liye absolute necessity hai!</li>
        </ul>
        <LiveEditor title="Focus Within & Focus Visible" initialCode={`
<style>
  /* :focus-within example */
  .search-container {
    border: 2px solid gray;
    padding: 10px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    transition: all 0.2s;
  }
  
  /* Jab input focus ho, to pura container highlight ho */
  .search-container:focus-within {
    border-color: purple;
    box-shadow: 0 0 10px rgba(128,0,128,0.3);
    transform: scale(1.02);
  }

  .search-container input {
    border: none;
    outline: none;
    flex: 1;
    padding: 5px;
  }

  /* :focus-visible example */
  .btn {
    padding: 10px 20px;
    background: teal;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }

  /* Normal focus hatao (Click karne par outline nahi aayegi) */
  .btn:focus {
    outline: none;
  }

  /* Sirf keyboard tab use karne par outline aaye */
  .btn:focus-visible {
    outline: 3px solid orange;
    outline-offset: 3px;
  }
</style>

<div class="search-container">
  <span>🔍</span>
  <input type="text" placeholder="Click to focus input...">
</div>

<p style="margin-top:20px; color: gray;">
  Neeche wale button ko click karke dekho, koi outline nahi aayegi. 
  Lekin is preview window mein click karke keyboard se "Tab" press karke button pe aao, tab orange outline aayegi!
</p>
<button class="btn">Focus Visible Button</button>
        `} />

        <h3 className="text-xl font-semibold mt-6">5. The Powerful `:nth-child` with `of &lt;selector&gt;`</h3>
        <p className="text-gray-700">
          Hume lagta tha <code>:nth-child</code> toh simple hai. Lekin CSS Selectors Level 4 ne isme <code>of</code> keyword add kiya hai! Pehle <code>.item:nth-child(2)</code> ka matlab hota tha "2nd child ko select karo, agar wo .item hai". Agar 2nd child kuch aur hai, toh kuch select nahi hota tha. 
          Ab <code>:nth-child(2 of .item)</code> ka matlab hai "Sabhi .item me se 2nd wale ko select karo", chahe unke beech mein koi bhi doosre elements hon!
        </p>
        <LiveEditor title=":nth-child(n of selector)" initialCode={`
<style>
  .list {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .item {
    padding: 10px;
    background: #ddd;
  }
  .ad {
    padding: 10px;
    background: yellow;
    font-weight: bold;
    color: red;
  }

  /* Old approach: Yeh actually kuch match nahi karega theek se us context mein 
     jahan ads mixed hain. For instance .item:nth-child(even) will count ads too! */

  /* NEW MAGIC! Count only items! */
  /* Har doosra .item blue ho jayega, chahe ads beech mein kahin bhi hon */
  :nth-child(even of .item) {
    background: #bde0fe;
    border-left: 5px solid blue;
  }

  /* Sirf .item me se pehle element par apply karo */
  :nth-child(1 of .item) {
    border-radius: 10px 10px 0 0;
    background: #ffc8dd;
  }
</style>

<div class="list">
  <div class="item">Item 1 (1 of item)</div>
  <div class="ad">Advertisement! (Ignored by our selector count)</div>
  <div class="item">Item 2 (Even item - Blue)</div>
  <div class="item">Item 3</div>
  <div class="ad">Buy Now!</div>
  <div class="item">Item 4 (Even item - Blue)</div>
  <div class="item">Item 5</div>
</div>
        `} />

      </div>
    )
  },
  {
    id: 'responsive-design',
    title: '29. Responsive Design, Media Queries & Container Queries',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Responsive Web Design (RWD) & Beyond</h2>
        <p className="text-gray-700">
          Aaj kal log website desktop se zyada mobile par dekhte hain. Responsive design ka matlab hai aapki website har screen size (mobile, tablet, desktop, ultra-wide) par perfect dikhe. Hum shuru se end tak sab kuch cover karenge, jismein latest <strong>Container Queries</strong> aur <strong>Range Syntax</strong> bhi shamil honge.
        </p>

        <h3 className="text-xl font-semibold mt-6">1. The Meta Viewport Tag (The absolute baseline)</h3>
        <p className="text-gray-700">
          CSS likhne se pehle, HTML mein <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> lagana zaroori hai. Iske bina mobile browser website ko desktop size me render karke shrink kar dega.
        </p>

        <h3 className="text-xl font-semibold mt-6">2. Media Queries: Classic vs Modern Level 4 Syntax</h3>
        <p className="text-gray-700">
          Media queries allow you to apply CSS conditionally based on screen size. Pehle hum <code>min-width</code> aur <code>max-width</code> use karte the. Ab naya Media Queries Level 4 syntax (Math operators like <code>&lt;=</code>, <code>&gt;=</code>) sabhi modern browsers support karte hain aur ye bohot aasan hai!
        </p>
        <LiveEditor title="Modern Media Queries" initialCode={`
<style>
  .box {
    padding: 30px;
    color: white;
    font-size: 20px;
    text-align: center;
    border-radius: 10px;
    transition: background 0.3s;
  }

  /* Base Mobile-first styling */
  .box {
    background-color: #e74c3c; /* Red for mobile */
  }

  /* Classic Way for Tablet (min 600px) */
  @media (min-width: 600px) {
    .box { background-color: #f1c40f; color: black; } /* Yellow for tablet */
  }

  /* Modern Math Syntax for Desktop! (800px and above) */
  @media (width >= 800px) {
    .box { background-color: #2ecc71; color: white; } /* Green for desktop */
  }

  /* Range targeting! (Between 600px and 800px) */
  @media (600px < width < 800px) {
    .box::after {
      content: " (Strictly Tablet Range!)";
      font-weight: bold;
    }
  }
</style>

<div class="box">
  Resize the preview window!
  <br><small>Red: Mobile, Yellow: Tablet, Green: Desktop</small>
</div>
        `} />

        <h3 className="text-xl font-semibold mt-6">3. Media Features Beyond Width (Interaction & System Preferences)</h3>
        <p className="text-gray-700">
          Media queries sirf size ke liye nahi hoti! Aap user ki system preference (Dark Mode) aur interaction mechanism (Touch vs Mouse) bhi detect kar sakte hain.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><code>@media (prefers-color-scheme: dark)</code> - Detects system dark mode.</li>
          <li><code>@media (hover: hover)</code> - Checks if user has a mouse/trackpad. Hover effects mobile (touch) par glitches kar sakte hain (jaise double tap req). Always wrap hover effects in this!</li>
          <li><code>@media (prefers-reduced-motion: reduce)</code> - Accessibility! Agar user ko animations se chakkar aate hain, to OS me motion kam karta hai. Hume uski respect karni chahiye.</li>
        </ul>
        <LiveEditor title="UX Media Queries" initialCode={`
<style>
  .feature-card {
    padding: 20px;
    border: 2px solid #ccc;
    background: #fff;
    color: #333;
    transition: transform 0.3s ease, background 0.3s ease;
  }

  /* 1. Only add hover effects if device supports hover (Mouse) */
  @media (hover: hover) {
    .feature-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      cursor: pointer;
    }
  }

  /* 2. System Dark Mode Detection */
  @media (prefers-color-scheme: dark) {
    .feature-card {
      background: #1a1a1a;
      color: #eee;
      border-color: #444;
    }
  }

  /* 3. Respect Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .feature-card {
      transition: none !important; /* Disable animations completely */
    }
  }
</style>

<div class="feature-card">
  <h3>Interactive Feature Card</h3>
  <p>1. Hover over me (if on desktop). Hover won't run on touch devices!</p>
  <p>2. If your system is in Dark Mode, I will be dark!</p>
  <p>3. If you enabled reduced motion in OS, I won't animate.</p>
</div>
        `} />

        <h3 className="text-xl font-semibold mt-6">4. Container Queries: The Holy Grail of Modular Design (`@container`)</h3>
        <p className="text-gray-700">
          Media queries document/viewport ki width check karte hain. Lekin imagine karein ek "Card" component hai. Aap chahte hain card side-bar me ho to chota dikhe, main area me ho to bada dikhe. Viewport width same ho sakti hai, par card ka parent (container) alag hai. Yahan aate hain <strong>Container Queries</strong>. Ye modern CSS ka sabse bada paradigm shift hai.
        </p>
        <p className="text-gray-700 mt-2">
          Kaam karne ke liye, parent element par <code>container-type: inline-size;</code> set karna hota hai. Fir hum uske andar <code>@container (min-width: X)</code> use kar sakte hain! Aur container width base units jaise <code>cqw</code> (Container Query Width) bhi milte hain.
        </p>
        <LiveEditor title="Container Queries @container" initialCode={`
<style>
  /* 1. Define the containers */
  .main-content {
    container-type: inline-size;
    container-name: main; /* Optional name */
    background: #f0f0f0;
    padding: 10px;
    width: 100%; /* Resizes naturally */
  }

  .sidebar {
    container-type: inline-size;
    background: #e0e0e0;
    padding: 10px;
    width: 250px; /* Fixed small width */
  }

  /* 2. Style the component BASED ON ITS CONTAINER */
  .profile-card {
    background: white;
    border: 1px solid #ccc;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .profile-avatar {
    width: 60px;
    height: 60px;
    background: tomato;
    border-radius: 50%;
  }

  /* JAB CONTAINER 400px se bada hoga, to Profile Card Horizontal ho jayega! */
  @container (min-width: 400px) {
    .profile-card {
      flex-direction: row;
      align-items: center;
    }
    .profile-avatar {
      width: 100px;
      height: 100px;
    }
    .profile-info h3 {
      /* cqw is Container Query Width! 1cqw = 1% of container width */
      font-size: clamp(1.2rem, 5cqw, 2rem);
      margin: 0;
    }
  }

  /* Layout container */
  .layout { display: flex; gap: 20px; flex-wrap: wrap; }
</style>

<div class="layout">
  <!-- Same component inside a narrow Sidebar -->
  <div class="sidebar">
    <h4>Sidebar</h4>
    <div class="profile-card">
      <div class="profile-avatar"></div>
      <div class="profile-info">
        <h3>John Doe</h3>
        <p>Web Developer</p>
      </div>
    </div>
  </div>

  <!-- Same component inside a wide Main Content -->
  <div class="main-content" style="flex: 1; min-width: 300px;">
    <h4>Main Area</h4>
    <div class="profile-card">
      <div class="profile-avatar"></div>
      <div class="profile-info">
        <h3>John Doe</h3>
        <p>Web Developer - UI/UX Designer</p>
        <p style="font-size: 0.9em; color: gray;">In wide container, I am horizontal! In sidebar, I am vertical!</p>
      </div>
    </div>
  </div>
</div>
        `} />
      </div>
    )
  },
  {
    id: 'css-architecture-bem',
    title: '30. CSS Architecture, BEM & Best Practices (Pro Level)',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Writing Scalable CSS Architecture</h2>
        <p className="text-gray-700">
          CSS likhna asaan hai, par badi projects mein usko <strong>maintain</strong> karna bohot mushkil hai. "Global Scope" hone ki wajah se specificity wars shuru ho jati hain (kaun kiske CSS ko override karega), code duplicate hota hai, aur <code>!important</code> ka use badh jata hai. In problems ko solve karne ke liye CSS Architectures (Methodologies) bane hain.
        </p>

        <h3 className="text-xl font-semibold mt-6">1. The BEM Methodology (Block, Element, Modifier)</h3>
        <p className="text-gray-700">
          BEM duniya ki sabse popular naming convention hai. Ye class names ko itna clear bana deta hai ki aap HTML dekh kar CSS structure samajh sakte hain. Iska main faida yeh hai ki ye HTML classes ki Specificity ko flat (sirf ek class level) rakhta hai, jis se cascading issues nahi aate.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Block (<code>.block</code>)</strong>: Ek independent, reusable component. Example: <code>.card</code>, <code>.navbar</code>, <code>.button</code>.</li>
          <li><strong>Element (<code>.block__element</code>)</strong>: Block ka wo hissa jo block ke bahar exist nahi kar sakta. Double underscore <code>__</code> use hota hai. Example: <code>.card__title</code>, <code>.card__image</code>.</li>
          <li><strong>Modifier (<code>.block--modifier</code> ya <code>.block__element--modifier</code>)</strong>: Block ya element ka state ya appearance change karne ke liye. Double dash <code>--</code> use hota hai. Example: <code>.card--featured</code>, <code>.button--primary</code>.</li>
        </ul>
        <LiveEditor title="BEM Naming in Action" initialCode={`
<style>
  /* BLOCK */
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    max-width: 300px;
    font-family: system-ui;
  }

  /* MODIFIER on Block */
  .card--dark {
    background-color: #222;
    color: #fff;
    border-color: #444;
  }

  /* ELEMENTS */
  .card__image {
    width: 100%;
    height: 150px;
    background: #eee;
    border-radius: 4px;
    margin-bottom: 15px;
  }
  
  .card--dark .card__image {
    background: #555;
  }

  .card__title {
    margin: 0 0 10px 0;
    font-size: 1.5rem;
  }

  .card__text {
    font-size: 1rem;
    color: #666;
    margin-bottom: 20px;
  }
  
  .card--dark .card__text { color: #aaa; }

  /* Element acting as a Block itself */
  .btn {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  /* Modifiers for Button */
  .btn--primary {
    background: blue;
    color: white;
  }
  .btn--danger {
    background: red;
    color: white;
  }
</style>

<!-- Normal Card -->
<div class="card">
  <div class="card__image"></div>
  <h2 class="card__title">Normal Card</h2>
  <p class="card__text">This follows pure BEM methodology.</p>
  <button class="btn btn--primary">Read More</button>
</div>

<br>

<!-- Dark Modifier Card -->
<div class="card card--dark">
  <div class="card__image"></div>
  <h2 class="card__title">Dark Card</h2>
  <p class="card__text">We just added .card--dark class.</p>
  <button class="btn btn--danger">Delete Item</button>
</div>
        `} />

        <h3 className="text-xl font-semibold mt-6">2. Managing Specificity (The 0-1-0 Rule)</h3>
        <p className="text-gray-700">
          BEM ka faida ye hai ki hum IDs (<code>#header</code>) ya deeply nested selectors (<code>.nav ul li a</code>) se bachte hain. 
          Rule of thumb: <strong>Keep your CSS selectors as flat as possible.</strong> Classes (0,1,0) best hoti hain. ID (1,0,0) kabhi CSS me use nahi karni chahiye, wo JS ke hooks (document.getElementById) ke liye chhod do.
        </p>

        <h3 className="text-xl font-semibold mt-6">3. CSS Variables (Custom Properties) as Design Tokens</h3>
        <p className="text-gray-700">
          Professional CSS mein hum colors ya fonts direct har jagah nahi likhte. Hum <code>:root</code> level par variables banate hain jinko <strong>Design Tokens</strong> kehte hain. Isse theming (Dark mode, brand color change) karna bachon ka khel ho jata hai.
        </p>
        <LiveEditor title="Architecture with Design Tokens" initialCode={`
<style>
  /* 1. Design Tokens (Global Configuration) */
  :root {
    /* Colors */
    --color-primary: #3b82f6;
    --color-primary-hover: #2563eb;
    --color-bg: #ffffff;
    --color-text: #1f2937;
    --color-text-muted: #6b7280;
    
    /* Spacing */
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    
    /* Typography */
    --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --radius: 8px;
  }

  /* 2. Theme Override (Dark Mode) */
  [data-theme="dark"] {
    --color-bg: #111827;
    --color-text: #f9fafb;
    --color-text-muted: #9ca3af;
    --color-primary: #60a5fa;
  }

  /* 3. Base/Reset */
  * { box-sizing: border-box; }
  
  .app-container {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-main);
    padding: var(--spacing-lg);
    border: 1px solid var(--color-text-muted);
    border-radius: var(--radius);
    transition: background-color 0.3s, color 0.3s;
  }

  /* 4. Components (Using tokens) */
  .title { margin-top: 0; }
  .text { color: var(--color-text-muted); margin-bottom: var(--spacing-md); }
  
  .btn-theme {
    background: var(--color-primary);
    color: #fff;
    padding: var(--spacing-sm) var(--spacing-md);
    border: none;
    border-radius: var(--radius);
    cursor: pointer;
    font-family: var(--font-main);
    font-weight: 600;
  }
  .btn-theme:hover {
    background: var(--color-primary-hover);
  }
</style>

<!-- Toggle the data-theme attribute via inline JS just to demonstrate -->
<div class="app-container" id="app">
  <h1 class="title">Design Tokens Architecture</h1>
  <p class="text">Click the button below to toggle the theme. Notice how we only change variables on the wrapper!</p>
  <button class="btn-theme" onclick="
    const app = document.getElementById('app');
    if(app.getAttribute('data-theme') === 'dark') app.removeAttribute('data-theme');
    else app.setAttribute('data-theme', 'dark');
  ">Toggle Dark Theme</button>
</div>
        `} />

        <h3 className="text-xl font-semibold mt-6">4. The "Utility-First" / Tailwind Approach (Brief Overview)</h3>
        <p className="text-gray-700">
          Aaj kal ek aur methodology bohot hit hai: Utility-first CSS (jaise Tailwind CSS). Yahan hum <code>.card</code> banane ke badle HTML me hi bohot saari choti classes likh dete hain jaise <code>class="flex p-4 bg-white rounded shadow"</code>. 
          <br/><strong>Pros:</strong> Aapko CSS file nahi chhodni padti, naming ki problem khatam, file size chota rehta hai.
          <br/><strong>Cons:</strong> HTML thoda messy dikhta hai.
          <br/>As a pro, aapko BEM (custom CSS ke liye) aur Utility classes (margin, padding adjust karne ke liye) dono ka mix aana chahiye!
        </p>

        <h3 className="text-xl font-semibold mt-6">5. Golden Best Practices Check-list:</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>NEVER use <code>!important</code>:</strong> Ye specificity tool nahi hai, ye CSS ko torhne wala hathiyar hai. Sirf utility classes me allow hota hai (e.g. <code>.hidden {"{"} display: none !important; {"}"}</code>).</li>
          <li><strong>Use Logical Properties:</strong> <code>margin-left</code> ki jagah <code>margin-inline-start</code> use karna seekhein. Ye LTR (English) aur RTL (Arabic) bhashaon ke liye automatically adapt ho jate hain.</li>
          <li><strong>Avoid Magic Numbers:</strong> <code>margin-top: 37px;</code>. Ye 37 kahan se aaya? Hamesha spacing scales (4px, 8px, 12px, 16px...) follow karein ya variables use karein.</li>
          <li><strong>Comment your Hacks:</strong> Agar aapko browser ki koi quirk theek karne ke liye ajeeb CSS likhni parhi hai, to comment mein likho <em>kyun</em> likhi hai. 6 mahine baad aap khud bhool jaoge.</li>
        </ul>
      </div>
    )
  }
];

export default chapters;
