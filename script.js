const imgs = document.querySelectorAll('.header-slider ul img')
// imgs contain one array that store all the img's in ul of header-slider class
// similarly for selecting the control buttons
const prev_btn = document.querySelector('.control-prev')
const next_btn = document.querySelector('.control-next')

let n=0;
// we are desplaying first img
function changeSlide(){
   // we have to hide all the images
   for (let i = 0; i < imgs.length; i++){
     // const element = array[index]; this will select each image and display none so... we do
      imgs[i].style.display = 'none'; //this specifically  selects all the images and then display noneof it
     // i.e removes all the imagwe from the page
     //but we need to display 1st img
   }
   imgs[n].style.display = 'block';
   // when n =0 displays 1st image and when n=1 it shows 2nd img
}

changeSlide();
prev_btn.addEventListener('click', (e)=>
   {
   if(n>0){
      n--;
   }else{
      n= imgs.length - 1;
   }//when we are on the 1st image and we click back botton the it will display the last image automatically due to --->  n= imgs.length - 1; 
   changeSlide();
   })

   next_btn.addEventListener('click', (e)=>
      {
      if(n< imgs.length - 1){
         n++;
      }else{
         n= 0;
      }//when we are on the 1st image and we click next botton then it will display the next image automatically
      changeSlide();
      })


      const scrollContainer = document.querySelectorAll('.product');
      //it will select all the div withe this class name product
      //i.e why we use querryselectorall
      for(const item of scrollContainer){
         item.addEventListener('wheel',(evt)=>{
            evt.preventDefault();
            item.scrollLeft += evt.deltaY;
         });
      }
      // products scroll horizontally on the use of the mouse