const ImportantDatesCard = () => {
  return (
    <div className="p-6 rounded-md border bg-background/50">
      <ul className="flex list-disc ml-6 flex-col gap-2">
        <li>
          <span className="block text-lg font-semibold">
            Opening for Submission
          </span>
          <span className="block leading-7 text-muted-foreground font-medium">
            August 11th, 2023
          </span>
        </li>
        <li>
          <span className="block text-lg font-semibold">
            Deadline for Workshop Papers
          </span>
          <div className="flex items-center gap-2">
            <span className="block leading-7 text-muted-foreground font-medium line-through decoration-red-500">
              September 30th, 2023
            </span>
            <span className="leading-7 text-primary font-medium bg-yellow-200 px-2 rounded-lg">
              Closed
            </span>
          </div>
        </li>
        <li>
          <span className="block text-lg font-semibold">
            Decision on Acceptance/Rejection of the Workshop Papers
          </span>
          <div className="flex items-center gap-2">
            <span className="block leading-7 text-muted-foreground font-medium line-through decoration-red-500">
              October 15th, 2023
            </span>
            <span className="leading-7 text-primary font-medium bg-yellow-200 px-2 rounded-lg">
              October 20th, 2023
            </span>
          </div>
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
  );
};

export default ImportantDatesCard;
