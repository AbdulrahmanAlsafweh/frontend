import Image from "next/image";
import OurClients from '../components/OurClients/OurClients.jsx';
import Services from '../components/Services/Services.jsx';
import WorkRoadMap from '../components/WorkRoadmap/WorkRoadmap.jsx';
import DragAndDrop from '../components/DragAndDrop.jsx';
export default function Home() {
  return (
    <div className="overflow-x-clip">
      <OurClients />
      <DragAndDrop />
      <Services />
      <WorkRoadMap />
    </div>
  );
}
