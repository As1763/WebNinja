import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const chapters = [
  {
    id: 'css-align',
    title: '16. CSS Align (Center Karna)',
    content: (
      <div>
        <h2>CSS Align (Center Karna)</h2>
        <p>CSS me kisi element ya text ko center karna sabse common task hota hai.</p>

        <h3>Center Align Text</h3>
        <p>Text ko center karne ke liye:</p>
        <CodeBlock>{`h1 {
  text-align: center;
}`}</CodeBlock>

        <h3>Center Align a Block Element</h3>
        <p>Agar aapko poore ek box (div) ko page ke center me lana hai, to usko koi width dein aur <code>margin: auto;</code> lagayein:</p>
        <CodeBlock>{`.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}`}</CodeBlock>

        <h3>Center an Image</h3>
        <p>Images ko center karne ke liye pehle unhe block element banana padta hai:</p>
        <CodeBlock>{`img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek div banayein (width: 300px, background: red) aur usko screen ke center me <code>margin: auto;</code> ka use karke set karein.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-flexbox',
    title: '17. CSS Flexbox (Simple)',
    content: (
      <div>
        <h2>CSS Flexbox</h2>
        <p>Flexbox se elements ko ek line me arrange karna aur space batna bohot asan ho jata hai.</p>

        <h3>Flex Container Banana</h3>
        <p>Sabse pehle parent div par <code>display: flex;</code> lagayein. Isse uske saare child elements ek horizontal line me aa jayenge.</p>
        <CodeBlock>{`.flex-container {
  display: flex;
  background-color: DodgerBlue;
}`}</CodeBlock>

        <h3>Justify Content (Space Dena)</h3>
        <p>Items ke beech me space dene ke liye:</p>
        <CodeBlock>{`.flex-container {
  display: flex;
  justify-content: center; /* Items ko center me lata hai */
}
/* options: flex-start, flex-end, space-between, space-around */`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek <code>div</code> (container) banayein aur uske andar 3 chhote divs banayein. Parent ko <code>display: flex;</code> aur <code>justify-content: space-between;</code> dekar dekhein.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-forms',
    title: '18. CSS Forms',
    content: (
      <div>
        <h2>CSS Styling Forms</h2>
        <p>Forms (Inputs aur Buttons) ko CSS se beautiful banaya ja sakta hai.</p>

        <h3>Styling Input Fields</h3>
        <p>Input field ka width, padding, aur border change karein:</p>
        <CodeBlock>{`input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid red;
  border-radius: 4px;
}`}</CodeBlock>

        <h3>Input pe Click karne (Focus) par</h3>
        <p>Jab user input box par click karta hai, to usko highlight karne ke liye <code>:focus</code> use hota hai:</p>
        <CodeBlock>{`input[type=text]:focus {
  background-color: lightblue;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek text input banayein aur CSS se uski width 50% karein. Focus hone par uska background color yellow karein.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-buttons',
    title: '19. CSS Buttons',
    content: (
      <div>
        <h2>CSS Buttons</h2>
        <p>Buttons ko CSS se attractive banana kaafi easy hai.</p>

        <h3>Basic Button Style</h3>
        <CodeBlock>{`.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  border-radius: 8px; /* Rounded corners */
}`}</CodeBlock>

        <h3>Hover Effect on Button</h3>
        <p>Jab mouse button par aaye to kya ho:</p>
        <CodeBlock>{`.button:hover {
  background-color: #3e8e41; /* Darker green */
  cursor: pointer; /* Hand symbol */
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek button banayein jiska background blue ho aur text white ho. Hover karne par uska background red ho jaye.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-shadows',
    title: '20. CSS Shadows',
    content: (
      <div>
        <h2>CSS Shadows</h2>
        <p>Aap elements ko CSS se parchhai (shadow) de sakte hain.</p>

        <h3>Text Shadow</h3>
        <p>Text ke pichhe shadow banane ke liye:</p>
        <CodeBlock>{`h1 {
  /* horizontal shadow, vertical shadow, color */
  text-shadow: 2px 2px red;
}`}</CodeBlock>

        <h3>Box Shadow</h3>
        <p>Kisi bhi box (div, image) ke pichhe shadow banane ke liye:</p>
        <CodeBlock>{`div {
  /* horizontal, vertical, blur effect, color */
  box-shadow: 10px 10px 5px grey;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek card (div) banayein aur use ek light grey box-shadow dein taaki wo page se upar utha hua lage.</p>
        </div>
      </div>
    )
  }
];

export default chapters;
