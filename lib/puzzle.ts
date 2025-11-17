/**
 * PuzzleGenerator - Creates simple math puzzles for bot protection
 */

export interface Puzzle {
  question: string;
  answer: number;
}

/**
 * Generates a random addition puzzle (X + Y)
 * where X and Y are integers between 1 and 10
 */
export function generatePuzzle(): Puzzle {
  const x = Math.floor(Math.random() * 10) + 1; // Random number 1-10
  const y = Math.floor(Math.random() * 10) + 1; // Random number 1-10
  
  const question = `What is ${x} + ${y}?`;
  const answer = x + y;
  
  return { question, answer };
}

/**
 * Validates a puzzle answer by parsing the question
 * and computing the expected result
 */
export function validatePuzzleAnswer(question: string, userAnswer: number): boolean {
  try {
    // Extract numbers from question like "What is 4 + 7?"
    const match = question.match(/What is (\d+) \+ (\d+)\?/);
    
    if (!match) {
      return false;
    }
    
    const x = parseInt(match[1], 10);
    const y = parseInt(match[2], 10);
    const expectedAnswer = x + y;
    
    return userAnswer === expectedAnswer;
  } catch (error) {
    return false;
  }
}

