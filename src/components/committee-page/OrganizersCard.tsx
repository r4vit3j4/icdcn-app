import { IOrganizersCard } from "@/types/types";

const OrganizersCard = ({
  department,
  institute,
  lab,
  mail,
  name,
  role,
  mobile,
  phone,
}: IOrganizersCard) => {
  return (
    <div className="p-4 border rounded-md bg-background/50">
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-muted-foreground leading-7">{role}</p>
      <p className="leading-7">{department}</p>
      <p className="leading-7">{lab}</p>
      <p className="leading-7">{institute}</p>

      <p className="font-medium">
        Email -{" "}
        <a
          href={`mailto:${mail}`}
          className="leading-7 font-medium underline underline-offset-2 hover:text-muted-foreground"
        >
          {mail}
        </a>
      </p>

      <p className="font-medium">
        Phone -{" "}
        <a
          href={`tel:${phone}`}
          className="leading-7 font-medium underline underline-offset-2 hover:text-muted-foreground"
        >
          {phone}
        </a>
      </p>
      <p className="font-medium">
        Mobile -{" "}
        <a
          href={`tel:${mobile}`}
          className="leading-7 font-medium underline underline-offset-2 hover:text-muted-foreground"
        >
          {mobile}
        </a>
      </p>
    </div>
  );
};

export default OrganizersCard;
