/* 
 * modified from http://www.voidware.com/moon_phase.htm 
 */
// Original Snippet: https://gist.github.com/endel/dfe6bb2fbe679781948c @charlag

window.onload = whatMoon;
window.onload = insertDate;


var Moon = {
  phases: ['new-moon', 'waxing-crescent-moon', 'quarter-moon', 'waxing-gibbous-moon', 'full-moon', 'waning-gibbous-moon', 'last-quarter-moon', 'waning-crescent-moon'],
  phase: function (year, month, day) {
    let c = e = jd = b = 0;

    if (month < 3) {
      year--;
      month += 12;
    }

    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09; // jd is total days elapsed
    jd /= 29.5305882; // divide by the moon cycle
    b = parseInt(jd); // int(jd) -> b, take integer part of jd
    jd -= b; // subtract integer part to leave fractional part of original jd
    b = Math.round(jd * 8); // scale fraction from 0-8 and round

    if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0
    return {phase: b, name: Moon.phases[b]};
  }
};

var today = new Date();

function whatMoon() {
  console.log(Moon)
  console.log(today);
}

function insertDate() {
  document.getElementById('moonDiv').innerHTML = today;
}


//var today = new Date();
//var phase = Moon.phase(today.getFullYear(), today.getMonth()+1, today.getDate());


// Moon.phase('2018', '01', '19'); */