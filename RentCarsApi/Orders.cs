//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace RentCarsApi
{
    using System;
    using System.Collections.Generic;
    
    public partial class Orders
    {
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public int CarId { get; set; }
        public System.DateTime StartDate { get; set; }
        public System.DateTime FinishDate { get; set; }
        public string Comment { get; set; }
    
        public virtual Cars Cars { get; set; }
        public virtual Users Users { get; set; }
    }
}
