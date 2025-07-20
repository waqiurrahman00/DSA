import { Award, CheckCircle, Download, ExternalLink, Star, Shield, Globe, BookOpen } from 'lucide-react';

const Certification = () => {
  const certifications = [
    {
      id: 'nebosh',
      name: 'NEBOSH',
      fullName: 'National Examination Board in Occupational Safety and Health',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      description: 'Internationally recognized qualification in occupational health and safety.',
      courses: ['Industrial Safety Officer', 'Safety Audit & Inspection'],
      validity: 'Lifetime',
      recognition: 'Global',
      benefits: [
        'Recognized in 130+ countries',
        'Career advancement opportunities',
        'Higher salary prospects',
        'Professional credibility'
      ]
    },
    {
      id: 'nfpa',
      name: 'NFPA',
      fullName: 'National Fire Protection Association',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      description: 'Leading authority on fire, electrical and related hazards.',
      courses: ['Fire Safety Specialist'],
      validity: '3 Years',
      recognition: 'International',
      benefits: [
        'Fire safety expertise recognition',
        'Industry standard certification',
        'Emergency response qualification',
        'Professional development'
      ]
    },
    {
      id: 'osha',
      name: 'OSHA',
      fullName: 'Occupational Safety and Health Administration',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      description: 'US federal agency that enforces safety and health legislation.',
      courses: ['Construction Safety', 'Workplace Safety Management'],
      validity: '3 Years',
      recognition: 'International',
      benefits: [
        'Construction safety expertise',
        'Workplace hazard identification',
        'Compliance knowledge',
        'Risk management skills'
      ]
    },
    {
      id: 'iso',
      name: 'ISO 14001',
      fullName: 'International Organization for Standardization',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      description: 'Environmental management systems standard.',
      courses: ['Environmental Safety'],
      validity: '3 Years',
      recognition: 'Global',
      benefits: [
        'Environmental management expertise',
        'Sustainability knowledge',
        'Audit capabilities',
        'Compliance assurance'
      ]
    },
    {
      id: 'iosh',
      name: 'IOSH',
      fullName: 'Institution of Occupational Safety and Health',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      description: 'Chartered body for health and safety professionals.',
      courses: ['Workplace Safety Management'],
      validity: 'Lifetime',
      recognition: 'International',
      benefits: [
        'Professional membership eligibility',
        'Leadership development',
        'Safety culture expertise',
        'Continuous professional development'
      ]
    }
  ];

  const certificationProcess = [
    {
      step: 1,
      title: 'Course Enrollment',
      description: 'Enroll in your chosen safety course and complete the training program.',
      icon: BookOpen
    },
    {
      step: 2,
      title: 'Training Completion',
      description: 'Attend all classes, complete assignments, and participate in practical sessions.',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Assessment',
      description: 'Take the certification exam conducted by the respective certification body.',
      icon: Award
    },
    {
      step: 4,
      title: 'Certificate Issuance',
      description: 'Receive your internationally recognized safety certification.',
      icon: Download
    }
  ];

  const stats = [
    { number: '5000+', label: 'Certified Professionals' },
    { number: '95%', label: 'Pass Rate' },
    { number: '5+', label: 'Certification Bodies' },
    { number: '100%', label: 'Industry Recognition' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              International Certifications
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Earn globally recognized safety certifications that open doors to career advancement and professional growth.
            </p>
            <div className="flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                <span>Global Recognition</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Industry Standard</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                <span>Career Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
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

      {/* Certifications Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Certification Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are authorized training partners with leading international certification bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img 
                      src={cert.logo} 
                      alt={cert.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{cert.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{cert.fullName}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {cert.recognition}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                          Valid: {cert.validity}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{cert.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Available Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.courses.map((course, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {cert.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                      View Courses
                    </button>
                    <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certification Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow our structured process to earn your international safety certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationProcess.map((process) => (
              <div key={process.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{process.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Certifications?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Recognition</h3>
              <p className="text-gray-600">Our certifications are recognized worldwide, opening international career opportunities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Standard</h3>
              <p className="text-gray-600">All certifications meet the highest industry standards and regulatory requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Star className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Growth</h3>
              <p className="text-gray-600">Certified professionals see significant career advancement and salary increases.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High Pass Rate</h3>
              <p className="text-gray-600">95% of our students successfully pass their certification exams on the first attempt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Training</h3>
              <p className="text-gray-600">Learn from certified instructors with extensive industry experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Download className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Certificates</h3>
              <p className="text-gray-600">Receive digital certificates that can be easily verified and shared online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Certified?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start your journey towards international safety certification today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105">
              View Courses
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certification;