import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ApplicationForm from './pages/ApplicationForm';
import Payment from './pages/Payment';
import AboutUs from './pages/AboutUs';
import Certification from './pages/Certification';
import TrainingSchedule from './pages/TrainingSchedule';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<ApplicationForm />} />
            <Route path="/payment" element={<Payment />} />
             <Route path="/about" element={<AboutUs />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/training-schedule" element={<TrainingSchedule />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;