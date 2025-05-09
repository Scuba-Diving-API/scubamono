import { Link } from 'react-router-dom';
import { STRAPI_URL } from '../../../api/endpoints';

interface EventCardProps {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  startDate: Date;
  endDate: Date;
  type: string;
}

export default function EventCard(props: EventCardProps) {
  const { id, startDate, endDate, title, subtitle, image, type } = props;
  return (
    <Link
      key={id}
      to={`/events/${id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg flex flex-col h-full"
    >
      <div className="relative">
        <div className="h-48 overflow-hidden">
          <img
            src={`${STRAPI_URL}${image}`}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        <div className="absolute top-4 left-4 bg-[#57b5eb] text-white px-3 py-1 rounded-full text-sm">
          {`${startDate.toLocaleString()} - ${endDate.toLocaleString()}`}
        </div>
        <div className="absolute top-4 right-4 bg-[#b1d9f5] text-[#0d2d52] px-3 py-1 rounded-full text-sm font-medium">
          {type}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-2 text-[#0d2d52]">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{subtitle}</p>
        <span className="text-[#57b5eb] font-medium mt-auto">Læs mere →</span>
      </div>
    </Link>
  );
}
