// Função para gerar o pdf
function pdf() {
    // Criação de uma variável para armazenar os dados do div
    var pegar_dados = window.document.querySelector("div#dados_do_pdf").innerHTML; 
    // Criação de uma variável para realizar alterações no pdf
    var janela = window.open("", "", "width = 800 height = 600");
    janela.document.write("<html><head>");
    janela.document.write("<title></title><style>h1 {color: rgb(200, 104, 26); font: bold 40pt 'Georgia', 'Times New Roman', Times, serif; text-align: center;} h2 {color: rgb(200, 104, 26); font: bold 20pt 'Georgia', 'Times New Roman', Times, serif; text-align: center;} p {font: 14pt 'Times New Roman', Times, serif;} hr {color: rgb(200, 104, 26);} </style></head>");
    janela.document.write("<body>");
    janela.document.write(pegar_dados);
    janela.document.write("</body></html>"); 
    janela.document.close();
    janela.print(); 
}