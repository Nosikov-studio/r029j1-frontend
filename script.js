

//************************************************************************* */
const form1 = document.getElementById('form1');
const secretField = document.getElementById('secretField');
  form1.addEventListener('submit', function(event) {
    event.preventDefault();

  const formData = new FormData(form1); // Сбор данных формы
  const FormDataObject = Object.fromEntries(formData);

  fetch('http://85.28.47.165:40444/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      },
    body: JSON.stringify({
      ...FormDataObject,
      views: 0,
    }),
  credentials: 'include', //чтобы браузер принял куки от сервера и отправлял их в последующих запросах
  })
    .then(response => response.json())
    .then(j => {
      console.log(j);          
    secretField.style.display = 'block';      // Показываем скрытое поле
    secretField.textContent = j.message;
      form1.reset(); // очищаем форму
    });
  });

