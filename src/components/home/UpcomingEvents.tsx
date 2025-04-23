function UpcomingEvents() {
  const events = [
    {
      title: "Fridykning: DM i Pool 2025",
      date: "26-27. april 2025",
      location: "Odense Universitetssvømmehal",
      info: "DM i pool afholdes i Odense. Fredag d. 25. april: Mærk vandet (kl. 19-22), konkurrencer lørdag og søndag.",
    },
    {
      title: "UV-Jagt: DM 2025",
      date: "17-18. maj 2025",
      location: "Nordsjælland, Gilleleje og Hundested",
      info: "Danmarksmesterskab i UV-jagt hvor vi finder Danmarks bedste UV-jægere.",
    },
    {
      title: "Havmiljø: Stenrevskursus",
      date: "17. maj 2025",
      location: "Kommer snart",
      info: "Kursus for alle dykkere med interesse i stenrev og deres økosystem.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Kommende events</h2>
          <p className="text-gray-600">Deltag i spændende dykkeraktiviteter og events over hele landet</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="border-l-4 border-cyan-600 p-6">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">{event.date}</span>
                <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">📍 {event.location}</p>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.info}</p>
                <a href="#" className="text-cyan-600 font-medium hover:text-cyan-700">
                  Mere info →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors">
            Se alle events
          </a>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
