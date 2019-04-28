using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace RentCarsApi.Repositories
{
    public class CarRepository : ICarRepository
    {
        private readonly Rent_CarsEntities _context;

        public CarRepository(Rent_CarsEntities context) => _context = context;

        public async Task<List<Cars>> GetCarsAsync()
        {
            return await _context.Cars.ToListAsync();
        }
    }
}