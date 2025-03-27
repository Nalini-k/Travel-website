import React, { useState, useEffect } from 'react';
import { ChevronDown, Plane, Hotel, Utensils, Shield, Map, Wifi, Camera, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const countries = ["United States", "France", "Japan", "Italy", "Australia", "Switzerland"];
const destinations = ["Paris, France", "Tokyo, Japan", "New York, USA", "Rome, Italy", "Sydney, Australia", "Zurich, Switzerland"];

interface BookingForm {
  destination: string;
  persons: number;
  startDate: string;
  endDate: string;
  description: string;
}

interface Package {
  image: string;
  name: string;
  description: string;
  price: number;
  rating: number;
}

const packages: Package[] = [
  {
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    name: "Paris Explorer",
    description: "Visit the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral",
    price: 1299,
    rating: 4.8
  },
  {
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    name: "Tokyo Adventure",
    description: "Experience Shibuya, Mount Fuji, and traditional temples",
    price: 1499,
    rating: 4.9
  },
  {
    image: "https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2",
    name: "New York City",
    description: "Times Square, Central Park, and Broadway shows",
    price: 999,
    rating: 4.7
  },
  {
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    name: "Rome Discovery",
    description: "Colosseum, Vatican City, and Roman Forum",
    price: 1199,
    rating: 4.8
  },
  {
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    name: "Sydney Escape",
    description: "Opera House, Bondi Beach, and Harbour Bridge",
    price: 1699,
    rating: 4.6
  },
  {
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    name: "Swiss Alps",
    description: "Mountain hiking, skiing, and scenic train rides",
    price: 1899,
    rating: 4.9
  },
  {
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be",
    name: "Bangkok Delight",
    description: "Grand Palace, temples, and floating markets",
    price: 899,
    rating: 4.5
  },
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    name: "Dubai Luxury",
    description: "Burj Khalifa, desert safari, and gold souks",
    price: 2199,
    rating: 4.8
  },
  {
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    name: "London Classic",
    description: "Big Ben, Tower Bridge, and Buckingham Palace",
    price: 1399,
    rating: 4.7
  }
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d",
    title: "Sunset Beach Resort"
  },
  {
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    title: "Mountain Expedition"
  },
  {
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    title: "Tropical Paradise"
  },
  {
    url: "https://images.unsplash.com/photo-1551918120-9739cb430c6d",
    title: "Desert Safari"
  },
  {
    url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    title: "Cultural Experience"
  },
  {
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    title: "Luxury Hotel"
  }
];

function App() {
  const [currentCountry, setCurrentCountry] = useState(0);
  const [form, setForm] = useState<BookingForm>({
    destination: destinations[0],
    persons: 1,
    startDate: '',
    endDate: '',
    description: ''
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCountry((prev) => (prev + 1) % countries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.destination && form.persons && form.startDate && form.endDate && form.description.length >= 50) {
      alert('Booking successful! We will contact you shortly.');
    } else {
      alert('Please fill all fields correctly. Description must be at least 50 characters.');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white/95 fixed w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Plane className="h-8 w-8 text-purple-600 transform -rotate-45" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-orange-400 rounded-full"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text">Tripzy</span>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Book</a>
              
              {/* Packages Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-purple-600 flex items-center">
                  Packages <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 rounded-md">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">United States</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">India</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">France</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Germany</a>
                </div>
              </div>

              <a href="#" className="text-gray-700 hover:text-purple-600">Services</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Gallery</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">About</a>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 text-purple-600 hover:text-purple-700">Login</button>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-orange-400 text-white rounded-md hover:from-purple-700 hover:to-orange-500">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=2670&auto=format&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4 animate-fade-in">
            Welcome to Tripzy
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 transition-all duration-500 ease-in-out">
            Visit {countries[currentCountry]}
          </h1>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-orange-400 text-white rounded-full text-lg font-semibold hover:from-purple-700 hover:to-orange-500 transition-colors duration-300 transform hover:scale-105">
            Book Now
          </button>
        </div>
      </div>

      {/* Booking Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop"
                  alt="Travel Planning"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-orange-400/20" />
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text">Book Your Adventure</h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Where to</label>
                      <select 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        value={form.destination}
                        onChange={(e) => setForm({...form, destination: e.target.value})}
                      >
                        {destinations.map((dest) => (
                          <option key={dest} value={dest}>{dest}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">How Many Persons</label>
                      <input 
                        type="number" 
                        min="1"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        value={form.persons}
                        onChange={(e) => setForm({...form, persons: parseInt(e.target.value)})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <input 
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        value={form.startDate}
                        onChange={(e) => setForm({...form, startDate: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                      <input 
                        type="date"
                        min={form.startDate || new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        value={form.endDate}
                        onChange={(e) => setForm({...form, endDate: e.target.value})}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={4}
                        minLength={50}
                        maxLength={500}
                        placeholder="Tell us about your travel plans (minimum 50 characters)"
                        value={form.description}
                        onChange={(e) => setForm({...form, description: e.target.value})}
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-400 text-white rounded-md hover:from-purple-700 hover:to-orange-500 transition-colors duration-300 transform hover:scale-105"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text">
            Popular Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="relative h-48">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">${pkg.price}</span>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1">{pkg.rating}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-orange-400 text-white rounded-md hover:from-purple-700 hover:to-orange-500 transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Hotel, title: "Affordable Hotels", description: "Carefully selected accommodations that provide comfort without breaking the bank" },
              { icon: Utensils, title: "Food & Drinks", description: "Experience local cuisine and beverages with our curated dining recommendations" },
              { icon: Shield, title: "Safety Guide", description: "24/7 support and comprehensive safety measures throughout your journey" },
              { icon: Map, title: "Private Tours", description: "Personalized itineraries with expert local guides for an authentic experience" },
              { icon: Wifi, title: "Travel Connectivity", description: "Stay connected with portable WiFi devices and local SIM cards" },
              { icon: Camera, title: "Photography Tours", description: "Capture stunning moments with photography tours led by professionals" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105">
                <service.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text">
            Travel Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-xl font-bold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9"
                  alt="About Tripzy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-orange-400/20" />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="lg:pl-8">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-orange-400 text-transparent bg-clip-text">
                  About Tripzy
                </h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2020, Tripzy has become a leading force in the travel industry, dedicated to creating unforgettable experiences for adventurers worldwide. Our mission is to make travel accessible, enjoyable, and enriching for everyone.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-600">5+</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Years of Experience</h3>
                      <p className="text-gray-600">Delivering exceptional travel experiences</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-orange-600">50+</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Destinations</h3>
                      <p className="text-gray-600">Across the globe and counting</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-purple-600">10k+</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Happy Travelers</h3>
                      <p className="text-gray-600">Creating memories worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Plane className="h-8 w-8 text-purple-400 transform -rotate-45" />
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-orange-400 rounded-full"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-orange-400 text-transparent bg-clip-text">
                  Tripzy
                </span>
              </div>
              <p className="text-gray-400">
                Making your travel dreams come true with unforgettable experiences and exceptional service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Packages</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Gallery</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Travel Street</li>
                <li>Adventure City, AC 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@tripzy.com</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Tripzy. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;