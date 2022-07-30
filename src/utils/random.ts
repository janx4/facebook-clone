export function randomLargeNumber(): number {
    return Math.round(new Date().getTime() * Math.random());
}
