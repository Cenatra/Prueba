import React from 'react';

function Navbar() {
  const tabs = [
    { name: 'Registro', current: true },
    { name: 'Empleados', current: false },
    { name: 'Historial', current: false },
    { name: 'Estadísticas', current: false },
  ];

  return (
    <nav className="border-b border-gray-200">
      <div className="flex space-x-8">
        {tabs.map((tab) => (
          <a
            key={tab.name}
            href="#"
            className={`
              ${tab.current
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }
              whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors duration-200
            `}
            aria-current={tab.current ? 'page' : undefined}
          >
            {tab.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
