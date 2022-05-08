window.alert("Obrigado por comprar conosco!")
// Função geradora de pdf
function funcao_pdf() {
    // Criação de uma variável para armazenar os dados do div
    var pegar_dados = document.getElementById("dados").innerHTML;
    // PDF
    var janela = window.open("", "", "width = 800, height = 600");
    janela.document.write("<html><head>");
    janela.document.write("<title></title><style>body{text-align: center}</style></head>");
    janela.document.write("<body>");
    janela.document.write(pegar_dados);
    janela.document.write("</body></html>");        
    janela.document.close();
    janela.print();  
}     