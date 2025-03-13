using Microsoft.AspNetCore.Identity;

namespace FinalProjectBackend.Security
{
    public class TicketSecurityRoles
    {
        public static async Task CreateDefaultRoles(IServiceProvider serviceProvider)
        {
            var roleManager = (RoleManager<IdentityRole>)serviceProvider.GetService(typeof(RoleManager<IdentityRole>))
                            ?? throw new Exception("Could not load Service RoleManager from Identity");

            List<string> Roles = ["Admin", "Moderator", "Client"];

            // Create roles if they don't exist
            foreach (var role in Roles)
            {
                if (!await roleManager.RoleExistsAsync(role))
                {
                    await roleManager.CreateAsync(new IdentityRole(role));
                }
            }
        }
    }
}
