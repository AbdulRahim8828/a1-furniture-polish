import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const BlogPost = () => {
  const { slug } = useParams();

  // Sample blog post content
  const post = {
    title: 'How to Maintain Wooden Furniture Polish at Home',
    content: `
      <p>Maintaining the polish on your wooden furniture between professional services is crucial for preserving its beauty and extending its lifespan. Here are expert tips from A1 Furniture Polish Mumbai to help you keep your furniture looking its best.</p>
      
      <h2>Daily Care Tips</h2>
      <p>Regular dusting is the most important aspect of furniture maintenance. Use a soft, lint-free cloth to gently remove dust particles that can scratch the polish surface over time.</p>
      
      <h2>Weekly Cleaning Routine</h2>
      <p>Once a week, use a slightly damp cloth to clean your furniture surfaces. Always wipe in the direction of the wood grain and immediately follow up with a dry cloth to prevent water damage.</p>
      
      <h2>Monthly Polish Application</h2>
      <p>Apply a thin layer of quality furniture polish monthly. Use circular motions to work the polish into the wood, then buff with a clean cloth for a beautiful shine.</p>
      
      <h2>What to Avoid</h2>
      <ul>
        <li>Never use harsh chemicals or abrasive cleaners</li>
        <li>Avoid placing hot items directly on polished surfaces</li>
        <li>Don't use excessive water or moisture</li>
        <li>Avoid direct sunlight exposure for extended periods</li>
      </ul>
      
      <h2>When to Call Professionals</h2>
      <p>While regular home maintenance is important, professional furniture polishing services in Mumbai like A1 Furniture Polish should be used annually or when you notice:</p>
      <ul>
        <li>Dull or faded appearance</li>
        <li>Scratches or water marks</li>
        <li>Uneven polish application</li>
        <li>Signs of wear and tear</li>
      </ul>
    `,
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
    date: '2024-01-15',
    author: 'A1 Team',
    category: 'Maintenance Tips'
  };

  return (
    <>
      <SEOHead
        title="How to Maintain Wooden Furniture Polish at Home - A1 Furniture Polish Mumbai"
        description="Expert tips for maintaining wooden furniture polish at home between professional services. Learn proper care techniques from Mumbai's leading furniture polishing experts."
        keywords="maintain furniture polish home, wooden furniture care tips, furniture maintenance Mumbai, furniture polish care guide"
        canonical={`https://a1furniturepolish.com/blog/${slug}`}
      />

      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-amber-600 hover:text-amber-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
            />
            
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Tag size={16} />
                <span>{post.category}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Professional Furniture Polishing in Mumbai?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              While home maintenance is important, nothing beats professional furniture polishing services. Contact A1 Furniture Polish for expert care of your valuable furniture pieces.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold"
            >
              <span>Get Professional Service</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;