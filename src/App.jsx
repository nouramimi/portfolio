// App.jsx
import { useState } from 'react';
import { Code } from "lucide-react";
import { Star } from 'lucide-react';
import { motion } from "framer-motion";
import './index.css';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-indigo-600">Nour El Houda Amimi</div>
            </div>
            
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-600 hover:text-indigo-600">About me</a>
              <a href="#skills" className="text-gray-600 hover:text-indigo-600">Certifications and skills</a>
              <a href="#projects" className="text-gray-600 hover:text-indigo-600">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </div>
            
            
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-indigo-600 focus:outline-none"
              >
                {isMenuOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
        
       
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">À propos</a>
              <a href="#skills" className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">Compétences</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">Projets</a>
              <a href="#education" className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">Formation</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        )}
      </nav>
      
      <header className="bg-indigo-700 text-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
    <div className="flex flex-col md:flex-row items-center">
      {/* Texte animé */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nour El Houda Amimi</h1>
        <h2 className="text-xl md:text-2xl mb-6">Software engineer student</h2>
        <p className="text-lg mb-8">
        Driven by a deep passion for web development, artificial intelligence, and data analytics — always eager to turn ideas into impactful digital solutions.
        </p>
        <div className="flex space-x-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="bg-white text-indigo-700 px-6 py-2 rounded-md font-medium shadow hover:bg-gray-100 transition"
          >
            Contact me
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            className="border border-white text-white px-6 py-2 rounded-md font-medium shadow hover:bg-indigo-600 transition"
          >
            Check Out My Portfolio
          </motion.a>
        </div>
      </motion.div>

      {/* Avatar animé */}
      <motion.div
  className="md:w-1/2 flex justify-center"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
>
  <div className="w-80 h-80 rounded-full bg-indigo-800 flex items-center justify-center shadow-lg">
    <motion.img
      src="/image.png"
      alt="Avatar"
      className="w-72 h-72 object-cover rounded-full"
      animate={{ rotate: [0, 10, -10, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    />
  </div>
</motion.div>

    </div>
  </div>
</header>



<section id="about" className="py-20 relative overflow-hidden">
  {/* Background avec effet de gradient et formes géométriques */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 opacity-90"></div>
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500 rounded-full opacity-20 blur-xl"></div>
    <div className="absolute top-1/2 -left-24 w-72 h-72 bg-indigo-500 rounded-full opacity-20 blur-xl"></div>
    <div className="absolute -bottom-24 right-1/4 w-60 h-60 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
  </div>

  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Titre avec effet de soulignement */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-2">About me</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 mx-auto rounded-full"></div>
    </div>

    {/* Card principale avec effet de glassmorphism */}
    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white border-opacity-20">
      <div className="flex flex-col lg:flex-row items-stretch gap-10">
        
        {/* Colonne gauche - Informations personnelles */}
        <div className="lg:w-2/5">
          <div className="bg-white bg-opacity-95 rounded-xl shadow-md p-6 h-full transform transition-all hover:shadow-xl">
          <div className="flex items-center justify-center mb-6">
  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 p-1">
    <img src="/image2.jpg" alt="" className="w-full h-full rounded-full object-cover" />
  </div>
</div>

            
            <h3 className="text-xl font-bold mb-6 text-indigo-900 text-center">Personal Information</h3>
            
            <ul className="space-y-4">
            <li className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1h6a1 1 0 110 2h-1v9a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h6V3a1 1 0 011-1zM6 8v8h8V8H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Education</p>
                <p className="font-medium text-gray-900">2nd-year Software Engineering Student at ISSAT Sousse</p>
                <p className="text-sm text-gray-600">Integrated Preparatory Cycle at ISSAT Sousse</p>
              </div>
            </li>

              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Age</p>
                  <p className="font-medium text-gray-900">22 years old</p>
                </div>
              </li>
              
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">Sousse, Tunisia</p>
                </div>
              </li>
              
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Languages</p>
                  <p className="font-medium text-gray-900">Arabic, English , Frensh , Deutsch </p>
                </div>
              </li>
              
              
            </ul>
          </div>
        </div>
        
        {/* Right Column - Presentation */}
<div className="lg:w-3/5">
  <div className="bg-white bg-opacity-95 rounded-xl shadow-md p-8 h-full transform transition-all hover:shadow-xl">
    <h3 className="text-2xl font-bold mb-6 text-indigo-900">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
        Experience
      </span>
    </h3>

    <div className="space-y-6">
  <div>
  <img src="/image11.png" alt="Leoni Internship 2024" className="w-12 h-12 rounded-full mr-4" />
    <p className="text-gray-700">
      <strong>Internship – Leoni Wiring Systems (2024)</strong><br />
      Worked in the IT department on internal tools and automation.
    </p>
  </div>

  <div>
  <img src="/image11.png" alt="Leoni Internship 2024" className="w-12 h-12 rounded-full mr-4" />
    <p className="text-gray-700">
      <strong>Internship – Leoni Wiring Systems (2023)</strong><br />
      Initial exposure to enterprise systems and IT infrastructure.
    </p>
  </div>

  <div>
  <img src="/image13.png" alt="Angular" className="w-12 h-12 rounded-full mr-4" />
    <p className="text-gray-700">
      <strong>Angular & Spring Boot Instructor – ARSII</strong><br />
      Conducted workshops and mentored students in full-stack development.
    </p>
  </div>

  <div>
  <img src="/image12.png" alt="Microsoft" className="w-12 h-12 rounded-full mr-4" />
    <p className="text-gray-700">
      <strong>Head of HR Department – Microsoft ISSATso Club</strong><br />
      Managed recruitment, onboarding, and club organization.
    </p>
  </div>

  <div>
  <img src="/image14.png" alt="JCI" className="w-12 h-12 rounded-full mr-4" />
    <p className="text-gray-700">
      <strong>Active Member – JCI Msaken</strong><br />
      Participated in community and leadership initiatives.
    </p>
  </div>

  <div>
  <img src="/image15.png" alt="CRT" className="w-12 h-12 rounded-full mr-4" />
    <p className="text-gray-700">
      <strong>Active Member – Red Crescent Society (Msaken)</strong><br />
      Volunteered in humanitarian and organizational events.
    </p>
  </div>
</div>


    {/* Skills Badges */}
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6 text-indigo-900">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
      Technical Skills
      </span>
    </h3>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">C / C++</span>
        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Java</span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
        <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">PHP</span>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Angular</span>
        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Django</span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Spring Boot</span>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">MongoDB</span>
        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">SQL</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">UML</span>
        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Agents</span>
        <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">NLP</span>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Machine Learning</span>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">RAG</span>
      </div>
    </div>
  </div>
</div>
 
            
            



      </div>
    </div>
  </div>
</section>


      

<section id="skills" className="py-20 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  {/* Éléments décoratifs */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-[#8D28E9]/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8D28E9]/5 rounded-full blur-3xl"></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* En-tête avec effet décoratif */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-2 relative inline-block">
      Certifications
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#8D28E9]/20 via-[#8D28E9] to-[#8D28E9]/20 transform -translate-y"></div>
      </h2>
    </div>

    
   

    {/* Section des certifications */}
<div className="mt-16">

  
  <div className="flex flex-wrap justify-center gap-8">
    {[
      { name: 'Samsung Innovation Campus (SIC) – AI Course', img: '/image21.png', bg: 'bg-blue-100', text: 'text-blue-800' },
      { name: 'NVIDIA Deep Learning Institute', img: '/image22.png', bg: 'bg-green-100', text: 'text-green-800' },
      { name: 'Building Transformer-Based NLP Applications', img: '/image22.png', bg: 'bg-indigo-100', text: 'text-indigo-800' },
      { name: 'Fundamentals of Deep Learning', img: '/image22.png', bg: 'bg-yellow-100', text: 'text-yellow-800' },
      { name: 'Coursera – DeepLearning.AI Specialization', img: '/image23.png', bg: 'bg-purple-100', text: 'text-purple-800' },
      { name: 'Advanced Learning Algorithms', img: '/image23.png', bg: 'bg-orange-100', text: 'text-orange-800' },
      { name: 'Unsupervised and Reinforcement Learning', img: '/image23.png', bg: 'bg-pink-100', text: 'text-pink-800' },
      { name: 'Cisco Certifications – CCNA 1, CCNA 2', img: '/image24.png', bg: 'bg-teal-100', text: 'text-teal-800' },
      { name: 'DevNet Associate', img: '/image24.png', bg: 'bg-gray-100', text: 'text-gray-800' },
      { name: 'UVT – AI and ML Certificate', img: '/image25.png', bg: 'bg-red-100', text: 'text-red-800' },
      { name: 'CEFR C1 English Certificate', img: '/image26.png', bg: 'bg-red-100', text: 'text-red-800' },
    ].map((certification, idx) => (
      <div 
        key={idx} 
        className="w-64 h-40 bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center space-y-2"
      >
        {/* Image de certification */}
        <div className={`w-16 h-16 rounded-full ${certification.bg} ${certification.text} flex items-center justify-center`}>
          <img src={certification.img} alt={certification.name} className="w-full h-full object-cover rounded-full" />
        </div>
        <p className={`text-center ${certification.text} font-semibold`}>{certification.name}</p>
      </div>
    ))}
  </div>
</div>




  </div>
</section>

      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">My projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          
          

          



          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
              <span className="text-6xl text-indigo-600">🤖</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI & Environmental Monitoring Suite</h3>
              <p className="text-gray-700 mb-4">
                A collection of AI-driven applications leveraging advanced ML models:
                <ul className="list-disc list-inside text-gray-700 mb-4 text-sm">
                  <li>Fire Prediction with ARIMA</li>
                  <li>Fire Detection using YOLOv8 CNN</li>
                  <li>Water Pollution Analysis via Decision Tree Classifier</li>
                  <li>AI Chat Assistant with Retrieval-Augmented Generation</li>
                  <li>Air Quality Monitoring using Random Forest, Linear Regression, and Decision Tree</li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">ARIMA</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">YOLOv8</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Decision Tree</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">RAG</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Random Forest</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Linear Regression</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/nouramimi/AI-Environmental-Monitoring-Suite" target="_blank" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <span className="mr-1">💻</span>
                  View Code
                </a>
                <a href="https://drive.google.com/drive/folders/1hXQjFahfp1Ka0RIe0ZQGiK3HRsZODa0i?usp=sharing" target="_blank" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <span className="mr-1">🔗</span>
                  Live Demo
                </a>
                <a
                  href="https://docs.google.com/presentation/d/1qE_36E_oDyMAchvMg0NpJBEKbQSr3Q9P/edit?usp=sharing&ouid=103786158898437875945&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  <span className="mr-1">🎤</span>
                  View Presentation
                </a>
                <a
                  href="https://docs.google.com/document/d/1_ao9XiRfqZQdHZKyDtkqKjuDU3xdqilr/edit?usp=sharing&ouid=103786158898437875945&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  <span className="mr-1">📄</span>
                  View Report
                </a>


              </div>
            </div>
          </div>



          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 bg-green-100 flex items-center justify-center">
              <span className="text-6xl text-green-600">🎓</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Academic Management System</h3>
              <p className="text-gray-700 mb-4">
                A web application developed with Angular, Django, and Python that facilitates academic management for both students and teachers. It integrates a genetic algorithm for automatic exam scheduling and workload balancing.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 text-sm">
                <li>🧑‍🎓 <strong>Student Features:</strong> Access schedules, course materials, announcements, and manage accounts.</li>
                <li>🧑‍🏫 <strong>Teacher Features:</strong> View schedules, invigilation hours, manage accounts, and upload courses.</li>
                <li>📊 <strong>Automated Supervision Allocation:</strong> Invigilation hours match weekly teaching load</li>
                <li>📅 <strong>Exam Scheduling:</strong> Generate timetables from Excel using a genetic algorithm.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Angular</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Django</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Python</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Genetic Algorithm</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Excel Integration</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/nouramimi/surveillance-des-examens" target="_blank" className="text-green-600 hover:text-green-800 flex items-center">
                  <span className="mr-1">💻</span>
                  View Code
                </a>
                <a
                  href="https://drive.google.com/file/d/1SQi7KjVRnDPaq0-wBNIdl-7KPL1HQMPZ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  <span className="mr-1">📄</span>
                  View Report
                </a>

              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
              <span className="text-6xl text-indigo-600">💰</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Online Auction Platform</h3>
              <p className="text-gray-700 mb-4">
                Full-featured auction web app developed with Angular and Spring Boot using a microservices architecture. Users place bids on products, and the highest bidder wins the item at the end of the auction. Microservices used:
              </p>
              <div className="text-gray-700 mb-4 text-sm">
                • <strong>API Gateway</strong>: Routes requests to appropriate services.<br />
                • <strong>User Service</strong>: Manages user accounts and authentication.<br />
                • <strong>Product Service</strong>: Handles product listings for auction.<br />
                • <strong>Inventory Service</strong>: Manages product stock and availability.<br />
                • <strong>Order Service</strong>: Processes auction winners and purchases.<br />
                • <strong>Auction Service</strong>: Core bidding logic and auction management.<br />
                • <strong>Notification Service</strong>: Sends bid/win notifications using Kafka.<br />
                • <strong>Discovery Service</strong>: Eureka server for service registration and discovery.
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Angular</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Spring Boot</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">MongoDB</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Kafka</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Eureka</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/nouramimi/backendAuction" target="_blank" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <span className="mr-1">💻</span>
                  View Code
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
              <span className="text-6xl text-indigo-600">🧑‍💼</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Employee Management Platform</h3>
              <p className="text-gray-700 mb-4">
                A full-stack web application built with Angular, Spring Boot, and MySQL, designed for efficient employee and document management. It features secure authentication, multilingual support, and intuitive interfaces.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 text-sm">
                <li>Manage employee records (create, update, delete, view)</li>
                <li>Upload and extract data from documents</li>
                <li>Secure JWT-based login with session management</li>
                <li>Support for multiple languages</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Angular</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Spring Boot</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">MySQL</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">JWT</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Hibernate</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/nouramimi/Employee-Management-Platform" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <span className="mr-1">💻</span>
                  View Code
                </a>
                <a
                  href="https://drive.google.com/file/d/1FaPP04D95EC4qfJgQ6aV0J1J6im9EoET/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  <span className="mr-1">📄</span>
                  View Report
                </a>

              </div>
            </div>
          </div>


          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
              <span className="text-6xl text-indigo-600">🚙</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Car Price Estimation Quiz</h3>
              <p className="text-gray-700 mb-4">
                Developed a web-based quiz application that predicts car prices using machine learning. Built with Angular for the frontend and Django for the backend.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Angular</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Django</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Machine Learning</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/nouramimi/car-price-prediction" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <span className="mr-1">💻</span>
                  View Code
                </a>
              </div>
            </div>
          </div>


          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
              <span className="text-6xl text-indigo-600">🎬</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Online Cinema Ticket Booking</h3>
              <p className="text-gray-700 mb-4">
                A WordPress-based platform that enables users to browse movies, view showtimes, and purchase tickets. The system includes secure payments, personalized recommendations, and a built-in chatbot for instant support.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">WordPress</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Chatbot</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Recommendation System</span>
              </div>
              <div className="flex space-x-4">
                <a href="#" target="_blank" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <span className="mr-1">💻</span>
                  View Code
                </a>
                <a href="https://drive.google.com/file/d/1PD8FdDeDRtlk_YsKAyWc60xjXAxKmdhK/view?usp=drive_link" target="_blank" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <span className="mr-1">📄</span>
                  Live Demo
                </a>
                <a
                  href="https://docs.google.com/presentation/d/1gckHChFxE_qWb28EZO6vDFamC6VCsyd6/edit?usp=drive_link&ouid=103786158898437875945&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  <span className="mr-1">🎤</span>
                  View Presentation
                </a>

              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
              <span className="text-6xl text-indigo-600">📅</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Event Scheduling & Registration System</h3>
              <p className="text-gray-700 mb-4">
                A Django-based web app for organizing and managing events. Events are categorized, and users can easily register to attend.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Django</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Python</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/nouramimi/event_registration" target="_blank" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <span className="mr-1">💻</span>
                  View Code
                </a>
                <a
                  href="https://docs.google.com/presentation/d/1Wk3TVxQ6ewiEIf7EapyZ0v6G-fc43r8k/edit?usp=sharing&ouid=103786158898437875945&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  <span className="mr-1">🎤</span>
                  View Presentation
                </a>

              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
              <span className="text-6xl text-indigo-600">🤗</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Mood Companion Chatbot</h3>
              <p className="text-gray-700 mb-4">
                An interactive chatbot built with React, Retrieval-Augmented Generation (RAG), and Ollema, designed to provide emotional support and mood tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">React</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">RAG</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Ollema</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">hugging face</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/nouramimi/Agent-m7ar7er" target="_blank" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <span className="mr-1">💻</span>
                  View Code
                </a>
                <a
                  href="https://docs.google.com/presentation/d/1AU4xchE0F9Qc4QHxkQCbHj0C9Qv1LS0h/edit?usp=sharing&ouid=103786158898437875945&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 flex items-center"
                >
                  <span className="mr-1">🎤</span>
                  View Presentation
                </a>

              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 bg-indigo-100 flex items-center justify-center">
              <span className="text-6xl text-indigo-600">🎵</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Music Recommendation System</h3>
              <p className="text-gray-700 mb-4">
                Built with NLP and tokenization techniques on Spotify Million Song Dataset CSV.  
                Deployed using Streamlit for interactive music recommendations based on user preferences.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">NLP</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Tokenization</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Streamlit</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Python</span>
                <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Spotify Dataset</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/nouramimi/Music_Recommendation_System" target="_blank" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <span className="mr-1">💻</span>
                  View Code
                </a>
                <a href="https://drive.google.com/file/d/1M_WM2Gj2Bb7cW_mWYbIe5ppRsxA49k_c/view?usp=sharing" target="_blank" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                  <span className="mr-1">🔗</span>
                  Live Demo
                </a>
              </div>
            </div>
          </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-indigo-100 flex items-center justify-center">
                <span className="text-6xl text-indigo-600">📧</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Spring Email Sender & Receiver</h3>
                <p className="text-gray-700 mb-4">
                  Backend service built with Spring Boot that enables sending and receiving emails via SMTP. 
                  Designed for integration with frontend applications or other backend services.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Spring Boot</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">SMTP</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Java</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/nouramimi/email-integration" target="_blank" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <span className="mr-1">💻</span>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-indigo-100 flex items-center justify-center">
                <span className="text-6xl text-indigo-600">🎨</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Auction Website Design</h3>
                <p className="text-gray-700 mb-4">
                  A detailed Figma design project for an auction website, showcasing user interface layouts, interactions, and a seamless user experience.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Figma</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">UI/UX</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Design System</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://www.figma.com/design/dmIpDCpzu10S21sjVTNag2/projetIhm-figma?m=auto&t=kIAiITJlr97fbps3-1" target="_blank" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <span className="mr-1">🎨</span>
                    View Design
                  </a>
                  <a
                    href="https://docs.google.com/presentation/d/1M3Z0hRYT9Kmyo5kdrXaK-g9v4CzHAjjV/edit?usp=sharing&ouid=103786158898437875945&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    <span className="mr-1">🎤</span>
                    View Presentation
                  </a>

                </div>
              </div>
            </div>


            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-indigo-100 flex items-center justify-center">
                <span className="text-6xl text-indigo-600">📝</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">MERN Stack Social App</h3>
                <p className="text-gray-700 mb-4">
                  Full-stack web app built with MongoDB, Express.js, React, and Node.js. Users can create posts, react with emojis, and manage posts dynamically in real time.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">MongoDB</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Express.js</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm">Node.js</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/nouramimi/MERN-STACK-POSTS-PROJECT" target="_blank" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <span className="mr-1">💻</span>
                    View Code
                  </a>
                  <a href="https://drive.google.com/file/d/1RAdAYJqqIYBKrxEa3jPeuz5lXTAyQ2B6/view?usp=sharing" target="_blank" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <span className="mr-1">🔗</span>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>




            
            
            
            
            
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact me</h2>
          
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-lg mb-6">
              Have a question or want to work together? Use the form below to send me a message. I’ll get back to you as soon as possible. Looking forward to connecting!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="mr-3">✉️</span>
                  <a href="#" >nouramimi22@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">🔗</span>
                  <a href="www.linkedin.com/in/nour-amimi-1362452b1" target="_blank" className="hover:underline">linkedin.com/in/nour-amimi</a>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">💻</span>
                  <a href="https://github.com/nouramimi" target="_blank" className="hover:underline">github.com/nouramimi</a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
            <form 
  className="space-y-4" 
  action="https://formsubmit.co/nouramimi22@gmail.com" 
  method="POST"
>
  <div>
    <label htmlFor="name" className="block mb-1">Nom</label>
    <input 
      type="text" 
      name="name"
      id="name" 
      required
      className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Votre nom"
    />
  </div>
  <div>
    <label htmlFor="email" className="block mb-1">Email</label>
    <input 
      type="email" 
      name="email"
      id="email" 
      required
      className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Votre email"
    />
  </div>
  <div>
    <label htmlFor="message" className="block mb-1">Message</label>
    <textarea 
      name="message"
      id="message" 
      rows="4" 
      required
      className="w-full px-4 py-2 rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      placeholder="Votre message"
    ></textarea>
  </div>
  
  <button 
    type="submit" 
    className="bg-white text-indigo-700 px-6 py-2 rounded-md font-medium hover:bg-gray-100"
  >
    Envoyer
  </button>
</form>

            </div>

            
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Nour El Houda Amimi. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;