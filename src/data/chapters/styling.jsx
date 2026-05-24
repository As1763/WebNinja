import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const chapters = [
  {
    id: 'css-text',
    title: '6. CSS Text Formatting',
    content: (
      <div>
        <h2>CSS Text Formatting</h2>
        <p>Text ko style karne ke liye CSS me bahut si properties hoti hain.</p>

        <h3>Text Color</h3>
        <p>Text ka color change karne ke liye <code>color</code> property use hoti hai:</p>
        <CodeBlock>{`body {
  color: blue;
}`}</CodeBlock>

        <h3>Text Alignment</h3>
        <p>Text ko left, right ya center karne ke liye <code>text-align</code> use hota hai:</p>
        <CodeBlock>{`h1 {
  text-align: center;
}
p {
  text-align: right;
}`}</CodeBlock>

        <h3>Text Decoration</h3>
        <p>Text ke niche underline lagane ya hatane ke liye (jaise link se underline hatana):</p>
        <CodeBlock>{`a {
  text-decoration: none; /* Link se underline hatayein */
}
h2 {
  text-decoration: underline; /* Heading ke niche line */
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek paragraph banayein aur CSS se usko center align karein aur uske text ko underline karein.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-fonts',
    title: '7. CSS Fonts',
    content: (
      <div>
        <h2>CSS Fonts</h2>
        <p>Text ka font (style) badalna bohot zaroori hai ek achhi website ke liye.</p>

        <h3>Font Family</h3>
        <p><code>font-family</code> property se aap text ka font badal sakte hain. Hamesha do-teen font likhne chahiye, taaki agar pehla kaam na kare to dusra chal jaye.</p>
        <CodeBlock>{`p {
  font-family: "Times New Roman", Times, serif;
}`}</CodeBlock>

        <h3>Font Size</h3>
        <p>Text kitna bada ya chhota dikhega, ye <code>font-size</code> se set hota hai:</p>
        <CodeBlock>{`h1 {
  font-size: 40px;
}
p {
  font-size: 16px;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Apne kisi bhi text par "Arial" font lagayein aur uska font-size 25px set karein.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-links',
    title: '8. CSS Links',
    content: (
      <div>
        <h2>CSS Links</h2>
        <p>Links (hyperlinks) ko alag-alag states me style kiya ja sakta hai.</p>

        <h3>Link States</h3>
        <ul className="styled-list">
          <li><code>a:link</code> - Normal, unvisited link</li>
          <li><code>a:visited</code> - Jo link user dekh chuka hai</li>
          <li><code>a:hover</code> - Jab user link par mouse le jaye</li>
          <li><code>a:active</code> - Jis second link click ho raha ho</li>
        </ul>

        <h3>Example</h3>
        <CodeBlock>{`/* unvisited link */
a:link {
  color: red;
}

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: hotpink;
  text-decoration: underline;
}

/* selected link */
a:active {
  color: blue;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek HTML link (a tag) banayein. Us par hover karne (mouse le jane) par uska color orange ho jaye, aisa CSS rule likhein.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-lists',
    title: '9. CSS Lists',
    content: (
      <div>
        <h2>CSS Lists</h2>
        <p>HTML lists (UL and OL) ke bullet points ko change karna aasan hai.</p>

        <h3>List Item Markers</h3>
        <p><code>list-style-type</code> property se aap bullet ki jagah square, numbers, ya circle laga sakte hain:</p>
        <CodeBlock>{`ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman; /* I, II, III */
}`}</CodeBlock>

        <h3>Remove Bullets</h3>
        <p>Agar aapko list se bullets hatani hain to:</p>
        <CodeBlock>{`ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek Unordered List (ul) banayein aur uske bullet points ko 'square' shape me badlein.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-tables',
    title: '10. CSS Tables',
    content: (
      <div>
        <h2>CSS Tables</h2>
        <p>Tables ko CSS se sundar banaya ja sakta hai.</p>

        <h3>Table Borders</h3>
        <p>Table me borders lagane ke liye <code>border</code> property use karein:</p>
        <CodeBlock>{`table, th, td {
  border: 1px solid black;
}`}</CodeBlock>

        <h3>Collapse Borders</h3>
        <p>Default table me double borders aate hain. Unhe single line me merge karne ke liye <code>border-collapse</code> use karein:</p>
        <CodeBlock>{`table {
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid black;
}`}</CodeBlock>

        <h3>Table Padding</h3>
        <p>Text aur border ke beech jagah (space) banane ke liye <code>padding</code> dein:</p>
        <CodeBlock>{`th, td {
  padding: 15px;
  text-align: left;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek choti table banayein jisme Names aur Ages ho. Us table ke <code>th</code> aur <code>td</code> me 1px solid blue border lagayein aur <code>border-collapse: collapse;</code> add karein.</p>
        </div>
      </div>
    )
  }
];

export default chapters;
