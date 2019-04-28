using RentCarsApi.Models;
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
    [RoutePrefix("api/orders")]
    public class OrdersController : ApiController
    {
        private readonly IOrderRepository _orderRepository;

        public OrdersController(IOrderRepository orderRepository) => _orderRepository = orderRepository;

        public async Task<IHttpActionResult> Get()
        {
            var orders = await _orderRepository.GetOrdersAsync();
            var result = orders.Select(o => new {
                o.OrderId,
                o.Users.FirstName,
                o.Users.SecondName,
                o.Cars.Brand,
                o.Cars.Model,
                StartDate = o.StartDate.ToString("yyyy-MM-dd"),
                FinishDate = o.FinishDate.ToString("yyyy-MM-dd"),
                o.UserId,
                o.CarId
            });
            return Ok(result);
        }

        public async Task<IHttpActionResult> Get(int id)
        {
            var order = await _orderRepository.GetOrderAsync(id);
            var result = new {
                order.OrderId,
                order.Users.FirstName,
                order.Users.SecondName,
                order.Cars.Brand,
                order.Cars.Model,
                StartDate = order.StartDate.ToString("yyyy-MM-dd"),
                FinishDate = order.FinishDate.ToString("yyyy-MM-dd"),
                order.UserId,
                order.CarId
            };
            return Json(result);
        }

        public async Task<IHttpActionResult> Post([FromBody]Orders order)
        {
            if (order != null)
            {
                await _orderRepository.AddOrderAsync(order);
                return Ok();
            }
            else return BadRequest();
        }

        public async Task<IHttpActionResult> Put(int id, [FromBody]Orders order)
        {
            if (order != null)
            {
                await _orderRepository.UpdateAsync(id, order);
                return Ok();
            }
            else return BadRequest();
        }

        public async Task<IHttpActionResult> Delete(int id)
        {
            await _orderRepository.DeleteAsynk(id);
            return Ok();
        }    
    }
}
