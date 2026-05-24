import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const chapters = [
  {
    id: 'css-display',
    title: '13. Display Property (Complete)',
    content: (
      <div>
        <h2>Display Property</h2>
        <p>Har HTML element screen pe kaise dikhega aur space kaise gherega, yeh <code>display</code> property decide karti hai.</p>

        <h3>1. display: block</h3>
        <p>Block elements screen ki poori available width (100%) lete hain aur hamesha nayi line se shuru hote hain. Isme aap width aur height set kar sakte ho.</p>
        <p><strong>Default Block Elements:</strong> <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;section&gt;</code></p>
        <CodeBlock>{`span.make-block {
  display: block;
  width: 100px;
  height: 50px;
}`}</CodeBlock>

        <h3>2. display: inline</h3>
        <p>Inline elements sirf utni jagah lete hain jitna unka content hota hai. Nayi line start nahi karte. <strong>Important: Aap inme width aur height set nahi kar sakte!</strong> Top/Bottom margins aur paddings bhi expected way mein kaam nahi karti.</p>
        <p><strong>Default Inline Elements:</strong> <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code></p>
        <CodeBlock>{`div.make-inline {
  display: inline;
  /* width: 100px; -> YEH KAAM NAHI KAREGA! */
}`}</CodeBlock>

        <h3>3. display: inline-block</h3>
        <p>Yeh block aur inline dono ka best hissa leta hai. Yeh inline elements ki tarah ek hi line mein rehta hai, lekin aap isme block elements ki tarah <strong>width aur height set kar sakte hain</strong>!</p>
        <p><strong>Default Inline-block Elements:</strong> <code>&lt;img&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;input&gt;</code></p>
        <CodeBlock>{`.nav-link {
  display: inline-block;
  padding: 10px 20px;
  width: 150px;
  text-align: center;
}`}</CodeBlock>

        <h3>4. display: none vs visibility: hidden</h3>
        <p>Dono element ko hide karte hain, lekin ek bahut bada difference hai:</p>
        <ul className="styled-list">
          <li><code>display: none;</code>: Element ko DOM tree se hata deta hai. Wo bilkul bhi space occupy nahi karega. (Jaise ki wo wahan kabhi tha hi nahi).</li>
          <li><code>visibility: hidden;</code>: Element chup jata hai, lekin <strong>space waise hi gher kar rakhta hai</strong>. Wo transparent ban jata hai.</li>
        </ul>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Teen paragraphs banao. Pehle paragraph ko display:none kardo aur dusre ko visibility:hidden. Teesra paragraph normal rahe. Dekho screen par in dono mein kya farq dikhta hai aur layout kaise change hota hai.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-position',
    title: '14. CSS Position (Bahut Important)',
    content: (
      <div>
        <h2>CSS Position Property</h2>
        <p>Position property se hum element ko screen pe kisi bhi jagah utha kar rakh sakte hain. Yeh 5 values leti hai:</p>

        <h3>1. Static (Default)</h3>
        <p>Har element default mein <code>static</code> hota hai. Wo normally flow mein rehta hai. Is par top, bottom, left, right kaam nahi karte.</p>

        <h3>2. Relative (Apni jagah se shift)</h3>
        <p>Element document flow mein rehta hai. Lekin ab aap use <code>top</code>, <code>bottom</code>, <code>left</code>, aur <code>right</code> use karke uski <strong>original position se</strong> thoda khiska sakte ho. Iski khali jagah koi dusra element occupy nahi karega.</p>
        <CodeBlock>{`.box {
  position: relative;
  top: 20px; /* Apni original jagah se 20px neeche jayega */
  left: 10px; /* Apni original jagah se 10px right mein jayega */
}`}</CodeBlock>

        <h3>3. Absolute (Out of Flow)</h3>
        <p>Element document flow se bahar nikal aata hai (uske aas-paas ke elements uski jagah occupy kar lenge jaise wo wahan hai hi nahi). Yeh apne <strong>nearest positioned parent</strong> (jis parent ka position static nahi hai) ke hisab se move karta hai.</p>
        <p className="info-box"><strong>Rule of thumb:</strong> Jise absolute karna ho, uske parent ko hamesha <code>position: relative;</code> do.</p>
        <CodeBlock>{`.card-container {
  position: relative; /* Parent ko relative diya */
}
.badge {
  position: absolute;
  top: -10px;   /* Parent ke top se bahar */
  right: -10px; /* Parent ke right se bahar */
  background: red;
}`}</CodeBlock>

        <h3>4. Fixed (Screen se chipka hua)</h3>
        <p>Element browser window (viewport) ke hisab se fix ho jata hai. Agar aap page scroll bhi karoge, toh wo wahi ka wahi rahega.</p>
        <CodeBlock>{`.back-to-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
}`}</CodeBlock>

        <h3>5. Sticky (Scroll hone par Fix)</h3>
        <p>Yeh <code>relative</code> aur <code>fixed</code> ka mix hai. Element apne normal flow mein rehta hai, lekin jab scroll karte hue ek threshold (jaise top: 0) pe aata hai, toh wahan chipak jata hai (fixed ban jata hai).</p>
        <CodeBlock>{`.navbar {
  position: sticky;
  top: 0; /* Jab screen ka top element ke top se match hoga, chipak jayega */
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek card banao. Card container ko relative position do. Card ke andar ek chhota circle div banao (jaise notification badge). Us badge ko absolute position do aur card ke top-right corner par exactly set karke dikhao.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-z-index',
    title: '15. Z-index & Stacking',
    content: (
      <div>
        <h2>Z-index: 3D Layers in CSS</h2>
        <p>Jab aap position property use karke elements ko move karte ho, toh aisi situation aati hai jahan ek element dusre ke upar aa jata hai. Kaunsa element upar dikhega aur kaunsa pichhe, yeh <code>z-index</code> decide karta hai.</p>

        <h3>The Golden Rule of z-index</h3>
        <div className="info-box">
          <code>z-index</code> sirf tabhi kaam karta hai jab element ki <code>position</code> property <strong>relative, absolute, fixed, ya sticky</strong> ho. <code>static</code> (default) elements pe z-index ka koi asar nahi hota.
        </div>

        <h3>How it Works</h3>
        <p>Z-index koi bhi integer value le sakta hai (positive ya negative). Jiski value zyada hogi, wo upar dikhega.</p>
        <CodeBlock>{`.box-behind {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
}

.box-front {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10; /* Yeh box-behind ke upar dikhega kyunki 10 > 1 */
}`}</CodeBlock>

        <h3>Stacking Context (Advanced)</h3>
        <p>Z-index hamesha puri website pe global nahi hota. Agar kisi parent element ka z-index set hai, toh uske bache hue elements ek naya "Stacking Context" bana lete hain. Parent ka z-index dusre parents se compare hota hai, bacho ka nahi.</p>
        
        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: 3 div box banao, red, blue, green. Teeno ko ek dusre ke upar overlap karao (using absolute positioning). Phir CSS mein unka order change karke dikhao (green sabse piche, fir red, aur blue sabse aage) sirf z-index property use karke.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-flexbox-container',
    title: '16. Flexbox Container (Part 1)',
    content: (
      <div>
        <h2>Flexbox (Flexible Box Layout)</h2>
        <p>Flexbox CSS layout ka modern aur sabse powerful tareeqa hai. Yeh ek-dimensional (1D) layout system hai - ya toh aap rows (left to right) mein cheezon ko rakh sakte hain, ya columns (top to bottom) mein.</p>

        <p>Flexbox mein 2 cheezein hoti hain:</p>
        <ol className="styled-list">
          <li><strong>Flex Container:</strong> Parent element (Jispe display: flex; lagta hai)</li>
          <li><strong>Flex Items:</strong> Container ke direct bachhe (Children)</li>
        </ol>

        <h3>1. Initiating Flexbox & Flex Direction</h3>
        <CodeBlock>{`.container {
  display: flex; /* Isko lagate hi saare children default row mein aa jayenge */
  
  /* flex-direction control karta hai axis:
     row (default) -> left se right
     row-reverse   -> right se left
     column        -> top se bottom
     column-reverse-> bottom se top
  */
  flex-direction: row; 
}`}</CodeBlock>

        <h3>2. Justify Content (Main Axis Alignment)</h3>
        <p>Agar direction row hai, toh justify-content elements ko horizontally align karega. Agar direction column hai, toh vertically align karega.</p>
        <ul className="styled-list">
          <li><code>flex-start</code>: Start mein ikattha hona.</li>
          <li><code>flex-end</code>: End mein ikattha hona.</li>
          <li><code>center</code>: Center mein aana.</li>
          <li><code>space-between</code>: Pehla start mein, aakhri end mein, baki beech mein equal space.</li>
          <li><code>space-around</code>: Har element ke left-right equal space.</li>
          <li><code>space-evenly</code>: Har element ke beech equal space.</li>
        </ul>
        <CodeBlock>{`.navbar {
  display: flex;
  justify-content: space-between; /* Logo left me, links right me */
}`}</CodeBlock>

        <h3>3. Align Items (Cross Axis Alignment)</h3>
        <p>Agar justify-content horizontal (X-axis) align karta hai (row ke case me), toh align-items vertical (Y-axis) align karta hai.</p>
        <ul className="styled-list">
          <li><code>flex-start</code>: Top pe align.</li>
          <li><code>flex-end</code>: Bottom pe align.</li>
          <li><code>center</code>: Center vertically.</li>
          <li><code>stretch</code> (default): Pure container ki height le lenge.</li>
        </ul>

        <h3>4. Flex Wrap & Gap</h3>
        <p>Agar elements screen se bahar jaa rahe hain, toh wo shrink hote jayenge. Agar aap chahte ho ki jagah na bachne par wo nayi line pe aa jayen, toh <code>flex-wrap</code> use karein.</p>
        <CodeBlock>{`.grid-like-container {
  display: flex;
  flex-wrap: wrap; /* nowrap (default), wrap, wrap-reverse */
  gap: 20px; /* Items ke beech vertical aur horizontal gap lagata hai */
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task: The Ultimate Centering Trick</h4>
          <p>Task: CSS Flexbox use karke ek Box ko screen ke exactly beech o beech (horizontally aur vertically dono) center karke dikhao. Hint: Isme sirf 3 properties use hongi parent container par.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-flexbox-items',
    title: '17. Flexbox Items (Part 2)',
    content: (
      <div>
        <h2>Flexbox Items (Child Elements)</h2>
        <p>Ab hum un properties ki baat karenge jo Container par nahi, balki uske andar maujood <strong>Child Elements (Items)</strong> par lagai jati hain.</p>

        <h3>1. Order (Re-arranging elements)</h3>
        <p>Aap bina HTML change kiye CSS se elements ka order badal sakte ho! Default order 0 hota hai.</p>
        <CodeBlock>{`.item-first {
  order: -1; /* Yeh element sabse pehle aayega */
}
.item-last {
  order: 99; /* Yeh sabse last mein aayega */
}`}</CodeBlock>

        <h3>2. Flex Grow</h3>
        <p>Agar container mein khaali jagah bachi hai, toh kaunsa item us jagah ko cover karega? <code>flex-grow</code> isko handle karta hai. Default value 0 hai.</p>
        <CodeBlock>{`.search-bar {
  flex-grow: 1; /* Saari available width yeh le lega */
}`}</CodeBlock>

        <h3>3. Flex Shrink</h3>
        <p>Jab container chhota ho jata hai, toh kaunsa item pehle shrink hoga? Default value 1 hai (sab shrink hote hain).</p>
        <CodeBlock>{`.logo {
  flex-shrink: 0; /* Is element ko kabhi shrink hone mat dena, chahe screen kitni bhi chhoti ho jaye */
}`}</CodeBlock>

        <h3>4. Flex Basis</h3>
        <p>Item ki starting width (agar row hai) ya height (agar column hai) decide karta hai (flex-grow ya shrink hone se pehle).</p>
        <CodeBlock>{`.sidebar {
  flex-basis: 250px;
}`}</CodeBlock>

        <h3>5. Flex Shorthand</h3>
        <p>Grow, Shrink aur Basis ko ek hi line mein likhna recommended hai.</p>
        <CodeBlock>{`.item {
  /* flex-grow | flex-shrink | flex-basis */
  flex: 1 0 200px;
}`}</CodeBlock>

        <h3>6. Align Self</h3>
        <p>Agar pure container mein <code>align-items: center;</code> hai, lekin aap kisi EK item ko alag align karna chahte ho (jaise flex-end), toh <code>align-self</code> use karo.</p>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek search navbar banao jisme left mein 'Logo', beech mein 'Search Input', aur right mein 'Login Button' ho. Flex-grow property ka use karke sirf search input ko center ki bachi hui saari jagah fill karne ke liye kaho.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-grid-container',
    title: '18. CSS Grid Layout (Container)',
    content: (
      <div>
        <h2>CSS Grid: Two-Dimensional Layout</h2>
        <p>Flexbox ek line mein kaam karta hai (row ya column). CSS Grid dono taraf (rows AND columns) ek sath kaam karta hai. Complex layouts, dashboards, aur photo galleries banane ke liye Grid best hai.</p>

        <h3>1. Initiating Grid & Defining Rows/Cols</h3>
        <CodeBlock>{`.grid-container {
  display: grid;
  
  /* 3 columns banata hai: pehla 200px, dusra 1fr, teesra 20% */
  grid-template-columns: 200px 1fr 20%;
  
  /* 2 rows banata hai: pehli 100px, dusri auto (content ke hisab se) */
  grid-template-rows: 100px auto;
  
  gap: 20px; /* Columns aur rows ke beech ki spacing */
}`}</CodeBlock>
        <p className="info-box"><strong>Magic Unit (fr):</strong> <code>fr</code> (fraction) Grid ka best feature hai. Yeh available space ka fraction represent karta hai. <code>1fr 1fr 1fr</code> ka matlab hai screen ko 3 barabar hisson mein baantna.</p>

        <h3>2. The repeat() Function</h3>
        <p>Bar-bar value likhne se bachne ke liye:</p>
        <CodeBlock>{`.grid-container {
  /* Dono ka result same hai: 4 equal columns */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
}`}</CodeBlock>

        <h3>3. The Ultimate Responsive Grid (No Media Queries Required!)</h3>
        <p>Yeh CSS ka sabse powerful trick hai responsive grids banane ke liye.</p>
        <CodeBlock>{`.card-grid {
  display: grid;
  gap: 1.5rem;
  /* Min width 250px hogi, agar jagah bachi toh 1fr ho jayegi (barabar baant lega) */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}`}</CodeBlock>

        <h3>4. Grid Template Areas (Visual Layout)</h3>
        <p>Aap apne CSS code mein hi layout ka naksha (map) bana sakte ho!</p>
        <CodeBlock>{`.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr 40px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}`}</CodeBlock>
        <p>Isko use karne ke liye child elements ko unka area assign karna padta hai (Agla chapter dekho).</p>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: <code>repeat(auto-fit, minmax(300px, 1fr))</code> ka use karke ek 6 cards wali grid banao. Browser window resize karke dekho ki kaise bina media queries ke items aage-peeche adjust hote hain.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-grid-items',
    title: '19. CSS Grid Items',
    content: (
      <div>
        <h2>CSS Grid Items</h2>
        <p>Container ne layout toh bana diya, ab Grid Items ko us layout mein kaise set aur span (failana) karna hai, wo dekhte hain.</p>

        <h3>1. Columns & Rows mein Span karna</h3>
        <p>Aap ek element ko multiple columns ya rows pe stretch kar sakte ho grid lines ka use karke. (Grid lines 1 se start hoti hain, 0 se nahi).</p>
        <CodeBlock>{`.item-wide {
  grid-column-start: 1;
  grid-column-end: 3;
  /* Ya shorthand: grid-column: 1 / 3; */
  /* Iska matlab hai element pehli line se shuru hoga aur teesri line tak jayega (yani 2 columns cover karega) */
}

.item-tall {
  grid-row: 2 / 4; /* Row line 2 se 4 tak span karega */
}`}</CodeBlock>

        <h3>2. Span Keyword</h3>
        <p>Agar aapko line numbers calculate nahi karne, toh seedha <code>span</code> use kar lo.</p>
        <CodeBlock>{`.hero-item {
  grid-column: span 2; /* 2 columns ko combine kar lega, jahan bhi ho */
  grid-row: span 3;    /* 3 rows ki height le lega */
}`}</CodeBlock>

        <h3>3. Grid Area (Assigning to named areas)</h3>
        <p>Pichle chapter mein jo humne <code>grid-template-areas</code> se naksha banaya tha, use yahan implement karenge.</p>
        <CodeBlock>{`.header-section {
  grid-area: header; /* Is div ko nakshay ka 'header' wala hissa de diya */
}
.sidebar-section {
  grid-area: sidebar;
}
.main-content {
  grid-area: main;
}`}</CodeBlock>

        <h3>4. Justify & Align Self in Grid</h3>
        <p>Grid items ko cell ke andar align karne ke liye.</p>
        <CodeBlock>{`.small-item-in-big-cell {
  justify-self: center; /* Horizontally center */
  align-self: end;      /* Vertically bottom pe chipka do */
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Grid Areas ka use karke ek basic website layout banao jisme ek Header, Left Sidebar, Main Content area, aur ek Footer ho. CSS me properly map design karo.</p>
        </div>
      </div>
    )
  },
  {
    id: 'responsive-media',
    title: '20. Responsive Design & Media Queries',
    content: (
      <div>
        <h2>Making Websites Mobile-Friendly</h2>
        <p>Aaj kal 60%+ web traffic mobile se aata hai. Agar aapki site mobile par achhi nahi dikhti, toh wo fail hai. <strong>Media Queries</strong> ka use karke hum screen size ke hisab se CSS badal sakte hain.</p>

        <h3>1. Viewport Meta Tag (Crucial Step 1)</h3>
        <p>Sabse pehle, HTML ki <code>&lt;head&gt;</code> file mein yeh tag hona zaroori hai, warna mobile browsers website ko desktop ki tarah zoom out kar denge.</p>
        <CodeBlock lang="html">{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</CodeBlock>

        <h3>2. Basic Media Query Syntax</h3>
        <p>Media query ek condition lagati hai. "Agar screen ki width 768px ya usse kam hai, toh yeh CSS apply karo."</p>
        <CodeBlock>{`/* Default Desktop Styles */
.container {
  display: flex;
  flex-direction: row;
}

/* Jab screen 768px ya choti ho (Mobile/Tablet) */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column; /* Mobile pe stack kar do */
  }
}`}</CodeBlock>

        <h3>3. Mobile First vs Desktop First</h3>
        <p><strong>Mobile First Approach (Recommended):</strong> Pehle base CSS mein mobile ki styling likho. Fir Media Query laga kar bachi hui properties desktop ke liye likho. (Isme <code>min-width</code> use hota hai).</p>
        <CodeBlock>{`/* Default for Mobile */
.sidebar {
  display: none; /* Mobile par sidebar hide kardo */
}

/* Tablet aur Desktop (768px aur usse bada) */
@media (min-width: 768px) {
  .sidebar {
    display: block; /* Badi screen par dikha do */
    width: 250px;
  }
}`}</CodeBlock>

        <h3>4. Common Breakpoints</h3>
        <p>Standard screen sizes jahan layout badla jata hai:</p>
        <ul className="styled-list">
          <li><code>576px</code>: Small phones</li>
          <li><code>768px</code>: Tablets (iPad)</li>
          <li><code>992px</code>: Laptops</li>
          <li><code>1200px</code>: Large Desktop Screens</li>
        </ul>

        <h3>5. Other Media Features</h3>
        <p>Aap sirf width nahi, balki device ke aur features bhi check kar sakte ho.</p>
        <CodeBlock>{`/* Jab user apne phone/OS me Dark Mode chalayega */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #ffffff;
  }
}

/* Jab phone Landscape mode mein ho */
@media (orientation: landscape) {
  .navbar {
    padding: 5px 20px;
  }
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek Flexbox navigation menu banao jisme logo left par ho aur 3 links right par. Mobile First approach use karte hue default styling mein use ek column list (upar-niche) banao, aur <code>min-width: 768px</code> ki media query me usse ek single row (left-right) me convert kardo.</p>
        </div>
      </div>
    )
  }
];

export default chapters;
