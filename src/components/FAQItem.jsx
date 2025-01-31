import { useState } from "react";
import axios from "axios";

const FAQItem = ({ faq, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [question, setQuestion] = useState(faq.question);
  const [answer, setAnswer] = useState(faq.answer);

  const handleUpdate = async () => {
    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/faqs/${faq._id}`, {
        question,
        answer,
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating FAQ:", error);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      {isEditing ? (
        <>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold">{faq.question}</h2>
          <p className="text-gray-700">{faq.answer}</p>
          <div className="mt-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(faq._id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FAQItem;