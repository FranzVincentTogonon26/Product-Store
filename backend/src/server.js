import express from 'express'

const app = express();

console.log('test here')
console.log('test two..')
console.log('test three')
console.log('test four')
console.log('test five')
console.log('test six')

app.listen( 8000, () => {
    console.log('Server is running on PORT: 8000')
})