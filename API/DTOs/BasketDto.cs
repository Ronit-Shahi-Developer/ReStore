
namespace API.DTOs
{
    public class BasketDto
    {
          public int Id { get; set; }
        public string BuyerId { get; set; }

         public string PaymentIntentId {get; set;}

        public string ClientSecrete {get; set;}
        public List<BasketItemDto> Items { get; set; } = new();   
    }
}