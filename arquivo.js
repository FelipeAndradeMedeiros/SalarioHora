function byid(id){
    return document.getElementById(id)
}
let inputsalariomensal = byid("salario-mensal")
let inputhorastrabalhadas = byid("horas-trabalhadas")
let resultado = byid("resultado")
let botao = byid("button-calc")

        
        function CalcularSalarioHora(){
            if((inputhorastrabalhadas.value) && (inputsalariomensal.value)){
             let salariohora = parseInt(inputsalariomensal.value /inputhorastrabalhadas.value)

             return resultado.innerHTML = `Seu salário hora é R$${salariohora} a hora.`
             
            }
            return alert("Valor incorreto ou campo não preenchido.Por favor certifique-se de que colocou as informações")
            
        }


let HorasTrabalhadasDia = byid("horas-trabalhadas-dia")
let DiasTrabalhados = byid("dias-trabalhados")
let resultado2 = byid("resultadoo")

function calcular_horas_trabalhadas(){
    if((DiasTrabalhados.value) && (HorasTrabalhadasDia.value)){
        let totalhoras = parseInt(DiasTrabalhados.value * HorasTrabalhadasDia.value)

        return resultado2.innerHTML = `Voce trabalhou ${totalhoras} horas por mês.`
        
       }
       return alert("Valor incorreto ou campo não preenchido.Por favor certifique-se de que colocou as informações")

    
    
  
}
