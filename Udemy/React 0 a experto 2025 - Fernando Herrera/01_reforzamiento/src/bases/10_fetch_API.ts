
import type { GiphyRandomResponse } from "../data/giphy.resp";

const API_KEY = '4SxgvKArB2ZWSyMAzQtbFd8nA0U290kV'
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

const createImgInDOM = (url : string) => {
const imgElement = document.createElement('img')
    imgElement.src = url
    document.body.append(imgElement)
}

myRequest
.then( resp => resp.json())
.then(({data}: GiphyRandomResponse)  => {

    const imageUrl = data.images.original.url;
    createImgInDOM(imageUrl)
})
.catch( err => {
    console.log(err)
})