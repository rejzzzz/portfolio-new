import React, { useEffect, useState } from 'react';
import { Menu, X, Github as GitHub, ExternalLink, Mail, Linkedin, MapPin, Download, ChevronUp } from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className=" font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-indigo-600">Rejwanul Hoque</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium hover:text-indigo-600 transition-colors capitalize ${
                    activeSection === item ? 'text-indigo-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 focus:outline-none" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left capitalize ${
                    activeSection === item ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-indigo-50 to-white ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 animate-fadeIn ">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                Hi, I'm <span className="text-indigo-600">Rejwanul Hoque</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600 mb-6">
                CS Student
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Just learning from here and there.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 flex items-center"
                >
                  Contact Me
                  <Mail className="ml-2" size={18} />
                </button>
                <a
                  href="./../public/Rejwanul_Resume.pdf"
                  download="Rejwanul_Hoque_Resume.pdf"
                  className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-300 flex items-center"
                >
                  Resume
                  <Download className="ml-2" size={18} />
                </a>

              </div>
              <div className="flex mt-8 space-x-4">
                <a href="https://github.com/rejzzzz" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <GitHub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/rejwanul-hoque-a55a63289/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:officialrejwanul@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center animate-fadeInRight">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src="https://i.ibb.co/Z1fKG2k9/github-logo-8fe78d70014c574a9855.png" 
                    alt="John Doe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-sm font-medium flex items-center">
                    <MapPin size={16} className="text-indigo-600 mr-1" />
                    Sri City, AP , India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white max-w-7xl mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-fadeInLeft">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80" 
                alt="Working on code" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
            
            <div className="md:w-1/2 md:pl-12 animate-fadeInRight">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who am I?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a 2nd-year Computer Science student at IIIT Sri City, passionate about software engineering and continuously exploring the world of technology. Currently, I'm focusing on backend development, diving deep into designing scalable systems, API development, and database management.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
              I have a keen interest in cloud computing, system design and cybersecurity, and occasionally explore Web3 and blockchain technologies. My goal is to build efficient, secure, and high-performing systems that solve real-world problems.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
              When I’m not coding, I like to spend my time playing football, watching anime, and travelling to new places.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Name:</h4>
                  <p className="text-gray-600">Rejwanul Hoque</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email:</h4>
                  <p className="text-gray-600">officialrejwanul@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Location:</h4>
                  <p className="text-gray-600">Sri City, AP, India</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Availability:</h4>
                  <p className="text-gray-600">Part Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <div id='skills' className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Frontend */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeIn">
          <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Frontend Development</h3>
          <p className="text-gray-600 mb-6">
            Building responsive and interactive user interfaces with modern frameworks and libraries.
          </p>
          <div className="space-y-3">
            <SkillBar skill="React.js" percentage={10}/>
            <SkillBar skill="HTML5" percentage={10}/>
            <SkillBar skill="CSS3" percentage={10}/>
            <SkillBar skill="Tailwind CSS" percentage={10}/>
            <SkillBar skill="Bootstrap"percentage={10} />
            <SkillBar skill="NES.css" percentage={10}/>
            <SkillBar skill="PyQt5" percentage={10}/>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
          <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Backend Development</h3>
          <p className="text-gray-600 mb-6">
            Creating robust server-side applications and APIs to power web applications.
          </p>
          <div className="space-y-3">
            <SkillBar skill="Node.js" percentage={10}/>
            <SkillBar skill="Express.js" percentage={10}/>
            <SkillBar skill="REST API" percentage={10}/>
            <SkillBar skill="JWT" percentage={10}/>
          </div>
        </div>

        {/* Databases */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.4s' }}>
          <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Databases</h3>
          <p className="text-gray-600 mb-6">
            Experience in working with relational and NoSQL databases for efficient data management.
          </p>
          <div className="space-y-3">
            <SkillBar skill="PostgreSQL" percentage={10}/>
            <SkillBar skill="MongoDB" percentage={10}/>
            <SkillBar skill="MySQL" percentage={10}/>
            <SkillBar skill="Prisma ORM" percentage={10}/>
          </div>
        </div>

        {/* DevOps & Tools */}
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.6s' }}>
          <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16M4 12h16" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">DevOps & Tools</h3>
          <p className="text-gray-600 mb-6">
            Tools and technologies that enhance development, deployment, and version control.
          </p>
          <div className="space-y-3">
            <SkillBar skill="AWS (S3, CodePipeline)" percentage={10}/>
            <SkillBar skill="CI/CD" percentage={10}/>
            <SkillBar skill="Render" percentage={10}/>
            <SkillBar skill="Railway" percentage={10}/>
            <SkillBar skill="Git" percentage={10}/>
            <SkillBar skill="GitHub" percentage={10}/>
            <SkillBar skill="VS Code"percentage={10} />
            <SkillBar skill="Postman" percentage={10}/>
            <SkillBar skill="Makefile" percentage={10}/>
          </div>
        </div>
      </div>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">My Projects</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Project 1: AI-Powered Malware Detection */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fadeIn">
              <div className="relative">
                <img 
                  src="https://i.ibb.co/Hfsh5Pfw/Screenshot-2025-03-01-144407.png" 
                  alt="AI-Powered Malware Detection" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <div className="flex space-x-2">
                      <a 
                        href="https://github.com/rejzzzz/Ai-Malware-Detection" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-white rounded-full text-gray-800 hover:text-indigo-600 transition-colors"
                      >
                        <GitHub size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AI Malware Detection System</h3>
                <p className="text-gray-600 mb-4">
                  Real-time malware detection system achieving 92% accuracy, developed for Hack the Threat Hackathon (1st Runners-up).
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">PyQt5</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">RNN</span>
                </div>
              </div>
            </div>

            {/* Project 2: RESTful Gadgets API */}
            <div 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fadeIn" 
              style={{ animationDelay: '0.2s' }}
            >
              <div className="relative">
                <img 
                  src="https://i.ibb.co/1JPdtzHd/Screenshot-2025-03-06-214154.png" 
                  alt="RESTful Gadgets API" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <div className="flex space-x-2">
                      <a 
                        href="https://documenter.getpostman.com/view/39681122/2sAYdZst37" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-white rounded-full text-gray-800 hover:text-indigo-600 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>

                      <a 
                        href="https://github.com/rejzzzz/Inventory-Management-API" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-white rounded-full text-gray-800 hover:text-indigo-600 transition-colors"
                      >
                        <GitHub size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Inventory Management API</h3>
                <p className="text-gray-600 mb-4">
                  Full-stack inventory management system with secure authentication and comprehensive API design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">JWT</span>
                </div>
              </div>
            </div>

            {/* Project 3: Pac-Man Game Engine */}
            <div 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fadeIn" 
              style={{ animationDelay: '0.4s' }}
            >
              <div className="relative">
                <img 
                  src="https://i.ibb.co/Pzr4dyPg/pacman-game-image.png" 
                  alt="Pac-Man Game Engine" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <div className="flex space-x-2">
                      <a 
                        href="https://github.com/rejzzzz/pacman-game" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-white rounded-full text-gray-800 hover:text-indigo-600 transition-colors"
                      >
                        <GitHub size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Pac-Man Game Engine</h3>
                <p className="text-gray-600 mb-4">
                  Complete game engine in C with custom ghost AI using Dijkstra's algorithm, optimized for performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">C</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">SDL</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Game Dev</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Algorithms</span>
                </div>
              </div>
            </div>

            {/* Project 4: React Portfolio Website */}
            <div 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fadeIn" 
              style={{ animationDelay: '0.6s' }}
            >
              <div className="relative">
                <img 
                  src="https://i.ibb.co/V0y1VB2j/Screenshot-2025-03-06-214009.png" 
                  alt="React Portfolio Website" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <div className="flex space-x-2">
                      <a 
                        href="https://github.com/rejzzzz/portfolio-new" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-white rounded-full text-gray-800 hover:text-indigo-600 transition-colors"
                      >
                        <GitHub size={18} />
                      </a>
                      <a 
                        href="https://rej-portfolio.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 bg-white rounded-full text-gray-800 hover:text-indigo-600 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Portfolio Website</h3>
                <p className="text-gray-600 mb-4">
                  Responsive personal portfolio showcasing projects with retro aesthetic and optimized performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Typescript</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Vercel</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/rejzzzz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              View more projects on GitHub
              <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Work Experience</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              My journey as a student and the places I've had the pleasure to work at.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200"></div>
              
              {/* Experience 1 */}
              <div className="relative mb-12 animate-fadeIn">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 order-2 md:order-1">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Event Management Core</h3>
                      <p className="text-indigo-600 font-medium mb-3">E-cell IIIT Sri City</p>
                      <p className="text-gray-600 mb-4">
                        Organized entrepreneurship events and built partnerships to enrich campus activities and support aspiring entrepreneurs.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Entrepreneurship</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Events</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Team Management</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:mx-auto flex items-center order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-10 h-10 rounded-full border-4 border-indigo-200 bg-indigo-600 flex items-center justify-center z-10">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <div className="md:pt-10">
                      <span className="text-indigo-600 font-semibold">Sept 2024 - Jan 2025</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Experience 2 */}
              <div className="relative mb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pl-8 order-3 md:order-1">
                    <div className="md:pt-10">
                      <span className="text-indigo-600 font-semibold">Sep 2024 - Present</span>
                    </div>
                  </div>
                  <div className="md:mx-auto flex items-center order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-10 h-10 rounded-full border-4 border-indigo-200 bg-indigo-600 flex items-center justify-center z-10">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                  </div>
                  <div className="flex-1 md:text-left md:pl-8 order-2 md:order-3">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">DevOps Core</h3>
                      <p className="text-indigo-600 font-medium mb-3">GDG IIIT Sri CIty</p>
                      <p className="text-gray-600 mb-4">
                        Promoting DevOps practices and teach related workshops to enhance students’ practical knowledge in the tech community
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">DevOps</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Operations</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Tech Workshops</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 animate-fadeInLeft">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Mail className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-800">Email</h4>
                        <p className="text-gray-600">officialrejwanul@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <MapPin className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-800">Location</h4>
                        <p className="text-gray-600">Sri City, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Linkedin className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-gray-800">LinkedIn</h4>
                        <p className="text-gray-600">Rejwanul Hoque</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Socials */}
                  <div className="mt-8">
                    <h4 className="text-lg font-medium text-gray-800 mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      <a href="https://github.com/rejzzzz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors">
                        <GitHub size={20} />
                      </a>
                      <a href="https://www.linkedin.com/in/rejwanul-hoque-a55a63289/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href="https://x.com/rejzzz6" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fadeInRight">
                <form className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
                  
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-medium py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Rejwanul Hoque</h2>
              <p className="text-gray-400 mt-2">Software Developer</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-400 mb-2">© 2025 All Rights Reserved</p>
              <p className="text-gray-400">Proudly created for <span className="text-indigo-400 font-medium">CodeTikki</span> Digital Portfolio Showdown</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 animate-fadeIn z-50"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

// Skill Bar Component
function SkillBar({ skill, percentage }: { skill: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-gray-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full" 
          style={{ width: `${percentage}%`, transition: 'width 1s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
}

export default App;