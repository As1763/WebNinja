import React from 'react';
import LiveEditor from '../../components/LiveEditor';

const chapters = [
  {
    id: 'css-display',
    title: '13. Display (Block, Inline, Inline-Block, None)',
    content: (
      <div className="space-y-6">
        <h2>CSS Display Property - Layout Ki Shuruaat</h2>
        <p>CSS mein <code>display</code> property layout ka sabse important foundation hai. Ye decide karti hai ki ek element screen par kaisa behave karega aur doosre elements ke sath space kaise share karega. Padh ke pro banne ka time aa gaya hai!</p>
        
        <h3>1. Block, Inline, aur Inline-Block ka Mahayudh</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong><code>block</code>:</strong> Poori width (100%) leta hai. Humesha ek nayi line se start hota hai. Isme width, height, margin, padding sab acche se kaam karte hain. Examples: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>.</li>
          <li><strong><code>inline</code>:</strong> Sirf utni width leta hai jitni content ko chahiye. Line break nahi karta. Is par <code>width</code>, <code>height</code>, <code>margin-top</code> aur <code>margin-bottom</code> ka asar <strong>NAHI</strong> hota. Examples: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>.</li>
          <li><strong><code>inline-block</code>:</strong> Inline ki tarah ek hi line me rehta hai, lekin block ki tarah isme <code>width</code> aur <code>height</code> set kar sakte hain. Best of both worlds!</li>
        </ul>

        <LiveEditor title="Display Values Comparison" initialCode={`<style>
  .box { padding: 15px; color: white; font-weight: bold; border-radius: 4px; text-align: center; }
  .block-box { display: block; background-color: #ef4444; margin-bottom: 10px; width: 200px; height: 50px; }
  .inline-box { display: inline; background-color: #3b82f6; margin: 20px; /* Top/bottom margin ignores inline! */ width: 200px; /* Width ignored! */ }
  .inline-block-box { display: inline-block; background-color: #10b981; margin: 10px; width: 150px; height: 50px; }
</style>
<div>
  <h3>Block Element</h3>
  <div class="box block-box">Main block hu!</div>
  <div class="box block-box">Main bhi block hu!</div>
  
  <h3>Inline Element</h3>
  <p>Text ke beech me <span class="box inline-box">Inline hu main!</span> aur aage ka text.</p>
  
  <h3>Inline-Block Element</h3>
  <div class="box inline-block-box">Inline-Block 1</div>
  <div class="box inline-block-box">Inline-Block 2</div>
  <div class="box inline-block-box">Inline-Block 3</div>
</div>`} />

        <h3>2. Display None vs Visibility Hidden vs Opacity 0</h3>
        <p>Ye interview ka sabse favourite question hai:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong><code>display: none;</code></strong>: Element poori tarah se layout se hat jata hai, jagah bhi free kar deta hai.</li>
          <li><strong><code>visibility: hidden;</code></strong>: Element invisible ho jata hai, par <strong>apni jagah gherta rehta hai</strong>.</li>
          <li><strong><code>opacity: 0;</code></strong>: Element transparent ho jata hai, par abhi bhi click ho sakta hai aur jagah bhi leta hai.</li>
        </ul>

        <LiveEditor title="Hide Elements" initialCode={`<style>
  .container { border: 2px solid #ccc; padding: 10px; margin-bottom: 20px; }
  .box { width: 100px; height: 100px; display: inline-block; color: white; font-weight: bold; text-align: center; line-height: 100px; }
  .bg-blue { background: #3b82f6; }
  
  .none { display: none; }
  .hidden { visibility: hidden; }
  .transparent { opacity: 0; }
</style>
<div>
  <h4>1. Display: None (Middle box removed)</h4>
  <div class="container">
    <div class="box bg-blue">Box 1</div>
    <div class="box bg-blue none">Box 2</div>
    <div class="box bg-blue">Box 3</div>
  </div>

  <h4>2. Visibility: Hidden (Middle box invisible but takes space)</h4>
  <div class="container">
    <div class="box bg-blue">Box 1</div>
    <div class="box bg-blue hidden">Box 2</div>
    <div class="box bg-blue">Box 3</div>
  </div>
</div>`} />

        <h3>Advanced Display Values (Pro level)</h3>
        <p>CSS me aur bhi advanced display values hoti hain:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong><code>display: contents;</code></strong>: Element khud gayab ho jata hai, par uske children DOM me wahi rehte hain aur parent ko direct children milte hain. Semantic HTML ke liye bahot useful hai.</li>
          <li><strong><code>display: table;</code></strong>: Elements ko legacy HTML table layout jaisa behave karwata hai.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'css-position',
    title: '14. Position (Static, Relative, Absolute, Fixed, Sticky)',
    content: (
      <div className="space-y-6">
        <h2>CSS Position Property - Element ko control karo</h2>
        <p>Positioning ka concept CSS me thoda tricky ho sakta hai agar clear na ho. Har element ki position modify karne ke liye hum top, right, bottom, left properties ka use karte hain, par ye tab tak kaam nahi karengi jab tak position property set na ho!</p>

        <h3>1. <code>position: static;</code> (The Default)</h3>
        <p>HTML elements default by static hote hain. Inka flow normal page sequence me hota hai. Top, bottom, left, right inpe asar <strong>NAHI</strong> karte.</p>

        <h3>2. <code>position: relative;</code></h3>
        <p>Relative ka matlab hai <strong>"apni original jagah ke relative"</strong>. Agar aap isko <code>top: 20px</code> denge, toh ye apni normal static position se 20px niche khisak jayega, lekin uski purani jagah (space) reserve rahegi, aaspas ke elements shift nahi honge.</p>

        <LiveEditor title="Relative Positioning" initialCode={`<style>
  .box { width: 100px; height: 100px; background: #3b82f6; color: white; display: inline-block; padding: 10px; margin: 10px; }
  .relative-box {
    position: relative;
    top: 30px;
    left: 20px;
    background: #ef4444;
  }
</style>
<div>
  <div class="box">Box 1</div>
  <div class="box relative-box">Relative Box<br/>(Shifted)</div>
  <div class="box">Box 3 (Normal)</div>
</div>`} />

        <h3>3. <code>position: absolute;</code> (The Wildcard)</h3>
        <p>Absolute position ka matlab hai element ko normal document flow se <strong>bahar nikal lena</strong>. Ab iski original jagah completely khatam ho jati hai.</p>
        <p><strong>Crucial Rule:</strong> Absolute element apne sabse nazdeek wale <strong>"positioned parent"</strong> (jiski position static NAHI hai) ke relative move karta hai. Agar koi parent positioned nahi hai, toh ye poore page (browser window) ke hisaab se move karega!</p>

        <LiveEditor title="Absolute Positioning (Parent-Child)" initialCode={`<style>
  .parent {
    position: relative; /* Without this, absolute goes to body! */
    width: 300px;
    height: 300px;
    background: #f3f4f6;
    border: 3px solid #1f2937;
    margin: 20px;
  }
  .child {
    position: absolute;
    width: 80px;
    height: 80px;
    background: #f59e0b;
    color: white;
    text-align: center;
    line-height: 80px;
    border-radius: 50%;
  }
  .c1 { top: 10px; left: 10px; }
  .c2 { top: 10px; right: 10px; background: #8b5cf6; }
  .c3 { bottom: 10px; left: 10px; background: #ec4899; }
  .c4 { bottom: -40px; right: -40px; background: #10b981; } /* Can go outside! */
</style>
<div class="parent">
  Parent (Relative)
  <div class="child c1">C1</div>
  <div class="child c2">C2</div>
  <div class="child c3">C3</div>
  <div class="child c4">C4</div>
</div>`} />

        <h3>4. <code>position: fixed;</code></h3>
        <p>Fixed positioning ekdam absolute jaisi hoti hai, lekin parent ki jagah ye humesha <strong>viewport (browser window)</strong> ke relative chalti hai. Page scroll hone par bhi ye apni jagah pe chipki rehti hai. (Jaise headers ya chat buttons).</p>

        <h3>5. <code>position: sticky;</code> (The Modern Magic)</h3>
        <p>Sticky, <code>relative</code> aur <code>fixed</code> ka combination hai. Jab tak element screen par ek certain point tak scroll nahi hota, tab tak wo <code>relative</code> behave karta hai, par jaise hi point hit karta hai, wo <code>fixed</code> ban ke wahi atak jata hai.</p>
        <p><strong>Pro Tip:</strong> Sticky kaam karne ke liye parent me scroll hona chahiye aur <code>top</code>, <code>bottom</code>, <code>left</code>, ya <code>right</code> value specify honi chahiye!</p>

        <LiveEditor title="Sticky Positioning" initialCode={`<style>
  .scroll-container {
    height: 250px;
    overflow-y: auto;
    border: 2px solid #ccc;
    background: white;
  }
  .sticky-header {
    position: sticky;
    top: 0; /* Jab top 0 hit hoga, sticky ho jayega */
    background: #14b8a6;
    color: white;
    padding: 15px;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .content { padding: 15px; height: 600px; background: linear-gradient(#f8fafc, #94a3b8); }
</style>
<div class="scroll-container">
  <div class="sticky-header">Main Sticky Header Hu!</div>
  <div class="content">
    <h3>Niche Scroll karo 👇</h3>
    <p>Header top pe chipak jayega.</p>
  </div>
</div>`} />
      </div>
    )
  },
  {
    id: 'css-z-index',
    title: '15. Z-index (The Stacking Context)',
    content: (
      <div className="space-y-6">
        <h2>Z-Index: 3D Depth CSS mein</h2>
        <p><code>z-index</code> batata hai ki jab do elements overlap kar rahe hon (ek ke upar ek aa rahe hon), toh kaunsa element upar dikhega aur kaunsa peeche. Jis element ka z-index zyada hoga, wo aage dikhega.</p>
        
        <p className="p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-900 rounded">
          <strong>Pro Rule (Ye bhoolna mat!):</strong> <code>z-index</code> sirf un elements par kaam karta hai jinki position <code>absolute</code>, <code>relative</code>, <code>fixed</code>, ya <code>sticky</code> ho. Static elements par z-index ka koi asar nahi hota!
        </p>

        <h3>1. The Z-Axis aur Stacking Order</h3>
        <p>Default z-index <code>auto</code> hota hai (jo basically 0 hota hai). Aap positive aur negative dono values use kar sakte hain. Negative value element ko dusre elements ke peeche dhakel deti hai.</p>

        <LiveEditor title="Basic Z-Index Overlap" initialCode={`<style>
  .container { position: relative; height: 200px; margin: 20px; }
  .box {
    position: absolute;
    width: 100px;
    height: 100px;
    color: white;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
  }
  .box1 { background: #ef4444; top: 10px; left: 10px; z-index: 1; }
  .box2 { background: #3b82f6; top: 40px; left: 40px; z-index: 3; }
  .box3 { background: #10b981; top: 70px; left: 70px; z-index: 2; }
</style>
<div class="container">
  <div class="box box1">Z: 1</div>
  <div class="box box2">Z: 3 (Top)</div>
  <div class="box box3">Z: 2</div>
</div>`} />

        <h3>2. The "Stacking Context" Nightmare (Pro Level)</h3>
        <p>Sabse zyada confusion yaha aati hai. Jab aap kisi parent ka z-index set karte hain (along with positioned element), toh ek naya "Stacking Context" ban jata hai. Uske andar ke children baki page ke elements se directly compete nahi karte, wo apne parent ke group me bandh jate hain.</p>
        <p><strong>Misconception:</strong> Log sochte hain z-index 9999 dene se element sabse upar aa jayega. Par agar uska parent z-index 1 hai, aur dusra element z-index 2 wale parent ke andar hai, toh 9999 wala peeche hi rahega!</p>

        <LiveEditor title="Stacking Context Demonstration" initialCode={`<style>
  .parent1 {
    position: relative;
    z-index: 1; /* Naya context ban gaya */
    background: #fca5a5; padding: 20px; margin-bottom: 50px;
  }
  .parent2 {
    position: relative;
    z-index: 2; /* Ye parent upar hai */
    background: #93c5fd; padding: 20px;
    top: -50px;
  }
  .child-9999 {
    position: relative;
    z-index: 9999; /* Iska koi fayda nahi kyuki parent 1 ka z-index chota hai! */
    background: red; color: white; padding: 10px;
  }
  .child-1 {
    position: relative;
    z-index: 1;
    background: blue; color: white; padding: 10px;
  }
</style>
<div>
  <div class="parent1">
    Parent 1 (z-index: 1)
    <div class="child-9999">Child (z-index: 9999) - Ye uper nahi aayega!</div>
  </div>
  <div class="parent2">
    Parent 2 (z-index: 2)
    <div class="child-1">Child (z-index: 1)</div>
  </div>
</div>`} />
        
        <p><strong>Naya context kaise banta hai?</strong></p>
        <ul className="list-disc ml-6 space-y-2">
          <li><code>position</code> absolute/relative ho aur <code>z-index</code> auto na ho.</li>
          <li><code>position: fixed</code> ya <code>sticky</code>.</li>
          <li>Element jo flex/grid item ho aur z-index value auto na ho.</li>
          <li><code>opacity</code> 1 se kam ho (e.g., 0.99).</li>
          <li><code>transform</code>, <code>filter</code>, <code>backdrop-filter</code> jaisi CSS properties use hone par.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'css-float',
    title: '16. Float aur Clear (The Old Way of Layout)',
    content: (
      <div className="space-y-6">
        <h2>Float Property: Text Wrapping se Layout tak</h2>
        <p>Pehle ke zamaane me (Flexbox aur Grid aane se pehle), layouts banane ke liye sirf <code>float</code> property ka hi sahara tha. Aaj ke time pe float ka use mostly <strong>images ke aaspas text ko wrap</strong> karne ke liye hota hai.</p>

        <h3>1. <code>float: left</code> aur <code>float: right</code></h3>
        <p>Jab kisi element ko float kiya jata hai, toh wo normal flow se thoda alag ho jata hai, aur uske baad aane wale elements (text/inline elements) uske aaspas wrap hone lagte hain.</p>

        <LiveEditor title="Image Text Wrapping" initialCode={`<style>
  .container { background: #f3f4f6; padding: 15px; border-radius: 8px; }
  .image-box {
    float: left; /* Image left me jayegi */
    width: 100px;
    height: 100px;
    background: #ec4899;
    color: white;
    display: flex; align-items: center; justify-content: center;
    margin-right: 15px; /* Text ke liye gap */
    margin-bottom: 5px;
    border-radius: 8px;
  }
  .image-box-right {
    float: right;
    background: #3b82f6;
    margin-left: 15px;
  }
</style>
<div class="container">
  <div class="image-box">Float Left</div>
  <p>Ye text is left floated div ke right side pe flow karega. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur rem eaque tempore. Ye text is left floated div ke right side pe flow karega. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  
  <div class="image-box image-box-right">Float Right</div>
  <p>Ab ye text us naye box ke left side pe flow karega jo right me float kar raha hai. Float bahot mast feature hai newspaper style layouts banane ke liye.</p>
</div>`} />

        <h3>2. <code>clear</code> Property (Float rokna)</h3>
        <p>Kabhi kabhi hum chahte hain ki agla element floated elements ke baaju me na aaye, balki naye line se start ho (unke niche). Iske liye <code>clear</code> property use hoti hai.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><code>clear: left;</code>: Left floats ko allow nahi karta apne aaspas.</li>
          <li><code>clear: right;</code>: Right floats ko allow nahi karta.</li>
          <li><code>clear: both;</code>: Kisi bhi float (left ya right) ko apni line me aane nahi deta.</li>
        </ul>

        <h3>3. The "Clearfix" Hack (Bohot zaroori!)</h3>
        <p>Agar ek parent ke andar saare children floated hain, toh parent unki height ko recognize nahi kar pata aur wo "collapse" ho jata hai (height 0 ho jati hai). Ise theek karne ke liye <strong>Clearfix</strong> hack ka use kiya jata hai.</p>

        <LiveEditor title="Collapsing Parent and Clearfix Hack" initialCode={`<style>
  .no-clearfix { border: 3px solid red; background: #fee2e2; margin-bottom: 30px; padding: 10px; }
  .with-clearfix { border: 3px solid green; background: #dcfce7; padding: 10px; }
  
  .floated-child {
    float: left;
    width: 80px; height: 80px;
    background: #4b5563; color: white; margin: 10px;
  }

  /* Clearfix Magic */
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }
</style>
<div>
  <h4>Without Clearfix (Parent collapsed, red border doesn't cover boxes)</h4>
  <div class="no-clearfix">
    <div class="floated-child">Child</div>
    <div class="floated-child">Child</div>
  </div>

  <h4 style="margin-top: 100px;">With Clearfix (Parent expands)</h4>
  <div class="with-clearfix clearfix">
    <div class="floated-child">Child</div>
    <div class="floated-child">Child</div>
  </div>
</div>`} />
        
      </div>
    )
  },
  {
    id: 'css-flexbox-container',
    title: '17. Flexbox Container (The Modern Layout 1)',
    content: (
      <div className="space-y-6">
        <h2>Flexbox (Parent Properties): 1D Layout King</h2>
        <p>Flexbox (Flexible Box Layout) ne CSS layout ko revolutionize kar diya hai. Ye ek direction (row ya column) me elements ko align, distribute aur order karne ke liye sabse best tool hai. <strong>Flexbox ko do parts me padha jata hai: Parent (Container) properties aur Child (Item) properties.</strong></p>

        <h3>1. <code>display: flex;</code> (Jadoo shuru!)</h3>
        <p>Flexbox chalu karne ke liye parent me <code>display: flex;</code> dalte hain. Isse saare direct children <strong>flex-items</strong> ban jate hain aur by default ek hi line (row) me aa jate hain.</p>

        <h3>2. <code>flex-direction</code> (Main Axis define karo)</h3>
        <p>Ye define karta hai ki elements kis direction me flow karenge:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li><code>row</code> (Default): Left se Right.</li>
          <li><code>row-reverse</code>: Right se Left.</li>
          <li><code>column</code>: Top se Bottom.</li>
          <li><code>column-reverse</code>: Bottom se Top.</li>
        </ul>

        <h3>3. <code>flex-wrap</code> (Multiline control)</h3>
        <p>Agar elements ka size parent se bada ho jaye toh by default wo squeeze (shrink) hote hain ek line me fit hone ke liye (<code>nowrap</code>). Agar hum unhe nayi line me bhejna chahte hain toh <code>flex-wrap: wrap;</code> use karte hain.</p>

        <LiveEditor title="Flex Direction & Wrap" initialCode={`<style>
  .flex-container {
    display: flex;
    flex-direction: row; /* Try column, row-reverse */
    flex-wrap: wrap;     /* Try nowrap */
    background: #1f2937;
    padding: 10px;
    gap: 10px; /* Modern spacing property */
  }
  .box { width: 100px; height: 50px; background: #14b8a6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; }
</style>
<div class="flex-container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
  <div class="box">7</div>
</div>`} />

        <h3>4. Alignment Properties (The Holy Trinity)</h3>
        <p><strong>A. <code>justify-content</code></strong>: Main Axis (jo direction hai) ke along elements ko align karta hai.</p>
        <ul className="list-disc ml-6 space-y-1">
          <li><code>flex-start</code>, <code>flex-end</code>, <code>center</code></li>
          <li><code>space-between</code> (End to end, beech me gap)</li>
          <li><code>space-around</code> (Donu side equal gap)</li>
          <li><code>space-evenly</code> (Har jagah perfectly equal gap)</li>
        </ul>

        <p><strong>B. <code>align-items</code></strong>: Cross Axis (Main axis ke perpendicular) par elements ko align karta hai.</p>
        <ul className="list-disc ml-6 space-y-1">
          <li><code>stretch</code> (Default: poori height le lenge)</li>
          <li><code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>baseline</code></li>
        </ul>

        <p><strong>C. <code>align-content</code></strong>: Jab flex-wrap on ho aur multiple lines ban jayein, toh un lines ko Cross Axis pe kaise align karna hai uske liye.</p>

        <LiveEditor title="Justify and Align" initialCode={`<style>
  .container {
    display: flex;
    justify-content: space-between; /* Horizontal alignment (in row) */
    align-items: center;            /* Vertical alignment (in row) */
    height: 150px;
    background: #f1f5f9;
    border: 2px dashed #94a3b8;
  }
  .box { background: #8b5cf6; padding: 20px; color: white; border-radius: 4px; }
  .box2 { padding: 40px; background: #a855f7; } /* Diff size to see center align */
</style>
<div class="container">
  <div class="box">Item 1</div>
  <div class="box box2">Item 2</div>
  <div class="box">Item 3</div>
</div>`} />
        
        <h3>Pro Trick: Perfect Centering</h3>
        <p>Kisi bhi element ko bilkul perfectly center karna hamesha se CSS me mushkil tha, flexbox ne isko do line ka kaam bana diya:</p>
        <pre className="bg-gray-800 text-white p-3 rounded">
{`.center-div {
  display: flex;
  justify-content: center;
  align-items: center;
}`}
        </pre>
      </div>
    )
  },
  {
    id: 'css-flexbox-items',
    title: '18. Flexbox Items (The Modern Layout 2)',
    content: (
      <div className="space-y-6">
        <h2>Flexbox Children Properties: Control Every Item!</h2>
        <p>Flex container (parent) ke andar maujood direct children ko <strong>Flex Items</strong> kaha jata hai. In children ki apni alag properties hoti hain jisse hum unka individual behavior control kar sakte hain.</p>

        <h3>1. <code>order</code> (Item ka position change karna)</h3>
        <p>By default, saare items ka order <code>0</code> hota hai, aur wo HTML me jis sequence me aate hain waise hi dikhte hain. <code>order</code> property se aap bina HTML change kiye items ki sequence aage-peeche kar sakte hain. Lower numbers pehle aate hain!</p>

        <h3>2. <code>align-self</code> (Individual alignment)</h3>
        <p>Parent ka <code>align-items</code> saare children ko ek sath align karta hai. Agar kisi ek child ko alag se align karna hai (e.g. sab center hain par ek bottom pe chahiye), toh is child me <code>align-self</code> use karte hain. Values wahi hain: <code>flex-start</code>, <code>flex-end</code>, <code>center</code>, <code>stretch</code>.</p>

        <LiveEditor title="Order and Align-Self" initialCode={`<style>
  .container {
    display: flex;
    align-items: flex-start; /* Sab top pe hain */
    height: 150px;
    background: #e5e7eb;
    gap: 10px; padding: 10px;
  }
  .item { width: 80px; background: #4f46e5; color: white; display: flex; align-items: center; justify-content: center; height: 50px;}
  
  .special-order { order: -1; background: #e11d48; } /* Sabse aage aayega */
  .special-align { align-self: flex-end; background: #059669; } /* Sabse neeche jayega */
  .special-both { order: 5; align-self: center; background: #ea580c; height: 80px; } /* Sabse aakhri aur center */
</style>
<div class="container">
  <div class="item">HTML 1</div>
  <div class="item special-align">HTML 2 (Align End)</div>
  <div class="item">HTML 3</div>
  <div class="item special-both">HTML 4 (Order 5, Center)</div>
  <div class="item special-order">HTML 5 (Order -1)</div>
</div>`} />

        <h3>3. Flexability: Grow, Shrink aur Basis</h3>
        <p>Ye sabse important aur powerful concept hai flexbox me! Kaise items bache hue space ko distribute karte hain.</p>

        <ul className="list-disc ml-6 space-y-2">
          <li><strong><code>flex-grow</code></strong>: Default 0. Batata hai ki bacha hua space available ho, toh item kitna grow karega. Agar sabka 1 hai, toh space equally divide hoga. Agar kisi ek ka 2 hai, toh wo baakiyon se double extra space lega.</li>
          <li><strong><code>flex-shrink</code></strong>: Default 1. Agar space kam pad jaye parent me, toh items kitna shrink (chote) honge. Agar kisi ka shrink 0 kar do, toh wo nahi sikudega (shrink hoga) chahye parent overflow kyu na ho jaye.</li>
          <li><strong><code>flex-basis</code></strong>: Default <code>auto</code>. Ye item ki <em>ideal/initial</em> size hoti hai space distribution (grow/shrink) start hone se pehle. Ye <code>width</code> (ya column me <code>height</code>) ke jaisa kaam karta hai par flexbox context me zyada reliable hai.</li>
        </ul>

        <h3>4. Shorthand: <code>flex</code></h3>
        <p>Aap in teeno ko ek sath likh sakte hain: <code>flex: [flex-grow] [flex-shrink] [flex-basis];</code><br/>
        Jaise: <code>flex: 1 0 200px;</code> (Grow hoga, shrink nahi hoga, initial size 200px).</p>

        <LiveEditor title="Grow, Shrink & Basis" initialCode={`<style>
  .container { display: flex; background: #1e293b; padding: 10px; gap: 10px; }
  .box { padding: 20px; color: white; text-align: center; }
  
  .box1 { background: #be123c; flex: 1; } /* flex-grow 1: takes available space */
  .box2 { background: #047857; flex: 2; } /* flex-grow 2: takes double the space of box1 */
  .box3 { background: #b45309; flex-basis: 300px; flex-shrink: 0; } /* fixed basis, won't shrink! */
</style>
<div class="container">
  <div class="box box1">Flex: 1</div>
  <div class="box box2">Flex: 2<br>(Twice as fast)</div>
  <div class="box box3">Basis: 300px<br>Shrink: 0</div>
</div>`} />
      </div>
    )
  },
  {
    id: 'css-grid-container',
    title: '19. CSS Grid Container (The 2D Boss)',
    content: (
      <div className="space-y-6">
        <h2>CSS Grid: The 2D Layout System</h2>
        <p>Flexbox ek dimension (sirf row, ya sirf column) ke liye best tha. <strong>CSS Grid</strong> rows aur columns dono ko ek sath control karta hai. Isse complex page layouts banana bohot aasan ho gaya hai. Like Flexbox, Grid ki properties bhi Parent aur Child me bati hui hain.</p>

        <h3>1. <code>display: grid;</code> aur Template defining</h3>
        <p>Grid banate hi hume batana padta hai ki kitne column aur kitne row hone chahiye aur unka size kya hoga.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong><code>grid-template-columns</code></strong>: Har column ki width specify karta hai. (e.g. <code>100px 200px auto</code> = 3 columns).</li>
          <li><strong><code>grid-template-rows</code></strong>: Har row ki height specify karta hai.</li>
        </ul>

        <h3>2. The Fractional Unit (<code>fr</code>)</h3>
        <p>Grid ne ek naya magic unit diya hai: <code>fr</code> (fraction of available space). Ye flex-grow jaisa hi kaam karta hai. Agar aap <code>1fr 1fr 1fr</code> likhte hain, toh available space me 3 equal columns ban jayenge!</p>

        <LiveEditor title="Basic Grid Layout" initialCode={`<style>
  .grid-container {
    display: grid;
    /* 3 columns: 1st is 150px fixed, 2nd is 1 part space, 3rd is 2 parts space */
    grid-template-columns: 150px 1fr 2fr;
    grid-template-rows: 100px 100px;
    gap: 15px; /* Grid me bhi gap kaam karta hai */
    background: #374151; padding: 15px;
  }
  .item { background: #ec4899; color: white; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: bold; border-radius: 5px; }
</style>
<div class="grid-container">
  <div class="item">1 (150px)</div>
  <div class="item">2 (1fr)</div>
  <div class="item">3 (2fr)</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`} />

        <h3>3. <code>repeat()</code> aur <code>minmax()</code> (Pro Features)</h3>
        <p>Bar bar <code>1fr 1fr 1fr</code> likhne ki jagah hum <code>repeat(3, 1fr)</code> likh sakte hain. <code>minmax(min, max)</code> ensure karta hai ki ek column/row kisi size se chota na ho aur kisi size se bada na ho.</p>

        <h3>4. Auto-Responsive Grid Bina Media Query ke! (Mindblown 🤯)</h3>
        <p>CSS grid ka sabse killer feature hai <code>auto-fit</code>. Ye auto decide karta hai ki kitne columns fit honge container me, agar resize karenge toh columns wrap ho jayenge without any media queries!</p>

        <LiveEditor title="Auto Responsive Grid" initialCode={`<style>
  .auto-grid {
    display: grid;
    /* Jadoo yaha hai: Minimum width 150px, otherwise take 1fr */
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    background: #e2e8f0; padding: 10px;
  }
  .box { background: #2563eb; color: white; height: 100px; display: flex; align-items: center; justify-content: center; border-radius: 8px;}
</style>
<div class="auto-grid">
  <div class="box">Item 1</div>
  <div class="box">Item 2</div>
  <div class="box">Item 3</div>
  <div class="box">Item 4</div>
  <div class="box">Item 5</div>
</div>`} />

        <h3>5. <code>grid-template-areas</code> (Visual Layout)</h3>
        <p>Ye sabse unique property hai jisme aap ASCII art ki tarah layout define kar sakte ho!</p>
        <pre className="bg-gray-800 text-white p-3 rounded">
{`grid-template-areas:
  "header header header"
  "sidebar content content"
  "footer footer footer";`}
        </pre>
        <p>Agle chapter me dekhnege isko child element me assign kaise karna hai.</p>

        <h3>6. Justify & Align</h3>
        <p>Grid me bhi <code>justify-items</code> (horizontal), <code>align-items</code> (vertical) aur <code>place-items</code> (dono ek sath) hote hain. Ye elements ko apne grid cell (dabbe) ke andar align karte hain.</p>
      </div>
    )
  },
  {
    id: 'css-grid-items',
    title: '20. CSS Grid Items (The Ultimate Control)',
    content: (
      <div className="space-y-6">
        <h2>Grid Items (Children): Place them anywhere!</h2>
        <p>Grid Container ne ek invisible jaal (grid lines) bicha diya hai. Ab grid items ko hum us jaal me apni marzi se place kar sakte hain. Grid lines 1 se start hoti hain. Agar 3 column ka grid hai, toh 4 vertical lines hongi (1, 2, 3, 4).</p>

        <h3>1. Grid Line Placement</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong><code>grid-column-start</code> / <code>grid-column-end</code></strong>: Batata hai item kis line se start hoke kis line tak fela (span) hua hai.</li>
          <li><strong>Shorthand: <code>grid-column: start / end;</code></strong></li>
          <li><strong><code>span</code> keyword</strong>: Line number likhne ke bajaye, seedha likho <code>span 2</code> (matlab 2 column jagah gher lo).</li>
          <li>Negative line numbers (jaise <code>-1</code>) opposite direction (end) se count karte hain. <code>1 / -1</code> ka matlab poori row/column stretch karna.</li>
        </ul>

        <LiveEditor title="Placing and Spanning Grid Items" initialCode={`<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 100px 100px 100px;
    gap: 10px; background: #ddd; padding: 10px;
  }
  .item { background: #14b8a6; color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; border: 2px solid #0f766e; }
  
  .header { grid-column: 1 / -1; background: #eab308; } /* Poori width */
  .sidebar { grid-row: 2 / span 2; background: #a855f7; } /* 2 rows height */
  .hero { grid-column: 2 / span 2; background: #f43f5e; } /* 2 cols width */
</style>
<div class="grid">
  <div class="item header">Header (col 1 to -1)</div>
  <div class="item sidebar">Sidebar (row span 2)</div>
  <div class="item hero">Hero Area (col span 2)</div>
  <div class="item">Normal</div>
  <div class="item">Normal</div>
  <div class="item">Normal</div>
</div>`} />

        <h3>2. <code>grid-area</code> (Template Areas ke sath linking)</h3>
        <p>Agar aapne parent me <code>grid-template-areas</code> define kiya hai, toh children ko bas naam assign karna hota hai <code>grid-area</code> property se. Ye layout banane ka sabse clean aur readable tareeka hai!</p>
        <p>Is property ka use shorthand form <code>grid-row-start / grid-column-start / grid-row-end / grid-column-end</code> ki tarah bhi kiya ja sakta hai.</p>

        <LiveEditor title="Grid Template Areas (Pro Layout Mode)" initialCode={`<style>
  .app-layout {
    display: grid;
    grid-template-columns: 200px 1fr 150px;
    grid-template-rows: 60px 1fr 50px;
    height: 300px;
    gap: 5px;
    /* THE MAGIC: Visual Layout mapping */
    grid-template-areas:
      "header header header"
      "nav    main   aside"
      "footer footer footer";
  }
  
  /* Link items to areas */
  .h { grid-area: header; background: #334155; color: white; }
  .n { grid-area: nav; background: #64748b; color: white; }
  .m { grid-area: main; background: #f8fafc; }
  .a { grid-area: aside; background: #cbd5e1; }
  .f { grid-area: footer; background: #0f172a; color: white; }
  
  .box { display: flex; align-items: center; justify-content: center; font-weight: bold; }
</style>
<div class="app-layout">
  <div class="box h">Header Area</div>
  <div class="box n">Nav Area</div>
  <div class="box m">Main Content Area</div>
  <div class="box a">Aside</div>
  <div class="box f">Footer Area</div>
</div>`} />

        <h3>3. Self Alignment (<code>justify-self</code>, <code>align-self</code>, <code>place-self</code>)</h3>
        <p>Jaise flexbox me individual item ko align karne ke liye <code>align-self</code> tha, Grid me horizontally (<code>justify-self</code>) aur vertically (<code>align-self</code>) move karne ki power hai. Parent ka <code>align-items</code>/<code>justify-items</code> ko override karne ke liye inka use hota hai.</p>
        <p>Values: <code>start</code>, <code>end</code>, <code>center</code>, <code>stretch</code>.</p>
      </div>
    )
  }
];

export default chapters;
