import { readFile } from "node:fs/promises";
import { PDFParse } from "pdf-parse";

export const loader = async (filePath) => {
  // reads the pdf file as a binary buffer
  const buffer = await readFile(filePath);
  console.log("binary buffer...", buffer);

  // pdf-parse extracts raw text strings
  const parser = new PDFParse({ data: buffer });
  console.log("parsed text...", parser);

  try {
    // getting the text from the parser
    const result = await parser.getText();
    const text = result.text ?? "";
    console.log("getting text from parser...", result, text);

    /* chunking here
    splitting full text into an array of 
    chunks upto 500 char */
    console.log(text.match(/(.|[\r\n]){1,500}/g) ?? []);
    return text.match(/(.|[\r\n]){1,500}/g) ?? [];
  } finally {
    // finally distroy/clean parser
    console.log("parser before distroy...", parser);
    await parser.destroy();
    console.log("parser after distroy...", parser);
  }
};
