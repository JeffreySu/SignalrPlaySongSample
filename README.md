# SignalrPlaySongSample
使用 SignalR 远程控制多台电脑同步播放歌曲示例

## 文件夹说明

|  文件夹  |     说明     |
|---------|--------------|
|  Leader | 老师使用的服务器端代码 |
|  Student | 学生电脑部署的代码    |

## 启动说明

### 老师服务器

1. 安装并部署 .NET Core 站点（SignalrPlaySongSample.LeaderClient 项目）

2. 建议使用 https，配置域名（如 local.senparc.com），运行 https://local.senparc.com/leader.html 进入教师控制端

3. 点击【开始连接】按钮，连接到 WebSocket

4. 点击【播放】【暂停】或【跳转对齐】按钮，控制全局学生页面播放、暂停音乐，或同步到和教师机同步的播放进度

### 学生端

1. 部署静态网页网站，推荐使用 https，配置域名（如 student.senparc.com，本机可解析到 127.0.0.1）

2. 打开网页，如 https://student.senparc.com

3. 点击【开始连接】按钮，连接到教师服务器的 WebSocket

4. 等待教师端发送指令，同步音乐播放

## 原理

项目使用了  [ASP.NET Core SignalR](https://github.com/aspnet/AspNetCore/tree/master/src/SignalR) 作为 [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) 的连接和访问工具，教师端的服务器配置了 [SongHub.cs](https://github.com/JeffreySu/SignalrPlaySongSample/blob/224bf148e344d178f5f0537a1ad1922457dfc7ed/Leader/SignalrPlaySongSample/SignalrPlaySongSample.LeaderClient/SongHub.cs) 文件，用于定义服务器收到请求后的响应；学生端采用完全静态的老师服务器上 wwwroot 文件夹内的发布代码（不需要 leader.html 等仅供老师使用的文件），连接上服务器后，即可与服务器使用 WebSocket 进行实时通讯。

## 特别说明

本项目仅供教学测试，歌曲文件来源于网络，如有侵权可联系删除并更换： zsu@senparc.com 。
