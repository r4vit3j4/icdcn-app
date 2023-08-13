import { IOrganizersCard } from "@/types/types";
import Image from "next/image";

const OrganizersCard = ({
  department,
  institute,
  lab,
  mail,
  name,
  role,
  mobile,
  phone,
  imageUrl,
}: IOrganizersCard) => {
  return (
    <div className="p-4 border rounded-md bg-background/50">
      <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
        <div className="h-40 w-40 bg-muted rounded-md">
          <Image
            src={imageUrl}
            height={160}
            width={160}
            className="object-cover object-top h-40 w-40 rounded-md"
            alt={name}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-muted-foreground leading-7">{role}</p>
          <p className="leading-7">{department}</p>
          <p className="leading-7">{lab}</p>
          <p className="leading-7">{institute}</p>

          <p className="leading-7">
            Email -{" "}
            <a
              href={`mailto:${mail}`}
              className="leading-7 hover:underline underline-offset-2 hover:text-muted-foreground"
            >
              {mail}
            </a>
          </p>

          <p className="leading-7">
            Phone -{" "}
            <a
              href={`tel:${phone}`}
              className="leading-7 hover:underline underline-offset-2 hover:text-muted-foreground"
            >
              {phone}
            </a>
          </p>
          <p className="leading-7">
            Mobile -{" "}
            <a
              href={`tel:${mobile}`}
              className="leading-7 hover:underline underline-offset-2 hover:text-muted-foreground"
            >
              {mobile}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrganizersCard;
