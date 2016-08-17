var artikcloud = "https://api.artik.cloud/v1.1/messages";
var bearer = "Bearer INSERT_DEVICE_TOKEN_HERE";
var sdid = "INSERT_DEVICE_ID_HERE";

var serialport = require("serialport")
var SerialPort = serialport.SerialPort;
var sp = new SerialPort("/dev/ttyACM0", {
	baudrate: 9600,
	parser: serialport.parsers.readline("\n")
});

var Client = require("node-rest-client").Client;
var c = new Client();

function build_args (temp, ts) {

	var args = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": bearer 
		},  
		data: { 
    			"sdid": sdid,
			"ts": ts,
			"type": "message",
			"data": {
        			"temperature": temp
    			}
		}
	};
	return args;
}

sp.on("open", function () {
	sp.on('data', function(data) {
		var args = build_args(parseInt(data).toString(), new Date().valueOf());

		c.post(artikcloud, args, function(data, response) {            
			console.log(data);
        	});	    
	});
});

