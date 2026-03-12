import express from 'express'

const app = express();

console.log('test here')
console.log('test two..')

app.listen( 8000, () => {
    console.log('Server is running on PORT: 8000')
})