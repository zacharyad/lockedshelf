'use client';
import React from 'react';
import { faqs } from '../data';

function Faqs() {
  return (
    <section className="border-t-2 pt-2">
      <div className="pt-8  bg-inherit p-12">
        <h2 className="text-center p-4 text-5xl  text-black">FAQ</h2>
        {faqs.length >= 0 &&
          faqs.map(({ question, answer }) => {
            return (
              <details
                key={question}
                className="bg-blue-700 open:bg-green-500 text-white open:text-black duration-300 my-4 border-2 "
              >
                <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
                  {question}
                </summary>
                <div className="bg-white px-5 py-3 border border-gray-300 text-sm font-light">
                  <p>{answer}</p>
                </div>
              </details>
            );
          })}
      </div>
    </section>
  );
}

export default Faqs;
