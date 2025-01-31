import  { useState } from "react";
import FAQList from "./components/FAQList";
import FAQForm from "./components/FAQForm";

const App = () => {
  const [faqs, setFaqs] = useState([]);

  const handleAdd = (newFAQ) => {
    setFaqs([...faqs, newFAQ]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">FAQ Admin Panel</h1>
      <FAQForm onAdd={handleAdd} />
      <FAQList faqs={faqs} />
    </div>
  );
};

export default App;