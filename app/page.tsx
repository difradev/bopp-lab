import { Project } from "@/components/project";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex gap-4 w-full">
        <p className="slogan">
          <span>Project.</span>
          <span>Experiment.</span>
          <span>Games.</span>
        </p>
        <div className="flex justify-center items-center w-full">
          <p className="font-bowlby-one rotate-6 text-[#ed1c24] text-[12rem]">
            !
          </p>
        </div>
      </div>
      <div className="relative w-screen h-4 bg-[repeating-linear-gradient(135deg,#ffffff_0px,#ffffff_8px,#ed1c24_8px,#ed1c24_10px)] left-1/2 -translate-1/2 mt-16" />
      <div className="flex flex-col gap-4 mt-8">
        <Project />
      </div>
    </div>
  );
}
