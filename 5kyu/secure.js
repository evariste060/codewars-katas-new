//https://www.codewars.com/kata/526dbd6c8c0eb53254000110/solutions/javascript?filter=me&sort=best_practice&invalids=false
function alphanumeric(string) {
  if (!string.length) return false

  return [...string].every(char =>
    (char >= 'a' && char <= 'z') ||
    (char >= 'A' && char <= 'Z') ||
    (char >= '0' && char <= '9')
  )
}