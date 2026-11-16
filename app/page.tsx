import { Project } from "@/components/project";
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
        {projects.map((p: ProjectType, idx: number) => (
          <Project key={idx} project={p} />
        ))}
      </div>
    </div>
  );
}
