import { askQuestions } from "../rag/pipeline.js";

// to handle http req, res
export const queryController = async (req, res) => {
  try {
    // accepts req.body, saves it as 'question'
    const { question } = req.body;
    console.log("user's question...", question);

    // takes response by the LLM as answer
    const answer = await askQuestions(question);
    console.log("LLM's response...", answer)
    res.json({ answer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
