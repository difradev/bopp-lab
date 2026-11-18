import { ProjectCard } from "@/components/project";
import { Project as ProjectType } from "@/types/project";
import { promises as fs } from "fs";

export default async function Home() {
  "use cache";
  const projectsJson = await fs.readFile(
    `${process.cwd()}/app/data/projects.json`,
    "utf-8",
  );
  const projects = JSON.parse(projectsJson).projects as ProjectType[];

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex gap-4 w-full">
        <p className="slogan">
          <span>Project.</span>
          <span>Experiment.</span>
          <span>Games.</span>
        </p>
        <div className="flex justify-center items-center w-full">
          <p className="font-bowlby-one rotate-6 text-[#ed1c24] lg:text-[12rem] text-9xl">
            !
          </p>
        </div>
      </div>
      <p className="mt-8 font-poppins text-lg">
        A creative{" "}
        <span className="font-bold text-[#ed1c24] border-2 border-[#ed1c24] p-1">
          LAB
        </span>{" "}
        where I build web projects, games and{" "}
        <span className="relative inline-block">
          experiments.
          <svg
            aria-hidden="true"
            viewBox="0 0 200 12"
            fill="none"
            preserveAspectRatio="none"
            className="absolute -bottom-1.5 left-0 w-full h-3 text-[#ed1c24]"
          >
            <path
              d="M2 9.5C55 3.5 145 2.5 198 8.5"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </p>
      <div className="relative w-screen h-4 bg-[repeating-linear-gradient(135deg,#ffffff_0px,#ffffff_8px,#ed1c24_8px,#ed1c24_10px)] left-1/2 -translate-1/2 mt-16 flex items-center justify-end pr-8">
        <span className="bg-white px-2 py-0.5 text-sm font-medium text-[#ed1c24]">
          EST.2026
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-8">
        {projects.map((p: ProjectType, idx: number) => (
          <ProjectCard key={idx} project={p} />
        ))}
      </div>
    </div>
  );
}
