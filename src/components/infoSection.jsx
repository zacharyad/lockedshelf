import { faqs } from '../data';
import Steps from './steps';

export default function InfoSection() {
  return (
    <section id="info" className="h-screen">
      <div className="pt-8  bg-inherit p-12">
        <h2 className="text-center p-4 text-5xl text-black">How it works:</h2>
        <Steps />
        <h2 className="text-center p-4 text-5xl  text-black">FAQ</h2>
        {faqs.length >= 0 &&
          faqs.map(({ question, answer }) => {
            return (
              <details className="bg-gray-300 open:bg-amber-200 duration-300 my-4 border-2 ">
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
