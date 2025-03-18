//localStorage.clear()

login = []


function a(){
    const user = document.getElementById('user').value
    const pass = document.getElementById('password').value

    const h = localStorage.length

    login.push(user)
    login.push(pass)

    const c = 1 + h
    

    window.location.href = 'index.html';
    localStorage.setItem(c, JSON.stringify(login))
    
}


function ingresar(){

    const usuario = document.getElementById('user').value
    document.getElementById('user').value = ''
    const contra = document.getElementById('password').value
    document.getElementById('password').value = ''
    const p = document.getElementById('message')

    i = 0

    const pre = localStorage.length
    search = []
    
    for(i=0;i<pre;i++){
        search.push(i)
    }
    

  search.forEach(i => {
    i += 1
    const b = JSON.parse(localStorage.getItem(i))
    console.log(b[0])
    console.log(b[1])
  
    
    if(usuario == b[0] && contra == b[1]){
        window.location.href = 'login.html';
    }

    if(usuario=='' && contra==''){
        p.innerText = 'Coloca Algo en los Recuadros'
        p.style.backgroundColor = 'rgba(251, 255, 0, 0.41)';
        p.style.color = 'white';
        p.style.textAlign = 'center'
        p.style.fontFamily = 'cursive'
        p.style.padding = '10px';
        p.style.borderRadius= '15px'
    }
    else{
        p.innerText = 'Usuario o Clave invalida'
        p.style.backgroundColor = 'rgba(255, 0, 0, 0.41)';
        p.style.color = 'white';
        p.style.textAlign = 'center'
        p.style.fontFamily = 'cursive'
        p.style.padding = '10px';
        p.style.borderRadius= '15px'
        
    }    
    

  });
    
}

function register(){
    window.location.href = 'register.html';
}
function volver(){
    document.getElementById('logoutButton').addEventListener('click', function() {
        document.getElementById('confirmationModal').style.display = 'block';
    });
    
    document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('confirmationModal').style.display = 'none';
    });
    
    document.getElementById('confirmYes').addEventListener('click', function() {
        window.location.href = 'index.html';
        // Aquí puedes redirigir al usuario o cerrar sesión
        // window.location.href = "pagina_de_inicio.html";
        document.getElementById('confirmationModal').style.display = 'none';
    });
    
    document.getElementById('confirmNo').addEventListener('click', function() {
        document.getElementById('confirmationModal').style.display = 'none';
    });


    
        //window.location.href = 'index.html';}
   
}

valor= 1
precio = 0
doritos = 0
ajo = 0
limon = 0
especiales = 0

function buy1(){
    var a = document.getElementById('1').value
    if(a==""){
        precio+=35
        limon+=1
    }
    var tostones= valor
    var objetivo = document.getElementById('texto_nav1');
    objetivo.innerHTML = tostones;

    var costo = document.getElementById('precio');
    costo.innerHTML = precio + 'bs'
    if(true){
        valor+=1
        console.log(precio)
        //console.log(valor)
    }
}
function buy2(){
    var a = document.getElementById('2').value
    if(a==""){
        precio+=45
        ajo+=1
    }
    var tostones= valor
    var objetivo = document.getElementById('texto_nav1');
    objetivo.innerHTML = tostones;

    var costo = document.getElementById('precio');
    costo.innerHTML = precio + 'bs'

    if(true){
        valor+=1
        console.log(precio)
        //console.log(valor)
    }
}
function buy3(){
    var a = document.getElementById('3').value
    if(a==""){
        precio+=25
        especiales+=1
    }
    var tostones= valor
    var objetivo = document.getElementById('texto_nav1');
    objetivo.innerHTML = tostones;

    var costo = document.getElementById('precio');
    costo.innerHTML = precio + 'bs'

    if(true){
        valor+=1
        console.log(precio)
        //console.log(valor)
    }
}
function buy4(){
    var a = document.getElementById('4').value
    if(a==""){
        precio+=55
        doritos+=1
    }
    var tostones= valor
    var objetivo = document.getElementById('texto_nav1');
    objetivo.innerHTML = tostones;

    var costo = document.getElementById('precio');
    costo.innerHTML = precio + 'bs'

    if(true){
        valor+=1
        console.log(precio)
        //console.log(valor)
    }
}
function list(){
    namesl= 'hola'
    const table = document.getElementById('tabla');
    table.innerHTML = "";
    titles = ["Limon", "Ajo", "Especiales", "Doritos"];
    valores = [limon,ajo,especiales,doritos]
    price = ['Precio','Total: ',precio + 'Bs']

    const tablareal= document.createElement('table');

    const trla= document.createElement('tr');
    const trle= document.createElement('tr');
    const trli= document.createElement('tr');

    valores.forEach(numeros => {
        const celda = document.createElement('td');
        celda.textContent = numeros
        trle.appendChild(celda)
    });
    
    price.forEach(precio => {
        const celda1= document.createElement('td');
        celda1.textContent = precio
        trli.appendChild(celda1)
    });
    
    titles.forEach(valor => {
        const tdn = document.createElement('th');
        tdn.textContent = valor
        trla.appendChild(tdn);
    });
    tablareal.appendChild(trla);
    tablareal.appendChild(trle)
    tablareal.appendChild(trli)
    table.appendChild(tablareal);
    
}
function enviar(){
    const p = document.getElementById('compra')
    p.innerText = 'la cantidad de tostones es: ' + (valor-1) +' || '+ ' doritos: ' + doritos + ' || ' + ' ajo: ' + ajo + ' || ' + ' limon: ' + limon + ' || ' + ' especiales: ' + especiales + ' || ' + ' el costo es: ' + precio

}
