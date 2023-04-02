# Throttle-API-PoC
Implement a basic API throttling system from scratch, which serves HTTP(S) requests which  Normally serves the requested resource  throttles requests from a REFERRER when the number of requests exceeds X/sec, where X is configurable

# Configuration can be done from the .env file as follows.

=> PORT - application running port.
=> LIMIT - Number of requests allowed.
=> COOKIELIFE - Cookie validity time.

#  Calling the API 
The API is currently configured in 
http://localhost:3000/throttle/resluts

The result page of the API is designed to throttle for 3 (LIMIT )requests per sec(COOKIELIFE 6000Ms)
 Once the API throttles API ‘ll send  status of 429(Too many requests)along with a Retry-after header with a lock period info. 
 The traffic details can be observed in the logs 
 
