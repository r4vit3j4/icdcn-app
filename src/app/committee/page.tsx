"use client";
import OrganizersCard from "@/components/committee-page/OrganizersCard";
import WebTeamCard from "@/components/committee-page/WebTeamCard";
import { webTeam, workshopOrganizers } from "@/data/committee";

const CommitteePage = () => {
  return (
    <div className="container py-20 mt-10 relative">
      <div className="flex flex-col gap-16">
        <h2 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight">
          Committee
        </h2>
        <div className="flex flex-col gap-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Workshop Organizers
          </h2>
          <div className="flex flex-col gap-4">
            <a href="http://iotcloud.iiitkottayam.ac.in" target="_blank">
              <h3 className="text-lg font-medium hover:underline underline-offset-2 text-muted-foreground hover:text-primary">
                IoT Cloud research laboratory, Indian Institute of Information
                Technology Kottayam
              </h3>
            </a>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {workshopOrganizers.map((organizer, index) => {
                return <OrganizersCard key={index} {...organizer} />;
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Program committee members and invited speakers
          </h2>
          <div>
            <p>will be updated soon...</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Web Team
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {webTeam.map((teamMember, index) => {
              return <WebTeamCard key={index} {...teamMember} />;
            })}
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 -top-32 -z-10 transform-gpu overflow-hidden sm:-top-52 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div
        className="absolute md:hidden inset-x-0 bottom-52 -z-10 transform-gpu overflow-hidden sm:bottom-0 blur-3xl"
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
    </div>
  );
};

export default CommitteePage;
