/**
 * Hamburguesería Luría - Scripts interactivos
 * Este archivo contiene todas las funcionalidades JavaScript necesarias
 * para los efectos de navegación y visualización de tarjetas
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de funcionalidades
    initMenuNavigation();
    initCardsVisibility();
});

/**
 * Inicializa la navegación con flechas para el menú horizontal
 */
function initMenuNavigation() {
    // Buscamos los elementos por clase en lugar de ID para mayor seguridad
    const menuContainer = document.querySelector('.menu-container');
    const leftArrow = document.querySelector('.menu-arrow-left');
    const rightArrow = document.querySelector('.menu-arrow-right');
    
    // Comprobar si existen los elementos
    if (!menuContainer || !leftArrow || !rightArrow) {
        console.warn('Elementos del menú no encontrados');
        return;
    }
    
    // Función para verificar si hay contenido oculto y mostrar/ocultar flechas
    function checkScrollPosition() {
        // Comprobamos si hay contenido oculto a la izquierda
        if (menuContainer.scrollLeft > 10) { // Añadimos un pequeño margen
            leftArrow.classList.add('active');
        } else {
            leftArrow.classList.remove('active');
        }
        
        // Comprobamos si hay contenido oculto a la derecha
        const scrollWidth = menuContainer.scrollWidth;
        const scrollLeft = menuContainer.scrollLeft;
        const clientWidth = menuContainer.clientWidth;
        
        if (scrollWidth > scrollLeft + clientWidth + 10) { // Añadimos un pequeño margen
            rightArrow.classList.add('active');
        } else {
            rightArrow.classList.remove('active');
        }
    }
    
    // Verificación inicial con un pequeño retraso para asegurar que todo esté cargado
    setTimeout(checkScrollPosition, 100);
    
    // Escuchar eventos de scroll
    menuContainer.addEventListener('scroll', checkScrollPosition);
    
    // Escuchar eventos de resize
    window.addEventListener('resize', checkScrollPosition);
    
    // Función para desplazarse a la izquierda
    leftArrow.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir comportamiento por defecto
        
        // Calculamos el ancho de un elemento de menú para determinar cuánto desplazarnos
        const menuItems = document.querySelectorAll('.menu-item');
        if (menuItems.length > 0) {
            const itemWidth = menuItems[0].offsetWidth;
            menuContainer.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        }
    });
    
    // Función para desplazarse a la derecha
    rightArrow.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir comportamiento por defecto
        
        // Calculamos el ancho de un elemento de menú para determinar cuánto desplazarnos
        const menuItems = document.querySelectorAll('.menu-item');
        if (menuItems.length > 0) {
            const itemWidth = menuItems[0].offsetWidth;
            menuContainer.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
    });
    
    // Forzar la comprobación inicial unas veces más
    setTimeout(checkScrollPosition, 500);
    setTimeout(checkScrollPosition, 1000);
}

/**
 * Inicializa el efecto de visibilidad para las tarjetas de hamburguesas
 */
function initCardsVisibility() {
    const container = document.querySelector('.cards-container');
    const cards = document.querySelectorAll('.card');
    const wrapper = document.querySelector('.cards-wrapper');
    
    if (!container || !cards.length || !wrapper) return;
    
    // Añadir máscaras de desvanecimiento
    const maskTop = document.createElement('div');
    maskTop.className = 'mask-top';
    wrapper.insertBefore(maskTop, container);
    
    const maskBottom = document.createElement('div');
    maskBottom.className = 'mask-bottom';
    wrapper.appendChild(maskBottom);
    
    // Función para comprobar qué cards están visibles
    function checkVisibility() {
        const containerRect = container.getBoundingClientRect();
        const wrapperRect = wrapper.getBoundingClientRect();
        
        // Ajustamos los límites para que sean relativos al wrapper (tablón)
        const containerTop = containerRect.top + 70; // Considerando la altura de la máscara
        const containerBottom = containerRect.bottom - 70;
        
        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardMidpoint = (cardRect.top + cardRect.bottom) / 2;
            
            // Comprobar si la tarjeta está dentro del tablón
            const isInBoard = cardMidpoint >= wrapperRect.top && cardMidpoint <= wrapperRect.bottom;
            
            // Calcular la distancia del centro de la card al borde del contenedor
            const distanceToEdge = Math.min(
                Math.abs(cardMidpoint - containerTop),
                Math.abs(cardMidpoint - containerBottom)
            );
            
            // Calcular opacidad basada en la posición
            let opacity = 1;
            
            // Si está fuera de los límites visibles o fuera del tablón
            if (cardMidpoint < containerTop || cardMidpoint > containerBottom || !isInBoard) {
                opacity = 0;
                
                // Deshabilitar el botón cuando no es visible (si existe)
                const button = card.querySelector('.burger-button');
                if (button) button.disabled = true;
            } 
            // Si está cerca del borde, reducir opacidad gradualmente
            else if (distanceToEdge < 50) {
                opacity = distanceToEdge / 50;
                
                // Permitir o no el clic según la opacidad (si existe botón)
                const button = card.querySelector('.burger-button');
                if (button) button.disabled = opacity <= 0.5;
            } else {
                // Habilitar el botón cuando es completamente visible (si existe)
                const button = card.querySelector('.burger-button');
                if (button) button.disabled = false;
            }
            
            // Aplicar efecto visual
            card.style.opacity = opacity;
            if (opacity < 0.5) {
                card.style.transform = 'scale(0.95)';
                card.style.pointerEvents = 'none';
            } else {
                card.style.transform = 'scale(1)';
                card.style.pointerEvents = 'auto';
            }
        });
    }
    
    // Verificar visibilidad inicial
    checkVisibility();
    
    // Escuchar el evento de scroll en el contenedor
    container.addEventListener('scroll', checkVisibility);
    
    // También verificar en resize
    window.addEventListener('resize', checkVisibility);
    
    // Y verificar en el scroll de la página
    window.addEventListener('scroll', checkVisibility);
}

// Para pruebas, forzar la visibilidad inicial de las flechas en móvil si es necesario
/*
setTimeout(function() {
    if (window.innerWidth < 768) {
        document.querySelectorAll('.menu-arrow').forEach(arrow => {
            arrow.classList.add('active');
        });
    }
}, 1500);
*/