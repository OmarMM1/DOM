function validData() {
   var name = document.getElementById("name").value;
   var age = document.getElementById("age").value;
   var address = document.getElementById("address").value;
   var email = document.getElementById("email").value;

   if (name == "") {
       alert("Name is required");
       return false;
   }

   if (age == "") {
       alert("Age is required");
       return false;
   } else if (age < 14) {
       alert("Age must be greater than 14");
       return false;
   }

   if (address == "") {
       alert("Address is required");
       return false;
   }

   if (email == "") {
       alert("Email is required");
       return false;
   } else if (!email.includes("@")) {
       alert("Invalid Email");
       return false;
   }

   return true;
}

function showdata() {
   var users;
   if (localStorage.getItem("users") == null) {
       users = [];
   } else {
       users = JSON.parse(localStorage.getItem("users"));
   }

   var html = "";
   users.forEach(function (element, index) {
       html += "<tr>";
       html += "<td>" + element.name + "</td>";
       html += "<td>" + element.age + "</td>";
       html += "<td>" + element.address + "</td>";
       html += "<td>" + element.email + "</td>";
       html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button>';
       html += '<button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>';
       html += "</tr>";
   });

   document.querySelector("#crudtable tbody").innerHTML = html;
}

document.onload = showdata();

function AddData() {
   if (validData() == true) {
       var name = document.getElementById("name").value;
       var age = document.getElementById("age").value;
       var address = document.getElementById("address").value;
       var email = document.getElementById("email").value;
       var users;
       if (localStorage.getItem("users") == null) {
           users = [];
       } else {
           users = JSON.parse(localStorage.getItem("users"));
       }

       users.push({
           name: name,
           age: age,
           address: address,
           email: email
       });

       localStorage.setItem("users", JSON.stringify(users));
       showdata();

       document.getElementById("name").value = "";
       document.getElementById("age").value = "";
       document.getElementById("address").value = "";
       document.getElementById("email").value = "";
   }
}