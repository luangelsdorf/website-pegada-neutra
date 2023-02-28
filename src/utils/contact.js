export async function onSubmit(data, e) {
  Array.from(e.target.elements).forEach(el => el.disabled = true);
  let selectedSubjects = [];
  for (let key in data.subject) {
    if (data.subject[key]) selectedSubjects.push(key);
  }
  let subjects = selectedSubjects.join(', ');
  let { name, business, phone, email } = data;

  await new Promise(r => setTimeout(r, 1000));

  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, business, phone, email, subjects }),
  }).then(res => {
    if (res.ok) {
      console.log('%cMensgaem enviada.', 'color: limegreen');
    } else {
      console.log('%cMensgaem não enviada.', 'color: tomato');
      console.log(res);
    }
  });
}