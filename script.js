// Water footprint data (liters per unit)
const waterFootprints = {
    // Clothing & Fashion
    tshirt: 2700,
    jeans: 7600,
    sneakers: 4400,
    leather_shoes: 8000,
    cotton_dress: 9000,
    
    // Food & Drinks
    burger: 2500,
    pizza: 1200,
    chocolate: 1700,
    egg: 200,
    milk: 1000,
    cheese: 5000,
    chicken: 4300,
    rice: 2500,
    coffee: 140,
    tea: 30,
    
    // Technology & Electronics
    smartphone: 12000,
    laptop: 50000,
    tablet: 30000,
    desktop: 100000,
    gaming_console: 40000,
    
    // Household Items & Miscellaneous
    cotton_pillow: 2000,
    bed_sheet: 10000,
    car: 400000,
    bicycle: 5000,
    toilet_paper: 140,
    paper: 10
};

// Product information data
const productInfo = {
    // Clothing & Fashion
    tshirt: {
        title: "T-Shirt – 2,700 Liters!",
        category: "Clothing & Footwear",
        icon: "👕",
        breakdown: [
            "Cotton farming = 2,200L",
            "Processing & dyeing = 500L"
        ],
        reasons: [
            "Cotton fields require massive irrigation",
            "Cleaning, dyeing, and fabric processing also need water"
        ],
        example: "A bucket of water (10L) every day for a year = Still less than one T-shirt!"
    },
    jeans: {
        title: "Jeans – 7,600 Liters!",
        category: "Clothing & Footwear",
        icon: "👖",
        breakdown: [
            "Cotton farming = 6,000L",
            "Processing & dyeing = 1,600L"
        ],
        reasons: [
            "Denim requires more cotton than a T-shirt",
            "Dyeing and washing processes use significant water"
        ],
        example: "One pair of jeans = Water for 76 showers!"
    },
    sneakers: {
        title: "Sneakers – 4,400 Liters!",
        category: "Clothing & Footwear",
        icon: "👟",
        breakdown: [
            "Rubber & textile processing = 2,500L",
            "Manufacturing & assembly = 1,900L"
        ],
        reasons: [
            "Rubber plantations need irrigation",
            "Fabric production requires water-intensive dyeing"
        ],
        example: "One pair of sneakers = 22 bathtubs of water!"
    },
    leather_shoes: {
        title: "Leather Shoes – 8,000 Liters!",
        category: "Clothing & Footwear",
        icon: "👞",
        breakdown: [
            "Animal raising = 6,000L",
            "Leather tanning = 2,000L"
        ],
        reasons: [
            "Livestock farming consumes water for feed and hydration",
            "Leather treatment requires chemical-intensive water usage"
        ],
        example: "One pair of leather shoes = A person's drinking water for 4 years!"
    },
    cotton_dress: {
        title: "Cotton Dress – 9,000 Liters!",
        category: "Clothing & Footwear",
        icon: "👗",
        breakdown: [
            "Cotton farming = 7,500L",
            "Processing & dyeing = 1,500L"
        ],
        reasons: [
            "Dresses use more fabric than shirts",
            "Dyeing processes require large amounts of water"
        ],
        example: "A cotton dress = Water needed for 90 showers!"
    },
    
    // Food & Drinks
    burger: {
        title: "Burger – 2,500 Liters!",
        category: "Food & Drinks",
        icon: "🍔",
        breakdown: [
            "Meat production = 2,000L",
            "Bread & vegetables = 500L"
        ],
        reasons: [
            "Livestock need large amounts of water for drinking and feed",
            "Processing meat requires significant water"
        ],
        example: "One burger = Water for 10 days of showers!"
    },
    pizza: {
        title: "Pizza – 1,200 Liters!",
        category: "Food & Drinks",
        icon: "🍕",
        breakdown: [
            "Cheese = 600L",
            "Dough & toppings = 600L"
        ],
        reasons: [
            "Dairy farming requires water for cow hydration and feed",
            "Processing cheese is water-intensive"
        ],
        example: "One pizza = 600 cups of tea!"
    },
    chocolate: {
        title: "Chocolate – 1,700 Liters!",
        category: "Food & Drinks",
        icon: "🍫",
        breakdown: [
            "Cocoa beans = 1,200L",
            "Processing & sugar = 500L"
        ],
        reasons: [
            "Cacao trees need tropical climates with high water use",
            "Processing chocolate requires additional water"
        ],
        example: "One chocolate bar = Water for 34 toilet flushes!"
    },
    egg: {
        title: "Egg – 200 Liters!",
        category: "Food & Drinks",
        icon: "🥚",
        breakdown: [
            "Water for feed & egg production = 200L"
        ],
        reasons: [
            "Chickens require water-intensive feed",
            "Egg production involves farm maintenance"
        ],
        example: "One egg = Water for 4 cups of coffee!"
    },
    milk: {
        title: "Milk – 1,000 Liters per liter!",
        category: "Food & Drinks",
        icon: "🍼",
        breakdown: [
            "Cow hydration & feed = 1,000L"
        ],
        reasons: [
            "Cows require large amounts of water for drinking",
            "Dairy processing adds to water use"
        ],
        example: "One liter of milk = Water for 10 showers!"
    },
    
    // Technology & Electronics
    smartphone: {
        title: "Smartphone – 12,000 Liters!",
        category: "Technology & Electronics",
        icon: "📱",
        breakdown: [
            "Mining = 6,000L",
            "Chip & circuit production = 4,000L",
            "Battery & screen = 2,000L"
        ],
        reasons: [
            "Mining metals like lithium and cobalt needs water",
            "Manufacturing chips and screens requires water cooling"
        ],
        example: "One phone = A small swimming pool of water!"
    },
    laptop: {
        title: "Laptop – 50,000 Liters!",
        category: "Technology & Electronics",
        icon: "💻",
        breakdown: [
            "Metal mining = 25,000L",
            "Chip production = 15,000L",
            "Battery & screen = 10,000L"
        ],
        reasons: [
            "Metal components require mining and refining",
            "Microchips and circuit boards use water for cooling and cleaning"
        ],
        example: "One laptop = Water for 500 showers!"
    },
    
    // Add more product info as needed
};

// Fill in missing product info with generic templates
Object.keys(waterFootprints).forEach(product => {
    if (!productInfo[product]) {
        const capitalizedProduct = product.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
        productInfo[product] = {
            title: `${capitalizedProduct} – ${waterFootprints[product]} Liters!`,
            category: "Other Products",
            icon: "💧",
            breakdown: [
                `Production & processing = ${waterFootprints[product]}L`
            ],
            reasons: [
                "Manufacturing requires water for materials and processing",
                "Water is used throughout the supply chain"
            ],
            example: `One ${product.replace('_', ' ')} = Water for ${Math.round(waterFootprints[product]/100)} showers!`
        };
    }
});

// Quiz questions
const quizQuestions = [
    {
        question: "How much water is needed to produce a single cup of coffee?",
        options: ["10 liters", "50 liters", "140 liters", "500 liters"],
        correct: 2,
        explanation: "A single cup of coffee requires about 140 liters of water to produce."
    },
    {
        question: "Which food item has the highest water footprint per kilogram?",
        options: ["Chocolate", "Chicken", "Rice", "Vegetables"],
        correct: 0,
        explanation: "Chocolate has the highest water footprint at 17,000 liters per kg, compared to chicken (4,300 liters), rice (2,500 liters), and vegetables (~300 liters)."
    },
    {
        question: "How many liters of water does it take to produce a single T-shirt?",
        options: ["500 liters", "1,500 liters", "2,700 liters", "5,000 liters"],
        correct: 2,
        explanation: "A single T-shirt requires about 2,700 liters of water to produce."
    },
    {
        question: "What takes more water to produce?",
        options: ["A pizza", "A T-shirt", "A veggie burger", "A liter of milk"],
        correct: 1,
        explanation: "A T-shirt requires 2,700 liters, while a pizza needs 1,200 liters, a veggie burger ~400 liters, and milk 1,000 liters per liter."
    },
    {
        question: "How many liters of water does it take to manufacture a smartphone?",
        options: ["100 liters", "1,000 liters", "13,000 liters", "50,000 liters"],
        correct: 2,
        explanation: "Manufacturing a smartphone requires approximately 13,000 liters of water."
    },
    {
        question: "Which of these requires the most water to produce?",
        options: ["A single sheet of A4 paper", "A cotton pillow", "A bicycle", "A gold ring"],
        correct: 3,
        explanation: "A gold ring requires about 100,000 liters of water, compared to paper (10 liters), cotton pillow (2,000 liters), and bicycle (5,000 liters)."
    },
    {
        question: "How much water is needed to manufacture a single car?",
        options: ["50,000 liters", "100,000 liters", "250,000 liters", "400,000 liters"],
        correct: 3,
        explanation: "Manufacturing a single car requires approximately 400,000 liters of water."
    },
    {
        question: "What uses more water per kilogram?",
        options: ["Rice", "Chocolate", "Oranges", "Eggs"],
        correct: 1,
        explanation: "Chocolate uses 17,000 liters per kg, compared to rice (2,500 liters), oranges (560 liters), and eggs (200 liters per egg)."
    },
    {
        question: "What is one of the best ways to reduce your water footprint?",
        options: ["Taking shorter showers", "Buying second-hand clothing", "Using a reusable water bottle", "Washing clothes less often"],
        correct: 1,
        explanation: "Buying second-hand clothing significantly reduces water footprint by avoiding water-heavy textile production."
    },
    {
        question: "Which of these everyday actions wastes the most hidden water?",
        options: ["Leaving the tap running while brushing teeth", "Buying a brand-new pair of jeans", "Taking a long shower", "Using plastic shopping bags"],
        correct: 1,
        explanation: "Buying new jeans wastes 7,600 liters of water, compared to brushing teeth (~8 liters/min), shower (150 liters/10min), and plastic bags (40 liters/bag)."
    }
];

// Water saving tips based on user preferences
const waterSavingTips = {
    clothes: [
        "Buy second-hand clothing to reduce water footprint",
        "Choose sustainable brands that use less water in production",
        "Wash clothes only when necessary and with full loads"
    ],
    food: [
        "Reduce red meat consumption as it has a high water footprint",
        "Choose plant-based alternatives when possible",
        "Buy local produce to reduce water used in transportation"
    ],
    electronics: [
        "Extend device lifespan through proper maintenance",
        "Buy refurbished electronics when possible",
        "Trade in old devices instead of disposing them"
    ]
};

// Initialize calculator functionality with mobile optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Prevent double-tap zoom on mobile
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        const DOUBLE_TAP_DELAY = 300;
        if (now - lastTap < DOUBLE_TAP_DELAY) {
            e.preventDefault();
        }
        lastTap = now;
    }, { passive: false });
    
    let lastTap = 0;
    
    // Calculator functionality
    const productSelect = document.getElementById('product');
    const quantitySlider = document.getElementById('quantity');
    const quantityValue = document.getElementById('quantityValue');
    const resultDiv = document.getElementById('result');
    const productInfoSection = document.getElementById('product-info');
    const productDetailsDiv = document.getElementById('product-details');

    function updateCalculator() {
        const product = productSelect.value;
        const quantity = parseInt(quantitySlider.value);
        const waterUsage = waterFootprints[product] * quantity;
        
        // Add loading effect
        resultDiv.classList.add('loading');
        
        // Simulate calculation delay for better UX
        setTimeout(() => {
            quantityValue.textContent = quantity;
            resultDiv.innerHTML = `<div class="flex items-center justify-center">
                <span class="text-4xl font-bold text-blue-600">${waterUsage.toLocaleString()}</span>
                <span class="ml-2 text-lg">liters of water</span>
            </div>
            <div class="text-center text-sm text-gray-600 mt-2">That's equivalent to ${Math.round(waterUsage/150)} showers!</div>`;
            resultDiv.classList.remove('loading');
            
            // Update product info section
            updateProductInfo(product, quantity);
            
            // Add haptic feedback if available
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(50);
            }
        }, 300);
    }

    function updateProductInfo(product, quantity) {
        if (productInfoSection && productDetailsDiv && productInfo[product]) {
            const info = productInfo[product];
            
            // Create HTML content for product info
            let html = `
                <div class="mb-4">
                    <h3 class="text-xl font-bold flex items-center">
                        <span class="text-2xl mr-2">${info.icon}</span> 
                        ${info.title}
                    </h3>
                    <p class="text-blue-600 text-sm font-medium">${info.category}</p>
                </div>
                
                <div class="mb-4">
                    <h4 class="font-bold text-blue-700">Water Breakdown:</h4>
                    <ul class="list-disc pl-5 space-y-1 mt-2">
                        ${info.breakdown.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="mb-4">
                    <h4 class="font-bold text-blue-700">Why So Much Water?</h4>
                    <ul class="list-disc pl-5 space-y-1 mt-2">
                        ${info.reasons.map(reason => `<li>${reason}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p class="font-bold">Did You Know? 💡</p>
                    <p>${info.example}</p>
                </div>
            `;
            
            // If quantity is more than 1, add total calculation
            if (quantity > 1) {
                const totalWater = waterFootprints[product] * quantity;
                html += `
                    <div class="mt-4 p-3 bg-blue-100 rounded-lg">
                        <p class="font-bold">Your Total Impact:</p>
                        <p>${quantity} ${product.replace('_', ' ')}(s) = ${totalWater.toLocaleString()} liters of water</p>
                    </div>
                `;
            }
            
            productDetailsDiv.innerHTML = html;
            productInfoSection.classList.remove('hidden');
        }
    }

    productSelect.addEventListener('change', updateCalculator);
    quantitySlider.addEventListener('input', updateCalculator);
    
    // Add touch events for better mobile experience
    quantitySlider.addEventListener('touchstart', () => {
        document.body.style.overflow = 'hidden'; // Prevent page scrolling while adjusting slider
    });
    
    quantitySlider.addEventListener('touchend', () => {
        document.body.style.overflow = ''; // Re-enable page scrolling
    });
    
    updateCalculator(); // Initial calculation

    // Initialize quiz with mobile optimizations
    let currentQuestion = 0;
    const questionDiv = document.getElementById('question');
    const optionsDiv = document.getElementById('options');
    const nextButton = document.getElementById('next-question');
    const quizResult = document.getElementById('quiz-result');
    let score = 0;

    function displayQuestion() {
        const q = quizQuestions[currentQuestion];
        questionDiv.textContent = `Question ${currentQuestion + 1}/${quizQuestions.length}: ${q.question}`;
        optionsDiv.innerHTML = '';
        
        q.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'quiz-option w-full text-left';
            button.textContent = option;
            button.addEventListener('click', () => selectAnswer(index));
            
            // Add touch feedback
            button.addEventListener('touchstart', () => {
                button.style.backgroundColor = 'rgba(219, 234, 254, 0.9)';
            }, { passive: true });
            
            button.addEventListener('touchend', () => {
                button.style.backgroundColor = '';
            }, { passive: true });
            
            optionsDiv.appendChild(button);
        });
    }

    function selectAnswer(index) {
        const q = quizQuestions[currentQuestion];
        const options = document.querySelectorAll('.quiz-option');
        
        options.forEach(option => option.disabled = true);
        options[index].classList.add(index === q.correct ? 'correct' : 'incorrect');
        options[q.correct].classList.add('correct');
        
        // Add explanation
        const explanation = document.createElement('div');
        explanation.className = 'mt-3 p-3 bg-gray-100 rounded-lg text-sm';
        explanation.textContent = q.explanation;
        optionsDiv.appendChild(explanation);
        
        if (index === q.correct) {
            score++;
            // Add haptic feedback for correct answer
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate([50, 50, 50]);
            }
        } else {
            // Different haptic feedback for incorrect answer
            if (window.navigator && window.navigator.vibrate) {
                window.navigator.vibrate(200);
            }
        }
        
        // Update next button text
        nextButton.textContent = currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results';
        
        nextButton.onclick = () => {
            if (currentQuestion < quizQuestions.length - 1) {
                currentQuestion++;
                displayQuestion();
            } else {
                showFinalResult();
            }
        };
    }

    function showFinalResult() {
        questionDiv.style.display = 'none';
        optionsDiv.style.display = 'none';
        nextButton.style.display = 'none';
        quizResult.classList.remove('hidden');
        
        const percentage = Math.round((score / quizQuestions.length) * 100);
        
        // Create more engaging result display
        quizResult.innerHTML = `
            <div class="text-center">
                <div class="text-2xl font-bold mb-3">Your Water Saver Score: ${percentage}%</div>
                <div class="relative h-6 bg-gray-200 rounded-full overflow-hidden mb-4">
                    <div class="absolute top-0 left-0 h-full bg-blue-600" style="width: ${percentage}%"></div>
                </div>
                <p class="mb-3">You got ${score} out of ${quizQuestions.length} questions correct!</p>
                <p class="text-sm text-gray-600">Keep learning about water conservation and make a difference!</p>
                <button id="restart-quiz" class="mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">Try Again</button>
            </div>
        `;
        
        // Add restart functionality
        document.getElementById('restart-quiz').addEventListener('click', () => {
            currentQuestion = 0;
            score = 0;
            questionDiv.style.display = 'block';
            optionsDiv.style.display = 'block';
            nextButton.style.display = 'inline-block';
            quizResult.classList.add('hidden');
            displayQuestion();
        });
    }

    displayQuestion(); // Start the quiz

    // Initialize personalized tips with better mobile experience
    const preferenceSelect = document.getElementById('preference');
    const tipsDiv = document.getElementById('personalized-tips');

    function updateTips() {
        const preference = preferenceSelect.value;
        const tips = waterSavingTips[preference];
        
        // Add loading effect
        tipsDiv.classList.add('loading');
        
        setTimeout(() => {
            tipsDiv.innerHTML = `
                <ul class="list-disc pl-5 space-y-2">
                    ${tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
                <div class="mt-3 text-center">
                    <p class="text-sm text-gray-600">Share these tips with friends!</p>
                </div>
            `;
            tipsDiv.classList.remove('loading');
        }, 300);
    }

    preferenceSelect.addEventListener('change', updateTips);
    updateTips(); // Initial tips

    // Improve facts section scrolling for mobile
    const factsContainer = document.querySelector('.facts-container');
    if (factsContainer) {
        // Add momentum scrolling for iOS
        factsContainer.style.WebkitOverflowScrolling = 'touch';
        
        // Add scroll snap for better mobile experience
        const factCards = document.querySelectorAll('.fact-card');
        factCards.forEach(card => {
            card.style.scrollSnapAlign = 'start';
        });
        
        // Add touch feedback to fact cards
        factCards.forEach(card => {
            card.addEventListener('touchstart', () => {
                card.style.transform = 'scale(0.98)';
            }, { passive: true });
            
            card.addEventListener('touchend', () => {
                card.style.transform = '';
            }, { passive: true });
        });
    }
    
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Add mobile-specific optimizations
    if (isMobile) {
        // Optimize video loading
        const videoIframe = document.querySelector('iframe');
        if (videoIframe) {
            // Add loading attribute for better performance
            videoIframe.setAttribute('loading', 'lazy');
            
            // Add title for accessibility
            videoIframe.setAttribute('title', 'Video about hidden water footprint');
        }
        
        // Add fast click for mobile
        document.addEventListener('touchstart', function() {}, {passive: true});
    }
});

// Add service worker for offline capability
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registered');
        }).catch(error => {
            console.log('ServiceWorker registration failed:', error);
        });
    });
}