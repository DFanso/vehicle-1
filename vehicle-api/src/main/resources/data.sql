-- Delete existing data
DELETE FROM vehicles;

-- Reset auto-increment
ALTER TABLE vehicles AUTO_INCREMENT = 1;

-- Insert sample vehicles
INSERT INTO vehicles (
    name, model, brand, year, color, price, 
    quantity_available, description, image_url, 
    vehicle_type, fuel_type
) VALUES 
(
    'Tesla Model 3',
    'Model 3',
    'Tesla',
    2024,
    'White',
    45000.00,
    5,
    'The Tesla Model 3 is an electric four-door sedan. Standard features include autopilot capabilities and over-the-air software updates.',
    'https://images.unsplash.com/photo-1560958089-b8a1929cea89',
    'SEDAN',
    'ELECTRIC'
),
(
    'Toyota RAV4',
    'RAV4',
    'Toyota',
    2024,
    'Silver',
    32000.00,
    8,
    'The Toyota RAV4 is a compact crossover SUV with excellent fuel economy and reliability.',
    'https://images.unsplash.com/photo-1581362716668-d6cf4a8dcb8e',
    'SUV',
    'HYBRID'
),
(
    'BMW M4',
    'M4',
    'BMW',
    2024,
    'Black',
    75000.00,
    3,
    'The BMW M4 is a high-performance luxury sports car with twin-turbo engine and advanced driving dynamics.',
    'https://images.unsplash.com/photo-1617531653332-bd46c24f2068',
    'COUPE',
    'PETROL'
),
(
    'Porsche 911',
    '911 Carrera',
    'Porsche',
    2024,
    'Red',
    115000.00,
    2,
    'The iconic Porsche 911 Carrera offers exceptional performance and luxury in a timeless design.',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    'COUPE',
    'PETROL'
),
(
    'Ford F-150',
    'F-150 Lightning',
    'Ford',
    2024,
    'Blue',
    55000.00,
    6,
    'The all-electric Ford F-150 Lightning combines legendary truck capability with zero emissions.',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888',
    'TRUCK',
    'ELECTRIC'
); 