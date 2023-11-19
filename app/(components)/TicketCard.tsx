import Deleteblock from './Deleteblock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDiplay from './StatusDiplay';
import { TicketType } from '../../types/ticket.type';
interface TicketCardProps {
  id: number;
  key: number;
  ticket: TicketType;
}

const formatTimestamp = (timestamp: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleDateString('fr-FR', options);
  return formattedDate;
};

const TicketCard: React.FC<TicketCardProps> = ({ ticket }) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 justify-between">
        <PriorityDisplay priority={ticket.priority} />
        <Deleteblock />
      </div>
      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap"> {ticket.description}</p>
      <div className="flex-grow">
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{formatTimestamp(ticket.createdAt)}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDiplay status={ticket.status} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
