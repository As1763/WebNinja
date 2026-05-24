import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const chapters = [
  {
    id: 'css-gradients',
    title: '21. CSS Gradients',
    content: (
      <div>
        <h2>CSS Gradients</h2>
        <p>CSS gradients se aap do ya zyada colors ke beech smooth transition dikha sakte hain. Ye directly <code>background-image</code> property me lagte hain.</p>

        <h3>Linear Gradients</h3>
        <p>Colors ek seedhi line (top-to-bottom, left-to-right) me badalte hain:</p>
        <CodeBlock>{`#grad {
  background-image: linear-gradient(red, yellow);
}`}</CodeBlock>

        <h3>Direction Change Karna</h3>
        <p>Aap left-to-right bhi gradient bana sakte hain:</p>
        <CodeBlock>{`#grad {
  background-image: linear-gradient(to right, red, yellow);
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek box banayein jisme 3 colors hon (red, yellow, blue) aur gradient right side ki taraf (to right) ho.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-transforms',
    title: '22. CSS 2D Transforms',
    content: (
      <div>
        <h2>CSS 2D Transforms</h2>
        <p>Transform property se aap elements ko move, scale, turn ya spin kar sakte hain.</p>

        <h3>The translate() Method</h3>
        <p>Element ko uski jagah se thoda move karne ke liye:</p>
        <CodeBlock>{`div {
  transform: translate(50px, 100px); /* Move 50px right and 100px down */
}`}</CodeBlock>

        <h3>The rotate() Method</h3>
        <p>Element ko kisi angle par ghumane ke liye (jaise ghadi ki suyi ghumti hai):</p>
        <CodeBlock>{`div {
  transform: rotate(20deg); /* Rotate clockwise 20 degrees */
}`}</CodeBlock>

        <h3>The scale() Method</h3>
        <p>Element ka size badhane ya ghatane ke liye:</p>
        <CodeBlock>{`div {
  transform: scale(2); /* Size double kar do */
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek img tag par <code>transform: rotate(-10deg);</code> lagakar dekhein ki wo thoda tilt ho gaya hai.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-transitions',
    title: '23. CSS Transitions',
    content: (
      <div>
        <h2>CSS Transitions</h2>
        <p>Transitions kisi property ki value ko smoothly badalte hain (jaise mouse hover karne par achanak color badalne ki jagah dhire dhire badalna).</p>

        <h3>Transition Kaise Use Karein?</h3>
        <p>Transition ke liye aapko 2 cheezein batani hongi:</p>
        <ul className="styled-list">
          <li>Kaunsi property animate karni hai? (Jaise width, background)</li>
          <li>Kitne time me karni hai? (Jaise 2s matlab 2 seconds)</li>
        </ul>

        <CodeBlock>{`div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s; /* Hover me width badalne par 2 seconds lagao */
}

div:hover {
  width: 300px;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Upar wale code example me background color ko bhi transition karein (Jaise: <code>transition: width 2s, background-color 2s;</code>) aur hover hone par color blue kardein.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-animations',
    title: '24. CSS Animations',
    content: (
      <div>
        <h2>CSS Animations (@keyframes)</h2>
        <p>Animations CSS se elements ko automatically move karne aur color badalne dete hain bina hover kiye.</p>

        <h3>@keyframes Banana</h3>
        <p>Keyframes me hum likhte hain ki animation shuru (0%) me kaisi hogi aur ant (100%) me kaisi hogi.</p>
        <CodeBlock>{`@keyframes example {
  0% { background-color: red; }
  100% { background-color: yellow; }
}`}</CodeBlock>

        <h3>Animation ko Element par lagana</h3>
        <CodeBlock>{`div {
  width: 100px;
  height: 100px;
  background-color: red;
  /* Animation ka naam aur chalne ka time batayein */
  animation-name: example;
  animation-duration: 4s;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek animation banayein jisme element ka width 0% par 100px ho aur 100% par 500px ho jaye.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-media-queries',
    title: '25. CSS Media Queries (Mobile View)',
    content: (
      <div>
        <h2>CSS Media Queries (Responsive Design)</h2>
        <p>Media queries se aap alag-alag screen sizes (mobile, tablet, desktop) ke liye alag CSS likh sakte hain.</p>

        <h3>Example: Change Background Color</h3>
        <p>Agar screen size 600px ya usse chota (mobile phone) hai, to background lightblue ho jaye:</p>
        <CodeBlock>{`body {
  background-color: pink;
}

@media screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}</CodeBlock>

        <h3>Example: Change Layout</h3>
        <p>Badi screen par content side-by-side aur mobile par upar-neeche rakhne ke liye media query sabse best tool hai.</p>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek h1 heading banayein jo desktop pe 50px font size ka ho, lekin mobile (max-width: 600px) aane par uski size 20px ho jaye.</p>
        </div>
      </div>
    )
  }
];

export default chapters;
