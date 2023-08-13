import Image from "next/image";

const HeroImages = () => {
  return (
    <div className="w-full flex justify-center group">
      <div className="flex items-center drop-shadow-sm">
        <div className="bg-muted object-cover object-center h-24 w-20 min-[375px]:w-24 sm:h-32 sm:w-40 rounded-sm sm:rounded-md overflow-hidden translate-x-5 sm:translate-x-10 group-hover:-translate-x-2 ease-in-out duration-500 transition group-hover:-skew-y-3">
          <Image
            src="/assets/illustrations/cpu-wafer.webp"
            height={150}
            width={168}
            alt="illustration"
            className="object-cover object-center h-24 w-20 min-[375px]:w-24 sm:h-32 sm:w-40 rounded-sm sm:rounded-md ease-in-out duration-500 transition"
          />
        </div>
        <div className="z-10 bg-muted object-cover object-center h-28 w-28 min-[375px]:w-32 sm:h-40 sm:w-52 rounded-sm sm:rounded-md shadow-lg drop-shadow-lg group-hover:skew-y-3 transition duration-500 ease-in-out overflow-hidden">
          <Image
            src="/assets/illustrations/circuit.webp"
            height={160}
            width={208}
            alt="illustration"
            className="object-cover object-center h-28 w-28 min-[375px]:w-32 sm:h-40 sm:w-52 rounded-sm sm:rounded-md transition duration-500 ease-in-out"
          />
        </div>
        <div className="bg-muted object-cover object-center h-24 w-20 min-[375px]:w-24 sm:h-32 sm:w-40 rounded-sm sm:rounded-md -translate-x-5 sm:-translate-x-10 group-hover:translate-x-2 ease-in-out duration-500 transition group-hover:-skew-y-3 overflow-hidden">
          <Image
            src="/assets/illustrations/cpu.webp"
            height={150}
            width={168}
            alt="illustration"
            className="object-cover object-center h-24 w-20 min-[375px]:w-24 sm:h-32 sm:w-40 rounded-sm sm:rounded-md ease-in-out duration-500 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImages;
