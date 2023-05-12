import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import ActionButton from "../../shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggle, setIsMenuToggle] = useState(true);

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full bg-gray-20 py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img alt="logo" src={Logo} />
          </div>

          <div className={`${flexBetween} w-full gap-8 xs:hidden sm:hidden `}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className={`${flexBetween}   gap-8`}>
              <p>Sign</p>
              <ActionButton setSelectedPage={setSelectedPage}>
                Become a member
              </ActionButton>
            </div>
          </div>
          <div className="xs:visible sm:visible md:invisible lg:invisible">
            <button
              id="button"
              type="button"
              title="button_menu"
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setIsMenuToggle(!isMenuToggle)}
            >
              <div className="h-6 w-6 text-white">
                <Bars3Icon />
              </div>
            </button>
          </div>
        </div>
      </div>
      <nav
        className={`${
          isMenuToggle && "hidden"
        } fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl  `}
      >
        <div className="flex justify-end p-12">
          <button
            title="toggleSideMenu"
            onClick={() => {
              setIsMenuToggle(!isMenuToggle);
            }}
          >
            <XMarkIcon className="h6 w-6 text-gray-400" />
          </button>
        </div>
        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

          <Link
            page="About"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

          <Link
            page="Benefits"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
