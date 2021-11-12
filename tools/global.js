import { RandomNumberInterval } from "./showcase"

export function generateRamdomPosition (width, height) {
    const result = {}
    const positionX = result.positionX = RandomNumberInterval(0, Number(width))
    const positionY = result.positionY = RandomNumberInterval(0, Number(height))
    console.log(result);
    return result
}