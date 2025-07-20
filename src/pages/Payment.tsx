import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CreditCard, Lock, CheckCircle, ArrowLeft, Calendar, Award, Clock } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  duration: string;
  certification: string;
  fee: number;
  originalFee?: number;
  description: string;
}

interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  email: string;
  phone: string;
  billingAddress: string;
  city: string;
  state: string;
  pincode: string;
  upiId: string;
}

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(
    location.state?.course || null
  );
  const [paymentData, setPaymentData] = useState<PaymentFormData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    email: '',
    phone: '',
    billingAddress: '',
    city: '',
    state: '',
    pincode: '',
    upiId: ''
  });
  const [errors, setErrors] = useState<Partial<PaymentFormData>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');

  const courses: Course[] = [
    {
      id: 'iso',
      title: 'Industrial Safety Officer',
      duration: '6 Months',
      certification: 'NEBOSH Certified',
      fee: 35000,
      originalFee: 45000,
      description: 'Comprehensive safety training for industrial environments with international certification.'
    },
    {
      id: 'fss',
      title: 'Fire Safety Specialist',
      duration: '3 Months',
      certification: 'NFPA Certified',
      fee: 20000,
      originalFee: 25000,
      description: 'Fire prevention, evacuation procedures, and emergency response training.'
    },
    {
      id: 'cs',
      title: 'Construction Safety',
      duration: '4 Months',
      certification: 'OSHA Certified',
      fee: 28000,
      originalFee: 35000,
      description: 'Construction site safety management and hazard prevention.'
    },
    {
      id: 'es',
      title: 'Environmental Safety',
      duration: '5 Months',
      certification: 'ISO 14001',
      fee: 32000,
      originalFee: 40000,
      description: 'Environmental safety management and compliance training.'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Format card number
    if (name === 'cardNumber') {
      const formatted = value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ').trim();
      if (formatted.length <= 19) {
        setPaymentData(prev => ({ ...prev, [name]: formatted }));
      }
      return;
    }
    
    // Format expiry date
    if (name === 'expiryDate') {
      const formatted = value.replace(/\D/g, '').replace(/(\d{2})(?=\d)/, '$1/').trim();
      if (formatted.length <= 5) {
        setPaymentData(prev => ({ ...prev, [name]: formatted }));
      }
      return;
    }
    
    // Format CVV
    if (name === 'cvv') {
      const formatted = value.replace(/\D/g, '').trim();
      if (formatted.length <= 4) {
        setPaymentData(prev => ({ ...prev, [name]: formatted }));
      }
      return;
    }

    setPaymentData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof PaymentFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleUpiPayment = (upiApp: string) => {
    if (!selectedCourse) return;
    
    setIsProcessing(true);
    
    // Simulate UPI payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  const validateForm = () => {
    const newErrors: Partial<PaymentFormData> = {};

    if (paymentMethod === 'card') {
      if (!paymentData.cardNumber.replace(/\s/g, '')) newErrors.cardNumber = 'Card number is required';
      else if (paymentData.cardNumber.replace(/\s/g, '').length < 16) newErrors.cardNumber = 'Card number must be 16 digits';
      
      if (!paymentData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      else if (!/^\d{2}\/\d{2}$/.test(paymentData.expiryDate)) newErrors.expiryDate = 'Invalid expiry date format';
      
      if (!paymentData.cvv) newErrors.cvv = 'CVV is required';
      else if (paymentData.cvv.length < 3) newErrors.cvv = 'CVV must be 3-4 digits';
      
      if (!paymentData.cardholderName.trim()) newErrors.cardholderName = 'Cardholder name is required';
    }
    
    if (paymentMethod === 'upi') {
      if (!paymentData.upiId.trim()) newErrors.upiId = 'UPI ID is required';
      else if (!/^[\w.-]+@[\w.-]+$/.test(paymentData.upiId)) newErrors.upiId = 'Invalid UPI ID format';
    }
    
    if (!paymentData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(paymentData.email)) newErrors.email = 'Email is invalid';
    if (!paymentData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    if (paymentMethod === 'card') {
      if (!paymentData.billingAddress.trim()) newErrors.billingAddress = 'Billing address is required';
      if (!paymentData.city.trim()) newErrors.city = 'City is required';
      if (!paymentData.state.trim()) newErrors.state = 'State is required';
      if (!paymentData.pincode.trim()) newErrors.pincode = 'Pincode is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) return;
    
    if (validateForm()) {
      setIsProcessing(true);
      
      // Simulate payment processing
      setTimeout(() => {
        setIsProcessing(false);
        setPaymentSuccess(true);
      }, 3000);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for enrolling in <strong>{selectedCourse?.title}</strong>. You will receive a confirmation email shortly.
          </p>
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-green-800">
              <strong>Transaction ID:</strong> TXN-{Date.now().toString().slice(-8)}
            </p>
            <p className="text-sm text-green-800">
              <strong>Amount Paid:</strong> ₹{selectedCourse?.fee.toLocaleString()}
            </p>
            <p className="text-sm text-green-800">
              <strong>Course:</strong> {selectedCourse?.title}
            </p>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Back to Home
            </button>
            <button
              onClick={() => navigate('/apply')}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Complete Application Form
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Course</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => setSelectedCourse(course)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedCourse?.id === course.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <div className="space-y-1 mb-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="h-4 w-4 mr-1" />
                        {course.certification}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-blue-600">₹{course.fee.toLocaleString()}</span>
                      {course.originalFee && (
                        <span className="text-sm text-gray-500 line-through">₹{course.originalFee.toLocaleString()}</span>
                      )}
                    </div>
                    {course.originalFee && (
                      <div className="text-sm text-green-600 font-medium">
                        Save ₹{(course.originalFee - course.fee).toLocaleString()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Form */}
            {selectedCourse && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-6">
                  <Lock className="h-5 w-5 text-green-500 mr-2" />
                  <h2 className="text-2xl font-bold text-gray-900">Secure Payment</h2>
                </div>

                {/* Payment Method Selection */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Payment Method</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        paymentMethod === 'card'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center justify-center mb-2">
                        <CreditCard className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900">Credit/Debit Card</h4>
                        <p className="text-sm text-gray-600">Visa, Mastercard, RuPay</p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-4 border-2 rounded-lg transition-all ${
                        paymentMethod === 'upi'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center justify-center mb-2">
                        <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">₹</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-900">UPI Payment</h4>
                        <p className="text-sm text-gray-600">Google Pay, PhonePe, Paytm</p>
                      </div>
                    </button>
                  </div>
                </div>

                <form onSubmit={handlePayment} className="space-y-6">
                  {/* Card Information */}
                  {paymentMethod === 'card' && (
                    <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Card Information
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={paymentData.cardNumber}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="1234 5678 9012 3456"
                        />
                        {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={paymentData.expiryDate}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="MM/YY"
                          />
                          {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={paymentData.cvv}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              errors.cvv ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="123"
                          />
                          {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          name="cardholderName"
                          value={paymentData.cardholderName}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.cardholderName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.cardholderName && <p className="text-red-500 text-sm mt-1">{errors.cardholderName}</p>}
                      </div>
                    </div>
                    </div>
                  )}

                  {/* UPI Payment */}
                  {paymentMethod === 'upi' && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <div className="w-5 h-5 bg-orange-500 rounded mr-2 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">₹</span>
                        </div>
                        UPI Payment
                      </h3>
                      
                      {/* UPI Apps */}
                      <div className="mb-6">
                        <h4 className="text-md font-medium text-gray-700 mb-3">Pay with UPI Apps</h4>
                        <div className="grid grid-cols-3 gap-4">
                          <button
                            type="button"
                            onClick={() => handleUpiPayment('googlepay')}
                            disabled={isProcessing}
                            className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                              </div>
                              <span className="text-sm font-medium">Google Pay</span>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleUpiPayment('phonepe')}
                            disabled={isProcessing}
                            className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                              </div>
                              <span className="text-sm font-medium">PhonePe</span>
                            </div>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleUpiPayment('paytm')}
                            disabled={isProcessing}
                            className="p-4 border border-gray-300 rounded-lg hover:border-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <div className="text-center">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M7 4V2C7 1.45 7.45 1 8 1S9 1.45 9 2V4H15V2C15 1.45 15.45 1 16 1S17 1.45 17 2V4H19C20.1 4 21 4.9 21 6V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V6C3 4.9 3.9 4 5 4H7ZM5 8V20H19V8H5ZM12 17L7 12L8.41 10.59L12 14.17L15.59 10.59L17 12L12 17Z"/>
                                </svg>
                              </div>
                              <span className="text-sm font-medium">Paytm UPI</span>
                            </div>
                          </button>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-gray-500">OR</span>
                        </div>
                      </div>

                      {/* Manual UPI ID */}
                      <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Enter UPI ID *
                        </label>
                        <input
                          type="text"
                          name="upiId"
                          value={paymentData.upiId}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.upiId ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="yourname@paytm"
                        />
                        {errors.upiId && <p className="text-red-500 text-sm mt-1">{errors.upiId}</p>}
                        <p className="text-xs text-gray-500 mt-1">
                          Enter your UPI ID (e.g., 9876543210@paytm, yourname@googlepay)
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={paymentData.email}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={paymentData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.phone ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="+91 98765 43210"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Billing Address */}
                  {paymentMethod === 'card' && (
                    <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Billing Address</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Address *
                        </label>
                        <input
                          type="text"
                          name="billingAddress"
                          value={paymentData.billingAddress}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.billingAddress ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your address"
                        />
                        {errors.billingAddress && <p className="text-red-500 text-sm mt-1">{errors.billingAddress}</p>}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            City *
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={paymentData.city}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              errors.city ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Delhi"
                          />
                          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            State *
                          </label>
                          <input
                            type="text"
                            name="state"
                            value={paymentData.state}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              errors.state ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Delhi"
                          />
                          {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Pincode *
                          </label>
                          <input
                            type="text"
                            name="pincode"
                            value={paymentData.pincode}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                              errors.pincode ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="110001"
                          />
                          {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                        </div>
                      </div>
                    </div>
                    </div>
                  )}

                  {paymentMethod === 'card' && (
                    <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <Lock className="h-5 w-5 mr-2" />
                        Pay ₹{selectedCourse.fee.toLocaleString()}
                      </>
                    )}
                    </button>
                  )}

                  {paymentMethod === 'upi' && paymentData.upiId && (
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing UPI Payment...
                        </>
                      ) : (
                        <>
                          <div className="w-5 h-5 bg-white rounded mr-2 flex items-center justify-center">
                            <span className="text-orange-500 text-xs font-bold">₹</span>
                          </div>
                          Pay ₹{selectedCourse.fee.toLocaleString()} via UPI
                        </>
                      )}
                    </button>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              
              {selectedCourse ? (
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-medium text-gray-900">{selectedCourse.title}</h4>
                    <div className="text-sm text-gray-600 mt-1">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {selectedCourse.duration}
                      </div>
                      <div className="flex items-center mt-1">
                        <Award className="h-4 w-4 mr-1" />
                        {selectedCourse.certification}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Course Fee</span>
                      <span className="font-medium">₹{selectedCourse.fee.toLocaleString()}</span>
                    </div>
                    {selectedCourse.originalFee && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-₹{(selectedCourse.originalFee - selectedCourse.fee).toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">GST (18%)</span>
                      <span className="font-medium">₹{Math.round(selectedCourse.fee * 0.18).toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount</span>
                      <span>₹{Math.round(selectedCourse.fee * 1.18).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center text-blue-800 text-sm">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>Secure payment with bank-level encryption</span>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500">
                    <p>• Full refund available within 7 days</p>
                    <p>• Certificate provided upon completion</p>
                    <p>• Placement assistance included</p>
                    <p>• UPI payments are instant and secure</p>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Please select a course to continue</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;