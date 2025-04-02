import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import rawPointData from '../data/predefined-points.json';
import type { PredefinedPointsData } from '../lib/types';

const pointData = rawPointData as PredefinedPointsData;
import InformationPanel from '../components/InformationPanel';
import type { PointData } from '../lib/types';

// Dynamically import MapComponent to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import('../components/MapComponent'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-[80vh]"><p>Loading map...</p></div>
});

export default function HomePage() {
  const [selectedPoint, setSelectedPoint] = useState<PointData | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePointSelect = (point: PointData) => {
    setSelectedPoint(point);
    setIsExpanded(false); // Start with collapsed sidebar when selecting new point
  };

  return (
    <>
      <Head>
        <title>DIGITECHLES - Afforestation Opportunities in Slovakia</title>
        <meta name="description" content="Visualize and analyze afforestation opportunities in Slovakia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen font-sans">
        <header className="bg-primary text-primary-foreground p-4 shadow-md">
          <h1 className="text-xl font-semibold">[Logo] DIGITECHLES</h1>
        </header>

        <div className="flex flex-1 flex-col md:flex-row">
          <main className="flex-1 p-4">
            <MapComponent points={pointData.points} onPointSelect={handlePointSelect} />
          </main>

          {/* Collapsible Sidebar Area */}
          {selectedPoint && (
            <aside className={`fixed md:relative inset-y-0 right-0 w-full md:w-1/3 lg:w-1/4 bg-card text-card-foreground shadow-lg md:shadow-none transform transition-transform duration-300 ease-in-out ${isExpanded ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
              <div className="p-4 h-full overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Detailed Information</h2>
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="md:hidden p-2 rounded-full hover:bg-muted"
                  >
                    {isExpanded ? '×' : '☰'}
                  </button>
                </div>
                
                <InformationPanel selectedPoint={selectedPoint} isExpanded={isExpanded} />
                
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-4 w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                  {isExpanded ? 'Show Map' : 'Expand Dashboard'}
                </button>
              </div>
            </aside>
          )}
        </div>

        <footer className="p-4 border-t border-border bg-muted text-muted-foreground">
          Bottom Panel Placeholder (Charts/Results)
        </footer>
      </div>
    </>
  );
}