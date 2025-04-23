function FAQ() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Ofte stillede spørgsmål</h2>
        <p className="text-gray-600">Find svar på de mest almindelige spørgsmål om dykning og medlemskab</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-medium text-lg mb-2">Hvordan kommer jeg i gang med at dykke?</h3>
            <p className="text-gray-600">Den bedste måde at komme i gang med dykning er at kontakte din lokale dykkerklub. Her kan du få information om begynderkurser og prøvedyk.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-medium text-lg mb-2">Hvad koster et medlemskab?</h3>
            <p className="text-gray-600">Medlemskabet varierer afhængigt af din lokale klub. Kontakt den nærmeste klub for at få information om deres kontingenter og medlemsfordele.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-medium text-lg mb-2">Hvad er CMAS-certificeringer?</h3>
            <p className="text-gray-600">CMAS er et internationalt anerkendt dykkercerificeringssystem. DSF tilbyder forskellige CMAS-kurser fra begynder til instruktørniveau.</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-medium text-lg mb-2">Kan jeg dykke, hvis jeg har astma eller andre helbredsproblemer?</h3>
            <p className="text-gray-600">Det afhænger af din specifikke situation. Du bør altid konsultere en læge med kendskab til dykkermedicin før du begynder at dykke, hvis du har helbredsproblemer.</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#" className="inline-block bg-blue-100 text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-blue-200 transition-colors">
            Se alle spørgsmål og svar
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
