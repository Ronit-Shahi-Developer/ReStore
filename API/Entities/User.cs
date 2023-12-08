using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class User : IdentityUser<int>
    {

        // 1-1 relationship
        public UserAddress Address { get; set; }
    }
}