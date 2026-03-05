function format(value: string): string;
function format(value: boolean): string;
function format(value: number): number;
function format<T>(value: T): T|string {
  if (typeof value === 'string') {
    return value.toUpperCase()
  } else if (typeof value === 'number') {
    return value.toFixed(2);
  } else {
    return "";
  }
}

console.log(format(true));
console.log(format("Hello"))
console.log(format(33))