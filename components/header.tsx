import Image from "next/image";

export function Header() {
  return (
    <div className="w-full py-8 bg-red-800 font-bowlby-one">
      <div className="max-w-6xl mx-auto flex justify-between items-center lg:p-0 px-4">
        <Image
          src="images/boppscontornato.svg"
          height={100}
          width={200}
          alt="Bopp!LAB"
        />
        <a
          href="mailto:hey@bopplab.it"
          className="text-[#ed1c24] font-semibold text-lg uppercase transition-all duration-300 hover:text-white hover:animate-pulse hover:scale-125 cursor-pointer"
        >
          Hey!
        </a>
      </div>
    </div>
  );
}
