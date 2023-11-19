interface StatusDiplayProps {
  status: string; // Utilisez un tableau de TicketType au lieu d'un seul ticket
}

const StatusDiplay: React.FC<StatusDiplayProps> = ({ status }) => {
  const getColor = (status: string) => {
    let color: string = 'bg-slate-700';
    switch (status.toLowerCase()) {
      case 'done':
        color = 'bg-green-200';
        return color;
      case 'started':
        color = 'bg-yellow-200';
        return color;
      case 'not started':
        color = 'bg-red-200';
        return color;
    }
    return color;
  };
  return (
    <span
      className={`inline-block text-xs rounded-full px-2 py-1 font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDiplay;
