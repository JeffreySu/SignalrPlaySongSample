"use strict";

var connection;
var ip = "local.senparc.com";
var connectMsg = '连接成功！等待播放！';

document.getElementById("startConnection").addEventListener("click", function (event) {
    connection = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Information)
        .withUrl("https://" + ip + "/songHub", { skipNegotiation: true, transport: signalR.HttpTransportType.WebSockets })
        .build();

    connection.on("Play", function (seconds) {
        document.getElementById("msg").innerText = '正在播放！';
        document.getElementById("player").currentTime = seconds;
        document.getElementById("player").play();
    });

    connection.on("Pause", function () {
        document.getElementById("msg").innerText = '已暂停播放！';
        document.getElementById("player").pause();
    });

    connection.start().then(function () {
        document.getElementById("msg").innerText = connectMsg;
        document.getElementById("playerArea").style.display = 'block';
    }).catch(function (err) {
        return console.error(err.toString());
    });

    event.preventDefault();
});