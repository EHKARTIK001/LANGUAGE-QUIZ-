const fetch = require("node-fetch");

// Hugging Face API details
const API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";
const API_KEY = "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22"; // Replace with your Hugging Face API key

// Text to summarize
const text = `
  Hugging Face is an open-source library that provides tools for natural language processing (NLP).
  It is used for a variety of tasks such as text classification, question answering, and summarization.
  With an easy-to-use interface, it is popular among developers and researchers alike.
`;

// Function to call the API
async function getSummary(inputText) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: inputText }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Summary:", result[0]?.summary_text);
    } else {
      console.error("Error:", response.status, await response.text());
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Call the function
getSummary(text);
