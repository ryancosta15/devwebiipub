//funções
function triângulo(){
    //calculo triângulo
    var base = Number(window.prompt('Digite a base:'))
    var altura = Number(window.prompt('Digite a altura:'))
    var area = base * altura / 2
    //exibição
    var unidade = window.prompt('Digite a unidade de medida (ex:cm,mm,m):')
    document.write('<h1>A área do seu triângulo é de:</h1>')
    document.write('<fieldset> <h2>' + Math.ceil(area) + unidade + '²'+'</h2></fieldset>')
    }
    function pirâmide(){
        //calculo pirâmide
        var ladobase = Number(window.prompt('Digite o lado da base:'))
        var areabase = ladobase ** 2
        var altura = Number(window.prompt('Digite a altura:'))
        var volume = areabase * altura / 3
        //exibição
        var unidade = window.prompt('Digite a unidade de medida (ex:cm,mm,m):')
        document.write('<h1>O volume da sua esfera é de:</h1>')
        document.write('<fieldset> <h2>' + Math.ceil(volume) + unidade + '²'+'</h2></fieldset>')
    }
    function esfera(){
        //calculo esfera
        var raio = Number(window.prompt('Digite o raio:'))
        var volume = 4 * Math.PI * raio ** 3 /3
        //exibição
        var unidade = window.prompt('Digite a unidade de medida (ex:cm,mm,m):')
        document.write('<h1>O volume da sua esfera é de:</h1>')
        document.write('<fieldset> <h2>' + Math.ceil(volume) + unidade + '²'+'</h2></fieldset>')
    }
    
    //run
    var op = window.prompt('Escolha a forma geométrica que terá sua área/volume calculada: \n1) Área do Triângulo \n2) Volume da Pirâmide \n3) Volume da Esfera')
    //condicional
    if (op == '1'){
        triângulo()
    }else if (op == '2'){
        pirâmide()
    }else if (op == '3'){
        esfera()
    }else{
        window.alert("Você não escolheu 1,2 ou 3!!!")
    }
    document.write('<br><a href="index.html"><button>Calcular novamente</button></a>')