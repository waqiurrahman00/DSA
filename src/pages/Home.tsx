import { Link } from 'react-router-dom';
import { Shield, Users, Award, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Shield,
      title: 'Industrial Safety Training',
      description: 'Comprehensive safety training programs for industrial workers and supervisors.'
    },
    {
      icon: Users,
      title: 'Fire Safety Courses',
      description: 'Fire prevention, evacuation procedures, and emergency response training.'
    },
    {
      icon: Award,
      title: 'Safety Certification',
      description: 'Internationally recognized safety certifications and compliance programs.'
    },
    {
      icon: Clock,
      title: 'Workplace Safety',
      description: 'Workplace hazard identification and risk management training.'
    }
  ];

  const courses = [
    {
      title: 'Industrial Safety Officer',
      duration: '6 Months',
      certification: 'NEBOSH Certified',
      fee: '₹45,000'
    },
    {
      title: 'Fire Safety Specialist',
      duration: '3 Months',
      certification: 'NFPA Certified',
      fee: '₹25,000'
    },
    {
      title: 'Construction Safety',
      duration: '4 Months',
      certification: 'OSHA Certified',
      fee: '₹35,000'
    },
    {
      title: 'Environmental Safety',
      duration: '5 Months',
      certification: 'ISO 14001',
      fee: '₹40,000'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Students Trained' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Placement Rate' },
    { number: '50+', label: 'Industry Partners' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Delhi Safety Academy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Leading Safety Training Institute in Delhi
            </p>
            <p className="text-lg mb-10 text-blue-50 max-w-3xl mx-auto">
              Empowering professionals with comprehensive safety education and internationally recognized certifications. Join thousands of successful safety professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105"
              >
                Apply Now
              </Link>
              <a
                href="#courses"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive safety training programs designed to meet industry standards and regulatory requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional safety training courses with international certifications and guaranteed placement assistance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{course.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-600">{course.certification}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">{course.fee}</div>
                <Link
                  to="/apply"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                >
                  Enroll Now
                </Link>
                <Link
                  to="/payment"
                  state={{ course: { id: course.title.toLowerCase().replace(/\s+/g, '-'), title: course.title, duration: course.duration, certification: course.certification, fee: parseInt(course.fee.replace(/[₹,]/g, '')), description: `Professional ${course.title.toLowerCase()} training with certification.` } }}
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors mt-2"
                >
                  Pay Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Delhi Safety Academy?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-gray-600">Industry experts with decades of experience in safety management.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Practical Training</h3>
                <p className="text-gray-600">Hands-on training with real-world safety scenarios and equipment.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Placement Assistance</h3>
                <p className="text-gray-600">95% placement rate with our extensive industry network.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">International Certification</h3>
                <p className="text-gray-600">Globally recognized certifications from NEBOSH, NFPA, and OSHA.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Facilities</h3>
                <p className="text-gray-600">State-of-the-art training facilities with latest safety equipment.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
                <p className="text-gray-600">Weekend and evening batches available for working professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Safety Career?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of successful safety professionals. Apply today and secure your future.
          </p>
          <Link
            to="/apply"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;