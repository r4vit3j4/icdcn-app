import { importantDates } from "@/data/papers";

const ImportantDatesCard = () => {
  return (
    <div className="p-6 rounded-md border bg-background/50">
      <ul className="flex list-disc ml-6 flex-col gap-2">
        {importantDates.map(({ title, date }, index) => {
          return (
            <li key={index}>
              <span className="block text-lg font-semibold">{title}</span>
              <span className="block leading-7 text-muted-foreground font-medium">
                {date}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImportantDatesCard;
