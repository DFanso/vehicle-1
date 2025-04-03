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
    'https://images.unsplash.com/photo-1662585472192-5435d3189341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    'https://images.unsplash.com/photo-1684851547309-1c1d11949968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    'https://images.unsplash.com/photo-1605557094990-a7a3b1d46888?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    'https://images.unsplash.com/photo-1635280889313-715891309106?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    'https://images.unsplash.com/photo-1635844143704-128463113b1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'TRUCK',
    'ELECTRIC'
),
(
    'Honda Civic',
    'Civic',
    'Honda',
    2023,
    'Gray',
    25000.00,
    12,
    'The Honda Civic is a reliable and fuel-efficient compact car known for its practicality.',
    'https://images.unsplash.com/photo-1614935338486-6327f0bfa95c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'SEDAN',
    'PETROL'
),
(
    'Mercedes-Benz C-Class',
    'C 300',
    'Mercedes-Benz',
    2024,
    'Silver',
    60000.00,
    4,
    'The Mercedes-Benz C-Class offers a blend of luxury, performance, and advanced technology.',
    'https://images.unsplash.com/photo-1610375481375-43884d49c370?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'SEDAN',
    'PETROL'
),
(
    'Nissan Rogue',
    'Rogue',
    'Nissan',
    2023,
    'White',
    28000.00,
    10,
    'The Nissan Rogue is a family-friendly SUV with comfortable seating and ample cargo space.',
    'https://images.unsplash.com/photo-1630424749479-3c6609352b91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'SUV',
    'PETROL'
),
(
    'Chevrolet Silverado',
    'Silverado 1500',
    'Chevrolet',
    2024,
    'Red',
    40000.00,
    7,
    'The Chevrolet Silverado 1500 is a powerful and versatile pickup truck for work or play.',
    'https://images.unsplash.com/photo-1617049053338-44054448169a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'TRUCK',
    'PETROL'
),
(
    'Audi A5',
    'A5 Sportback',
    'Audi',
    2023,
    'Blue',
    50000.00,
    5,
    'The Audi A5 Sportback offers sleek styling and a sporty driving experience with the practicality of four doors.',
    'https://images.unsplash.com/photo-1552519507-682116962335?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'SEDAN',
    'PETROL'
);