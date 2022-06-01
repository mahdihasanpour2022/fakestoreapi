export const shortener2 = (data) => {
  return `${data.split(" ").slice(0, 2).join(" ")} ...`
}
export const shortener5 = (data) => {
  return `${data.split(" ").slice(0, 5).join(" ")} ...`
}
export const shortener10 = (data) => {
  return `${data.split(" ").slice(0, 10).join(" ")} ...`
}
export const shortener20 = (data) => {
  return `${data.split(" ").slice(0, 20).join(" ")} ...`
}