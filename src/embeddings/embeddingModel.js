import { InferenceClient } from "@huggingface/inference";

// creating hf instance to access inference API
const hfClient = new InferenceClient(process.env.HF_TOKEN);

/*
calls the hf API with all-MiniLM-L6-v2 model. 
the model returns embedded text 
(strings of text => a dense vector - an array of 
approx 348 floating point numbers that encodes the
semantic meaning of the text.) 

similar sentences produce similar vectors 
(close in vector space) - this is how semantic 
search works.
*/
export const embedText = async (text) => {
  const embedding = await hfClient.featureExtraction({
    model: "sentence-transformers/all-MiniLM-L6-v2",
    inputs: text,
    provider: "hf-inference",
  });

  console.log("embedded text...", embedding);

  return embedding;
};
