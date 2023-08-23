import ImportantDatesCard from "@/components/ImportantDatesCard";

const PapersPage = () => {
  return (
    <div className="py-20 mt-10 relative container">
      <div className="flex flex-col gap-16">
        <div className="container flex flex-col gap-4 items-center text-center">
          <h2 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight">
            Call for Papers
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl">
            The International Workshop on Ideas, Algorithms, Models, Libraries
            and Tools for Leveraging Heterogeneity in Computing Paradigms
          </p>
          <p className="text-muted-foreground">
            In conjunction with{" "}
            <a
              href="http://cse.iitm.ac.in/~icdcn2024/"
              target="_blank"
              className="underline underline-offset-2 transition text-primary hover:text-muted-foreground"
            >
              ICDCN 2024
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Aim
            </h3>
            <p className="leading-7">
              Heterogeneity has emerged as one of the most profound and
              challenging characteristics of today&#39;s computing paradigms.
              The impact of heterogeneity on all computing tasks is increasing
              rapidly. Traditional algorithms, programming environments and
              tools designed for legacy homogeneous computing platforms could
              not support the growing diversity in infrastructure and the
              increasing volume of data. This growth creates the need and
              opportunity for new research to effectively utilize these
              heterogeneous resources in innovative and novel ways in different
              computing Paradigms such as cluster computing, grid computing,
              peer-to-peer computing, cloud computing, edge computing, and fog
              computing. Recognizing, capturing, and efficiently exploiting the
              availability of diverse computing resources in an integrated and
              coherent manner are the key goals of this workshop.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Scope
            </h3>
            <p className="leading-7">
              Topics to be covered include but are not limited to:
            </p>
            <ul className="ml-6 list-disc flex flex-col gap-2">
              <li>
                Performance models and their integration into the design of
                efficient parallel algorithms for heterogeneous computing
                platforms
              </li>
              <li>
                Resource management and scheduling for heterogeneous systems,
                including many cores and hardware accelerators (e.g. FPGAs,
                GPUs, AI accelerators)
              </li>
              <li>
                Parallel algorithms for efficient problem-solving on
                heterogeneous computing platforms
              </li>
              <li>
                Applications and software engineering for heterogeneous
                computing platforms
              </li>
              <li>
                Design, exploration, and experimental analysis of heterogeneous
                computing systems such as GPGPUs, Systems-on-Chip (SoC),
                accelerator systems
              </li>
              <li>
                Theoretical models and tools for energy and/or multi-objective
                optimization on heterogeneous computing platforms
              </li>
              <li>
                Programming paradigms and tools for heterogeneous systems,
                including middleware and runtime systems;
              </li>
              <li>
                Domain-specific architectures: Design, programming, and
                exploration of heterogeneous computing architectures that
                provide a significant performance improvement for a specific
                application domain, such as AI, image processing, weather
                forecasting and Bioinformatics etc...
              </li>
              <li>
                Performance modelling and benchmarking on heterogeneous
                computing platforms, characterizations and optimizations
              </li>
              <li>
                Power/energy management and failure management (e.g., fault
                tolerance, recovery, reliability) on heterogeneous computing
                platforms
              </li>
              <li>
                Systems software to support various operations in large-scale
                heterogeneous computing platforms (e.g., storage, retrieval,
                automated workflows, data organization, visualization)
              </li>
              <li>
                Applications on heterogeneous systems: Confluence of Big Data
                systems and heterogeneous systems; data-intensive computing; and
                scientific computing
              </li>
            </ul>
            <p className="leading-7">
              Authors are encouraged to submit original, unpublished research or
              overviews on Algorithms, Theoretical Models, Programming languages
              and Tools aimed at efficiently solving problems on various
              heterogeneous computing platforms.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Publications
            </h3>
            <p className="leading-7">
              HeteroComp24 proceedings will be published in ACM ICPS along with
              ICDCN main conference proceedings and will be available through
              ACM Digital Library.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Important Dates
            </h3>
            <ImportantDatesCard />
          </div>

          <div className="flex flex-col gap-3 items-start">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Submission Guidelines
            </h3>
            <div>
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Paper length and format
              </h4>
              <p className="leading-7 mt-1">
                The workshop papers must be no more than 6 pages, including
                title, abstract, figures and references, and not published or
                under review elsewhere. Also, papers must be formatted with{" "}
                <a
                  href="https://www.acm.org/publications/proceedings-template"
                  target="_blank"
                  className="underline underline-offset-2 transition text-muted-foreground hover:text-primary"
                >
                  ACM conference proceedings template
                </a>
              </p>
            </div>
            <div>
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Submission
              </h4>
              <p className="leading-7 mt-1">
                Papers are to be submitted electronically through{" "}
                <a
                  href="https://easychair.org/conferences/?conf=heterocomp24"
                  target="_blank"
                  className="underline underline-offset-2 transition text-muted-foreground hover:text-primary"
                >
                  EasyChair
                </a>
              </p>
            </div>
            <div>
              <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                Registration of accepted workshop papers
              </h4>
              <p className="leading-7 mt-1">
                For each accepted workshop paper to appear in the ACM digital
                library, at least one author of the paper must register as a
                regular registrant even if he/she is a student, and the paper
                must be presented in the workshop by one of its authors
              </p>
            </div>
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
        className="absolute inset-x-0 top-[50rem] -z-10 transform-gpu overflow-hidden md:hidden blur-3xl"
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

      <div
        className="absolute inset-x-0 bottom-[30rem] -z-10 transform-gpu overflow-hidden sm:bottom-52 blur-3xl"
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

export default PapersPage;
