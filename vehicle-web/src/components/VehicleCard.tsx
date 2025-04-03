import { Link } from 'react-router-dom';

interface VehicleCardProps {
  id: number;
  name: string;
  brand: string;
  model: string;
  price: number;
  type: string;
  fuelType: string;
  imageUrl: string;
}

const VehicleCard = ({ id, name, brand, model, price, type, fuelType, imageUrl }: VehicleCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-neutral-200">
      <div className="relative h-48 overflow-hidden group">
        <img 
          src={imageUrl || "https://placehold.co/600x400?text=Vehicle"} 
          alt={`${brand} ${model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-0 right-0 m-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {fuelType}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900">
              {brand} {model}
            </h3>
            <p className="text-sm text-neutral-500">{name}</p>
          </div>
          <span className="text-lg font-bold text-blue-600">
            ${price.toLocaleString()}
          </span>
        </div>
        
        <div className="mt-3 flex items-center text-sm text-neutral-500">
          <span className="inline-block px-2 py-1 bg-neutral-100 rounded-md mr-2">
            {type}
          </span>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <Link 
            to={`/vehicles/${id}`}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            View Details
          </Link>
          <button 
            className="inline-flex items-center justify-center rounded-md py-2 px-4 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard; 