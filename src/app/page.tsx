"use client";
import ImportantDatesCard from "@/components/ImportantDatesCard";
import OrganizersCard from "@/components/committee-page/OrganizersCard";
import HeroImages from "@/components/hero/HeroImages";
import { workshopOrganizers } from "@/data/committee";
import { ChevronDownCircle } from "lucide-react";
import Image from "next/image";

const HomePage = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="container pt-20 flex flex-col gap-16 relative">
      <div className="flex flex-col items-center gap-8 text-center pt-10 md:pt-10 pb-10 md:pb-20">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight max-w-5xl lg:text-5xl">
          HeteroComp24
        </h1>
        <h2 className="scroll-m-20 text-xl sm:text-2xl font-bold tracking-tight max-w-5xl lg:text-4xl">
          The International Workshop on Ideas, Algorithms, Models, Libraries and
          Tools for Leveraging Heterogeneity in Computing Paradigms
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground">
          in conjunction with{" "}
          <a
            href="http://cse.iitm.ac.in/~icdcn2024/"
            className="font-medium text-primary underline underline-offset-4 hover:text-muted-foreground"
            target="_blank"
          >
            The 25th ACM International Conference on Distributed Computing &
            Networking (ICDCN 2024)
          </a>
        </p>
        <p className="text-base sm:text-lg text-muted-foreground">
          Venue: IIT Madras, 4-7th January 2024
        </p>
        <div>
          <HeroImages />
        </div>

        <a href="#intro" onClick={handleScroll} aria-label="scroll-down">
          <ChevronDownCircle className="mt-2 h-7 w-7" />
        </a>
      </div>

      <div id="intro" className="flex flex-col gap-5 items-center scroll-m-20">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
          About
        </h2>
        <div className="p-4 rounded-md border bg-background/50">
          <p className="leading-7">
            The aim of this workshop is intended to be a forum for researchers
            working on algorithms, theoretical models, programming languages,
            and tools aimed at efficiently solving problems on various
            heterogeneous computing paradigms such as{" "}
            <span className="font-semibold">
              Cluster computing, Grid computing, Peer-to-Peer computing, Cloud
              computing, Edge computing, and Fog computing.
            </span>
          </p>
        </div>
      </div>

      <div
        id="organizers"
        className="flex flex-col items-center gap-4 scroll-m-20"
      >
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          Workshop Organizers
        </h2>
        <div className="flex flex-col items-center gap-4">
          <a
            href="http://iotcloud.iiitkottayam.ac.in"
            target="_blank"
            className="text-lg font-medium hover:underline underline-offset-2 text-muted-foreground text-center"
          >
            IoT Cloud research laboratory, Indian Institute of Information
            Technology Kottayam
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {workshopOrganizers.map((organizer, index) => {
              return <OrganizersCard key={index} {...organizer} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight">
          Important Dates
        </h2>
        <ImportantDatesCard />
      </div>
      <div className="border-t p-4 flex flex-col sm:flex-row items-end md:items-center gap-4 justify-between mt-20">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logos/iot-cloud.webp"
            height="20"
            width="40"
            alt="iiitk-logo"
            className="object-contain rounded-sm"
          />
          <a
            href="http://iotcloud.iiitkottayam.ac.in/home.php"
            className="text-xs sm:text-sm text-muted-foreground font-medium underline underline-offset-2 hover:text-primary"
            target="_blank"
          >
            IoT Cloud research laboratory
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logos/iiitk-logo-mini.webp"
            height="20"
            width="20"
            alt="iiitk-logo"
            className="object-contain rounded-md"
          />
          <a
            href="https://www.iiitkottayam.ac.in/"
            className="text-xs sm:text-sm text-muted-foreground font-medium underline underline-offset-2 hover:text-primary"
            target="_blank"
          >
            IIIT Kottayam
          </a>
        </div>
      </div>

      <div
        className="absolute inset-x-0 -top-32 -z-10 transform-gpu overflow-hidden sm:-top-32 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div
        className="absolute inset-x-0 top-[40rem] -z-10 transform-gpu overflow-hidden sm:top-[20rem] blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div
        className="absolute inset-x-0 bottom-96 -z-10 transform-gpu overflow-hidden sm:bottom-0 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[0] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:opacity-10 sm:left-[0] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
