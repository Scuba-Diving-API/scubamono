function LatestNews() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">Seneste nyt</h2>
          <p className="text-gray-600">Hold dig opdateret med de seneste begivenheder og nyheder</p>
        </div>
        <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700 mt-4 md:mt-0">
          Se alle nyheder →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
          <div className="h-56 bg-[url('https://images.unsplash.com/photo-1558328592-c073a4b95365?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center"></div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <span className="text-xs text-gray-500">28. mar 2025</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-xs text-blue-700 font-medium">Organisation</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Repræsentantskabsmøde 2025</h3>
            <p className="text-gray-600 mb-4">Husk at årets repræsentantskabsmøde afholdes den 26. april i Odense.</p>
            <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">
              Læs mere →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
          <div className="h-56 bg-[url('https://images.unsplash.com/photo-1589308078059-be1415eab4c3')] bg-cover bg-center"></div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <span className="text-xs text-gray-500">7. mar 2025</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-xs text-blue-700 font-medium">Havmiljø</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Vær med til at plante ålegræs</h3>
            <p className="text-gray-600 mb-4">Det Store Ålegræsinitiativ leder efter snorkeldykkere til et unikt projekt.</p>
            <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">
              Læs mere →
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
          <div className="h-56 bg-[url('https://images.unsplash.com/photo-1580019542155-247062e19ce4')] bg-cover bg-center"></div>
          <div className="p-6">
            <div className="flex items-center mb-3">
              <span className="text-xs text-gray-500">13. mar 2025</span>
              <span className="mx-2 text-gray-300">|</span>
              <span className="text-xs text-blue-700 font-medium">UV Foto</span>
            </div>
            <h3 className="font-bold text-xl mb-2">DM i UV-foto 2025</h3>
            <p className="text-gray-600 mb-4">Sæt kryds i kalenderen den 14. juni 2025 for Danmarksmesterskabet i undervandsfoto.</p>
            <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">
              Læs mere →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
