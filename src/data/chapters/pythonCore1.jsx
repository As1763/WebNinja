import React from 'react';
import LiveEditor from '../../components/LiveEditor';

export const pythonCore1 = [
  {
    id: 'py-intro',
    title: 'Python Intro',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Introduction</h2>
        <p>Python duniya ki sabse popular programming language hai. Ise Guido van Rossum ne banaya tha aur 1991 mein release kiya tha.</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Web Development:</strong> Django aur Flask jaise frameworks se websites ban sakti hain.</li>
          <li><strong>Data Science:</strong> Data analysis aur Machine Learning ke liye number 1 hai.</li>
          <li><strong>Automation:</strong> Chote-mote tasks ko automate karne ke liye scripts likhi ja sakti hain.</li>
        </ul>
      </div>
    )
  },
  {
    id: 'py-getstarted',
    title: 'Python Get Started',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Get Started</h2>
        <p>Apne computer par Python install karne ke liye <code>python.org</code> par jayein. Par yahan CodeNode par aapko kuch install karne ki zaroorat nahi hai, aapka code yahin browser me run hoga!</p>
        <LiveEditor language="python" title="First Program" initialCode={`print("Welcome to Python!")`} />
      </div>
    )
  },
  {
    id: 'py-syntax',
    title: 'Python Syntax',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Syntax (Indentation)</h2>
        <p>Doosri languages mein curly brackets <code>{}</code> ka use hota hai block of code define karne ke liye, par Python mein <strong>spaces (indentation)</strong> ka use hota hai.</p>
        <LiveEditor language="python" title="Indentation Example" initialCode={`if 5 > 2:
    print("Five is greater than two!") # Yahan space dena zaroori hai!`} />
      </div>
    )
  },
  {
    id: 'py-output',
    title: 'Python Output',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Output (print)</h2>
        <p>Screen par kuch bhi dikhane ke liye <code>print()</code> function ka use hota hai.</p>
        <LiveEditor language="python" title="Print Output" initialCode={`print("Hello")
print(50)
print(10 + 20)`} />
      </div>
    )
  },
  {
    id: 'py-comments',
    title: 'Python Comments',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Comments</h2>
        <p>Comments wo lines hoti hain jinhe Python read nahi karta. Single line <code>#</code> se aur multi-line <code>"""</code> se hote hain.</p>
        <LiveEditor language="python" title="Comments" initialCode={`# Yeh ek comment hai
print("Hello") # Yeh line print hogi

"""
Yeh ek
multi-line comment hai
"""`} />
      </div>
    )
  },
  {
    id: 'py-variables',
    title: 'Python Variables',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Variables</h2>
        <p>Variables data store karne ke containers hote hain.</p>
        <LiveEditor language="python" title="Variables" initialCode={`x = 5
y = "John"
print(x)
print(y)`} />
      </div>
    )
  },
  {
    id: 'py-datatypes',
    title: 'Python Data Types',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Data Types</h2>
        <p>Aap <code>type()</code> function se variable ka type check kar sakte hain.</p>
        <LiveEditor language="python" title="Data Types" initialCode={`x = 5
print(type(x)) # int
y = "Hello"
print(type(y)) # str`} />
      </div>
    )
  },
  {
    id: 'py-numbers',
    title: 'Python Numbers',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Numbers</h2>
        <p>Python me 3 types ke numbers hote hain: <code>int</code>, <code>float</code>, <code>complex</code>.</p>
        <LiveEditor language="python" title="Numbers" initialCode={`x = 1    # int
y = 2.8  # float
z = 1j   # complex
print(type(x), type(y), type(z))`} />
      </div>
    )
  },
  {
    id: 'py-casting',
    title: 'Python Casting',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Casting</h2>
        <p>Ek type ko dusre type me badalna.</p>
        <LiveEditor language="python" title="Casting" initialCode={`x = int(2.8) # x banega 2
y = float(3) # y banega 3.0
z = str(2)   # z banega '2'
print(x, y, z)`} />
      </div>
    )
  },
  {
    id: 'py-strings',
    title: 'Python Strings',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Strings</h2>
        <p>Strings text hoti hain aur arrays ki tarah behave karti hain.</p>
        <LiveEditor language="python" title="String Operations" initialCode={`txt = "Hello World"
print(txt[0]) # H
print(txt[2:5]) # llo (Slicing)
print(txt.upper()) # HELLO WORLD
print(len(txt)) # 11 (Length)`} />
      </div>
    )
  }
];
