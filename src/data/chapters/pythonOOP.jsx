import React from 'react';
import LiveEditor from '../../components/LiveEditor';

export const pythonOOP = [
  {
    id: 'py-classes',
    title: 'Python Classes/Objects',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Classes and Objects</h2>
        <p>Python ek Object Oriented Programming language hai. Almost har cheez Python me ek object hai.</p>
        <LiveEditor language="python" title="Classes & Objects" initialCode={`class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)
print(p1.name)
print(p1.age)`} />
      </div>
    )
  },
  {
    id: 'py-inheritance',
    title: 'Python Inheritance',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Inheritance</h2>
        <p>Inheritance se ek class doosri class ke saare methods aur properties le sakti hai (Parent aur Child class).</p>
        <LiveEditor language="python" title="Inheritance" initialCode={`class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  pass # Student class me Person ke saare features aa gaye

x = Student("Mike", "Olsen")
x.printname()`} />
      </div>
    )
  },
  {
    id: 'py-polymorphism',
    title: 'Python Polymorphism',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python Polymorphism</h2>
        <p>Polymorphism ka matlab hai "many forms" - alag classes me same naam ke methods ka use hona.</p>
        <LiveEditor language="python" title="Polymorphism" initialCode={`class Car:
  def move(self): print("Drive!")

class Boat:
  def move(self): print("Sail!")

class Plane:
  def move(self): print("Fly!")

for x in (Car(), Boat(), Plane()):
  x.move()`} />
      </div>
    )
  },
  {
    id: 'py-filehandling',
    title: 'Python File Handling',
    content: (
      <div className="space-y-6 text-gray-800">
        <h2 className="text-2xl font-bold text-gray-900">Python File Handling</h2>
        <p>Files ko read, write, aur create karne ke liye <code>open()</code> function ka use hota hai.</p>
        <LiveEditor language="python" title="File Handling" initialCode={`# Demo ke liye hum browser storage ka use karenge
print("Browser me file system natively allowed nahi hota bina server ke.")
print("Lekin syntax ye hai:")
print("f = open('demofile.txt', 'r')")
print("print(f.read())")`} />
      </div>
    )
  }
];
