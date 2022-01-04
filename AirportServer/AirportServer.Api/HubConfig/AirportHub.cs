using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace AirportServer.Api.HubConfig
{
    public class AirportHub: Hub
    {
        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }
    }
}
