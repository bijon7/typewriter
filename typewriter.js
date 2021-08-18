const sentence = "hello there from lighthouse labs";

for (const pos in sentence) {
  const char = sentence[pos];
  setTimeout(()=> {process.stdout.write(char);}, pos * 50);
  
}
console.log('\n');