import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../components/header";
import Welcome from "@/components/welcome";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <Welcome />
    </div>
  );
}
