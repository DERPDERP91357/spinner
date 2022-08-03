let delay = 0;
const array = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let i = 0;
while (delay < 6000) {
  setTimeout(() => {
    process.stdout.write(array[i]);
    i ++;
    if(i === 4){
      i = 0;
    }
  }, delay);
  delay += 500;
};
setTimeout(() => {
  process.stdout.write("\n");
}, delay);


