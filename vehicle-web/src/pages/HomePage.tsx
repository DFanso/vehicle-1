import { useState, useEffect } from 'react';
import VehicleCard from '../components/VehicleCard';
import VehicleFilter from '../components/VehicleFilter';

interface Vehicle {
  id: number;
  name: string;
  brand: string;
  model: string;
  price: number;
  type: string;
  fuelType: string;
  imageUrl: string;
}

interface FilterState {
  brand: string;
  type: string;
  fuelType: string;
  minPrice: string;
  maxPrice: string;
}

// Uncomment this when needed for API calls
// const API_BASE_URL = 'http://localhost:8080';

const HomePage = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Mock data for initial development
  const mockVehicles: Vehicle[] = [
    {
      id: 1,
      name: "Model 3 Long Range",
      brand: "Tesla",
      model: "Model 3",
      price: 45990,
      type: "SEDAN",
      fuelType: "ELECTRIC",
      imageUrl: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=1000"
    },
    {
      id: 2,
      name: "Civic Touring",
      brand: "Honda",
      model: "Civic",
      price: 28500,
      type: "SEDAN",
      fuelType: "PETROL",
      imageUrl: "https://images.unsplash.com/photo-1606152557139-1b66ff873b9e?q=80&w=1000"
    },
    {
      id: 3,
      name: "F-150 Raptor",
      brand: "Ford",
      model: "F-150",
      price: 69995,
      type: "TRUCK",
      fuelType: "PETROL",
      imageUrl: "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=1000"
    },
    {
      id: 4,
      name: "X5 xDrive40i",
      brand: "BMW",
      model: "X5",
      price: 62500,
      type: "SUV",
      fuelType: "HYBRID",
      imageUrl: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=1000"
    },
    {
      id: 5,
      name: "Q5 Premium",
      brand: "Audi",
      model: "Q5",
      price: 44800,
      type: "SUV",
      fuelType: "DIESEL",
      imageUrl: "https://images.unsplash.com/photo-1606222193247-4cdb176986ff?q=80&w=1000"
    },
    {
      id: 6,
      name: "Corolla LE",
      brand: "Toyota",
      model: "Corolla",
      price: 21550,
      type: "SEDAN",
      fuelType: "PETROL",
      imageUrl: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?q=80&w=1000"
    },
  ];
  
  useEffect(() => {
    // Simulating API fetch with mock data for now
    // In a real app, you would fetch from actual API:
    // fetch(`${API_BASE_URL}/api/vehicles`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setVehicles(data.content);
    //     setFilteredVehicles(data.content);
    //     setLoading(false);
    //   })
    //   .catch(err => {
    //     setError('Failed to load vehicles. Please try again later.');
    //     setLoading(false);
    //   });
    
    // Simulating potential API error
    if (Math.random() > 0.95) {
      setError('Failed to load vehicles. Please try again later.');
    } else {
      setTimeout(() => {
        setVehicles(mockVehicles);
        setFilteredVehicles(mockVehicles);
        setLoading(false);
      }, 500);
    }
  }, []);
  
  const handleFilterChange = (filters: FilterState) => {
    let filtered = [...vehicles];
    
    if (filters.brand) {
      filtered = filtered.filter(vehicle => vehicle.brand === filters.brand);
    }
    
    if (filters.type) {
      filtered = filtered.filter(vehicle => vehicle.type === filters.type);
    }
    
    if (filters.fuelType) {
      filtered = filtered.filter(vehicle => vehicle.fuelType === filters.fuelType);
    }
    
    if (filters.minPrice) {
      filtered = filtered.filter(vehicle => vehicle.price >= parseInt(filters.minPrice));
    }
    
    if (filters.maxPrice) {
      filtered = filtered.filter(vehicle => vehicle.price <= parseInt(filters.maxPrice));
    }
    
    setFilteredVehicles(filtered);
  };
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Find Your Perfect Vehicle
            </h1>
            <p className="text-xl mb-8">
              Browse our extensive collection of quality vehicles with easy filtering and competitive prices.
            </p>
            <div className="space-x-4">
              <a href="/vehicles" className="inline-block bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-neutral-100 transition-colors">
                Browse Vehicles
              </a>
              <a href="/contact" className="inline-block border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-indigo-800/50 mix-blend-overlay"></div>
      </section>
      
      {/* Featured Vehicles Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">Featured Vehicles</h2>
            <p className="mt-4 text-lg text-neutral-600">
              Discover our selection of top vehicles for every need and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <VehicleFilter onFilterChange={handleFilterChange} />
            </div>
            
            <div className="md:col-span-2 lg:col-span-3">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              ) : error ? (
                <div className="bg-red-50 p-4 rounded-md text-red-700">
                  {error}
                </div>
              ) : filteredVehicles.length === 0 ? (
                <div className="bg-neutral-50 p-8 rounded-lg text-center">
                  <h3 className="text-lg font-medium text-neutral-800">No vehicles found</h3>
                  <p className="mt-2 text-neutral-600">Try adjusting your filters to find what you're looking for.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredVehicles.map(vehicle => (
                    <VehicleCard key={vehicle.id} {...vehicle} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="bg-neutral-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to find your dream vehicle?</h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you find the perfect vehicle for your needs and budget.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 