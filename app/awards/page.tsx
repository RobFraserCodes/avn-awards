import Image from 'next/image';
import React from 'react';

const AwardsPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-black py-4">
        <div className="container mx-auto px-4">
          <Image 
            src="/logo.png"
            alt="AVN Awards"
            width={200}
            height={200}
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-32 bg-[url('/awards.png')] bg-cover">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Award Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Best Actress</h3>
              <p className="text-gray-700">
                Recognizing the outstanding performance by a female actress in an adult film.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Best Actor</h3>
              <p className="text-gray-700">
                Recognizing the outstanding performance by a male actor in an adult film.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Best Film</h3>
              <p className="text-gray-700">
                Recognizing the overall best adult film of the year.
              </p>
            </div>
            {/* Add more category items */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-4">
        <div className="container mx-auto px-4">
          <p className="text-white text-center">
            &copy; {new Date().getFullYear()} AVN Awards. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AwardsPage;