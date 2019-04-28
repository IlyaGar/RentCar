using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RentCarsApi.Repositories
{
    public interface ICarRepository
    {
        Task<List<Cars>> GetCarsAsync();
    }
}
