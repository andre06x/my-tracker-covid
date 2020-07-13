export var ontemTeste = new Date().setHours(-1)
ontemTeste = new Date(ontemTeste)
ontemTeste = ontemTeste.toLocaleDateString('pt-BR')
ontemTeste = ontemTeste.split('/').reverse().join('-')

export var ontemDeOntem = new Date(ontemTeste).setHours(+1)
    ontemDeOntem = new Date(ontemDeOntem)
    ontemDeOntem = ontemDeOntem.toLocaleDateString('pt-BR')
    ontemDeOntem = ontemDeOntem.split('/').reverse().join('-')

    export var hojeData = new Date()
    hojeData = new Date(hojeData)
    hojeData = hojeData.toLocaleDateString('pt-BR')
    hojeData = hojeData.split('/').reverse().join('-')




