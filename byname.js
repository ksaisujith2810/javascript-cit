var users=[];

function addData() {
var obj=[{}];
var username= document.getElementsByName('username')[0].value;
var password= document.getElementsByName('password')[0].value;
obj.username=username;
obj.password=password;
users.push (obj);
console.log(users); 
document.getElementsByName('username')[0].value = '';
document.getElementsByName('password')[0].value = '';

if(users.length>0){
    var table=document.createElement('table');
    table.setAttribute("border","1");
    table.innerHTML='<thead><tr><th>S.NO</th><th>UserName</th><th>Password</th></tr></thead>';
    var tbody =document.createElement('tbody');
    for(var i=0;i<users.length;i++){
        var tr = document.createElement('tr');
        tr.innerHTML = `<td>${i+1}</td><td>${users[i].username}</td><td>${users[i].password}</td>`;
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
}
}


