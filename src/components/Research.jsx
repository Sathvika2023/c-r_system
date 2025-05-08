import React, { useState } from 'react';

const researchData = [
  {
    id: 1,
    title: 'Deep Learning for Computer Vision',
    faculty: 'Dr. Alice Johnson',
    domain: 'Artificial Intelligence',
    description: 'Exploring convolutional neural networks for image recognition and classification.',
  },
  {
    id: 2,
    title: 'Distributed Systems and Cloud Computing',
    faculty: 'Dr. Bob Smith',
    domain: 'Systems',
    description: 'Research on scalable distributed systems and cloud infrastructure.',
  },
  {
    id: 3,
    title: 'Data Mining and Knowledge Discovery',
    faculty: 'Dr. Carol Lee',
    domain: 'Data Science',
    description: 'Techniques for extracting useful information from large datasets.',
  },
  {
    id: 4,
    title: 'Natural Language Processing',
    faculty: 'Dr. Alice Johnson',
    domain: 'Artificial Intelligence',
    description: 'Developing models for understanding and generating human language.',
  },
];

const Research = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');

  const domains = [...new Set(researchData.map((item) => item.domain))];

  const filteredResearch = researchData.filter((item) => {
    const matchesSearch = item.faculty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = selectedDomain ? item.domain === selectedDomain : true;
    return matchesSearch && matchesDomain;
  });

  return (
    <div className="max-w-6xl mx-auto p-6 mt-24">
      <h2 className="text-3xl font-bold mb-6 text-center">Research</h2>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-6">
        <input
          type="text"
          placeholder="Search by faculty or title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 mb-4 md:mb-0 w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={selectedDomain}
          onChange={(e) => setSelectedDomain(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Domains</option>
          {domains.map((domain) => (
            <option key={domain} value={domain}>{domain}</option>
          ))}
        </select>
      </div>
      <div className="space-y-6">
        {filteredResearch.length === 0 ? (
          <p className="text-center text-gray-600">No research found matching your criteria.</p>
        ) : (
          filteredResearch.map((item) => (
            <div key={item.id} className="border border-gray-300 rounded p-4 shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2"><strong>Faculty:</strong> {item.faculty}</p>
              <p className="text-sm text-gray-600 mb-2"><strong>Domain:</strong> {item.domain}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Research;
