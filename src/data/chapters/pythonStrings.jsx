import React from 'react';
import LiveEditor from '../../components/LiveEditor';

export const pythonStrings = [
  {
    id: 'py-strings',
    title: '6. Python Strings (Deep Dive)',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Strings</h2>
        <p>
          Strings text ko store karne ke kaam aate hain. Aap single ya double quotes dono use kar sakte hain.
          Python mein Strings actually <strong>Arrays</strong> hote hain! Iska matlab aap text ke andar se ek akshar (character) bhi nikal sakte hain.
        </p>

        <LiveEditor language="python" title="Strings as Arrays" initialCode={`a = "Hello, World!"
print(a[1]) # 'e' print hoga, kyunki computer me counting 0 se start hoti hai

# Looping through a string
for x in "banana":
    print(x)
    
# Check string
txt = "Sab badiya chal raha hai!"
print("badiya" in txt) # True`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Slicing Strings</h3>
        <p>Aap string ke ek hisse (slice) ko kaat kar nikal sakte hain.</p>
        
        <LiveEditor language="python" title="String Slicing" initialCode={`b = "Hello, World!"
print(b[2:5]) # Position 2 se 5 tak (5 include nahi hoga) -> 'llo'

print(b[:5]) # Start se 5 tak
print(b[7:]) # 7 se end tak
print(b[-5:-2]) # Peeche se count karna (Negative Indexing)`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Modify Strings</h3>
        <p>Python mein built-in methods hote hain jo strings ke saath khelne mein madad karte hain.</p>

        <LiveEditor language="python" title="Modifying Strings" initialCode={`a = "  Hello, World!  "
print(a.upper()) # Sab capital
print(a.lower()) # Sab small
print(a.strip()) # Aage-peeche ka space hata dega
print(a.replace("H", "J")) # H ko J se badal dega
print(a.split(",")) # Comma ke basis par list bana dega`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">String Formatting (f-Strings)</h3>
        <p>Aap string aur variables ko jodne ke liye <code>+</code> use kar sakte hain, lekin sabse modern aur accha tarika <strong>f-strings</strong> hai.</p>

        <LiveEditor language="python" title="F-Strings" initialCode={`age = 36
name = "John"
# f laga kar bracket {} me variable likh sakte hain
txt = f"My name is {name}, I am {age} years old."
print(txt)

price = 59
txt2 = f"The price is {price:.2f} dollars" # .2f matlab 2 decimal aayenge
print(txt2)`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Escape Characters</h3>
        <p>Agar aap string ke andar quotes <code>""</code> use karna chahte hain, toh <code>\\</code> (backslash) ka use karein.</p>
        <LiveEditor language="python" title="Escape Chars" initialCode={`txt = "We are the so-called \\"Vikings\\" from the north."
print(txt)

# \\n se nayi line aati hai
txt2 = "Hello\\nWorld"
print(txt2)`} />
      </div>
    )
  }
];
