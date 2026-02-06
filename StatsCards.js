import React from 'react';
import { Users, CheckCircle, XCircle, AlarmClock } from 'lucide-react';

const stats = [
  {
    name: 'Total Empleados',
    value: '1',
    icon: Users,
    iconBg: 'bg-blue-100 text-blue-600',
    current: true, // Para el icono de persona
  },
  {
    name: 'Asistencias',
    value: '0',
    icon: CheckCircle,
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
  {
    name: 'Ausencias',
    value: '0',
    icon: XCircle,
    iconBg: 'bg-red-100 text-red-600',
  },
  {
    name: 'Tardanzas',
    value: '1',
    icon: AlarmClock,
    iconBg: 'bg-yellow-100 text-yellow-600',
  },
];

function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item) => (
        <div key={item.name} className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex items-center">
          <div className={`${item.iconBg} p-2 rounded-lg mr-4`}>
            {item.current ? (
              <Users className="h-5 w-5" /> // Renderiza Users si current es true
            ) : (
              <item.icon className="h-5 w-5" />
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">{item.name}</p>
            <p className="text-2xl font-bold text-gray-900">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
