const cardContainer = document.querySelector('.card')
const thankYouContainer = document.querySelector('.thank-you--card')
const submitBtn = document.getElementById('submit')
const rateAgain = document.getElementById('rate-again')
const rating = document.getElementById('rating')
const rates = document.querySelectorAll('.btn')

submitBtn.addEventListener('click', () => {
  thankYouContainer.classList.remove('hidden')
  cardContainer.style.display = 'none'
})

rateAgain.addEventListener('click', () => {
  thankYouContainer.classList.add('hidden')
  cardContainer.style.display = 'block'
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})