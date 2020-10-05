# protractor-browsermob-automation

Using Protractor and Browsermob, record and automate the network calls of any webapp using exported performance data as [HAR file](http://www.softwareishard.com/blog/har-12-spec/).

It also creates separate ``.json`` files for new page clicked/opened. This ``.json`` files consists the network calls recorded specific to that page with below mentioned parameters.

E.g -

```
  {
    "url": "https://www.rahulshettyacademy.com/angularpractice/polyfills.b6b2cd0d4c472ac3ac12.bundle.js",
    "method": "GET",
    "responseStatus": 200,
    "startTime": 1852,
    "endTime": 96,
    "waterfallDetail": "1852 - series with 1852"
  },
  ```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Follow below mentioned steps to run BrowserMob proxy:

1. Download [BrowserMob](https://bmp.lightbody.net/).

2. Go to the bin directory in the extracted folder and run the following command on Terminal/Console to start the REST API:

```
./browsermob-proxy -port 8080
```
3. Now create a proxy server instance by running the following cURL command on Terminal/Console:

```
curl -X POST http://localhost:8080/proxy
```
 This will print - 

```
{"port":8081}
```
This is the port of the newly-created proxy instance, so configure your HTTP client or web browser to use a proxy on the returned port.
Update this port in project under ``protractor.conf.js`` file.


4. If trying to record network calls for [HTTPS](https://en.wikipedia.org/wiki/HTTPS) webapp using BrowserMob proxy, need to add the https certificates on your machine.

Go to ssl-support directory in the extracted folder and add below mentioned certificates on your machine:

```
ca-certificate-ec.cer
ca-certificate-rsa.cer
```

Also, mark this certificate as trusted!


### Installing

* Get dependencies:

```
npm install 
```

* Update Selenium Server:

```
npm run postinstall
```

* Now start up a server with:

```
npm run driverstart
```

* Run the project:

```
npm run test
```



## Acknowledgments

* http://bmp.lightbody.net/
* https://toolbox.googleapps.com/apps/har_analyzer/
* https://www.browserstack.com/ -- For Cross Browser Testing
