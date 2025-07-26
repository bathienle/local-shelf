import { createWorker } from 'tesseract.js';

export const useRecognise = () => {
  const recognise = async (imageUrl: string) => {
    const worker = await createWorker('eng');
    const { data } = await worker.recognize(imageUrl);

    return data.text.trim();
  };

  return { recognise };
};