import { pythonCore1 } from './chapters/pythonCore1';
import { pythonCore2 } from './chapters/pythonCore2';
import { pythonCore3 } from './chapters/pythonCore3';
import { pythonOOP } from './chapters/pythonOOP';
import { pythonLibraries, pythonML, pythonDSA, pythonDatabases } from './chapters/pythonAdvancedTopics';

// Combine all modules into a single massive syllabus array
export const pythonSyllabus = [
  ...pythonCore1,
  ...pythonCore2,
  ...pythonCore3,
  ...pythonOOP,
  ...pythonLibraries,
  ...pythonML,
  ...pythonDSA,
  ...pythonDatabases
];
