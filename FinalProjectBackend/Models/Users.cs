using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;
using System.ComponentModel.DataAnnotations;

namespace FinalProjectBackend.Models
{
    public class Users
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string Username { get; set; }

        //[Required]
        //public string Type { get; set; } 

        //[Required]
        //public string Name { get; set; }

        //[Required]
        //public string Password { get; set; } 

        public virtual ICollection<Event> Events { get; } = new List <Event> ();

    }
}
