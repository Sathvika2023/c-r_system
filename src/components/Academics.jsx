import React, { useState } from 'react';
import Faculty from './Faculty';
import Students from './Students';

const Academics = () => {
  const [activeTab, setActiveTab] = useState('faculty');

  return (
    <section className="max-w-7xl mx-auto p-6 mt-24">
      <h2 className="text-3xl font-bold mb-6 text-center">Academics</h2>
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setActiveTab('faculty')}
          className={`px-4 py-2 rounded-md font-semibold ${
            activeTab === 'faculty' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Faculty
        </button>
        <button
          onClick={() => setActiveTab('students')}
          className={`px-4 py-2 rounded-md font-semibold ${
            activeTab === 'students' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Students
        </button>
      </div>
      <div>
        {activeTab === 'faculty' && <Faculty />}
        {activeTab === 'students' && <Students />}
      </div>
    </section>
  );
};

export default Academics;
