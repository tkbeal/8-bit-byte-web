import snackpassLogo from "../../../assets/images/snackpass-logo.png";
import marylandLogo from "../../../assets/images/maryland-logo.gif";
import targetLogo from "../../../assets/images/target-logo.png";

type Job = {
  title: string;
  description: string;
  logo: string;
};

export const Jobs: Array<Job> = [
  {
    title: "Snackpass",
    description: "Software Engineer, August 2020 - June 2023",
    logo: snackpassLogo,
  },
  {
    title: "Target Inc.",
    description: "Software Engineering Intern, Summer 2019",
    logo: targetLogo,
  },
  {
    title: "University of Maryland",
    description: "Teaching Assistant, August 2019 - July 2020",
    logo: marylandLogo,
  },
];
