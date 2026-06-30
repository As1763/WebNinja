import React from 'react';
import LiveEditor from '../components/LiveEditor';

export const pythonSyllabus = [
  {
    id: 'py-intro',
    title: '1. Introduction to Python',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">1. Python ki Shuruwaat: Print Statement</h2>
        <p>
          Python duniya ki sabse popular aur aasan programming languages mein se ek hai. 
          Iska syntax bilkul simple English jaisa hota hai! Python mein sabse pehla command jo hum seekhte hain wo hai <code>print()</code>.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Print() ka Jaadu</h3>
        <p>
          Agar aap chahte hain ki computer screen par kuch likha hua aaye, to hum <code>print()</code> function ka use karte hain.
        </p>

        <LiveEditor language="python" title="Print in Python" initialCode={`# Yeh ek comment hai, Python ise run nahi karta
print("Hello World!")
print("Welcome to Python Tutorial")

# Aap numbers bhi print kar sakte hain bina quotes ke!
print(2026)
print(10 + 5)
`} />
      </div>
    )
  },
  {
    id: 'py-variables',
    title: '2. Variables & Data Types',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">2. Variables aur Data Types</h2>
        <p>
          <strong>Variables</strong> bilkul ek khali dabbe (box) ki tarah hote hain jisme aap data store kar sakte hain. 
          Python me variable banane ke liye kisi `var` ya `let` ki zarurat nahi hoti, bas naam likho aur value daal do!
        </p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Data Types</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Strings (str):</strong> Words aur sentences jo quotes <code>" "</code> ke andar hote hain.</li>
          <li><strong>Integers (int):</strong> Poore numbers bina decimal ke (jaise <code>10</code>).</li>
          <li><strong>Floats (float):</strong> Decimal wale numbers (jaise <code>10.5</code>).</li>
          <li><strong>Booleans (bool):</strong> Sirf <code>True</code> ya <code>False</code>.</li>
        </ul>

        <LiveEditor language="python" title="Variables in Action" initialCode={`# Variables banate hain!
name = "Ninja"        # String
age = 22              # Integer
height = 5.8          # Float
is_learning = True    # Boolean

print("Mera naam " + name + " hai aur meri umar " + str(age) + " hai.")
print("Kya main seekh raha hu?", is_learning)

# Variables ki value change bhi kar sakte hain
age = age + 1
print("Ab meri umar", age, "ho gayi hai!")
`} />
      </div>
    )
  },
  {
    id: 'py-conditions',
    title: '3. If-Else Conditions',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">3. Faisle lena (If, Elif, Else)</h2>
        <p>
          Kabhi kabhi hum chahte hain ki code sirf tab chale jab koi shart (condition) poori ho. Uske liye hum <code>if-else</code> ka use karte hain. 
          <strong>Important Note:</strong> Python mein indentation (spaces) bahut zaroori hai! `if` ke andar ka code thoda aage khiskaya hua (indented) hona chahiye.
        </p>

        <LiveEditor language="python" title="If-Else Condition" initialCode={`marks = 85

print("Aapke marks:", marks)

if marks >= 90:
    print("Grade: A+ (Topper!)")
elif marks >= 75:
    print("Grade: B (Bahut achha)")
elif marks >= 50:
    print("Grade: C (Pass ho gaye)")
else:
    print("Grade: Fail (Mehnat ki zaroorat hai)")
`} />
      </div>
    )
  },
  {
    id: 'py-loops',
    title: '4. For & While Loops',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">4. Code ko baar baar chalana (Loops)</h2>
        <p>
          Jab ek hi kaam ko baar baar karna ho, tab loops kaam aate hain. Python mein mainly 2 tarah ke loops hote hain: <strong>for</strong> loop aur <strong>while</strong> loop.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">For Loop</h3>
        <p>Agar aapko pehle se pata hai ki code ko kitni baar chalana hai (jaise 1 se 5 tak), tab <code>for</code> loop use karein.</p>

        <LiveEditor language="python" title="For Loop & While Loop" initialCode={`print("--- For Loop ---")
# range(1, 6) matlab 1 se lekar 5 tak chalega (6 include nahi hota)
for i in range(1, 6):
    print("Counting:", i)

print("\\n--- While Loop ---")
# Jab tak shart (condition) True hai, while loop chalega
count = 3
while count > 0:
    print("Countdown:", count)
    count = count - 1
print("GO!")
`} />
      </div>
    )
  },
  {
    id: 'py-functions',
    title: '5. Functions',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">5. Apne Functions Banana (def)</h2>
        <p>
          Agar aapke paas code ka ek lamba block hai jise aapko baar baar use karna hai, toh aap us code ko ek naam de kar pack kar sakte hain. Ise <strong>Function</strong> kehte hain. Python me functions <code>def</code> keyword se banate hain.
        </p>

        <LiveEditor language="python" title="Functions" initialCode={`# Ek simple function banana
def say_hello(name):
    print("Hello " + name + "! Welcome to CodeNode.")

# Function ko chalana (call karna)
say_hello("Ninja")
say_hello("Anees")

print("\\n--- Function with Return ---")
def add_numbers(a, b):
    ans = a + b
    return ans

result = add_numbers(10, 25)
print("10 + 25 ka total hai:", result)
`} />
      </div>
    )
  }
];
