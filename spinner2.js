const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ']

let delay = 1;

for(const ele of spinner){
    setTimeout(() => {
        process.stdout.write(ele)
    }, delay * 200)
    delay += 1;
};
setTimeout(() => {
    process.stdout.write('\n');
}, 1800);