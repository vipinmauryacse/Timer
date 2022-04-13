const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Auguest",
    "September",
    "October",
    "November",
    "December",
  ];
  
  const eventText = document.querySelector(".event_text");
  const countDownNums = document.querySelectorAll(".countdown_box h4");
  const countDownBox = document.querySelector(".countdown_box");
  const buttons = document.querySelectorAll(".btn");
  
  // event date
  //const eventDateObj = new Date(2021, 4, 25, 8, 48, 00);
  const twoDaysTime = 24 * 2 * 60 * 60 * 1000;
  const eventTime = new Date().getTime() + twoDaysTime; // current time + 2days
  const eventDateObj = new Date(eventTime);
  
  const eventDay = eventDateObj.getDay();
  const eventDate = eventDateObj.getDate();
  const eventMonth = eventDateObj.getMonth();
  const eventYear = eventDateObj.getFullYear();
  const eventHours = eventDateObj.getHours();
  const eventMins = eventDateObj.getMinutes();
  
  eventText.textContent = `This Product will be available on ${days[eventDay]}, ${eventDate} ${months[eventMonth]} ${eventYear} at ${eventHours}:${eventMins}`;
  
  // number format function
  const numFormat = (num) => (num < 10 ? `0${num}` : num);
  
  // getcountdown function
  
  function getCountDown() {
    const eTime = eventDateObj.getTime();
    const currentTime = new Date().getTime();
    const timeDiff = eTime - currentTime;
    /**
     *  1s = 1000
     *  1m = 60s
     *  1h = 60m
     *  1d = 24h
     */
  
    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
  
    const remDays = Math.floor(timeDiff / oneDay);
    const remHours = Math.floor((timeDiff % oneDay) / oneHour);
    const remMins = Math.floor((timeDiff % oneHour) / oneMinute);
    const remSecs = Math.floor((timeDiff % oneMinute) / oneSecond);
  
    const timeValue = [remDays, remHours, remMins, remSecs];
    countDownNums.forEach((numBox, index) => {
      numBox.textContent = numFormat(timeValue[index]);
    });
  
    if (timeDiff < 0) {
      clearInterval(countdown);
      countDownBox.style.display = "none";
      eventText.textContent = `Sale is live now.`;
      buttons.forEach((btn) => {
        btn.classList.remove("btn_disabled");
      });
    }
  }
  
  let countdown = setInterval(getCountDown, 1000);
  //getCountDown();