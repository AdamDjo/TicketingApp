'use client';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

interface DeleteBlockProps {
  id?: string; // Assurez-vous que le type correspond à celui de votre route backend
}
const Deleteblock: React.FC<DeleteBlockProps> = ({ id }) => {
  const router = useRouter();
  const deleteTicket = async () => {
    if (!id) {
      // Si id est undefined, ne pas continuer
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        router.refresh();
      } else {
        // Gérer le cas où la suppression du ticket n'a pas réussi
        console.error('Failed to delete the ticket');
      }
    } catch (error) {
      // Gérer les erreurs de fetch ou d'autres erreurs possibles
      console.error('An error occurred while deleting the ticket:', error);
    }
  };
  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        className="text-red-400 hover:cursor-pointer hover:text-red-200"
        onClick={deleteTicket}
      />
    </div>
  );
};

export default Deleteblock;
