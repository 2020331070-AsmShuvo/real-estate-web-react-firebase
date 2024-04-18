import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    document.title = "Majestic Mansion | Services";
  }, []);
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 w-fit mx-auto gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Penthouse</h3>
          <p className="text-gray-700 mb-4">
            Explore our exclusive collection of luxurious penthouses, offering unparalleled views and amenities in prime locations.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Beachfront Properties</h3>
          <p className="text-gray-700 mb-4">
            Discover your own slice of paradise with our selection of beachfront properties, perfect for relaxation and enjoyment.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Resorts & Private Islands</h3>
          <p className="text-gray-700 mb-4">
            Experience ultimate luxury and privacy with our resorts and private islands, ideal for unforgettable getaways and events.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Villas</h3>
          <p className="text-gray-700 mb-4">
            Indulge in the charm and elegance of our exquisite villas, offering sophistication and comfort in every detail.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Mansions</h3>
          <p className="text-gray-700 mb-4">
            Explore our portfolio of majestic mansions, epitomizing luxury living with grandeur and style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
