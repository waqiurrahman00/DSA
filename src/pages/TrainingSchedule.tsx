import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, Search } from 'lucide-react';
interface ScheduleItem {
  id: string;
  course: string;
  batch: string;
  startDate: string;
  endDate: string;
  time: string;
  duration: string;
  instructor: string;
  location: string;
  availableSeats: number;
  totalSeats: number;
  fee: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

const TrainingSchedule = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const schedules: ScheduleItem[] = [
    {
      id: '1',
      course: 'Industrial Safety Officer',
      batch: 'ISO-2025-01',
      startDate: '2025-02-01',
      endDate: '2025-07-31',
      time: '9:00 AM - 12:00 PM',
      duration: '6 Months',
      instructor: 'Dr. Rajesh Kumar',
      location: 'Main Campus - Room A1',
      availableSeats: 5,
      totalSeats: 25,
      fee: 35000,
      status: 'upcoming'
    },
    {
      id: '2',
      course: 'Fire Safety Specialist',
      batch: 'FSS-2025-01',
      startDate: '2025-01-15',
      endDate: '2025-04-15',
      time: '2:00 PM - 5:00 PM',
      duration: '3 Months',
      instructor: 'Priya Sharma',
      location: 'Fire Lab - Building B',
      availableSeats: 8,
      totalSeats: 20,
      fee: 20000,
      status: 'ongoing'
    },
    {
      id: '3',
      course: 'Construction Safety',
      batch: 'CS-2025-01',
      startDate: '2025-02-15',
      endDate: '2025-06-15',
      time: '10:00 AM - 1:00 PM',
      duration: '4 Months',
      instructor: 'Amit Singh',
      location: 'Practical Training Area',
      availableSeats: 12,
      totalSeats: 30,
      fee: 28000,
      status: 'upcoming'
    },
    {
      id: '4',
      course: 'Environmental Safety',
      batch: 'ES-2025-01',
      startDate: '2025-03-01',
      endDate: '2025-07-31',
      time: '9:00 AM - 12:00 PM',
      duration: '5 Months',
      instructor: 'Sunita Verma',
      location: 'Main Campus - Room B2',
      availableSeats: 15,
      totalSeats: 25,
      fee: 32000,
      status: 'upcoming'
    },
    {
      id: '5',
      course: 'Workplace Safety Management',
      batch: 'WSM-2025-01',
      startDate: '2025-01-20',
      endDate: '2025-05-20',
      time: '6:00 PM - 9:00 PM',
      duration: '4 Months',
      instructor: 'Dr. Rajesh Kumar',
      location: 'Main Campus - Room A2',
      availableSeats: 3,
      totalSeats: 20,
      fee: 30000,
      status: 'ongoing'
    },
    {
      id: '6',
      course: 'Safety Audit & Inspection',
      batch: 'SAI-2025-01',
      startDate: '2025-02-10',
      endDate: '2025-05-10',
      time: '11:00 AM - 2:00 PM',
      duration: '3 Months',
      instructor: 'Amit Singh',
      location: 'Main Campus - Room C1',
      availableSeats: 18,
      totalSeats: 25,
      fee: 25000,
      status: 'upcoming'
    },
    {
      id: '7',
      course: 'Industrial Safety Officer',
      batch: 'ISO-2025-02',
      startDate: '2025-03-15',
      endDate: '2025-09-15',
      time: '2:00 PM - 5:00 PM',
      duration: '6 Months',
      instructor: 'Priya Sharma',
      location: 'Main Campus - Room A1',
      availableSeats: 20,
      totalSeats: 25,
      fee: 35000,
      status: 'upcoming'
    },
    {
      id: '8',
      course: 'Fire Safety Specialist',
      batch: 'FSS-2024-04',
      startDate: '2024-10-15',
      endDate: '2025-01-15',
      time: '9:00 AM - 12:00 PM',
      duration: '3 Months',
      instructor: 'Sunita Verma',
      location: 'Fire Lab - Building B',
      availableSeats: 0,
      totalSeats: 20,
      fee: 20000,
      status: 'completed'
    }
  ];

  const filteredSchedules = schedules.filter(schedule => {
    const matchesFilter = selectedFilter === 'all' || schedule.status === selectedFilter;
    const matchesSearch = schedule.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         schedule.batch.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         schedule.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming': return 'Upcoming';
      case 'ongoing': return 'Ongoing';
      case 'completed': return 'Completed';
      default: return 'Unknown';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Training Schedule
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              View our comprehensive training schedule and find the perfect batch that fits your timeline and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex space-x-2">
                {[
                  { key: 'all', label: 'All Batches' },
                  { key: 'upcoming', label: 'Upcoming' },
                  { key: 'ongoing', label: 'Ongoing' },
                  { key: 'completed', label: 'Completed' }
                ].map((filter) => (
                  <button
                    key={filter.key}
                    onClick={() => setSelectedFilter(filter.key)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedFilter === filter.key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses, batches, or instructors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredSchedules.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No schedules found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredSchedules.map((schedule) => (
                <div key={schedule.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{schedule.course}</h3>
                        <p className="text-sm text-gray-600">Batch: {schedule.batch}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(schedule.status)}`}>
                        {getStatusText(schedule.status)}
                      </span>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{formatDate(schedule.startDate)} - {formatDate(schedule.endDate)}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{schedule.time} ({schedule.duration})</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-gray-400" />
                        <span>Instructor: {schedule.instructor}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{schedule.location}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600">Available Seats</span>
                        <span className={`text-sm font-medium ${
                          schedule.availableSeats > 5 ? 'text-green-600' : 
                          schedule.availableSeats > 0 ? 'text-orange-600' : 'text-red-600'
                        }`}>
                          {schedule.availableSeats}/{schedule.totalSeats}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div 
                          className={`h-2 rounded-full ${
                            schedule.availableSeats > 5 ? 'bg-green-500' : 
                            schedule.availableSeats > 0 ? 'bg-orange-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${((schedule.totalSeats - schedule.availableSeats) / schedule.totalSeats) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-blue-600">₹{schedule.fee.toLocaleString()}</span>
                        {schedule.availableSeats === 0 && (
                          <span className="text-sm text-red-600 font-medium">Batch Full</span>
                        )}
                        {schedule.availableSeats > 0 && schedule.availableSeats <= 5 && (
                          <span className="text-sm text-orange-600 font-medium">Few Seats Left</span>
                        )}
                      </div>
                      <div className="space-y-2">
                        {schedule.status === 'upcoming' && schedule.availableSeats > 0 && (
                          <>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                              Enroll Now
                            </button>
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                              Pay Now
                            </button>
                          </>
                        )}
                        {schedule.status === 'ongoing' && schedule.availableSeats > 0 && (
                          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                            Join Mid-Batch
                          </button>
                        )}
                        {schedule.availableSeats === 0 && (
                          <button className="w-full bg-gray-400 text-white py-2 px-4 rounded-lg font-semibold cursor-not-allowed" disabled>
                            Batch Full
                          </button>
                        )}
                        {schedule.status === 'completed' && (
                          <button className="w-full bg-gray-400 text-white py-2 px-4 rounded-lg font-semibold cursor-not-allowed" disabled>
                            Completed
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Important Information
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Batch Timings</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Morning: 9:00 AM - 12:00 PM</li>
                <li>• Afternoon: 2:00 PM - 5:00 PM</li>
                <li>• Evening: 6:00 PM - 9:00 PM</li>
                <li>• Weekend: Saturday & Sunday</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Enrollment Process</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fill application form</li>
                <li>• Submit required documents</li>
                <li>• Pay course fees</li>
                <li>• Receive confirmation</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Full payment discount available</li>
                <li>• Installment options</li>
                <li>• Online payment accepted</li>
                <li>• EMI facilities available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Next Batch?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't miss out on our upcoming training sessions. Secure your seat today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105">
              Apply Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingSchedule;