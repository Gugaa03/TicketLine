using Microsoft.AspNetCore.Identity;

namespace FinalProjectBackend.Security
{
    public class TicketSolutionsUsers
    {
        public static async Task CreateDefaultUsers(IServiceProvider serviceProvider)
        {
            var userManager = (UserManager<IdentityUser>)serviceProvider.GetService(typeof(UserManager<IdentityUser>))
                ?? throw new Exception("Could not load Service UserManager from Identity");

            // Create users if they don't exist
            var defaultUsers = new List<(string UserName, string Role, string Password)>
            {
                ("admin@example.com", "Admin", "AdminPassword123*"),
                ("moderator@example.com", "Moderator", "ModeratorPassword123*"),
                ("client@example.com", "Client", "ClientPassword123*")
            };

            foreach (var (UserName, Role, Password) in defaultUsers)
            {
                var user = await userManager.FindByNameAsync(UserName);
                if (user == null)
                {
                    user = new IdentityUser { UserName = UserName, Email = UserName };
                    var result = await userManager.CreateAsync(user, Password);

                    if (!result.Succeeded)
                    {
                        // Convert IdentityError list to a string
                        var errorMessages = string.Join("; ", result.Errors.Select(e => e.Description));
                        throw new Exception($"Failed to create user '{UserName}'. Errors: {errorMessages}");
                    }

                    await userManager.AddToRoleAsync(user, Role);
                }
            }
        }
    }
}
