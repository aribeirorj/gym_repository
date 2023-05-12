export enum SelectedPage {
  Home = "home",
  About = "about",
  Benefits = "benefits",
  ContactUs = "contactUs",
}

export type BenefitType = {
  icon: JSX.Element;
  title: string;
  description: string;
};
