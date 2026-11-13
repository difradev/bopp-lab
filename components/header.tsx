import Image from "next/image";

export function Header() {
  return (
    <div className="w-full py-8 bg-red-800 font-bowlby-one">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Image
          src="images/boppscontornato.svg"
          height={100}
          width={200}
          alt="Bopp!LAB"
        />
        <p className="text-white font-semibold text-lg uppercase">Hey!</p>
      </div>
    </div>
  );
}
