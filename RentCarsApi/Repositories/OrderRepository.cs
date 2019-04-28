using RentCarsApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace RentCarsApi.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly Rent_CarsEntities _context;

        public OrderRepository(Rent_CarsEntities context) => _context = context;

        public async Task<List<Orders>> GetOrdersAsync()
        {
            return await _context.Orders.ToListAsync();
        }

        public async Task<Orders> GetOrderAsync(int id)
        {
            return await _context.Orders.FirstOrDefaultAsync(o => o.OrderId == id);
        }

        public async Task AddOrderAsync(Orders order)
        {
            _context.Orders.Add(order);

            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsynk(int id)
        {
            var order = await _context.Orders.FirstOrDefaultAsync(o => o.OrderId == id);
            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();
        }
       
        public async Task UpdateAsync(int id, Orders order)
        {
            _context.Entry(order).State = EntityState.Modified;
            var orderInDb = await _context.Orders.FirstOrDefaultAsync(o => o.OrderId == order.OrderId);
            await _context.SaveChangesAsync();
        }
    }
}