// Efecto de desaparición al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.card');
    
    if (cardsContainer) {
        // Inicializar tarjetas para la animación
        cards.forEach((card, index) => {
            card.style.setProperty('--card-index', index + 1);
        });
        
        // Función para detectar cuando las cards están fuera del área visible
        function handleScroll() {
            const containerRect = cardsContainer.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerBottom = containerRect.bottom;
            
            cards.forEach(card => {
                const cardRect = card.getBoundingClientRect();
                const cardTop = cardRect.top;
                const cardBottom = cardRect.bottom;
                
                // Si la card está fuera o parcialmente fuera del área visible
                if (cardTop < containerTop + 100 || cardBottom > containerBottom - 100) {
                    card.classList.add('fade-out');
                } else {
                    card.classList.remove('fade-out');
                }
            });
        }
        
        // Aplicar efecto en el scroll
        cardsContainer.addEventListener('scroll', handleScroll);
        
        // Aplicar inicialmente para configurar el estado inicial
        setTimeout(handleScroll, 500);
    }
});