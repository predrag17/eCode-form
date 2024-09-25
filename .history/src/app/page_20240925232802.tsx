import SubjectForm from "./components/SubjectForm";
import Image from "next/image"; 
import logo from "../public/logo.png";

export default function Home() {
  return (
    <>
      <section className="pt-8 text-center bg-gradient-to-r from-pink-200 bg-ecode text-white">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="Platform Logo" width={120} height={120} className="rounded-full shadow-lg" />
        </div>

        {/* Title */}
        <h3 className="text-4xl font-bold tracking-wide">
          Започни со учење денес!
        </h3>

        {/* Description */}
        <p className="mt-4 text-lg font-light">
          Бидете дел од нашата платформа за учење. Пријави се сега и доби 10% попуст.
        </p>
      </section>

      <div className="wrapper my-8">
        <SubjectForm />
      </div>
    </>
  );
}
