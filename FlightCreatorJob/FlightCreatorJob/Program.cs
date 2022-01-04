using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace FlightCreatorJob
{
    class Program
    {
        static async Task Main(string[] args)
        {
            int i = 1;
            //var jobThread = new Thread(() =>
            //{
            using (HttpClient httpClient = new HttpClient())
            {
                while (true)
                {
                    await httpClient.GetAsync("http://localhost:5500/api/airport/land/" + i);
                    //Thread.Sleep(3000);
                    await Task.Delay(3000);
                    i++;
                    await httpClient.GetAsync("http://localhost:5500/api/airport/departure/" + i);
                    //Thread.Sleep(1200);
                    await Task.Delay(1200);
                    i++;
                }
            }
            //});
            //jobThread.Start();
        }

    }

}
