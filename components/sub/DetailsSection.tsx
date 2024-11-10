import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism-tomorrow.css'; // Dark theme


interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
  }
  
  interface Props {
    name: string;
    age: number;
    address: Address;
    hobbies: string[];
  }

const DetailsSection = ({...data}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const jsonString = JSON.stringify(data, null, 2);

  return (
    <pre className="text-[12px] line-numbers border-[purple] bg-transparent text-white p-2 sm:p-4 rounded-xl border-x-2 border-y overflow-auto">
      <code className="language-json">{jsonString}</code>
    </pre>
  );
};

export default DetailsSection;
