import React, { useState, useEffect } from 'react';
import { Clock, User } from 'lucide-react';

function AttendanceRegister() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <div className="flex items-center text-gray-700 mb-4">
        <Clock className="h-5 w-5 mr-2" />
        <h2 className="text-lg font-semibold">Registro de Asistencia</h2>
      </div>
      <p className="text-sm text-gray-500 mb-6 capitalize">{formatDate(time)}</p>

      <div className="text-center mb-8">
        <p className="text-5xl font-extrabold text-gray-900 leading-tight">{formatTime(time)}</p>
      </div>

      <div className="mb-6">
        <label htmlFor="employee-select" className="flex items-center text-sm font-medium text-gray-700 mb-2">
          <User className="h-4 w-4 mr-1" />
          Seleccionar Empleado
        </label>
        <select
          id="employee-select"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          defaultValue=""
        >
          <option value="" disabled>-- Seleccione un empleado --</option>
          <option value="empleado1">Juan Pérez</option>
          <option value="empleado2">María García</option>
          <option value="empleado3">Carlos López</option>
        </select>
      </div>

      <div className="flex space-x-4">
        <button className="flex-1 flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-200">
          <span className="text-xl leading-none mr-2">→</span>
          Entrada
        </button>
        <button className="flex-1 flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors duration-200">
          <span className="text-xl leading-none mr-2">←</span>
          Salida
        </button>
      </div>
    </div>
  );
}

export default AttendanceRegister;
