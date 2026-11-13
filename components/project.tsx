export function Project(type: "web" | "experiment" | "game") {
  const LabelProject = () => {
    const labelMap = {
      web: {
        bg: "#ed1c24",
        text: "",
      },
    };

    return <span style={`background-color: ${labelMap[type].bg}`}></span>;
  };

  return (
    <div className="w-full p-8 flex justify-between items-center text-lg">
      <div className="flex gap-4 items-center">
        <div className="flex flex-col items-center">
          <p className="text-3xl">001</p>
          <span className="text-sm bg-red-500 w-full text-center">web</span>
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-xl">Nome progetto</p>
          <p className="text-slate-500">Breve descrizione del progetto</p>
        </div>
      </div>
      <p className="text-xl text-slate-500">2026</p>
    </div>
  );
}
