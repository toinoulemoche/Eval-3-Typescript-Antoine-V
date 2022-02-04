const container: HTMLElement | any = document.getElementById("app")

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const user = new Set();
  let html = "";
  data.forEach(articles => user.add(users))
  user.forEach( users => html += `<option>${user.name}</option>` )
  document.querySelector("app").innerHTML = html;
};

fetchUsers();
