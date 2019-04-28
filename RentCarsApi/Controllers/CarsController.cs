using RentCarsApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace RentCarsApi.Controllers
{
    public class CarsController : ApiController
    {
        private readonly ICarRepository _carRepository;

        public CarsController(ICarRepository carRepository) => _carRepository = carRepository;

        [HttpGet]
        public async Task<IHttpActionResult> GetCars()
        {
            var cars = await _carRepository.GetCarsAsync();
            var result = cars.Select(c => new {c.CarId, c.Brand, c.Model, ClassCar = c.Class, IssueYear = c.IssueYear.Date, c.RegistrationNumber}).ToList();
            return Ok(result);
        }
    }
}
