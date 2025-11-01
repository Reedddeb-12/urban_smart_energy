# Contributing to Urban Energy Savings Platform

First off, thank you for considering contributing to the Urban Energy Savings Platform! 🎉

## Code of Conduct

This project and everyone participating in it is governed by respect, kindness, and professionalism. Please be considerate and constructive.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the behavior
- **Expected behavior**
- **Actual behavior**
- **Screenshots** if applicable
- **Browser and OS** information

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Clear title and description**
- **Use case** - why is this enhancement useful?
- **Possible implementation** if you have ideas

### Pull Requests

1. Fork the repo and create your branch from `main`
2. Make your changes
3. Test thoroughly
4. Update documentation if needed
5. Ensure code follows existing style
6. Submit a pull request!

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/urban-energy-savings-platform.git

# Navigate to directory
cd urban-energy-savings-platform

# Start development server
python -m http.server 8000

# Open http://localhost:8000
```

## Coding Guidelines

### JavaScript

- Use ES6+ features
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused
- Use `const` and `let`, avoid `var`

### HTML

- Use semantic HTML5 elements
- Keep structure clean and organized
- Add ARIA labels for accessibility

### CSS

- Follow existing naming conventions
- Use CSS variables for colors
- Keep selectors specific but not overly complex
- Mobile-first responsive design

## Project Structure

```
├── index.html          # Main HTML file
├── css/
│   └── styles.css     # All styles
├── js/
│   ├── app.js        # Main application logic
│   └── chart.min.js  # Chart library
└── docs/             # Documentation files
```

## Feature Development

### Adding New Features

1. **Plan**: Discuss in an issue first
2. **Branch**: Create a feature branch
3. **Develop**: Write clean, tested code
4. **Document**: Update relevant docs
5. **Test**: Ensure everything works
6. **Submit**: Create a pull request

### Testing Checklist

- [ ] Feature works on Chrome
- [ ] Feature works on Firefox
- [ ] Feature works on Safari
- [ ] Feature works on Edge
- [ ] Mobile responsive
- [ ] No console errors
- [ ] LocalStorage works correctly
- [ ] All calculations are accurate

## Documentation

- Update README.md for user-facing changes
- Update HOW_IT_WORKS.md for calculation changes
- Update CO2_EXPLAINED.md for environmental impact changes
- Add inline code comments for complex logic

## Commit Messages

Write clear, concise commit messages:

```
feat: Add dark mode toggle
fix: Correct CO2 calculation formula
docs: Update installation instructions
style: Format code with prettier
refactor: Simplify savings calculation
test: Add unit tests for bill processing
```

## Questions?

Feel free to open an issue with the `question` label!

## Recognition

Contributors will be recognized in the README.md file.

Thank you for contributing! 🌍💚
