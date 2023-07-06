import Footer from '@/components/Footer';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const events = [
  {
    backgroundImage: '/fan.png',
    logo: '/expo.webp',
    title: 'Fan Experience',
    subtitle: 'Jan 24 - 27, 2024',
    link: '/fan',
    btn: 'Buy Tickets',
  },
  {
    backgroundImage: '/business.png',
    logo: '/expo.webp',
    title: 'Business Expo',
    subtitle: 'Jan 24 - 27, 2024',
    link: '/business',
    btn: 'Register',
  },
  {
    backgroundImage: '/awards.png',
    logo: '/awards.webp',
    title: 'AVN Awards Show',
    subtitle: 'Jan 27, 2024',
    link: '/event4',
    btn: 'Buy Tickets',
  },
  {
    backgroundImage: '/novelty.svg',
    logo: '/ane.webp',
    title: 'Pleasure Product Expo',
    subtitle: 'Jan 25 - 27, 2024',
    link: '/ane',
    btn: 'Register',
  },
  {
    backgroundImage: '/gayvn.png',
    logo: '/gayvn.webp',
    title: 'GayVN Awards',
    subtitle: 'Jan 25, 2024',
    link: '/gayvn',
    btn: 'Buy Tickets',
  },
  {
    backgroundImage: '/thevillage.png',
    logo: '/expo.webp',
    title: 'The Village',
    subtitle: 'Jan 24 - 27, 2024',
    link: '/village',
    btn: 'Buy Tickets',
  },
];

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <header className="text-white py-6">
        <div className="container mx-auto px-4">
          <div className='flex flex-col items-center pt-24'>
            <Image src="/AVNShow.png" alt="AVN Logo" width={500} height={500} />
            <p className="mt-8 text-3xl uppercase text-gray-400">Jan 24 - 27, 2024</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section className="bg-black py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Event Cards */}
              {events.map((event) => (
                <div
                  className="bg-cover bg-center bg-no-repeat bg-gray-900 rounded-sm shadow-sm p-6 relative flex flex-col items-center"
                  style={{ backgroundImage: `url(${event.backgroundImage})` }}
                  key={event.title}
                >
                  <div className="absolute inset-0 rounded-sm"></div>
                  <img src={event.logo} alt={`${event.title} Logo`} className="w-16 mb-4" />
                  <div className='my-8'>
                    <h3 className="text-2xl font-bold text-white uppercase text-center">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-center">{event.subtitle}</p>
                  </div>
                  <Link href="/awards"
                    className="outline bg-transparent text-white hover:bg-slate-200 hover:cursor font-bold py-2 px-4 rounded">
                    {event.btn}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;