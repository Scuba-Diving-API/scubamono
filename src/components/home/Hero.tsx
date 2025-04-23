function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Velkommen til Dansk Sportsdykker Forbund</h1>
          <p className="text-xl mb-8">Oplev havets dyb og bliv en del af Danmarks største dykkernetværk</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-cyan-600 text-white px-6 py-3 rounded-full font-medium hover:bg-cyan-700 transition-colors">
              Find lokal klub
            </a>
            <a href="#" className="bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Bliv medlem
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
