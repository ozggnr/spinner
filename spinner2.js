process.stdout.write('hello from spinner1.js... \rheyyy\n');
let char = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ','   \n'];
let tim = 100;
for (let obj of char) {
  setTimeout(() => {
    process.stdout.write(obj);
  }, tim);
  tim += 200;
}



