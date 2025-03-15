import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import MapboxGlobe from "../components/MapboxGlobe";

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <MapboxGlobe />
    </main>
  );
}
