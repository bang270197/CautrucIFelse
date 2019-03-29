let user =prompt("Who's there?" + " ");

if (user == 'admin')
{

let pass=prompt("Password?"+" ");
    if (pass == "themaster")
      {
             alert("welcome!" + user);
      } else if(pass == " ")
          {
             alert("Canceled");
          }else
              {
             alert("Wrong password")
              }
       }

else if(user == " ")
              {
             alert("Canceled");
              }else {
                alert("I don't know you")
                    }
