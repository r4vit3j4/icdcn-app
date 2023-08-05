"use client";
import OrganizersCard from "@/components/committee-page/OrganizersCard";
import { workshopOrganizers } from "@/data/committee";
import { ChevronDownCircle } from "lucide-react";

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
    <div className="container pt-20 flex flex-col gap-10 relative">
      <div className="flex flex-col items-center gap-8 text-center pt-20 pb-10 md:pb-20">
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight max-w-5xl lg:text-5xl">
          The International Workshop on Ideas, Algorithms, Models, Libraries and
          Tools for Leveraging Heterogeneity in Computing Paradigms
        </h1>
        <p className="text-lg text-muted-foreground">
          in conjunction with{" "}
          <a
            href="http://cse.iitm.ac.in/~icdcn2024/"
            className="font-medium text-primary underline underline-offset-4 hover:text-muted-foreground"
            target="_blank"
          >
            The 25th International Conference on Distributed Computing &
            Networking (ICDCN 2024)
          </a>
        </p>
        <a href="#organizers" onClick={handleScroll} aria-label="scroll-down">
          <ChevronDownCircle className="mt-4 h-7 w-7" />
        </a>
      </div>
      <div
        id="organizers"
        className="flex flex-col items-center gap-8 scroll-m-20"
      >
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
          Workshop Organizers
        </h2>
        <div className="flex flex-col items-center gap-4">
          <a href="http://iotcloud.iiitkottayam.ac.in" target="_blank">
            <h3 className="text-lg font-semibold hover:underline underline-offset-2 text-center text-muted-foreground">
              IoT Cloud research laboratory, Indian Institute of Information
              Technology Kottayam
            </h3>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workshopOrganizers.map((organizer, index) => {
              return <OrganizersCard key={index} {...organizer} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
          Important Dates
        </h2>
        <div className="p-6 rounded-md border bg-background/50">
          <ul className="flex list-disc ml-6 flex-col gap-2">
            <li>
              <span className="block text-lg font-semibold">
                Opening of Workshop Papers for Acceptance
              </span>
              <span className="block leading-7 text-muted-foreground font-medium">
                July 23rd, 2023
              </span>
            </li>
            <li>
              <span className="block text-lg font-semibold">
                Deadline for Workshop Papers
              </span>
              <span className="block leading-7 text-muted-foreground font-medium">
                September 15th, 2023
              </span>
            </li>
            <li>
              <span className="block text-lg font-semibold">
                Decision on Acceptance/Rejection of Workshop Papers
              </span>
              <span className="block leading-7 text-muted-foreground font-medium">
                October 15th, 2023
              </span>
            </li>
            <li>
              <span className="block text-lg font-semibold">
                Camera-Ready Papers Version Due
              </span>
              <span className="block leading-7 text-muted-foreground font-medium">
                October 31st, 2023
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t p-4 flex justify-end mt-20">
        <a
          href="https://www.iiitkottayam.ac.in/"
          className="text-sm text-muted-foreground font-medium underline underline-offset-2 hover:text-primary"
        >
          IIIT Kottayam
        </a>
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
