using FirstProject.API.Data;
using FirstProject.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FirstProject.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly FirstProjectDBContext firstProjectDBContext;
        public EmployeesController(FirstProjectDBContext firstProjectDBContext)
        {
            this.firstProjectDBContext = firstProjectDBContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await this.firstProjectDBContext.Employees.ToListAsync();
            return Ok(employees);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee([FromBody] Employee employee)
        {
            employee.ID = Guid.NewGuid();
            await this.firstProjectDBContext.Employees.AddAsync(employee);
            await this.firstProjectDBContext.SaveChangesAsync();
            return Ok(employee);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute] Guid ID)
        {
            var employee = await this.firstProjectDBContext.Employees.FirstOrDefaultAsync(x => x.ID == ID);

            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid ID, [FromBody] Employee employee)
        {
            var employeeData = await this.firstProjectDBContext.Employees.FindAsync(ID);

            if (employeeData == null)
            {
                return NotFound();
            }

            employeeData.Name = employee.Name;
            employeeData.Mail = employee.Mail;
            employeeData.Phone = employee.Phone;
            employeeData.Salary = employee.Salary;
            employeeData.Departament = employee.Departament;

            await this.firstProjectDBContext.SaveChangesAsync();
            return Ok(employee);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid ID)
        {
            var employee = await this.firstProjectDBContext.Employees.FindAsync(ID);

            if (employee == null)
            {
                return NotFound();
            }

            this.firstProjectDBContext.Employees.Remove(employee);
            await this.firstProjectDBContext.SaveChangesAsync();
            return Ok(employee);
        }
    }
}
