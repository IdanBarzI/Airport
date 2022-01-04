using AirportServer.Domain.Models;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirportServer.Api.Contracts
{
    public class StationDto
    {
        public int Id { get; set; }
        public Airplane Airplain { get; set; }
        public List<Airplane> WaitingQ { get; set; }

        public ConcurrentQueue<Airplane> DtoToNormal()
        {
            ConcurrentQueue<Airplane> newQ = new ConcurrentQueue<Airplane>();
            foreach(var airplane in WaitingQ)
            {
                newQ.Enqueue(airplane);
            }
            return newQ;
        }
    }
}
