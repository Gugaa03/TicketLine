using FinalProjectBackend.Data;
using FinalProjectBackend.Models;
using FinalProjectBackend.Utility;
using Microsoft.AspNetCore.Mvc;

namespace FinalProjectBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TicketController : ControllerBase
    {
        private ApplicationDbContext _context;

        public TicketController(ApplicationDbContext _context)
        {
            this._context = _context;
        }

        [HttpPost]

        [Route("Buy/")]
        public IActionResult Buy([FromBody] BuyTicketInput input)
        {
            Event? _event = this._context.Events.FirstOrDefault(e => e.Id == input.EventId);
            if (_event == null) return BadRequest("Could not find event for the provided ID");

            // Check capacity of Event 
            // we should have the number of tickets to buy
            if (_event.Capacity == 0) return BadRequest("Not capacity for the provided Event");

            Ticket newTicket = new Ticket();

            newTicket.IdEvent = input.EventId;
            newTicket.Event = _event;

            this._context.Add(newTicket);

            TicketBuyers buyers = new TicketBuyers()
            {
                UserEmail = input.UserEmail,
                VATNumber = 1,
                Ticket = newTicket,
                TicketId = newTicket.Id
            };

            this._context.Add(buyers);

            _event.Capacity -= 1;

            this._context.Update(_event);
            try
            {
                EmailSender.SendEmail(buyers.UserEmail);
            }
            catch (Exception ex)
            {

            }

            this._context.SaveChanges();

            return CreatedAtAction(nameof(Buy), new { Id = newTicket.Id}, newTicket);
        }

    }
}
