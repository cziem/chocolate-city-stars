# Chocolate City All Stars

> N/B: This project is bootstrapped with CRA

## Algorithm Challenge

Write a simple and efficientJavascript program that returns the smallest non-occurring integer in a given Array.

`E.g: Given an Array1 = [1,3,6,4,1,2] returns 5, and Array2 = [5, -1, -3] returns 1`

```js
const findSmallestNonRecurringNumber = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error(`Expected an Array but got type of ${typeof arr}`)
  }

  let smallestNum = Math.min(...arr)
  let sortedArr = arr.sort((a, b) => a - b)

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (Math.sign(smallestNum) === -1) {
      smallestNum++
    }
    if (smallestNum + 1 === sortedArr[i + 1]) {
      smallestNum++
    } else if (smallestNum + 1 < sortedArr[i + 1]) {
      return smallestNum + 1
    }
  }
}

console.log(findSmallestNonRecurringNumber([1, 3, 6, 4, 1, 2])) // Expected output 5
console.log(findSmallestNonRecurringNumber([1, 3, 6, 4, 1, 2, 5, 8])) // Expected output 7
console.log(findSmallestNonRecurringNumber([11, 30, 16, 44, 10, 23, 5, 18])) // Expected output 6
console.log(findSmallestNonRecurringNumber([5, -1, -3])) // Expected output 1
```

## How to setup `ChocityStar`

- Clone the repository
- `cd 'chocolate-city-stars'` and run `npm install`
- After installations, run `npm start` to start the application on `http://localhost:3000`

The application opens with a list of the **ChocityStars** and allows you to interact with it. You can see the artiste's albums or read more about each artiste from the Artiste's Card.

### The Album Page

This page shows all the albums for an artist, the `see photos` button allows you to detailed photograph of each album.

### The Tweet Page

Tweet page is built for communication, helps artiste's keep in touch and engage their audience. There's a floating button that ensures it's easy to create new tweets regardless of how deep into the conversation you are. You can also `update` or `delete` a tweet.

## Road Map

In the next product release, **ChocityStars** will enable `authentication` and `authorization` protocols to protect you our dear user and ensure you are in control of your data.
