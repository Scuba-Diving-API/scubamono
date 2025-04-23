function Newsletter() {
  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Tilmeld dig vores nyhedsbrev</h2>
          <p className="text-gray-600 mb-6">Få de seneste nyheder, events og opdateringer direkte i din indbakke</p>

          <div className="flex flex-col sm:flex-row gap-2">
            <input type="email" placeholder="Din e-mail" className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white" />
            <button className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors">Tilmeld</button>
          </div>
          <p className="text-xs text-gray-500 mt-4">Vi respekterer dit privatliv og deler ikke dine oplysninger med tredjeparter.</p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
