import React from 'react';
import LiveEditor from '../../components/LiveEditor';

export const pythonDataStructures = [
  {
    id: 'py-lists',
    title: '7. Python Lists',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Lists (Arrays)</h2>
        <p>
          Lists ka use ek hi variable mein bahut saari items ko store karne ke liye hota hai. 
          Lists ordered (kram mein) hoti hain, change ho sakti hain (mutable), aur inme duplicate values aa sakti hain.
          Yeh square brackets <code>[]</code> se banaye jate hain.
        </p>

        <LiveEditor language="python" title="Lists Basics" initialCode={`thislist = ["apple", "banana", "cherry"]
print(thislist)
print(len(thislist)) # length pata karna
print(thislist[1]) # 'banana' milega

thislist[1] = "blackcurrant" # change value
print(thislist)

# List me kuch add karna
thislist.append("orange")
print(thislist)

# Beech me kuch ghusana
thislist.insert(1, "mango")
print(thislist)

# Kuch hatana
thislist.remove("apple")
print(thislist)
`} />

        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Looping & Comprehension</h3>
        <p>Aap list ke andar for loop chala sakte hain. List Comprehension ek short tarika hai naya list banane ka.</p>
        
        <LiveEditor language="python" title="List Comprehension" initialCode={`fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

# Normal For Loop
for x in fruits:
  print(x)

# List Comprehension (sirf wahi chahiye jisme 'a' ho)
newlist = [x for x in fruits if "a" in x]
print("New list:", newlist)

# Sorting
fruits.sort() # Alphabetical
print("Sorted:", fruits)
fruits.sort(reverse = True)
print("Reverse:", fruits)
`} />
      </div>
    )
  },
  {
    id: 'py-tuples',
    title: '8. Python Tuples',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Tuples</h2>
        <p>
          Tuples bhi list ki tarah hote hain par ek farak hai: <strong>Aap inhe change nahi kar sakte (Immutable)</strong>. 
          Yeh round brackets <code>()</code> se banaye jate hain.
        </p>

        <LiveEditor language="python" title="Tuples" initialCode={`thistuple = ("apple", "banana", "cherry")
print(thistuple)

# Error aayega agar aap change karne ki koshish karenge
# thistuple[1] = "blackcurrant" 

# Tuple ko List me convert karke change kar sakte hain
y = list(thistuple)
y.append("orange")
thistuple = tuple(y)
print("Updated:", thistuple)

# Unpacking a Tuple
fruits = ("apple", "banana", "cherry")
(green, yellow, red) = fruits
print(green)
print(yellow)`} />
      </div>
    )
  },
  {
    id: 'py-sets',
    title: '9. Python Sets',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Sets</h2>
        <p>
          Sets un-ordered (kram nahi hota) aur un-indexed hote hain. Inki sabse badi khasiyat hai ki <strong>is mein duplicates allowed nahi hote</strong>.
          Yeh curly brackets <code>{'{'} {'}'}</code> se banaye jate hain.
        </p>

        <LiveEditor language="python" title="Sets" initialCode={`thisset = {"apple", "banana", "cherry", "apple"}
print(thisset) # Duplicate 'apple' gayab ho jayega!

# Items add karna
thisset.add("orange")
print(thisset)

# Do sets ko jodna (Union)
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}
set3 = set1.union(set2)
print(set3)`} />
      </div>
    )
  },
  {
    id: 'py-dict',
    title: '10. Python Dictionaries',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Dictionaries</h2>
        <p>
          Dictionaries data ko <code>key: value</code> jodon (pairs) mein store karte hain. Yeh bilkul real-world dictionary jaisa hai.
          Isme order hota hai aur change allowed hai (lekin duplicate keys allowed nahi).
        </p>

        <LiveEditor language="python" title="Dictionaries" initialCode={`thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)

# Value nikalna
print(thisdict["model"]) # Mustang

# Value change karna
thisdict["year"] = 2020

# Naya item add karna
thisdict["color"] = "red"
print(thisdict)

# Looping through dictionary
for x, y in thisdict.items():
  print(x, ":", y)
`} />
      </div>
    )
  }
];
