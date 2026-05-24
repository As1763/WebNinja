import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const chapters = [
  {
    id: 'css-introduction',
    title: '1. CSS Kya Hai? (Introduction)',
    content: (
      <div>
        <h2>CSS Kya Hai? — Complete Introduction</h2>

        <p>
          Socho tumne ek ghar banaya — walls hain, doors hain, windows hain. Lekin us ghar mein koi paint nahi hai, koi curtain nahi hai, koi decoration nahi hai. Woh ghar functional hai, lekin <strong>beautiful nahi hai</strong>. Yahi cheez hoti hai jab tum sirf HTML likhte ho bina CSS ke. HTML tumhare web page ka <strong>structure</strong> (haddiyan) deta hai, aur CSS usko <strong>style</strong> (khubsurti) deta hai.
        </p>

        <h3>🔤 CSS Ka Full Form Aur Meaning</h3>
        <p>
          CSS ka full form hai <strong>Cascading Style Sheets</strong>. Isko todke samjhte hain:
        </p>
        <ul className="styled-list">
          <li><strong>Cascading:</strong> "Cascade" ka matlab hai <em>waterfall ki tarah upar se neeche aana</em>. CSS mein rules upar se neeche apply hote hain, aur agar ek hi element pe multiple rules lage hain, toh sabse zyada specific rule jeetega. Isko hum baad mein detail mein padhenge.</li>
          <li><strong>Style:</strong> Colors, fonts, spacing, layout — yeh sab "style" hai. CSS se hum decide karte hain ki koi element kaisa dikhega.</li>
          <li><strong>Sheets:</strong> CSS rules ko hum ek alag file (sheet) mein likhte hain, jaise <code>style.css</code>. Yeh file ek "style sheet" hai.</li>
        </ul>

        <h3>❓ CSS Kyun Zaroori Hai?</h3>
        <p>
          Agar CSS nahi hota toh internet pe har website boring, plain, black-and-white text wali dikhti. CSS ke bina koi bhi attractive website banana impossible hai. Chalke dekhte hain HTML aur HTML+CSS ka difference:
        </p>

        <p><strong>Sirf HTML (Bina CSS):</strong></p>
        <CodeBlock lang="html">{`<!DOCTYPE html>
<html>
<head>
  <title>Meri Website</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>Yeh ek simple paragraph hai.</p>
  <button>Click Me</button>
</body>
</html>`}</CodeBlock>
        <p>Yeh page browser mein dikhega — lekin sirf boring default styles ke sath. Heading black hogi, text plain hoga, button bilkul basic dikhega.</p>

        <p><strong>HTML + CSS ke sath:</strong></p>
        <CodeBlock lang="html">{`<!DOCTYPE html>
<html>
<head>
  <title>Meri Website</title>
  <style>
    body {
      background-color: #1a1a2e;
      color: #e0e0e0;
      font-family: 'Segoe UI', sans-serif;
      text-align: center;
      padding: 50px;
    }
    h1 {
      color: #e94560;
      font-size: 48px;
    }
    p {
      font-size: 20px;
      line-height: 1.8;
    }
    button {
      background-color: #e94560;
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 8px;
      font-size: 18px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>Yeh ek simple paragraph hai.</p>
  <button>Click Me</button>
</body>
</html>`}</CodeBlock>
        <p>Ab dekho — <strong>same HTML hai</strong>, lekin CSS lagane ke baad page modern, dark-themed, aur professional dikh raha hai! Yahi CSS ki power hai. 💪</p>

        <div className="info-box">
          <strong>💡 Yaad Rakho:</strong> HTML = Structure (kya dikhana hai), CSS = Presentation (kaise dikhana hai). Dono alag kaam karte hain, lekin sath mein kaam karte hain.
        </div>

        {/* ==================== CSS ke 3 Tarike ==================== */}
        <h3>📝 CSS Likhne Ke 3 Tarike</h3>
        <p>
          CSS ko HTML mein add karne ke teen tarike hain. Har ek ka apna use-case hai. Chalke teeno ko detail mein samjhte hain:
        </p>

        <h4>1. Inline CSS (Style attribute mein)</h4>
        <p>
          Inline CSS mein hum seedha HTML tag ke andar <code>style</code> attribute use karte hain. Yeh sabse simple tarika hai, lekin <strong>sabse bura tarika bhi hai</strong> bade projects ke liye — kyunki har element ka style alag-alag likhna padta hai, aur code bahut messy ho jaata hai.
        </p>
        <CodeBlock lang="html">{`<!-- Inline CSS Example -->
<h1 style="color: red; font-size: 36px;">Hello Duniya!</h1>
<p style="color: blue; background-color: yellow; padding: 10px;">
  Yeh ek styled paragraph hai.
</p>
<button style="background-color: green; color: white; padding: 10px 20px; border: none; border-radius: 5px;">
  Click Karo
</button>`}</CodeBlock>
        <p>
          <strong>Kab use karein:</strong> Sirf quick testing ke liye ya jab ek hi element ko style karna ho. Real projects mein avoid karo.
        </p>
        <p>
          <strong>Problem:</strong> Agar tumhare page mein 50 paragraphs hain aur sabko same color chahiye, toh 50 jagah <code>style="color: blue;"</code> likhna padega. Agar baad mein color change karna ho toh 50 jagah edit karna padega! 😫
        </p>

        <h4>2. Internal CSS (Style tag mein)</h4>
        <p>
          Internal CSS mein hum HTML file ke <code>&lt;head&gt;</code> section mein <code>&lt;style&gt;</code> tag lagaate hain aur usme CSS rules likhte hain. Yeh Inline se behtar hai kyunki ek jagah se poore page ke styles control kar sakte ho.
        </p>
        <CodeBlock lang="html">{`<!DOCTYPE html>
<html>
<head>
  <title>Internal CSS Example</title>
  <style>
    body {
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
    }

    h1 {
      color: #333;
      text-align: center;
      border-bottom: 3px solid #e94560;
      padding-bottom: 10px;
    }

    p {
      color: #555;
      font-size: 18px;
      line-height: 1.6;
      padding: 0 20px;
    }

    .highlight {
      background-color: #fff3cd;
      padding: 10px;
      border-left: 4px solid #ffc107;
    }
  </style>
</head>
<body>
  <h1>CSS Seekho</h1>
  <p>CSS bahut powerful hai.</p>
  <p class="highlight">Yeh highlighted text hai!</p>
</body>
</html>`}</CodeBlock>
        <p>
          <strong>Kab use karein:</strong> Jab tum ek single HTML file mein kaam kar rahe ho, ya quick prototyping kar rahe ho. Chhote projects ke liye theek hai.
        </p>
        <p>
          <strong>Problem:</strong> Agar tumhari website mein 10 pages hain, toh har page ke <code>&lt;head&gt;</code> mein same CSS copy-paste karna padega. Agar kuch change karna ho toh 10 files mein jaake edit karna padega!
        </p>

        <h4>3. External CSS (Alag .css file mein) ⭐ BEST Method</h4>
        <p>
          External CSS mein hum CSS ko ek alag file mein likhte hain (jaise <code>style.css</code>) aur usse HTML file mein <code>&lt;link&gt;</code> tag se connect karte hain. Yeh <strong>sabse professional aur recommended tarika</strong> hai.
        </p>

        <p><strong>HTML File (index.html):</strong></p>
        <CodeBlock lang="html">{`<!DOCTYPE html>
<html>
<head>
  <title>External CSS Example</title>
  <!-- CSS file ko connect karo -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Meri Awesome Website</h1>
  <p>Yeh page external CSS se styled hai.</p>
  <p class="special">Yeh special paragraph hai.</p>
</body>
</html>`}</CodeBlock>

        <p><strong>CSS File (style.css):</strong></p>
        <CodeBlock>{`/* style.css - External CSS file */
body {
  background-color: #0d1117;
  color: #c9d1d9;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 40px;
}

h1 {
  color: #58a6ff;
  font-size: 42px;
  text-align: center;
}

p {
  font-size: 18px;
  line-height: 1.8;
}

.special {
  color: #f0883e;
  font-weight: bold;
  border-left: 4px solid #f0883e;
  padding-left: 15px;
}`}</CodeBlock>

        <div className="info-box">
          <strong>💡 Pro Tip:</strong> Hamesha External CSS use karo real projects mein. Ek <code>style.css</code> file se tum 100 HTML pages ko style kar sakte ho. Agar kuch change karna ho, toh sirf ek file mein edit karna hoga!
        </div>

        <p>
          <strong>Kab use karein:</strong> Hamesha! Har real project mein External CSS hi use hota hai. Yeh clean, maintainable, aur reusable hai.
        </p>

        {/* ==================== CSS Syntax ==================== */}
        <h3>⚙️ CSS Syntax — CSS Kaise Likhte Hain?</h3>
        <p>
          CSS ka syntax bahut simple hai. Har CSS rule ke 3 parts hote hain:
        </p>
        <ul className="styled-list">
          <li><strong>Selector:</strong> Yeh batata hai ki <em>kaunsa HTML element</em> style hoga (jaise <code>h1</code>, <code>.classname</code>, <code>#idname</code>).</li>
          <li><strong>Property:</strong> Yeh batata hai ki <em>kya change karna hai</em> (jaise <code>color</code>, <code>font-size</code>, <code>background</code>).</li>
          <li><strong>Value:</strong> Yeh batata hai ki <em>kaise change karna hai</em> (jaise <code>red</code>, <code>20px</code>, <code>#ff5733</code>).</li>
        </ul>

        <CodeBlock>{`/* CSS Rule ka Structure */
selector {
  property: value;
  property: value;
  property: value;
}`}</CodeBlock>

        <p><strong>Real Example:</strong></p>
        <CodeBlock>{`/* Sab h1 headings ko style karo */
h1 {
  color: #e94560;          /* text color change karo */
  font-size: 36px;         /* font size set karo */
  text-align: center;      /* text ko center mein karo */
  margin-bottom: 20px;     /* neeche spacing do */
}

/* Sab paragraphs ko style karo */
p {
  color: #333333;
  font-size: 16px;
  line-height: 1.6;
}`}</CodeBlock>

        <div className="info-box">
          <strong>⚠️ Important Rules:</strong>
          <br />• Har property ke baad <strong>colon (:)</strong> lagta hai.
          <br />• Har value ke baad <strong>semicolon (;)</strong> lagta hai.
          <br />• Sab declarations <strong>curly braces {"{ }"}</strong> ke andar likhte hain.
          <br />• Agar semicolon bhool jaoge, toh CSS break ho sakta hai!
        </div>

        {/* ==================== Comments ==================== */}
        <h3>💬 CSS Mein Comments Kaise Likhte Hain?</h3>
        <p>
          Comments woh text hota hai jo sirf <strong>developers ke liye</strong> hota hai — browser ise ignore karta hai. Comments se tum apne code mein notes likh sakte ho, jo baad mein code samajhne mein madad karte hain.
        </p>

        <CodeBlock>{`/* Yeh ek single-line comment hai */

/*
  Yeh ek multi-line comment hai.
  Tum isme multiple lines likh sakte ho.
  Browser ise completely ignore karega.
*/

/* ===== Header Styles ===== */
h1 {
  color: navy;
  font-size: 32px;
}

/* TODO: Baad mein responsive banayenge */
p {
  font-size: 16px;
  /* color: red; -- yeh line temporarily disable hai */
  color: green;
}`}</CodeBlock>

        <p>
          <strong>Kab use karein Comments?</strong>
        </p>
        <ul className="styled-list">
          <li>Code ke sections ko organize karne ke liye (jaise <code>{"/* ===== Header ===== */"}</code>)</li>
          <li>Temporarily kisi CSS rule ko disable karne ke liye</li>
          <li>Team members ke liye notes likhne ke liye</li>
          <li>Complex CSS ko explain karne ke liye</li>
        </ul>

        {/* ==================== Cascading ==================== */}
        <h3>🌊 Cascading Ka Matlab — CSS Kaise Kaam Karta Hai?</h3>
        <p>
          "Cascading" CSS ka sabse important concept hai. Jab ek hi element pe multiple CSS rules lage hote hain, toh browser ko decide karna padta hai ki <strong>kaunsa rule apply karna hai</strong>. Yeh decision 3 cheezon se hota hai:
        </p>

        <h4>1. Source Order (Jo Baad Mein Aaye, Woh Jeete)</h4>
        <p>Agar do rules same specificity ke hain, toh jo rule <strong>baad mein (last mein)</strong> likha gaya hai, woh apply hoga:</p>
        <CodeBlock>{`p {
  color: red;    /* Yeh pehle likha hai */
}

p {
  color: blue;   /* Yeh baad mein likha hai - YEH JEETEGA! */
}`}</CodeBlock>
        <p>Result: Paragraph ka color <strong>blue</strong> hoga, kyunki woh rule baad mein aaya hai.</p>

        <h4>2. Specificity (Jo Zyada Specific, Woh Jeete)</h4>
        <p>Zyada specific selector jeetta hai. Specificity ka order hai:</p>
        <CodeBlock>{`/* Specificity: Low to High */

p { color: black; }               /* Element selector - lowest */
.highlight { color: orange; }     /* Class selector - medium */
#main-text { color: purple; }     /* ID selector - highest */

/* Inline style sabse zyada specific hota hai */
/* <p style="color: red;"> */`}</CodeBlock>

        <p>Specificity ka hierarchy:</p>
        <ul className="styled-list">
          <li><strong>Inline styles</strong> — specificity: 1000</li>
          <li><strong>ID selector (#id)</strong> — specificity: 100</li>
          <li><strong>Class selector (.class)</strong> — specificity: 10</li>
          <li><strong>Element selector (tag)</strong> — specificity: 1</li>
        </ul>

        <h4>3. Importance (!important)</h4>
        <p><code>!important</code> lagane se woh rule sab pe haavi ho jaata hai — lekin isko <strong>kabhi bhi use mat karo</strong> jab tak bilkul zaroori na ho, kyunki yeh debugging nightmare create karta hai:</p>
        <CodeBlock>{`p {
  color: red !important;   /* Yeh sab pe jeeteaga */
}

#main-text {
  color: blue;   /* Yeh haar jaayega, even though ID specific hai */
}`}</CodeBlock>

        <div className="info-box">
          <strong>⚠️ Warning:</strong> <code>!important</code> ko avoid karo. Agar tumhe <code>!important</code> use karna pad raha hai, toh tumhare CSS ka structure galat hai. Pehle specificity fix karo.
        </div>

        {/* ==================== Practical Example ==================== */}
        <h3>🎯 Practical Example: Ek Simple Page Ko CSS Se Style Karna</h3>
        <p>Ab sab concepts ko ek sath use karke ek complete example banate hain:</p>

        <p><strong>HTML (index.html):</strong></p>
        <CodeBlock lang="html">{`<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meri Pehli Styled Website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>CSS Seekho 🎨</h1>
    <p class="tagline">Step by step CSS master bano!</p>
  </header>

  <main>
    <section class="intro">
      <h2>CSS Kya Hai?</h2>
      <p>CSS ek styling language hai jo HTML elements ko beautiful banati hai.</p>
      <p class="highlight">Yeh highlight box CSS se bana hai!</p>
    </section>

    <section class="features">
      <h2>CSS Se Kya Kya Kar Sakte Ho?</h2>
      <ul>
        <li>Colors aur fonts change karo</li>
        <li>Layout design karo</li>
        <li>Animations banao</li>
        <li>Responsive websites banao</li>
      </ul>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 CSS Seekho. Made with ❤️</p>
  </footer>
</body>
</html>`}</CodeBlock>

        <p><strong>CSS (style.css):</strong></p>
        <CodeBlock>{`/* ===== Global Reset ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===== Body Styling ===== */
body {
  background-color: #0f0f1a;
  color: #e0e0e0;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  line-height: 1.8;
  padding: 20px;
}

/* ===== Header ===== */
header {
  text-align: center;
  padding: 40px 0;
  border-bottom: 2px solid #333;
  margin-bottom: 30px;
}

header h1 {
  color: #6c5ce7;
  font-size: 48px;
}

.tagline {
  color: #a29bfe;
  font-size: 20px;
  margin-top: 10px;
}

/* ===== Main Content ===== */
section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #1a1a2e;
  border-radius: 10px;
}

h2 {
  color: #fd79a8;
  margin-bottom: 15px;
  font-size: 28px;
}

.highlight {
  background-color: #2d2d44;
  padding: 15px;
  border-left: 4px solid #6c5ce7;
  border-radius: 5px;
  margin-top: 10px;
}

/* ===== List Styling ===== */
ul {
  list-style: none;
  padding-left: 0;
}

ul li {
  padding: 8px 0;
  border-bottom: 1px solid #2d2d44;
}

ul li:last-child {
  border-bottom: none;
}

/* ===== Footer ===== */
footer {
  text-align: center;
  padding: 20px;
  color: #888;
  border-top: 1px solid #333;
  margin-top: 30px;
}`}</CodeBlock>

        <p>
          Is example mein tumne dekha ki kaise ek boring HTML page ko CSS se ek <strong>modern dark-themed website</strong> mein transform kar diya. Har section ko alag style diya, colors lage, spacing add ki, aur borders lagaaye.
        </p>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>
            <strong>Task:</strong> Ek nayi HTML file banao (<code>index.html</code>) aur ek alag CSS file banao (<code>style.css</code>). HTML mein apna naam, apni hobby, aur apna favourite quote likho. CSS file mein:
          </p>
          <ul className="styled-list">
            <li>Background color dark rakho (#1a1a2e)</li>
            <li>Text color light rakho</li>
            <li>Heading ko bada aur colorful banao</li>
            <li>Quote ko highlight box mein dalo (border-left + background)</li>
            <li>External CSS method use karo (<code>&lt;link&gt;</code> tag)</li>
          </ul>
          <p><strong>Bonus:</strong> Inline CSS use karke ek element ko alag color do, aur dekho ki kya wo external CSS ko override karta hai ya nahi!</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-selectors-basic',
    title: '2. CSS Selectors - Part 1 (Basic Selectors)',
    content: (
      <div>
        <h2>CSS Selectors — Basics</h2>
        <p>
          CSS selectors ka kaam hai <strong>HTML elements ko select karna</strong> taaki unhe style de sako. Socho tum ek classroom mein ho — agar teacher bole "sab students khade ho jao", toh sab khade ho jaayenge. Lekin agar bole "sirf Anees khada ho ja", toh sirf ek student khada hoga. CSS selectors bhi aise hi kaam karte hain — tum <strong>specific elements ko target</strong> kar sakte ho.
        </p>

        <div className="info-box">
          <strong>🎯 Important:</strong> Selectors CSS ka foundation hain. Agar selectors nahi aaye, toh tum kisi bhi element ko properly style nahi kar paoge. Yeh chapter bahut dhyan se padho!
        </div>

        {/* ==================== Universal Selector ==================== */}
        <h3>1. Universal Selector ( * )</h3>
        <p>
          Universal selector <code>*</code> <strong>page ke har ek element</strong> ko select karta hai — <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>, <code>&lt;body&gt;</code> — sab kuch! Yeh bahut powerful hai lekin samajhdaari se use karna chahiye.
        </p>

        <p><strong>Example 1: Global Reset (Sabse Common Use)</strong></p>
        <CodeBlock>{`/* Sab elements ka default margin aur padding hata do */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}</CodeBlock>
        <p>Yeh "CSS Reset" kehlaata hai. Browsers default margin aur padding dete hain har element ko. <code>*</code> se hum sab ka margin/padding zero kar dete hain taaki hum khud se control kar sakein.</p>

        <p><strong>Example 2: Sab Elements Ko Same Font Do</strong></p>
        <CodeBlock>{`/* Poore page pe ek hi font family lagao */
* {
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  color: #333;
}`}</CodeBlock>

        <p><strong>Example 3: Debugging Ke Liye Border</strong></p>
        <CodeBlock>{`/* Development mein har element ke around border dikhao
   taaki layout samajh aaye */
* {
  border: 1px solid red;
}`}</CodeBlock>
        <p>Yeh trick developers use karte hain jab layout debug karna hota hai — har element ke around red border dikh jaata hai aur tum samajh sakte ho ki kaun kitni jagah le raha hai.</p>

        <div className="info-box">
          <strong>⚠️ Performance Note:</strong> <code>*</code> selector heavy hai kyunki yeh har ek element pe lagta hai. Isko sirf reset/normalize ke liye use karo, baar-baar complex styling ke liye nahi.
        </div>

        {/* ==================== Element/Type Selector ==================== */}
        <h3>2. Element/Type Selector (Tag Name)</h3>
        <p>
          Element selector mein tum seedha <strong>HTML tag ka naam</strong> likhte ho — jaise <code>h1</code>, <code>p</code>, <code>div</code>, <code>ul</code>, <code>a</code>, etc. Yeh selector us type ke <strong>saare elements</strong> ko select karta hai.
        </p>

        <p><strong>Example 1: Sab Headings Ko Style Karo</strong></p>
        <CodeBlock>{`h1 {
  color: #e94560;
  font-size: 42px;
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  color: #6c5ce7;
  font-size: 32px;
  border-bottom: 2px solid #6c5ce7;
  padding-bottom: 10px;
}

h3 {
  color: #00b894;
  font-size: 24px;
}`}</CodeBlock>

        <p><strong>Example 2: Paragraphs Ko Readable Banao</strong></p>
        <CodeBlock>{`p {
  font-size: 17px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 15px;
  text-align: justify;
}`}</CodeBlock>

        <p><strong>Example 3: Links Ko Customize Karo</strong></p>
        <CodeBlock>{`a {
  color: #6c5ce7;
  text-decoration: none;
  font-weight: bold;
  border-bottom: 2px solid transparent;
}

/* Agar aur detail se dekhein toh :hover bhi laga sakte hain
   (yeh pseudo-class hai, Chapter 4 mein padhenge) */`}</CodeBlock>

        <p><strong>Example 4: Images Ko Responsive Banao</strong></p>
        <CodeBlock>{`img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}`}</CodeBlock>
        <p>Yeh ek common pattern hai — <code>max-width: 100%</code> se image kabhi apne parent se bahar nahi jaayegi.</p>

        {/* ==================== Class Selector ==================== */}
        <h3>3. Class Selector ( .classname )</h3>
        <p>
          Class selector <code>.</code> (dot) se shuru hota hai. HTML mein tum kisi bhi element ko <code>class</code> attribute de sakte ho, aur phir CSS mein <code>.classname</code> likh ke us element ko style kar sakte ho. <strong>Ek class ko multiple elements pe use kar sakte ho</strong> — yahi iska sabse bada faayda hai.
        </p>

        <p><strong>Example 1: Card Component Styling</strong></p>
        <CodeBlock lang="html">{`<div class="card">
  <h3>Card Title</h3>
  <p>Card ka content yahan aayega.</p>
</div>

<div class="card">
  <h3>Doosra Card</h3>
  <p>Yeh bhi same style se dikhega.</p>
</div>`}</CodeBlock>
        <CodeBlock>{`.card {
  background-color: #1e1e2e;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}`}</CodeBlock>
        <p>Dono <code>&lt;div&gt;</code> elements ko <code>.card</code> class di hai, toh dono same style ke sath dikhenge!</p>

        <p><strong>Example 2: Button Variants</strong></p>
        <CodeBlock lang="html">{`<button class="btn btn-primary">Submit</button>
<button class="btn btn-danger">Delete</button>
<button class="btn btn-success">Approve</button>`}</CodeBlock>
        <CodeBlock>{`/* Base button style */
.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  color: white;
}

/* Different button colors */
.btn-primary {
  background-color: #6c5ce7;
}

.btn-danger {
  background-color: #e74c3c;
}

.btn-success {
  background-color: #00b894;
}`}</CodeBlock>
        <p>Dekho — <code>.btn</code> class sab buttons pe common styles deti hai, aur <code>.btn-primary</code>, <code>.btn-danger</code> sirf color change karti hain. Ek element pe <strong>multiple classes</strong> laga sakte ho (space se separate karke).</p>

        <p><strong>Example 3: Text Utility Classes</strong></p>
        <CodeBlock>{`/* Reusable utility classes */
.text-center {
  text-align: center;
}

.text-bold {
  font-weight: bold;
}

.text-large {
  font-size: 24px;
}

.text-muted {
  color: #999;
}

.mt-20 {
  margin-top: 20px;
}

.mb-10 {
  margin-bottom: 10px;
}`}</CodeBlock>
        <CodeBlock lang="html">{`<h2 class="text-center text-large">Centered Heading</h2>
<p class="text-muted text-center mt-20">
  Yeh muted aur centered text hai.
</p>`}</CodeBlock>
        <p>Yeh "utility classes" approach hai — chhote-chhote classes banate ho aur combine karte ho. Tailwind CSS isi concept pe based hai!</p>

        {/* ==================== ID Selector ==================== */}
        <h3>4. ID Selector ( #idname )</h3>
        <p>
          ID selector <code>#</code> (hash) se shuru hota hai. ID <strong>unique</strong> hota hai — ek page mein ek ID sirf <strong>ek hi element</strong> ko de sakte ho. Agar do elements ko same ID de doge toh HTML invalid ho jaayega.
        </p>

        <p><strong>Example 1: Main Navigation Bar</strong></p>
        <CodeBlock lang="html">{`<nav id="main-navbar">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>`}</CodeBlock>
        <CodeBlock>{`#main-navbar {
  background-color: #1a1a2e;
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  gap: 30px;
  border-bottom: 2px solid #6c5ce7;
}

#main-navbar a {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
}`}</CodeBlock>

        <p><strong>Example 2: Hero Section</strong></p>
        <CodeBlock>{`#hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0f0f1a, #1a1a2e);
  text-align: center;
  padding: 40px;
}

#hero h1 {
  font-size: 60px;
  color: #6c5ce7;
  margin-bottom: 20px;
}

#hero p {
  font-size: 22px;
  color: #a0a0b0;
  max-width: 600px;
}`}</CodeBlock>

        <p><strong>Example 3: Footer</strong></p>
        <CodeBlock>{`#footer {
  background-color: #0d0d1a;
  color: #888;
  text-align: center;
  padding: 30px;
  margin-top: 50px;
  border-top: 1px solid #333;
  font-size: 14px;
}`}</CodeBlock>

        <div className="info-box">
          <strong>🤔 Class vs ID — Kab Kya Use Karein?</strong>
          <br />• <strong>Class (.classname):</strong> Jab ek style <em>multiple elements</em> pe lagani ho. Reusable hai. Zyaadatar CSS mein class hi use hoti hai.
          <br />• <strong>ID (#idname):</strong> Jab element <em>unique</em> ho poore page mein (navbar, hero section, footer). JavaScript mein elements target karne ke liye bhi useful hai.
          <br />• <strong>Rule of Thumb:</strong> Jab doubt ho, toh Class use karo. ID bahut kam situations mein chahiye.
        </div>

        {/* ==================== Grouping Selector ==================== */}
        <h3>5. Grouping Selector (Comma Se Separate)</h3>
        <p>
          Agar tumhe <strong>multiple alag-alag elements ko same style</strong> deni hai, toh unhe comma <code>,</code> se separate karke ek sath likh sakte ho. Isse code duplicate nahi hota.
        </p>

        <p><strong>Example 1: Sab Headings Ka Same Color</strong></p>
        <CodeBlock>{`/* Bina grouping ke - repetitive code */
h1 {
  color: #6c5ce7;
  font-family: 'Poppins', sans-serif;
}

h2 {
  color: #6c5ce7;
  font-family: 'Poppins', sans-serif;
}

h3 {
  color: #6c5ce7;
  font-family: 'Poppins', sans-serif;
}

/* Grouping ke sath - clean code! */
h1, h2, h3 {
  color: #6c5ce7;
  font-family: 'Poppins', sans-serif;
}`}</CodeBlock>
        <p>Dekho kitna clean ho gaya! 12 lines se 4 lines ho gayi. Same result, kam code.</p>

        <p><strong>Example 2: Form Elements Ko Same Style Do</strong></p>
        <CodeBlock>{`input, textarea, select {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #333;
  border-radius: 8px;
  background-color: #1a1a2e;
  color: #e0e0e0;
  font-size: 16px;
  margin-bottom: 15px;
}`}</CodeBlock>

        <p><strong>Example 3: Mixed Selectors Ko Group Karo</strong></p>
        <CodeBlock>{`/* Classes aur elements ko bhi mix karke group kar sakte ho! */
h1, .subtitle, #hero p, .card h3 {
  font-family: 'Georgia', serif;
  letter-spacing: 1px;
}`}</CodeBlock>
        <p>Grouping mein tum koi bhi type ke selectors mix kar sakte ho — element, class, ID, sab kuch!</p>

        {/* ==================== Attribute Selector ==================== */}
        <h3>6. Attribute Selector ( [ ] )</h3>
        <p>
          Attribute selectors bahut powerful hain! Yeh elements ko unke <strong>HTML attributes</strong> ke basis pe select karte hain. Square brackets <code>[ ]</code> mein attribute ka naam likhte hain. Iske kaafi saare variations hain — sab dekhte hain:
        </p>

        <h4>a) [attribute] — Attribute Exist Karta Ho</h4>
        <p>Sirf check karta hai ki element mein woh attribute hai ya nahi, value se koi matlab nahi.</p>
        <CodeBlock>{`/* Sab elements jisme "title" attribute hai */
[title] {
  cursor: help;
  border-bottom: 1px dotted #999;
}

/* Sab images jisme "alt" attribute hai */
img[alt] {
  border: 2px solid green;
}`}</CodeBlock>
        <CodeBlock lang="html">{`<p title="Yeh tooltip hai">Hover karo mujh pe</p>
<img src="photo.jpg" alt="Meri photo">  <!-- Green border milegi -->
<img src="icon.jpg">  <!-- Border nahi milegi, alt nahi hai -->`}</CodeBlock>

        <h4>b) [attribute="value"] — Exact Match</h4>
        <p>Attribute ki value <strong>exactly match</strong> honi chahiye.</p>
        <CodeBlock>{`/* Sirf text type ke inputs ko style karo */
input[type="text"] {
  border: 2px solid #6c5ce7;
  padding: 10px;
  border-radius: 5px;
}

/* Sirf password type ke inputs ko style karo */
input[type="password"] {
  border: 2px solid #e74c3c;
  padding: 10px;
  border-radius: 5px;
}

/* Sirf submit button ko style karo */
input[type="submit"] {
  background-color: #6c5ce7;
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
}`}</CodeBlock>

        <h4>c) [attribute^="value"] — Starts With (Shuru Hota Hai)</h4>
        <p>Attribute ki value kisi specific text se <strong>shuru hoti ho</strong>.</p>
        <CodeBlock>{`/* Sab links jo "https" se shuru hoti hain (external links) */
a[href^="https"] {
  color: #00b894;
}

/* Sab links jo "#" se shuru hoti hain (same page anchor) */
a[href^="#"] {
  color: #fdcb6e;
}

/* Sab classes jo "btn" se shuru hoti hain */
[class^="btn"] {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}`}</CodeBlock>

        <h4>d) [attribute$="value"] — Ends With (Khatam Hota Hai)</h4>
        <p>Attribute ki value kisi specific text pe <strong>khatam hoti ho</strong>.</p>
        <CodeBlock>{`/* PDF file links ko special style do */
a[href$=".pdf"] {
  color: #e74c3c;
  font-weight: bold;
}

/* Image file links */
a[href$=".jpg"],
a[href$=".png"],
a[href$=".gif"] {
  color: #00cec9;
}

/* Email links */
a[href$="@gmail.com"] {
  color: #fdcb6e;
}`}</CodeBlock>
        <CodeBlock lang="html">{`<a href="notes.pdf">Download Notes</a>  <!-- Red color -->
<a href="photo.jpg">View Photo</a>     <!-- Teal color -->
<a href="page.html">HTML Page</a>       <!-- Normal color -->`}</CodeBlock>

        <h4>e) [attribute*="value"] — Contains (Kahi Bhi Ho)</h4>
        <p>Attribute ki value mein woh text <strong>kahin bhi</strong> ho — start, middle, ya end.</p>
        <CodeBlock>{`/* Sab elements jinke class mein "card" word aata hai */
[class*="card"] {
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
}

/* Sab links jinke URL mein "google" aata hai */
a[href*="google"] {
  color: #4285f4;
}

/* Sab images jinke src mein "avatar" aata hai */
img[src*="avatar"] {
  border-radius: 50%;
  width: 80px;
  height: 80px;
}`}</CodeBlock>
        <CodeBlock lang="html">{`<!-- Sab select honge kyunki sab mein "card" hai -->
<div class="card">Basic Card</div>
<div class="card-header">Card Header</div>
<div class="product-card">Product Card</div>
<div class="sidebar-card-featured">Featured</div>`}</CodeBlock>

        <h4>f) [attribute~="value"] — Word Match (Space-separated list mein exact word)</h4>
        <CodeBlock>{`/* Class list mein exact word "featured" ho */
[class~="featured"] {
  border: 3px solid gold;
  position: relative;
}

[class~="featured"]::after {
  content: "⭐";
  position: absolute;
  top: -10px;
  right: -10px;
}`}</CodeBlock>
        <CodeBlock lang="html">{`<div class="card featured">Yeh select hoga</div>
<div class="card featured-item">Yeh NAHI hoga - "featured-item" != "featured"</div>`}</CodeBlock>

        <div className="info-box">
          <strong>📋 Quick Reference — Attribute Selectors:</strong>
          <br />• <code>[attr]</code> — attribute exist karta hai
          <br />• <code>[attr="val"]</code> — exactly "val" hai
          <br />• <code>[attr^="val"]</code> — "val" se shuru hota hai
          <br />• <code>[attr$="val"]</code> — "val" pe khatam hota hai
          <br />• <code>[attr*="val"]</code> — "val" kahin bhi hai
          <br />• <code>[attr~="val"]</code> — space-separated list mein exact "val" word hai
        </div>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p><strong>Task:</strong> Ek HTML form banao jisme ye fields hon:</p>
          <ul className="styled-list">
            <li>Text input (name ke liye)</li>
            <li>Email input</li>
            <li>Password input</li>
            <li>Submit button</li>
          </ul>
          <p>Ab CSS mein:</p>
          <ul className="styled-list">
            <li><code>*</code> se sab ka margin/padding reset karo</li>
            <li>Element selector se <code>body</code> ka background dark karo</li>
            <li><code>.form-container</code> class se form ko card jaisa banao</li>
            <li><code>#submit-btn</code> ID se submit button ko special styling do</li>
            <li><code>input[type="text"]</code> aur <code>input[type="email"]</code> ko group selector se same border do</li>
            <li><code>input[type="password"]</code> ko alag red border do</li>
          </ul>
        </div>
      </div>
    )
  },

  {
    id: 'css-selectors-combinators',
    title: '3. CSS Selectors - Part 2 (Combinators)',
    content: (
      <div>
        <h2>CSS Combinators — Elements Ke Relationships</h2>
        <p>
          Ab tak humne sirf individual elements ko select karna seekha. Lekin real websites mein elements ek doosre ke andar hote hain — jaise <code>&lt;div&gt;</code> ke andar <code>&lt;p&gt;</code>, ya <code>&lt;ul&gt;</code> ke andar <code>&lt;li&gt;</code>. Combinators humein <strong>elements ke relationships ke basis pe select</strong> karne dete hain — parent-child, sibling, descendant, etc.
        </p>
        <p>
          CSS mein <strong>4 main combinators</strong> hain. Inko samajhne ke liye family tree socho — parent, child, sibling (bhai-behen).
        </p>

        {/* ==================== Descendant Selector ==================== */}
        <h3>1. Descendant Selector (Space - " ")</h3>
        <p>
          Descendant selector mein do selectors ke beech mein <strong>space</strong> dete hain. Yeh <strong>kisi bhi level</strong> ke child ko select karta hai — direct child ho ya grandchild ho ya great-grandchild ho. Matlab agar element ancestor ke <strong>kahin bhi andar</strong> hai, toh select ho jaayega.
        </p>

        <p><strong>Example 1: Div Ke Andar Ke Sab Paragraphs</strong></p>
        <CodeBlock lang="html">{`<div class="container">
  <p>Direct child paragraph - YEH SELECT HOGA ✅</p>
  <section>
    <p>Grandchild paragraph - YEH BHI SELECT HOGA ✅</p>
    <article>
      <p>Great-grandchild paragraph - YEH BHI SELECT HOGA ✅</p>
    </article>
  </section>
</div>

<p>Bahar ka paragraph - YEH SELECT NAHI HOGA ❌</p>`}</CodeBlock>
        <CodeBlock>{`/* .container ke andar ke SAARE paragraphs — chahe kitni bhi depth pe hon */
.container p {
  color: #a29bfe;
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 10px;
}`}</CodeBlock>
        <p>Dekho — <code>.container p</code> ne sab paragraphs select kiye jo <code>.container</code> ke <strong>kahin bhi andar</strong> hain, chahe direct child hon ya bohot nested hon.</p>

        <p><strong>Example 2: Navigation Ke Andar Ke Links</strong></p>
        <CodeBlock lang="html">{`<nav class="main-nav">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li>
      <ul class="dropdown">
        <li><a href="#">Sub Item 1</a></li>
        <li><a href="#">Sub Item 2</a></li>
      </ul>
    </li>
  </ul>
</nav>

<a href="#">Yeh nav ke bahar hai</a>`}</CodeBlock>
        <CodeBlock>{`/* Nav ke andar ke saare links — dropdown ke links bhi include */
.main-nav a {
  color: #dfe6e9;
  text-decoration: none;
  padding: 8px 16px;
  display: inline-block;
}

/* Nav ke andar ke saare list items */
.main-nav li {
  list-style: none;
}`}</CodeBlock>

        <p><strong>Example 3: Card Ke Andar Ka Content</strong></p>
        <CodeBlock>{`/* Card component ke andar ke sab elements */
.card h3 {
  color: #fd79a8;
  font-size: 22px;
  margin-bottom: 10px;
}

.card p {
  color: #b2bec3;
  font-size: 15px;
  line-height: 1.6;
}

.card img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
}`}</CodeBlock>

        {/* ==================== Child Selector ==================== */}
        <h3>2. Child Selector ( &gt; )</h3>
        <p>
          Child selector <code>&gt;</code> sirf <strong>direct children</strong> ko select karta hai — grandchildren ko nahi! Yeh descendant selector se zyada <strong>strict/specific</strong> hai.
        </p>

        <p><strong>Example 1: Sirf Direct Children Ko Style Karo</strong></p>
        <CodeBlock lang="html">{`<div class="wrapper">
  <p>Direct child - SELECT HOGA ✅</p>
  <p>Direct child - SELECT HOGA ✅</p>
  <section>
    <p>Grandchild - SELECT NAHI HOGA ❌</p>
  </section>
</div>`}</CodeBlock>
        <CodeBlock>{`/* Sirf .wrapper ke DIRECT children paragraphs */
.wrapper > p {
  color: #6c5ce7;
  font-size: 18px;
  font-weight: bold;
  border-left: 4px solid #6c5ce7;
  padding-left: 15px;
}`}</CodeBlock>
        <p>Section ke andar wala <code>&lt;p&gt;</code> select <strong>nahi</strong> hoga kyunki woh direct child nahi hai — woh grandchild hai.</p>

        <p><strong>Example 2: Sirf Top-Level List Items</strong></p>
        <CodeBlock lang="html">{`<ul class="menu">
  <li>Home ✅</li>
  <li>About ✅</li>
  <li>Services ✅
    <ul>
      <li>Web Design ❌</li>
      <li>SEO ❌</li>
    </ul>
  </li>
</ul>`}</CodeBlock>
        <CodeBlock>{`/* Sirf top-level list items ko style karo, nested items ko nahi */
.menu > li {
  font-weight: bold;
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #444;
  color: #e0e0e0;
}

/* Nested items ko alag style */
.menu > li > ul > li {
  font-weight: normal;
  font-size: 14px;
  color: #999;
  padding-left: 20px;
}`}</CodeBlock>

        <p><strong>Example 3: Container Ke Direct Child Divs</strong></p>
        <CodeBlock>{`/* Grid layout - sirf direct children ko grid items banao */
.grid-container > div {
  background-color: #1e1e2e;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #333;
}

/* Agar nested divs bhi hain, unhe alag style */
.grid-container > div > div {
  background-color: transparent;
  padding: 10px;
  border: none;
}`}</CodeBlock>

        {/* ==================== Adjacent Sibling ==================== */}
        <h3>3. Adjacent Sibling Selector ( + )</h3>
        <p>
          Adjacent sibling selector <code>+</code> us element ko select karta hai jo kisi element ke <strong>turant baad (immediately after)</strong> aata hai, aur dono ka <strong>same parent</strong> hona chahiye. "Adjacent" ka matlab hai — bilkul paas wala, ek dum next wala.
        </p>

        <p><strong>Example 1: Heading Ke Turant Baad Ka Paragraph</strong></p>
        <CodeBlock lang="html">{`<h2>Chapter Title</h2>
<p>Yeh turant h2 ke baad hai - SELECT HOGA ✅</p>
<p>Yeh doosra paragraph hai - SELECT NAHI HOGA ❌</p>
<p>Yeh teesra paragraph hai - SELECT NAHI HOGA ❌</p>`}</CodeBlock>
        <CodeBlock>{`/* H2 ke TURANT BAAD aane wala paragraph */
h2 + p {
  font-size: 20px;
  color: #74b9ff;
  font-weight: 500;
  margin-top: 5px;
}`}</CodeBlock>
        <p>Sirf <strong>pehla</strong> paragraph select hoga — baaki paragraphs nahi, kyunki woh h2 ke "immediately after" nahi hain.</p>

        <p><strong>Example 2: Image Ke Baad Caption</strong></p>
        <CodeBlock lang="html">{`<img src="sunset.jpg" alt="Sunset photo">
<p class="caption">Beautiful sunset at the beach</p>
<p>Some other text that should not be styled as caption</p>`}</CodeBlock>
        <CodeBlock>{`/* Image ke turant baad wala paragraph = caption */
img + p {
  font-size: 13px;
  color: #999;
  text-align: center;
  font-style: italic;
  margin-top: 5px;
}`}</CodeBlock>

        <p><strong>Example 3: Label Ke Baad Input Field</strong></p>
        <CodeBlock lang="html">{`<label>Username</label>
<input type="text" placeholder="Enter username">

<label>Password</label>
<input type="password" placeholder="Enter password">`}</CodeBlock>
        <CodeBlock>{`/* Label ke turant baad aane wala input */
label + input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 2px solid #444;
  border-radius: 6px;
  background-color: #1a1a2e;
  color: white;
}`}</CodeBlock>

        {/* ==================== General Sibling ==================== */}
        <h3>4. General Sibling Selector ( ~ )</h3>
        <p>
          General sibling selector <code>~</code> un <strong>sab elements</strong> ko select karta hai jo kisi element ke baad aate hain aur <strong>same parent</strong> share karte hain. Adjacent (<code>+</code>) sirf turant next wala select karta tha, lekin General (<code>~</code>) <strong>sab siblings</strong> ko select karta hai jo baad mein aate hain.
        </p>

        <p><strong>Example 1: H2 Ke Baad Ke SAB Paragraphs</strong></p>
        <CodeBlock lang="html">{`<h2>Important Heading</h2>
<p>Paragraph 1 - SELECT HOGA ✅</p>
<p>Paragraph 2 - SELECT HOGA ✅</p>
<div>Ek div beech mein</div>
<p>Paragraph 3 - YEH BHI SELECT HOGA ✅</p>`}</CodeBlock>
        <CodeBlock>{`/* h2 ke baad ke SAARE sibling paragraphs */
h2 ~ p {
  color: #a29bfe;
  padding-left: 15px;
  border-left: 3px solid #6c5ce7;
  margin-bottom: 10px;
}`}</CodeBlock>
        <p>Teenon paragraphs select honge — chahe beech mein div bhi ho. <code>~</code> sab siblings ko dekhta hai, sirf next wala nahi.</p>

        <p><strong>Example 2: Checkbox Checked Hone Pe Content Dikhao</strong></p>
        <CodeBlock lang="html">{`<input type="checkbox" id="toggle">
<label for="toggle">Menu Toggle Karo</label>
<div class="menu-content">
  <p>Menu Item 1</p>
  <p>Menu Item 2</p>
  <p>Menu Item 3</p>
</div>`}</CodeBlock>
        <CodeBlock>{`/* By default menu chhupa do */
.menu-content {
  display: none;
  background-color: #1e1e2e;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
}

/* Jab checkbox checked ho, uske baad ke sibling menu ko dikhao */
input[type="checkbox"]:checked ~ .menu-content {
  display: block;
}`}</CodeBlock>
        <p>Yeh ek <strong>pure CSS toggle menu</strong> hai — bina JavaScript ke! <code>~</code> selector ki power dekho.</p>

        <p><strong>Example 3: First Section Ke Baad Ki Sab Sections</strong></p>
        <CodeBlock>{`/* Pehli section ke baad aane wali sab sections ko top border do */
.hero-section ~ section {
  border-top: 1px solid #333;
  padding-top: 30px;
  margin-top: 30px;
}`}</CodeBlock>

        {/* ==================== Comparison ==================== */}
        <h3>🔍 Charon Combinators Ka Comparison</h3>
        <p>Ab charon ko ek sath samjhte hain taaki confusion na rahe:</p>

        <CodeBlock lang="html">{`<div class="parent">
  <h2>Heading</h2>
  <p>Paragraph 1 (direct child)</p>
  <p>Paragraph 2 (direct child)</p>
  <section>
    <p>Paragraph 3 (grandchild)</p>
  </section>
  <p>Paragraph 4 (direct child)</p>
</div>`}</CodeBlock>

        <CodeBlock>{`/* 1. DESCENDANT (space) — sab paragraphs select honge (1, 2, 3, 4) */
.parent p {
  color: white;
}

/* 2. CHILD (>) — sirf direct children (1, 2, 4) — grandchild 3 nahi */
.parent > p {
  font-weight: bold;
}

/* 3. ADJACENT SIBLING (+) — sirf h2 ke turant baad (1 only) */
h2 + p {
  font-size: 20px;
}

/* 4. GENERAL SIBLING (~) — h2 ke baad ke sab siblings (1, 2, 4) — 3 nahi kyunki 3 sibling nahi, descendant hai */
h2 ~ p {
  border-left: 3px solid purple;
}`}</CodeBlock>

        <div className="info-box">
          <strong>📋 Quick Reference — Combinators:</strong>
          <br />• <code>A B</code> (Space) = A ke andar <strong>kahin bhi</strong> B → Descendant
          <br />• <code>A &gt; B</code> = A ka <strong>direct child</strong> B → Child
          <br />• <code>A + B</code> = A ke <strong>turant baad</strong> B → Adjacent Sibling
          <br />• <code>A ~ B</code> = A ke <strong>baad sab</strong> B siblings → General Sibling
        </div>

        <h3>🌍 Real-World Use Cases</h3>

        <p><strong>Use Case 1: Blog Post Layout</strong></p>
        <CodeBlock>{`/* Blog post ke direct children ko style karo */
.blog-post > h1 {
  font-size: 36px;
  color: #e94560;
  margin-bottom: 10px;
}

/* Blog post ke heading ke baad pehla paragraph = intro */
.blog-post > h1 + p {
  font-size: 20px;
  color: #74b9ff;
  font-style: italic;
  border-bottom: 1px solid #333;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

/* Blog post ke andar sab images */
.blog-post img {
  max-width: 100%;
  border-radius: 10px;
  margin: 20px 0;
}

/* Image ke baad caption paragraph */
.blog-post img + p {
  text-align: center;
  font-size: 13px;
  color: #888;
  font-style: italic;
}`}</CodeBlock>

        <p><strong>Use Case 2: Sidebar Navigation</strong></p>
        <CodeBlock>{`/* Sidebar ke direct child links */
.sidebar > a {
  display: block;
  padding: 12px 20px;
  color: #dfe6e9;
  text-decoration: none;
  border-bottom: 1px solid #2d3436;
}

/* Active link ke baad wali links ko subtle style do */
.sidebar > a.active ~ a {
  opacity: 0.6;
}`}</CodeBlock>

        <p><strong>Use Case 3: FAQ Accordion (Pure CSS)</strong></p>
        <CodeBlock>{`/* FAQ item structure: input[checkbox] + label + div.answer */
.faq-item > input[type="checkbox"] {
  display: none;
}

.faq-item > label {
  display: block;
  padding: 15px 20px;
  background-color: #1e1e2e;
  color: #dfe6e9;
  cursor: pointer;
  font-weight: bold;
  border-bottom: 1px solid #333;
}

.faq-item > .answer {
  max-height: 0;
  overflow: hidden;
  padding: 0 20px;
  background-color: #16162a;
}

/* Checkbox checked hone pe answer dikhao */
.faq-item > input:checked + label {
  color: #6c5ce7;
}

.faq-item > input:checked ~ .answer {
  max-height: 200px;
  padding: 15px 20px;
}`}</CodeBlock>
        <p>Dekho — sirf CSS se accordion bana diya, bina JavaScript ke! 🔥 Combinators ki power!</p>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p>
            <strong>Task:</strong> Ek blog post layout banao jismein:
          </p>
          <ul className="styled-list">
            <li>Ek <code>.blog-post</code> div ke andar heading, 3 paragraphs, ek image, aur ek <code>&lt;section&gt;</code> ke andar 2 aur paragraphs hon</li>
            <li><strong>Descendant selector</strong> se blog-post ke andar ke sab paragraphs ka font-size 17px karo</li>
            <li><strong>Child selector (&gt;)</strong> se sirf direct child paragraphs ko bold karo</li>
            <li><strong>Adjacent sibling (+)</strong> se heading ke turant baad ke paragraph ko bada aur italic karo</li>
            <li><strong>General sibling (~)</strong> se heading ke baad ke sab paragraphs ko left border do</li>
          </ul>
          <p><strong>Bonus:</strong> Pure CSS toggle banao — ek checkbox aur <code>~</code> selector use karke ek hidden div ko dikhao/chhupao!</p>
        </div>
      </div>
    )
  },

  {
    id: 'pseudo-classes',
    title: '4. Pseudo-classes (Har Ek Detail Me)',
    content: (
      <div>
        <h2>Pseudo-classes — Elements Ke Special States</h2>
        <p>
          Pseudo-classes ka kaam hai <strong>elements ke special states (conditions)</strong> ke basis pe style karna. Jaise — jab mouse hover kare, jab link already visit ho chuka ho, jab input focus mein ho, ya jab koi element list mein pehla ya aakhri ho. Pseudo-classes colon <code>:</code> se shuru hoti hain.
        </p>
        <p>
          Syntax: <code>selector:pseudo-class {"{ }"}</code>
        </p>

        <div className="info-box">
          <strong>💡 Note:</strong> Pseudo-class mein <strong>ek colon (:)</strong> hota hai. Pseudo-element mein <strong>do colons (::)</strong> hote hain. Yeh confusion bohot common hai — yaad rakhna!
        </div>

        {/* ==================== Interaction States ==================== */}
        <h3>🖱️ Interaction States — :hover, :focus, :active</h3>

        <h4>:hover — Jab Mouse Element Pe Aaye</h4>
        <p>Sabse zyada use hone wali pseudo-class. Jab user apna mouse kisi element pe le jaata hai (hover karta hai), tab yeh state activate hoti hai.</p>

        <CodeBlock>{`/* Button hover effect */
.btn {
  background-color: #6c5ce7;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #5a4bd1;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(108, 92, 231, 0.4);
}`}</CodeBlock>

        <CodeBlock>{`/* Link hover effect */
a {
  color: #74b9ff;
  text-decoration: none;
  position: relative;
}

a:hover {
  color: #0984e3;
}

/* Card hover effect */
.card {
  background: #1e1e2e;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: #6c5ce7;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(108, 92, 231, 0.2);
}`}</CodeBlock>

        <h4>:focus — Jab Element Focus Mein Ho</h4>
        <p>Jab user Tab key se ya click karke kisi element pe focus kare. Yeh mainly <strong>form inputs, buttons, aur links</strong> pe use hota hai.</p>

        <CodeBlock>{`/* Input focus effect */
input {
  padding: 12px 16px;
  border: 2px solid #444;
  border-radius: 8px;
  background-color: #1a1a2e;
  color: white;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #6c5ce7;
  box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.3);
}

/* Textarea focus */
textarea:focus {
  border-color: #00b894;
  box-shadow: 0 0 0 3px rgba(0, 184, 148, 0.2);
}`}</CodeBlock>

        <h4>:active — Jab Element Click Ho Raha Ho</h4>
        <p>Jab user element pe <strong>click kar raha ho</strong> (mouse button dabaa hua ho), tab yeh state hoti hai. Click release hone pe yeh khatam ho jaati hai.</p>

        <CodeBlock>{`/* Button click effect */
.btn:active {
  transform: translateY(1px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* Link click effect */
a:active {
  color: #e74c3c;
}

/* Card press effect */
.card:active {
  transform: scale(0.98);
}`}</CodeBlock>

        <div className="info-box">
          <strong>🔄 Interaction States Ka Order (LVHA Rule):</strong>
          <br />Jab links style karo toh yeh order follow karo — warna kuch states kaam nahi karenge:
          <br />1. <code>:link</code> → 2. <code>:visited</code> → 3. <code>:hover</code> → 4. <code>:active</code>
          <br />Yaad rakhne ka trick: <strong>"LoVe HAte"</strong> (L-V-H-A)
        </div>

        {/* ==================== Child Pseudo-classes ==================== */}
        <h3>👶 Child Pseudo-classes — Position Ke Basis Pe Select Karo</h3>

        <h4>:first-child — Pehla Child</h4>
        <p>Parent ke andar <strong>pehle element</strong> ko select karta hai.</p>
        <CodeBlock lang="html">{`<ul class="list">
  <li>Pehla Item ✅ (selected)</li>
  <li>Doosra Item</li>
  <li>Teesra Item</li>
</ul>`}</CodeBlock>
        <CodeBlock>{`/* List ka pehla item */
.list li:first-child {
  color: #6c5ce7;
  font-weight: bold;
  font-size: 20px;
}

/* Har section ke pehle paragraph ko special style */
section p:first-child {
  font-size: 18px;
  color: #74b9ff;
}`}</CodeBlock>

        <h4>:last-child — Aakhri Child</h4>
        <p>Parent ke andar <strong>aakhri element</strong> ko select karta hai.</p>
        <CodeBlock>{`/* List ka aakhri item */
.list li:last-child {
  border-bottom: none;
  color: #e74c3c;
}

/* Card ke aakhri paragraph se bottom margin hatao */
.card p:last-child {
  margin-bottom: 0;
}

/* Nav ke aakhri link ke baad separator mat lagao */
nav a:last-child {
  border-right: none;
}`}</CodeBlock>

        <h4>:nth-child(n) — Specific Position Ka Child</h4>
        <p>Yeh sabse powerful child selector hai! <code>n</code> ki jagah tum number, keyword, ya formula de sakte ho.</p>

        <p><strong>Simple Numbers:</strong></p>
        <CodeBlock>{`/* Doosra item select karo */
li:nth-child(2) {
  color: #fd79a8;
  font-weight: bold;
}

/* Teesra item select karo */
li:nth-child(3) {
  color: #00cec9;
}

/* 5th table row */
tr:nth-child(5) {
  background-color: #6c5ce7;
  color: white;
}`}</CodeBlock>

        <p><strong>Odd aur Even Keywords:</strong></p>
        <CodeBlock>{`/* Zebra striping - table rows ko alternating colors do */
tr:nth-child(odd) {
  background-color: #1a1a2e;
}

tr:nth-child(even) {
  background-color: #222240;
}

/* Alternating list items */
.item-list li:nth-child(odd) {
  background-color: rgba(108, 92, 231, 0.1);
}

.item-list li:nth-child(even) {
  background-color: rgba(108, 92, 231, 0.05);
}`}</CodeBlock>

        <h4>:nth-child() Ke Formula Patterns 🧮</h4>
        <p>
          <code>nth-child</code> mein formula <code>an+b</code> use kar sakte ho, jahan:
        </p>
        <ul className="styled-list">
          <li><strong>a</strong> = step/cycle size (kitne kitne ke gap mein)</li>
          <li><strong>n</strong> = counter (0, 1, 2, 3, 4...)</li>
          <li><strong>b</strong> = starting offset (kahan se shuru karna hai)</li>
        </ul>

        <CodeBlock>{`/* Har 3rd element (3, 6, 9, 12...) */
li:nth-child(3n) {
  color: #e94560;
  font-weight: bold;
}

/* Har 3rd element, pehle se shuru (1, 4, 7, 10...) */
li:nth-child(3n+1) {
  color: #6c5ce7;
}

/* Har 2nd element, 1st se shuru (odd) - same as odd */
li:nth-child(2n+1) {
  background-color: rgba(255, 255, 255, 0.05);
}

/* Pehle 3 elements (1, 2, 3) */
li:nth-child(-n+3) {
  font-weight: bold;
  border-left: 3px solid #6c5ce7;
}

/* 4th se aage sab elements (4, 5, 6, 7...) */
li:nth-child(n+4) {
  opacity: 0.7;
}

/* Har 4th element starting from 2nd (2, 6, 10, 14...) */
li:nth-child(4n+2) {
  background-color: #2d2d44;
}`}</CodeBlock>

        <div className="info-box">
          <strong>🧮 Formula Samjho:</strong>
          <br />• <code>3n</code> → n=0: 0, n=1: 3, n=2: 6, n=3: 9 → <strong>3rd, 6th, 9th...</strong>
          <br />• <code>3n+1</code> → n=0: 1, n=1: 4, n=2: 7 → <strong>1st, 4th, 7th...</strong>
          <br />• <code>-n+3</code> → n=0: 3, n=1: 2, n=2: 1, n=3: 0 → <strong>Pehle 3 elements</strong>
          <br />• <code>n+4</code> → n=0: 4, n=1: 5, n=2: 6 → <strong>4th se sab</strong>
        </div>

        <h4>:nth-last-child(n) — Peechhe Se Count Karo</h4>
        <p>Yeh <code>:nth-child</code> jaisa hi hai, lekin counting <strong>aakhri se shuru</strong> hoti hai.</p>
        <CodeBlock>{`/* Aakhri se doosra element */
li:nth-last-child(2) {
  color: #ffeaa7;
  font-style: italic;
}

/* Aakhri 3 elements */
li:nth-last-child(-n+3) {
  opacity: 0.8;
  border-right: 3px solid #e94560;
}

/* Last se har doosra (even from end) */
li:nth-last-child(even) {
  background-color: rgba(255, 255, 255, 0.03);
}`}</CodeBlock>

        {/* ==================== Type Pseudo-classes ==================== */}
        <h3>📌 Type-based Pseudo-classes</h3>
        <p>
          <code>:nth-child</code> saare children mein se count karta hai, chahe koi bhi type ho. Lekin <code>:nth-of-type</code> sirf <strong>usi type ke elements</strong> mein se count karta hai. Yeh difference bahut important hai!
        </p>

        <h4>:first-of-type — Apne Type Ka Pehla</h4>
        <CodeBlock lang="html">{`<div class="content">
  <h2>Heading</h2>
  <p>Pehla paragraph ✅ (first-of-type)</p>
  <p>Doosra paragraph</p>
  <span>Pehla span ✅ (first-of-type)</span>
  <p>Teesra paragraph</p>
</div>`}</CodeBlock>
        <CodeBlock>{`/* Pehla paragraph element — type 'p' ka pehla occurrence */
.content p:first-of-type {
  font-size: 20px;
  color: #6c5ce7;
  font-weight: bold;
}

/* Pehla span element */
.content span:first-of-type {
  color: #00b894;
  font-style: italic;
}`}</CodeBlock>

        <h4>:last-of-type — Apne Type Ka Aakhri</h4>
        <CodeBlock>{`/* Aakhri paragraph ko special style */
.content p:last-of-type {
  color: #fdcb6e;
  border-bottom: 2px solid #fdcb6e;
  padding-bottom: 10px;
}

/* Article ke andar aakhri heading */
article h3:last-of-type {
  color: #e74c3c;
  margin-bottom: 30px;
}`}</CodeBlock>

        <h4>:nth-of-type(n) — Specific Position (Same Type Mein)</h4>
        <CodeBlock>{`/* Doosra paragraph (sirf paragraphs mein se) */
p:nth-of-type(2) {
  background-color: #2d2d44;
  padding: 15px;
  border-radius: 8px;
}

/* Har teesra image */
img:nth-of-type(3n) {
  border: 3px solid #6c5ce7;
  border-radius: 10px;
}

/* Odd paragraphs */
p:nth-of-type(odd) {
  border-left: 3px solid #a29bfe;
  padding-left: 15px;
}`}</CodeBlock>

        <div className="info-box">
          <strong>🤔 nth-child vs nth-of-type — Kya Fark Hai?</strong>
          <br />Socho ek div mein hai: <code>&lt;h2&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;p&gt;</code>
          <br />• <code>p:nth-child(1)</code> — kuch nahi select karega! Kyunki pehla child <code>&lt;h2&gt;</code> hai, <code>&lt;p&gt;</code> nahi.
          <br />• <code>p:nth-of-type(1)</code> — pehla <code>&lt;p&gt;</code> select karega! Kyunki yeh sirf <code>&lt;p&gt;</code> type mein se dekhta hai.
        </div>

        {/* ==================== Negation ==================== */}
        <h3>🚫 :not(selector) — Negation Pseudo-class</h3>
        <p>
          <code>:not()</code> un elements ko select karta hai jo given selector se <strong>match NAHI karte</strong>. Bahut useful hai jab tum "sab ko style do, ek ko chhod ke" wala kaam karna chahte ho.
        </p>

        <CodeBlock>{`/* Sab buttons ko style karo, sirf .disabled class wale ko chhod ke */
.btn:not(.disabled) {
  cursor: pointer;
  background-color: #6c5ce7;
  color: white;
}

/* Sab list items ko border do, sirf aakhri wale ko chhod ke */
li:not(:last-child) {
  border-bottom: 1px solid #333;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

/* Sab inputs ko style karo, sirf submit button ko chhod ke */
input:not([type="submit"]) {
  border: 2px solid #444;
  padding: 10px;
  border-radius: 6px;
}

/* Sab paragraphs, sirf .intro class wale ko chhod ke */
p:not(.intro) {
  font-size: 15px;
  color: #999;
}

/* Sab links jo external nahi hain */
a:not([href^="https"]) {
  color: #74b9ff;
}`}</CodeBlock>

        {/* ==================== Empty & Root ==================== */}
        <h3>📦 :empty aur :root</h3>

        <h4>:empty — Khaali Elements</h4>
        <p>Woh elements select karta hai jinke andar <strong>kuch bhi nahi hai</strong> — na text, na child elements, na whitespace.</p>

        <CodeBlock>{`/* Khaali divs ko hide karo */
div:empty {
  display: none;
}

/* Khaali paragraphs ko collapse karo */
p:empty {
  margin: 0;
  padding: 0;
  height: 0;
}

/* Khaali table cells ko style karo */
td:empty {
  background-color: #2d2d44;
}

td:empty::after {
  content: "—";
  color: #666;
  text-align: center;
}`}</CodeBlock>

        <h4>:root — Root Element (HTML tag)</h4>
        <p><code>:root</code> document ke root element ko select karta hai, jo HTML mein <code>&lt;html&gt;</code> hota hai. Yeh mainly <strong>CSS variables (custom properties)</strong> define karne ke liye use hota hai.</p>

        <CodeBlock>{`/* CSS Variables define karo root level pe */
:root {
  --primary-color: #6c5ce7;
  --secondary-color: #00b894;
  --bg-dark: #0f0f1a;
  --bg-card: #1e1e2e;
  --text-primary: #e0e0e0;
  --text-muted: #999;
  --border-radius: 12px;
  --font-main: 'Segoe UI', sans-serif;
}

/* Ab in variables ko kahin bhi use karo */
body {
  background-color: var(--bg-dark);
  color: var(--text-primary);
  font-family: var(--font-main);
}

.card {
  background-color: var(--bg-card);
  border-radius: var(--border-radius);
  border: 1px solid var(--primary-color);
}

h2 {
  color: var(--primary-color);
}

.subtitle {
  color: var(--text-muted);
}`}</CodeBlock>

        {/* ==================== Form States ==================== */}
        <h3>📝 Form State Pseudo-classes</h3>

        <h4>:checked — Checked Inputs (Checkbox/Radio)</h4>
        <CodeBlock>{`/* Custom checkbox styling */
input[type="checkbox"]:checked {
  accent-color: #6c5ce7;
}

/* Checked radio button ke label ko highlight karo */
input[type="radio"]:checked + label {
  color: #6c5ce7;
  font-weight: bold;
  border-bottom: 2px solid #6c5ce7;
}`}</CodeBlock>

        <h4>:disabled — Disabled Form Elements</h4>
        <CodeBlock>{`/* Disabled inputs ko grey aur faded karo */
input:disabled,
textarea:disabled,
select:disabled {
  background-color: #2d2d44;
  color: #666;
  cursor: not-allowed;
  opacity: 0.6;
  border-color: #444;
}

/* Disabled button */
.btn:disabled {
  background-color: #555;
  color: #999;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}`}</CodeBlock>

        <h4>:enabled — Enabled Form Elements (Default state)</h4>
        <CodeBlock>{`/* Sirf enabled inputs ko interactive banao */
input:enabled {
  cursor: text;
  border-color: #555;
}

input:enabled:hover {
  border-color: #6c5ce7;
}

input:enabled:focus {
  border-color: #6c5ce7;
  box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.3);
}`}</CodeBlock>

        {/* ==================== Link States ==================== */}
        <h3>🔗 Link Pseudo-classes — :link aur :visited</h3>

        <h4>:link — Unvisited Link</h4>
        <p>Woh links jo abhi tak visit nahi hui hain.</p>

        <h4>:visited — Already Visited Link</h4>
        <p>Woh links jo user pehle click kar chuka hai.</p>

        <CodeBlock>{`/* Unvisited link — naya link */
a:link {
  color: #74b9ff;
  text-decoration: none;
}

/* Visited link — jo pehle click ho chuka hai */
a:visited {
  color: #a29bfe;
}

/* Hover state — mouse jaaye toh */
a:hover {
  color: #0984e3;
  text-decoration: underline;
}

/* Active state — click ho raha ho toh */
a:active {
  color: #e74c3c;
}`}</CodeBlock>

        <div className="info-box">
          <strong>🔒 Security Note:</strong> <code>:visited</code> mein sirf limited properties change kar sakte ho (color, background-color, border-color). Browser security reasons se baaki properties block hain — warna koi website check kar sakti thi ki user ne kaunsi websites visit ki hain!
        </div>

        {/* ==================== Focus Variants ==================== */}
        <h3>🎯 :focus-visible aur :focus-within</h3>

        <h4>:focus-visible — Keyboard Focus Ke Liye</h4>
        <p>
          <code>:focus-visible</code> sirf tab apply hota hai jab focus <strong>keyboard se</strong> aaye (Tab key), mouse click se nahi. Yeh accessibility ke liye bahut zaroori hai.
        </p>
        <CodeBlock>{`/* Mouse click pe ugly outline hatao, lekin keyboard focus pe dikhao */
button:focus {
  outline: none;
}

button:focus-visible {
  outline: 3px solid #6c5ce7;
  outline-offset: 2px;
}

/* Input fields ke liye bhi */
input:focus-visible {
  outline: 3px solid #00b894;
  outline-offset: 2px;
  border-color: #00b894;
}`}</CodeBlock>

        <h4>:focus-within — Jab Koi Bhi Child Focused Ho</h4>
        <p>
          Yeh parent element pe apply hota hai jab uske <strong>kisi bhi child element</strong> pe focus ho. Bahut useful form groups ke liye.
        </p>
        <CodeBlock>{`/* Form group ko highlight karo jab uske andar koi input focused ho */
.form-group {
  padding: 15px;
  border: 2px solid #333;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.form-group:focus-within {
  border-color: #6c5ce7;
  background-color: rgba(108, 92, 231, 0.05);
  box-shadow: 0 0 20px rgba(108, 92, 231, 0.1);
}

/* Search bar container */
.search-bar {
  display: flex;
  border: 2px solid #444;
  border-radius: 25px;
  overflow: hidden;
  transition: border-color 0.3s;
}

.search-bar:focus-within {
  border-color: #6c5ce7;
}`}</CodeBlock>

        {/* ==================== Complete Example ==================== */}
        <h3>🎯 Complete Practical Example: Styled Form</h3>
        <CodeBlock>{`/* Complete form styling with all pseudo-classes */
:root {
  --primary: #6c5ce7;
  --danger: #e74c3c;
  --success: #00b894;
  --bg: #0f0f1a;
  --card-bg: #1e1e2e;
}

.form-container {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 16px;
  max-width: 500px;
  margin: 40px auto;
}

.form-group {
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.form-group:focus-within {
  background-color: rgba(108, 92, 231, 0.08);
}

label {
  display: block;
  color: #aaa;
  margin-bottom: 5px;
  font-size: 14px;
}

input:enabled {
  width: 100%;
  padding: 12px;
  border: 2px solid #333;
  border-radius: 8px;
  background: var(--bg);
  color: white;
  font-size: 16px;
  transition: all 0.3s;
}

input:enabled:hover {
  border-color: #555;
}

input:enabled:focus {
  border-color: var(--primary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.3);
}

input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

input[type="checkbox"]:checked + label {
  color: var(--success);
}

.btn:not(:disabled):hover {
  background: #5a4bd1;
  transform: translateY(-2px);
}

.btn:not(:disabled):active {
  transform: translateY(0);
}

.btn:disabled {
  background: #444;
  cursor: not-allowed;
}

/* Form items ke beech mein border — aakhri ko chhod ke */
.form-group:not(:last-child) {
  border-bottom: 1px solid #2d2d44;
  padding-bottom: 20px;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p><strong>Task:</strong> Ek styled todo list banao:</p>
          <ul className="styled-list">
            <li>8-10 list items banao</li>
            <li><code>:nth-child(odd)</code> aur <code>:nth-child(even)</code> se zebra striping lagao</li>
            <li><code>:first-child</code> ko bada aur bold karo</li>
            <li><code>:last-child</code> se aakhri item ka bottom border hatao</li>
            <li><code>:nth-child(3n)</code> se har 3rd item ko special color do</li>
            <li><code>:hover</code> pe list item ka background change karo</li>
            <li><code>:not(:last-child)</code> se sab items ko bottom border do except last</li>
            <li>Ek input field add karo aur <code>:focus</code> pe uska border color change karo</li>
          </ul>
          <p><strong>Bonus:</strong> <code>:focus-within</code> use karke jab input focused ho toh poore form container ka border change karo!</p>
        </div>
      </div>
    )
  },

  {
    id: 'pseudo-elements',
    title: '5. Pseudo-elements (Har Ek Detail Me)',
    content: (
      <div>
        <h2>Pseudo-elements — Virtual Elements Banao CSS Se</h2>
        <p>
          Pseudo-elements bahut powerful hain! Inse tum <strong>HTML mein bina extra tags likhe</strong> virtual (nakli) elements bana sakte ho CSS se. Jaise kisi text ke pehle ek icon lagana, ya kisi heading ke neeche ek decorative line banana — yeh sab pseudo-elements se hota hai.
        </p>
        <p>
          Pseudo-elements <strong>double colon (::)</strong> se shuru hote hain. Purane browsers single colon (:) bhi support karte hain, lekin modern standard <code>::</code> hai.
        </p>

        <div className="info-box">
          <strong>⚡ Key Difference:</strong>
          <br />• <strong>Pseudo-class (:)</strong> → Element ke <em>state/condition</em> ke basis pe style karo (hover, focus, nth-child)
          <br />• <strong>Pseudo-element (::)</strong> → Element ke andar ek <em>virtual part create</em> karo (before, after, first-line)
        </div>

        {/* ==================== ::before and ::after ==================== */}
        <h3>✨ ::before aur ::after — Content Add Karo</h3>
        <p>
          Yeh dono sabse zyada use hone wale pseudo-elements hain. <code>::before</code> element ke <strong>content se pehle</strong> ek virtual element create karta hai, aur <code>::after</code> element ke <strong>content ke baad</strong>. Dono ke liye <code>content</code> property <strong>zaroori</strong> hai — bina iske yeh kaam nahi karte.
        </p>

        <h4>::before — Element Se Pehle Content</h4>
        <p><strong>Example 1: Heading Ke Pehle Emoji/Icon</strong></p>
        <CodeBlock>{`/* Har h2 ke pehle ek fire emoji lagao */
h2::before {
  content: "🔥 ";
}

/* Har section heading ke pehle ek dash lagao */
.section-title::before {
  content: "— ";
  color: #6c5ce7;
  font-weight: bold;
}`}</CodeBlock>

        <p><strong>Example 2: Required Field Indicator</strong></p>
        <CodeBlock>{`/* Required field ke label ke baad red star (*) lagao */
label.required::after {
  content: " *";
  color: #e74c3c;
  font-weight: bold;
  font-size: 18px;
}`}</CodeBlock>
        <CodeBlock lang="html">{`<label class="required">Username</label>
<input type="text">
<!-- "Username *" dikhega -- star CSS se aaya hai, HTML mein nahi hai! -->`}</CodeBlock>

        <p><strong>Example 3: Decorative Underline</strong></p>
        <CodeBlock>{`/* Heading ke neeche ek colorful line */
.fancy-heading {
  text-align: center;
  font-size: 32px;
  color: #e0e0e0;
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 15px;
}

.fancy-heading::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #6c5ce7, #00b894);
  border-radius: 2px;
}`}</CodeBlock>
        <p>Dekho — <code>content: ""</code> (empty string) de ke bhi pseudo-element create kar sakte ho! Phir usse shape ki tarah use kar sakte ho.</p>

        <p><strong>Example 4: Quote Marks</strong></p>
        <CodeBlock>{`/* Blockquote ke around custom quote marks */
blockquote {
  position: relative;
  padding: 30px 40px;
  font-style: italic;
  color: #b2bec3;
  font-size: 20px;
  line-height: 1.8;
}

blockquote::before {
  content: "\\201C";
  font-size: 80px;
  color: #6c5ce7;
  position: absolute;
  top: -10px;
  left: 5px;
  font-family: Georgia, serif;
  opacity: 0.5;
}

blockquote::after {
  content: "\\201D";
  font-size: 80px;
  color: #6c5ce7;
  position: absolute;
  bottom: -40px;
  right: 5px;
  font-family: Georgia, serif;
  opacity: 0.5;
}`}</CodeBlock>
        <p><code>\201C</code> aur <code>\201D</code> Unicode characters hain — left aur right curly quote marks ke liye.</p>

        <p><strong>Example 5: Badge / Tag Banao</strong></p>
        <CodeBlock>{`/* "NEW" badge banao bina HTML change kiye */
.new-feature {
  position: relative;
  display: inline-block;
}

.new-feature::before {
  content: "NEW";
  position: absolute;
  top: -10px;
  right: -10px;
  background: #e74c3c;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 3px 8px;
  border-radius: 10px;
  letter-spacing: 1px;
}

/* "PRO" badge */
.pro-feature::after {
  content: "PRO";
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: white;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  margin-left: 8px;
  font-weight: bold;
  vertical-align: middle;
}`}</CodeBlock>
        <CodeBlock lang="html">{`<span class="new-feature">Dashboard</span>
<h3>Advanced Analytics <span class="pro-feature"></span></h3>`}</CodeBlock>

        <p><strong>Example 6: Tooltip Banao CSS Se</strong></p>
        <CodeBlock>{`/* Pure CSS Tooltip */
.tooltip {
  position: relative;
  cursor: help;
  border-bottom: 1px dotted #6c5ce7;
  display: inline-block;
}

.tooltip::after {
  content: attr(data-tip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 13px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 100;
}

/* Tooltip arrow (triangle) */
.tooltip::before {
  content: "";
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #333;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

/* Hover pe tooltip dikhao */
.tooltip:hover::after,
.tooltip:hover::before {
  opacity: 1;
  visibility: visible;
}`}</CodeBlock>
        <CodeBlock lang="html">{`<p>CSS mein <span class="tooltip" data-tip="Cascading Style Sheets">CSS</span> bahut powerful hai.</p>`}</CodeBlock>
        <p>Dekho — <code>attr(data-tip)</code> se hum HTML attribute ki value ko CSS mein use kar rahe hain! Bina JavaScript ke tooltip ban gaya! 🔥</p>

        <p><strong>Example 7: Decorative Lines Dono Taraf</strong></p>
        <CodeBlock>{`/* Heading ke dono taraf lines */
.divider-heading {
  display: flex;
  align-items: center;
  gap: 15px;
  color: #e0e0e0;
  font-size: 24px;
  margin: 30px 0;
}

.divider-heading::before,
.divider-heading::after {
  content: "";
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, #6c5ce7, transparent);
}`}</CodeBlock>
        <CodeBlock lang="html">{`<h2 class="divider-heading">Section Title</h2>
<!-- Result: — — — Section Title — — — -->`}</CodeBlock>

        {/* ==================== ::first-line ==================== */}
        <h3>📖 ::first-line — Pehli Line Ko Style Karo</h3>
        <p>
          <code>::first-line</code> kisi bhi block-level element ki <strong>pehli line</strong> ko select karta hai. Interesting baat yeh hai ki yeh responsive hai — screen resize hone pe "pehli line" automatically change hoti hai!
        </p>

        <CodeBlock>{`/* Article ki pehli line ko special banao */
article p:first-of-type::first-line {
  font-size: 20px;
  font-weight: bold;
  color: #6c5ce7;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Paragraph ki pehli line */
.intro-text::first-line {
  color: #fd79a8;
  font-size: 22px;
  font-weight: 600;
}

/* Newspaper-style article */
.news-article::first-line {
  font-variant: small-caps;
  font-size: 18px;
  color: #dfe6e9;
  letter-spacing: 1px;
}`}</CodeBlock>

        <div className="info-box">
          <strong>⚠️ Limitation:</strong> <code>::first-line</code> mein sirf limited properties use kar sakte ho — font properties, color, background, text-decoration, text-transform, letter-spacing, word-spacing, line-height. Layout properties (padding, margin, border, etc.) kaam nahi karengi.
        </div>

        {/* ==================== ::first-letter ==================== */}
        <h3>🔠 ::first-letter — Pehla Akshar Style Karo</h3>
        <p>
          <code>::first-letter</code> kisi block-level element ke <strong>pehle character (letter)</strong> ko select karta hai. Yeh "Drop Cap" effect banane ke liye use hota hai — jaise newspapers aur magazines mein pehla akshar bada hota hai.
        </p>

        <p><strong>Example 1: Magazine-Style Drop Cap</strong></p>
        <CodeBlock>{`/* Classic Drop Cap Effect */
.article-body p:first-of-type::first-letter {
  font-size: 72px;
  font-weight: bold;
  color: #6c5ce7;
  float: left;
  line-height: 0.8;
  margin-right: 10px;
  margin-top: 5px;
  font-family: Georgia, 'Times New Roman', serif;
}`}</CodeBlock>

        <p><strong>Example 2: Boxed First Letter</strong></p>
        <CodeBlock>{`/* Box ke andar pehla letter */
.fancy-text::first-letter {
  font-size: 48px;
  font-weight: bold;
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  color: white;
  padding: 5px 15px;
  margin-right: 10px;
  float: left;
  border-radius: 8px;
  line-height: 1;
  box-shadow: 0 4px 10px rgba(108, 92, 231, 0.3);
}`}</CodeBlock>

        <p><strong>Example 3: Simple Colored First Letter</strong></p>
        <CodeBlock>{`/* Har paragraph ka pehla letter colorful */
.colorful-text p::first-letter {
  color: #e94560;
  font-size: 28px;
  font-weight: bold;
}`}</CodeBlock>

        {/* ==================== ::selection ==================== */}
        <h3>🎨 ::selection — Text Select Hone Pe Style</h3>
        <p>
          <code>::selection</code> us text ko style karta hai jo user ne <strong>mouse se select (highlight)</strong> kiya hai. By default browsers blue background dikhate hain, lekin tum isse customize kar sakte ho.
        </p>

        <CodeBlock>{`/* Poore page ka selection style */
::selection {
  background-color: #6c5ce7;
  color: white;
}

/* Sirf paragraphs ka selection style */
p::selection {
  background-color: #fd79a8;
  color: #1a1a2e;
}

/* Headings ka alag selection */
h1::selection,
h2::selection,
h3::selection {
  background-color: #00b894;
  color: white;
}

/* Code blocks ka selection */
code::selection {
  background-color: #fdcb6e;
  color: #1a1a2e;
}`}</CodeBlock>

        <div className="info-box">
          <strong>⚠️ Note:</strong> <code>::selection</code> mein sirf yeh properties use kar sakte ho: <code>color</code>, <code>background-color</code>, <code>text-shadow</code>, <code>cursor</code>. Baaki properties kaam nahi karengi.
        </div>

        {/* ==================== ::placeholder ==================== */}
        <h3>📝 ::placeholder — Input Placeholder Styling</h3>
        <p>
          <code>::placeholder</code> input fields ke <strong>placeholder text</strong> ko style karta hai. Placeholder woh halka text hota hai jo input khaali hone pe dikhta hai, jaise "Enter your email...".
        </p>

        <CodeBlock>{`/* Basic placeholder styling */
input::placeholder {
  color: #666;
  font-style: italic;
  font-size: 14px;
}

/* Specific input types ke placeholders */
input[type="email"]::placeholder {
  color: #74b9ff;
}

input[type="password"]::placeholder {
  color: #e74c3c;
  letter-spacing: 2px;
}

/* Textarea placeholder */
textarea::placeholder {
  color: #888;
  font-family: 'Segoe UI', sans-serif;
}

/* Search input placeholder */
.search-input::placeholder {
  color: #999;
  font-size: 15px;
}

/* Focus hone pe placeholder ko fade karo */
input:focus::placeholder {
  opacity: 0.5;
  transform: translateX(5px);
  transition: all 0.3s ease;
}`}</CodeBlock>

        <CodeBlock lang="html">{`<input type="text" placeholder="Apna naam likho...">
<input type="email" placeholder="email@example.com">
<input type="password" placeholder="Password yahan likho...">
<textarea placeholder="Apna message yahan likho..."></textarea>`}</CodeBlock>

        {/* ==================== ::marker ==================== */}
        <h3>🔵 ::marker — List Bullets/Numbers Styling</h3>
        <p>
          <code>::marker</code> ordered (<code>&lt;ol&gt;</code>) aur unordered (<code>&lt;ul&gt;</code>) lists ke <strong>bullets ya numbers</strong> ko style karta hai. Pehle bullets ko style karna mushkil tha, lekin ab <code>::marker</code> se bahut aasan hai!
        </p>

        <p><strong>Example 1: Colored Bullets</strong></p>
        <CodeBlock>{`/* Unordered list ke bullets ko colorful banao */
ul li::marker {
  color: #6c5ce7;
  font-size: 20px;
}

/* Custom bullet character */
.custom-list li::marker {
  content: "✅ ";
  font-size: 18px;
}

/* Error list */
.error-list li::marker {
  content: "❌ ";
  font-size: 16px;
}`}</CodeBlock>

        <p><strong>Example 2: Styled Numbers</strong></p>
        <CodeBlock>{`/* Ordered list ke numbers ko style karo */
ol li::marker {
  color: #e94560;
  font-weight: bold;
  font-size: 20px;
}

/* Steps list ke numbers */
.steps li::marker {
  color: #00b894;
  font-size: 22px;
  font-weight: 900;
}`}</CodeBlock>

        <p><strong>Example 3: Arrow Bullets</strong></p>
        <CodeBlock>{`/* Arrow style bullets */
.arrow-list li::marker {
  content: "→ ";
  color: #fdcb6e;
  font-size: 18px;
}

/* Star bullets */
.star-list li::marker {
  content: "⭐ ";
}

/* Numbered with custom format */
.fancy-ol li::marker {
  content: "Step " counter(list-item) ": ";
  color: #6c5ce7;
  font-weight: bold;
}`}</CodeBlock>

        <div className="info-box">
          <strong>⚠️ Limitation:</strong> <code>::marker</code> mein sirf limited properties kaam karti hain: <code>color</code>, <code>font-size</code>, <code>font-weight</code>, <code>font-family</code>, <code>content</code>, aur kuch aur font-related properties. Layout properties (padding, margin) kaam nahi karengi.
        </div>

        {/* ==================== content property ==================== */}
        <h3>📦 Content Property Ke Different Values</h3>
        <p>
          <code>content</code> property <code>::before</code> aur <code>::after</code> ke sath use hoti hai. Iske kaafi types ke values ho sakte hain:
        </p>

        <h4>1. Text String</h4>
        <CodeBlock>{`/* Simple text content */
.note::before {
  content: "📌 Note: ";
  font-weight: bold;
  color: #fdcb6e;
}

.warning::before {
  content: "⚠️ Warning: ";
  font-weight: bold;
  color: #e74c3c;
}

.tip::before {
  content: "💡 Tip: ";
  font-weight: bold;
  color: #00b894;
}`}</CodeBlock>

        <h4>2. attr() — HTML Attribute Ki Value</h4>
        <p><code>attr()</code> function se tum kisi bhi HTML attribute ki value ko CSS mein use kar sakte ho.</p>
        <CodeBlock>{`/* Link ke URL ko dikhao */
a[href]::after {
  content: " (" attr(href) ")";
  font-size: 12px;
  color: #888;
  font-style: italic;
}

/* Data attribute se content lo */
.tooltip::after {
  content: attr(data-tooltip);
}

/* Title attribute dikhao */
abbr::after {
  content: " [" attr(title) "]";
  font-size: 12px;
  color: #999;
}`}</CodeBlock>
        <CodeBlock lang="html">{`<a href="https://google.com">Google</a>
<!-- Dikhega: "Google (https://google.com)" -->

<abbr title="Cascading Style Sheets">CSS</abbr>
<!-- Dikhega: "CSS [Cascading Style Sheets]" -->`}</CodeBlock>

        <h4>3. counter() — Automatic Numbering</h4>
        <p>CSS counters se tum automatic numbering laga sakte ho bina <code>&lt;ol&gt;</code> ke!</p>
        <CodeBlock>{`/* Custom counter banao sections ke liye */
body {
  counter-reset: section-counter;
}

.section-heading {
  counter-increment: section-counter;
}

.section-heading::before {
  content: "Chapter " counter(section-counter) ": ";
  color: #6c5ce7;
  font-weight: bold;
}

/* Nested counters example */
body {
  counter-reset: chapter;
}

h2 {
  counter-increment: chapter;
  counter-reset: sub-chapter;
}

h2::before {
  content: counter(chapter) ". ";
  color: #e94560;
}

h3 {
  counter-increment: sub-chapter;
}

h3::before {
  content: counter(chapter) "." counter(sub-chapter) " ";
  color: #74b9ff;
}`}</CodeBlock>

        <h4>4. url() — Image Content</h4>
        <CodeBlock>{`/* Icon lagao before mein */
.download-link::before {
  content: url('download-icon.svg');
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 5px;
  vertical-align: middle;
}

/* External link indicator */
a[href^="https"]::after {
  content: url('external-icon.svg');
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-left: 4px;
}`}</CodeBlock>

        <h4>5. Empty String (Decorative Elements)</h4>
        <CodeBlock>{`/* Empty content se shapes banao */
.card-decorated {
  position: relative;
  padding: 20px;
}

/* Top-right corner decoration */
.card-decorated::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, transparent 50%, #6c5ce7 50%);
  border-radius: 0 12px 0 0;
}

/* Bottom border decoration */
.card-decorated::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 10%;
  width: 80%;
  height: 3px;
  background: linear-gradient(90deg, #6c5ce7, #00b894, #e94560);
  border-radius: 3px;
}`}</CodeBlock>

        {/* ==================== Real-world Decorative Examples ==================== */}
        <h3>🎨 Real-World Decorative Examples</h3>

        <p><strong>Example 1: Glowing Card Border (::before)</strong></p>
        <CodeBlock>{`/* Animated glowing border effect */
.glow-card {
  position: relative;
  background: #1e1e2e;
  padding: 30px;
  border-radius: 12px;
  z-index: 1;
}

.glow-card::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #6c5ce7, #00b894, #e94560, #fdcb6e);
  border-radius: 14px;
  z-index: -1;
  background-size: 300%;
  animation: glowBorder 3s linear infinite;
}

@keyframes glowBorder {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`}</CodeBlock>

        <p><strong>Example 2: Ribbon Badge (::before + ::after)</strong></p>
        <CodeBlock>{`/* Corner ribbon badge */
.ribbon-card {
  position: relative;
  overflow: hidden;
  background: #1e1e2e;
  padding: 30px;
  border-radius: 12px;
}

.ribbon-card::before {
  content: "POPULAR";
  position: absolute;
  top: 20px;
  right: -35px;
  background: #e94560;
  color: white;
  padding: 5px 40px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  transform: rotate(45deg);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}`}</CodeBlock>

        <p><strong>Example 3: Blockquote with Decorative Bars</strong></p>
        <CodeBlock>{`/* Stylish blockquote */
.styled-quote {
  position: relative;
  padding: 25px 30px;
  background: #1a1a2e;
  border-radius: 10px;
  font-style: italic;
  color: #b2bec3;
  font-size: 18px;
  line-height: 1.8;
}

.styled-quote::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, #6c5ce7, #00b894);
  border-radius: 4px 0 0 4px;
}

.styled-quote::after {
  content: "\\275D";
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 60px;
  color: rgba(108, 92, 231, 0.15);
  font-style: normal;
}`}</CodeBlock>

        <p><strong>Example 4: Step Progress Indicator</strong></p>
        <CodeBlock>{`/* Progress steps with numbers */
.steps-container {
  counter-reset: step-counter;
  display: flex;
  gap: 30px;
  justify-content: center;
}

.step {
  position: relative;
  text-align: center;
  padding-top: 50px;
}

.step::before {
  counter-increment: step-counter;
  content: counter(step-counter);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: #6c5ce7;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
}

.step.completed::before {
  content: "\\2713";
  background: #00b894;
}`}</CodeBlock>
        <CodeBlock lang="html">{`<div class="steps-container">
  <div class="step completed">Sign Up</div>
  <div class="step completed">Verify Email</div>
  <div class="step">Setup Profile</div>
  <div class="step">Start Learning</div>
</div>`}</CodeBlock>

        {/* ==================== Complete Example ==================== */}
        <h3>🎯 Complete Practical Example: Styled Article Page</h3>
        <CodeBlock>{`/* Complete article page using all pseudo-elements */

/* Selection styling */
::selection {
  background-color: #6c5ce7;
  color: white;
}

/* Article heading with decorative line */
.article h1 {
  font-size: 36px;
  color: #e0e0e0;
  text-align: center;
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.article h1::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #6c5ce7, #00b894);
  border-radius: 2px;
}

/* Drop cap on first paragraph */
.article p:first-of-type::first-letter {
  font-size: 64px;
  font-weight: bold;
  color: #6c5ce7;
  float: left;
  line-height: 0.8;
  margin-right: 12px;
  margin-top: 8px;
  font-family: Georgia, serif;
}

/* First line styling */
.article p:first-of-type::first-line {
  font-weight: 600;
  color: #dfe6e9;
}

/* Info boxes with icons */
.article .info::before {
  content: "ℹ️ ";
  font-size: 18px;
}

.article .warning::before {
  content: "⚠️ ";
  font-size: 18px;
}

/* List markers */
.article ul li::marker {
  content: "→ ";
  color: #6c5ce7;
  font-size: 16px;
}

/* Links show URL on print */
@media print {
  .article a::after {
    content: " [" attr(href) "]";
    font-size: 11px;
    color: #999;
  }
}

/* Input placeholders */
.article input::placeholder {
  color: #666;
  font-style: italic;
}

.article textarea::placeholder {
  color: #666;
  font-style: italic;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Mini Task</h4>
          <p><strong>Task:</strong> Ek styled article page banao jismein yeh sab pseudo-elements use hon:</p>
          <ul className="styled-list">
            <li><code>::before</code> se heading ke pehle ek emoji aur decorative element lagao</li>
            <li><code>::after</code> se heading ke neeche ek gradient line banao</li>
            <li><code>::first-letter</code> se pehle paragraph ka drop cap effect banao</li>
            <li><code>::first-line</code> se pehli line ko uppercase aur bold karo</li>
            <li><code>::selection</code> se custom highlight color lagao</li>
            <li><code>::placeholder</code> se input fields ke placeholders ko italic aur colored karo</li>
            <li><code>::marker</code> se list bullets ko custom emojis se replace karo</li>
            <li><strong>Bonus 1:</strong> <code>::before</code> aur <code>::after</code> se ek tooltip banao (jaise upar example mein dekha)</li>
            <li><strong>Bonus 2:</strong> CSS counters use karke automatic section numbering lagao</li>
            <li><strong>Bonus 3:</strong> <code>attr()</code> function use karke kisi element ke data attribute ki value dikhao</li>
          </ul>
        </div>
      </div>
    )
  }
];

export default chapters;
