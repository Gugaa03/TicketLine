using FinalProjectBackend.Data;
using FinalProjectBackend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata.Ecma335;

namespace FinalProjectBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventController : ControllerBase
    {
        private ApplicationDbContext _context;

        public EventController(ApplicationDbContext _context)
        {
            this._context = _context;
        }

        [HttpGet]
        public IActionResult Get() 
        {
            var _events = _context.Events.Where(x => x.IsEnabled).ToList();
            return Ok(_events);    
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            if (id < 0)
                return BadRequest("Id is invalid");
            return Ok(_context.Events.FirstOrDefault(e => e.Id == id));
        }

        [HttpPost]
        public IActionResult Create([FromBody] Event _event)
        {
            //_event.User = this._context.Users.FirstOrDefault(u=> u.id == _event.UserId);
            //if (_event.User == null)
            //    return BadRequest("User is invalid");

            _event.IsEnabled = false;
            
            this._context.Add(_event);

            this._context.SaveChanges();

            return CreatedAtAction(nameof(Create), new {Id = _event.Id}, null);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (id < 0)
                return BadRequest("Id is invalid");

            var _event = this._context.Events.FirstOrDefault(e => e.Id == id);
            
            if (_event == null)
                return NotFound();
            
            this._context.Events.Remove(_event);
            this._context.SaveChanges();

            return Ok(_event);
        }

        [HttpPut("{Id}")]
        public IActionResult Update(int Id, [FromBody] Event _event)
        {
            var event1 = this._context.Events.FirstOrDefault(e => e.Id == Id);
            
            event1.Name = _event.Name;

            event1.Description = _event.Description;

            event1.Type = _event.Type;

            this._context.Events.Update(event1);

            this._context.SaveChanges();

            return Ok(event1);
        }

        [HttpPost("/EnableEvent")]
        public IActionResult EnableEvent([FromBody] EnableEventInput input)
        {
            var _event = _context.Events.FirstOrDefault(x => x.Id == input.eventId);
            
            if (_event == null)
            {
                return BadRequest("Bad Event id");
            }

            _event.IsEnabled = true;

            _context.Update(_event);
            _context.SaveChanges(true);

            return Ok(_event);
        }

        [HttpGet("/DisabledEvents")]
        public IActionResult GetDisableEvents()
        {
            var _events = _context.Events.Where(x => x.IsEnabled == false);

            if (_events == null)
            {
                return BadRequest("No Disabled Events");
            }

            return Ok(_events.ToList());
        }

    }
}
