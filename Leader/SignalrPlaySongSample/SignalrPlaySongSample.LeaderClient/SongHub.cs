using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalrPlaySongSample.LeaderClient
{
    public class SongHub : Hub
    {
        public async Task RequestPlay(int seconds = 0)
        {
            await Clients.All.SendAsync("Play", seconds);
        }

        public async Task RequestPause()
        {
            await Clients.All.SendAsync("Pause");
        }
    }
}
