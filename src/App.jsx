import './App.css';
import RideOptionCard from './components/Card';

function App() {
  // Dummy data for a ride option
  const dummyRide = {
    vehicleIcon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-label="Car icon">
        <rect x="8" y="20" width="32" height="12" rx="6" fill="#252525" />
        <circle cx="16" cy="36" r="4" fill="#2d7efb" />
        <circle cx="32" cy="36" r="4" fill="#2d7efb" />
      </svg>
    ),
    rideType: 'Standard',
    pickup: '123 Main St',
    dropoff: '456 Elm Ave',
    price: '150php',
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <RideOptionCard {...dummyRide} />
    </div>
  );
}

export default App;
