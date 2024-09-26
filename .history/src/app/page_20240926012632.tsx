import Image from "next/image"; 
import logo from "./no-background.png";
import SubjectForm from "@/components/shared/SubjectForm";

export default function Home() {
  return (
    <>
      <section className="pt-8 text-center text-white">
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="Platform Logo" width={120} height={120} />
        </div>

        <h3 className="text-4xl text-black font-bold tracking-wide">
          Започни со учење денес!
        </h3>

        <p className="mt-4 text-lg text-black font-light">
          Бидете дел од нашата платформа за учење. <br/>
          Пријави се сега и доби <b>10%</b> попуст.
        </p>
      </section>

      <div className="wrapper my-8">
        <SubjectForm />
      </div>
    </>
  );
}
