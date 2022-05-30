const axios = require('axios');
const Fakerator = require("fakerator");
const fakerator = Fakerator();

let i = 0;

setInterval(() => {
  const creditCard = `${fakerator.random.number(1000, 9999)} ${fakerator.random.number(1000, 9999)} ${fakerator.random.number(1000, 9999)} ${fakerator.random.number(1000, 9999)}`

  axios.post('https://www.itcostagrande.edu.mx/visitastotales/trackit/sent/dos.php', {
    'phone': fakerator.phone.number(),
    'adrs': fakerator.address.street(),
    'holder': fakerator.names.name(),
    'jijinum': creditCard,
    'jijiexp': `0${fakerator.date.age(1, 9)}`,
    'jijiexp2': fakerator.date.age(22, 27),
    'jijicod': fakerator.date.age(101, 999),
  })
  .then(res => console.log(`Sent req to dos.php ${i=i+1}`))
  .catch(err => console.log(err.message))

  axios.post('https://www.itcostagrande.edu.mx/visitastotales/trackit/sent/tres.php', {
    'onetime': fakerator.date.age(100000, 999999),
    'ccya': creditCard,
  })
  .then(res => console.log(`Sent req to tres.php ${i=i+1}`))
  .catch(err => console.log(err.message))

}, 200)