import React from 'react';

export const cssSyllabus = [
  {
    id: 'intro',
    title: '1. Introduction to CSS',
    content: (
      <div>
        <h2>What is CSS?</h2>
        <p>CSS stands for <strong>Cascading Style Sheets</strong>. It describes how HTML elements are to be displayed on screen, paper, or in other media. Think of HTML as the skeleton of a web page, and CSS as the skin and clothes.</p>
        
        <h3>Adding CSS to HTML</h3>
        <p>There are 3 ways to add CSS to HTML:</p>
        <ul className="styled-list">
          <li><strong>Inline:</strong> Using the <code>style</code> attribute inside HTML elements. (Not recommended for large projects).</li>
          <li><strong>Internal:</strong> Using a <code>&lt;style&gt;</code> element in the <code>&lt;head&gt;</code> section.</li>
          <li><strong>External:</strong> Using a <code>&lt;link&gt;</code> element to link to an external CSS file (Highly Recommended).</li>
        </ul>
        
        <h3>CSS Syntax</h3>
        <p>A CSS rule-set consists of a <strong>selector</strong> and a <strong>declaration block</strong>:</p>
        <pre><code>{`selector {
  property: value;
}`}</code></pre>
        <p>Example: Making all headings blue and 24px large.</p>
        <pre><code>{`h1 {
  color: blue;
  font-size: 24px;
}`}</code></pre>

        <div className="task-box">
          <h4>👨‍💻 Mini Task 1: First Styles</h4>
          <p>Create an <code>index.html</code> file. Add an <code>h1</code> tag with your name. Using inline CSS, change the text color to red.</p>
        </div>
      </div>
    )
  },
  {
    id: 'selectors',
    title: '2. Selectors & Specificity',
    content: (
      <div>
        <h2>CSS Selectors</h2>
        <p>Selectors are used to "find" (or select) the HTML elements you want to style.</p>
        
        <h3>Basic Selectors</h3>
        <ul className="styled-list">
          <li><strong>Element Selector:</strong> Selects elements based on element name. e.g., <code>p {`{}`}</code> selects all <code>&lt;p&gt;</code> elements.</li>
          <li><strong>Class Selector:</strong> Selects elements with a specific class attribute. Uses a period (<code>.</code>). e.g., <code>.highlight {`{}`}</code></li>
          <li><strong>ID Selector:</strong> Selects a unique element. Uses a hash (<code>#</code>). e.g., <code>#navbar {`{}`}</code></li>
        </ul>

        <h3>Combinators & Grouping</h3>
        <p>You can group selectors to apply the same style: <code>h1, h2, p {`{ color: red; }`}</code></p>
        <p>Descendant selector (space): <code>div p</code> selects all <code>&lt;p&gt;</code> inside <code>&lt;div&gt;</code>.</p>
        
        <h3>Specificity (The Cascade)</h3>
        <p>What happens if two rules apply to the same element? The more "specific" rule wins.</p>
        <div className="info-box">
          <strong>Hierarchy (Strongest to Weakest):</strong>
          <br/> Inline style &gt; ID &gt; Class &gt; Element
        </div>

        <div className="task-box">
          <h4>👨‍💻 Mini Task 2: Targeting Elements</h4>
          <p>Create a <code>&lt;div class="container"&gt;</code> containing three <code>&lt;p&gt;</code> tags. Give the second paragraph an ID of <code>#special</code>. Write CSS in a separate file to make all paragraphs grey, but make the <code>#special</code> paragraph purple and bold.</p>
        </div>
      </div>
    )
  },
  {
    id: 'box-model',
    title: '3. The Box Model',
    content: (
      <div>
        <h2>The CSS Box Model</h2>
        <p>All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.</p>
        
        <div className="demo-box" style={{ padding: '20px', border: '5px solid #6c2bd9', margin: '20px', background: 'rgba(108, 43, 217, 0.2)' }}>
          <div style={{ background: '#fff', color: '#000', padding: '10px', textAlign: 'center' }}>Content Area</div>
          <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '12px' }}>Margin (Outer) → Border → Padding (Inner) → Content</p>
        </div>

        <h3>Components:</h3>
        <ul className="styled-list">
          <li><strong>Content:</strong> The content of the box, where text and images appear. (<code>width</code> and <code>height</code>)</li>
          <li><strong>Padding:</strong> Clears an area around the content. Padding is transparent.</li>
          <li><strong>Border:</strong> A border that goes around the padding and content.</li>
          <li><strong>Margin:</strong> Clears an area outside the border. The margin is transparent.</li>
        </ul>

        <h3>The Magic Fix: Box-Sizing</h3>
        <p>By default, padding and borders increase the total width of an element. This is annoying! Fix it globally like this:</p>
        <pre><code>{`* {
  box-sizing: border-box;
}`}</code></pre>

        <div className="task-box">
          <h4>👨‍💻 Mini Task 3: Building a Card</h4>
          <p>Create a simple profile card. It should have a width of 300px, a solid border, 20px padding on all sides, and a 50px margin to push it away from the edges of the screen.</p>
        </div>
      </div>
    )
  },
  {
    id: 'typography',
    title: '4. Typography & Text',
    content: (
      <div>
        <h2>Styling Text</h2>
        <p>CSS provides numerous properties to format text beautifully.</p>

        <h3>Core Properties</h3>
        <pre><code>{`p {
  color: #333333;
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  font-weight: 600; /* Boldness: 100 to 900 */
  text-align: center; /* left, right, center, justify */
  line-height: 1.5; /* Spacing between lines */
  letter-spacing: 1px; /* Spacing between characters */
  text-decoration: none; /* Removes underlines from links */
  text-transform: uppercase; /* uppercase, lowercase, capitalize */
}`}</code></pre>

        <h3>Google Fonts</h3>
        <p>You can easily add custom fonts. Go to Google Fonts, select a font, copy the <code>@import</code> or <code>&lt;link&gt;</code> tag, and set the <code>font-family</code> in your CSS.</p>

        <div className="task-box">
          <h4>👨‍💻 Mini Task 4: Beautiful Quotes</h4>
          <p>Import a fancy font from Google Fonts (like 'Playfair Display' or 'Pacifico'). Create a blockquote on your page and style it with this font, make the text large, italic, and center-aligned. Adjust the <code>line-height</code> so it reads comfortably.</p>
        </div>
      </div>
    )
  },
  {
    id: 'layouts-old',
    title: '5. Traditional Layouts (Display & Position)',
    content: (
      <div>
        <h2>Display & Positioning</h2>
        <p>Before Flexbox and Grid, layout was handled mostly with display and position properties.</p>

        <h3>The Display Property</h3>
        <ul className="styled-list">
          <li><code>display: block;</code> - Takes up full width, starts on a new line (e.g., <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>).</li>
          <li><code>display: inline;</code> - Takes only necessary width, does not force new line (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>). Cannot set width/height.</li>
          <li><code>display: inline-block;</code> - Like inline, but you CAN set width and height!</li>
          <li><code>display: none;</code> - Completely hides the element.</li>
        </ul>

        <h3>The Position Property</h3>
        <ul className="styled-list">
          <li><code>static</code> (default) - Elements flow naturally.</li>
          <li><code>relative</code> - Positioned relative to its normal position. Useful for moving slightly with <code>top</code>, <code>left</code>, or containing absolute children.</li>
          <li><code>absolute</code> - Positioned relative to the nearest positioned ancestor. Removes element from normal document flow.</li>
          <li><code>fixed</code> - Positioned relative to the browser window. Stays there when scrolling.</li>
          <li><code>sticky</code> - Toggles between relative and fixed depending on scroll position.</li>
        </ul>

        <div className="task-box">
          <h4>👨‍💻 Mini Task 5: The Sticky Navbar</h4>
          <p>Create a header element with some navigation links. Set its CSS to <code>position: sticky; top: 0;</code>. Add a lot of dummy text below it and scroll down. Watch how the header sticks to the top!</p>
        </div>
      </div>
    )
  },
  {
    id: 'flexbox',
    title: '6. Flexbox (Modern Layout)',
    content: (
      <div>
        <h2>CSS Flexible Box Layout (Flexbox)</h2>
        <p>Flexbox makes it easy to design flexible responsive layout structure without using float or positioning. It's a 1-dimensional layout system (row OR column).</p>

        <h3>The Flex Container</h3>
        <p>To start, apply <code>display: flex;</code> to a parent element.</p>
        <pre><code>{`.container {
  display: flex;
  flex-direction: row; /* row (default), column, row-reverse, column-reverse */
  justify-content: center; /* alignment along the main axis */
  align-items: center; /* alignment along the cross axis */
  flex-wrap: wrap; /* allows items to wrap to next line if no space */
  gap: 20px; /* spacing between items */
}`}</code></pre>

        <h3>Justify Content Options:</h3>
        <p><code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code>.</p>

        <div className="demo-box" style={{ display: 'flex', justifyContent: 'space-between', background: '#222', padding: '10px' }}>
          <div style={{ width: '50px', height: '50px', background: '#6c2bd9' }}></div>
          <div style={{ width: '50px', height: '50px', background: '#6c2bd9' }}></div>
          <div style={{ width: '50px', height: '50px', background: '#6c2bd9' }}></div>
        </div>
        <p style={{textAlign: 'center', fontSize: '12px'}}>Example: <code>justify-content: space-between</code></p>

        <div className="task-box">
          <h4>👨‍💻 Mini Task 6: Flexbox Centering</h4>
          <p>The ultimate CSS trick: Create a container <code>&lt;div&gt;</code> that covers the whole screen height (<code>height: 100vh;</code>). Put a box inside it. Use exactly 3 lines of Flexbox CSS on the container to center the box perfectly horizontally and vertically.</p>
        </div>
      </div>
    )
  },
  {
    id: 'css-grid',
    title: '7. CSS Grid (Advanced Layout)',
    content: (
      <div>
        <h2>CSS Grid Layout</h2>
        <p>While Flexbox is for 1-dimensional layouts, CSS Grid is for 2-dimensional layouts (rows AND columns simultaneously).</p>

        <h3>Defining a Grid</h3>
        <pre><code>{`.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Creates 3 equal columns */
  grid-template-rows: 100px 200px; /* Creates 2 rows with specific heights */
  gap: 15px; /* Spacing between grid cells */
}`}</code></pre>
        <p><em>Note: <code>fr</code> stands for fraction of available space.</em></p>

        <h3>Responsive Grid (Without Media Queries!)</h3>
        <p>This is a magic formula for responsive grids:</p>
        <pre><code>{`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));`}</code></pre>
        <p>This tells the browser: Create as many columns as fit, but none smaller than 250px. If there's extra space, distribute it equally (1fr).</p>

        <div className="task-box">
          <h4>👨‍💻 Mini Task 7: Photo Gallery</h4>
          <p>Create a container with 6 div elements inside (acting as photos). Use CSS Grid to make a gallery that has 3 columns on desktop, and automatically collapses into a single column on mobile screens using the <code>auto-fit</code> and <code>minmax</code> trick.</p>
        </div>
      </div>
    )
  },
  {
    id: 'responsive',
    title: '8. Responsive Design & Media Queries',
    content: (
      <div>
        <h2>Making Websites Mobile-Friendly</h2>
        <p>Responsive web design is about creating web pages that look good on all devices.</p>

        <h3>The Viewport Meta Tag</h3>
        <p>Always include this in your HTML <code>&lt;head&gt;</code>:</p>
        <pre><code>{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}</code></pre>

        <h3>Media Queries</h3>
        <p>Media queries allow you to apply CSS properties only if a certain condition is true (like screen size).</p>
        <pre><code>{`/* Default styles (Mobile First) */
.container {
  flex-direction: column;
}

/* Styles for screens larger than 768px (Tablets & Desktop) */
@media screen and (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}`}</code></pre>

        <h3>Relative Units</h3>
        <ul className="styled-list">
          <li><code>%</code>: Relative to the parent element.</li>
          <li><code>vw</code> & <code>vh</code>: Relative to 1% of the viewport's width or height.</li>
          <li><code>rem</code>: Relative to the root element's font-size (usually 16px). Great for accessibility!</li>
        </ul>

        <div className="task-box">
          <h4>👨‍💻 Mini Task 8: Mobile Menu Swap</h4>
          <p>Create a navigation menu that displays as a vertical list by default. Add a media query so that when the screen is larger than 600px, the menu switches to a horizontal row using Flexbox.</p>
        </div>
      </div>
    )
  },
  {
    id: 'aesthetics',
    title: '9. Aesthetics & Modern UI (Glassmorphism)',
    content: (
      <div>
        <h2>Designing Beautiful UIs</h2>
        <p>Modern web design relies heavily on shadows, rounded corners, and gradients.</p>

        <h3>Essential Properties</h3>
        <pre><code>{`.card {
  border-radius: 16px; /* Rounded corners */
  box-shadow: 0 10px 30px rgba(0,0,0,0.1); /* Soft shadow */
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);
}`}</code></pre>

        <h3>Glassmorphism 🧊</h3>
        <p>Glassmorphism is a popular UI trend featuring frosted glass effects. This portal uses it! Here is the secret recipe:</p>
        <pre><code>{`.glass-panel {
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* The frosted glass blur effect */
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Subtle edge highlight */
  border-radius: 15px;
}`}</code></pre>

        <div className="task-box">
          <h4>👨‍💻 Mini Task 9: The Glass Card</h4>
          <p>Find a colorful background image from the internet. Place a <code>&lt;div&gt;</code> over it. Apply the Glassmorphism CSS recipe above to the div and add some text inside. Tweak the blur and opacity to see how it changes.</p>
        </div>
      </div>
    )
  },
  {
    id: 'animations',
    title: '10. Transitions & Animations',
    content: (
      <div>
        <h2>Adding Life to Your UI</h2>
        
        <h3>Transitions</h3>
        <p>Transitions provide a way to control animation speed when changing CSS properties (usually on hover).</p>
        <pre><code>{`.button {
  background: blue;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
}

.button:hover {
  background: red;
  transform: scale(1.1); /* Grows slightly */
}`}</code></pre>

        <h3>Keyframe Animations</h3>
        <p>For more complex, continuous animations, use <code>@keyframes</code>.</p>
        <pre><code>{`@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

.ball {
  animation: bounce 2s infinite ease-in-out;
}`}</code></pre>

        <div className="task-box">
          <h4>👨‍💻 Mini Task 10: The Loading Spinner</h4>
          <p>Create a small <code>&lt;div&gt;</code> with a circular border (<code>border-radius: 50%</code>) where one border edge is a different color. Use <code>@keyframes</code> with <code>transform: rotate(360deg)</code> to create an infinitely spinning loading animation.</p>
        </div>
      </div>
    )
  },
  {
    id: 'advanced',
    title: '11. CSS Variables & Advanced Tricks',
    content: (
      <div>
        <h2>Pro-Level CSS</h2>

        <h3>CSS Variables (Custom Properties)</h3>
        <p>Variables allow you to store values and reuse them throughout your CSS. This is essential for theming (like Dark Mode).</p>
        <pre><code>{`:root {
  --primary-color: #6c2bd9;
  --text-size: 16px;
}

.heading {
  color: var(--primary-color);
  font-size: calc(var(--text-size) * 2);
}`}</code></pre>

        <h3>calc() Function</h3>
        <p>Perform calculations right inside CSS! Great for mixing units.</p>
        <p><code>width: calc(100% - 50px);</code></p>

        <h3>Advanced Pseudo-classes</h3>
        <ul className="styled-list">
          <li><code>:nth-child(even)</code> - Targets every even element in a list (great for zebra-striping tables).</li>
          <li><code>:not(.active)</code> - Targets all elements that DO NOT have the class 'active'.</li>
        </ul>

        <div className="task-box">
          <h4>👨‍💻 Mini Task 11: Theming System</h4>
          <p>Define two CSS variables in your <code>:root</code> for a background color and text color. Apply them to a webpage. Then, create a <code>.dark-theme</code> class that re-assigns those variables to dark colors. Add the class to your <code>&lt;body&gt;</code> using JavaScript to see a live theme switch!</p>
        </div>
      </div>
    )
  }
];
