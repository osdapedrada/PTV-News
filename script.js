/**
 * Configuração do Sistema de Comentários (Disqus)
 * Turma 201 - Escola Estadual Básica Paulo Bauer
 */

// Este código liga o seu HTML ao serviço de comentários externo
var disqus_config = function () {
    // Define a URL e o identificador único da página para que os 
    // comentários fiquem guardados corretamente nesta reportagem.
    this.page.url = window.location.href;  
    this.page.identifier = 'reportagem-xenofobia-paulo-bauer-201'; 
};

(function() { 
    // NÃO ALTERE ESTA PARTE - É a lógica técnica que carrega o script
    var d = document, s = d.createElement('script');
    
    /**
     * INSTRUÇÃO PARA A TURMA 201:
     * Onde diz 'seunome-paulo-bauer', devem substituir pelo "Shortname" 
     * que criarem ao registar o site gratuitamente em disqus.com.
     */
    s.src = 'https://seunome-paulo-bauer.disqus.com/embed.js'; 
    
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();

// Pequena mensagem de log no navegador para confirmar que o script carregou
console.log("Portal de Notícias da Turma 201 carregado com sucesso!");

