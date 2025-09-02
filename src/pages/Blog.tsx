import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, User } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Blog = () => {
  const blogPosts = [
    {
      slug: 'how-to-maintain-wooden-furniture-polish-at-home',
      title: 'How to Maintain Wooden Furniture Polish at Home in Mumbai',
      excerpt: 'Complete guide to maintaining your wooden furniture polish between professional services. Expert tips from A1 Furniture Polish Mumbai for long-lasting furniture care.',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
      date: '2024-01-15',
      author: 'A1 Furniture Polish Team',
      category: 'Maintenance Tips',
      readTime: '8 min read'
    },
    {
      slug: 'best-furniture-polishing-methods-mumbai-climate',
      title: 'Best Furniture Polishing Methods for Mumbai\'s Humid Climate',
      excerpt: 'Discover professional furniture polishing techniques specifically designed for Mumbai\'s tropical climate. Learn how humidity affects wooden furniture and the best protection methods.',
      image: 'https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg',
      date: '2024-01-10',
      author: 'A1 Furniture Polish Team',
      category: 'Professional Tips',
      readTime: '10 min read'
    },
    {
      slug: 'why-professional-furniture-polish-better-than-diy-mumbai',
      title: 'Why Professional Furniture Polish is Better than DIY in Mumbai',
      excerpt: 'Compare professional furniture polishing services vs DIY methods. Understand long-term benefits and cost-effectiveness of hiring experts in Mumbai.',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
      date: '2024-01-05',
      author: 'A1 Furniture Polish Team',
      category: 'Expert Advice',
      readTime: '7 min read'
    },
    {
      slug: 'furniture-restoration-tips-mumbai-homes',
      title: 'Complete Furniture Restoration Guide for Mumbai Homes',
      excerpt: 'Essential tips for restoring antique and vintage furniture in Mumbai. Learn about wood types, restoration techniques, and preservation methods.',
      image: 'https://images.pexels.com/photos/5998041/pexels-photo-5998041.jpeg',
      date: '2023-12-28',
      author: 'A1 Furniture Polish Team',
      category: 'Restoration',
      readTime: '12 min read'
    },
    {
      slug: 'choosing-right-furniture-polish-type-mumbai',
      title: 'Choosing the Right Furniture Polish Type for Mumbai Weather',
      excerpt: 'Comprehensive guide to selecting the perfect polish for different wood types in Mumbai\'s climate. Learn about wax, oil, and lacquer finishes.',
      image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
      date: '2023-12-20',
      author: 'A1 Furniture Polish Team',
      category: 'Product Guide',
      readTime: '9 min read'
    },
    {
      slug: 'monsoon-furniture-care-mumbai-guide',
      title: 'Ultimate Monsoon Furniture Care Guide for Mumbai Residents',
      excerpt: 'Protect your wooden furniture during Mumbai\'s intense monsoon season. Expert tips for preventing damage, mold, and maintaining polish quality.',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg',
      date: '2023-12-15',
      author: 'A1 Furniture Polish Team',
      category: 'Seasonal Care',
      readTime: '11 min read'
    }
  ];

  return (
    <>
      <SEOHead
        title="Furniture Polish Blog Mumbai - Expert Tips & Guides | A1 Furniture Polish"
        description="Read expert furniture polishing tips, maintenance guides, and restoration advice from A1 Furniture Polish Mumbai. Learn professional furniture care techniques for Mumbai homes."
        keywords="furniture polish blog Mumbai, furniture care tips Mumbai, wooden furniture maintenance Mumbai, furniture polishing guides Mumbai, furniture restoration blog Mumbai, professional furniture polish tips"
        canonical="https://a1furniturepolish.com/blog"
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Furniture Care Blog Mumbai
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert tips, guides, and insights from Mumbai's leading furniture polishing professionals. Learn how to care for and maintain your valuable furniture pieces in Mumbai's unique climate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919920397636"
              className="flex items-center justify-center space-x-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold"
            >
              <span>Call Expert: +91 99203 97636</span>
            </a>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <span className="text-amber-600 font-medium">{post.readTime}</span>
                  </div>
                  <div className="mb-3">
                    <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Expert Furniture Care Tips for Mumbai Homes
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to receive the latest furniture polishing tips, seasonal care guides, and special offers for Mumbai residents
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent"
            />
            <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200 font-semibold">
              Subscribe Now
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Join 500+ Mumbai homeowners who trust our furniture care advice
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Professional Furniture Polishing in Mumbai?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Contact A1 Furniture Polish for expert furniture care services. Available 24 hours across Mumbai and suburbs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919920397636"
              className="flex items-center justify-center space-x-2 bg-white text-amber-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold"
            >
              <span>Call: +91 99203 97636</span>
            </a>
            <a
              href="https://wa.me/919920397636"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;