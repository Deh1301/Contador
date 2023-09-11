var txt = document.querySelector('.texto')
txt.style.textAlign = 'center'
let num = 0
let interval

function mudancaTexto(){
        if(num >= 10){
            txt.style.backgroundColor = 'skyblue'
            txt.style.fontFamily = 'Segoe UI'
            txt.style.borderRadius = '100px 0'

        } 
        
        if(num >= 20){
            txt.style.backgroundColor = 'red'
            txt.style.fontFamily = 'Segoe UI'
            txt.style.fontWeight = 'bold'
            txt.style.color = 'white'
            txt.style.borderRadius = '0 100px'

        } 
        
        if(num >= 30){
            txt.style.backgroundColor = 'yellow'
            txt.style.fontFamily = 'Segoe UI'
            txt.style.fontWeight = 'lighter'
            txt.style.color = 'black'
            txt.style.borderRadius = '500px'

            
        }

        if(num >= 40){
            txt.style.backgroundColor = 'green'
            txt.style.color = 'black'
            txt.style.borderRadius = '500px 0'

        }

        if(num >= 50){
            
            
            txt.style.backgroundColor = 'black'
            txt.style.color = 'white'
            txt.style.borderRadius = '100px 300px'
            clearInterval(interval)
            
        }

        
    }

interval = setInterval(()=>{
    mudancaTexto()

    txt.innerText = `Contando: ${num}`
    txt.style.display = 'flex'
    txt.style.alignItems = 'center'
    txt.style.justifyContent = 'center'
    txt.style.height = '50vh'
    txt.style.marginTop = '150px'
    
    

    num++
},500)