# timestamp-microservice
## a timestamp microservice API for Freecodecamp backend certification
---
This API will return a JSON object containing both the UNIX time in milliseconds and a formatted date string.

You can use this API by going to the website and using an argument after the final "/".

If you have a number for the argument, then you will receive that same number back along with the date string corresponding to that number of milliseconds.

If you have a date string for the argument, then you will receive that date string back along with the number of milliseconds it was at 00:00:00 UTC on that day.

If you have "now" as the argument, you will receive the number of milliseconds and the date string for right now.

If your argument is neither of the above things, you will receive "null" as your JSON response.
