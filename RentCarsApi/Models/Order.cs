using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RentCarsApi.Models
{
    public class Order
    {
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public int CarId { get; set; }
        public string StartDate { get; set; }
        public string FinishDate { get; set; }
        public string Comment { get; set; }
    }
}