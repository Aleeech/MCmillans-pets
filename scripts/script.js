document.getElementById('hanburger').addEventListener("click", _ => {
  document.body.classList.toggle('nav-open')
})
window.onscroll = () => {
  if(window.scrollY > 405){
    document.getElementById('arrow-up').classList.add('active-up')
  }else{
    document.getElementById('arrow-up').classList.remove('active-up')
  }
}