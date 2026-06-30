import React from 'react';
import LiveEditor from '../../components/LiveEditor';

export const pythonBasics = [
  {
    id: 'py-intro',
    title: '1. Python Introduction & Get Started',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Introduction</h2>
        <p>
          Python duniya ki sabse popular programming language hai. Ise Guido van Rossum ne banaya tha aur 1991 mein release kiya tha.
          Yeh web development (server-side), software development, mathematics, aur system scripting ke liye use hoti hai.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Python kya kar sakti hai?</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Server par web applications banane ke liye.</li>
          <li>Data ko analyze karne aur Big Data handle karne ke liye (AI aur Machine Learning).</li>
          <li>Complex mathematics aur calculations solve karne ke liye.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Python kyu?</h3>
        <p>
          Kyunki iska syntax English language ke jaisa hai. Code likhna asaan hai aur chhota hota hai doosri languages (jaise Java ya C++) ke comparison mein.
        </p>

        <LiveEditor language="python" title="Your First Python Program" initialCode={`print("Hello, World!")`} />
      </div>
    )
  },
  {
    id: 'py-syntax',
    title: '2. Python Syntax & Comments',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Syntax (Indentation)</h2>
        <p>
          Doosri languages me loops ya functions banane ke liye <code>{'{'} {'}'}</code> brackets ka use hota hai. Lekin Python mein <strong>Indentation (Spaces)</strong> ka use hota hai!
          Agar aap space nahi denge, toh Python error de dega.
        </p>

        <LiveEditor language="python" title="Indentation Example" initialCode={`if 5 > 2:
    print("Five is greater than two!")
    # Yeh code bilkul sahi chalega kyunki yahan space (indentation) hai.

# Agar aap niche di gayi line ke aage se space hata denge toh error aayega!
if 10 > 5:
    print("This also works!")`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Python Comments</h3>
        <p>
          Comments wo lines hoti hain jinhe Python read nahi karta. Yeh hamare samajhne ke liye hote hain.
          Single line comment <code>#</code> se start hota hai. Multi-line comment <code>""" """</code> (triple quotes) ke andar likha jata hai.
        </p>

        <LiveEditor language="python" title="Comments Example" initialCode={`# Yeh ek single line comment hai
print("Hello, World!")

"""
Yeh ek
multi-line
comment hai! Isko Python ignore karega.
"""
print("Comments are useful!")`} />
      </div>
    )
  },
  {
    id: 'py-variables',
    title: '3. Python Variables',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Variables</h2>
        <p>
          Variables data ko store karne ke dabbe hote hain. Python me koi command (jaise var ya int) ki zarurat nahi hoti variable declare karne ke liye. Jaise hi aap value daalte hain, variable ban jata hai.
        </p>

        <LiveEditor language="python" title="Creating Variables" initialCode={`x = 5
y = "John"
print(x)
print(y)

# Aap ek saath kai variables bhi assign kar sakte hain:
a, b, c = "Orange", "Banana", "Cherry"
print(a)
print(b)
print(c)

# Same value kai variables ko dena:
x = y = z = "Apple"
print(x, y, z)`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Global Variables</h3>
        <p>
          Jo variables function ke bahar banaye jate hain unhe Global variables kehte hain. Woh poore code me kahin bhi use ho sakte hain.
          Lekin agar aap function ke andar global variable ko change karna chahte hain, toh <code>global</code> keyword ka use karna padta hai.
        </p>

        <LiveEditor language="python" title="Global Variables" initialCode={`x = "awesome" # Yeh global hai

def myfunc():
    global x
    x = "fantastic" # Humne global x ko change kar diya

myfunc()
print("Python is " + x)`} />
      </div>
    )
  },
  {
    id: 'py-datatypes',
    title: '4. Python Data Types & Numbers',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Data Types aur Numbers</h2>
        <p>
          Har value ka ek data type hota hai. Aap <code>type()</code> function se kisi bhi variable ka data type pata kar sakte hain.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Text Type:</strong> <code>str</code></li>
          <li><strong>Numeric Types:</strong> <code>int</code>, <code>float</code>, <code>complex</code></li>
          <li><strong>Sequence Types:</strong> <code>list</code>, <code>tuple</code>, <code>range</code></li>
          <li><strong>Mapping Type:</strong> <code>dict</code></li>
          <li><strong>Set Types:</strong> <code>set</code>, <code>frozenset</code></li>
          <li><strong>Boolean Type:</strong> <code>bool</code></li>
        </ul>

        <LiveEditor language="python" title="Getting Data Type" initialCode={`x = 5
print(type(x)) # <class 'int'>

y = "Hello World"
print(type(y)) # <class 'str'>

z = 20.5
print(type(z)) # <class 'float'>`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Python Numbers & Casting</h3>
        <p>
          Kabhi kabhi humein ek data type ko doosre mein badalna padta hai (jaise string ko number mein). Ise <strong>Casting</strong> kehte hain.
        </p>

        <LiveEditor language="python" title="Casting Example" initialCode={`# Integer casting
x = int(1)   # x banega 1
y = int(2.8) # y banega 2 (decimal hat jayega)
z = int("3") # z banega 3 (number)

print(x, y, z)

# Float casting
a = float(1)     # a banega 1.0
b = float("4.2") # b banega 4.2

print(a, b)`} />
      </div>
    )
  },
  {
    id: 'py-booleans',
    title: '5. Python Booleans & Operators',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Booleans (True/False)</h2>
        <p>
          Programming me aksar humein pata karna hota hai ki koi baat sach hai (True) ya jhooth (False).
        </p>

        <LiveEditor language="python" title="Booleans" initialCode={`print(10 > 9)  # True
print(10 == 9) # False
print(10 < 9)  # False

# bool() function se pata chal sakta hai ki koi value True hai ya False
print(bool("Hello")) # True
print(bool(15))      # True
print(bool(0))       # False (0 hamesha false hota hai)`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Python Operators</h3>
        <p>
          Operators variables par calculations karne ke kaam aate hain.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Arithmetic:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (modulus/remainder), <code>**</code> (power), <code>//</code> (floor division)</li>
          <li><strong>Assignment:</strong> <code>=</code>, <code>+=</code>, <code>-=</code></li>
          <li><strong>Comparison:</strong> <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code></li>
          <li><strong>Logical:</strong> <code>and</code>, <code>or</code>, <code>not</code></li>
        </ul>

        <LiveEditor language="python" title="Operators in Action" initialCode={`a = 10
b = 3

print("Addition:", a + b)
print("Modulus (Remainder):", a % b)
print("Power:", a ** b)
print("Floor division:", a // b)

x = 5
print(x > 3 and x < 10) # True kyunki dono baatein sach hain`} />
      </div>
    )
  }
];
