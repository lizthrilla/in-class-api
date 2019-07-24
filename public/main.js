const jokeButton = document.querySelector('button#get-joke')

const beerButton = document.querySelector('button#get-beer')

// curl https://api.punkapi.com/v2/beers?beer_name="penguin"

const onClick = () => {
  console.log('Get Joke')
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => {
      return response.json()
    })
    .then(json => {
      console.log(json.id)
      document.querySelector('h1.hello-world').textContent = json.setup
      document.querySelector('h3.punchline').textContent = json.punchline
    })
}

const getBeer = () => {
  console.log('get me a beer, please')
  fetch("https://api.punkapi.com/v2/beers/random")
    .then(beer => {
      return beer.json()
    })
    .then(beerJson => {
      console.log(beerJson[0])
      const beer = beerJson[0]
      console.log(beer.name)
      document.querySelector('h2.beer-name').textContent = beer.name
      document.querySelector('p.beer-description').textContent = beer.description
      document.querySelector('h3.beer-tagline').textContent = beer.tagline
      console.log(beer.image_url)

      const beerImage = beer.image_url
      console.log(beerImage)
      document.querySelector('.beer-image').src = beerImage
    })
}

const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }

  jokeButton.addEventListener('click', onClick)
  beerButton.addEventListener('click', getBeer)
}

document.addEventListener('DOMContentLoaded', main)
