 $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
  })

  const btn = document.getElementById("btn");
  btn.addEventListener("click",function (){
    alert("El correo ha sido enviado correctamente...")
  });

  const titulo_1 = document.getElementById("titulo_1")
  titulo_1.addEventListener("dblclick",function(){
    document.getElementById("titulo_1").style.color = "#dc3545";
  });

  const titulo_2 = document.getElementById("titulo_2")
  titulo_2.addEventListener("dblclick",function(){
    document.getElementById("titulo_2").style.color = "#dc3545";
  });
