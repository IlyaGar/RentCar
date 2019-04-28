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
    public class UsersController : ApiController
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository) => _userRepository = userRepository;

        public async Task<IHttpActionResult> Get()
        {
            var users = await _userRepository.GetUsersAsync();
            var result = users.Select(u => new { u.UserId, u.FirstName, u.SecondName, u.NumberDL, BirthDate = u.BirthDate.Date});
            return Ok(result);
        }
    }
}
