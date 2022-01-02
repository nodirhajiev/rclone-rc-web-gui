var guiVersion = "0.1.2";

var rcloneHost = "http://localhost";
var rclonePort = "5572";
var rcloneUser = "user";
var rclonePass = "password";

var asyncOperations = [
    "/sync/copy",
    "/sync/move",
    "/operations/purge",
    "/operations/copyfile",
    "/operations/movefile",
    "/operations/deletefile"
]

var remotes = {
    "someExampleRemote": {
        "startingFolder": "path/to/some/path/there",
        "canQueryDisk": true,
        "pathToQueryDisk": ""
    }
}

timerRefreshView = 2000;
timerProcessQueue = 5000;
