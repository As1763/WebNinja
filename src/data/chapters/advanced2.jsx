import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const chapters = [
  {
    id: 'css-filters',
    title: '28. CSS Filters & Backdrop-filter',
    content: (
      <div>
        <h2>CSS Filters (Photoshop in CSS)</h2>
        <p>Aap images, backgrounds, ya kisi bhi element par CSS Filters ka use karke visual effects (jaise blur, brightness, contrast) apply kar sakte hain, bilkul photo editing apps ki tarah.</p>

        <h3>1. The filter Property</h3>
        <p>Isko seedha kisi element (mostly images) par lagaya jata hai.</p>
        <ul className="styled-list">
          <li><code>blur(px)</code>: Dhundhla karna.</li>
          <li><code>brightness(%)</code>: Lightness adjust karna (100% normal, 0% completely black, 200% double bright).</li>
          <li><code>contrast(%)</code>: Colors ka difference badhana/ghatana.</li>
          <li><code>grayscale(%)</code>: Black & White banana (100% means pure black and white).</li>
          <li><code>invert(%)</code>: Colors ulte kar dena (Dark mode banane ke liye kaam aata hai).</li>
          <li><code>drop-shadow(...)</code>: Yeh transparent images (jaise PNG logos) ki shape ke hisab se shadow deta hai (box-shadow rectangular shadow deta hai).</li>
        </ul>
        <CodeBlock>{`.profile-img {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

/* Hover karne par image wapas color me aa jayegi */
.profile-img:hover {
  filter: grayscale(0%);
}`}</CodeBlock>

        <h3>2. backdrop-filter (Glassmorphism Effect)</h3>
        <p>Yeh modern web design ka sabse popular effect hai - <strong>Glassmorphism</strong> (Frosted Glass Effect). Yeh element ke <em>peeche</em> jo content hota hai, uspar filter lagata hai.</p>
        <p className="info-box"><strong>Rule:</strong> Isey kaam karne ke liye element ka background color thoda transparent (RGBA/HSLA) hona zaroori hai!</p>
        <CodeBlock>{`.glass-card {
  /* Semi-transparent background */
  background-color: rgba(255, 255, 255, 0.1);
  
  /* Peeche ke content ko blur kar deta hai */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  
  /* Glass jaisa edge */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek div lo usme koi internet se image background lagao. Us div ke andar ek h2 title rakho. Us title ka background semi transparent white <code>rgba(255,255,255,0.3)</code> do aur uspe <code>backdrop-filter: blur(5px)</code> lagao. Ek perfect glass header ban jayega!</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-pseudo-classes-advanced',
    title: '29. Advanced Pseudo-classes (:has, :is)',
    content: (
      <div>
        <h2>Modern Pseudo-classes: The Game Changers</h2>
        <p>CSS mein kuch nayi pseudo-classes aayi hain jinhone web development ko hamesha ke liye badal diya hai, khaaskar JavaScript ka use kam karke.</p>

        <h3>1. :is() aur :where()</h3>
        <p>Ye classes selectors ko group karne aur specificity ko manage karne me madad karti hain.</p>
        <CodeBlock>{`/* Puraana tareeka (Repetitive) */
header h1, header h2, header h3,
footer h1, footer h2, footer h3 {
  color: blue;
}

/* Naya tareeka :is() ke sath */
:is(header, footer) :is(h1, h2, h3) {
  color: blue;
}`}</CodeBlock>
        <p><strong>Farq:</strong> <code>:is()</code> ke andar sabse strong selector ki specificity li jati hai. Jabki <code>:where()</code> ki specificity hamesha <strong>0</strong> hoti hai (jo override karne me asan hota hai).</p>

        <h3>2. :has() (The Parent Selector!) 🌟</h3>
        <p>CSS developers saalo se mang rahe the ki "Kya mai parent ko style kar sakta hu agar child ke pas koi specific class ho?". <code>:has()</code> wahi karta hai!</p>
        <CodeBlock>{`/* Agar card ke andar koi aisi image hai, toh CARD ko border do */
.card:has(img) {
  border: 2px solid green;
}

/* Agar form ke andar input:invalid (galat input) hai, toh FORM ka background red kardo */
form:has(input:invalid) {
  background-color: #ffe6e6;
}`}</CodeBlock>
        <p className="info-box"><code>:has()</code> Javascript ki kaafi zarurat khatam kar deta hai kyunki ab CSS element ke andar jhank kar check kar sakti hai ki usme kya hai!</p>

        <h3>3. :focus-within</h3>
        <p>Agar kisi container ke andar koi input field focus mein hai, toh parent container ko style karne ke liye.</p>
        <CodeBlock>{`.search-container {
  border: 1px solid gray;
}
.search-container:focus-within {
  /* Jab andar input click hoga, puri container ki border highlight hogi */
  border-color: blue;
  box-shadow: 0 0 5px blue;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>Task: Ek <code>.card</code> div banao jisme ek checkbox aur ek paragraph ho. <code>:has()</code> selector ka use karke rule likho ki jab checkbox checked ho (<code>input:checked</code>), toh us card ka background color green ho jaye.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-best-practices',
    title: '30. CSS Architecture & Best Practices',
    content: (
      <div>
        <h2>CSS Architecture: Likhne ka Sahi Tareeka</h2>
        <p>CSS seekhna aasan hai, lekin bade projects me CSS ko sambhalna (maintain karna) sabse mushkil kaam hai. Agar code properly organize na ho toh ek jagah ka design doosri jagah ka layout tod deta hai.</p>

        <h3>1. BEM Methodology (Block Element Modifier)</h3>
        <p>CSS classes ka naam rakhne ka sabse famous standard BEM hai. Ye components ko isolate rakhta hai.</p>
        <ul className="styled-list">
          <li><strong>Block:</strong> Main component ka naam (e.g., <code>.card</code>)</li>
          <li><strong>Element:</strong> Block ka andar ka hissa. <code>__</code> (double underscore) se jodte hain (e.g., <code>.card__title</code>, <code>.card__image</code>)</li>
          <li><strong>Modifier:</strong> Block ya element ka state/variation. <code>--</code> (double dash) se jodte hain (e.g., <code>.card--dark</code>, <code>.card__title--large</code>)</li>
        </ul>
        <CodeBlock lang="html">{`<!-- BEM ka practical example -->
<div class="button button--primary">
  <span class="button__icon">🔥</span>
  <span class="button__text">Click Me</span>
</div>`}</CodeBlock>
        <CodeBlock>{`.button { padding: 10px; }
.button--primary { background: blue; color: white; }
.button__icon { margin-right: 5px; }`}</CodeBlock>
        <p>BEM ka faida ye hai ki specificty hamesha low aur flat rehti hai (hamesha 1 class level), isliye CSS overrides ka dar nahi rehta.</p>

        <h3>2. Avoid Deep Nesting</h3>
        <p>CSS (aur SASS) me selectors ko lamba nahi karna chahiye. Isse specificity bahut high ho jati hai, aur browser dhima ho jata hai.</p>
        <CodeBlock>{`/* BAD PRACTICE (Kharab tareeka) */
.header nav ul li a.active {
  color: red;
}

/* GOOD PRACTICE (Sahi tareeka) */
.nav__link--active {
  color: red;
}`}</CodeBlock>

        <h3>3. Utility-First Approach (Tailwind Philosophy)</h3>
        <p>Aaj kal utility classes ka use bahut hota hai. Isme hum ek kaam karne wali chhote-chhote classes banate hain.</p>
        <CodeBlock>{`.mt-2 { margin-top: 0.5rem; }
.flex { display: flex; }
.text-center { text-align: center; }`}</CodeBlock>
        <p>In classes ko direct HTML me combine karte hain, jiski wajah se CSS file size nahi badhta.</p>

        <h3>4. File Organization (The 7-1 Pattern)</h3>
        <p>Bade projects me sara CSS ek <code>style.css</code> me nahi dalte. Use alag files me todte hain:</p>
        <ul className="styled-list">
          <li><code>_variables.css</code> (Colors, fonts)</li>
          <li><code>_reset.css</code> (Default browser style hatane ke liye)</li>
          <li><code>_typography.css</code> (Headings, p tags)</li>
          <li><code>_components.css</code> (Cards, buttons, navbars)</li>
          <li><code>main.css</code> (In sabko import karti hai)</li>
        </ul>

        <div className="task-box">
          <h4>👨‍💻 Final Task: BEM Implementation</h4>
          <p>Task: BEM naming convention ka use karke ek <code>product</code> card ka HTML aur CSS likho. Usme block (product), elements (image, details, price) aur modifier (sale - background color change karne ke liye) hone chahiye.</p>
        </div>
      </div>
    )
  }
];

export default chapters;
