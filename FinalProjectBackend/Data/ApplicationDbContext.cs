using FinalProjectBackend.Controllers;
using FinalProjectBackend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;

namespace FinalProjectBackend.Data
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Event> Events { get; set; }
        public DbSet<Ticket> Tickets { get; set; }
        public DbSet<TicketBuyers> TicketBuyers { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Ticket>()
                    .HasOne(e => e.TicketBuyer)
                    .WithOne(e => e.Ticket)
                    .HasForeignKey<TicketBuyers>(e => e.TicketId)
                    .IsRequired();

            //modelBuilder.Entity<Event>()
            //    .HasMany(e => e.Tickets)
            //    .WithOne(e => e.Event)
            //    .HasForeignKey(e => e.IdTicket)
            //    .IsRequired();

            #region DataSeed

            modelBuilder.Entity<Event>().HasData(
                new Event
                {
                    Id = 1,
                    Name = "Almoço queima",
                    Description = "Hortas",
                    Type = "Queima",
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now.AddDays(5),
                    Capacity = 40,
                    CreatedBy = "Gustavo",
                    CreatedOn = DateTime.Now,
                    Photo = "https://www.cm-mirandela.pt/cmmirandela/uploads/geo_article/image/2294/semana_academica.jpg",
                    Location = "Hortas",
                    IsEnabled = true
                },
                new Event
                {
                    Id = 2,
                    Name = "Jantar queima",
                    Description = "Casa do Barrias",
                    Type = "Queima",
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now.AddDays(5),
                    Capacity = 40,
                    CreatedBy = "Gustavo",
                    CreatedOn = DateTime.Now,
                    Photo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAcqAmpuOp5F4CYr__x72jKYktivAOa30iQ&s",
                    Location = "Vila Real",
                    IsEnabled = true
                },
                new Event
                {
                    Id = 3,
                    Name = "Adoção de cães",
                    Description = "Adote um cão e salve uma vida",
                    Type = "Caridade",
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now.AddDays(5),
                    Capacity = 100,
                    CreatedBy = "Gustavo",
                    CreatedOn = DateTime.Now,
                    Photo = "https://marginal.fm/images/concertosimagens/sudoeste_marginal.jpg",
                    Location = " Porto",
                    IsEnabled = true
                },
                new Event
                {
                    Id = 4,
                    Name = "Almoço com a Luisa Maia",
                    Description = "Venha com seus melhores amigos almoçar com a melhor companhia",
                    Type = "Diversão",
                    StartDate = DateTime.Now,
                    EndDate = DateTime.Now.AddDays(5),
                    Capacity = 10,
                    CreatedBy = "Gustavo",
                    CreatedOn = DateTime.Now,
                    Photo = "https://www.engenhariaradio.pt/wp-content/uploads/2019/07/61100098_2711944778876083_5511165630360846336_o-770x963.jpg",
                    Location = "Lisboa",
                    IsEnabled = true
                }
            ); ;
          
            #endregion
        }
    }
}
