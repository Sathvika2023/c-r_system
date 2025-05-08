import React from 'react';

const HomeContent = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 mt-24 bg-gray-50 rounded shadow-lg">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-900">Evolution of the Computer Science Department</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="text-xl font-semibold mb-4">Our History</h3>
          <p className="mb-4 text-gray-700">
            The Computer Science Department was established in 1980 with a vision to advance computing education and research. Over the decades, it has grown into a vibrant community of scholars, students, and innovators.
          </p>
          <p className="mb-4 text-gray-700">
            Our department has pioneered research in areas such as artificial intelligence, data science, cybersecurity, and software engineering. We are committed to fostering an inclusive environment that nurtures creativity and excellence.
          </p>
          <p className="text-gray-700">
            Join us as we continue to push the boundaries of technology and education, preparing the next generation of computer scientists to make a global impact.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/Images/deptimg.jpg"
            alt="Computer Science Department"
            className="rounded shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
