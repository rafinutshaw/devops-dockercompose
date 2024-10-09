Service1 is a nodejs service and service2 is a flask service.
Service1 communicates with service2 and gets reelvent information from it. service1 outputs both of the services information.

Steps to run the app
- $ docker-compose up –-build
… wait for 10s
$ curl localhost:8199
$ docker-compose down


The outshould be similar to this:
{
  "Service1": {
    "ip_address": "172.19.0.3",
    "processes": [
      "PID TTY          TIME CMD",
      "    1 ?        00:00:00 npm",
      "   18 ?        00:00:00 sh",
      "   19 ?        00:00:00 node",
      "   36 ?        00:00:00 sh",
      "   37 ?        00:00:00 ps"
    ],
    "disk_space": "51.18 GB",
    "uptime": "11:41"
  },
  "Service2": {
    "disk_space": "51.18 GB",
    "ip_address": "172.19.0.2",
    "processes": [
      "PID   USER     TIME  COMMAND",
      "    1 root      0:01 python main.py",
      "   10 root      0:00 ps"
    ],
    "uptime": "11:41"
  }
}
