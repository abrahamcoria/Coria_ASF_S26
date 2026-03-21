//This is the START for my Menu
const MENU_ITEMS = [
    { id: 1, name: "Chips and Queso", description: "Crispy potato gears dipped in molten brass queso, steam vents included", price: 4.99, category: "Starters" },
    { id: 2, name: "Hot Wings (8)", description: "Pressure-cooked wings in fiery ale glaze, cooling condenser sauce on side", price: 8.99, category: "Starters" },
    { id: 3, name: "Gearwheel Pretzels", description: "Soft-baked pretzels twisted like clockwork springs, mustard from the forge", price: 6.99, category: "Starters" },
    { id: 4, name: "Fish & Chips", description: "Ale-battered cod, hand-cut chips, mushy peas, brass-cup tartar", price: 14.99, category: "Entrees" },
    { id: 5, name: "Yak Burger", description: "High-altitude yak patty, smoked gouda, ale-caramelized onions", price: 16.99, category: "Entrees" },
    { id: 6, name: "Jr. Pug Burger", description: "Beef patty, cheddar, lettuce, tomato on brioche gear-bun", price: 8.99, category: "Entrees" },
    { id: 7, name: "What the Pug Salad", description: "Fresh greens, candied walnuts, blue cheese, pug-approved vinaigrette", price: 12.99, category: "Entrees" },
    { id: 8, name: "Extra Chips", description: "With or without steam", price: 3.99, category: "Sides" },
    { id: 9, name: "Forge-Grilled Vegetables", description: "Seasoned under pressure", price: 4.99, category: "Sides" },
    { id: 10, name: "Condenser Coleslaw", description: "Crisp & cooling", price: 3.49, category: "Sides" },
    { id: 11, name: "Pawprint Pickles", description: "Brine-forged delight", price: 2.99, category: "Sides" },
    { id: 12, name: "House Ale", description: "Poured under pressure, Sir Pugsley's signature", price: 6.99, category: "Drinks" },
    { id: 13, name: "Stout of the Realm", description: "Dark, robust, with notes of smoked brass", price: 7.49, category: "Drinks" },
    { id: 14, name: "Experimental Fizzy Concoction", description: "Ask the barkeep for today's volatile batch", price: 5.99, category: "Drinks" }
];
const money = new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD"
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('menuContainer');
    if (!container) return;

    const categories = [
        { name: "Brass-Bound Bites – Starters", cat: "Starters" },
        { name: "Wrinkle-Approved Feasts – Entrees", cat: "Entrees" },
        { name: "Aether-Light Morsels – Sides", cat: "Sides" },
        { name: "Sir Pugsley's Patented Watered Brews – Drinks", cat: "Drinks" }
    ];

    categories.forEach(group => {
        const items = MENU_ITEMS.filter(item => item.category === group.cat);
        if (items.length === 0) return;

        const header = document.createElement('h3');
        header.className = 'mb-4';
        header.style.cssText = 'color: #d4a017; border-bottom: 2px solid #b8860b; padding-bottom: 0.5rem;';
        header.textContent = group.name;
        container.appendChild(header);

        const row = document.createElement('div');
        row.className = 'row g-4 mb-5';
        container.appendChild(row);

        items.forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-md-6 col-lg-4';

            const card = document.createElement('div');
            card.className = 'menu-card card h-100';

            let imgSrc = './images/pugspub.png';
            if (item.name.includes('Chips and Queso')) imgSrc = './images/chips.jpg';
            else if (item.name.includes('Hot Wings'))   imgSrc = './images/wings.jpg';
            else if (item.name.includes('Gearwheel Pretzels')) imgSrc = './images/pretzel.jpg';
            else if (item.name.includes('Fish & Chips')) imgSrc = './images/fishandchips.jpg';
            else if (item.name.includes('Yak Burger'))  imgSrc = './images/burger.jpg';
            else if (item.name.includes('Jr. Pug Burger')) imgSrc = './images/jr_pug_burger.png';
            else if (item.name.includes('What the Pug Salad')) imgSrc = './images/pugsalad.jpg';
            else if (item.name.includes('House Ale'))   imgSrc = './images/ale.png';
            else if (item.name.includes('Stout'))       imgSrc = './images/stout.png';
            else if (item.name.includes('Fizzy'))       imgSrc = './images/fizzy.png';

            card.innerHTML = `
        <img src="${imgSrc}" class="card-img-top" alt="${item.name}" 
             onerror="this.src='./images/placeholder.jpg'; this.alt='Image not found';">
        <div class="card-body text-center">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <p class="price">${money.format(item.price)}</p>
            <button class="btn btn-warning add-to-cart-btn"
            data-id="${item.id}"
            data-name="${item.name}"
            data-price="${item.price}"
            data-image="${imgSrc}">
            Add to Cart
            </button>
        </div>
    `;


            col.appendChild(card);
            row.appendChild(col);


//END of CART
        });
    });
    //START of adding menu items CART
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const btn = e.target;
            const id = parseInt(btn.dataset.id);
            const name = btn.dataset.name;
            const price = parseFloat(btn.dataset.price);

            const card = btn.closest('.card');
            const img = card?.querySelector('img.card-img-top');
            const imageSrc = img?.src || `./images/placeholder.jpg`;

            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1, image: imageSrc });
            }

            saveCart();
            alert(`${name} added to cart!`);
        }
    });
//This is the END of adding items to Menu
});



//This is the START for my Reservation Page
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservationForm');
    const feedback = document.getElementById('formFeedback');

    if (!form) {
        console.error("Form with id 'reservationForm' not found!");
        return;
    }

    if (!feedback) {
        console.error("Feedback container #formFeedback not found!");
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        feedback.innerHTML = '';
        feedback.className = '';

        const formData = new FormData(this);
        const values = {
            firstName: (formData.get('fname') || '').trim(),
            lastName:  (formData.get('lname') || '').trim(),
            email:     (formData.get('email') || '').trim(),
            partySize: formData.get('partySize') || '',
            date:      formData.get('date') || '',
            time:      formData.get('time') || '',
            phone:     (formData.get('pnumber') || '').trim(),
            seating:   formData.get('seating') || '',
            dietary:   (formData.get('dietary') || '').trim(),
            newsletter: !!formData.get('newsletter'),
            mealType:  formData.get('Meal') || ''
        };

        let errors = [];

        if (!values.firstName) errors.push("First name is required.");
        if (values.firstName.length > 20) errors.push("First name must be 20 characters or less.");

        if (!values.lastName) errors.push("Last name is required.");
        if (values.lastName.length > 20) errors.push("Last name must be 20 characters or less.");

        if (!values.email) {
            errors.push("Email is required.");
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.push("Please enter a valid email address.");
        }

        const party = Number(values.partySize);
        if (!values.partySize || isNaN(party) || party < 1 || party > 8) {
            errors.push("Party size must be a number between 1 and 8.");
        }

        if (!values.date) errors.push("Date is required.");
        if (!values.time) errors.push("Time is required.");
        if (!values.phone) errors.push("Phone number is required.");
        if (!values.seating) errors.push("Please select a seating preference.");

        if (errors.length > 0) {
            // Error alert
            feedback.innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Reservation Error!</strong> Please correct the following:
                    <ul class="mb-0 mt-2 ps-4">${errors.map(err => `<li>${err}</li>`).join('')}</ul>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
        } else {
            // Success
            const reservation = {
                name: `${values.firstName} ${values.lastName}`.trim(),
                email: values.email,
                partySize: party,
                date: values.date,
                time: values.time,
                seating: values.seating,
                dietaryNotes: values.dietary || '(none)',
                newsletter: values.newsletter ? 'Yes' : 'No',
                mealType: values.mealType
            };

            console.log("Reservation Submitted:", reservation);

            feedback.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Your reservation for ${party} ${party === 1 ? 'guest' : 'guests'}
                    (${values.mealType}) on ${values.date} at ${values.time} has been received!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date');
    if (dateInput) {
        dateInput.value = today;
    }
});
//This is the END for my Reservation Page

//This is the START of my CART / CHECKOUT
document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const countEl = document.getElementById('cart-items-count');


    function renderCart() {
        cartContainer.innerHTML = ''; // clear previous content
        let subtotal = 0;

        if (cart.length === 0) {
            cartContainer.innerHTML = '<p class="text-center my-5">Your cart is empty. Go order some brass-bound bites!</p>';
            countEl.textContent = '0 items';
            updateSummary(0);
            return;
        }

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const row = document.createElement('div');
            row.className = 'row mb-4 d-flex justify-content-between align-items-center';
            row.dataset.index = index;

            row.innerHTML = `
                <div class="col-md-2 col-lg-2 col-xl-2">
                    <img src="${item.image || './images/placeholder.jpg'}" 
                         class="img-fluid rounded-3" 
                         alt="${item.name}"
                         onerror="this.src='./images/placeholder.jpg'; this.alt='Image not available';">
                </div>
                <div class="col-md-3 col-lg-3 col-xl-3">
                    <h6 class="text-muted">Menu Item</h6>
                    <h6 class="mb-0">${item.name}</h6>
                </div>
                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button class="btn btn-link px-2 decrement" data-index="${index}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" min="1" value="${item.quantity}" 
                           class="form-control form-control-sm text-center quantity" 
                           data-index="${index}" style="max-width: 70px;">
                    <button class="btn btn-link px-2 increment" data-index="${index}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1 text-end">
                    <h6 class="mb-0">${money.format(itemTotal)}</h6>
                </div>
                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" class="text-danger remove-item fs-4" 
                       data-index="${index}" title="Remove item">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
            `;

            cartContainer.appendChild(row);
        });

        countEl.textContent = `${cart.length} item${cart.length !== 1 ? 's' : ''}`;
        updateSummary(subtotal);
    }


    function updateSummary(subtotal) {
        const taxRate = 0.09;
        const taxAmount = subtotal * taxRate;
        const total = subtotal + taxAmount;

        document.getElementById('subtotal').textContent = money.format(subtotal);
        document.getElementById('tax').textContent = money.format(taxAmount);
        document.getElementById('total').textContent = money.format(total);
    }


    cartContainer.addEventListener('click', function(e) {
        const target = e.target.closest('button, a.remove-item');
        if (!target) return;

        const index = parseInt(target.dataset.index);
        if (isNaN(index)) return;

        if (target.classList.contains('increment')) {
            cart[index].quantity += 1;
        }
        else if (target.classList.contains('decrement')) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            }
        }
        else if (target.classList.contains('remove-item') || target.closest('.remove-item')) {
            if (confirm(`Remove "${cart[index].name}" from your cart?`)) {
                cart.splice(index, 1);
            } else {
                return;
            }
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart(); // re-render instead of reload (smoother)
    });

    // Quantity input direct edit
    cartContainer.addEventListener('change', function(e) {
        if (e.target.classList.contains('quantity')) {
            const index = parseInt(e.target.dataset.index);
            const newQty = parseInt(e.target.value);

            if (newQty >= 1 && !isNaN(newQty)) {
                cart[index].quantity = newQty;
                localStorage.setItem('cart', JSON.stringify(cart));
                renderCart(); // re-render
            } else {
                e.target.value = cart[index].quantity; // revert invalid input
            }
        }
    });

    const clearBtn = document.getElementById('btn-clear-cart');
    const checkoutBtn = document.getElementById('btn-checkout');

    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to clear your entire cart? This cannot be undone.')) {
                cart = [];
                localStorage.removeItem('cart');
                renderCart();
                alert('Cart has been cleared.');
            }
        });
    }
    //This is the END of my CART / CHECKOUT


    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }
            if (confirm('Are you sure you want to submit your order? No changes may be made after submitted.')) {
                cart = [];
                localStorage.removeItem('cart');
                renderCart();
                alert("Order submitted! Thank you for dining at Sir Pugsley's Pug Pub 🐶🍺");
            }
        });
    }

    renderCart();
});

const categoryButtons = document.querySelectorAll('.category-btn');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {

        categoryButtons.forEach(btn => btn.classList.remove('active'));

        button.classList.add('active');

        const selectedCategory = button.dataset.category;

        const allHeaders = document.querySelectorAll('#menuContainer h3');
        const allRows    = document.querySelectorAll('#menuContainer .row.g-4.mb-5');

        allHeaders.forEach((header, index) => {
            const row = allRows[index];
            if (!row) return;

            if (selectedCategory === 'All') {
                header.style.display = '';
                row.style.display = '';
            } else {

                const isMatch = header.textContent.toLowerCase().includes(selectedCategory.toLowerCase());
                header.style.display = isMatch ? '' : 'none';
                row.style.display = isMatch ? '' : 'none';
            }
        });
    });
});

