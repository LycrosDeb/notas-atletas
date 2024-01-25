function notaAtletas(atletas){
    for (let i = 0; i < atletas.length; i++) {
        // O código que vai aqui será executado
        // uma vez para cada item da matriz
        console.log("Atleta: "+atletas[i].nome)
        
        console.log("Notas Obtidas: "+atletas[i].notas.sort())
        let notas=atletas[i].notas.sort().slice(1,4)
        let media=notas.reduce(function(total,atual){return total+atual},0)/(notas.length) 
        console.log("Média Válida: "+media) 
        console.log()   
    }
}