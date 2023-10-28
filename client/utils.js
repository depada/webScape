import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/legacy/build/pdf";

// Set the worker source URL
GlobalWorkerOptions.workerSrc = "./node_modules/pdfjs-dist/build/pdf.worker.js";

const filterQuestions = (textItems) => {
  const questions = [];
  let isQuestion = false;
  let currentQuestion = [];

  // Iterate through the text items
  for (const item of textItems) {
    // Check if the item is a number
    if (/^\d+$/.test(item)) {
      // If it's a number, it may be a question number
      if (isQuestion) {
        // If we were previously inside a question, this is the end of that question
        questions.push(currentQuestion.join(" "));
        currentQuestion = []; // Reset the current question
      }
      isQuestion = true; // Mark the start of a new question
    } else {
      // If it's not a number, it's part of the question content
      currentQuestion.push(item);
    }
  }

  // If we are still inside a question at the end, add it to the questions array
  if (isQuestion) {
    questions.push(currentQuestion.join(" "));
  }

  return questions;
};

export const extractQuestionsFromPDF = async (pdfFile) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Create a new Blob from the provided pdfFile
      const blob = new Blob([pdfFile]);
      const arrayBuffer = await blob.arrayBuffer();
      const typedarray = new Uint8Array(arrayBuffer);

      // Load the PDF document
      const loadingTask = getDocument(typedarray);

      loadingTask.promise
        .then(async function (pdfDocument) {
          // Initialize an array to store extracted questions
          const extractedQuestions = [];

          // Loop through each page in the PDF document
          for (
            let pageNumber = 1;
            pageNumber <= pdfDocument.numPages;
            pageNumber++
          ) {
            const page = await pdfDocument.getPage(pageNumber);

            const textContent = await page.getTextContent();

            const textItems = textContent.items.map((item) => item.str);
            const questionsFiltered = filterQuestions(textItems);
            extractedQuestions.push(...questionsFiltered);
          }

          // Now, you have an array of questions starting with specific words
          const flattenedArr = extractedQuestions.flat();
          resolve(flattenedArr);
        })
        .catch(function (error) {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};
