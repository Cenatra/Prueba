import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AttendanceRegister from './components/AttendanceRegister';
import StatsCards from './components/StatsCards';
import AdditionalMetrics from './components/AdditionalMetrics';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-gray-800">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Navbar />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Columna Izquierda */}
          <div className="md:col-span-1">
            <AttendanceRegister />
          </div>

          {/* Columna Derecha */}
          <div className="md:col-span-2 space-y-6">
            <StatsCards />
            <AdditionalMetrics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
