import { Project, ProjectType } from "@/types/project";
import Link from "next/link";

type ProjectProps = {
  project: Project;
};

export function Project({ project }: ProjectProps) {
  const LabelProject = ({ type }: ProjectType) => {
    const labelMap: Record<string, string> = {
      web: "bg-[#ed1c24] text-white",
    };

    const labelStyle =
      labelMap[type as unknown as string] || "bg-gray-500 text-white";
    return (
      <span
        className={`px-4 py-1 rounded-sm text-sm ${labelStyle} w-full text-center font-bold`}
      >
        {type || "IDK"}
      </span>
    );
  };

  return (
    <Link href={project.link ?? ""} target="_blank">
      <div className="w-full p-8 flex justify-between items-center text-lg border  border-white hover:border hover:border-[#ed1c24] hover:bg-[#ed1c24]/10 transition-all cursor-pointer rounded-sm">
        <div className="flex gap-6 items-start">
          <div className="flex flex-col items-center">
            {project.isActive && (
              <span className="text-[10px] bg-green-300 px-1 w-full text-center">
                active
              </span>
            )}
            <p className="text-3xl">{project.dropNumber}</p>
            <LabelProject type={project.type} />
          </div>
          <div className="flex flex-col gap-0">
            <p className="text-xl font-bold">{project.name}</p>
            <p className="text-slate-500 text-base">
              {project.description ||
                "Oops!! There is no description for this project."}
            </p>
          </div>
        </div>
        <p className="text-lg text-slate-500">2026</p>
      </div>
    </Link>
  );
}
