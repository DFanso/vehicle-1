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
    'https://hips.hearstapps.com/hmg-prod/images/2025-toyota-rav4-101-6707e09a230c3.jpg',
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
),
(
    'Honda Civic',
    'Civic',
    'Honda',
    2024,
    'Gray',
    28000.00,
    12,
    'The Honda Civic is a practical and fuel-efficient compact car with modern features and reliability.',
    'https://upload.wikimedia.org/wikipedia/commons/1/1a/Honda_Civic_e-HEV_Sport_%28XI%29_%E2%80%93_f_30062024.jpg',
    'SEDAN',
    'PETROL'
),
(
    'Audi e-tron',
    'e-tron',
    'Audi',
    2024,
    'White',
    65000.00,
    4,
    'The Audi e-tron is a luxurious all-electric SUV with cutting-edge technology and premium comfort.',
    'https://hips.hearstapps.com/hmg-prod/images/2025-audi-e-tron-gt-102-66743d083580e.jpg?crop=0.564xw:0.422xh;0.153xw,0.304xh&resize=1200:*',
    'SUV',
    'ELECTRIC'
),
(
    'Jeep Wrangler',
    'Wrangler Rubicon',
    'Jeep',
    2024,
    'Green',
    48000.00,
    7,
    'The Jeep Wrangler Rubicon is an iconic off-road vehicle designed for adventure and versatility.',
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf',
    'SUV',
    'PETROL'
),
(
    'Chevrolet Corvette',
    'Corvette C8',
    'Chevrolet',
    2024,
    'Yellow',
    72000.00,
    3,
    'The Chevrolet Corvette C8 is an American sports car with a mid-engine layout and supercar performance.',
    'https://images.unsplash.com/photo-1580274455191-1c62238fa333',
    'COUPE',
    'PETROL'
),
(
    'Volkswagen ID.4',
    'ID.4',
    'Volkswagen',
    2024,
    'Silver',
    42000.00,
    6,
    'The Volkswagen ID.4 is an all-electric compact SUV with practicality and zero-emission driving.',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/2020_Volkswagen_ID.4_Pro_%28Netherlands%29_front_view.jpg/1200px-2020_Volkswagen_ID.4_Pro_%28Netherlands%29_front_view.jpg',
    'SUV',
    'ELECTRIC'
),
(
    'Subaru Outback',
    'Outback',
    'Subaru',
    2024,
    'Blue',
    37000.00,
    9,
    'The Subaru Outback is a reliable and capable all-wheel-drive wagon with off-road capability.',
    'https://s7d1.scene7.com/is/image/scom/25_OBK_Wilderness_hero_gallery_1?$1100j$',
    'WAGON',
    'PETROL'
),
(
    'Hyundai Ioniq 5',
    'Ioniq 5',
    'Hyundai',
    2024,
    'Silver',
    48000.00,
    5,
    'The Hyundai Ioniq 5 is an innovative electric crossover with retro-inspired design and cutting-edge tech.',
    'https://upload.wikimedia.org/wikipedia/commons/8/85/Hyundai_Ioniq_5_AWD_Techniq-Paket_%E2%80%93_f_31122024.jpg',
    'SUV',
    'ELECTRIC'
),
(
    'Kia Telluride',
    'Telluride',
    'Kia',
    2024,
    'Black',
    46000.00,
    8,
    'The Kia Telluride is a midsize SUV with three-row seating, upscale features, and excellent value.',
    'https://images.unsplash.com/photo-1581540222194-0def2dda95b8',
    'SUV',
    'PETROL'
),
(
    'Mazda MX-5 Miata',
    'MX-5',
    'Mazda',
    2024,
    'Red',
    32000.00,
    4,
    'The Mazda MX-5 Miata is a lightweight, fun-to-drive convertible sports car with excellent handling.',
    'https://upload.wikimedia.org/wikipedia/commons/9/95/Mazda_Roadster_%28MX-5%29_by_Negawa_Bridge_%28cropped%29.jpg',
    'CONVERTIBLE',
    'PETROL'
),
(
    'Toyota Prius',
    'Prius',
    'Toyota',
    2024,
    'White',
    30000.00,
    11,
    'The Toyota Prius is a pioneering hybrid vehicle known for exceptional fuel efficiency and reliability.',
    'https://imageonthefly.autodatadirect.com/images/?width=1200&height=900&IMG=USD30TOC161A01300.jpg',
    'HATCHBACK',
    'HYBRID'
),
(
    'Mercedes-Benz EQS',
    'EQS',
    'Mercedes-Benz',
    2024,
    'Black',
    105000.00,
    2,
    'The Mercedes-Benz EQS is a flagship luxury electric sedan with cutting-edge technology and incredible range.',
    'https://vehicle-images.dealerinspire.com/f535-11001114/W1KCG2DB2RA046927/7ce4e54b832c501fce688c687c45250d.jpg',
    'SEDAN',
    'ELECTRIC'
),
(
    'Ford Mustang',
    'Mustang GT',
    'Ford',
    2024,
    'Blue',
    55000.00,
    5,
    'The Ford Mustang GT is an iconic American muscle car with powerful V8 engine and aggressive styling.',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888',
    'COUPE',
    'PETROL'
),
(
    'Rivian R1T',
    'R1T',
    'Rivian',
    2024,
    'Green',
    75000.00,
    3,
    'The Rivian R1T is an all-electric pickup truck with impressive performance and adventure-ready features.',
    'https://cdn.motor1.com/images/mgl/0eKrAn/s3/rivian-r1t.jpg',
    'TRUCK',
    'ELECTRIC'
),
(
    'Lexus RX',
    'RX 350',
    'Lexus',
    2024,
    'Silver',
    58000.00,
    6,
    'The Lexus RX 350 is a luxury midsize SUV with a comfortable ride, premium features, and excellent build quality.',
    'https://upload.wikimedia.org/wikipedia/commons/a/af/Lexus_RX_500h_F_SPORT%2B_%28V%29_%E2%80%93_f_14072024.jpg',
    'SUV',
    'PETROL'
);