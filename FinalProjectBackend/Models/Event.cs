using System.ComponentModel.DataAnnotations;

namespace FinalProjectBackend.Models
{
    public class Event
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string? Description { get; set; } //optional

        [Required]
        public string Type { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }
   
        [Required]
        public int Capacity { get; set; }

        [Required]
        public string CreatedBy { get; set; }

        public string? UpdatedBy { get; set;}

        [Required]
        public DateTime CreatedOn { get; set; }

        public DateTime? UpdatedOn { get; set;}

        [Required]
        public string Photo { get; set; }

        public Decimal Price { get; set; }

        [Required]
        public string Location { get; set; }
        public bool IsEnabled { get; set; }
        public virtual ICollection<Ticket> Tickets { get; } = new List<Ticket>();

    }
}
