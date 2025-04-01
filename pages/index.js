import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState } from 'react'; // Add useState import
import pointData from '../data/predefined-points.json';
import InformationPanel from '../components/InformationPanel'; // Add InformationPanel import
const MapComponent = dynamic(() => import('../components/MapComponent'), {
  ssr: false,
});

export default function HomePage() {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handlePointSelect = (point) => {
    setSelectedPoint(point);
  };

  return (
    <>
      <Head>
        <title>DIGITECHLES - Afforestation Opportunities in Slovakia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Basic layout structure - will be refined later */}
      <div style={{ display: 'flex' }}>
        <main style={{ flexGrow: 1 }}>
          <h1>Welcome to DIGITECHLES</h1>
          <MapComponent points={pointData.points} onPointSelect={handlePointSelect} />
        </main> {/* Correctly close main tag here */}
        <aside style={{ width: '300px', marginLeft: '20px', borderLeft: '1px solid #eee', paddingLeft: '20px' }}>
          <h2>Controls & Info</h2>
          <InformationPanel selectedPoint={selectedPoint} />
          {/* Placeholder for future controls */}
        </aside>
      </div>
    </>
  );
}