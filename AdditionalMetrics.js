import React from 'react';

function AdditionalMetrics() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Métricas Adicionales</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <p className="text-sm font-medium text-gray-500">Promedio de Horas</p>
          <p className="text-2xl font-bold text-gray-900">N/A</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Tasa de Asistencia</p>
          <p className="text-2xl font-bold text-emerald-600">0.0%</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Total Registros</p>
          <p className="text-2xl font-bold text-purple-600">1</p>
        </div>
      </div>
    </div>
  );
}

export default AdditionalMetrics;
