/* ===========================================================
   RESET
=========================================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{

    scroll-behavior:smooth;

}

body{

    font-family:Arial,Helvetica,sans-serif;

    background:#ececec;

    color:#222;

    padding:40px;

    line-height:1.6;

}



/* ===========================================================
   ASSISTENTE
=========================================================== */

.assistente{

    width:100%;

    max-width:950px;

    margin:auto;

}



/* ===========================================================
   ETAPAS
=========================================================== */

.etapa{

    display:none;

    background:#fff;

    border-radius:12px;

    padding:45px;

    box-shadow:0 10px 35px rgba(0,0,0,.10);

    animation:fade .35s ease;

}

.etapa.ativa{

    display:block;

}

@keyframes fade{

    from{

        opacity:0;

        transform:translateY(15px);

    }

    to{

        opacity:1;

        transform:translateY(0);

    }

}



/* ===========================================================
   LOGO
=========================================================== */

.logo-boas-vindas{

    display:block;

    width:170px;

    margin:0 auto 35px auto;

}



/* ===========================================================
   TÍTULOS
=========================================================== */

.etapa h1{

    text-align:center;

    color:#004080;

    font-size:34px;

    margin-bottom:25px;

}

.etapa h2{

    color:#004080;

    font-size:25px;

    margin-bottom:15px;

}

.etapa h3{

    margin-bottom:20px;

    font-size:20px;

}



/* ===========================================================
   PARÁGRAFOS
=========================================================== */

.etapa p{

    margin-bottom:15px;

    line-height:1.7;

    font-size:16px;

}



/* ===========================================================
   TEXTAREAS
=========================================================== */

textarea{

    width:100%;

    min-height:380px;

    resize:vertical;

    margin-top:20px;

    border:1px solid #c9c9c9;

    border-radius:8px;

    background:#fafafa;

    padding:18px;

    font-family:Consolas,monospace;

    font-size:14px;

    line-height:1.6;

    outline:none;

    transition:.25s;

}

textarea:focus{

    border-color:#004080;

    box-shadow:0 0 0 3px rgba(0,64,128,.12);

}



/* ===========================================================
   BOTÕES
=========================================================== */

.botoes{

    display:flex;

    justify-content:flex-end;

    gap:15px;

    margin-top:30px;

    flex-wrap:wrap;

}

button{

    border:none;

    cursor:pointer;

    background:#004080;

    color:#fff;

    padding:14px 28px;

    border-radius:8px;

    font-size:15px;

    transition:.25s;

    font-weight:bold;

}

button:hover{

    background:#005ab5;

    transform:translateY(-1px);

}

button:active{

    transform:scale(.98);

}



/* ===========================================================
   MENSAGEM DE ERRO
=========================================================== */

#erro{

    margin-top:20px;

    color:#d00000;

    font-weight:bold;

    font-size:15px;

    line-height:1.5;

}



/* ===========================================================
   PÁGINA DA PROVA
=========================================================== */

.pagina{

    display:none;

    width:900px;

    margin:40px auto;

    background:white;

    padding:35px;

    border:1px solid #d5d5d5;

    box-shadow:0 12px 35px rgba(0,0,0,.12);

}
/* ===========================================================
   CABEÇALHO DA AVALIAÇÃO
=========================================================== */

.cabecalho{

    display:flex;

    align-items:flex-start;

    gap:22px;

    margin-bottom:35px;

}

.logo{

    width:145px;

    flex-shrink:0;

}



/* ===========================================================
   TABELA DO CABEÇALHO
=========================================================== */

.cabecalho table{

    width:100%;

    border-collapse:collapse;

    font-size:14px;

}

.cabecalho td{

    padding:6px 8px;

    vertical-align:top;

}

.cabecalho td strong{

    color:#222;

}

.desempenho{

    width:120px;

    border:1px solid #000;

    text-align:center;

    font-weight:bold;

    vertical-align:middle !important;

}



/* ===========================================================
   TÍTULO DA AVALIAÇÃO
=========================================================== */

.titulo{

    background:#004080;

    color:#fff;

    text-align:center;

    font-size:22px;

    font-weight:bold;

    padding:12px;

    margin-bottom:20px;

    border-radius:2px;

}



/* ===========================================================
   DESCRIÇÃO
=========================================================== */

.descricao{

    margin-bottom:28px;

    font-size:14px;

    line-height:1.8;

    white-space:pre-line;

}



/* ===========================================================
   CONTAINER DOS ITENS
=========================================================== */

#questoes-container{

    width:100%;

}



/* ===========================================================
   ITEM
=========================================================== */

.item{

    border:1px solid #d5d5d5;

    margin-bottom:28px;

    background:#fff;

    page-break-inside:avoid;

}



/* ===========================================================
   CABEÇALHO DO ITEM
=========================================================== */

.item-titulo{

    background:#004080;

    color:#fff;

    padding:9px 14px;

    font-weight:bold;

    font-size:15px;

}



/* ===========================================================
   CAPACIDADE
=========================================================== */

.item-capacidade{

    padding:12px 14px;

    color:#004080;

    font-size:13px;

    font-weight:bold;

    border-bottom:1px solid #ececec;

}



/* ===========================================================
   CONTEXTO
=========================================================== */

.item-contexto{

    padding:14px;

    font-size:14px;

    line-height:1.8;

    white-space:pre-line;

}



/* ===========================================================
   PERGUNTA
=========================================================== */

.item-pergunta{

    padding:14px;

    font-size:15px;

    line-height:1.8;

}



/* ===========================================================
   ALTERNATIVAS
=========================================================== */

.item-alternativas{

    padding:0 14px 14px;

}

.item-alternativas p{

    margin:8px 0;

    line-height:1.7;

}



/* ===========================================================
   IMAGENS
=========================================================== */

.item img{

    display:block;

    max-width:100%;

    height:auto;

    margin:18px auto;

}



/* ===========================================================
   BOTÃO IMPRIMIR
=========================================================== */

#btn-imprimir{

    position:fixed;

    right:20px;

    bottom:20px;

    width:46px;

    height:46px;

    border:none;

    border-radius:50%;

    background:#444;

    color:#fff;

    font-size:18px;

    cursor:pointer;

    box-shadow:0 5px 15px rgba(0,0,0,.25);

    transition:.25s;

    opacity:.80;

    z-index:999;

}

#btn-imprimir:hover{

    opacity:1;

    background:#004080;

    transform:scale(1.05);

}
/* ===========================================================
   CABEÇALHO DA AVALIAÇÃO
=========================================================== */

.cabecalho{

    display:flex;

    align-items:flex-start;

    gap:22px;

    margin-bottom:35px;

}

.logo{

    width:145px;

    flex-shrink:0;

}



/* ===========================================================
   TABELA DO CABEÇALHO
=========================================================== */

.cabecalho table{

    width:100%;

    border-collapse:collapse;

    font-size:14px;

}

.cabecalho td{

    padding:6px 8px;

    vertical-align:top;

}

.cabecalho td strong{

    color:#222;

}

.desempenho{

    width:120px;

    border:1px solid #000;

    text-align:center;

    font-weight:bold;

    vertical-align:middle !important;

}



/* ===========================================================
   TÍTULO DA AVALIAÇÃO
=========================================================== */

.titulo{

    background:#004080;

    color:#fff;

    text-align:center;

    font-size:22px;

    font-weight:bold;

    padding:12px;

    margin-bottom:20px;

    border-radius:2px;

}



/* ===========================================================
   DESCRIÇÃO
=========================================================== */

.descricao{

    margin-bottom:28px;

    font-size:14px;

    line-height:1.8;

    white-space:pre-line;

}



/* ===========================================================
   CONTAINER DOS ITENS
=========================================================== */

#questoes-container{

    width:100%;

}



/* ===========================================================
   ITEM
=========================================================== */

.item{

    border:1px solid #d5d5d5;

    margin-bottom:28px;

    background:#fff;

    page-break-inside:avoid;

}



/* ===========================================================
   CABEÇALHO DO ITEM
=========================================================== */

.item-titulo{

    background:#004080;

    color:#fff;

    padding:9px 14px;

    font-weight:bold;

    font-size:15px;

}



/* ===========================================================
   CAPACIDADE
=========================================================== */

.item-capacidade{

    padding:12px 14px;

    color:#004080;

    font-size:13px;

    font-weight:bold;

    border-bottom:1px solid #ececec;

}



/* ===========================================================
   CONTEXTO
=========================================================== */

.item-contexto{

    padding:14px;

    font-size:14px;

    line-height:1.8;

    white-space:pre-line;

}



/* ===========================================================
   PERGUNTA
=========================================================== */

.item-pergunta{

    padding:14px;

    font-size:15px;

    line-height:1.8;

}



/* ===========================================================
   ALTERNATIVAS
=========================================================== */

.item-alternativas{

    padding:0 14px 14px;

}

.item-alternativas p{

    margin:8px 0;

    line-height:1.7;

}



/* ===========================================================
   IMAGENS
=========================================================== */

.item img{

    display:block;

    max-width:100%;

    height:auto;

    margin:18px auto;

}



/* ===========================================================
   BOTÃO IMPRIMIR
=========================================================== */

#btn-imprimir{

    position:fixed;

    right:20px;

    bottom:20px;

    width:46px;

    height:46px;

    border:none;

    border-radius:50%;

    background:#444;

    color:#fff;

    font-size:18px;

    cursor:pointer;

    box-shadow:0 5px 15px rgba(0,0,0,.25);

    transition:.25s;

    opacity:.80;

    z-index:999;

}

#btn-imprimir:hover{

    opacity:1;

    background:#004080;

    transform:scale(1.05);

}
