import Deleteblock from './Deleteblock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDiplay from './StatusDiplay';

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 justify-between">
        <PriorityDisplay />
        <Deleteblock />
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap"> this is the ticket description</p>
      <div className="flex-grow">
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">08/31/2023</p>
            <ProgressDisplay />
          </div>
          <div className="ml-auto flex items-end">
            <StatusDiplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
