import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../components/header";
import Welcome from "@/components/welcome";
import Features from "@/components/features";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <Welcome />
      <Features />
      <Contact />
    </div>
  );
}
