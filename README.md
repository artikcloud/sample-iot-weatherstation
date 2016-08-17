# Make an IoT Weather Station with ARTIK Cloud

Let's build a weather station that sends temperature sensor data to ARTIK Cloud using REST. The IoT device consists of an off-the-shelf sensor, Arduino UNO and Raspberry Pi.

Introduction
-------------

The blog post [Make an IoT Weather Station with ARTIK Cloud](TODO by ryan link to the blog post) at https://www.artik.io/blog/cloud/ describes what the system does and how it is implemented.

This repository contains the following software:

 - A Sketch program running on the Arduino
 - A Node.js script running on the Raspberry Pi

Sketch Program for Arduino
-------------

The code is located in `dht11` directory. Consult [Set up the Arduino and the temperature sensor](TODO by ryan link to the blog post#set-up-the-Arduino-and-the-temperature-sensor) in the tutorial to install the packages and to run the program on the Pi.

Nodejs Program for Raspberry Pi
-------------

The code is located in root directory. Consult [Set up the Raspberry Pi](TODO by ryan link to the blog post#set-up-the-raspberry-pi) in the tutorial to install the packages and to run the program on the Pi.

More about ARTIK Cloud
---------------

If you are not familiar with ARTIK Cloud, we have extensive documentation at https://developer.artik.cloud/documentation

The full ARTIK Cloud API specification can be found at https://developer.artik.cloud/documentation/api-reference/

Peek into advanced sample applications at https://developer.artik.cloud/documentation/samples/

To create and manage your services and devices on ARTIK Cloud, visit the Developer Dashboard at https://developer.artik.cloud

License and Copyright
---------------------

Licensed under the Apache License. See [LICENSE](https://github.com/artikcloud/sample-iot-weatherstation/blob/master/LICENSE).

Copyright (c) 2016 Samsung Electronics Co., Ltd.
