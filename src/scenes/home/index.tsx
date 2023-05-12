import { SelectedPage } from "../../shared/types";
import ActionButton from "../../shared/ActionButton";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedBull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorFortune from "../../assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className=" gap-16 bg-gray-20 py-10 md:h-full md:pb-0  ">
      {/* image and main */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings  */}

          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:-z-10 md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm md:text-start">
            Qui magna nostrud magna aute id non cillum nostrud ullamco excepteur
            Lorem et amet. Voluptate culpa anim excepteur esse excepteur elit
            anim dolor in occaecat ea non. Cupidatat laboris ad qui mollit
            laborum velit exercitation deserunt id aute adipisicing.
          </p>
          {/* Actions */}
          <div className="mt-8 flex items-start gap-8">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="hover: text-sm font-bold text-primary-500 text-secondary-500 underline"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/* image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="homePageGraphic" src={HomePageGraphic} />
        </div>
      </div>

      {/* sponsors */}
      <div className="h-[150px] w-full bg-primary-100 py-10 xs:hidden sm:hidden">
        <div className="mx-auto w-5/6">
          <div className="flex w-3/5 items-center justify-between gap-8">
            <img alt="homePageGraphic" src={SponsorRedBull} />
            <img alt="redBullPageGraphic" src={SponsorForbes} />
            <img alt="redBullhomePageGraphic" src={SponsorFortune} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
