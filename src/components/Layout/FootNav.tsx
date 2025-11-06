import { FC } from "react";
import { PAGES } from "@/libs/config/pages";
import FootNavClient from "./FootNavClient";

const FootNav: FC = () => <FootNavClient pages={PAGES} />;

export default FootNav;
