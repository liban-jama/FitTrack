# FitTrack

![pic1](https://github.com/liban-jama/FitTrack/blob/main/img/pic1.png)
![pic2](https://github.com/liban-jama/FitTrack/blob/main/img/pic2.png)
![pic3](https://github.com/liban-jama/FitTrack/blob/main/img/pic3.png)


How to run:

- Clone this repository or fork it.
  - To clone this repository type `git clone https://github.com/liban-jama/FitTrack.git` on your command line
  - To fork this repository, click fork button of this repository then type `git clone https://github.com/<your username>/FitTrack.git`
  
- Inside `server` folder, create a new file named `.env` which stores informations about server side such as your `MONGO_URI` and `PORT` information
  
  - store your database URI inside `MONGO_URI` variable
  - store the port you will run it on inside `PORT` variable

  
  - example:
  ```
  PORT = 5000

  MONGO_URI = mongodb+srv://realadmin:asdgjnjjoakdsgjgasda@cluster.asjg43jn.mongodb.net/?retryWrites=true&w=majority
  ```

- Install all dependencies

  - Client side: on the `client` directory type `npm install`(or `yarn`)
  - Server side: on the `server` directory type `npm install`(or `yarn`)

- Run it on node js:
  - Client side: on the `client` directory type `npm run start` (or `yarn`)
  - Server side: on the `server` directory type `nodemon server.js` (or `yarn`)
