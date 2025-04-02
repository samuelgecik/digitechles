import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import pointData from '../data/predefined-points.json';
import InformationPanel from '../components/InformationPanel';

// Dynamically import MapComponent to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import('../components/MapComponent'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-[80vh]"><p>Loading map...</p></div> // Basic loading indicator
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
        <meta name="description" content="Visualize and analyze afforestation opportunities in Slovakia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> {/* Assuming a favicon exists or will be added */}
      </Head>

      {/* Main container */}
      <div className="flex flex-col min-h-screen font-sans"> {/* Use Inter font defined in tailwind.config */}

        {/* Header Placeholder */}
        <header className="bg-primary text-primary-foreground p-4 shadow-md">
          <h1 className="text-xl font-semibold">[Logo] DIGITECHLES</h1>
          {/* Add Navigation/Controls later */}
        </header>

        {/* Main Content Area (Map + Sidebar) */}
        <div className="flex flex-1 flex-col md:flex-row"> {/* Stack on mobile, row on medium+ screens */}

          {/* Map Area */}
          <main className="flex-1 p-4">
            {/* Map component will take available space */}
            <MapComponent points={pointData.points} onPointSelect={handlePointSelect} />
          </main>

          {/* Sidebar Area */}
          <aside className="w-full md:w-1/3 lg:w-1/4 p-4 border-l border-border bg-card text-card-foreground overflow-y-auto"> {/* Adjust width as needed */}
            <h2 className="text-lg font-semibold mb-4">Controls & Info</h2>
            <InformationPanel selectedPoint={selectedPoint} />
            {/* Placeholder for future controls (Layer Toggle, Density Slider etc.) */}
            <div className="mt-4 p-2 border border-dashed border-border rounded-md text-muted-foreground">
              Future Controls Placeholder (Layers, Density)
            </div>
          </aside>
        </div>

        {/* Bottom Panel Placeholder */}
        <footer className="p-4 border-t border-border bg-muted text-muted-foreground">
          Bottom Panel Placeholder (Charts/Results)
        </footer>

      </div>
    </>
  );
}