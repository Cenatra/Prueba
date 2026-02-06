import React from 'react';
import { Building2, LogOut } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm py-4 border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
        <div className="flex items-center">
          <div className="bg-blue-600 p-2 rounded-lg mr-3">
            <Building2 className="text-white h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Sistema de Asistencias</h1>
            <p className="text-sm text-gray-500">Gestión de asistencia de empleados</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-600">Administrador</p>
            <p className="text-base font-semibold text-gray-800">#RCPR7273</p>
          </div>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors duration-200">
            <LogOut className="h-5 w-5" />
            <span className="text-sm font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
