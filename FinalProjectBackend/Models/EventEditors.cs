using System.ComponentModel.DataAnnotations;

namespace FinalProjectBackend.Models
{
    public class EventEditors
    {
        [Key]
        public Event idEvent { get; set; }

        [Required]
        public Users idUser { get; set; }
    }
}
