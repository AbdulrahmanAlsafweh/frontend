import Image from "next/image";
import OurClients from '../components/OurClients/OurClients.jsx';
import Services from '../components/Services/Services.jsx';
import WorkRoadMap from '../components/WorkRoadmap/WorkRoadmap.jsx';
import DragAndDrop from '../components/DragAndDrop.jsx';
import HomeBlogs from '../components/Blogs/HomeBlogs.jsx';
export default function Home() {
  return (
    <div className="overflow-x-clip">
      <DragAndDrop />
      <OurClients />
      <Services />
      <WorkRoadMap />
      <HomeBlogs />
    </div>
  );
}
