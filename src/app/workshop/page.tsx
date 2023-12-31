const WorkshopPage = () => {
  return (
    <div className="container py-20 mt-10 relative">
      <div className="flex flex-col gap-16 items-center">
        <h2 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight">
          Workshop Schedule
        </h2>
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-col gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Keynote
            </h3>
            <p className="leading-7">Will be updated soon...</p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Technical Session
            </h3>
            <p className="leading-7">Will be updated soon...</p>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 -top-32 -z-10 transform-gpu overflow-hidden sm:-top-96 blur-3xl"
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
        className="absolute inset-x-0 bottom-[30rem] -z-10 transform-gpu overflow-hidden sm:bottom-0 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default WorkshopPage;
