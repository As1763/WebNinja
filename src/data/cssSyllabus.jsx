import foundationChapters from './chapters/foundation';
import stylingChapters from './chapters/styling';
import layoutChapters from './chapters/layout';
import advancedChapters from './chapters/advanced';
import advanced2Chapters from './chapters/advanced2';
import proLevelChapters from './chapters/prolevel';

// Combine all imported chapter arrays into one single syllabus array
export const cssSyllabus = [
  ...foundationChapters,
  ...stylingChapters,
  ...layoutChapters,
  ...advancedChapters,
  ...advanced2Chapters,
  ...proLevelChapters
];
