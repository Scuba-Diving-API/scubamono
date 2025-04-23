function FeatureCards() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-[url('https://images.unsplash.com/photo-1581771085083-2353cf475ff5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Uddannelse</h3>
            <p className="text-gray-600 mb-4">Udforsk vores spændende uddannelser og kurser for dykkere på alle niveauer.</p>
            <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">
              Læs mere →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5')] bg-cover bg-center"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Spøgelsesnet</h3>
            <p className="text-gray-600 mb-4">Vær med til at bekæmpe havforurening ved at indrapportere og fjerne efterladte fiskenet.</p>
            <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">
              Indrapportér →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-48 bg-[url('https://images.unsplash.com/photo-1599137248983-e6061c27ec80')] bg-cover bg-center"></div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Discipliner</h3>
            <p className="text-gray-600 mb-4">Oplev mangfoldigheden i dykning - fra UV-jagt til fridykning og undervandsrugby.</p>
            <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">
              Udforsk →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCards;
