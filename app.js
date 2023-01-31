
const handleSubmit = (event) => {
    event.preventDefault()
    
    const name  = document.querySelector('input[name=nome]').value
    const userName  = document.querySelector('input[name=username]').value
    const email  = document.querySelector('input[name=email]').value
    const telefone  = document.querySelector('input[name=telefone]').value
    const senha = document.querySelector('input[name=password]').value
    const confirmSenha  = document.querySelector('input[name=password]').value
    const sexoM = document.querySelector('input[name=sexo]').value
    const sexoF = document.querySelector('input[name=sexo]').value
    const sexoOutro = document.querySelector('input[name=sexo]').value

    

    fetch('https://api.sheetmonkey.io/form/3svB3nPhBTFZMVPzAwsPwk', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, userName, telefone, sexoM, sexoF, sexoOutro, senha, confirmSenha})
    })

    alert('Enviado com sucesso')
}


    
document.querySelector('form').addEventListener('submit', handleSubmit)






