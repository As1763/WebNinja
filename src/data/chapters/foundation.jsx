import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const chapters = [
  {
    id: 'css-introduction',
    title: '1. CSS Kya Hai? (W3Schools Style)',
    content: (
      <div>
        <h2>CSS Introduction</h2>
        <p>CSS ka full form <strong>Cascading Style Sheets</strong> hai.</p>
        <p>CSS use hota hai HTML elements ko style karne (sajane) ke liye. HTML se hum ghar ki eent (bricks) rakhte hain, aur CSS se uspe paint karte hain.</p>

        <h3>Basic Example</h3>
        <p>Neeche dekhiye ek simple CSS ka example:</p>
        <CodeBlock>{`body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}`}</CodeBlock>

        <h3>CSS Kaise Add Karein?</h3>
        <p>CSS ko HTML me add karne ke 3 tarike hain:</p>
        <ul className="styled-list">
          <li><strong>External CSS:</strong> Ek alag <code>.css</code> file banakar (Sabse best tarika).</li>
          <li><strong>Internal CSS:</strong> HTML ke <code>&lt;head&gt;</code> me <code>&lt;style&gt;</code> tag lagakar.</li>
          <li><strong>Inline CSS:</strong> Seedha kisi HTML tag ke andar <code>style=""</code> likhkar.</li>
        </ul>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>
            Apne VS Code me ek index.html file banayein aur ek h1 heading add karein. Internal CSS ka use karke us h1 ka color "red" aur background-color "black" set karein.
          </p>
        </div>
      </div>
    )
  },

  {
    id: 'css-selectors-basic',
    title: '2. CSS Selectors (Simple)',
    content: (
      <div>
        <h2>CSS Selectors</h2>
        <p>CSS selectors ka use hota hai un HTML elements ko dhundhne ke liye jinhe aap design karna chahte hain.</p>

        <h3>1. The Element Selector</h3>
        <p>Ye kisi tag ke naam se elements select karta hai. Jaise saare <code>&lt;p&gt;</code> tags:</p>
        <CodeBlock>{`p {
  text-align: center;
  color: red;
}`}</CodeBlock>

        <h3>2. The Id Selector</h3>
        <p>Id selector kisi ek unique element ko select karta hai. Iske liye <code>#</code> character ka use hota hai:</p>
        <CodeBlock>{`#para1 {
  text-align: center;
  color: red;
}`}</CodeBlock>

        <h3>3. The Class Selector</h3>
        <p>Class selector ek group of elements ko select karta hai. Iske liye ek dot <code>.</code> character ka use hota hai:</p>
        <CodeBlock>{`.center {
  text-align: center;
  color: red;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>HTML me 3 paragraphs banayein. Pehle ko id="para1" dein aur blue karein. Baki do ko class="highlight" dein aur unka background yellow karein.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-selectors-combinators',
    title: '3. CSS Colors & Backgrounds',
    content: (
      <div>
        <h2>CSS Colors aur Backgrounds</h2>
        
        <h3>CSS Colors</h3>
        <p>CSS me aap colors ko unke naam, HEX code ya RGB se set kar sakte hain.</p>
        <CodeBlock>{`h1 {
  color: Tomato;
}
p {
  color: #ff0000; /* Red in HEX */
}`}</CodeBlock>

        <h3>CSS Background Color</h3>
        <p>Kisi bhi element ka background color aise set hota hai:</p>
        <CodeBlock>{`body {
  background-color: powderblue;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek <code>&lt;div&gt;</code> banayein. Uska background-color "coral" aur text color "white" set karein.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-borders',
    title: '4. CSS Borders',
    content: (
      <div>
        <h2>CSS Borders</h2>
        <p>CSS <code>border</code> property element ke chaaron taraf ek line draw karti hai.</p>

        <h3>Border Style</h3>
        <p>Aapko border lagane ke liye <code>border-style</code> dena zaruri hai (jaise solid, dashed, dotted).</p>
        <CodeBlock>{`p.solid { border-style: solid; }
p.dashed { border-style: dashed; }
p.dotted { border-style: dotted; }`}</CodeBlock>

        <h3>Border Width and Color</h3>
        <p>Aap border ki motaayi (width) aur color bhi badal sakte hain:</p>
        <CodeBlock>{`h1 {
  border-style: solid;
  border-width: 5px;
  border-color: red;
}`}</CodeBlock>

        <h3>Border Shorthand</h3>
        <p>In sab properties ko ek line me bhi likha ja sakta hai:</p>
        <CodeBlock>{`p {
  border: 5px solid red;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek box banayein jisme 3px dashed blue border ho.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-box-model',
    title: '5. The CSS Box Model',
    content: (
      <div>
        <h2>The CSS Box Model</h2>
        <p>HTML ke sabhi elements ek "box" ki tarah hote hain. CSS box model essentially ek box hota hai jo har HTML element ko cover karta hai.</p>
        
        <p>Isme 4 cheezein hoti hain:</p>
        <ul className="styled-list">
          <li><strong>Content:</strong> Text ya image.</li>
          <li><strong>Padding:</strong> Content ke aas paas ki andar ki khali jagah.</li>
          <li><strong>Border:</strong> Padding ke bahar ki line.</li>
          <li><strong>Margin:</strong> Border ke bhi bahar ki khali jagah (dusre element se doori).</li>
        </ul>

        <h3>Example</h3>
        <CodeBlock>{`div {
  width: 300px;
  padding: 50px;
  border: 15px solid green;
  margin: 20px;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek div banayein jisme text likha ho. Us div ko margin 20px, padding 30px aur 5px red border dekar observe karein ki box kaise kaam karta hai.</p>
        </div>
      </div>
    )
  }
];

export default chapters;
