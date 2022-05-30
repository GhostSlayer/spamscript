const axios = require('axios');
const Fakerator = require("fakerator");
const fakerator = Fakerator();

let i = 0;

setInterval(() => {
  const creditCard = fakerator.date.age(1000000000000000, 9999999999999999)

  axios.post('https://www.itcostagrande.edu.mx/visitastotales/trackit/sent/dos.php', {
    'phone': fakerator.phone.number(),
    'adrs': fakerator.address.street(),
    'holder': fakerator.names.name(),
    'jijinum': creditCard,
    'jijiexp': fakerator.date.age(10, 12),
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