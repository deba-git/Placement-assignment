let counter = 0;
const getData = () => {
  console.log("fetching data...." + counter++);
};

function debounceMethod(call, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      call();
    }, d);
  };
}
const betterFunction = debounceMethod(getData,1000);
