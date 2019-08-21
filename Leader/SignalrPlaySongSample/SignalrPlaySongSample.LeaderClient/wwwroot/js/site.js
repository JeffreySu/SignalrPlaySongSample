"use strict";

var connection;


document.getElementById("play").addEventListener("click", function (event) {
    connection.invoke("RequestPlay").catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("pause").addEventListener("click", function (event) {
    connection.invoke("RequestPause").catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});

document.getElementById("startConnection").addEventListener("click", function (event) {
     connection = new signalR.HubConnectionBuilder().withUrl("/songHub").build();

    document.getElementById("player").play();
    document.getElementById("player").pause();


    connection.on("Play", function () {
        document.getElementById("msg").innerText = '正在播放！';
        document.getElementById("player").currentTime = 1;
        document.getElementById("player").play();
        document.getElementById("player").currentTime = 1;

    });


    connection.on("Pause", function () {
        document.getElementById("msg").innerText = '已暂停播放！';
        document.getElementById("player").pause();
    });

    connection.start().then(function () {
        document.getElementById("msg").innerText = '连接成功！等待播放！';


    }).catch(function (err) {
        return console.error(err.toString());
    });

    event.preventDefault();
});