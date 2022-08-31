const alarms = process.argv.slice(2);
function timer(beeps) {
  if (beeps.length === 0) {
    throw Error("Empty");
  }
  for (const beep of beeps) {
    const beepToNumber = Number(beep);
    if (beepToNumber > 0)
      setTimeout(() => {
        process.stdout.write("\x07");
      }, beepToNumber * 1000);
  }
}
timer(alarms);
