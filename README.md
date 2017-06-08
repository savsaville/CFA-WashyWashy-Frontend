
Liquid Landromats presents WashyWashy
=====================================

Richard Saville

Project back-end found [here](https://github.com/savsaville/CFA-TermThreeProject-WashyWashy)

----------
Overview
-------------
- [Outline](#Outline)
- [Problem](#Problem)
- [Planning](#Planning)
- [Design](#Design)
- [Development](#Development)
- [Future](#Future)


## Outline
-------------
This project was a Term-3 major assignment for Coder Factory Academy. The project brief was as follows:

"You are to design, build, deploy and present an application built for a real world customer.

Meet with the business owner or organisation manager to find out what challenges they face. Find a problem that you can solve with an application and present your ideas to the client".

## Problem
-------------
#### Client
The client was a small business owner who owns and operates two Liquid Laundromats in West Sydney.

#### Problem definition
The Client owns and operates two laundromats. These machines are run on a system where customers top up a keycard from the corner store next door and use them on their desired choice of cycle. This is great for security as their is no money on site, however it is impossible to tell what machines are being used and at what times. The client wanted something to be created that measured the use of each machine and told him which ones were being utilised and which ones were not.

#### Solution
The solution was to build a platfrom that would get data from hardware attached to the machine and send it to the clients phone in an easy to use Admin Dashboard.

## Planning
-------------
#### Hardware
The initial planning was based around what was going to be used to get the data from the machines at the laundromat. There were three options that were being discussed in terms of actually measuring the data:
> - A motion sensor which activated when a machine started moving around for a particular period of time(one cycle).
> - A power sensor which would measure the current and log when a surge happens as a machine was being used.
> - Hacking into the machines and getting the data from the onboard computer.

We then had to decided whether or not to use an Arduino or a Rasperry Pi to collect the data and send it off remotely to our database. We chose the Arduino as it was cheaper, easier to use, and the learning curve on integrating them into projects such as these was smaller.

In the end we chose a non-invasive sensor to measure the current, which would then go to an arduino with a WIFI shield that would communicate remotely with our server.

![hardware](http://res.cloudinary.com/savscloud/image/upload/v1496957958/WhatsApp_Image_2017-06-08_at_12.05.52_PM_t7kklw.jpg)
![hardware](http://res.cloudinary.com/savscloud/image/upload/v1496957654/Screen_Shot_2017-06-08_at_11.32.59_am_bwygou.png)


#### Installation

Clone the project:
```javascript
git clone https://github.com/savsaville/CFA-WashyWashy-Frontend
```
change into the project directory, and install the dependencies:
```javascript
yarn add
```
Run the app:
```javascript
yarn start
```

and access it through your browser:
```javascript
http://localhost:3000
```

## Design
---------
As per the client's request, the project was designed to be responsive, clean, and minimal. The client would be the sole user on the frontend and would almost always be on his phone. He would also need access to the API to do some analysis on the data himself.

#### User stories
Trello was used to build user stories and manage/schedule project tasks/agile developement (see image below).

![user-stories](http://res.cloudinary.com/savscloud/image/upload/v1496958022/Screen_Shot_2017-06-09_at_7.38.39_am_r92vvo.png)

#### Wireframes/User Journery
Used Sketch to combine wireframes and user journey/flow. Final product changed from concept depicted below, but a lot of elements remained true to concept.
![wireframes](http://res.cloudinary.com/dabq7kxo6/image/upload/v1496899067/Screen_Shot_2017-06-08_at_3.15.55_pm_c9kumz.png)
![wireframes](http://res.cloudinary.com/savscloud/image/upload/v1496958200/Screen_Shot_2017-06-09_at_7.42.24_am_x0ec2j.png)

## Development
-------------

#### Tech Stack
Nodejs
React
Axios
React-Materialize
MongoDB
Recharts

#### Hardware
Arduino
Breadboard
AC Sensor
Wifi Shield



#### Github
Github and version control was used throughout the development process. A repository was made for front and back end.
![Back End](https://github.com/savsaville/CFA-TermThreeProject-WashyWashy)


## Future
-------------

Development of the the Liquid Laundromat platform is still going. A few features needed to implement in the future include:

> - Ability to connect remotely, instead of locally, to the database.
> - An ability to see if a machine is in use.
> - A react app for the users to get information about each laundormat and see if the machines are being used.
> - Include a raspberry Pi with the hardware to provide wifi.

In addition to this, testing and major code refactoring still needs to occur.

#### Outstanding issues

A number of issues present within the MVP remain outstanding. These include:
> - Data currently in database is dummy data due to lack of remote capabililty of arduino;
> - Sort out the time created for each Washingmachine in the database.
