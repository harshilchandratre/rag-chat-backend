import { CloudClient } from "chromadb";

// creating an instance of chroma database
const client = new CloudClient({
  apiKey: process.env.CHROMA_API_KEY,
  tenant: process.env.CHROMA_TENANT,
  database: process.env.CHROMA_DATABASE,
});

/* a workaround embedder function to bypass 
chroma's built in embedding step... 
since we have been providing 
our own precomputed embeddings via hf..*/
const noopEmbedder = {
  generate: async (texts) => texts.map(() => []),
};

// to store each chunk with it's vector  
export const collection = await client.getOrCreateCollection({
  name: "documents",
  embeddingFunction: noopEmbedder,
});