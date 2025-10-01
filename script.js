// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            // Add animation
            this.style.background = '#28a745';
            this.textContent = '¡Agregado!';
            
            // Show notification
            showNotification(`${productName} agregado al carrito`);
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.style.background = '#8B4513';
                this.textContent = 'Agregar al Carrito';
            }, 2000);
        });
    });

    // CTA Button functionality
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const productsSection = document.querySelector('#productos');
            if (productsSection) {
                const offsetTop = productsSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .category-card, .about-text, .about-image');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Search functionality (basic)
    const searchIcon = document.querySelector('.nav-icons .fa-search');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            const searchTerm = prompt('¿Qué producto estás buscando?');
            if (searchTerm) {
                searchProducts(searchTerm);
            }
        });
    }

    // Shopping cart counter
    let cartCount = 0;
    const cartIcon = document.querySelector('.nav-icons .fa-shopping-cart');
    
    function updateCartCount() {
        if (cartIcon && cartCount > 0) {
            if (!cartIcon.querySelector('.cart-count')) {
                const countBadge = document.createElement('span');
                countBadge.className = 'cart-count';
                countBadge.style.cssText = `
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    background: #dc3545;
                    color: white;
                    border-radius: 50%;
                    width: 18px;
                    height: 18px;
                    font-size: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                `;
                cartIcon.style.position = 'relative';
                cartIcon.appendChild(countBadge);
            }
            cartIcon.querySelector('.cart-count').textContent = cartCount;
        }
    }

    // Update cart count when items are added
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            updateCartCount();
        });
    });
});

// Utility Functions
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1001;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function searchProducts(searchTerm) {
    const products = document.querySelectorAll('.product-card');
    const searchResults = [];
    
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        const artisan = product.querySelector('.artisan').textContent.toLowerCase();
        
        if (productName.includes(searchTerm.toLowerCase()) || 
            artisan.includes(searchTerm.toLowerCase())) {
            searchResults.push(product);
            product.style.display = 'block';
            product.style.border = '2px solid #8B4513';
        } else {
            product.style.display = 'none';
        }
    });
    
    if (searchResults.length === 0) {
        showNotification('No se encontraron productos que coincidan con tu búsqueda');
    } else {
        showNotification(`Se encontraron ${searchResults.length} producto(s)`);
        // Scroll to products section
        const productsSection = document.querySelector('#productos');
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Reset search after 5 seconds
    setTimeout(() => {
        products.forEach(product => {
            product.style.display = 'block';
            product.style.border = 'none';
        });
    }, 5000);
}

// Category filter functionality
function filterByCategory(category) {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        
        if (category === 'all' || productName.includes(category.toLowerCase())) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Add category click handlers
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            filterByCategory(categoryName);
            
            // Scroll to products
            const productsSection = document.querySelector('#productos');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            showNotification(`Mostrando productos de: ${categoryName}`);
        });
    });
});
