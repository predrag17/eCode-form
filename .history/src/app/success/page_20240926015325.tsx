"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import ReactConfetti from "react-confetti";

const SuccessPage = () => {
  const router = useRouter();
  const [windowDimensions, setWindowDimensions] = useState({width: window.innerWidth - 50, height: window.innerHeight})

  const detectSize = () => {
    setWindowDimensions({width: window.innerWidth - 50, height: window.innerHeight - 50})
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () =>{
        window.removeEventListener('resize', detectSize); 
    }
  }, [windowDimensions]);

  return (
    <>
      <ReactConfetti width={windowDimensions.width} height={windowDimensions.height} />
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Успешно ја добивме вашата пријава, ќе ве контактираме на вашиот
          инстаграм профил.
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Сакаш да пријавиш друг предмет?
        </p>
        <Button
          onClick={() => router.push("/")}
          className="flex items-center px-4 py-2 text-white font-medium rounded"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Врати се назад
        </Button>
      </div>
    </>
  );
};

export default SuccessPage;
