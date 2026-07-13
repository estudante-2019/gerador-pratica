// ===========================================================
// GERADOR DE ATIVIDADES PRÁTICAS SENAI
// Parte 1
// Navegação + Parser + Validação
// ===========================================================

window.addEventListener("DOMContentLoaded", () => {

    // =======================================================
    // ELEMENTOS
    // =======================================================

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
    // NAVEGAÇÃO ENTRE ETAPAS
    // =======================================================

    function mostrar(etapa){

        document.querySelectorAll(".etapa").forEach(e=>{

            e.classList.remove("ativa");

        });

        etapa.classList.add("ativa");

        window.scrollTo({

            top:0,
            behavior:"smooth"

        });

    }

    btnEtapa1.onclick=()=>mostrar(etapa2);
    btnEtapa2.onclick=()=>mostrar(etapa3);
    btnVoltar.onclick=()=>mostrar(etapa2);

    // =======================================================
    // COPIAR MODELO
    // =======================================================

    btnCopiar.onclick=()=>{

        navigator.clipboard.writeText(modelo.value);

        const textoOriginal=btnCopiar.innerHTML;

        btnCopiar.innerHTML="✔ Estrutura copiada";

        setTimeout(()=>{

            btnCopiar.innerHTML=textoOriginal;

        },1800);

    };

    // =======================================================
    // PARSER
    // Aceita:
    //
    // const prova = {...}
    //
    // ou somente
    //
    // {...}
    // =======================================================

    function parseProva(texto){

        try{

            texto=texto.trim();

            if(texto.startsWith("const prova")){

                texto=texto.replace(/^const\s+prova\s*=\s*/,"");

            }

            if(texto.endsWith(";")){

                texto=texto.slice(0,-1);

            }

            const prova=Function(

                `"use strict"; return (${texto});`

            )();

            return prova;

        }

        catch(e){

            console.error(e);

            return null;

        }

    }

    // =======================================================
    // VALIDAÇÃO
    // =======================================================

    function validarProva(prova){

        if(!prova){

            return "Não foi possível interpretar a atividade.";

        }

        if(typeof prova!=="object"){

            return "Estrutura inválida.";

        }

        if(!Array.isArray(prova.itens)){

            return "O campo 'itens' não foi encontrado.";

        }

        if(prova.itens.length===0){

            return "A atividade não possui itens.";

        }

        return null;

    }

    // =======================================================
    // NORMALIZAÇÃO DOS CAMPOS
    // =======================================================

    function normalizarItem(item){

        return{

            capacidade:item.capacidade || "",

            contexto:item.contexto || "",

            pergunta:item.pergunta || "",

            alternativas:Array.isArray(item.alternativas)

                ? item.alternativas

                :[]

        };

    }

    function normalizarProva(prova){

        return{

            data:prova.data || "",

            docente:prova.docente || "",

            curso:prova.curso || "",

            unidade:prova.unidade || "",

            turma:prova.turma || "",

            titulo:prova.titulo || "",

            descricao:prova.descricao || "",

            itens:prova.itens.map(normalizarItem)

        };

    }

    // =======================================================
    // BOTÃO GERAR
    // (continua na Parte 2)
    // =======================================================

    btnGerar.onclick=()=>{

        erro.innerHTML="";

        const texto=entrada.value.trim();

        if(!texto){

            erro.innerHTML="Cole a estrutura gerada pelo ChatGPT.";

            return;

        }

        let prova=parseProva(texto);

        const erroValidacao=validarProva(prova);

        if(erroValidacao){

            erro.innerHTML=erroValidacao;

            return;

        }

        prova=normalizarProva(prova);

        // Continua na PARTE 2...
               // =======================================================
        // PREENCHER CABEÇALHO
        // =======================================================

        document.getElementById("data").textContent = prova.data;

        document.getElementById("docente").textContent = prova.docente;

        document.getElementById("curso").textContent = prova.curso;

        document.getElementById("unidade").textContent = prova.unidade;

        document.getElementById("turma").textContent = prova.turma;

        document.getElementById("titulo").textContent = prova.titulo;

        document.getElementById("descricao").textContent = prova.descricao;

        // =======================================================
        // EXIBIR PÁGINA
        // =======================================================

        assistente.style.display = "none";

        pagina.style.display = "block";

        container.innerHTML = "";

        // =======================================================
        // RENDERIZAÇÃO DOS ITENS
        // =======================================================

        prova.itens.forEach((item,index)=>{

            const bloco=document.createElement("div");

            bloco.className="item";

            bloco.innerHTML=`

                <div class="item-titulo">

                    ITEM ${index+1}

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

            // ===========================================
            // ALTERNATIVAS (caso existam)
            // ===========================================

            if(item.alternativas.length){

                const alternativas=document.createElement("div");

                alternativas.className="item-alternativas";

                item.alternativas.forEach((alt,i)=>{

                    const p=document.createElement("p");

                    p.innerHTML=`

                        <strong>${String.fromCharCode(65+i)})</strong>

                        ${alt}

                    `;

                    alternativas.appendChild(p);

                });

                bloco.appendChild(alternativas);

            }

            container.appendChild(bloco);

        });

        // =======================================================
        // VOLTA PARA O TOPO
        // =======================================================

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

        // Continua na Parte 3...
               // =======================================================
        // BOTÃO IMPRIMIR
        // =======================================================

        const btnImprimir = document.getElementById("btn-imprimir");

        if(btnImprimir){

            btnImprimir.onclick = ()=>{

                btnImprimir.style.display="none";

                setTimeout(()=>{

                    window.print();

                    setTimeout(()=>{

                        btnImprimir.style.display="flex";

                    },500);

                },150);

            };

        }

    };

    // =======================================================
    // UTILITÁRIOS
    // =======================================================

    function limpar(){

        container.innerHTML="";

        document.getElementById("data").textContent="";

        document.getElementById("docente").textContent="";

        document.getElementById("curso").textContent="";

        document.getElementById("unidade").textContent="";

        document.getElementById("turma").textContent="";

        document.getElementById("titulo").textContent="";

        document.getElementById("descricao").textContent="";

    }

    function mostrarErro(mensagem){

        erro.innerHTML=mensagem;

        assistente.style.display="block";

        pagina.style.display="none";

        limpar();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

    // =======================================================
    // SEGURANÇA
    // =======================================================

    window.addEventListener("error",(e)=>{

        console.error(e);

    });

    window.addEventListener("unhandledrejection",(e)=>{

        console.error(e.reason);

    });

    // =======================================================
    // FINALIZAÇÃO
    // =======================================================

    console.log(

        "%cGerador de Atividades Práticas SENAI carregado.",

        "color:#004080;font-weight:bold;font-size:13px;"

    );

});
