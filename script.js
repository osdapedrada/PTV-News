/**
 * Script de Funcionalidades - Jornal Opinião
 * Alunos da Turma 201 - E.E.B. Paulo Bauer
 */

// --- 1. GESTÃO DE TEMA (DARK/LIGHT MODE) ---
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const currentTheme = localStorage.getItem('theme');

// Função para atualizar o ícone conforme o tema
function updateIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Verifica se já existe uma preferência salva no navegador
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateIcon(currentTheme);
}

// Evento de clique para alternar o tema
themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateIcon('light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateIcon('dark');
    }
});


// --- 2. INTEGRAÇÃO COM DISQUS (COMENTÁRIOS) ---
var disqus_config = function () {
    // A URL da página (pega automaticamente o endereço do seu GitHub Pages)
    this.page.url = window.location.href;  
    
    // Identificador Único (Criado pela Turma 201)
    this.page.identifier = 'reportagem-xenofobia-paulo-bauer-201'; 
};

(function() { 
    var d = document, s = d.createElement('script');
    
    /**
     * IMPORTANTE: Substitua 'seu-shortname' pelo nome que 
     * você definiu no painel de controle do Disqus.
     */
    s.src = 'https://ptv-news.disqus.com/embed.js'; 
    
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();


// --- 3. LOG DE INICIALIZAÇÃO ---
console.log("%c Jornal Opinião - Turma 201 %c Carregado com sucesso!", 
            "color: white; background: #c0392b; padding: 5px; border-radius: 3px;", 
            "color: #1a2a3a; font-weight: bold;");
