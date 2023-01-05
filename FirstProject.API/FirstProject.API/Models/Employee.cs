namespace FirstProject.API.Models
{
    public class Employee
    {
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string Mail { get; set; }
        public int Phone { get; set; }
        public int Salary { get; set; }
        public string Departament { get; set; }
    }
}
