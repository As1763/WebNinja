import React from 'react';
import LiveEditor from '../../components/LiveEditor';

export const pythonCore3 = [
  {
    id: 'py-ifelse',
    title: 'Python If...Else',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python If...Else & Match</h2>
        <p>Conditions ke base par decision lene ke liye.</p>
        <LiveEditor language="python" title="If...Else" initialCode={`a = 33
b = 200
if b > a:
  print("b is greater than a")
elif a == b:
  print("a and b are equal")
else:
  print("a is greater than b")`} />
      </div>
    )
  },
  {
    id: 'py-while',
    title: 'Python While Loops',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python While Loops</h2>
        <p>Jab tak condition True hai, loop chalega.</p>
        <LiveEditor language="python" title="While Loop" initialCode={`i = 1
while i < 6:
  print(i)
  i += 1`} />
      </div>
    )
  },
  {
    id: 'py-for',
    title: 'Python For Loops',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python For Loops & Range</h2>
        <p>List, string, ya range ke har item ke liye loop chalana.</p>
        <LiveEditor language="python" title="For Loop" initialCode={`for x in range(2, 6):
  print(x) # 2 se 5 tak print hoga`} />
      </div>
    )
  },
  {
    id: 'py-functions',
    title: 'Python Functions',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Functions</h2>
        <p>Code ka ek block jo call karne par chalta hai. <code>def</code> keyword se banaya jata hai.</p>
        <LiveEditor language="python" title="Functions" initialCode={`def my_function(fname):
  print(fname + " Refsnes")

my_function("Emil")
my_function("Tobias")`} />
      </div>
    )
  },
  {
    id: 'py-advanced-core',
    title: 'Python Advanced Core',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Dates, Math, JSON, Try-Except</h2>
        <p>Python mein built-in modules hote hain advanced tasks ke liye.</p>
        <LiveEditor language="python" title="Modules Example" initialCode={`import math
import datetime

# Math
x = math.sqrt(64)
print("Square root of 64:", x)

# Dates
d = datetime.datetime.now()
print("Current Time:", d)

# Try Except
try:
  print(undefined_variable)
except:
  print("An exception occurred!")`} />
      </div>
    )
  }
];
