using System.ComponentModel.DataAnnotations;

namespace FinalProjectBackend.Models
{
    public class TicketBuyers
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string UserEmail { get; set; }
        public int? VATNumber { get; set; }
        public DateTime BoughtOn { get; set; } = DateTime.Now;
        public int TicketId { get; set; } // Required foreign key property
        public virtual Ticket Ticket { get;set; } = null!;
    }
}
