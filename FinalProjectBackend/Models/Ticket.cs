using System.ComponentModel.DataAnnotations;

namespace FinalProjectBackend.Models
{
    public class Ticket
    {
        [Key]
        public int Id { get; set; }
        public int IdEvent { get; set; }  
        public Event Event { get; set; } = null!;
        public virtual TicketBuyers? TicketBuyer { get; set; }
    }
}
