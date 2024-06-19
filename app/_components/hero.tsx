import { Rowdies, Zeyada } from "next/font/google";
import { GiRobotAntennas } from "react-icons/gi";
import { cn } from "@/libs/utils";

const rowdies = Rowdies({ subsets: ["latin"], weight: ["300", "400", "700"] });
const zeyada = Zeyada({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  return (
    <section
      className={cn(
        "mx-auto w-full p-10 text-primary flex items-center justify-center flex-col h-full",
        rowdies.className
      )}
    >
      <GiRobotAntennas className="w-14 h-14 fill-white bg-primary-light rounded-full p-2 animate-bounce" />
      <h1 className="text-5xl text-center md:text-7xl">Welcome to Nexibot</h1>
      <h2
        className={cn(
          "text-center font-semibold text-lg text-[14px] md:text-[20px]",
          zeyada.className
        )}
      >
        Your AI superhero, always on-call and never needing a coffee break!
      </h2>
    </section>
  );
};

export default Hero;
