// ===================== PRODUCTS DATA =====================
const products = [
    // Beds
    { id: 1, name: 'سرير معدني مودرن 100 سم', category: 'beds', size: '100x200', dimensions: '100×200', price: 4000, hasMetalSlats: true, image: 'assets/bed100.jpeg' },
    { id: 2, name: 'سرير معدني مودرن 100 سم', category: 'beds', size: '100x200', dimensions: '100×200', price: 4250, hasMetalSlats: true, image: 'assets/bed1002.jpeg' },
    { id: 3, name: 'سرير معدني مودرن 100 سم', category: 'beds', size: '100x200', dimensions: '100×200', price: 4250, hasMetalSlats: true, image: 'assets/bed1003.jpeg' },
    { id: 4, name: 'سرير معدني مودرن 120 سم', category: 'beds', size: '120x200', dimensions: '120×200', price: 4500, hasMetalSlats: true, image: 'assets/bed120.jpeg' },
    { id: 5, name: 'سرير معدني مودرن 120 سم', category: 'beds', size: '120x200', dimensions: '120×200', price: 4500, hasMetalSlats: true, image: 'assets/bed1202.jpeg' },
    { id: 6, name: 'سرير معدني مودرن 120 سم', category: 'beds', size: '120x200', dimensions: '120×200', price: 4500, hasMetalSlats: true, image: 'assets/bed1203.jpeg' },
    { id: 7, name: 'سرير معدني مودرن 150 سم', category: 'beds', size: '150x200', dimensions: '150×200', price: 5200, hasMetalSlats: true, image: 'assets/bed150.jpeg' },
    { id: 8, name: 'سرير معدني مودرن 150 سم', category: 'beds', size: '150x200', dimensions: '150×200', price: 5200, hasMetalSlats: true, image: 'assets/bed1502.jpeg' },
    { id: 9, name: 'سرير معدني مودرن 150 سم', category: 'beds', size: '150x200', dimensions: '150×200', price: 5200, hasMetalSlats: true, image: 'assets/bed1503.jpeg' },
    { id: 10, name: 'سرير معدني مودرن 150 سم', category: 'beds', size: '150x200', dimensions: '150×200', price: 5200, hasMetalSlats: true, image: 'assets/bed1504.jpeg' },
    { id: 11, name: 'سرير معدني مودرن 160 سم', category: 'beds', size: '160x200', dimensions: '160×200', price: 5800, hasMetalSlats: true, image: 'assets/bed160.jpeg' },
    { id: 12, name: 'سرير معدني مودرن 160 سم', category: 'beds', size: '160x200', dimensions: '160×200', price: 5800, hasMetalSlats: true, image: 'assets/bed1602.jpeg' },
    { id: 13, name: 'سرير معدني مودرن 160 سم', category: 'beds', size: '160x200', dimensions: '160×200', price: 5800, hasMetalSlats: true, image: 'assets/bed1603.jpeg' },
    { id: 14, name: 'سرير معدني مودرن 180 سم', category: 'beds', size: '180x200', dimensions: '180×200', price: 6400, hasMetalSlats: true, image: 'assets/bed180.jpeg' },
    { id: 16, name: 'سرير معدني مودرن 180 سم', category: 'beds', size: '180x200', dimensions: '180×200', price: 6400, hasMetalSlats: true, image: 'assets/bed1803.jpeg' },
    // Mattresses
    { id: 17, name: 'مرتبة سوست 100 سم', category: 'mattresses', size: '100x200', dimensions: '100×200×26 سم', price: 2900, image: 'assets/mattress2.jpeg' },
    { id: 18, name: 'مرتبة سوست 120 سم', category: 'mattresses', size: '120x200', dimensions: '120×200×26 سم', price: 3300, image: 'assets/mattress2.jpeg' },
    { id: 19, name: 'مرتبة سوست 150 سم', category: 'mattresses', size: '150x200', dimensions: '150×200×26 سم', price: 4150, image: 'assets/mattress2.jpeg' },
    { id: 20, name: 'مرتبة سوست 160 سم', category: 'mattresses', size: '160x200', dimensions: '160×200×26 سم', price: 4600, image: 'assets/mattress2.jpeg' },
    // Wardrobes
    { id: 21, name: 'دولاب خشب بإطار معدني', category: 'wardrobes', design: 'كلاسيك', dimensions: '40×60×180 سم', price: 4500, image: 'assets/wardrobe3.jpeg' },
    { id: 22, name: 'دولاب ملابس خزانه وارفف', category: 'wardrobes', design: 'مودرن', dimensions: '100×40×180 سم', price: 4900, image: 'assets/wardrobe5.jpeg' },
    { id: 23, name: 'دولاب 3 ضلفة بخزانات', category: 'wardrobes', design: 'فاخر', dimensions: '160×60×200 سم', price: 9000, image: 'assets/wardrobe2.jpeg' },
    { id: 24, name: 'دريسينج متعدد الارفف', category: 'wardrobes', design: 'سوبر', dimensions: '190×50×200 سم', price: 8500, image: 'assets/wardrobe4.jpeg' },
    // Bedside Tables
    { id: 25, name: 'كومود Z', category: 'bedside', design: 'كلاسيك', dimensions: '50×40×50 سم', price: 1600, image: 'assets/bedside1.jpeg' },
    { id: 26, name: 'كومود 2 رف', category: 'bedside', design: 'مودرن', dimensions: '45×40×55 سم', price: 1600, image: 'assets/bedside2.jpeg' },
    { id: 27, name: 'كومود كروس', category: 'bedside', design: 'مودرن', dimensions: '40×40×50 سم', price: 1300, image: 'assets/bedsidecross.jpeg' },
    { id: 28, name: 'كومود S', category: 'bedside', design: 'مودرن', dimensions: '40×45×45 سم', price: 1400, image: 'assets/bedsideS.jpeg' },
    { id: 29, name: 'كومود روتانا', category: 'bedside', design: 'مودرن', dimensions: '35×35×50 سم', price: 1600, image: 'assets/bedsiderotana.jpeg' },
    { id: 30, name: 'كومود لاينز', category: 'bedside', design: 'مودرن', dimensions: '40×40×40 سم', price: 1400, image: 'assets/bedsidelines.jpeg' },
    { id: 31, name: 'كومود روفان', category: 'bedside', design: 'مودرن', dimensions: '45×45×50 سم', price: 1550, image: 'assets/bedsiderovan.jpeg' },
    { id: 32, name: 'كومود سلايدز', category: 'bedside', design: 'مودرن', dimensions: '40×40×45 سم', price: 1500, image: 'assets/bedsideslides.jpeg' },
    { id: 33, name: 'كومود جانبية 4 ارفف', category: 'bedside', design: 'مودرن', dimensions: '40×40×60 سم', price: 2500, image: 'assets/bedsidefour.jpeg' },
    // Puffs
    { id: 34, name: 'كرسي تسريحة معدني', category: 'puffs', design: 'مودرن', dimensions: '80×60×50 سم', price: 1800, image: 'assets/puff.jpeg' },
    { id: 35, name: '3 كرسي بف', category: 'puffs', design: 'مودرن', dimensions: '40×40×50 سم', price: 3000, image: 'assets/puff3.jpeg' },
    // Banquettes
    { id: 36, name: 'بانكيت معدني + جزامة', category: 'banquettes', design: 'مودرن', dimensions: '120×45 سم', price: 3500, image: 'assets/banquette.jpeg' },
    { id: 37, name: 'بانكيت معدني + جزامة', category: 'banquettes', design: 'مودرن', dimensions: '120×45 سم', price: 3500, image: 'assets/banquette2.jpeg' },
    // Mirror
    { id: 38, name: 'تسريحة معدنية مودرن + مراية + كرسي', category: 'mirror', design: 'مودرن', dimensions: '120×45×60 سم', price: 4800, image: 'assets/dresser.jpeg' },

];

// ===================== CART STATE =====================
let cart = JSON.parse(localStorage.getItem('marvelCart')) || [];
let shippingCost = parseInt(localStorage.getItem('marvelShippingCost')) || 0;

// ===================== COLOR OPTIONS =====================
const metalColors = [
    { value: '#000000', name: 'أسود' },
    { value: '#FFFFFF', name: 'أبيض' },
    { value: '#8D8D8D', name: 'رمادي' }
];

const fabricColors = [
    { value: '#EDE4DA', name: 'بيج' },
    { value: '#B9947D', name: 'كافيه' },
    { value: '#8D8D8D', name: 'رمادي' },
    { value: '#0138AA', name: 'أزرق' }
];

// ===================== COLOR SELECTION FUNCTION =====================
function selectColor(cartIndex, type, colorValue, colorName, element) {
    // Update cart item with selected color
    if (type === 'metal') {
        cart[cartIndex].metalColor = { value: colorValue, name: colorName };
    } else if (type === 'fabric') {
        cart[cartIndex].fabricColor = { value: colorValue, name: colorName };
    }

    // Save to localStorage
    saveCart();

    // Update UI - remove selected from siblings of same type only, add to clicked
    const colorsRow = element.closest('.colors-row');
    if (colorsRow) {
        colorsRow.querySelectorAll('.color-circle').forEach(circle => {
            circle.classList.remove('selected');
        });
        element.classList.add('selected');
    }
}

// ===================== CART FUNCTIONS =====================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const metalSlatsToggle = document.querySelector(`.metal-slats-toggle[data-id="${productId}"]`);
    const hasMetalSlats = metalSlatsToggle ? metalSlatsToggle.checked : false;
    const finalPrice = hasMetalSlats ? product.price + 500 : product.price;

    const existingItem = cart.find(item => item.id === productId && item.metalSlats === hasMetalSlats);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, price: finalPrice, metalSlats: hasMetalSlats, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showCartPopup();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    if (typeof renderCartPage === 'function') {
        renderCartPage();
    }
}

function updateQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
    if (typeof renderCartPage === 'function') {
        renderCartPage();
    }
}

function saveCart() {
    localStorage.setItem('marvelCart', JSON.stringify(cart));
}

function saveShippingCost(cost, city) {
    shippingCost = cost;
    localStorage.setItem('marvelShippingCost', cost);
    if (city) {
        localStorage.setItem('marvelSelectedCity', city);
    }
}

function getSelectedCity() {
    return localStorage.getItem('marvelSelectedCity') || '';
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Update navbar cart count
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.classList.toggle('hidden', totalItems === 0);
    }

    // Update floating mobile cart button
    const floatingCartBtn = document.getElementById('floating-cart-btn');
    const floatingCartCount = document.getElementById('floating-cart-count');
    if (floatingCartBtn && floatingCartCount) {
        floatingCartCount.textContent = totalItems;
        if (totalItems > 0) {
            floatingCartBtn.classList.remove('hidden');
        } else {
            floatingCartBtn.classList.add('hidden');
        }
    }

    // Update cart popup (if exists - only on index.html)
    const cartPopupTotal = document.getElementById('cart-popup-total');
    const cartPopupItems = document.getElementById('cart-popup-items');
    if (cartPopupTotal && cartPopupItems) {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartPopupTotal.textContent = total.toLocaleString('ar-EG');

        cartPopupItems.innerHTML = cart.slice(0, 3).map(item => `
            <div class="flex justify-between text-sm">
                <span>${item.name} ${item.size || item.design} x${item.quantity}</span>
                <span class="font-bold">${(item.price * item.quantity).toLocaleString('ar-EG')}</span>
            </div>
        `).join('');

        if (cart.length > 3) {
            cartPopupItems.innerHTML += `<p class="text-xs text-gray-500">+${cart.length - 3} منتجات أخرى</p>`;
        }
    }
}

function showCartPopup() {
    const cartPopup = document.getElementById('cart-popup');
    if (cartPopup) {
        cartPopup.classList.remove('hidden');
        setTimeout(() => cartPopup.classList.add('hidden'), 4000);
    }
}

function closeCartPopup() {
    const cartPopup = document.getElementById('cart-popup');
    if (cartPopup) {
        cartPopup.classList.add('hidden');
    }
}

// ===================== NAVIGATION FUNCTIONS =====================
function openCartPage() {
    window.location.href = 'cart.html';
}

function closeCartPage() {
    window.location.href = 'index.html';
}

function openCheckout() {
    if (cart.length === 0) return;
    const shippingSelect = document.getElementById('shipping-select');
    if (shippingSelect && !shippingSelect.value) {
        alert('الرجاء اختيار منطقة التوصيل');
        return;
    }
    window.location.href = 'checkout.html';
}

function closeCheckout() {
    window.location.href = 'cart.html';
}

// ===================== HELPER FUNCTIONS =====================
function getCategoryIcon(category) {
    const icons = { beds: '', mattresses: '', wardrobes: '', bedside: '' };
    return icons[category] || '📦';
}

function scrollToProducts() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = 'index.html#products';
    }
}

// ===================== TIMER FUNCTION =====================
function startOfferTimer() {
    const daysEl = document.getElementById('timer-days');
    const hoursEl = document.getElementById('timer-hours');
    const minutesEl = document.getElementById('timer-minutes');
    const secondsEl = document.getElementById('timer-seconds');

    if (!minutesEl || !secondsEl) return;

    // Default 10 days in ms
    const DURATION = 10 * 24 * 60 * 60 * 1000;

    // Check for existing timer
    let endTime = localStorage.getItem('marvelOfferEndTime');

    if (!endTime || new Date().getTime() > parseInt(endTime)) {
        // Determine new end time
        endTime = new Date().getTime() + DURATION;
        localStorage.setItem('marvelOfferEndTime', endTime);
    }

    function update() {
        const now = new Date().getTime();
        const distance = parseInt(endTime) - now;

        if (distance < 0) {
            // Timer expired - Reset it for endless loop effect
            endTime = new Date().getTime() + DURATION;
            localStorage.setItem('marvelOfferEndTime', endTime);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = days < 10 ? '0' + days : days;
        if (hoursEl) hoursEl.textContent = hours < 10 ? '0' + hours : hours;
        minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;

        requestAnimationFrame(update);
    }

    update();
}

// ===================== MOBILE MENU =====================
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!mobileMenu) return;

    function toggleMenu() {
        const isHidden = mobileMenu.style.display === 'none' || mobileMenu.style.display === '';
        if (isHidden) {
            mobileMenu.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    mobileMenuBtn?.addEventListener('click', toggleMenu);
    closeMobileMenu?.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));
}

// ===================== NAVBAR SCROLL =====================
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('glass', 'shadow-lg');
            navbar.classList.remove('bg-white/90', 'md:bg-transparent');
        } else {
            navbar.classList.remove('glass', 'shadow-lg');
            navbar.classList.add('bg-white/90', 'md:bg-transparent');
        }
    });
}

// ===================== CART PAGE FUNCTIONS =====================
function renderCartPage() {
    const cartItems = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const shippingSection = document.getElementById('shipping-section');
    const upsellingSection = document.getElementById('upselling');

    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.classList.add('hidden');
        if (cartEmpty) cartEmpty.classList.remove('hidden');
        if (shippingSection) shippingSection.classList.add('hidden');
        if (upsellingSection) upsellingSection.classList.add('hidden');
    } else {
        cartItems.classList.remove('hidden');
        if (cartEmpty) cartEmpty.classList.add('hidden');
        if (shippingSection) shippingSection.classList.remove('hidden');

        cartItems.innerHTML = cart.map((item, index) => {
            // Build metal color options HTML
            const metalColorsHtml = metalColors.map(color => {
                const isSelected = item.metalColor && item.metalColor.value === color.value ? 'selected' : '';
                const borderStyle = color.value === '#FFFFFF' ? 'border: 2px solid #e0e0e0;' : '';
                return `
                    <div class="color-option">
                        <div class="color-circle ${isSelected}" 
                             style="background-color: ${color.value}; ${borderStyle}"
                             onclick="selectColor(${index}, 'metal', '${color.value}', '${color.name}', this)"></div>
                        <span class="color-label">${color.name}</span>
                    </div>
                `;
            }).join('');

            // Build fabric color options HTML
            const fabricColorsHtml = fabricColors.map(color => {
                const isSelected = item.fabricColor && item.fabricColor.value === color.value ? 'selected' : '';
                return `
                    <div class="color-option">
                        <div class="color-circle ${isSelected}" 
                             style="background-color: ${color.value};"
                             onclick="selectColor(${index}, 'fabric', '${color.value}', '${color.name}', this)"></div>
                        <span class="color-label">${color.name}</span>
                    </div>
                `;
            }).join('');

            return `
            <div class="bg-gray-50 rounded-xl p-4">
                <div class="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div class="w-20 h-20 bg-gradient-to-br from-teal-100 to-turquoise-100 rounded-xl flex items-center justify-center">
                        <span class="text-2xl">${getCategoryIcon(item.category)}</span>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-bold text-gray-800">${item.name} - ${item.size || item.design}</h4>
                        <p class="text-sm text-gray-500">${item.dimensions}</p>
                        ${item.metalSlats ? '<span class="text-xs text-lime-600">+ شرائح معدنية</span>' : ''}
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="updateQuantity(${index}, -1)" class="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold">-</button>
                        <span class="w-8 text-center font-bold">${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)" class="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold">+</button>
                    </div>
                    <span class="font-bold text-teal-600 min-w-[100px] text-left">${(item.price * item.quantity).toLocaleString('ar-EG')} جنيه</span>
                    <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700 p-2">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                    </button>
                </div>
                
                <!-- Color Selection Section -->
                <div class="color-section">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Metal Frame Color -->
                        <div>
                            <div class="color-section-title">
                                <span>🔩</span> لون الإطار المعدني:
                            </div>
                            <div class="colors-row">
                                ${metalColorsHtml}
                            </div>
                        </div>
                        <!-- Fabric Color -->
                        <div>
                            <div class="color-section-title">
                                <span>🛋️</span> لون القماش:
                            </div>
                            <div class="colors-row">
                                ${fabricColorsHtml}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        }).join('');

        // Upselling
        if (upsellingSection) {
            const cartCategories = [...new Set(cart.map(item => item.category))];
            const allCategories = ['beds', 'mattresses', 'wardrobes', 'bedside'];
            const missingCategories = allCategories.filter(c => !cartCategories.includes(c));

            if (missingCategories.length > 0) {
                upsellingSection.classList.remove('hidden');
                const upsellProducts = products.filter(p => missingCategories.includes(p.category)).slice(0, 4);
                const upsellingGrid = document.getElementById('upselling-grid');
                if (upsellingGrid) {
                    upsellingGrid.innerHTML = upsellProducts.map(p => `
                        <div class="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-100">
                            <div class="w-12 h-12 bg-gradient-to-br from-teal-100 to-turquoise-100 rounded-lg flex items-center justify-center">
                                <span>${getCategoryIcon(p.category)}</span>
                            </div>
                            <div class="flex-1">
                                <p class="font-medium text-sm">${p.name}</p>
                                <p class="text-teal-600 text-sm font-bold">${p.price.toLocaleString('ar-EG')} جنيه</p>
                            </div>
                            <button onclick="addToCartFromUpsell(${p.id})" class="btn-secondary text-white px-3 py-1 rounded-lg text-xs">أضف</button>
                        </div>
                    `).join('');
                }
            } else {
                upsellingSection.classList.add('hidden');
            }
        }
    }

    updateTotals();
}

function addToCartFromUpsell(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId && !item.metalSlats);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, metalSlats: false, quantity: 1 });
    }
    saveCart();
    updateCartUI();
    renderCartPage();
}

function updateTotals() {
    const productsTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const productsTotalEl = document.getElementById('products-total');
    const shippingTotalEl = document.getElementById('shipping-total');
    const grandTotalEl = document.getElementById('grand-total');

    if (productsTotalEl) productsTotalEl.textContent = productsTotal.toLocaleString('ar-EG') + ' جنيه';
    if (shippingTotalEl) shippingTotalEl.textContent = shippingCost.toLocaleString('ar-EG') + ' جنيه';
    if (grandTotalEl) grandTotalEl.textContent = (productsTotal + shippingCost).toLocaleString('ar-EG') + ' جنيه';
}

function initCartPage() {
    const shippingSelect = document.getElementById('shipping-select');
    if (shippingSelect) {
        // Restore saved shipping selection
        const savedCity = getSelectedCity();
        if (savedCity) {
            const options = shippingSelect.options;
            for (let i = 0; i < options.length; i++) {
                if (options[i].dataset.city === savedCity) {
                    shippingSelect.selectedIndex = i;
                    shippingCost = parseInt(options[i].value) || 0;
                    break;
                }
            }
        }

        shippingSelect.addEventListener('change', (e) => {
            const cost = parseInt(e.target.value) || 0;
            const selectedOption = e.target.options[e.target.selectedIndex];
            const city = selectedOption.dataset.city || '';
            saveShippingCost(cost, city);
            updateTotals();
        });
    }

    renderCartPage();
    updateCartUI();
}

// ===================== CHECKOUT PAGE FUNCTIONS =====================
function renderCheckoutSummary() {
    const productsTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const checkoutItems = document.getElementById('checkout-items');
    if (checkoutItems) {
        checkoutItems.innerHTML = cart.map(item => {
            // Build color info string
            let colorInfo = '';
            if (item.metalColor) {
                colorInfo += `<div class="text-xs text-gray-500 mt-1">• لون الإطار: ${item.metalColor.name}</div>`;
            }
            if (item.fabricColor) {
                colorInfo += `<div class="text-xs text-gray-500">• لون القماش: ${item.fabricColor.name}</div>`;
            }

            return `
            <div class="border-b border-purple-100 pb-2 mb-2 last:border-b-0 last:pb-0 last:mb-0">
                <div class="flex justify-between">
                    <span class="font-medium">${item.name} ${item.size || item.design} x${item.quantity}</span>
                    <span class="font-bold">${(item.price * item.quantity).toLocaleString('ar-EG')} جنيه</span>
                </div>
                ${colorInfo}
            </div>
        `;
        }).join('');
    }

    const checkoutProductsTotal = document.getElementById('checkout-products-total');
    const checkoutShipping = document.getElementById('checkout-shipping');
    const checkoutTotal = document.getElementById('checkout-total');

    if (checkoutProductsTotal) checkoutProductsTotal.textContent = productsTotal.toLocaleString('ar-EG') + ' جنيه';
    if (checkoutShipping) checkoutShipping.textContent = shippingCost.toLocaleString('ar-EG') + ' جنيه';
    if (checkoutTotal) checkoutTotal.textContent = (productsTotal + shippingCost).toLocaleString('ar-EG') + ' جنيه';
}

function initCheckoutPage() {
    // Pre-select city based on shipping selection
    const citySelect = document.getElementById('city');
    const savedCity = getSelectedCity();
    if (savedCity && citySelect) {
        citySelect.value = savedCity;
    }

    renderCheckoutSummary();
    updateCartUI();

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }
}

function handleCheckoutSubmit(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const primaryPhone = document.getElementById('primaryPhone').value;
    const secondaryPhone = document.getElementById('secondaryPhone').value;
    const city = document.getElementById('city').value;
    const fullAddress = document.getElementById('fullAddress').value;

    const productsPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalPrice = productsPrice + shippingCost;
    const numProducts = cart.reduce((sum, item) => sum + item.quantity, 0);
    const selectedCategories = [...new Set(cart.map(item => item.name + ' ' + (item.size || item.design)))];

    // UI Loading State
    const submitBtn = document.querySelector('button[type="submit"][form="checkout-form"]') || document.querySelector('#checkout-form button[type="submit"]');
    const originalBtnContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="animate-spin inline-block ml-2">↻</span> جاري التحويل...';

    setTimeout(() => {
        // Facebook Pixel - InitiateCheckout
        if (typeof fbq !== 'undefined') {
            fbq('track', 'InitiateCheckout', {
                content_name: selectedCategories.join(', '),
                content_category: 'furniture',
                value: totalPrice,
                currency: 'EGP',
                num_items: numProducts
            });
        }

        // Build WhatsApp Message
        let message = `السلام عليكم ورحمة الله وبركاته \n\n`;
        message += `🛒 *طلب جديد*\n`;
        message += `━━━━━━━━━━━━━━━━━\n\n`;

        cart.forEach((item, index) => {
            message += `📦 *المنتج ${index + 1}:*\n`;
            message += `• الموديل: ${item.name}\n`;
            message += `• المقاس/التصميم: ${item.size || item.design}\n`;
            message += `• الكمية: ${item.quantity}\n`;
            if (item.metalSlats) message += `• شرائح معدنية: نعم\n`;
            if (item.metalColor) message += `• لون الإطار المعدني: ${item.metalColor.name}\n`;
            if (item.fabricColor) message += `• لون القماش: ${item.fabricColor.name}\n`;
            message += `• السعر: ${(item.price * item.quantity).toLocaleString('ar-EG')} جنيه\n\n`;
        });

        message += `👤 *بيانات العميل:*\n`;
        message += `• الاسم الكامل: ${fullName}\n`;
        message += `• رقم الهاتف الأساسي: ${primaryPhone}\n`;
        if (secondaryPhone) message += `• رقم هاتف ثانوي: ${secondaryPhone}\n`;
        message += `• المحافظة: ${city}\n`;
        message += `• العنوان التفصيلي: ${fullAddress}\n\n`;

        message += `💰 *الفاتورة:*\n`;
        message += `• عدد المنتجات: ${numProducts}\n`;
        message += `• سعر المنتجات: ${productsPrice.toLocaleString('ar-EG')} جنيه\n`;
        message += `• رسوم الشحن: ${shippingCost.toLocaleString('ar-EG')} جنيه\n`;
        message += `• الإجمالي: ${totalPrice.toLocaleString('ar-EG')} جنيه\n\n`;

        message += `━━━━━━━━━━━━━━━━━\n`;
        message += `📅 تأكيد الطلب: ${new Date().toLocaleString('ar-EG')}\n`;
        message += `✨ شكراً لاختياركم مارفل للأثاث العصري`;

        const whatsappUrl = `https://wa.me/201044231348?text=${encodeURIComponent(message)}`;

        // Facebook Pixel - Purchase
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Purchase', {
                content_name: selectedCategories.join(', '),
                content_category: 'furniture',
                value: totalPrice,
                currency: 'EGP',
                num_items: numProducts
            });
        }

        // Clear cart and redirect
        cart = [];
        saveCart();
        localStorage.removeItem('marvelShippingCost');
        localStorage.removeItem('marvelSelectedCity');
        updateCartUI();

        window.open(whatsappUrl, '_blank');

        // Reset button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;

        // Redirect to home
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500);
    }, 1000);
}

// ===================== INDEX PAGE FUNCTIONS =====================
function renderProducts(filter = 'all') {
    const productsGrid = document.getElementById('products-grid');
    if (!productsGrid) return;

    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    productsGrid.innerHTML = filtered.map(p => `
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg card-hover fade-in" data-category="${p.category}">
            <div class="aspect-square bg-gray-100 relative overflow-hidden">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-100 to-turquoise-100 hidden">
                    <span class="text-teal-600 text-4xl">${getCategoryIcon(p.category)}</span>
                </div>
            </div>
            <div class="p-5">
                <div class="flex items-start justify-between mb-2">
                    <h3 class="font-bold text-lg text-gray-800">${p.name}</h3>
                    <span class="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">${p.size || p.design}</span>
                </div>
                <p class="text-gray-500 text-sm mb-3">${p.dimensions}</p>
                ${p.hasMetalSlats ? `
                    <span class="text-sm text-gray-600">(بدون مرتبة)</span>
                <label class="flex items-center gap-2 mb-3 cursor-pointer">
                    <input type="checkbox" class="metal-slats-toggle w-4 h-4 rounded text-lime-600" data-id="${p.id}">
                    <span class="text-sm text-gray-600">ملل معدنية لزيادة الثبات والمتانة (+500 جنيه)</span>
                </label>` : ''}
                <div class="flex items-center justify-between">
                    <span class="text-xl font-bold text-teal-600" id="price-${p.id}">${p.price.toLocaleString('ar-EG')} جنيه</span>
                    <button onclick="addToCart(${p.id})" class="btn-primary text-white px-4 py-2 rounded-xl text-sm font-bold">
                        أضف للسلة
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add event listeners for metal slats toggles
    document.querySelectorAll('.metal-slats-toggle').forEach(toggle => {
        toggle.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            const product = products.find(p => p.id === id);
            const priceEl = document.getElementById(`price-${id}`);
            const newPrice = e.target.checked ? product.price + 500 : product.price;
            priceEl.textContent = newPrice.toLocaleString('ar-EG') + ' جنيه';
        });
    });
}

function setupFilters() {
    document.querySelectorAll('.category-filter').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            if (e.target.value === 'all' && e.target.checked) {
                document.querySelectorAll('.category-filter').forEach(cb => {
                    if (cb.value !== 'all') cb.checked = false;
                });
                renderProducts('all');
            } else {
                document.querySelector('.category-filter[value="all"]').checked = false;
                const checked = [...document.querySelectorAll('.category-filter:checked')].map(cb => cb.value).filter(v => v !== 'all');
                if (checked.length === 0) {
                    document.querySelector('.category-filter[value="all"]').checked = true;
                    renderProducts('all');
                } else {
                    renderProducts(checked.length === 1 ? checked[0] : 'all');
                }
            }
        });
    });
}

function initIndexPage() {
    // Reset horizontal scroll to prevent shifted view on page load
    window.scrollTo(0, 0);
    document.documentElement.scrollLeft = 0;
    document.body.scrollLeft = 0;

    renderProducts();
    updateCartUI();
    setupFilters();
    setupNavbarScroll();
    startOfferTimer();
    setupMobileMenu();

    // Cart button click handler
    const cartBtn = document.getElementById('cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCartPage);
    }

    // Mobile Input UX
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            setTimeout(() => {
                input.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        });
    });
}
