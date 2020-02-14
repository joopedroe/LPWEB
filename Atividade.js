class atividade{
    constructor(descricao,data,status=false){
        this.descricao=descricao;
        this.data=data;
        this.status=status;
    }

    Concluir(){
        this.status=true;
    }
}

function TratarInput1(texto){
    var atividade = texto.split(' em ');
    alert(atividade)
    return atividade;
}

