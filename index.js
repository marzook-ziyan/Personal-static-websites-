function sendmail(){
    var params ={
        name:document.getElementById("name").value,
        place:document.getElementById("place").value,
        email:document.getElementById("email").value,
        mobail:document.getElementById("mobail").value,
        message:document.getElementById("message").value,
    };
    
   const serviceID ="service_z41w5ux";
   const templateID ="template_35h6ade";
   
   emailjs.send(serviceID,templateID,params)
   .then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("place").value ="";
        document.getElementById("email").value ="";
        document.getElementById("mobail").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        alert("your message send successfully");
    })
   .catch((err)=>console.log(err));
}
