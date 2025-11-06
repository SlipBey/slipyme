import { FC } from "react";
import SocialAndLangBar from "./SocialAndLangBar";
import MainNav from "./MainNav";

const Navbar: FC = () => (
  <header className="sm:sticky top-0 z-40 w-full">
    <SocialAndLangBar />
    <MainNav />
  </header>
);

export default Navbar;
