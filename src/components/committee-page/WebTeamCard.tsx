import { IWebTeamCard } from "@/types/types";
import Image from "next/image";

const WebTeamCard = ({ imageUrl, institute, name, role }: IWebTeamCard) => {
  return (
    <div className="p-4 border rounded-md bg-background/50 group">
      <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4">
        <div className="h-40 w-40 bg-muted rounded-md overflow-hidden">
          <Image
            src={imageUrl}
            height={160}
            width={160}
            className="object-cover object-top h-40 w-40 rounded-md group-hover:scale-105 transition ease-in-out duration-300"
            alt={name}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{name}</p>
          <p className="leading-7 text-muted-foreground">{role}</p>
          <p className="leading-7">{institute}</p>
        </div>
      </div>
    </div>
  );
};

export default WebTeamCard;
