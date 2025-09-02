import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Services = () => {
  const services = [
    {
      title: 'Wooden Furniture Polish',
      description: 'Professional polishing for all types of wooden furniture including teak, mahogany, oak, and more.',
      features: ['Deep cleaning', 'Premium polish application', 'Scratch removal', 'Shine restoration'],
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      price: 'Starting from ₹500'
    },
    {
      title: 'Sofa & Chair Polishing',
      description: 'Specialized polishing for leather and wooden parts of sofas, chairs, and recliners.',
      features: ['Leather conditioning', 'Wood frame polishing', 'Fabric protection', 'Color restoration'],
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
      price: 'Starting from ₹800'
    },
    {
      title: 'Dining Table & Bed Polishing',
      description: 'Expert polishing services for dining tables, beds, wardrobes, and bedroom furniture.',
      features: ['Surface preparation', 'Multiple coat application', 'Smooth finish', 'Protective coating'],
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
      price: 'Starting from ₹1000'
    },
    {
      title: 'Antique Furniture Restoration',
      description: 'Specialized restoration services for vintage and antique furniture pieces.',
      features: ['Historical accuracy', 'Traditional techniques', 'Careful restoration', 'Value preservation'],
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg',
      price: 'Custom pricing'
    },
    {
      title: 'Commercial Furniture Polishing',
      description: 'Bulk polishing services for offices, hotels, restaurants, and commercial spaces.',
      features: ['Bulk discounts', 'Flexible scheduling', 'Minimal disruption', 'Professional finish'],
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg',
      price: 'Bulk rates available'
    },
    {
      title: 'Furniture Repair & Maintenance',
      description: 'Complete furniture care including minor repairs, joint fixing, and regular maintenance.',
      features: ['Joint tightening', 'Crack filling', 'Hardware replacement', 'Preventive maintenance'],
      image: 'https://images.pexels.com/photos/5998041/pexels-photo-5998041.jpeg',
      price: 'Starting from ₹300'
    }
  ];

  return (
    <>
      <SEOHead
        title="Furniture Polishing Services Mumbai - A1 Furniture Polish | Professional Wood Polish"
        description="Expert furniture polishing services in Mumbai. Wooden furniture polish, sofa polishing, antique restoration, commercial polishing. Call +91 98765 43210 for free quote."
        keywords="furniture polishing services Mumbai, wooden furniture polish Mumbai, sofa polishing Mumbai, antique furniture restoration Mumbai, commercial furniture polishing Mumbai, table polishing Mumbai, chair polishing Mumbai"
        canonical="https://a1furniturepolish.com/services"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Furniture Polishing Services in Mumbai
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive furniture care solutions for homes and businesses across Mumbai. From wooden furniture polish to complete restoration, we handle it all with expertise and care.
          </p>
          <a
            href="tel:+919920397636"
            className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold"
          >
            <span>Get Free Quote: +91 99203 97636</span>
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <img
                  src={service.image}
                  alt={`${service.title} services in Mumbai`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle size={16} className="text-green-600" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-amber-600">{service.price}</p>
                    <Link
                      to="/contact"
                      className="flex items-center space-x-2 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200"
                    >
                      <span>Book Service</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Service Areas in Mumbai
            </h2>
            <p className="text-lg text-gray-600">
              We provide furniture polishing services across all major areas in Mumbai
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Bandra', 'Andheri', 'Powai', 'Goregaon', 'Malad', 'Borivali',
              'Juhu', 'Versova', 'Lokhandwala', 'Kandivali', 'Dahisar', 'Mira Road',
              'Santacruz', 'Vile Parle', 'Jogeshwari', 'Oshiwara', 'Infiniti Mall', 'Link Road'
            ].map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-200">
                <p className="text-gray-800 font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Furniture?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Contact A1 Furniture Polish today for professional furniture polishing services in Mumbai. Free consultation and competitive pricing!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold"
          >
            <span>Contact Us Today</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;