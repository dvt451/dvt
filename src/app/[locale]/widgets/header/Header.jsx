import Select from "../../features/Select";
import Logo from "../buttons/Logo";
import HeaderMenu from "./HeaderMenu";
import Eye from "@/app/[locale]/pages/Eye";

export default function Header() {
  return (
         <header className="header">
            <Logo />
            <HeaderMenu />
            <Eye />
            <Select />
         </header>
  )      
}
