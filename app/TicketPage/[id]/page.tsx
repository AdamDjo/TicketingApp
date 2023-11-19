import TicketForm from '@/app/(components)/TicketForm';
import { TicketType } from '@/types/ticket.type';
interface TicketPageProps {
  params: {
    id: string;
  };
}
const getTicketById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
      cache: 'no-store',
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketPage: React.FC<TicketPageProps> = async ({ params }) => {
  const EDITMODE = params.id === 'new' ? false : true;
  let updateTicketData: TicketType | { _id: string } = { _id: '' };
  if (EDITMODE) {
    const response = await getTicketById(params.id);
    updateTicketData = response?.foundTicket || {};
  } else {
    updateTicketData = {
      _id: 'new',
    };
  }
  return <TicketForm ticket={updateTicketData as TicketType} />;
};

export default TicketPage;
