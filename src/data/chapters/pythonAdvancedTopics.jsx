import React from 'react';
import LiveEditor from '../../components/LiveEditor';

export const pythonLibraries = [
  { id: 'py-numpy', title: 'NumPy Tutorial', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">NumPy Tutorial</h2><p>NumPy arrays ke saath kaam karne ki library hai. Iska matlab Numerical Python hai.</p><LiveEditor language="python" title="NumPy Mock Example" initialCode={`import numpy as np\\narr = np.array([1, 2, 3, 4, 5])\\nprint(arr)`} /></div>) },
  { id: 'py-pandas', title: 'Pandas Tutorial', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">Pandas Tutorial</h2><p>Pandas DataFrames aur data manipulation ki powerful library hai.</p></div>) },
  { id: 'py-scipy', title: 'SciPy Tutorial', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">SciPy Tutorial</h2><p>SciPy scientific aur technical computing ke liye hoti hai.</p></div>) },
  { id: 'py-matplotlib', title: 'Matplotlib Tutorial', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">Matplotlib Tutorial</h2><p>Matplotlib graphs aur plots banane ke kaam aati hai (Line, Bar, Scatter, Pie).</p></div>) }
];

export const pythonML = [
  { id: 'py-ml-intro', title: 'ML Get Started', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">Machine Learning</h2><p>Machine Learning ka matlab hai computer ko purane data se khud sikhana.</p></div>) },
  { id: 'py-ml-stats', title: 'Mean Median Mode', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">Mean, Median, Mode</h2><p>Machine learning mein data ko samajhne ke liye basic statistics ki zaroorat hoti hai.</p></div>) },
  { id: 'py-ml-regression', title: 'Linear Regression', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">Linear Regression</h2><p>Ek variable ka use karke doosre variable ki value predict karna.</p></div>) },
  { id: 'py-ml-dtree', title: 'Decision Tree', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">Decision Tree</h2><p>Ek flow chart jaisa tree structure jo decisions lene me madad karta hai.</p></div>) }
];

export const pythonDSA = [
  { id: 'py-dsa-intro', title: 'Python DSA Basics', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">Data Structures & Algorithms</h2><p>Apne code ko fast aur memory-efficient banana hi DSA ka goal hai.</p></div>) },
  { id: 'py-dsa-lists', title: 'Lists, Stacks, Queues', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">Stacks & Queues</h2><p>LIFO (Last In First Out) aur FIFO (First In First Out) ke principles.</p></div>) },
  { id: 'py-dsa-trees', title: 'Trees & Graphs', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">Trees (BST & AVL)</h2><p>Hierarchical data store karne ka tarika.</p></div>) },
  { id: 'py-dsa-sorting', title: 'Sorting Algorithms', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">Sorting</h2><p>Bubble, Selection, Insertion, Merge aur Quick Sort se data ko arrange karna.</p></div>) },
  { id: 'py-dsa-searching', title: 'Searching Algorithms', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">Searching</h2><p>Linear aur Binary search se data dhoondna.</p></div>) }
];

export const pythonDatabases = [
  { id: 'py-mysql', title: 'MySQL Get Started', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">Python MySQL</h2><p>Python ko MySQL database se connect karne ke liye <code>mysql-connector-python</code> ka use hota hai.</p></div>) },
  { id: 'py-mongodb', title: 'MongoDB Get Started', content: (<div className="space-y-6 text-gray-800"><h2 className="text-2xl font-bold">Python MongoDB</h2><p>Python ko MongoDB (NoSQL) database se connect karne ke liye <code>pymongo</code> ka use hota hai.</p></div>) }
];
