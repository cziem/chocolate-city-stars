import { TTweets } from "./types/tweet.type"
import { IActionProps } from "./interfaces/interfaces"
/**
 * insertItem
 * @params {Array}
 * @params action {Object}
 * @returns Array
 */
export function insertItem(array: TTweets[], action: IActionProps) {
  if (!Array.isArray(array)) {
    throw new Error(`Expected typeof Array but got ${typeof array}`)
  }

  let newArray = array.slice()
  newArray.splice(0, 0, action.payload)
  return newArray
}
