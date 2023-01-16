export default function getClients(clients) {
  const summarizedTickets = clients.map((client) => client.tickets.length);
  const withTickets = summarizedTickets.filter((tickets) => tickets > 0).length;
  const withoutTickets = summarizedTickets.filter(
    (tickets) => tickets === 0
  ).length;

  return [withTickets, withoutTickets];
}
