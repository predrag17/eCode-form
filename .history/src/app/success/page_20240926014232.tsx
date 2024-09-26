"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const SuccessPage = () => {
  const router = useRouter();
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    {showConfetti && (
        <Confetti
          width={width}
          height={height}
        />
      )}
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
  );
};

export default SuccessPage;

