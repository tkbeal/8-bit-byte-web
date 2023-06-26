import snackpassLogo from "../../assets/images/snackpass-logo.png";
import marylandLogo from "../../assets/images/maryland-logo.gif";
import targetLogo from "../../assets/images/target-logo.png";

type Job = {
  title: string;
  description: string;
  logo: string;
};

export const Jobs: Array<Job> = [
  {
    title: "snackpass",
    description: "software engineer, august 2020 - june 2023",
    logo: snackpassLogo,
  },
  {
    title: "target",
    description: "software engineering intern, summer 2019",
    logo: targetLogo,
  },
  {
    title: "university of maryland",
    description: "teaching assistant, august 2019 - july 2020",
    logo: marylandLogo,
  },
];
