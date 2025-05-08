import React from 'react';

const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Alice Johnson',
    role: 'Professor',
    designation: 'Head of Department',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Dr. Bob Smith',
    role: 'Associate Professor',
    designation: 'AI Research Lead',
    photo: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    id: 3,
    name: 'Dr. Carol Lee',
    role: 'Assistant Professor',
    designation: 'Data Science Specialist',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const Faculty = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Faculty Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {facultyMembers.map((faculty) => (
          <div key={faculty.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src={faculty.photo}
              alt={faculty.name}
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h3 className="text-xl font-semibold">{faculty.name}</h3>
            <p className="text-gray-600">{faculty.role}</p>
            <p className="text-gray-500 italic">{faculty.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faculty;
