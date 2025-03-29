document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    let slides = document.querySelectorAll(".carousel-item");
    let totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    document.getElementById("nextSlide").addEventListener("click", nextSlide);
    document.getElementById("prevSlide").addEventListener("click", prevSlide);

    setInterval(nextSlide, 5000);
    let products = [
        { id: 1, name: "Producto 1", description: "Descripción breve del producto 1", image: "img/item1.jpg" },
        { id: 2, name: "Producto 2", description: "Descripción breve del producto 2", image: "img/item2.jpg" },
        { id: 3, name: "Producto 3", description: "Descripción breve del producto 3", image: "img/item3.jpg" },
        { id: 4, name: "Producto 4", description: "Descripción breve del producto 4", image: "img/item4.jpg" },
        { id: 5, name: "Producto 5", description: "Descripción breve del producto 5", image: "img/item5.jpg" },
        { id: 6, name: "Producto 6", description: "Descripción breve del producto 6", image: "img/item6.jpg" }
    ];

    let productContainer = document.getElementById("product-grid");

    if (productContainer) {
        products.forEach(product => {
            let productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <h5 class="product-title">${product.name}</h5>
                <p class="product-description">${product.description}</p>
                <button class="btn btn-primary saber-mas" data-id="${product.id}">Saber más</button>
            `;

            productContainer.appendChild(productCard);
        });
    }
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("saber-mas")) {
            let productId = event.target.getAttribute("data-id");
            let selectedProduct = products.find(p => p.id == productId);
            alert(`📌 ${selectedProduct.name}\n\n📖 ${selectedProduct.description}`);
        }
    });
    let contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("⚠️ Por favor, completa todos los campos.");
                return;
            }

            alert("✅ Tu mensaje ha sido enviado correctamente.");
            contactForm.reset(); 
        });
    }
});
