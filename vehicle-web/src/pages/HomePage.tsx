import { useState, useEffect } from 'react';
import VehicleCard from '../components/VehicleCard';
import VehicleFilter from '../components/VehicleFilter';
import axios from 'axios';

interface Vehicle {
  id: number;
  name: string;
  brand: string;
  model: string;
  price: number;
  type: string;
  fuelType: string;
  imageUrl: string;
  quantityAvailable: number;
  year: number;
  color: string;
  description: string;
}

interface FilterState {
  brand: string;
  type: string;
  fuelType: string;
  minPrice: string;
  maxPrice: string;
}

interface PageInfo {
  totalPages: number;
  totalElements: number;
  size: number;
  number: number; // current page (0-based)
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

interface PageableObject {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface ApiResponse {
  content: Vehicle[];
  pageable: PageableObject;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  empty: boolean;
  number: number;
  numberOfElements: number;
  size: number;
}

const API_BASE_URL = 'http://localhost:8080';

const HomePage = () => {
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    totalPages: 0,
    totalElements: 0,
    size: 10,
    number: 0,
    numberOfElements: 0,
    first: true,
    last: false,
    empty: true
  });
  
  const fetchVehicles = async (filters: FilterState = {} as FilterState, pageNum: number = 0) => {
    setLoading(true);
    
    try {
      const params = new URLSearchParams();
      params.append('page', pageNum.toString());
      params.append('size', '10');
      params.append('sortBy', 'price');
      params.append('sortDir', 'asc');
      
      if (filters.brand) params.append('brand', filters.brand);
      if (filters.type) params.append('type', filters.type);
      if (filters.fuelType) params.append('fuelType', filters.fuelType);
      if (filters.minPrice) params.append('minPrice', filters.minPrice);
      if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
      
      const response = await axios.get<ApiResponse>(`${API_BASE_URL}/api/vehicles`, { params });
      
      setFilteredVehicles(response.data.content);
      setPageInfo({
        totalPages: response.data.totalPages,
        totalElements: response.data.totalElements,
        size: response.data.size,
        number: response.data.number,
        numberOfElements: response.data.numberOfElements,
        first: response.data.first,
        last: response.data.last,
        empty: response.data.empty
      });
      setError(null);
    } catch {
      setError('Failed to load vehicles. Please try again later.');
      // Fallback to mock data in case the API is not available
      setFilteredVehicles(mockVehicles);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchVehicles();
  }, []);
  
  // Mock data for fallback if API is unavailable
  const mockVehicles: Vehicle[] = [
    {
      id: 1,
      name: "Tesla Model 3",
      brand: "Tesla",
      model: "Model 3",
      price: 45990,
      type: "SEDAN",
      fuelType: "ELECTRIC",
      imageUrl: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=1000",
      quantityAvailable: 5,
      year: 2023,
      color: "White",
      description: "The Tesla Model 3 is an electric four-door sedan."
    },
    {
      id: 2,
      name: "Civic Touring",
      brand: "Honda",
      model: "Civic",
      price: 28500,
      type: "SEDAN",
      fuelType: "PETROL",
      imageUrl: "https://images.unsplash.com/photo-1606152557139-1b66ff873b9e?q=80&w=1000",
      quantityAvailable: 8,
      year: 2024,
      color: "Blue",
      description: "The Honda Civic is a practical and fuel-efficient compact car."
    },
    {
      id: 3,
      name: "F-150 Raptor",
      brand: "Ford",
      model: "F-150",
      price: 69995,
      type: "TRUCK",
      fuelType: "PETROL",
      imageUrl: "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=1000",
      quantityAvailable: 2,
      year: 2024,
      color: "Black",
      description: "The Ford F-150 is America's best-selling pickup truck."
    },
    {
      id: 4,
      name: "X5 xDrive40i",
      brand: "BMW",
      model: "X5",
      price: 62500,
      type: "SUV",
      fuelType: "HYBRID",
      imageUrl: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=1000",
      quantityAvailable: 1,
      year: 2023,
      color: "Silver",
      description: "The BMW X5 is a mid-size luxury SUV."
    },
    {
      id: 5,
      name: "Q5 Premium",
      brand: "Audi",
      model: "Q5",
      price: 44800,
      type: "SUV",
      fuelType: "DIESEL",
      imageUrl: "https://images.unsplash.com/photo-1606222193247-4cdb176986ff?q=80&w=1000",
      quantityAvailable: 3,
      year: 2024,
      color: "Gray",
      description: "The Audi Q5 is a compact luxury crossover SUV."
    },
    {
      id: 6,
      name: "Corolla LE",
      brand: "Toyota",
      model: "Corolla",
      price: 21550,
      type: "SEDAN",
      fuelType: "PETROL",
      imageUrl: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?q=80&w=1000",
      quantityAvailable: 10,
      year: 2024,
      color: "Red",
      description: "The Toyota Corolla is a reliable and fuel-efficient compact car."
    },
  ];
  
  const handleFilterChange = (filters: FilterState) => {
    fetchVehicles(filters);
  };
  
  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < pageInfo.totalPages) {
      fetchVehicles({} as FilterState, newPage);
    }
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
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVehicles.map(vehicle => (
                      <VehicleCard key={vehicle.id} {...vehicle} />
                    ))}
                  </div>
                  
                  {/* Pagination Information */}
                  <div className="mt-6 text-sm text-neutral-500 text-center">
                    Showing {pageInfo.number * pageInfo.size + 1} to {pageInfo.number * pageInfo.size + pageInfo.numberOfElements} of {pageInfo.totalElements} vehicles
                  </div>
                  
                  {/* Pagination Controls */}
                  {pageInfo.totalPages > 1 && (
                    <div className="mt-4 flex justify-center">
                      <nav className="inline-flex rounded-md shadow">
                        <button
                          onClick={() => handlePageChange(pageInfo.number - 1)}
                          disabled={pageInfo.first}
                          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Previous page"
                        >
                          <span className="sr-only">Previous</span>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        
                        {/* Page numbers */}
                        {Array.from({ length: Math.min(pageInfo.totalPages, 5) }, (_, i) => {
                          let pageNum = i;
                          
                          // Adjust page numbers for pagination display
                          if (pageInfo.totalPages > 5) {
                            if (pageInfo.number < 2) {
                              // Show first 5 pages
                              pageNum = i;
                            } else if (pageInfo.number > pageInfo.totalPages - 3) {
                              // Show last 5 pages
                              pageNum = pageInfo.totalPages - 5 + i;
                            } else {
                              // Show 2 pages before current, current, and 2 after
                              pageNum = pageInfo.number - 2 + i;
                            }
                          }
                          
                          return (
                            <button
                              key={pageNum}
                              onClick={() => handlePageChange(pageNum)}
                              className={`relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-white text-sm font-medium ${
                                pageInfo.number === pageNum
                                  ? 'text-blue-600 bg-blue-50 z-10'
                                  : 'text-neutral-500 hover:bg-neutral-50'
                              }`}
                              aria-label={`Page ${pageNum + 1}`}
                              aria-current={pageInfo.number === pageNum ? 'page' : undefined}
                            >
                              {pageNum + 1}
                            </button>
                          );
                        })}
                        
                        <button
                          onClick={() => handlePageChange(pageInfo.number + 1)}
                          disabled={pageInfo.last}
                          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Next page"
                        >
                          <span className="sr-only">Next</span>
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </nav>
                    </div>
                  )}
                </>
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