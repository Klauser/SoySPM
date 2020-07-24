simplyCountdown('.countDown', {
    year: 2020, // required
    month: 8, // required
    day: 25, // required
    hours: 20, // Default is 0 [0-23] integer
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: 'DIA',
        hours: 'HORA',
        minutes: 'MINUTO',
        seconds: 'SEGUNDO',
        pluralLetter: 'S'
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC as default
    onEnd: function() { return; }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});

simplyCountdown('.countDown2', {
  year: 2020, // required
  month: 8, // required
  day: 25, // required
  hours: 20, // Default is 0 [0-23] integer
  minutes: 0, // Default is 0 [0-59] integer
  seconds: 0, // Default is 0 [0-59] integer
  words: { //words displayed into the countdown
      days: 'DIA',
      hours: 'HORA',
      minutes: 'MINUTO',
      seconds: 'SEGUNDO',
      pluralLetter: 'S'
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: true, //Use UTC as default
  onEnd: function() { return; }, //Callback on countdown end, put your own function here
  refresh: 1000, // default refresh every 1s
  sectionClass: 'simply-section2', //section css class
  amountClass: 'simply-amount2', // amount css class
  wordClass: 'simply-word2', // word css class
  zeroPad: false,
  countUp: false
});

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems, options);
//   });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });




//   $('.carousel.carousel-slider').carousel({
//     fullWidth: true,
//     indicators: true
//   });
        
       
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true
//   sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
});