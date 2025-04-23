function Membership() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Bliv medlem af DSF</h2>
            <p className="text-xl mb-6">Som medlem får du en række fordele, herunder:</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-cyan-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Gratis krisehjælp ved uheld</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-cyan-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Adgang til kurser og certificeringer</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-cyan-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Deltagelse i events og konkurrencer</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-cyan-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Rabatter hos samarbejdspartnere</span>
              </li>
            </ul>
          </div>
          <div className="md:w-2/5">
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Find din nærmeste klub</h3>
              <p className="text-gray-600 mb-6">Indtast dit postnummer og find den nærmeste dykkerklub i dit område.</p>
              <div className="flex">
                <input type="text" placeholder="Indtast postnummer" className="flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <button className="bg-blue-900 text-white px-4 py-3 rounded-r-md hover:bg-blue-800 transition-colors">Søg</button>
              </div>
              <div className="mt-6">
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                  Se alle klubber →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
