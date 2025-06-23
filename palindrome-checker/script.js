const input = document.getElementById('text-input')
const checkBtn = document.getElementById('check-btn')
const result = document.getElementById('result')

checkBtn.addEventListener("click", () => {
  const text = input.value
  const cleanText = text.replace(/[^0-9a-z]/gi, '')
  const reverseText = cleanText.split('').reverse().join('')
  
  if (text === '') {
    alert('Please input a value')
  } else if (text.length === 1){
    result.textContent = `${text} is a palindrome`
  } else if (cleanText.toLowerCase() === reverseText.toLowerCase()) {
    result.textContent = `${text} is a palindrome`
  } else {
    result.textContent = `${text} is not a palindrome`
  }
})
