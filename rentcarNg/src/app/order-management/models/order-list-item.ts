export class OrderListItem {
    constructor(
        public OrderId: number,
        public FirstName: string,
        public SecondName: string,
        public Brand: string,
        public Model: string,
        public StartDate: string,
        public FinishDate: string,
        public UserId: number,
        public CarId: number,
    ) { }
}
