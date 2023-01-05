using FirstProject.API.Models;
using Microsoft.EntityFrameworkCore;

namespace FirstProject.API.Data
{
    public class FirstProjectDBContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }

        public FirstProjectDBContext(DbContextOptions options) : base(options)
        {
        }


    }
}
