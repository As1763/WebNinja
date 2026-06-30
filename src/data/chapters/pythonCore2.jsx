import React from 'react';
import LiveEditor from '../../components/LiveEditor';

export const pythonCore2 = [
  {
    id: 'py-booleans',
    title: 'Python Booleans',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Booleans</h2>
        <p>Booleans sirf 2 values represent karte hain: <code>True</code> ya <code>False</code>.</p>
        <LiveEditor language="python" title="Booleans" initialCode={`print(10 > 9) # True
print(10 == 9) # False
print(bool("Hello")) # True
print(bool(0)) # False`} />
      </div>
    )
  },
  {
    id: 'py-operators',
    title: 'Python Operators',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Operators</h2>
        <p>Values aur variables par operation karne ke liye.</p>
        <LiveEditor language="python" title="Operators" initialCode={`x = 10
y = 3
print("Add:", x + y)
print("Modulus:", x % y)
print("Power:", x ** y)
print("Floor div:", x // y)`} />
      </div>
    )
  },
  {
    id: 'py-lists',
    title: 'Python Lists',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Lists</h2>
        <p>List multiple items ko ek variable me store karti hai. Ise change kiya ja sakta hai aur duplicate allowed hote hain.</p>
        <LiveEditor language="python" title="Lists" initialCode={`mylist = ["apple", "banana", "cherry"]
print(mylist)
mylist.append("orange") # Add karna
print(mylist)
mylist[1] = "mango" # Change karna
print(mylist)`} />
      </div>
    )
  },
  {
    id: 'py-tuples',
    title: 'Python Tuples',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Tuples</h2>
        <p>Tuples list jaise hote hain par inhe banne ke baad <strong>change nahi</strong> kiya ja sakta (Immutable).</p>
        <LiveEditor language="python" title="Tuples" initialCode={`mytuple = ("apple", "banana", "cherry")
print(mytuple)
# mytuple[0] = "mango" # Error aayega!`} />
      </div>
    )
  },
  {
    id: 'py-sets',
    title: 'Python Sets',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Sets</h2>
        <p>Sets unordered hote hain aur isme <strong>duplicates allowed nahi hote</strong>.</p>
        <LiveEditor language="python" title="Sets" initialCode={`myset = {"apple", "banana", "cherry", "apple"}
print(myset) # 'apple' ek hi baar aayega
myset.add("orange")
print(myset)`} />
      </div>
    )
  },
  {
    id: 'py-dictionaries',
    title: 'Python Dictionaries',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Dictionaries</h2>
        <p>Dictionaries data ko `key: value` format mein store karte hain.</p>
        <LiveEditor language="python" title="Dictionaries" initialCode={`thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict["model"])
thisdict["year"] = 2020 # Update
thisdict["color"] = "red" # Add
print(thisdict)`} />
      </div>
    )
  }
];
