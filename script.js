// =======================================================
// GERADOR DE ATIVIDADES PRÁTICAS SENAI
// PARTE 1
// Inicialização + Navegação + Parser + Validação
// =======================================================

window.addEventListener("DOMContentLoaded", () => {

    // ===================================================
    // ELEMENTOS
    // ===================================================

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



    // ===================================================
    // TROCA DE ETAPAS
    // ===================================================

    function mostrar(etapa){

        document.querySelectorAll(".etapa").forEach(e=>{

            e.classList.remove("ativa");

        });

        etapa.classList.add("ativa");

    }

    btnEtapa1.onclick = ()=>{

        mostrar(etapa2);

    };

    btnEtapa2.onclick = ()=>{

        mostrar(etapa3);

    };

    btnVoltar.onclick = ()=>{

        mostrar(etapa2);

    };



    // ===================================================
    // COPIAR ESTRUTURA
    // ===================================================

    btnCopiar.onclick = ()=>{

        navigator.clipboard.writeText(modelo.value);

        btnCopiar.innerText="✔ Copiado";

        setTimeout(()=>{

            btnCopiar.innerText="📋 Copiar Estrutura";

        },1500);

    };



    // ===================================================
    // PARSER
    // ===================================================

    function parseProva(texto){

        try{

            texto = texto.trim();

            texto = texto.replace(/^```javascript/i,"");
            texto = texto.replace(/^```js/i,"");
            texto = texto.replace(/^```/i,"");
            texto = texto.replace(/```$/i,"");

            texto = texto.trim();

            texto = texto.replace(/^const\s+prova\s*=\s*/,"");

            if(texto.endsWith(";")){

                texto = texto.slice(0,-1);

            }

            const objeto = Function(

                `"use strict";
                return (${texto});
                `

            )();

            return objeto;

        }

        catch(e){

            console.error(e);

            return null;

        }

    }



    // ===================================================
    // VALIDAÇÃO
    // ===================================================

    function validarProva(prova){

        if(!prova){

            return "Não foi possível ler a estrutura da atividade.";

        }

        if(typeof prova !== "object"){

            return "Estrutura inválida.";

        }

        if(!Array.isArray(prova.itens)){

            return "A propriedade itens não foi encontrada.";

        }

        if(prova.itens.length===0){

            return "Nenhum item encontrado.";

        }

        for(let i=0;i<prova.itens.length;i++){

            const item = prova.itens[i];

            if(typeof item !== "object"){

                return `Item ${i+1} inválido.`;

            }

        }

        return null;

    }



    // ===================================================
    // FUNÇÕES AUXILIARES
    // ===================================================

    function texto(v){

        if(v===undefined) return "";

        if(v===null) return "";

        return String(v);

    }

    function limpar(){

        erro.innerHTML="";

        container.innerHTML="";

    }

    function preencherCabecalho(prova){

        document.getElementById("data").innerHTML = texto(prova.data);

        document.getElementById("docente").innerHTML = texto(prova.docente);

        document.getElementById("curso").innerHTML = texto(prova.curso);

        document.getElementById("unidade").innerHTML = texto(prova.unidade);

        document.getElementById("turma").innerHTML = texto(prova.turma);

        document.getElementById("titulo").innerHTML = texto(prova.titulo);

        document.getElementById("descricao").innerHTML = texto(prova.descricao);

    }

    // ===================================================
    // DAQUI PARA BAIXO
    // A PARTE 2 CONTINUA COM O BOTÃO "GERAR"
    // E A RENDERIZAÇÃO DOS ITENS.
    // ===================================================
                            // ===================================================
    // BOTÃO GERAR
    // ===================================================

    btnGerar.onclick = ()=>{

        limpar();

        const codigo = entrada.value.trim();

        if(codigo===""){

            erro.innerHTML="Cole a atividade gerada pelo ChatGPT.";

            return;

        }

        // ===============================================
        // PARSE
        // ===============================================

        const prova = parseProva(codigo);

        if(!prova){

            erro.innerHTML="Não foi possível interpretar o código informado.";

            return;

        }

        // ===============================================
        // VALIDAÇÃO
        // ===============================================

        const erroValidacao = validarProva(prova);

        if(erroValidacao){

            erro.innerHTML = erroValidacao;

            return;

        }

        // ===============================================
        // CABEÇALHO
        // ===============================================

        preencherCabecalho(prova);

        // ===============================================
        // PROTEÇÃO DOS DADOS
        // ===============================================

        prova.itens = prova.itens.map(item=>{

            return{

                capacidade:

                    texto(item.capacidade),

                contexto:

                    texto(item.contexto),

                pergunta:

                    texto(item.pergunta),

                alternativas:

                    Array.isArray(item.alternativas)

                    ? item.alternativas

                    : []

            };

        });

        // ===============================================
        // EXIBIR PÁGINA
        // ===============================================

        assistente.style.display="none";

        pagina.style.display="block";

        // ===============================================
        // GERAR TODOS OS ITENS
        // ===============================================

        prova.itens.forEach((item,index)=>{

            renderizarItem(item,index);

        });

        // ===============================================
        // ROLAR PARA O TOPO
        // ===============================================

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

        // ===============================================
        // IMPRESSÃO
        // ===============================================

        const botao = document.getElementById("btn-imprimir");

        if(botao){

            botao.onclick=()=>{

                botao.style.display="none";

                setTimeout(()=>{

                    window.print();

                    setTimeout(()=>{

                        botao.style.display="block";

                    },700);

                },150);

            };

        }

        console.log(

            "Atividade gerada:",

            prova

        );

    };



    // ===================================================
    // A PARTE 3 CONTÉM:
    //
    // renderizarItem()
    // renderizarAlternativas()
    // fechamento do DOMContentLoaded
    // ===================================================
                            // ===================================================
    // RENDERIZAR ITEM
    // ===================================================

    function renderizarItem(item,index){

        const div = document.createElement("div");

        div.className = "item";

        div.innerHTML = `

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

        // ===============================================
        // ALTERNATIVAS (caso existam)
        // ===============================================

        if(item.alternativas.length){

            div.appendChild(

                renderizarAlternativas(item.alternativas)

            );

        }

        container.appendChild(div);

    }



    // ===================================================
    // RENDERIZAR ALTERNATIVAS
    // ===================================================

    function renderizarAlternativas(lista){

        const alternativas = document.createElement("div");

        alternativas.className="item-alternativas";

        lista.forEach((textoAlternativa,i)=>{

            const p = document.createElement("p");

            p.innerHTML = `

                ${String.fromCharCode(65+i)}) ${textoAlternativa}

            `;

            alternativas.appendChild(p);

        });

        return alternativas;

    }



    // ===================================================
    // FUNÇÃO EXTRA
    // Caso queira gerar a prova pressionando CTRL+ENTER
    // ===================================================

    entrada.addEventListener("keydown",(e)=>{

        if(e.ctrlKey && e.key==="Enter"){

            btnGerar.click();

        }

    });



    // ===================================================
    // FECHAMENTO
    // ===================================================

});
