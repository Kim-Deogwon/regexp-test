const str = `
010-1234-5678
thesecond@gmail.com
https://www.obdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

//const regexp  = new RegExp('the', 'gi')
const regexp = /fox/gi
console.log(regexp.test(str))