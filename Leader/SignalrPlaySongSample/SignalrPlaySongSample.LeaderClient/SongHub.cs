using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalrPlaySongSample.LeaderClient
{
    public class SongHub : Hub
    {
        public async Task RequestPlay()
        {
            await Clients.All.SendAsync("Play");
        }

        public async Task RequestPause()
        {
            await Clients.All.SendAsync("Pause");
        }
    }
}
