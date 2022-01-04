using AirportServer.Domain.Models;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirportServer.Api.Contracts
{
    public class DtoMapper:Profile
    {
        public DtoMapper()
        {
            //CreateMap<Station, StationDto>();
        }
    }
}
