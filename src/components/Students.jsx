import React from 'react';

const results = [
  { id: 1, title: 'Midterm Exam Results', date: '2024-04-15', description: 'Midterm exam results for all courses are now available.' },
  { id: 2, title: 'Project Submission Results', date: '2024-04-10', description: 'Results for the recent project submissions have been published.' },
];

const notifications = [
  { id: 1, title: 'Upcoming Workshop', date: '2024-04-20', description: 'Join the workshop on Advanced Machine Learning techniques.' },
  { id: 2, title: 'Scholarship Application', date: '2024-04-18', description: 'Deadline for scholarship applications extended to April 30.' },
];

const Students = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Student Portal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Results Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Results</h3>
          <ul>
            {results.map((result) => (
              <li key={result.id} className="mb-4">
                <h4 className="text-lg font-semibold">{result.title}</h4>
                <p className="text-sm text-gray-500">{new Date(result.date).toLocaleDateString()}</p>
                <p className="text-gray-700">{result.description}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Notifications Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Notifications</h3>
          <ul>
            {notifications.map((note) => (
              <li key={note.id} className="mb-4">
                <h4 className="text-lg font-semibold">{note.title}</h4>
                <p className="text-sm text-gray-500">{new Date(note.date).toLocaleDateString()}</p>
                <p className="text-gray-700">{note.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Students;
