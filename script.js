// Poprawny numer telefonu do San Michele
const PIZZERIA_PHONE = "+48506151535"; 

// Pełna cyfrowa baza danych menu
const menuData = [
    // Pizza Klasyka
    { id: 1, category: 'klasyka', title: 'Margherita', ingredients: 'Sos pomidorowy, mozzarella, grana padano', prices: { '30cm': 31, '40cm': 42 }, tags: ['vege'] },
    { id: 2, category: 'klasyka', title: 'Favorita', ingredients: 'Sos pomidorowy, mozzarella, włoska szynka cotto, świeże pieczarki, oliwa ex. vergine', prices: { '30cm': 34, '40cm': 45 }, tags: ['top'] },
    { id: 3, category: 'klasyka', title: 'Peperoni', ingredients: 'Sos pomidorowy, mozzarella, grana padano, łagodne salami, świeże pieczarki, oliwa ex.v.', prices: { '30cm': 34, '40cm': 45 }, tags: ['top'] },
    { id: 4, category: 'klasyka', title: 'Kubuś (Ulubiony przez dzieci)', ingredients: 'Sos pomidorowy, mozzarella, włoska szynka cotto, słodka kukurydza lub pomidor, oliwa ex.v.', prices: { '30cm': 34, '40cm': 45 }, tags: [] },
    
    // Pizza Bestsellery
    { id: 5, category: 'bestsellery', title: 'Vegetariana', ingredients: 'Sos pomidorowy, mozzarella, świeże pieczarki, pomidor, papryka, słodka kukurydza, cebula, oliwki, szpinak, sezam, rukola, oliwa ex.v.', prices: { '30cm': 38, '40cm': 49 }, tags: ['vege'] },
    { id: 6, category: 'bestsellery', title: 'Al Tonno e Capperi', ingredients: 'Sos pomidorowy, mozzarella, cebula, włoski tuńczyk olio, kapary, oliwa ex. vergine', prices: { '30cm': 38, '40cm': 49 }, tags: [] },
    { id: 7, category: 'bestsellery', title: 'Indiana Horse', ingredients: 'Sos pomidorowy, mozzarella, świeże pieczarki, cebula, kabanos, oliwa ex. vergine', prices: { '30cm': 38, '40cm': 49 }, tags: [] },
    { id: 8, category: 'bestsellery', title: 'Bianca', ingredients: 'Mozzarella, grana padano, szpinak, czosnek, oliwa ex. vergina', prices: { '30cm': 38, '40cm': 49 }, tags: ['vege'] },
    { id: 9, category: 'bestsellery', title: 'Capricciosa', ingredients: 'Sos pomidorowy, mozzarella, włoska szynka cotto, świeże pieczarki, oliwki, kapary, oliwa', prices: { '30cm': 41, '40cm': 52 }, tags: ['top'] },
    { id: 10, category: 'bestsellery', title: 'USA', ingredients: 'Sos pomidorowy, mozzarella, oliwa ex. vergine. Na połowie: łagodne salami, pieczarki. Na połowie: boczek, słodka kukurydza.', prices: { '30cm': 39, '40cm': 49 }, tags: ['top'] },
    { id: 11, category: 'bestsellery', title: 'Chicken King', ingredients: 'Sos pomidorowy, mozzarella, kurczak w 5 smakach, słodka kukurydza, cebula, oliwa ex.v.', prices: { '30cm': 39, '40cm': 49 }, tags: ['top'] },
    { id: 12, category: 'bestsellery', title: 'Quattro Stagioni', ingredients: 'Sos pomidorowy, mozzarella, włoska szynka cotto, świeże pieczarki, karczochy, oliwa ex.v.', prices: { '30cm': 42, '40cm': 53 }, tags: [] },
    { id: 13, category: 'bestsellery', title: 'Strong Man', ingredients: 'Sos pomidorowy, mozzarella, pieczarki, boczek, szynka cotto, cebula, papryka, pieprz ziołowy', prices: { '30cm': 39, '40cm': 49 }, tags: ['top'] },
    { id: 14, category: 'bestsellery', title: 'Mexico', ingredients: 'Sos pomidorowy, mozzarella, świeże pieczarki, boczek, salami, papryka, zielone jalapeno', prices: { '30cm': 39, '40cm': 49 }, tags: ['ostre'] },
    { id: 15, category: 'bestsellery', title: 'San Michele (Własna kompozycja)', ingredients: 'Kompozycja własna: sos pomidorowy, mozzarella oraz 5 dowolnych składników', prices: { '30cm': 45, '40cm': 56 }, tags: ['top'] },
    { id: 16, category: 'bestsellery', title: 'Chili Macho', ingredients: 'Tylko dla dorosłych! Sos pomidorowy, mozzarella, salami, świeże pieczarki, zielone jalapeno, peperoncino', prices: { '30cm': 39, '40cm': 49 }, tags: ['ostre'] },
    { id: 17, category: 'bestsellery', title: 'BBQ Chicken', ingredients: 'Sos pomidorowy, mozzarella, oliwa ex. vergine. Na połowie: boczek, świeże pieczarki. Na połowie: kurczak, słodka kukurydza.', prices: { '30cm': 39, '40cm': 49 }, tags: ['top'] },
    { id: 18, category: 'bestsellery', title: '18-Stka', ingredients: 'Sos pomidorowy, mozzarella, włoska szynka cotto, boczek, cebula, jasny sos majonezowy, oliwa ex. vergine. (Na życzenie jajko +2zł)', prices: { '30cm': 39, '40cm': 49 }, tags: [] },
    
    // Pizza Premium
    { id: 19, category: 'premium', title: 'Rzeźnicka', ingredients: 'Sos pomidorowy, mozzarella, kapary, oliwki, szynka crudo, salami napoli, rukola, oliwa ex.v.', prices: { '30cm': 43, '40cm': 54 }, tags: ['top'] },
    { id: 20, category: 'premium', title: 'Quattro Formaggi', ingredients: 'Sos pomidorowy, mozzarella, gorgonzola D.O.P. piccante, primosale, grana padano, oliwa ex.v.', prices: { '30cm': 43, '40cm': 54 }, tags: ['vege', 'top'] },
    { id: 21, category: 'premium', title: 'Etruska', ingredients: 'Sos pomidorowy, mozzarella, salami napoli, świeże pieczarki, rukola, oliwa ex. vergine', prices: { '30cm': 43, '40cm': 54 }, tags: [] },
    { id: 22, category: 'premium', title: 'Drwala', ingredients: 'Sos pomidorowy, mozzarella, boczek, salami napoli, świeże pieczarki, szpinak, czosnek, gorgonzola D.O.P. piccante, rukola, oliwa ex.v.', prices: { '30cm': 43, '40cm': 54 }, tags: [] },
    
    // Sałatki
    { id: 23, category: 'salatki', title: 'Sałatka Italia', ingredients: 'Baza (sałata lodowa, pomidory, ogórek), włoski tuńczyk olio, słodka kukurydza, zielone oliwki, jasny sos majonezowy, grana padano, krem balsamiczny IGP, rukola, oliwa ex.v. Z włoskim pieczywem.', prices: { 'Standard': 32 }, tags: [] },
    { id: 24, category: 'salatki', title: 'Sałatka Serowa', ingredients: 'Baza, kompozycja serów: mozzarella, gorgonzola D.O.P. piccante, primosale, grana padano, krem balsamiczny IGP, rukola, oliwa ex.v. Z włoskim pieczywem.', prices: { 'Standard': 32 }, tags: ['vege'] },
    { id: 25, category: 'salatki', title: 'Sałatka Genova', ingredients: 'Baza, grillowany kurczak w sezamie, słodka kukurydza, jasny sos majonezowy, grana padano, krem balsamiczny IGP, rukola, oliwa ex.v. Z włoskim pieczywem.', prices: { 'Standard': 32 }, tags: ['top'] },
    { id: 26, category: 'salatki', title: 'Sałatka Fitness', ingredients: 'Baza, grillowany kurczak w płatkach, słodka kukurydza, jasny sos majonezowy, grana padano, krem balsamiczny IGP, rukola, oliwa ex.v. Z włoskim pieczywem.', prices: { 'Standard': 32 }, tags: [] },
    { id: 27, category: 'salatki', title: 'Sałatka Caprese', ingredients: 'Sałata lodowa, mozzarella, pomidory, świeża bazylia, oliwa ex. vergine. Z włoskim pieczywem.', prices: { 'Standard': 32 }, tags: ['vege'] },
    
    // Antipasti
    { id: 28, category: 'antipasti', title: 'Włoskie pieczywo z oliwą', ingredients: 'Chrupiące domowe pieczywo w stylu włoskim z doskonałej jakości oliwą ex. vergine.', prices: { 'Standard': 12 }, tags: ['top'] },
    { id: 29, category: 'antipasti', title: 'Pieróg Mini Calzone', ingredients: 'Mała wersja pieczonego pieroga z ciasta na pizzę. Baza: mozzarella i sos pomidorowy.', prices: { 'Standard': 9 }, tags: ['top'] },
    
    // Pasta & Lasagna
    { id: 30, category: 'pasta', title: 'Spaghetti Bolognese', ingredients: 'Klasyczne włoskie ragu na bazie mięsa wołowego, świeżych warzyw i sosu pomidorowego, czosnek, grana padano, oliwa ex. vergine', prices: { 'Standard': 34 }, tags: [] },
    { id: 31, category: 'pasta', title: 'Spaghetti al Pomodoro e Basilico', ingredients: 'Aromatyczny, tradycyjny sos pomidorowy, czosnek, świeża bazylia, grana padano, oliwa ex. vergine', prices: { 'Standard': 34 }, tags: ['vege'] },
    { id: 32, category: 'pasta', title: 'Aglio, Olio e Peperoncino', ingredients: 'Prostota i smak: czosnek, ostre papryczki peperoncino, grana padano, doskonała oliwa ex. vergine', prices: { 'Standard': 34 }, tags: ['ostre'] },
    { id: 33, category: 'pasta', title: 'Carbonara', ingredients: 'Rekomendowana dla dorosłych. Oryginalne włoskie guanciale, czosnek, żółtka jaj, ser pecorino romano D.O.P., oliwa ex. vergine', prices: { 'Standard': 39 }, tags: ['top'] },
    { id: 34, category: 'pasta', title: 'Lasagna Bolognese', ingredients: 'Warstwy makaronu zapiekane z aromatycznym ragu wołowym, aksamitnym beszamelem, mozzarellą, grana padano i oliwą', prices: { 'Standard': 32 }, tags: ['top'] },
    
    // Desery
    { id: 35, category: 'desery', title: 'Beza Mini', ingredients: 'Lekki deser bezowy, krem na bazie mascarpone, świeże owoce sezonowe, świeża mięta', prices: { 'Porcja': 11 }, tags: [] },
    { id: 36, category: 'desery', title: 'Beza Duża', ingredients: 'Królewska porcja bezy, bogaty krem mascarpone, świeże owoce sezonowe i pachnąca mięta', prices: { 'Porcja': 23 }, tags: [] },
    { id: 37, category: 'desery', title: 'Tort Bezowy', ingredients: 'Wspaniały tort bezowy przygotowywany na zamówienie. Idealny dla 6 osób.', prices: { 'Cały tort': 72 }, tags: [] },
    { id: 38, category: 'desery', title: 'Ciasto Dnia', ingredients: 'Codziennie świeże wypieki z naszej witryny cukierniczej. Zapytaj obsługę o dzisiejszą propozycję.', prices: { 'Zmienna': 0 }, tags: [] }
];

const categoryNames = {
    'klasyka': 'Pizza Klasyka',
    'bestsellery': 'Pizza Bestsellery',
    'premium': 'Pizza Premium',
    'salatki': 'Świeże Sałatki',
    'antipasti': 'Antipasti (Przystawki)',
    'pasta': 'Pasta & Lasagna',
    'desery': 'Desery (Dolce Vita)'
};

let currentCategory = 'all';
let activeTags = [];
let cart = [];
let pendingItem = null;

window.onload = function() {
    renderMenu(menuData);
};

function renderMenu(data) {
    const container = document.getElementById('menuRenderArea');
    container.innerHTML = '';

    const groups = {};
    data.forEach(item => {
        if(!groups[item.category]) groups[item.category] = [];
        groups[item.category].push(item);
    });

    for (const cat in groups) {
        if (currentCategory !== 'all' && currentCategory !== cat) continue;

        const title = document.createElement('h3');
        title.className = 'menu-category-title';
        title.innerText = categoryNames[cat] || cat;
        container.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        groups[cat].forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item';
            
            let tagsHTML = '';
            item.tags.forEach(t => {
                if(t === 'vege') tagsHTML += '<i class="fa-solid fa-leaf tag-icon vege" title="Wegetariańskie"></i> ';
                if(t === 'ostre') tagsHTML += '<i class="fa-solid fa-pepper-hot tag-icon ostre" title="Ostre"></i> ';
                if(t === 'top') tagsHTML += '<i class="fa-solid fa-star tag-icon top" title="Bestseller"></i> ';
            });

            let pricesHTML = '';
            for (const size in item.prices) {
                const priceText = item.prices[size] === 0 ? 'wg oferty' : `${item.prices[size]} zł`;
                pricesHTML += `<div class="price-row"><span>${size}:</span> ${priceText}</div>`;
            }

            card.innerHTML = `
                <div class="item-tags">${tagsHTML}</div>
                <div>
                    <div class="item-id">#${item.id}</div>
                    <div class="item-title">${item.title}</div>
                    <div class="item-ingredients">${item.ingredients}</div>
                </div>
                <div class="item-footer">
                    <div class="item-prices">${pricesHTML}</div>
                    <button class="add-to-cart-btn" onclick="handleAddToCartClick(${item.id})">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            `;
            grid.appendChild(card);
        });

        container.appendChild(grid);
    }
}

function setCategory(cat, element) {
    currentCategory = cat;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    filterMenu();
}

function toggleTagFilter(tag) {
    const btn = document.querySelector(`.tag-btn[data-tag="${tag}"]`);
    if (activeTags.includes(tag)) {
        activeTags = activeTags.filter(t => t !== tag);
        btn.classList.remove('active');
    } else {
        activeTags.push(tag);
        btn.classList.add('active');
    }
    filterMenu();
}

function filterMenu() {
    const searchVal = document.getElementById('searchInput').value.toLowerCase();
    const filtered = menuData.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchVal) || item.ingredients.toLowerCase().includes(searchVal);
        const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchesTags = activeTags.every(t => item.tags.includes(t));
        return matchesSearch && matchesCategory && matchesTags;
    });
    renderMenu(filtered);
}

function handleAddToCartClick(id) {
    const item = menuData.find(i => i.id === id);
    if (!item) return;

    if (item.prices[Object.keys(item.prices)[0]] === 0) {
        alert("Cena tego produktu zależy od dzisiejszej oferty. Zapytaj obsługę lokalu.");
        return;
    }

    const sizes = Object.keys(item.prices);
    if (sizes.length > 1) {
        pendingItem = item;
        document.getElementById('modalItemTitle').innerText = `Wybierz rozmiar dla: ${item.title}`;
        const optionsContainer = document.getElementById('modalSizeOptions');
        optionsContainer.innerHTML = '';
        
        sizes.forEach((size, index) => {
            const opt = document.createElement('div');
            opt.className = `size-opt ${index === 0 ? 'selected' : ''}`;
            opt.setAttribute('data-size', size);
            opt.innerHTML = `<span>${size}</span> <span>${item.prices[size]} zł</span>`;
            opt.onclick = function() {
                document.querySelectorAll('.size-opt').forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
            };
            optionsContainer.appendChild(opt);
        });

        document.getElementById('sizeModal').classList.add('active');
    } else {
        addToCart(item, sizes[0]);
    }
}

function closeModal() {
    document.getElementById('sizeModal').classList.remove('active');
    pendingItem = null;
}

function confirmAddToCart() {
    const selectedOpt = document.querySelector('.size-opt.selected');
    if (!selectedOpt || !pendingItem) return;
    const size = selectedOpt.getAttribute('data-size');
    addToCart(pendingItem, size);
    closeModal();
}

function addToCart(item, size) {
    const price = item.prices[size];
    const existing = cart.find(i => i.id === item.id && i.size === size);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({
            id: item.id,
            title: item.title,
            size: size,
            price: price,
            qty: 1,
            category: item.category
        });
    }
    updateCartUI();
}

function changeQty(id, size, delta) {
    const index = cart.findIndex(i => i.id === id && i.size === size);
    if (index !== -1) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        updateCartUI();
    }
}

function removeCartItem(id, size) {
    cart = cart.filter(i => !(i.id === id && i.size === size));
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cartItems');
    const countBadge = document.getElementById('cartCount');
    const totalQty = cart.reduce((acc, i) => acc + i.qty, 0);
    countBadge.innerText = totalQty;

    if (cart.length === 0) {
        container.innerHTML = '<p style="color: var(--text-muted); text-align: center; font-size: 13px; margin-top: 30px;">Twój koszyk jest pusty</p>';
        document.getElementById('packagingPrice').innerText = '0.00 zł';
        document.getElementById('totalPrice').innerText = '0.00 zł';
        return;
    }

    container.innerHTML = '';
    let subtotal = 0;
    let packagingTotal = 0;

    cart.forEach(item => {
        const rowTotal = item.price * item.qty;
        subtotal += rowTotal;

        if(['klasyka', 'bestsellery', 'premium'].includes(item.category)) {
            packagingTotal += (2 * item.qty);
        }

        const itemRow = document.createElement('div');
        itemRow.className = 'cart-item-row';
        itemRow.innerHTML = `
            <div class="cart-item-details">
                <h4>${item.title}</h4>
                <p>Rozmiar: ${item.size}</p>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="changeQty(${item.id}, '${item.size}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty(${item.id}, '${item.size}', 1)">+</button>
                </div>
            </div>
            <div>
                <div class="cart-item-price">${rowTotal.toFixed(2)} zł</div>
                <button class="remove-cart-item" onclick="removeCartItem(${item.id}, '${item.size}')">Usuń</button>
            </div>
        `;
        container.appendChild(itemRow);
    });

    const finalTotal = subtotal + packagingTotal;
    document.getElementById('packagingPrice').innerText = `${packagingTotal.toFixed(2)} zł`;
    document.getElementById('totalPrice').innerText = `${finalTotal.toFixed(2)} zł`;
}

function scrollToCart() {
    document.getElementById('cartSidebar').scrollIntoView();
}

// Otwieranie dedykowanego okna z podsumowaniem zamówienia telefonicznego
function handleCallOrder() {
    if(cart.length === 0) {
        alert("Twój koszyk jest pusty! Dodaj dania z menu.");
        return;
    }

    // Dynamicznie podstawia poprawny numer telefonu zdefiniowany na początku skryptu
    document.getElementById('modalPhoneLink').innerText = "+48 506 151 535";
    document.getElementById('modalPhoneLink').href = `tel:${PIZZERIA_PHONE}`;
    document.getElementById('modalCallTarget').href = `tel:${PIZZERIA_PHONE}`;

    // Generowanie listy dań
    const listContainer = document.getElementById('modalOrderList');
    let htmlContent = `<strong style="color: var(--primary-dark); display:block; margin-bottom: 8px;">Twoje potrawy:</strong>`;
    
    cart.forEach(item => {
        htmlContent += `<div style="display: flex; justify-content: space-between; border-bottom: 1px dashed #eee; padding: 4px 0;">
            <span>• ${item.title} (${item.size}) <span style="color: var(--text-muted);">x${item.qty}</span></span>
            <span style="font-weight: 600;">${(item.price * item.qty).toFixed(2)} zł</span>
        </div>`;
    });

    const totalWithBoxes = document.getElementById('totalPrice').innerText;
    htmlContent += `<div style="margin-top: 12px; text-align: right; font-size: 15px; font-weight: 700; color: var(--accent-red);">
        Suma całkowita: ${totalWithBoxes}
    </div>`;

    listContainer.innerHTML = htmlContent;
    document.getElementById('phoneOrderModal').classList.add('active');
}

function closePhoneOrderModal() {
    document.getElementById('phoneOrderModal').classList.remove('active');
}