using Microsoft.AspNetCore.Identity;

namespace FinalProjectBackend.Models
{
    public class User_IdentityUser
    {
        /// <summary>
        /// Gets or sets the primary key of the user that is linked to a role.
        /// </summary>
        public virtual string UserId { get; set; } = default!;

        /// <summary>
        /// Gets or sets the primary key of the role that is linked to the user.
        /// </summary>
        public virtual string IdentityUserId { get; set; } = default!;
    }
}
