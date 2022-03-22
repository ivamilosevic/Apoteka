using Microsoft.EntityFrameworkCore;

namespace Models
{
    public class ApotekaContext : DbContext
    {
        public DbSet<Lek> Lekovi { get; set; }

        public DbSet<Proizvodjac> Proizvodjaci { get; set; }

        public DbSet<Nabavka> Nabavke { get; set; }

        public ApotekaContext(DbContextOptions options) : base(options)
        {

        }
    }
}