using Microsoft.AspNetCore.Mvc;

namespace FinalProjectBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TesteController : ControllerBase
    {
        public List<string> TestsStrings { get; set; } = new List<string>
        {
            "Hello",
            "World",
            "This is a web API project in c#"
        };

        private readonly ILogger<TesteController> _logger;

        public TesteController(ILogger<TesteController> logger)
        {
            _logger = logger;
        }

        [HttpGet("HelloWord")]
        public IActionResult HelloWorld()
        {
            return Ok("Hello World");
        }

        [HttpGet("testStrings")]
        public IActionResult GetAllTestsStrings()
        {
            return Ok(TestsStrings.ToList());
        }

        [HttpPost("GetTesteStringByIndex")]
        public IActionResult GetTestStringsByIndex(int i)
        {
            if (i < 0 || i >= TestsStrings.Count)
            {
                return BadRequest("Invalid Index");
            }
            return Ok(TestsStrings[i]);
        }

        [HttpPost("UpdateTesteStringByIndex")]
        public IActionResult UpdateTestStringByIndex(int i, string newStr)
        {
            if (i < 0 || i >= TestsStrings.Count)
            {
                return BadRequest("Invalid Index");
            }
            string _newStr = TestsStrings.ElementAt(i);
            _newStr = newStr;

            return Ok(_newStr);
        }

        [HttpDelete]
        public IActionResult DeleteTestString(int i)
        {
            if (i < 0 || i >= TestsStrings.Count)
            {
                return BadRequest("Invalid Index");
            }
            this.TestsStrings.RemoveAt(i);
            return Ok("Deleted");
        }

    }
}
