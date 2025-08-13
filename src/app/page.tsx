import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import MapboxGlobe from "../components/MapboxGlobe";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <MapboxGlobe />
      </div>
    </main>
  );
}