import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-900 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-xl font-bold text-gray-900">KONFHUB</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#events" className="text-gray-700 hover:text-gray-900 font-medium">Events</a>
              
              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
                  Solutions
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
                  Features
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
                  Use Cases
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
                  Resources
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center">
                  Pricing
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => navigate('/events')}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium"
              >
                Host an Event
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                Log in
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-3">
              <a href="#events" className="block text-gray-700 hover:text-gray-900 font-medium">Events</a>
              <a href="#solutions" className="block text-gray-700 hover:text-gray-900 font-medium">Solutions</a>
              <a href="#features" className="block text-gray-700 hover:text-gray-900 font-medium">Features</a>
              <a href="#use-cases" className="block text-gray-700 hover:text-gray-900 font-medium">Use Cases</a>
              <a href="#resources" className="block text-gray-700 hover:text-gray-900 font-medium">Resources</a>
              <a href="#pricing" className="block text-gray-700 hover:text-gray-900 font-medium">Pricing</a>
              <button 
                onClick={() => navigate('/events')}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 font-medium"
              >
                Host an Event
              </button>
              <button 
                onClick={() => navigate('/login')}
                className="w-full px-4 py-2 text-gray-700 hover:text-gray-900 font-medium text-left"
              >
                Log in
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Hero Content */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI-Powered Event Platform
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The all-in-one platform for effortless event management, ticketing, and attendee engagement.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => navigate('/events')}
                className="px-8 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 font-medium text-lg shadow-sm w-full sm:w-auto"
              >
                Host an Event
              </button>
              <button 
                onClick={() => navigate('/register')}
                className="px-8 py-3 bg-white text-blue-900 border-2 border-blue-900 rounded-md hover:bg-blue-50 font-medium text-lg w-full sm:w-auto"
              >
                Book a Demo
              </button>
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-blue-900">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450'%3E%3Crect fill='%23f3f4f6' width='800' height='450'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='20' fill='%236b7280'%3EPlatform Demo%3C/text%3E%3C/svg%3E"
                >
                  <source src="/demo-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Ratings Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Star Ratings Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
              {/* Capterra */}
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-700">4.8/5 Capterra</p>
              </div>

              {/* Software Advice */}
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-700">4.7/5 Software Advice</p>
              </div>

              {/* GetApp */}
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-700">4.8/5 GetApp</p>
              </div>

              {/* Gartner */}
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-700">4.8/5 Gartner</p>
              </div>

              {/* G2 */}
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-700">4.8/5 G2</p>
              </div>
            </div>

            {/* Review CTA */}
            <div className="text-center mb-16">
              <button className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 font-medium">
                Review us on G2
              </button>
            </div>

            {/* Trusted Companies Section */}
            <div className="text-center mb-12">
              <h3 className="text-xl font-semibold text-blue-900 mb-8">
                Trusted by 1000+ Companies & Communities
              </h3>
            </div>

            {/* Company Logos - Animated Carousel */}
            <div className="relative overflow-hidden mb-16">
              <div className="flex animate-scroll-left">
                {/* First set of logos */}
                <div className="flex items-center gap-12 min-w-max px-6">
                  <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <div className="text-2xl font-bold text-gray-700 whitespace-nowrap">TIMES NETWORK</div>
                  </div>
                  <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <div className="px-6 py-3 bg-gray-800 text-white font-bold">YOURSTORY</div>
                  </div>
                  <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                      <span className="text-2xl font-bold text-gray-700">Red Hat</span>
                    </div>
                  </div>
                  <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <div className="text-3xl font-bold text-gray-700">SAP</div>
                  </div>
                  <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <div className="text-2xl font-light text-gray-700">trescorr</div>
                  </div>
                  <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <div className="text-2xl font-serif text-gray-700">ASM</div>
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-12 min-w-max px-6">
                  <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <div className="text-2xl font-bold text-gray-700 whitespace-nowrap">TIMES NETWORK</div>
                  </div>
                  <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <div className="px-6 py-3 bg-gray-800 text-white font-bold">YOURSTORY</div>
                  </div>
                  <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                      <span className="text-2xl font-bold text-gray-700">Red Hat</span>
                    </div>
                  </div>
                  <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <div className="text-3xl font-bold text-gray-700">SAP</div>
                  </div>
                  <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <div className="text-2xl font-light text-gray-700">trescorr</div>
                  </div>
                  <div className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <div className="text-2xl font-serif text-gray-700">ASM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section with Light Blue Background */}
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Desktop: 3 columns layout, Mobile: stacked */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              
              {/* Left Column - Two Cards Stacked */}
              <div className="space-y-6">
                {/* Card 1 - Where Every Event Matters */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-200 h-[200px] flex flex-col justify-center">
                  <div className="w-14 h-14 bg-blue-900 rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <span className="text-white font-bold text-2xl">K</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 leading-tight">Where Every<br/>Event Matters</h3>
                </div>

                {/* Card 2 - Events Hosted */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-200 h-[200px] flex flex-col justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-4xl font-bold text-blue-900 mb-1">10,000+</p>
                  <p className="text-gray-600 font-medium">Events Hosted Annually</p>
                </div>
              </div>

              {/* Center Column - Globe Card (Tall) */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 flex flex-col items-center justify-center min-h-[420px]">
                <div className="text-center w-full">
                  <p className="text-xs font-semibold text-blue-700 mb-2 uppercase tracking-wider">Host Events In</p>
                  <h3 className="text-5xl font-bold text-blue-900 mb-8">50+ Countries</h3>
                  
                  {/* Enhanced Globe Illustration */}
                  <div className="relative w-64 h-64 mx-auto">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20 blur-2xl"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Main Globe Container */}
                      <div className="relative w-52 h-52">
                        {/* Outer rings */}
                        <div className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-40"></div>
                        <div className="absolute inset-3 rounded-full border-2 border-blue-300 opacity-30"></div>
                        
                        {/* Main globe sphere with gradient */}
                        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 opacity-50"></div>
                        <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-blue-100 via-blue-200 to-blue-300 opacity-60 animate-pulse"></div>
                        
                        {/* Horizontal latitude lines */}
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                          <div className="w-full h-px bg-blue-400 opacity-40"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full" style={{transform: 'translateY(-25%)'}}>
                          <div className="w-4/5 h-px bg-blue-400 opacity-30"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full" style={{transform: 'translateY(25%)'}}>
                          <div className="w-4/5 h-px bg-blue-400 opacity-30"></div>
                        </div>
                        
                        {/* Vertical longitude lines */}
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
                          <div className="w-px h-full bg-blue-400 opacity-40"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full" style={{transform: 'translateX(-25%)'}}>
                          <div className="w-px h-4/5 bg-blue-400 opacity-30"></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full" style={{transform: 'translateX(25%)'}}>
                          <div className="w-px h-4/5 bg-blue-400 opacity-30"></div>
                        </div>
                        
                        {/* Location marker dots */}
                        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-blue-700 rounded-full shadow-lg"></div>
                        <div className="absolute top-1/2 left-1/4 w-2.5 h-2.5 bg-blue-600 rounded-full shadow-md"></div>
                        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="absolute top-2/3 left-2/3 w-2.5 h-2.5 bg-blue-600 rounded-full shadow-md"></div>
                        
                        {/* Animated ping markers */}
                        <div className="absolute top-1/4 right-1/3 w-3 h-3">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75 animate-ping"></span>
                        </div>
                        <div className="absolute top-2/3 left-2/3 w-3 h-3" style={{animationDelay: '1.5s'}}>
                          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75 animate-ping"></span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Slow rotating outer orbit dots */}
                    <div className="absolute inset-0 animate-spin-slow">
                      <div className="absolute top-0 left-1/2 w-2.5 h-2.5 bg-blue-600 rounded-full shadow-md -ml-1"></div>
                    </div>
                    <div className="absolute inset-0 animate-spin-slower">
                      <div className="absolute bottom-4 right-1/4 w-2 h-2 bg-blue-500 rounded-full -ml-1"></div>
                    </div>
                    <div className="absolute inset-0" style={{animation: 'spin-slow 15s linear infinite reverse'}}>
                      <div className="absolute top-1/4 right-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Two Cards Stacked */}
              <div className="space-y-6">
                {/* Card 3 - Customer Satisfaction */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-200 h-[200px] flex flex-col justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <p className="text-4xl font-bold text-blue-900 mb-1">95%</p>
                  <p className="text-gray-600 font-medium">Customer Satisfaction Rate</p>
                </div>

                {/* Card 4 - Event Solutions */}
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-200 h-[200px] flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 -mt-8 -mr-8">
                    <svg viewBox="0 0 200 200" className="text-blue-900">
                      <circle cx="100" cy="100" r="80" fill="currentColor"/>
                      <circle cx="100" cy="100" r="60" fill="white"/>
                      <circle cx="100" cy="100" r="40" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-blue-900 leading-tight mb-1">Event Solutions,</h3>
                    <h3 className="text-2xl font-bold text-blue-900 leading-tight">Tailored to You</h3>
                  </div>
                </div>
              </div>

            </div>

            {/* Features Preview - Continuing in same section */}
            <div className="text-center mb-12 mt-32">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Everything you need to manage events
              </h2>
              <p className="text-lg text-gray-600">
                Powerful features designed to make event management simple and effective
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Ticketing</h3>
                <p className="text-gray-600">
                  Create, manage, and sell tickets with ease. Support for multiple ticket types and pricing options.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Attendee Management</h3>
                <p className="text-gray-600">
                  Track attendance, manage registrations, and engage with attendees in real-time.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Insights</h3>
                <p className="text-gray-600">
                  Get detailed analytics and insights to understand your event performance and attendee behavior.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* End-To-End Event Tech Solution Section */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 py-20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-blue-300 text-sm font-semibold uppercase tracking-wider mb-3">FEATURES</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                End-To-End Event Tech Solution
              </h2>
            </div>

            {/* Features Grid with Center Icon */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              {/* Left Column - Two Cards */}
              <div className="space-y-6">
                {/* Pre-Event Card */}
                <div className="bg-gradient-to-br from-cyan-400 to-blue-400 p-8 rounded-3xl shadow-xl backdrop-blur-sm border border-white/20 h-[340px] flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-6">Pre-Event</h3>
                  <ul className="space-y-2.5 text-white flex-1">
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Event Website (3 Templates)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Comprehensive Ticketing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">White-labeling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Bulk Uploads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Attendee Download (with QR Codes)</span>
                    </li>
                  </ul>
                </div>

                {/* Post Event Card */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-8 rounded-3xl shadow-xl backdrop-blur-sm border-2 border-blue-400/30 h-[340px] flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-6">Post Event</h3>
                  <ul className="space-y-2.5 text-blue-100 flex-1">
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Feedback Forms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Automated Participation Certificates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Event Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">AI Photo Gallery</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Center - Circular Icon */}
              <div className="flex items-center justify-center">
                <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                  {/* Rotating outer ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-400/30 animate-spin-slow"></div>
                  
                  {/* Main circle with gradient */}
                  <div className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 shadow-2xl flex items-center justify-center">
                    {/* Inner sections with icons */}
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      {/* Decorative segments */}
                      <div className="absolute inset-0">
                        {/* Top segment - cyan */}
                        <div className="absolute top-0 left-1/2 w-1/2 h-1/2 bg-cyan-400/40 origin-bottom-left" style={{clipPath: 'polygon(0 0, 100% 0, 0 100%)'}}></div>
                        {/* Right segment - blue */}
                        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-blue-600/40 origin-top-left" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 0)'}}></div>
                        {/* Bottom segment - purple */}
                        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-600/40 origin-top-right" style={{clipPath: 'polygon(0 100%, 100% 100%, 0 0)'}}></div>
                        {/* Left segment - darker blue */}
                        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-900/40 origin-bottom-right" style={{clipPath: 'polygon(0 0, 0 100%, 100% 100%)'}}></div>
                      </div>
                      
                      {/* Center white circle with icon */}
                      <div className="absolute inset-14 lg:inset-16 rounded-full bg-white/95 shadow-xl flex items-center justify-center">
                        <svg className="w-20 h-20 lg:w-24 lg:h-24 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Two Cards */}
              <div className="space-y-6">
                {/* Integrations Card */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-8 rounded-3xl shadow-xl backdrop-blur-sm border-2 border-blue-400/30 h-[340px] flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-6">Integrations & Gamification</h3>
                  <ul className="space-y-2.5 text-blue-100 flex-1">
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Event CMS/API</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Zapier</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Registration Widget & Buttons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Martech Integrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Webhooks</span>
                    </li>
                  </ul>
                </div>

                {/* During Event Card */}
                <div className="bg-gradient-to-br from-blue-900 to-blue-950 p-8 rounded-3xl shadow-xl backdrop-blur-sm border-2 border-blue-400/30 h-[340px] flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-6">During Event</h3>
                  <ul className="space-y-2.5 text-blue-100 flex-1">
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Event App</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Checkin App</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Self-check-in Kiosk Software</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">Badge Printing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-0.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">AI Face-detection-based Check-in</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose KonfHub Section */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">
                Why Choose KonfHub?
              </h2>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
                Extensive Features to Ensure Seamless Experience for Organizers & Attendees
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              
              {/* Card 1 - AI-Powered */}
              <div className="group text-center p-8 hover:bg-gray-50 rounded-2xl transition-all duration-300">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-3">
                  AI-Powered Technology
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Leverage cutting-edge AI for intelligent event management and automated workflows
                </p>
              </div>

              {/* Card 2 - Analytics */}
              <div className="group text-center p-8 hover:bg-gray-50 rounded-2xl transition-all duration-300">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-3">
                  Real-time Analytics
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Track and optimize your events with comprehensive data insights and reports
                </p>
              </div>

              {/* Card 3 - Security */}
              <div className="group text-center p-8 hover:bg-gray-50 rounded-2xl transition-all duration-300">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-3">
                  Enterprise Security
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Bank-level security to protect your data and attendee information at all times
                </p>
              </div>

              {/* Card 4 - Support */}
              <div className="group text-center p-8 hover:bg-gray-50 rounded-2xl transition-all duration-300">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-3">
                  24/7 Customer Support
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Get help anytime with our dedicated support team ready to assist you
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Power Up Your Events Section */}
        <div className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="text-blue-900 text-sm font-semibold uppercase tracking-wider mb-3">USE CASES</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Power Up Your Events:<br/>
                Solutions for Every Occasion
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how KonfHub simplifies event management and boosts<br/>
                engagement for conferences, festivals, webinars, trainings, and more.
              </p>
            </div>

            {/* Use Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Use Case 1 - Conferences */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="relative h-full p-8 flex flex-col justify-end text-white">
                  <div className="mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Conferences</h3>
                  <p className="text-blue-100">Professional event management for large-scale conferences and summits</p>
                </div>
              </div>

              {/* Use Case 2 - Festivals */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800">
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="relative h-full p-8 flex flex-col justify-end text-white">
                  <div className="mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Festivals</h3>
                  <p className="text-indigo-100">Manage tickets, schedules, and attendees for music and cultural festivals</p>
                </div>
              </div>

              {/* Use Case 3 - Webinars */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="relative h-full p-8 flex flex-col justify-end text-white">
                  <div className="mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Webinars</h3>
                  <p className="text-blue-100">Host engaging online webinars with seamless registration and attendance tracking</p>
                </div>
              </div>

              {/* Use Case 4 - Training */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900">
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="relative h-full p-8 flex flex-col justify-end text-white">
                  <div className="mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Training Programs</h3>
                  <p className="text-blue-100">Organize corporate training sessions with certificate management</p>
                </div>
              </div>

              {/* Use Case 5 - Meetups */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-700">
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="relative h-full p-8 flex flex-col justify-end text-white">
                  <div className="mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Community Meetups</h3>
                  <p className="text-indigo-100">Build and engage your community with regular meetups and networking events</p>
                </div>
              </div>

              {/* Use Case 6 - Workshops */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-700">
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="relative h-full p-8 flex flex-col justify-end text-white">
                  <div className="mb-4">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Workshops</h3>
                  <p className="text-cyan-100">Interactive workshops with hands-on learning and resource sharing</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                WHAT USERS SAY ABOUT KONFHUB?
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Don't Take Our Word For It.<br />
                Trust Our Users
              </h2>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-24 h-1 ${i === 4 ? 'bg-blue-600' : 'bg-gray-200'} ${i > 0 ? 'ml-2' : ''}`}></div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Working with KonfHub truly stood out as a refreshing and invigorating experience. The platform performed flawlessly, exceeding our needs!
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://via.placeholder.com/48" 
                    alt="Satyakam Goswami" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Satyakam Goswami</h4>
                    <p className="text-sm text-gray-500">PyDelhi Organizer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-24 h-1 ${i === 4 ? 'bg-blue-600' : 'bg-gray-200'} ${i > 0 ? 'ml-2' : ''}`}></div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  KonfHub has been instrumental in streamlining our event management. The intuitive interface and powerful features make organizing events a breeze!
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://via.placeholder.com/48" 
                    alt="Priya Sharma" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Priya Sharma</h4>
                    <p className="text-sm text-gray-500">Tech Conference Lead</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-24 h-1 ${i === 4 ? 'bg-blue-600' : 'bg-gray-200'} ${i > 0 ? 'ml-2' : ''}`}></div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The analytics and reporting features have given us valuable insights into our events. KonfHub has truly transformed how we manage our tech meetups.
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://via.placeholder.com/48" 
                    alt="Rajesh Kumar" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Rajesh Kumar</h4>
                    <p className="text-sm text-gray-500">Startup Organizer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-24 h-1 ${i === 4 ? 'bg-blue-600' : 'bg-gray-200'} ${i > 0 ? 'ml-2' : ''}`}></div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Exceptional customer support and seamless ticketing system. Our attendees love the user-friendly experience, and we love the backend management tools!
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://via.placeholder.com/48" 
                    alt="Anjali Mehta" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">Anjali Mehta</h4>
                    <p className="text-sm text-gray-500">Workshop Coordinator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to host your next event?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Join thousands of event organizers who trust our platform
            </p>
            <button 
              onClick={() => navigate('/register')}
              className="px-8 py-3 bg-white text-blue-900 rounded-md hover:bg-gray-100 font-medium text-lg shadow-lg"
            >
              Get Started for Free
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-xl font-bold">KONFHUB</span>
              </div>
              <p className="text-gray-400">
                The all-in-one platform for event management
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 KONFHUB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
