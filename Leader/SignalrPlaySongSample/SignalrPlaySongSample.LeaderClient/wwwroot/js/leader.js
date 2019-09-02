
document.getElementById("play").addEventListener("click", function (event) {
    connection.invoke("RequestPlay", 0).catch(function (err) {
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


document.getElementById("jump").addEventListener("click", function (event) {
    //同步到和当前播放器相同的进度
    //TODO:同步歌词
    var currentTime = parseInt(document.getElementById("player").currentTime);
    connection.invoke("RequestPlay", currentTime).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
});
