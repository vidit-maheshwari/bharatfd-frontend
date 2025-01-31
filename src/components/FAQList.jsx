import { useEffect, useState } from "react";
import axios from "axios";
import FAQItem from "./FAQItem";

const FAQList = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/faqs`);
      setFaqs(response.data);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/faqs/${id}`);
      fetchFAQs(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage FAQs</h1>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <FAQItem key={faq._id} faq={faq} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default FAQList;