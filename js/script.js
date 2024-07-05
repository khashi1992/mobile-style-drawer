const item=document.querySelectorAll('.item');
const result=document.querySelector('.result');
const ul=document.querySelector('#ul li .img');
const leftsidebar=document.querySelector('.leftsidebar');
const rigthsidebar=document.querySelector('.rigthsidebar');
// console.log(ul);

function func(){
   
    item.forEach((index,value)=>{
        // console.log(index); 
        // console.log(value); 
        index.addEventListener('click',function(e){
        //  console.log(index.getAttribute('style'));
         let s=index.getAttribute('style');
         result.setAttribute('style',`${s}`);
     });      
})
    
}
func();
ul.addEventListener('click',(e)=>{
    leftsidebar.classList.toggle('wid');
    rigthsidebar.classList.toggle('filter');
});


