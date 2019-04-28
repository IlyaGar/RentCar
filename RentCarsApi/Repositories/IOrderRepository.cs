using RentCarsApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RentCarsApi.Repositories
{
    public interface IOrderRepository
    {
        Task<List<Orders>> GetOrdersAsync();

        Task<Orders> GetOrderAsync(int id);

        Task AddOrderAsync(Orders order);

        Task UpdateAsync(int id, Orders order);

        Task DeleteAsynk(int id);
    }
}
