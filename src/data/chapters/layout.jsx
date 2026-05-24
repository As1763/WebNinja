import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const chapters = [
  {
    id: 'css-display',
    title: '11. CSS Display',
    content: (
      <div>
        <h2>CSS Display Property</h2>
        <p><code>display</code> property CSS ki sabse zaroori layout property hai. Ye decide karti hai ki element screen pe kaisa dikhega.</p>

        <h3>Block vs Inline</h3>
        <ul className="styled-list">
          <li><strong>Block Elements:</strong> Ye puri width (100%) lete hain. Jaise <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>.</li>
          <li><strong>Inline Elements:</strong> Ye utni hi jagah lete hain jitna text hota hai. Inme aap height/width set nahi kar sakte. Jaise <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>.</li>
        </ul>

        <h3>Hiding an Element</h3>
        <p>Kisi element ko chupana ho to <code>display: none;</code> use hota hai:</p>
        <CodeBlock>{`h1.hidden {
  display: none;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek paragraph ko <code>display: none;</code> lagakar dekhein ki wo screen se gayab hota hai ya nahi.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-position',
    title: '12. CSS Position',
    content: (
      <div>
        <h2>CSS Position Property</h2>
        <p>Elements ko screen par move karne ke liye <code>position</code> property use hoti hai.</p>

        <h3>1. Relative</h3>
        <p>Iska matlab hai ki element apni "original position" se thoda khisak jayega:</p>
        <CodeBlock>{`div.relative {
  position: relative;
  left: 30px;
  top: 10px;
}`}</CodeBlock>

        <h3>2. Absolute</h3>
        <p>Isse element apne pehle relative parent ke andar fix ho jata hai. Isse dusre elements iski pehli jagah gher lete hain.</p>
        <CodeBlock>{`div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
}`}</CodeBlock>

        <h3>3. Fixed</h3>
        <p>Screen scroll karne par bhi element apni jagah se nahi hilta (jaise navigation bar):</p>
        <CodeBlock>{`div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek div banayein aur use <code>position: fixed; top: 0;</code> dein. Phir page scroll karke dekhein.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-overflow',
    title: '13. CSS Overflow',
    content: (
      <div>
        <h2>CSS Overflow</h2>
        <p>Agar kisi box ka content (text/image) us box se bada ho jaye, to wo box se bahar nikal aata hai. Isey overflow kehte hain.</p>

        <h3>Overflow: hidden</h3>
        <p>Bahar nikalte huye content ko chupane ke liye:</p>
        <CodeBlock>{`div {
  width: 200px;
  height: 50px;
  overflow: hidden;
}`}</CodeBlock>

        <h3>Overflow: scroll</h3>
        <p>Agar aap chahte hain ki box me scrollbar aa jaye jisse user bacha hua text scroll karke padh sake:</p>
        <CodeBlock>{`div {
  width: 200px;
  height: 50px;
  overflow: scroll;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek chhota box banayein (width 100px) aur usme lamba paragraph likhein. Phir us par <code>overflow: scroll;</code> lagayein.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-float',
    title: '14. CSS Float',
    content: (
      <div>
        <h2>CSS Float</h2>
        <p><code>float</code> property elements ko left ya right position karne me kaam aati hai. Zyadatar iska use image ke aas-paas text ko wrap karne me hota hai.</p>

        <h3>Float Right</h3>
        <p>Isse image box ke right side me chali jayegi aur text uske left me aa jayega:</p>
        <CodeBlock>{`img {
  float: right;
}`}</CodeBlock>

        <h3>Clear</h3>
        <p>Agar aap nahi chahte ki kisi floated element ke agal bagal koi cheez aaye, to <code>clear</code> property use hoti hai:</p>
        <CodeBlock>{`div {
  clear: both;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>Ek image tag lagayein aur usko left me float karein. Dekhiye baki text uske aaju-baju kaise aata hai.</p>
        </div>
      </div>
    )
  },

  {
    id: 'css-inline-block',
    title: '15. CSS Inline-block',
    content: (
      <div>
        <h2>CSS Inline-block</h2>
        <p><code>display: inline-block</code> block aur inline elements dono ke fayde ek sath deta hai.</p>

        <h3>Fayda Kya Hai?</h3>
        <ul className="styled-list">
          <li>Ye inline ki tarah dusre elements ke sath ek hi line me rehta hai.</li>
          <li>Lekin block ki tarah, aap iska <strong>width aur height</strong> set kar sakte hain!</li>
        </ul>

        <h3>Example (Navigation Menu banane me)</h3>
        <CodeBlock>{`li {
  display: inline-block;
  width: 100px;
  padding: 10px;
  background-color: yellow;
}`}</CodeBlock>

        <div className="task-box">
          <h4>👨‍💻 Try it Yourself! (Task)</h4>
          <p>3 spans banayein aur unme background color dein. Fir sabhi ko <code>display: inline-block;</code> aur height/width 100px dekar ek line me 3 boxes banayein.</p>
        </div>
      </div>
    )
  }
];

export default chapters;
