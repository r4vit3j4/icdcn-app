import Image from "next/image";

const HeroImages = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex items-center">
        <Image
          src="/assets/illustrations/cpu-wafer.webp"
          height={150}
          width={168}
          alt="illustration"
          className="object-cover h-32 w-40 rounded-md translate-x-1"
        />
        <Image
          src="/assets/illustrations/cpu.webp"
          height={160}
          width={208}
          alt="illustration"
          className="object-cover h-40 w-52 rounded-md z-10"
        />
        <Image
          src="/assets/illustrations/cpu-wafer.webp"
          height={150}
          width={168}
          alt="illustration"
          className="object-cover h-32 w-40 rounded-md -translate-x-1"
        />
      </div>
    </div>
  );
};

export default HeroImages;
