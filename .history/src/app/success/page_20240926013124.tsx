import React from 'react';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@heroicons/react';

const SuccessPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Успешно ја добивме вашата пријава, ќе ве контактираме на вашиот инстаграм профил.
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Сакаш да пријавиш друг предмет?
      </p>
      <button
        onClick={() => router.push('/')}
        className="flex items-center px-4 py-2 bg-yellow-700 text-white font-medium rounded hover:bg-yellow-800 transition-colors"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Врати се назад
      </button>
    </div>
  );
};

export default SuccessPage;
