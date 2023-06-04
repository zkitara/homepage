import ReactNode from 'react'
import logo from "@/styles/assets/img/online-education/logo.svg";
import Header from "../Header";
import Preloader from "../Preloader";
import Footer from "../Footer";
import ScriptAdd from "../Script";

interface LayoutProps {
  children:ReactNode;
}
export default function Layout(props: LayoutProps) {
  const {children} = props;
  return (
    <div>
      <Preloader />
      <Header />
      <div>{children}</div>
      <Footer />
      <ScriptAdd />
    </div>
  )
}
