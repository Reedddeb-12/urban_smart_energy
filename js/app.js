// Urban Energy Savings Platform - Main Application
// Data Storage using LocalStorage

class EnergyApp {
    constructor() {
        this.currentUser = null;
        this.init();
    }

    init() {
        // Check if user is logged in
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.showApp();
        } else {
            this.showAuth();
        }

        this.setupEventListeners();
        this.initializeData();
    }

    initializeData() {
        // Initialize default data structures if they don't exist
        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([]));
        }
        if (!localStorage.getItem('bills')) {
            localStorage.setItem('bills', JSON.stringify([]));
        }
        if (!localStorage.getItem('actions')) {
            localStorage.setItem('actions', JSON.stringify([]));
        }
        if (!localStorage.getItem('transactions')) {
            localStorage.setItem('transactions', JSON.stringify([]));
        }
        if (!localStorage.getItem('streaks')) {
            localStorage.setItem('streaks', JSON.stringify([]));
        }
        if (!localStorage.getItem('badges')) {
            this.initializeBadges();
        }
        // Always reinitialize stocks to ensure latest logos
        this.initializeStocks();
    }

    initializeBadges() {
        const badges = [
            { id: 1, name: 'First Step', icon: '🌱', description: 'Log your first action', criteria: { type: 'actions', value: 1 } },
            { id: 2, name: 'Week Warrior', icon: '⚡', description: '7-day streak', criteria: { type: 'streak', value: 7 } },
            { id: 3, name: 'Energy Saver', icon: '💡', description: 'Save 50 kWh', criteria: { type: 'energy', value: 50 } },
            { id: 4, name: 'Green Investor', icon: '💰', description: 'Make first investment', criteria: { type: 'investment', value: 1 } },
            { id: 5, name: 'Eco Champion', icon: '🏆', description: 'Save 100 kg CO2', criteria: { type: 'co2', value: 100 } },
            { id: 6, name: 'Consistency King', icon: '👑', description: '30-day streak', criteria: { type: 'streak', value: 30 } }
        ];
        localStorage.setItem('badges', JSON.stringify(badges));
    }

    initializeStocks() {
        const stocks = [
            { 
                id: 1, 
                ticker: 'ADANIGREEN.NS', 
                name: 'Adani Green Energy Ltd', 
                logo: 'images/logos/adani-green.svg',
                fallbackLogo: 'https://ui-avatars.com/api/?name=Adani+Green&size=100&background=10b981&color=fff&bold=true',
                sector: 'Solar & Wind Power',
                description: 'India\'s largest renewable energy company with 20+ GW capacity',
                currentPrice: 1245.50,
                minShares: 1,
                minAmount: 1246
            },
            { 
                id: 2, 
                ticker: 'TATAPOWER.NS', 
                name: 'Tata Power Company Ltd', 
                logo: 'images/logos/tata-power.svg',
                fallbackLogo: 'https://ui-avatars.com/api/?name=Tata+Power&size=100&background=3b82f6&color=fff&bold=true',
                sector: 'Integrated Power & Renewables',
                description: 'Leading integrated power company with growing renewable portfolio',
                currentPrice: 385.75,
                minShares: 1,
                minAmount: 386
            },
            { 
                id: 3, 
                ticker: 'SUZLON.NS', 
                name: 'Suzlon Energy Ltd', 
                logo: 'images/logos/suzlon.svg',
                fallbackLogo: 'https://ui-avatars.com/api/?name=Suzlon&size=100&background=059669&color=fff&bold=true',
                sector: 'Wind Turbine Manufacturing',
                description: 'India\'s leading wind turbine manufacturer with global presence',
                currentPrice: 58.30,
                minShares: 5,
                minAmount: 292
            },
            { 
                id: 4, 
                ticker: 'NHPC.NS', 
                name: 'NHPC Ltd', 
                logo: 'images/logos/nhpc.svg',
                fallbackLogo: 'https://ui-avatars.com/api/?name=NHPC&size=100&background=0ea5e9&color=fff&bold=true',
                sector: 'Hydroelectric Power',
                description: 'India\'s premier hydropower development company',
                currentPrice: 82.15,
                minShares: 5,
                minAmount: 411
            },
            { 
                id: 5, 
                ticker: 'SJVN.NS', 
                name: 'SJVN Ltd', 
                logo: 'images/logos/sjvn.svg',
                fallbackLogo: 'https://ui-avatars.com/api/?name=SJVN&size=100&background=8b5cf6&color=fff&bold=true',
                sector: 'Hydro & Solar Power',
                description: 'Government-owned renewable energy company focusing on hydro and solar',
                currentPrice: 115.40,
                minShares: 5,
                minAmount: 577
            },
            { 
                id: 6, 
                ticker: 'IREDA.NS', 
                name: 'Indian Renewable Energy Development Agency', 
                logo: 'images/logos/ireda.svg',
                fallbackLogo: 'https://ui-avatars.com/api/?name=IREDA&size=100&background=f59e0b&color=fff&bold=true',
                sector: 'Renewable Energy Financing',
                description: 'Government financial institution for renewable energy projects',
                currentPrice: 198.25,
                minShares: 3,
                minAmount: 595
            },
            { 
                id: 7, 
                ticker: 'BOROSIL.NS', 
                name: 'Borosil Renewables Ltd', 
                logo: 'images/logos/borosil.svg',
                fallbackLogo: 'https://ui-avatars.com/api/?name=Borosil&size=100&background=ec4899&color=fff&bold=true',
                sector: 'Solar Glass Manufacturing',
                description: 'Leading manufacturer of solar glass for photovoltaic modules',
                currentPrice: 445.60,
                minShares: 1,
                minAmount: 446
            },
            { 
                id: 8, 
                ticker: 'WEBSOL.NS', 
                name: 'Websol Energy System Ltd', 
                logo: 'images/logos/websol.svg',
                fallbackLogo: 'https://ui-avatars.com/api/?name=Websol&size=100&background=ef4444&color=fff&bold=true',
                sector: 'Solar Cell Manufacturing',
                description: 'Manufacturer of solar cells and modules',
                currentPrice: 625.80,
                minShares: 1,
                minAmount: 626
            }
        ];
        localStorage.setItem('stocks', JSON.stringify(stocks));
    }

    setupEventListeners() {
        // Auth listeners
        document.getElementById('loginForm')?.addEventListener('submit', (e) => this.handleLogin(e));
        document.getElementById('registerForm')?.addEventListener('submit', (e) => this.handleRegister(e));
        document.getElementById('showRegister')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('loginForm').classList.add('hidden');
            document.getElementById('registerForm').classList.remove('hidden');
        });
        document.getElementById('showLogin')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('registerForm').classList.add('hidden');
            document.getElementById('loginForm').classList.remove('hidden');
        });
        document.getElementById('logoutBtn')?.addEventListener('click', () => this.handleLogout());

        // Navigation listeners
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                this.navigateTo(page);
            });
        });

        // Bills listeners
        document.getElementById('showUploadBill')?.addEventListener('click', () => {
            document.getElementById('uploadBillForm').classList.remove('hidden');
            document.getElementById('manualBillForm').classList.add('hidden');
        });
        document.getElementById('showManualBill')?.addEventListener('click', () => {
            document.getElementById('manualBillForm').classList.remove('hidden');
            document.getElementById('uploadBillForm').classList.add('hidden');
        });
        document.getElementById('cancelUpload')?.addEventListener('click', () => {
            document.getElementById('uploadBillForm').classList.add('hidden');
        });
        document.getElementById('cancelManual')?.addEventListener('click', () => {
            document.getElementById('manualBillForm').classList.add('hidden');
        });
        document.getElementById('billUploadForm')?.addEventListener('submit', (e) => this.handleBillUpload(e));
        document.getElementById('billManualForm')?.addEventListener('submit', (e) => this.handleBillManual(e));

        // Actions listeners
        document.getElementById('customActionForm')?.addEventListener('submit', (e) => this.handleCustomAction(e));

        // Investment listeners removed - single stock view only

        // Modal listeners
        document.getElementById('closeModal')?.addEventListener('click', () => this.closeModal());
        document.getElementById('cancelTransaction')?.addEventListener('click', () => this.closeModal());
        document.getElementById('confirmTransaction')?.addEventListener('click', () => this.processTransaction());

        // Welcome modal listeners
        document.getElementById('closeWelcome')?.addEventListener('click', () => this.closeWelcomeModal());
        document.getElementById('startJourney')?.addEventListener('click', () => this.closeWelcomeModal());

        // AI Suggestions listeners
        document.getElementById('refreshSuggestions')?.addEventListener('click', () => this.generateAISuggestions());
    }

    // Authentication Methods
    handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.showToast('Login successful!', 'success');
            this.showApp();
        } else {
            this.showToast('Invalid credentials', 'error');
        }
    }

    handleRegister(e) {
        e.preventDefault();
        const firstName = document.getElementById('registerFirstName').value;
        const lastName = document.getElementById('registerLastName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const electricityRate = parseFloat(document.getElementById('electricityRate').value);

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        if (users.find(u => u.email === email)) {
            this.showToast('Email already exists', 'error');
            return;
        }

        const newUser = {
            id: Date.now().toString(),
            firstName,
            lastName,
            email,
            password,
            electricityRate,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Initialize user-specific data
        this.initializeUserData(newUser.id);

        // Mark that user should see welcome tutorial
        localStorage.setItem(`showWelcome_${newUser.id}`, 'true');

        this.showToast('Registration successful!', 'success');
        document.getElementById('registerForm').classList.add('hidden');
        document.getElementById('loginForm').classList.remove('hidden');
    }

    initializeUserData(userId) {
        const streaks = JSON.parse(localStorage.getItem('streaks') || '[]');
        streaks.push({
            userId,
            daily: 0,
            weekly: 0,
            lastActionDate: null
        });
        localStorage.setItem('streaks', JSON.stringify(streaks));
    }

    handleLogout() {
        localStorage.removeItem('currentUser');
        this.currentUser = null;
        this.showAuth();
        this.showToast('Logged out successfully', 'success');
    }

    showAuth() {
        document.getElementById('authContainer').classList.remove('hidden');
        document.getElementById('appContainer').classList.add('hidden');
        document.getElementById('navbar').classList.add('hidden');
    }

    showApp() {
        document.getElementById('authContainer').classList.add('hidden');
        document.getElementById('appContainer').classList.remove('hidden');
        document.getElementById('navbar').classList.remove('hidden');
        this.navigateTo('dashboard');

        // Show welcome modal for new users
        const showWelcome = localStorage.getItem(`showWelcome_${this.currentUser.id}`);
        if (showWelcome === 'true') {
            setTimeout(() => {
                document.getElementById('welcomeModal').classList.remove('hidden');
            }, 500);
        }
    }

    closeWelcomeModal() {
        document.getElementById('welcomeModal').classList.add('hidden');
        localStorage.setItem(`showWelcome_${this.currentUser.id}`, 'false');
    }

    showCO2Modal() {
        const savings = this.calculateTotalSavings();
        const co2Saved = savings.co2;

        // Calculate comparisons
        const comparisons = this.calculateCO2Comparisons(co2Saved);
        
        const container = document.getElementById('co2Comparisons');
        container.innerHTML = comparisons.map(comp => `
            <div class="comparison-item">
                <div class="comparison-icon">${comp.icon}</div>
                <div class="comparison-value">${comp.value}</div>
                <div class="comparison-label">${comp.label}</div>
            </div>
        `).join('');

        document.getElementById('co2Modal').classList.remove('hidden');
    }

    closeCO2Modal() {
        document.getElementById('co2Modal').classList.add('hidden');
    }

    calculateCO2Comparisons(co2Kg) {
        const comparisons = [];

        // Trees equivalent (1 tree absorbs ~20 kg CO2/year)
        const trees = (co2Kg / 20).toFixed(1);
        comparisons.push({
            icon: '🌳',
            value: trees,
            label: `trees planted for 1 year`
        });

        // Car kilometers (average car emits ~0.12 kg CO2/km)
        const carKm = (co2Kg / 0.12).toFixed(0);
        comparisons.push({
            icon: '🚗',
            value: carKm,
            label: `km of car driving avoided`
        });

        // Smartphone charges (1 charge = ~0.008 kg CO2)
        const phoneCharges = (co2Kg / 0.008).toFixed(0);
        comparisons.push({
            icon: '📱',
            value: phoneCharges,
            label: `smartphone charges`
        });

        // LED bulb hours (1 LED bulb = ~0.01 kg CO2/hour)
        const ledHours = (co2Kg / 0.01).toFixed(0);
        comparisons.push({
            icon: '💡',
            value: ledHours,
            label: `hours of LED bulb usage`
        });

        // Meals (average meal = ~2.5 kg CO2)
        const meals = (co2Kg / 2.5).toFixed(1);
        comparisons.push({
            icon: '🍽️',
            value: meals,
            label: `meals worth of emissions`
        });

        // Plastic bags (1 plastic bag = ~0.04 kg CO2)
        const plasticBags = (co2Kg / 0.04).toFixed(0);
        comparisons.push({
            icon: '🛍️',
            value: plasticBags,
            label: `plastic bags not produced`
        });

        return comparisons;
    }

    updateCO2Visualizations() {
        const savings = this.calculateTotalSavings();
        const co2Kg = savings.co2;

        // Trees visualization (1 tree = 20 kg CO2/year)
        const trees = Math.floor(co2Kg / 20);
        const treeContainer = document.getElementById('treeVisual');
        const maxTrees = 10; // Show max 10 trees
        const treesToShow = Math.min(trees, maxTrees);
        
        treeContainer.innerHTML = '';
        for (let i = 0; i < treesToShow; i++) {
            const treeIcon = document.createElement('span');
            treeIcon.className = 'tree-icon';
            treeIcon.textContent = '🌳';
            treeIcon.style.animationDelay = `${i * 0.1}s`;
            treeContainer.appendChild(treeIcon);
        }

        const treeCaption = document.getElementById('treeCaption');
        if (trees === 0) {
            treeCaption.textContent = 'Start saving to plant virtual trees!';
        } else if (trees > maxTrees) {
            treeCaption.textContent = `${trees} trees equivalent (showing ${maxTrees})`;
        } else {
            treeCaption.textContent = `${trees} tree${trees !== 1 ? 's' : ''} planted equivalent!`;
        }

        // Car kilometers (1 km = 0.12 kg CO2)
        const carKm = Math.floor(co2Kg / 0.12);
        document.getElementById('carDistance').textContent = `${carKm.toLocaleString()} km`;

        // Coal not burned (1 kg coal produces ~2.5 kg CO2)
        const coalKg = (co2Kg / 2.5).toFixed(1);
        document.getElementById('coalAmount').textContent = `${coalKg} kg`;
    }

    navigateTo(page) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(page + 'Page').classList.add('active');

        switch(page) {
            case 'dashboard':
                this.loadDashboard();
                break;
            case 'bills':
                this.loadBills();
                break;
            case 'actions':
                this.loadActions();
                break;
            case 'invest':
                this.loadInvest();
                break;
            case 'profile':
                this.loadProfile();
                break;
        }
    }

    // Dashboard Methods
    loadDashboard() {
        this.updateStreaks();
        this.updateSummaryCards();
        this.generateAISuggestions();
        this.loadChart();
        this.loadRecentTransactions();
        this.loadBadges();
        this.updateCO2Visualizations();
    }

    updateStreaks() {
        const streaks = JSON.parse(localStorage.getItem('streaks') || '[]');
        const userStreak = streaks.find(s => s.userId === this.currentUser.id) || { daily: 0, weekly: 0 };
        
        document.getElementById('dailyStreak').textContent = userStreak.daily || 0;
        document.getElementById('weeklyStreak').textContent = userStreak.weekly || 0;

        const userBadges = this.getUserBadges();
        document.getElementById('badgeCount').textContent = userBadges.length;
    }

    updateSummaryCards() {
        const savings = this.calculateTotalSavings();
        const actions = this.getUserActions();

        document.getElementById('totalSavings').textContent = `₹${savings.total.toFixed(2)}`;
        document.getElementById('monthlySavings').textContent = `₹${savings.monthly.toFixed(2)}`;
        document.getElementById('co2Saved').textContent = `${savings.co2.toFixed(2)} kg`;
        document.getElementById('energySaved').textContent = `${savings.energy.toFixed(2)} kWh`;
        document.getElementById('actionsCount').textContent = actions.length;

        // Update savings breakdown
        this.updateSavingsBreakdown(savings);
    }

    updateSavingsBreakdown(savings) {
        const bills = JSON.parse(localStorage.getItem('bills') || '[]');
        const userBills = bills.filter(b => b.userId === this.currentUser.id)
            .sort((a, b) => new Date(a.billingPeriodEnd) - new Date(b.billingPeriodEnd));

        // Calculate baseline
        let baselineText = 'Upload 3 bills to establish';
        let latestText = 'No data yet';
        let energyReduced = '0 kWh';

        if (userBills.length >= 3) {
            const baselineBills = userBills.slice(0, 3);
            const baseline = baselineBills.reduce((sum, b) => sum + b.consumption, 0) / baselineBills.length;
            baselineText = `${baseline.toFixed(2)} kWh/month`;

            if (userBills.length > 3) {
                const latestBill = userBills[userBills.length - 1];
                latestText = `${latestBill.consumption.toFixed(2)} kWh`;
                
                const reduced = baseline - latestBill.consumption;
                if (reduced > 0) {
                    energyReduced = `${reduced.toFixed(2)} kWh (${((reduced/baseline)*100).toFixed(1)}% reduction!)`;
                } else {
                    energyReduced = `0 kWh (consumption increased)`;
                }
            }
        }

        document.getElementById('baselineValue').textContent = baselineText;
        document.getElementById('latestConsumption').textContent = latestText;
        document.getElementById('energyReduced').textContent = energyReduced;
        document.getElementById('userRate').textContent = `₹${this.currentUser.electricityRate}/kWh`;
        document.getElementById('moneySaved').textContent = `₹${savings.total.toFixed(2)}`;
    }

    calculateTotalSavings() {
        const bills = JSON.parse(localStorage.getItem('bills') || '[]');
        const userBills = bills.filter(b => b.userId === this.currentUser.id);
        
        if (userBills.length < 2) {
            return { total: 0, monthly: 0, co2: 0, energy: 0 };
        }

        // Calculate baseline from first 3 bills
        const baselineBills = userBills.slice(0, Math.min(3, userBills.length));
        const baseline = baselineBills.reduce((sum, b) => sum + b.consumption, 0) / baselineBills.length;

        let totalSaved = 0;
        let energySaved = 0;
        let monthlySaved = 0;

        userBills.slice(3).forEach(bill => {
            const saved = baseline - bill.consumption;
            if (saved > 0) {
                energySaved += saved;
                const moneySaved = saved * this.currentUser.electricityRate;
                totalSaved += moneySaved;
            }
        });

        // Get current month savings
        const currentMonth = new Date().getMonth();
        const currentMonthBills = userBills.filter(b => {
            const billDate = new Date(b.billingPeriodEnd);
            return billDate.getMonth() === currentMonth;
        });

        if (currentMonthBills.length > 0) {
            const monthSaved = baseline - currentMonthBills[0].consumption;
            if (monthSaved > 0) {
                monthlySaved = monthSaved * this.currentUser.electricityRate;
            }
        }

        const co2Saved = energySaved * 0.92; // 0.92 kg CO2 per kWh

        return { total: totalSaved, monthly: monthlySaved, co2: co2Saved, energy: energySaved };
    }

    loadChart() {
        const bills = JSON.parse(localStorage.getItem('bills') || '[]');
        const userBills = bills.filter(b => b.userId === this.currentUser.id)
            .sort((a, b) => new Date(a.billingPeriodEnd) - new Date(b.billingPeriodEnd));

        const labels = userBills.map(b => {
            const date = new Date(b.billingPeriodEnd);
            return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        });
        const data = userBills.map(b => b.consumption);

        const ctx = document.getElementById('consumptionChart');
        if (window.energyChart) {
            window.energyChart.destroy();
        }

        window.energyChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Energy Consumption (kWh)',
                    data: data,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    loadRecentTransactions() {
        const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
        const userTransactions = transactions
            .filter(t => t.userId === this.currentUser.id)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 5);

        const container = document.getElementById('recentTransactions');
        
        if (userTransactions.length === 0) {
            container.innerHTML = '<p class="empty-state">No transactions yet. Start investing your savings!</p>';
            return;
        }

        container.innerHTML = userTransactions.map(t => `
            <div class="transaction-item">
                <div class="transaction-info">
                    <div class="transaction-icon">📈</div>
                    <div class="transaction-details">
                        <h4>${t.targetName}</h4>
                        <p class="transaction-date">${t.shares} share(s) @ ₹${t.pricePerShare.toFixed(2)} • ${new Date(t.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
                <div class="transaction-amount">₹${t.amount.toFixed(2)}</div>
            </div>
        `).join('');
    }

    loadBadges() {
        const badges = JSON.parse(localStorage.getItem('badges') || '[]');
        const userBadges = this.getUserBadges();
        const earnedBadgeIds = userBadges.map(b => b.badgeId);

        const container = document.getElementById('badgesGallery');
        container.innerHTML = badges.map(badge => {
            const earned = earnedBadgeIds.includes(badge.id);
            return `
                <div class="badge-item ${earned ? 'earned' : 'locked'}">
                    <div class="badge-icon">${badge.icon}</div>
                    <div class="badge-name">${badge.name}</div>
                </div>
            `;
        }).join('');
    }

    getUserBadges() {
        const userBadgesKey = `userBadges_${this.currentUser.id}`;
        return JSON.parse(localStorage.getItem(userBadgesKey) || '[]');
    }

    checkAndAwardBadges() {
        const badges = JSON.parse(localStorage.getItem('badges') || '[]');
        const userBadges = this.getUserBadges();
        const earnedBadgeIds = userBadges.map(b => b.badgeId);

        badges.forEach(badge => {
            if (earnedBadgeIds.includes(badge.id)) return;

            let earned = false;
            const criteria = badge.criteria;

            switch(criteria.type) {
                case 'actions':
                    const actions = this.getUserActions();
                    earned = actions.length >= criteria.value;
                    break;
                case 'streak':
                    const streaks = JSON.parse(localStorage.getItem('streaks') || '[]');
                    const userStreak = streaks.find(s => s.userId === this.currentUser.id);
                    earned = userStreak && userStreak.daily >= criteria.value;
                    break;
                case 'energy':
                    const savings = this.calculateTotalSavings();
                    earned = savings.energy >= criteria.value;
                    break;
                case 'co2':
                    const co2Savings = this.calculateTotalSavings();
                    earned = co2Savings.co2 >= criteria.value;
                    break;
                case 'investment':
                    const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
                    const userInvestments = transactions.filter(t => t.userId === this.currentUser.id && t.type === 'stock');
                    earned = userInvestments.length >= criteria.value;
                    break;
            }

            if (earned) {
                userBadges.push({
                    badgeId: badge.id,
                    earnedAt: new Date().toISOString()
                });
                this.showToast(`🏆 Badge Earned: ${badge.name}!`, 'success');
            }
        });

        const userBadgesKey = `userBadges_${this.currentUser.id}`;
        localStorage.setItem(userBadgesKey, JSON.stringify(userBadges));
    }

    // Bills Methods
    loadBills() {
        const bills = JSON.parse(localStorage.getItem('bills') || '[]');
        const userBills = bills.filter(b => b.userId === this.currentUser.id)
            .sort((a, b) => new Date(b.billingPeriodEnd) - new Date(a.billingPeriodEnd));

        const container = document.getElementById('billsContainer');
        
        if (userBills.length === 0) {
            container.innerHTML = '<p class="empty-state">No bills uploaded yet. Add your first bill to start tracking!</p>';
            return;
        }

        container.innerHTML = userBills.map(bill => `
            <div class="bill-item">
                <div class="bill-info">
                    <h4>Bill Period: ${new Date(bill.billingPeriodStart).toLocaleDateString()} - ${new Date(bill.billingPeriodEnd).toLocaleDateString()}</h4>
                    <div class="bill-details">
                        <span>Consumption: ${bill.consumption} kWh</span>
                        <span>Cost: ₹${bill.totalCost.toFixed(2)}</span>
                        <span>Uploaded: ${new Date(bill.uploadedAt).toLocaleDateString()}</span>
                    </div>
                </div>
                <div class="bill-actions">
                    <button class="btn btn-secondary" onclick="app.deleteBill('${bill.id}')">Delete</button>
                </div>
            </div>
        `).join('');
    }

    handleBillUpload(e) {
        e.preventDefault();
        
        const file = document.getElementById('billFile').files[0];
        const billingStart = document.getElementById('uploadBillingStart').value;
        const billingEnd = document.getElementById('uploadBillingEnd').value;
        const consumption = parseFloat(document.getElementById('uploadConsumption').value);
        const cost = parseFloat(document.getElementById('uploadCost').value);

        // Simulate file upload (in real app, would upload to server)
        const fileUrl = file ? `uploads/${file.name}` : null;

        this.saveBill({
            billingPeriodStart: billingStart,
            billingPeriodEnd: billingEnd,
            consumption,
            totalCost: cost,
            fileUrl
        });

        document.getElementById('billUploadForm').reset();
        document.getElementById('uploadBillForm').classList.add('hidden');
        this.showToast('Bill uploaded successfully!', 'success');
        this.loadBills();
    }

    handleBillManual(e) {
        e.preventDefault();
        
        const billingStart = document.getElementById('manualBillingStart').value;
        const billingEnd = document.getElementById('manualBillingEnd').value;
        const consumption = parseFloat(document.getElementById('manualConsumption').value);
        const cost = parseFloat(document.getElementById('manualCost').value);

        this.saveBill({
            billingPeriodStart: billingStart,
            billingPeriodEnd: billingEnd,
            consumption,
            totalCost: cost,
            fileUrl: null
        });

        document.getElementById('billManualForm').reset();
        document.getElementById('manualBillForm').classList.add('hidden');
        this.showToast('Bill saved successfully!', 'success');
        this.loadBills();
    }

    saveBill(billData) {
        const bills = JSON.parse(localStorage.getItem('bills') || '[]');
        const newBill = {
            id: Date.now().toString(),
            userId: this.currentUser.id,
            ...billData,
            uploadedAt: new Date().toISOString()
        };
        bills.push(newBill);
        localStorage.setItem('bills', JSON.stringify(bills));
    }

    deleteBill(billId) {
        if (!confirm('Are you sure you want to delete this bill?')) return;
        
        const bills = JSON.parse(localStorage.getItem('bills') || '[]');
        const updatedBills = bills.filter(b => b.id !== billId);
        localStorage.setItem('bills', JSON.stringify(updatedBills));
        this.showToast('Bill deleted', 'success');
        this.loadBills();
    }

    // Actions Methods
    loadActions() {
        this.loadQuickActions();
        this.loadActionsTimeline();
    }

    loadQuickActions() {
        const quickActions = [
            { type: 'Turned off lights', impact: 0.5, icon: '💡' },
            { type: 'Unplugged devices', impact: 0.3, icon: '🔌' },
            { type: 'Used natural light', impact: 0.4, icon: '☀️' },
            { type: 'Adjusted thermostat', impact: 1.0, icon: '🌡️' },
            { type: 'Air-dried clothes', impact: 2.0, icon: '👕' },
            { type: 'Shorter shower', impact: 0.8, icon: '🚿' }
        ];

        const container = document.getElementById('quickActions');
        container.innerHTML = quickActions.map(action => `
            <button class="btn btn-action" onclick="app.logQuickAction('${action.type}', ${action.impact})">
                <span>${action.icon}</span>
                <span>${action.type}</span>
            </button>
        `).join('');
    }

    logQuickAction(type, impact) {
        this.saveAction({
            actionType: type,
            description: '',
            estimatedImpact: impact
        });
        this.updateStreakOnAction();
        this.checkAndAwardBadges();
        this.showToast(`Action logged: ${type}`, 'success');
        this.loadActionsTimeline();
    }

    handleCustomAction(e) {
        e.preventDefault();
        
        const actionType = document.getElementById('actionType').value;
        const description = document.getElementById('actionDescription').value;
        const impact = parseFloat(document.getElementById('actionImpact').value);

        this.saveAction({
            actionType,
            description,
            estimatedImpact: impact
        });

        this.updateStreakOnAction();
        this.checkAndAwardBadges();
        
        document.getElementById('customActionForm').reset();
        this.showToast('Custom action logged!', 'success');
        this.loadActionsTimeline();
    }

    saveAction(actionData) {
        const actions = JSON.parse(localStorage.getItem('actions') || '[]');
        const newAction = {
            id: Date.now().toString(),
            userId: this.currentUser.id,
            ...actionData,
            loggedAt: new Date().toISOString()
        };
        actions.push(newAction);
        localStorage.setItem('actions', JSON.stringify(actions));
    }

    getUserActions() {
        const actions = JSON.parse(localStorage.getItem('actions') || '[]');
        return actions.filter(a => a.userId === this.currentUser.id);
    }

    loadActionsTimeline() {
        const actions = this.getUserActions()
            .sort((a, b) => new Date(b.loggedAt) - new Date(a.loggedAt))
            .slice(0, 20);

        const container = document.getElementById('actionsTimeline');
        
        if (actions.length === 0) {
            container.innerHTML = '<p class="empty-state">No actions logged yet. Start tracking your energy-saving efforts!</p>';
            return;
        }

        container.innerHTML = actions.map(action => `
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-time">${new Date(action.loggedAt).toLocaleString()}</div>
                    <div class="timeline-action">${action.actionType}</div>
                    ${action.description ? `<p>${action.description}</p>` : ''}
                    <div class="timeline-impact">Impact: ${action.estimatedImpact} kWh</div>
                </div>
            </div>
        `).join('');
    }

    updateStreakOnAction() {
        const streaks = JSON.parse(localStorage.getItem('streaks') || '[]');
        let userStreak = streaks.find(s => s.userId === this.currentUser.id);
        
        if (!userStreak) {
            userStreak = {
                userId: this.currentUser.id,
                daily: 0,
                weekly: 0,
                lastActionDate: null
            };
            streaks.push(userStreak);
        }

        const today = new Date().toDateString();
        const lastAction = userStreak.lastActionDate ? new Date(userStreak.lastActionDate).toDateString() : null;

        if (lastAction === today) {
            // Already logged today, no streak update
            return;
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();

        if (lastAction === yesterdayStr) {
            // Consecutive day
            userStreak.daily += 1;
        } else if (lastAction !== today) {
            // Streak broken
            userStreak.daily = 1;
        }

        // Update weekly streak
        if (userStreak.daily % 7 === 0 && userStreak.daily > 0) {
            userStreak.weekly += 1;
        }

        userStreak.lastActionDate = new Date().toISOString();

        const index = streaks.findIndex(s => s.userId === this.currentUser.id);
        streaks[index] = userStreak;
        localStorage.setItem('streaks', JSON.stringify(streaks));
    }

    // Investment Methods
    loadInvest() {
        this.updateAvailableBalance();
        this.loadStocks();
    }

    updateAvailableBalance() {
        const savings = this.calculateTotalSavings();
        const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
        const userTransactions = transactions.filter(t => t.userId === this.currentUser.id);
        const spent = userTransactions.reduce((sum, t) => sum + t.amount, 0);
        const available = savings.total - spent;
        
        document.getElementById('availableBalance').textContent = `₹${Math.max(0, available).toFixed(2)}`;
    }

    loadStocks() {
        const stocks = JSON.parse(localStorage.getItem('stocks') || '[]');
        const container = document.getElementById('stocksGrid');
        
        container.innerHTML = stocks.map(stock => `
            <div class="project-card stock-card">
                <div class="stock-header">
                    <div class="company-logo">
                        <img src="${stock.logo}" 
                             alt="${stock.name} logo" 
                             class="stock-logo-img">
                    </div>
                    <div class="stock-ticker">${stock.ticker}</div>
                </div>
                <div class="project-name">${stock.name}</div>
                <div class="stock-sector">${stock.sector}</div>
                <div class="project-description">${stock.description}</div>
                <div class="stock-price">
                    <span class="price-label">Current Price:</span>
                    <span class="price-value">₹${stock.currentPrice.toFixed(2)}</span>
                </div>
                <div class="stock-min-investment">
                    Min Investment: ${stock.minShares} share${stock.minShares > 1 ? 's' : ''} (₹${stock.minAmount})
                </div>
                <button class="btn btn-primary" onclick="app.openTransactionModal('stock', ${JSON.stringify(stock).replace(/"/g, '&quot;')})">
                    Buy Shares
                </button>
            </div>
        `).join('');
    }

    openTransactionModal(type, target) {
        this.currentTransaction = { type, target };
        
        const modal = document.getElementById('transactionModal');
        const title = document.getElementById('modalTitle');
        const body = document.getElementById('modalBody');
        
        title.textContent = 'Buy Stock Shares';
        
        body.innerHTML = `
            <div class="form-group">
                <div class="modal-company-header">
                    <img src="${target.logo}" 
                         alt="${target.name} logo" 
                         class="modal-company-logo">
                    <div>
                        <h3>${target.name}</h3>
                        <div class="stock-ticker-modal">${target.ticker}</div>
                    </div>
                </div>
                <p>${target.description}</p>
                <p><strong>Sector:</strong> ${target.sector}</p>
                <p><strong>Current Price:</strong> ₹${target.currentPrice.toFixed(2)} per share</p>
            </div>
            <div class="form-group">
                <label for="shareQuantity">Number of Shares</label>
                <input type="number" id="shareQuantity" min="${target.minShares}" step="1" value="${target.minShares}" required>
            </div>
            <div class="form-group">
                <label>Total Amount</label>
                <div class="total-amount" id="totalAmount">₹${(target.currentPrice * target.minShares).toFixed(2)}</div>
            </div>
        `;
        
        // Add event listener for share quantity change
        document.getElementById('shareQuantity').addEventListener('input', (e) => {
            const shares = parseInt(e.target.value) || 0;
            const total = shares * target.currentPrice;
            document.getElementById('totalAmount').textContent = `₹${total.toFixed(2)}`;
        });
        
        modal.classList.remove('hidden');
    }

    closeModal() {
        document.getElementById('transactionModal').classList.add('hidden');
        this.currentTransaction = null;
    }

    processTransaction() {
        const shares = parseInt(document.getElementById('shareQuantity').value);
        const { type, target } = this.currentTransaction;
        const amount = shares * target.currentPrice;

        // Validate shares
        if (shares < target.minShares) {
            this.showToast(`Minimum ${target.minShares} share(s) required`, 'error');
            return;
        }

        // Check available balance
        const savings = this.calculateTotalSavings();
        const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
        const userTransactions = transactions.filter(t => t.userId === this.currentUser.id);
        const spent = userTransactions.reduce((sum, t) => sum + t.amount, 0);
        const available = savings.total - spent;

        if (amount > available) {
            this.showToast('Insufficient balance', 'error');
            return;
        }

        // Save transaction
        const newTransaction = {
            id: Date.now().toString(),
            userId: this.currentUser.id,
            type: 'stock',
            amount,
            shares,
            ticker: target.ticker,
            targetId: target.id.toString(),
            targetName: target.name,
            pricePerShare: target.currentPrice,
            status: 'completed',
            createdAt: new Date().toISOString()
        };

        transactions.push(newTransaction);
        localStorage.setItem('transactions', JSON.stringify(transactions));

        this.closeModal();
        this.checkAndAwardBadges();
        this.showToast(`Successfully purchased ${shares} share(s) of ${target.name}!`, 'success');
        this.updateAvailableBalance();
    }

    // Profile Methods
    loadProfile() {
        const profileInfo = document.getElementById('profileInfo');
        profileInfo.innerHTML = `
            <div class="profile-field">
                <span class="profile-label">Name:</span>
                <span>${this.currentUser.firstName} ${this.currentUser.lastName}</span>
            </div>
            <div class="profile-field">
                <span class="profile-label">Email:</span>
                <span>${this.currentUser.email}</span>
            </div>
            <div class="profile-field">
                <span class="profile-label">Electricity Rate:</span>
                <span>₹${this.currentUser.electricityRate}/kWh</span>
            </div>
            <div class="profile-field">
                <span class="profile-label">Member Since:</span>
                <span>${new Date(this.currentUser.createdAt).toLocaleDateString()}</span>
            </div>
        `;

        const savings = this.calculateTotalSavings();
        const actions = this.getUserActions();
        const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
        const userTransactions = transactions.filter(t => t.userId === this.currentUser.id);
        const userBadges = this.getUserBadges();
        const streaks = JSON.parse(localStorage.getItem('streaks') || '[]');
        const userStreak = streaks.find(s => s.userId === this.currentUser.id) || { daily: 0, weekly: 0 };

        const profileStats = document.getElementById('profileStats');
        profileStats.innerHTML = `
            <div class="stat-item">
                <div class="stat-value">${actions.length}</div>
                <div class="stat-label">Actions Logged</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">₹${savings.total.toFixed(2)}</div>
                <div class="stat-label">Total Savings</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${savings.co2.toFixed(1)} kg</div>
                <div class="stat-label">CO₂ Saved</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${userTransactions.length}</div>
                <div class="stat-label">Transactions</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${userStreak.daily}</div>
                <div class="stat-label">Current Streak</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${userBadges.length}</div>
                <div class="stat-label">Badges Earned</div>
            </div>
        `;
    }

    // Utility Methods
    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast ${type}`;
        toast.classList.remove('hidden');

        setTimeout(() => {
            toast.classList.add('hidden');
        }, 3000);
    }
}

// Initialize app
const app = new EnergyApp();


    // AI Suggestions Feature
    generateAISuggestions() {
        const container = document.getElementById('aiSuggestions');
        
        // Show loading state
        container.innerHTML = '<div class="ai-loading"><div class="ai-loading-spinner"></div><p>AI analyzing your energy patterns...</p></div>';

        // Simulate AI processing
        setTimeout(() => {
            const suggestions = this.analyzeAndGenerateSuggestions();
            this.displaySuggestions(suggestions);
        }, 1500);
    }

    analyzeAndGenerateSuggestions() {
        const bills = JSON.parse(localStorage.getItem('bills') || '[]');
        const userBills = bills.filter(b => b.userId === this.currentUser.id);
        const actions = this.getUserActions();
        const savings = this.calculateTotalSavings();
        const streaks = JSON.parse(localStorage.getItem('streaks') || '[]');
        const userStreak = streaks.find(s => s.userId === this.currentUser.id) || { daily: 0, weekly: 0 };
        const badges = this.getUserBadges();
        const energySaved = this.calculateEnergySaved();
        const co2Saved = energySaved * 0.92;

        const suggestions = [];
        let suggestionId = 1;

        // 1. CONSUMPTION ANALYSIS
        if (userBills.length >= 3) {
            const recentBills = userBills.slice(-3);
            const avgConsumption = recentBills.reduce((sum, b) => sum + b.consumption, 0) / recentBills.length;
            const trend = this.calculateTrend(recentBills);
            const baseline = this.calculateBaseline();

            // High consumption alert
            if (avgConsumption > 300) {
                const savingsPotential = avgConsumption * 0.15;
                suggestions.push({
                    id: suggestionId++,
                    type: 'consumption',
                    icon: '🌡️',
                    priority: 'high',
                    title: 'High Energy Consumption Detected',
                    description: `Your average consumption is ${avgConsumption.toFixed(0)} kWh/month. Setting AC to 24°C can reduce usage by 15%.`,
                    potentialSavings: savingsPotential * this.currentUser.electricityRate,
                    potentialCO2: savingsPotential * 0.92,
                    action: 'Log AC Adjustment',
                    actionType: 'log'
                });
            }

            // Increasing trend warning
            if (trend === 'increasing') {
                const lastTwo = userBills.slice(-2);
                const increase = lastTwo[1].consumption - lastTwo[0].consumption;
                suggestions.push({
                    id: suggestionId++,
                    type: 'consumption',
                    icon: '📈',
                    priority: 'high',
                    title: 'Energy Usage Increasing',
                    description: `Your consumption increased from ${lastTwo[0].consumption} to ${lastTwo[1].consumption} kWh. Review your recent habits.`,
                    potentialSavings: increase * this.currentUser.electricityRate,
                    potentialCO2: increase * 0.92,
                    action: 'View Actions',
                    actionType: 'navigate',
                    navigateTo: 'actions'
                });
            }

            // Decreasing trend - positive reinforcement
            if (trend === 'decreasing') {
                suggestions.push({
                    id: suggestionId++,
                    type: 'behavioral',
                    icon: '🎉',
                    priority: 'low',
                    title: 'Excellent Progress!',
                    description: 'Your consumption is decreasing! You\'re making a real difference. Keep up the amazing work!',
                    potentialSavings: 0,
                    potentialCO2: 0,
                    action: 'Dismiss',
                    actionType: 'dismiss'
                });
            }

            // Above baseline warning
            if (baseline > 0 && userBills.length > 3) {
                const latestConsumption = userBills[userBills.length - 1].consumption;
                if (latestConsumption > baseline * 1.1) {
                    const excess = latestConsumption - baseline;
                    suggestions.push({
                        id: suggestionId++,
                        type: 'consumption',
                        icon: '⚠️',
                        priority: 'high',
                        title: 'Above Your Baseline',
                        description: `Your latest bill (${latestConsumption} kWh) is ${excess.toFixed(0)} kWh above your baseline. Let's get back on track!`,
                        potentialSavings: excess * this.currentUser.electricityRate,
                        potentialCO2: excess * 0.92,
                        action: 'Review Tips',
                        actionType: 'dismiss'
                    });
                }
            }
        }

        // 2. ACTION PATTERN ANALYSIS
        const recentActions = actions.slice(-7); // Last 7 days
        const actionTypes = recentActions.map(a => a.actionType);
        const today = new Date().toDateString();
        const todayActions = actions.filter(a => new Date(a.timestamp).toDateString() === today);

        // Missing AC optimization
        if (!actionTypes.includes('Adjusted thermostat') && !actionTypes.includes('Adjusted AC')) {
            suggestions.push({
                id: suggestionId++,
                type: 'action',
                icon: '❄️',
                priority: 'medium',
                title: 'Optimize AC Usage',
                description: 'You haven\'t logged any thermostat adjustments recently. Setting your AC to 24-25°C can save 30-40% on cooling costs.',
                potentialSavings: 35 * this.currentUser.electricityRate,
                potentialCO2: 35 * 0.92,
                action: 'Log AC Adjustment',
                actionType: 'log'
            });
        }

        // Missing air-drying action
        if (!actionTypes.includes('Air-dried clothes')) {
            suggestions.push({
                id: suggestionId++,
                type: 'action',
                icon: '👕',
                priority: 'medium',
                title: 'Skip the Dryer',
                description: 'Air-drying clothes saves significant energy. Dryers are one of the highest energy consumers in homes.',
                potentialSavings: 60 * this.currentUser.electricityRate,
                potentialCO2: 60 * 0.92,
                action: 'Log Air-Drying',
                actionType: 'log'
            });
        }

        // Missing unplugging action
        if (!actionTypes.includes('Unplugged devices')) {
            suggestions.push({
                id: suggestionId++,
                type: 'action',
                icon: '🔌',
                priority: 'medium',
                title: 'Phantom Power Drain Alert',
                description: 'Devices on standby consume 5-10% of electricity. Unplug chargers, TVs, and appliances when not in use.',
                potentialSavings: 25 * this.currentUser.electricityRate,
                potentialCO2: 25 * 0.92,
                action: 'Log Unplugging',
                actionType: 'log'
            });
        }

        // No actions today
        if (todayActions.length === 0 && userStreak.daily > 0) {
            suggestions.push({
                id: suggestionId++,
                type: 'behavioral',
                icon: '⏰',
                priority: 'high',
                title: 'Don\'t Break Your Streak!',
                description: `You have a ${userStreak.daily}-day streak! Log at least one action today to keep it going.`,
                potentialSavings: 0,
                potentialCO2: 0,
                action: 'Log Action Now',
                actionType: 'navigate',
                navigateTo: 'actions'
            });
        }

        // 3. TIME-BASED CONTEXTUAL SUGGESTIONS
        const currentHour = new Date().getHours();
        const currentMonth = new Date().getMonth();
        
        // Daytime natural light suggestion
        if (currentHour >= 9 && currentHour <= 17) {
            const hasNaturalLightToday = todayActions.some(a => 
                a.actionType.toLowerCase().includes('natural light') || 
                a.actionType.toLowerCase().includes('turned off lights')
            );
            
            if (!hasNaturalLightToday) {
                suggestions.push({
                    id: suggestionId++,
                    type: 'time',
                    icon: '🌞',
                    priority: 'medium',
                    title: 'Use Natural Light',
                    description: 'It\'s daytime! Open curtains and turn off unnecessary lights. Natural light is free and better for your health.',
                    potentialSavings: 12 * this.currentUser.electricityRate,
                    potentialCO2: 12 * 0.92,
                    action: 'Log Natural Light Use',
                    actionType: 'log'
                });
            }
        }

        // Evening energy-saving tip
        if (currentHour >= 18 && currentHour <= 22) {
            suggestions.push({
                id: suggestionId++,
                type: 'time',
                icon: '🌙',
                priority: 'low',
                title: 'Evening Energy Tip',
                description: 'Use LED bulbs and turn off lights in unoccupied rooms. Consider using task lighting instead of overhead lights.',
                potentialSavings: 8 * this.currentUser.electricityRate,
                potentialCO2: 8 * 0.92,
                action: 'Dismiss',
                actionType: 'dismiss'
            });
        }

        // Peak hours warning (if applicable)
        if (currentHour >= 18 && currentHour <= 21) {
            suggestions.push({
                id: suggestionId++,
                type: 'time',
                icon: '⚡',
                priority: 'medium',
                title: 'Peak Hours Alert',
                description: 'This is peak electricity demand time. Avoid using high-power appliances like washing machines, dryers, and dishwashers.',
                potentialSavings: 20 * this.currentUser.electricityRate,
                potentialCO2: 20 * 0.92,
                action: 'Dismiss',
                actionType: 'dismiss'
            });
        }

        // 4. STREAK & BEHAVIORAL MOTIVATION
        const weekWarriorBadge = badges.find(b => b.name === 'Week Warrior');
        const consistencyKingBadge = badges.find(b => b.name === 'Consistency King');

        // Start streak motivation
        if (userStreak.daily === 0) {
            suggestions.push({
                id: suggestionId++,
                type: 'behavioral',
                icon: '🔥',
                priority: 'high',
                title: 'Start Your Streak Today!',
                description: 'You don\'t have an active streak. Log an action today to start building consistency and earn badges!',
                potentialSavings: 0,
                potentialCO2: 0,
                action: 'Log Action Now',
                actionType: 'navigate',
                navigateTo: 'actions'
            });
        }

        // Week Warrior badge progress
        if (userStreak.daily >= 6 && userStreak.daily < 7 && !weekWarriorBadge?.earned) {
            suggestions.push({
                id: suggestionId++,
                type: 'behavioral',
                icon: '⚡',
                priority: 'high',
                title: 'One Day to Week Warrior!',
                description: `You're at ${userStreak.daily} days! Log an action today to reach 7 days and earn the Week Warrior badge!`,
                potentialSavings: 0,
                potentialCO2: 0,
                action: 'Log Action',
                actionType: 'navigate',
                navigateTo: 'actions'
            });
        }

        // Consistency King progress
        if (userStreak.daily >= 25 && userStreak.daily < 30 && !consistencyKingBadge?.earned) {
            suggestions.push({
                id: suggestionId++,
                type: 'behavioral',
                icon: '👑',
                priority: 'medium',
                title: 'Almost Consistency King!',
                description: `Amazing! ${userStreak.daily}-day streak. Just ${30 - userStreak.daily} more days to earn the ultimate Consistency King badge!`,
                potentialSavings: 0,
                potentialCO2: 0,
                action: 'Keep Going!',
                actionType: 'dismiss'
            });
        }

        // Weekly streak milestone
        if (userStreak.weekly >= 3 && userStreak.weekly < 4) {
            suggestions.push({
                id: suggestionId++,
                type: 'behavioral',
                icon: '🌟',
                priority: 'low',
                title: 'Weekly Streak Champion!',
                description: `You've maintained ${userStreak.weekly} consecutive weeks! You're building lasting habits.`,
                potentialSavings: 0,
                potentialCO2: 0,
                action: 'Dismiss',
                actionType: 'dismiss'
            });
        }

        // 5. BADGE PROGRESS ALERTS
        const energySaverBadge = badges.find(b => b.name === 'Energy Saver');
        const ecoChampionBadge = badges.find(b => b.name === 'Eco Champion');
        const greenInvestorBadge = badges.find(b => b.name === 'Green Investor');

        // Energy Saver badge (50 kWh)
        if (!energySaverBadge?.earned && energySaved >= 45 && energySaved < 50) {
            suggestions.push({
                id: suggestionId++,
                type: 'behavioral',
                icon: '💡',
                priority: 'low',
                title: 'Almost Energy Saver!',
                description: `You've saved ${energySaved.toFixed(1)} kWh. Just ${(50 - energySaved).toFixed(1)} more kWh to earn the Energy Saver badge!`,
                potentialSavings: 0,
                potentialCO2: 0,
                action: 'View Progress',
                actionType: 'dismiss'
            });
        }

        // Eco Champion badge (100 kg CO₂)
        if (!ecoChampionBadge?.earned && co2Saved >= 90 && co2Saved < 100) {
            suggestions.push({
                id: suggestionId++,
                type: 'behavioral',
                icon: '🏆',
                priority: 'low',
                title: 'Almost Eco Champion!',
                description: `You've saved ${co2Saved.toFixed(1)} kg CO₂. Just ${(100 - co2Saved).toFixed(1)} kg more to earn the Eco Champion badge!`,
                potentialSavings: 0,
                potentialCO2: 0,
                action: 'View Progress',
                actionType: 'dismiss'
            });
        }

        // 6. INVESTMENT OPPORTUNITIES
        const investmentCount = this.getInvestmentCount();
        
        // First investment suggestion
        if (savings.total >= 1000 && investmentCount === 0 && !greenInvestorBadge?.earned) {
            suggestions.push({
                id: suggestionId++,
                type: 'investment',
                icon: '💰',
                priority: 'medium',
                title: 'Ready to Invest!',
                description: `You have ₹${savings.total.toFixed(0)} in savings. Make your first investment in renewable energy stocks to earn the Green Investor badge!`,
                potentialSavings: 0,
                potentialCO2: 0,
                action: 'View Stocks',
                actionType: 'navigate',
                navigateTo: 'invest'
            });
        }

        // Reinvestment suggestion
        if (savings.total >= 500 && investmentCount > 0) {
            suggestions.push({
                id: suggestionId++,
                type: 'investment',
                icon: '📈',
                priority: 'low',
                title: 'Grow Your Portfolio',
                description: `You have ₹${savings.total.toFixed(0)} available. Consider diversifying your renewable energy investments.`,
                potentialSavings: 0,
                potentialCO2: 0,
                action: 'View Stocks',
                actionType: 'navigate',
                navigateTo: 'invest'
            });
        }

        // 7. SEASONAL ENERGY TIPS
        // Summer months (April-September)
        if (currentMonth >= 3 && currentMonth <= 8) {
            suggestions.push({
                id: suggestionId++,
                type: 'seasonal',
                icon: '☀️',
                priority: 'medium',
                title: 'Summer Energy Saving Tips',
                description: 'Use fans instead of AC when possible. Fans use 98% less energy. Close curtains during peak sun hours.',
                potentialSavings: 50 * this.currentUser.electricityRate,
                potentialCO2: 50 * 0.92,
                action: 'Log Summer Action',
                actionType: 'log'
            });
        }

        // Winter months (October-March)
        if (currentMonth >= 9 || currentMonth <= 2) {
            suggestions.push({
                id: suggestionId++,
                type: 'seasonal',
                icon: '🧥',
                priority: 'low',
                title: 'Winter Energy Saving Tips',
                description: 'Use natural sunlight for warmth during the day. Wear layers instead of using heaters excessively.',
                potentialSavings: 30 * this.currentUser.electricityRate,
                potentialCO2: 30 * 0.92,
                action: 'Dismiss',
                actionType: 'dismiss'
            });
        }

        // 8. SORT BY PRIORITY AND RETURN TOP 5
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        suggestions.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
        
        return suggestions.slice(0, 5);
    }

    calculateTrend(bills) {
        if (bills.length < 2) return 'stable';
        const first = bills[0].consumption;
        const last = bills[bills.length - 1].consumption;
        const change = ((last - first) / first) * 100;
        
        if (change > 5) return 'increasing';
        if (change < -5) return 'decreasing';
        return 'stable';
    }

    getInvestmentCount() {
        const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
        return transactions.filter(t => t.userId === this.currentUser.id && t.type === 'stock').length;
    }

    calculateEnergySaved() {
        const bills = JSON.parse(localStorage.getItem('bills') || '[]');
        const userBills = bills.filter(b => b.userId === this.currentUser.id);
        
        if (userBills.length < 4) return 0;
        
        const baseline = this.calculateBaseline();
        if (baseline === 0) return 0;
        
        let totalSaved = 0;
        userBills.slice(3).forEach(bill => {
            const saved = baseline - bill.consumption;
            if (saved > 0) totalSaved += saved;
        });
        
        return totalSaved;
    }

    getUserBadges() {
        const badges = JSON.parse(localStorage.getItem('badges') || '[]');
        return badges.filter(b => b.userId === this.currentUser.id);
    }

    displaySuggestions(suggestions) {
        const container = document.getElementById('aiSuggestions');
        
        if (suggestions.length === 0) {
            container.innerHTML = `
                <div class="ai-empty-state">
                    <div class="ai-empty-icon">🌟</div>
                    <h3>You're Doing Great!</h3>
                    <p>No new suggestions right now. You're already following best practices. Keep up the excellent work!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = suggestions.map(suggestion => {
            const priorityEmoji = {
                high: '🔴',
                medium: '🟡',
                low: '🟢'
            };

            return `
                <div class="suggestion-card priority-${suggestion.priority}" data-suggestion-id="${suggestion.id}">
                    <div class="suggestion-header">
                        <div class="suggestion-icon">${suggestion.icon}</div>
                        <div style="flex: 1;">
                            <span class="suggestion-priority priority-${suggestion.priority}">
                                ${priorityEmoji[suggestion.priority]} ${suggestion.priority.toUpperCase()} PRIORITY
                            </span>
                            <h3 class="suggestion-title">${suggestion.title}</h3>
                        </div>
                    </div>
                    <p class="suggestion-description">${suggestion.description}</p>
                    ${suggestion.potentialSavings > 0 ? `
                        <div class="suggestion-impact">
                            <div class="impact-item">
                                <span class="impact-icon">💰</span>
                                <div>
                                    <div class="impact-label">Potential Savings</div>
                                    <div class="impact-value">₹${suggestion.potentialSavings.toFixed(0)}/month</div>
                                </div>
                            </div>
                            <div class="impact-item">
                                <span class="impact-icon">🌱</span>
                                <div>
                                    <div class="impact-label">CO₂ Reduction</div>
                                    <div class="impact-value">${suggestion.potentialCO2.toFixed(1)} kg/month</div>
                                </div>
                            </div>
                        </div>
                    ` : ''}
                    <div class="suggestion-actions">
                        ${suggestion.actionType !== 'dismiss' ? `
                            <button class="btn-implement" onclick="app.implementSuggestion(${suggestion.id}, '${suggestion.action}', '${suggestion.actionType}', '${suggestion.navigateTo || ''}')">
                                ${suggestion.action}
                            </button>
                        ` : ''}
                        <button class="btn-dismiss" onclick="app.dismissSuggestion(${suggestion.id})">
                            ${suggestion.actionType === 'dismiss' ? 'Got It' : 'Dismiss'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }

    implementSuggestion(id, action, actionType, navigateTo) {
        // Handle navigation actions
        if (actionType === 'navigate' && navigateTo) {
            this.navigateTo(navigateTo);
            this.showToast(`Navigating to ${navigateTo}...`, 'success');
            this.dismissSuggestion(id);
            return;
        }

        // Handle log actions
        if (actionType === 'log') {
            const actionMap = {
                'Log AC Adjustment': { type: 'Adjusted thermostat', impact: 1.2, desc: 'Set AC to optimal temperature (AI suggestion)' },
                'Log Air-Drying': { type: 'Air-dried clothes', impact: 2.0, desc: 'Air-dried clothes instead of using dryer (AI suggestion)' },
                'Log Unplugging': { type: 'Unplugged devices', impact: 0.3, desc: 'Unplugged devices to eliminate phantom power (AI suggestion)' },
                'Log Natural Light Use': { type: 'Used natural light', impact: 0.4, desc: 'Used natural light instead of electric lights (AI suggestion)' },
                'Log Summer Action': { type: 'Summer energy saving', impact: 1.5, desc: 'Implemented summer energy saving tips (AI suggestion)' },
                'Log Action Now': { type: 'Energy saving action', impact: 0.5, desc: 'Logged action to maintain streak (AI suggestion)' }
            };

            const actionData = actionMap[action];
            if (actionData) {
                this.saveAction({
                    actionType: actionData.type,
                    description: actionData.desc,
                    estimatedImpact: actionData.impact
                });
                this.updateStreakOnAction();
                this.checkAndAwardBadges();
                this.showToast(`✅ Action logged: ${actionData.type}!`, 'success');
                
                // Remove the suggestion card with animation
                const card = document.querySelector(`[data-suggestion-id="${id}"]`);
                if (card) {
                    card.style.animation = 'slideOut 0.3s ease-out';
                    setTimeout(() => {
                        this.dismissSuggestion(id);
                        this.loadActionsTimeline();
                        this.updateDashboard();
                    }, 300);
                }
            }
            return;
        }

        // Handle dismiss actions
        if (actionType === 'dismiss') {
            this.showToast('Keep up the great work! 🌟', 'success');
            this.dismissSuggestion(id);
            return;
        }
    }

    dismissSuggestion(id) {
        // Remove suggestion from display
        this.generateAISuggestions();
    }
