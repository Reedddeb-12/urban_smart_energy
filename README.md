# ⚡ Urban Energy Savings Platform

> Track your energy consumption, save money, reduce CO₂ emissions, and invest in renewable energy stocks!

A user-friendly web platform that empowers urban residents to track energy savings, convert saved money into stock investments in renewable energy companies, and stay motivated through an interactive gamification system.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red.svg)](https://github.com/yourusername/urban-energy-savings-platform)

![Platform Screenshot](https://via.placeholder.com/800x400/667eea/ffffff?text=Energy+Saver+Platform)

## 🌟 Key Features

## Features

### ✅ Implemented Features

1. **User Authentication**
   - Registration with email/password
   - Secure login system
   - User profile management
   - Custom electricity rate configuration

2. **Bill Management**
   - Upload electricity bills (with file attachment)
   - Manual bill entry
   - Bill history tracking
   - Automatic baseline calculation

3. **Energy Savings Calculation**
   - Automatic consumption pattern analysis
   - Real-time savings calculation
   - CO₂ impact estimation (0.92 kg per kWh)
   - Monthly and cumulative savings tracking

4. **Action Logging**
   - Quick-log predefined actions
   - Custom action entry
   - Action timeline view
   - Impact tracking per action

5. **Gamification System**
   - Daily and weekly streak tracking
   - Badge system with 6 achievements
   - Milestone progress tracking
   - Achievement notifications

6. **Stock Investments in Renewable Energy**
   - 8 publicly traded renewable energy company stocks
   - Real Indian stock tickers (NSE)
   - Share-based investment system
   - Transaction confirmation with price calculation
   - Balance management
   - Investment portfolio tracking

7. **Dashboard**
   - Real-time savings summary
   - Energy consumption chart
   - Streak display
   - Recent transactions
   - Badge gallery
   - Environmental impact metrics

8. **Profile Management**
   - Account information
   - Personal statistics
   - Activity summary

## Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Charts**: Chart.js for data visualization
- **Storage**: LocalStorage for data persistence
- **Design**: Responsive CSS with mobile-first approach
- **Currency**: Indian Rupees (₹) - Optimized for Indian market
- **Electricity Rates**: Based on typical Indian residential rates (₹6-10/kWh)

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Python 3 (for local server) OR any HTTP server

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/urban-energy-savings-platform.git

# Navigate to project directory
cd urban-energy-savings-platform

# Start local server
python -m http.server 8000

# Open in browser
# Visit http://localhost:8000
```

### Alternative: Direct Open

Simply double-click `index.html` to open in your browser (some features may require a server).

### First Time Setup

1. **Register an Account**
   - Click "Register" on the login page
   - Enter your details
   - Set your electricity rate (default: ₹8.50/kWh - typical Indian rate)

2. **Add Your First Bill**
   - Navigate to "Bills" page
   - Click "Enter Manually" or "Upload Bill"
   - Enter your electricity consumption data
   - Add at least 3 bills to establish a baseline

3. **Log Energy-Saving Actions**
   - Go to "Actions" page
   - Use quick-log buttons or create custom actions
   - Build your streak!

4. **Track Your Savings**
   - View your dashboard for real-time metrics
   - Watch your CO₂ savings grow
   - Earn badges for achievements

5. **Invest Your Savings in Stocks**
   - Navigate to "Invest" page
   - Browse renewable energy company stocks
   - Select number of shares to purchase
   - Make your first stock investment

## Features Overview

### Dashboard Metrics
- **Total Savings**: Cumulative money saved from reduced energy consumption
- **CO₂ Saved**: Environmental impact in kilograms
- **Energy Saved**: Total kWh reduction
- **Actions Count**: Number of energy-saving actions logged

### Gamification Elements

**Badges:**
- 🌱 First Step - Log your first action
- ⚡ Week Warrior - Achieve 7-day streak
- 💡 Energy Saver - Save 50 kWh
- 💰 Green Investor - Make first investment
- 🏆 Eco Champion - Save 100 kg CO₂
- 👑 Consistency King - Achieve 30-day streak

**Streaks:**
- Daily streak for consecutive days of action logging
- Weekly streak for consistent weekly participation
- Automatic reset if you miss a day

### Stock Investment Options

**Renewable Energy Company Stocks (NSE Listed):**

1. **Adani Green Energy Ltd (ADANIGREEN.NS)** - ₹1,245.50/share
   - Sector: Solar & Wind Power
   - India's largest renewable energy company with 20+ GW capacity
   - Min Investment: 1 share (₹1,246)

2. **Tata Power Company Ltd (TATAPOWER.NS)** - ₹385.75/share
   - Sector: Integrated Power & Renewables
   - Leading integrated power company with growing renewable portfolio
   - Min Investment: 1 share (₹386)

3. **Suzlon Energy Ltd (SUZLON.NS)** - ₹58.30/share
   - Sector: Wind Turbine Manufacturing
   - India's leading wind turbine manufacturer
   - Min Investment: 5 shares (₹292)

4. **NHPC Ltd (NHPC.NS)** - ₹82.15/share
   - Sector: Hydroelectric Power
   - India's premier hydropower development company
   - Min Investment: 5 shares (₹411)

5. **SJVN Ltd (SJVN.NS)** - ₹115.40/share
   - Sector: Hydro & Solar Power
   - Government-owned renewable energy company
   - Min Investment: 5 shares (₹577)

6. **Indian Renewable Energy Development Agency (IREDA.NS)** - ₹198.25/share
   - Sector: Renewable Energy Financing
   - Government financial institution for renewable energy projects
   - Min Investment: 3 shares (₹595)

7. **Borosil Renewables Ltd (BOROSIL.NS)** - ₹445.60/share
   - Sector: Solar Glass Manufacturing
   - Leading manufacturer of solar glass for photovoltaic modules
   - Min Investment: 1 share (₹446)

8. **Websol Energy System Ltd (WEBSOL.NS)** - ₹625.80/share
   - Sector: Solar Cell Manufacturing
   - Manufacturer of solar cells and modules
   - Min Investment: 1 share (₹626)

## Data Storage

All data is stored locally in your browser using LocalStorage:
- User accounts and profiles
- Electricity bills
- Energy-saving actions
- Transactions
- Streaks and badges
- Projects and causes

**Note**: Data persists in your browser but is not synced across devices. Clear browser data will reset the application.

## Calculations

### Baseline Calculation
- Uses average of first 3 bills as baseline
- Compares subsequent bills against baseline

### Savings Calculation
```
Energy Saved (kWh) = Baseline - Current Consumption
Money Saved (₹) = Energy Saved × Electricity Rate (₹/kWh)
CO₂ Saved (kg) = Energy Saved × 0.92

Example: If you save 100 kWh at ₹8.50/kWh
- Money Saved = 100 × 8.50 = ₹850
- CO₂ Saved = 100 × 0.92 = 92 kg
```

### Streak Logic
- Daily streak increments when actions logged on consecutive days
- Resets to 1 if a day is missed
- Weekly streak increments every 7 days

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Responsive Design

The platform is fully responsive and works on:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## Security Notes

This is a demo application using LocalStorage. For production use, you would need:
- Backend API with proper authentication
- Database for data persistence
- Encrypted password storage
- HTTPS/SSL
- Payment gateway integration (Stripe)
- OAuth providers for social login

## Future Enhancements

- Backend API integration
- Real payment processing with Stripe
- OAuth social login (Google, Facebook)
- Email notifications
- Data export functionality
- Multi-language support
- Dark mode
- Mobile app versions
- Community features
- Leaderboards

## 📁 Project Structure

```
urban-energy-savings-platform/
├── index.html              # Main application file
├── css/
│   └── styles.css         # All styling
├── js/
│   ├── app.js            # Main application logic
│   └── chart.min.js      # Chart.js library
├── .kiro/
│   └── specs/            # Project specifications
├── README.md             # This file
├── HOW_IT_WORKS.md      # Detailed explanation of savings calculation
├── CO2_EXPLAINED.md     # CO₂ conservation guide
├── INVESTMENT_UPDATE.md # Stock investment feature details
└── .gitignore           # Git ignore rules
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style
- Test thoroughly before submitting
- Update documentation as needed
- Keep commits atomic and well-described

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2024 Urban Energy Savings Platform

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- Chart.js for beautiful data visualization
- Indian renewable energy companies for inspiration
- All contributors and users

## 📧 Contact

For questions or suggestions:
- Open an issue on GitHub
- Email: your.email@example.com

## 🌟 Star History

If you find this project useful, please consider giving it a star! ⭐

---

**Built with ❤️ for a sustainable future 🌍**

**Making energy conservation profitable and fun!** 💚⚡💰
