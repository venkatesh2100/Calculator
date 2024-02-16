let input=document.getElementById('input-box');
//Usage of button
let buttons=document.querySelectorAll('button');
let string="";//creating a null a string  for manipulating the Input
let arr=Array.from(buttons);//Input is stored in the Array 

arr.forEach(button=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
      string=eval(string);
      input.value=string;
    }else if(e.target.innerHTML=='AC'){
      string="";
      input.value=string;
    }else if(e.target.innerHTML=='DEL'){
      string=string.substring(0,string.length-1);
      input.value=string;
    }else{
      string+=e.target.innerHTML;
      input.value=string;
    }
  })
})
