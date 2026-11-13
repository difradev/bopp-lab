import Image from "next/image";

export function Header() {
  return (
    <div className="w-full py-8 bg-red-800">
      <div className="max-w-6xl mx-auto">
        <Image
          src="images/boppscontornato.svg"
          height={100}
          width={200}
          alt="Bopp!LAB"
        />
      </div>
    </div>
  );
}
