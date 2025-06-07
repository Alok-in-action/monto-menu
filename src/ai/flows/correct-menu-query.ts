
'use server';
/**
 * @fileOverview A Genkit flow to correct user's menu search queries.
 *
 * - correctMenuQuery - A function that attempts to correct a misspelled search query.
 * - CorrectMenuQueryInput - The input type for the correctMenuQuery function.
 * - CorrectMenuQueryOutput - The return type for the correctMenuQuery function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CorrectMenuQueryInputSchema = z.object({
  query: z.string().describe("The user's search query, potentially misspelled."),
  menuContext: z.string().describe("A comma-separated string of available menu item names, descriptions, and categories."),
});
export type CorrectMenuQueryInput = z.infer<typeof CorrectMenuQueryInputSchema>;

const CorrectMenuQueryOutputSchema = z.object({
  correctedQuery: z.string().describe("The corrected search query, or the original query if no correction was deemed necessary or possible."),
});
export type CorrectMenuQueryOutput = z.infer<typeof CorrectMenuQueryOutputSchema>;

export async function correctMenuQuery(input: CorrectMenuQueryInput): Promise<CorrectMenuQueryOutput> {
  return correctMenuQueryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'correctMenuQueryPrompt',
  input: {schema: CorrectMenuQueryInputSchema},
  output: {schema: CorrectMenuQueryOutputSchema},
  prompt: `You are a spell-checking and query correction assistant for a restaurant menu search.
The user entered the search query: '{{{query}}}'.
The available menu items (names, descriptions, and categories) are: [{{{menuContext}}}].

Your task is to return a corrected version of the user's query if it seems misspelled or slightly off, making it more likely to match items from the menu context.
- If the query is already correctly spelled and relevant to the menu context, return the original query.
- If the query contains a common misspelling of a menu item, return the corrected spelling.
- If the query is ambiguous but could be a partial match, try to complete it to a more relevant term from the menu context.
- If the query seems completely unrelated to the menu context or too garbled to correct, return the original query.

Return only the (potentially corrected) search query string.
Example: if query is "panner tika" and menuContext contains "Paneer Tikka", return "Paneer Tikka".
Example: if query is "dosa" and menuContext contains "Masala Dosa, Onion Dosa", return "dosa".
Example: if query is "burgur" and menuContext is about Indian food, return "burgur".`,
});

const correctMenuQueryFlow = ai.defineFlow(
  {
    name: 'correctMenuQueryFlow',
    inputSchema: CorrectMenuQueryInputSchema,
    outputSchema: CorrectMenuQueryOutputSchema,
  },
  async (input: CorrectMenuQueryInput) => {
    if (!input.query.trim()) {
      return { correctedQuery: '' };
    }
    const {output} = await prompt(input);
    return output || { correctedQuery: input.query }; // Fallback to original query if LLM returns null/undefined
  }
);
