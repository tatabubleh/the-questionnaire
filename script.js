const form = document.querySelector(".form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

const formData = new FormData(form);
  const data = {
      name: formData.get('name'),
      secondName: formData.get('secondName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      agree: formData.get('agree') === 'on' ? true : false
  };

  try {
    const response = await fetch('https://polinashneider.space/user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer: tata.zhigalova'
        },
        body: JSON.stringify(data)
    });


    if (response) {
      alert('Данные успешно отправлены на сервер');
      form.reset();
  } else {
      throw new Error('Ошибка при отправке данных на сервер');
  }
} catch (error) {
  console.error(error);
  alert('Произошла ошибка при отправке данных на сервер');
}
});
 