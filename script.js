const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) //Escuta o evento 'click', callback add
form.addEventListener("change", save) //Escuta alterações no form, callback save

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,5)
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Esse dia já existe! ❌")
    return //return faz parar o código quando if == true;
  } else {
    alert("Adicionado com sucesso! ✔")
    nlwSetup.addDay(today)
  }
}

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)

nlwSetup.load()


/* const data = {
  run: ["01-01", "01-03", "01-05"],
  water: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-06", "01-07"],
  food: ["01-01", "01-02", "01-03", "01-04", "01-06"],
  gym: ["01-02", "01-04", "01-06"],
  guittar: ["01-01", "01-04", "01-07"]
}
*/

 
