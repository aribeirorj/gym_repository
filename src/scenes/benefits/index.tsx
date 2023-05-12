import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import { SelectedPage, BenefitType } from "../../shared/types";
import Htext from "../../shared/Htext";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Incididunt proident nostrud magna consequat dolor tempor.",
    description: "Amet cupidatat pariatur dolore cupidatat sunt.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Incididunt proident nostrud magna consequat dolor tempor.",
    description: "Amet cupidatat pariatur dolore cupidatat sunt.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Incididunt proident nostrud magna consequat dolor tempor.",
    description: "Amet cupidatat pariatur dolore cupidatat sunt.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      {/* Header */}
      <Htext>MORE THAN JUST GYM111</Htext>
      <p className="my-5 text-sm">
        Eiusmod consectetur adipisicing cillum aute labore ut commodo. Dolor
        incididunt officia cillum Lorem eu magna excepteur cupidatat
        reprehenderit amet nisi. Dolore qui consectetur duis cillum Lorem Lorem
      </p>
      {/* Benefits */}

      <div className="mt-5 items-center justify-between gap-8 md:flex">
        {benefits.map((item, index) => (
          <Benefit
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            setSelectedPage={setSelectedPage}
          >
            {item.description}
          </Benefit>
        ))}
      </div>
      {/* gragphics */}
      <div>
        <img src="" alt="" />
        {/* description */}
        <div>
          {/* title */}
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:-z-10 before:content-abstractwaves">
              <div>
                <Htext>MILLIONS OF HAPPY MEMBERS GETTING {""}</Htext>
                <span className="text-primary-500">FIT </span>
              </div>
            </div>
          </div>
          {/* description */}
          <div className="">
            <p className="my-5">
              Exercitation officia eiusmod non incididunt officia nostrud duis
              ex commodo consectetur. Sit culpa magna enim in nisi sint
              exercitation officia adipisicing magna. Ullamco consequat anim
              velit in qui. Minim laborum cupidatat labore id adipisicing
              laborum pariatur nulla. Nulla aliquip ad mollit velit minim.
              Mollit culpa aute excepteur sint esse. Nisi anim anim ea
              reprehenderit ea.
            </p>
            <p className="mb-5">
              Duis incididunt ea voluptate cillum anim aliquip ea velit irure
              commodo esse excepteur adipisicing. Excepteur nisi ipsum esse
              eiusmod cupidatat. Velit cillum ut nostrud sit et culpa excepteur
              officia eu tempor anim.
            </p>
          </div>

          {/* button */}
          <div className="relative mt-16">
            <div className="before:absolute before:-bottom-20 before:right-40 before:-z-10 before:content-sparkles ">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
