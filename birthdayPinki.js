function birthdayWish(name, callback) {
    console.log(`Happy Birthday ${name}!!`);
    callback(name);
  }
  
  function specialMessage(name) {
    console.log(`May your day be filled with love, laughter, and all your favorite things, ${name}!`);
}
  
birthdayWish("Pinki", specialMessage);