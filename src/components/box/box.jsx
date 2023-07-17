import React, { useState, useEffect, useRef } from "react";

export default function Box() {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "Hi ,I'm a robot for your answer of question we created by"
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);

  const [question, setQuestion] = useState(0);

  const Reffly = useRef();

  useEffect(() => {
    if (Reffly.current.value != "") {
      
    } else {
    
    }
  }, [question]);

  const CreateResponse = () => {
    return (
      <div className="flex flex-row-reverse items-start gap-2 w-2/4 float-right">
        <img
          src="/assets/img/person.jpg"
          alt="robot img"
          width={50}
          className="rounded-full items-start"
        />
        <div className=" bg-white rounded-lg p-2 flex flex-col">
          <h4 className="text-sm text-red-300 font-light"> Keyhanil </h4>
          <p className="font-YsabeauOffice">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nostrum maxime nemo vitae sequi dolor expedita mollitia sit sunt itaque dolore, impedit officiis! Minima, quaerat dolorum. Dolorem quidem voluptatem pariatur.
          </p>
          <span className="block text-sm mt-4 float-right font-light ">
            {new Date().toLocaleString()}
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container mt-10 mb-0 h-3/4 shadow-lg text-black text-xl p-3 rounded-t-md bg-backgroundChat bg-cover overflow-auto">
        <div className="flex items-start gap-2 w-2/4">
          <img
            src="/assets/img/chatbot.jpg"
            alt="robot img"
            width={50}
            className="rounded-full items-start"
          />
          <div className=" bg-white rounded-lg p-2 flex flex-col">
            <h4 className="text-sm text-blue-800 font-light"> Robot</h4>
            <p className="font-YsabeauOffice">{text}</p>
            <p>
              <a
                href="https://github.com/MkeyhaniM"
                className="font-YsabeauOffice"
              >
                Mkeyhanil
              </a>
            </p>
            <span className="block text-sm mt-4 float-right font-light ">
              {new Date().toLocaleString()}
            </span>
          </div>
        </div>
        <div>
          <CreateResponse />
        </div>
      </div>
      <div className="flex items-center container mt-0 justify-center w-full">
        <input
          type="text"
          className="w-full h-12 rounded-bl-md focus:outline-none text-center"
          placeholder="Hi , who are you ?"
          id="req"
          ref={Reffly}
        />
        <button
          className="font-light bg-lime-400 rounded-br-md active:scale-95"
          onClick={() => setQuestion(question + 1)}
        >
          Ask your question{" "}
        </button>
      </div>
    </>
  );
}
