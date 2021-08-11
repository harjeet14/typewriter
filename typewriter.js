const sentence = "hello there from lighthouse labs";
let time = 0;
let counter = 0;

for (let index = 0; index < sentence.length; index++) {
  const element = sentence[index];
  setTimeout(() => {
    process.stdout.write(element)
    if (index === sentence.length - 1) {
      console.log('\n');

    };
  }, time);

  time += 50;
}


