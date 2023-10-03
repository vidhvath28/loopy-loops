// Bonus Time!

// Bonus 1: Count words and occurrences of "et" in a string
const loremIpsumText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et porttitor et ligula et feugiat et bibendum et augue. Etiam at hendrerit elit. Sed tincidunt, elit et consectetur pharetra, metus metus iaculis turpis, id efficitur elit leo sit amet dui. Nullam facilisis et tortor et semper. Sed euismod auctor leo, et interdum orci varius a. Vivamus et nisi et metus bibendum auctor. Donec et eros quis lorem vestibulum mattis. Maecenas et semper arcu, nec interdum urna. Etiam vehicula tellus sit amet libero malesuada venenatis. Fusce sit amet odio id metus venenatis bibendum. Proin dictum et eros ut luctus. Suspendisse tincidunt mauris sit amet libero gravida, et scelerisque felis efficitur.

Etiam nec ante nec nisi convallis sodales. Integer auctor et`;

// Split the text into paragraphs
const paragraphs = loremIpsumText.split('\n');

// Function to count words in a paragraph
function countWords(paragraph) {
  // Split the paragraph into words using spaces
  const words = paragraph.split(' ');

  // Filter out empty strings (e.g., extra spaces)
  const nonEmptyWords = words.filter(word => word.trim() !== '');

  // Return the count of non-empty words
  return nonEmptyWords.length;
}

// Function to count occurrences of "et" in a paragraph
function countEtOccurrences(paragraph) {
  // Split the paragraph into words using spaces
  const words = paragraph.split(' ');

  // Count occurrences of "et"
  let etCount = 0;
  for (const word of words) {
    if (word.toLowerCase() === 'et') {
      etCount++;
    }
  }

  return etCount;
}

// Loop through paragraphs and count words and "et" occurrences
for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i];
  const wordCount = countWords(paragraph);
  const etOccurrences = countEtOccurrences(paragraph);

  console.log(`Paragraph ${i + 1}:`);
  console.log(`Word Count: ${wordCount}`);
  console.log(`"et" Occurrences: ${etOccurrences}`);
  console.log('');
}
