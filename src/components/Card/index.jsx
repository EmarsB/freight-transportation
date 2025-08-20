import React from 'react';

/**
 * RideOptionCard component for logistics app
 * Props:
 * - vehicleIcon: JSX for vehicle icon
 * - rideType: string
 * - pickup: string
 * - dropoff: string
 * - price: string
 * - arrivalTime: string
 * - eta: string
 */
function RideOptionCard({
  vehicleIcon,
  rideType,
  pickup,
  dropoff,
}) {
  return (
    <section
      className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 grid gap-6 grid-rows-[auto_auto_1fr_auto] font-sans"
      aria-label={`Ride option: ${rideType}`}
      tabIndex={0}
      role="region"
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl text-gray-800">{vehicleIcon}</span>
        <span className="text-lg font-semibold text-gray-900">{rideType}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1" htmlFor="pickup">From</label>
          <div className="text-base font-medium text-gray-800" id="pickup">{pickup}</div>
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1" htmlFor="dropoff">To</label>
          <div className="text-base font-medium text-gray-800" id="dropoff">{dropoff}</div>
        </div>
      </div>
      <div className="flex gap-3 mt-2 flex-col">
        <button
          className="flex-1 py-3 rounded-md border border-gray-300 bg-gray-100 text-gray-900 font-medium transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Edit ride option"
        >
          Edit
        </button>
        <button
          className="flex-1 py-3 rounded-md bg-blue-600 text-white font-semibold transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Confirm ride option"
        >
          Confirm
        </button>
      </div>
    </section>
  );
}

export default RideOptionCard;