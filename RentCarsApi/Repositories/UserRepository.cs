using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace RentCarsApi.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly Rent_CarsEntities _context;

        public UserRepository(Rent_CarsEntities context) => _context = context;

        public async Task<List<Users>> GetUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }
    }
}