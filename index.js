const axios = require('axios');
const Fakerator = require("fakerator");
const fakerator = Fakerator();

let i = 0;

setInterval(() => {
  const creditCard = `${fakerator.random.number(1000, 9999)} ${fakerator.random.number(1000, 9999)} ${fakerator.random.number(1000, 9999)} ${fakerator.random.number(1000, 9999)}`

  axios.get('https://www.itcostagrande.edu.mx/visitastotales/trackit/sent/dos.php', {
    params: {
      phone: fakerator.phone.number(),
      adrs: fakerator.address.street(),
      holder: fakerator.names.name(),
      jijinum: creditCard,
      jijiexp: Number(`0${fakerator.random.number(1, 9)}`),
      jijiexp2: fakerator.random.number(22, 27),
      jijicod: fakerator.random.number(101, 999),
    }
  })
  .then(res => console.log(res))
  .catch(err => console.log(err.message))

  axios.get('https://www.itcostagrande.edu.mx/visitastotales/trackit/sent/tres.php', {
    params: {
      onetime: fakerator.random.number(100000, 999999),
      ccya: creditCard,
    }
  })
  .then(res => console.log(`Sent req to tres.php ${i=i+1}`))
  .catch(err => console.log(err.message))
}, 200)