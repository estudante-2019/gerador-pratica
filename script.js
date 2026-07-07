// =======================================================
// ELEMENTOS
// =======================================================

window.addEventListener("DOMContentLoaded", () => {

const etapa1 = document.getElementById("etapa1");
const etapa2 = document.getElementById("etapa2");
const etapa3 = document.getElementById("etapa3");

const btnEtapa1 = document.getElementById("btn-etapa1");
const btnEtapa2 = document.getElementById("btn-etapa2");
const btnVoltar = document.getElementById("voltar");

const btnCopiar = document.getElementById("copiar");
const btnGerar = document.getElementById("gerar");

const modelo = document.getElementById("modelo");
const entrada = document.getElementById("entrada");
const erro = document.getElementById("erro");

const assistente = document.getElementById("assistente");
const pagina = document.getElementById("pagina");

const container = document.getElementById("questoes-container");

// =======================================================
// NAVEGAÇÃO
// =======================================================

function mostrar(etapa){

    document.querySelectorAll(".etapa").forEach(e=>{
        e.classList.remove("ativa");
    });

    etapa.classList.add("ativa");

}

btnEtapa1.onclick = ()=>mostrar(etapa2);
btnEtapa2.onclick = ()=>mostrar(etapa3);
btnVoltar.onclick = ()=>mostrar(etapa2);

// =======================================================
// COPIAR MODELO
// =======================================================

btnCopiar.onclick = ()=>{

    navigator.clipboard.writeText(modelo.value);

    btnCopiar.innerText="✔ Copiado";

    setTimeout(()=>{

        btnCopiar.innerText="📋 Copiar Estrutura";

    },1500);

};

// =======================================================
// VALIDAR
// =======================================================

function validarProva(p){

    if(!p){

        return "Atividade não encontrada.";

    }

    if(!p.itens || !Array.isArray(p.itens)){

        return "Itens inválidos.";

    }

    if(p.itens.length===0){

        return "Nenhum item encontrado.";

    }

    return null;

}

// =======================================================
// PARSER
// =======================================================

function parseProva(texto){

    try{

        texto = texto.trim();

        texto = texto.replace("const prova =","").trim();

        if(texto.endsWith(";")){

            texto = texto.slice(0,-1);

        }

        return Function("return ("+texto+")")();

    }

    catch(e){

        return null;

    }

}

// =======================================================
// GERAR
// =======================================================

btnGerar.onclick = ()=>{

    erro.innerText="";

    const texto = entrada.value.trim();

    if(!texto){

        erro.innerText="Cole a atividade do ChatGPT.";

        return;

    }

    const prova = parseProva(texto);

    if(!prova){

        erro.innerText="Erro ao ler a estrutura.";

        return;

    }

    const erroValidacao = validarProva(prova);

    if(erroValidacao){

        erro.innerText = erroValidacao;

        return;

    }

    // ===================================================
    // CABEÇALHO
    // ===================================================

    document.getElementById("data").innerText = prova.data || "";
    document.getElementById("docente").innerText = prova.docente || "";
    document.getElementById("curso").innerText = prova.curso || "";
    document.getElementById("unidade").innerText = prova.unidade || "";
    document.getElementById("turma").innerText = prova.turma || "";

    document.getElementById("titulo").innerText = prova.titulo || "";
    document.getElementById("descricao").innerText = prova.descricao || "";

    assistente.style.display="none";
    pagina.style.display="block";

    container.innerHTML="";

    // ===================================================
    // PROTEÇÃO
    // ===================================================

    prova.itens = prova.itens.map(item=>({

        capacidade:item.capacidade || "",

        contexto:item.contexto || "",

        pergunta:item.pergunta || "",

        alternativas:Array.isArray(item.alternativas)
            ? item.alternativas
            : []

    }));

    // ===================================================
    // RENDER
    // ===================================================

    prova.itens.forEach((item,i)=>{

        const div=document.createElement("div");

        div.className="item";

        div.innerHTML=`

            <div class="item-titulo">

                ITEM ${i+1}

            </div>

            <div class="item-capacidade">

                CAPACIDADE: ${item.capacidade}

            </div>

            <div class="item-contexto">

                ${item.contexto}

            </div>

            <div class="item-pergunta">

                ${item.pergunta}

            </div>

        `;

        if(item.alternativas.length){

            const alternativas=document.createElement("div");

            alternativas.className="item-alternativas";

            item.alternativas.forEach((alt,j)=>{

                const p=document.createElement("p");

                p.innerHTML=`${String.fromCharCode(65+j)}) ${alt}`;

                alternativas.appendChild(p);

            });

            div.appendChild(alternativas);

        }

        container.appendChild(div);

    });

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

    const btnImprimir=document.getElementById("btn-imprimir");

    if(btnImprimir){

        btnImprimir.onclick=()=>window.print();

    }

    console.log("Atividade gerada com sucesso:",prova);

};

});