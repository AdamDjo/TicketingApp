import TicketCard from './(components)/TicketCard';
import { TicketType } from '@/types/ticket.type';

interface ApiResponse {
  tickets: TicketType[];
}
const getTickets = async (): Promise<ApiResponse | undefined> => {
  try {
    const res = await fetch('http://localhost:3000/api/Tickets', {
      cache: 'no-store',
    });

    return res.json();
  } catch (error) {
    console.log('Failed to get data ', error);
  }
};

const Home = async () => {
  const response = await getTickets();
  const { tickets = [] } = response || {};

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="md:grid grid-cols-2 sm:grid grid-cols-2 xl:grid grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    ></TicketCard>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
