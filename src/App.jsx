import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import KnowledgeBase from './components/KnowledgeBase';
import CreateDrawer from './components/CreateDrawer';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <div className="flex flex-col h-[calc(100vh-20px)] w-full overflow-hidden gap-2.5">
      {/* Top Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col relative overflow-hidden rounded-lg bg-white ">
          <KnowledgeBase onCreateNew={toggleDrawer} />
          
          {/* Pop-up / Overlay Drawer */}
          <CreateDrawer 
            isOpen={isDrawerOpen} 
            onClose={() => setIsDrawerOpen(false)} 
          />
        </main>
      </div>
    </div>
  );
}

export default App;
