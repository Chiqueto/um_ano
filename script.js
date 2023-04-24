const btnsim =  document.getElementById('btnsim')
const btnnao = document.getElementById('btnnao')
let res = document.getElementById('res')
let c = 0

function mudapos(){
    if(c == 0 || c == 1){
        btnsim.style.visibility = 'hidden'
    }else{
        res.innerHTML = 'Que bom viu, porque vai ter que aguentar pro resto da sua vida, <a href="texto.html">vê aqui</a> o que tenho pra te falar, mas eu também sou muitooooo feliz por estar com você! Obrigado por tudo!'
        res.innerHTML += '<br>Mas antes de ver o textinho ouve a musica fazendo um favor, porque ela é para você'
        res.innerHTML += '<audio preload="auto" autoplay> <source src="midia/Jorge & Mateus - Menina Maluquinha.mp3" type="audio/mpeg"> </audio>'
        

    }
    
}

function clicknao(){
    if (c == 0){
        res.innerHTML = '<p>Você ta ficando louca!???</p>'
        res.innerHTML += 'Vou te dar mais uma chance hein gatinha<br> Tenta de novo!'
        btnsim.style.visibility = 'visible'
        c++
    }else if (c == 1){
        res.innerHTML = '<p>De novo???<br>Eu acho que você ainda não ta maluca né?<br> Vai lá, mais uma </p>'
        btnsim.style.visibility = 'visible'
        c++
    }else{
        res.innerHTML = 'Agora eu não deixo mais...'
        btnnao.style.visibility = 'hidden'
    }
}




const btnInico = document.getElementById("inicio")
const fotos = document.getElementById("fotos")
function inicio(){
    //btnInicio.addEventListener('click' fotos.classList.remove(''))
}


class SlideStories{
    constructor(id){
        this.slide = document.querySelector(`[data-slide="${id}"]`)
        this.active = 0
        this.init()
    }
    activeSlide(index){
        this.active = index
        this.items.forEach(item => item.classList.remove('active'))
        this.items[index].classList.add('active')
        this.thumbItems.forEach(item => item.classList.remove('active'))
        this.thumbItems[index].classList.add('active')
        this.autoSlide()
    }

    prev(){
        if(this.active > 0){
            this.activeSlide(this.active - 1)
        }else{
            this.activeSlide(this.items.length - 1)
        }   
    }
    next(){
        if(this.active < this.items.length - 1){
            this.activeSlide(this.active + 1)
        }else{
            this.activeSlide(0)
        }
    }

    addThumbItems(){
        this.items.forEach(() => (this.thumb.innerHTML += '<span></span>'))
        this.thumbItems = Array.from(this.thumb.children)
        console.log(this.thumbItems)
    }

    addNavigation(){
        const nextBtn = this.slide.querySelector('.slide-next')
        nextBtn.addEventListener('click', this.next)
        const prevBtn = this.slide.querySelector('.slide-prev')
        prevBtn.addEventListener('click', this.prev)
    }

    autoSlide(){
        clearTimeout(this.timeout) 
        this.timeout = setTimeout(this.next, 3000)
    }

    init(){
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.items =  this.slide.querySelectorAll('.slide-items > *')
        this.thumb = this.slide.querySelector('.slide-thumb')
        this.addThumbItems()
        this.activeSlide(0)
        this.addNavigation()
    }


}
new SlideStories('slide')




