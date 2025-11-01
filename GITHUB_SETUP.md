# 🚀 GitHub Repository Setup Guide

## Step 1: Create Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in the top right
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `urban-energy-savings-platform`
   - **Description**: `Track energy savings, reduce CO₂, and invest in renewable energy stocks`
   - **Visibility**: Public (or Private if you prefer)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Connect Local Repository to GitHub

After creating the repository on GitHub, you'll see instructions. Use these commands:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/urban-energy-savings-platform.git

# Verify the remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Verify Upload

1. Refresh your GitHub repository page
2. You should see all files uploaded
3. README.md will be displayed automatically

## Step 4: Add Repository Topics (Optional but Recommended)

On your GitHub repository page:

1. Click the ⚙️ gear icon next to "About"
2. Add topics:
   - `energy-conservation`
   - `sustainability`
   - `renewable-energy`
   - `stock-investment`
   - `javascript`
   - `html-css-javascript`
   - `environmental-impact`
   - `co2-tracking`
   - `gamification`
   - `india`

## Step 5: Enable GitHub Pages (Optional)

To host your site for free:

1. Go to **Settings** → **Pages**
2. Under "Source", select **main** branch
3. Click **Save**
4. Your site will be live at: `https://YOUR_USERNAME.github.io/urban-energy-savings-platform/`

## Step 6: Add a Description and Website

1. Click the ⚙️ gear icon next to "About"
2. Add description: `Track energy savings, reduce CO₂ emissions, and invest in renewable energy stocks`
3. Add website: Your GitHub Pages URL (if enabled)
4. Click **Save changes**

## Future Updates

When you make changes:

```bash
# Check status
git status

# Add changes
git add .

# Commit with message
git commit -m "Your descriptive message"

# Push to GitHub
git push origin main
```

## Useful Git Commands

```bash
# View commit history
git log --oneline

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main

# Merge branch
git merge feature-name

# Pull latest changes
git pull origin main

# View differences
git diff
```

## Repository Settings Recommendations

### Branch Protection (for collaboration)

1. Go to **Settings** → **Branches**
2. Add rule for `main` branch
3. Enable:
   - Require pull request reviews
   - Require status checks to pass

### Issues

Enable issue templates:
1. Go to **Settings** → **Features**
2. Enable **Issues**
3. Create templates for bug reports and feature requests

### Discussions (Optional)

Enable for community engagement:
1. Go to **Settings** → **Features**
2. Enable **Discussions**

## Collaboration

To add collaborators:
1. Go to **Settings** → **Collaborators**
2. Click **Add people**
3. Enter their GitHub username

## Repository Badges

Add these to your README for a professional look:

```markdown
![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/urban-energy-savings-platform)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/urban-energy-savings-platform)
![GitHub issues](https://img.shields.io/github/issues/YOUR_USERNAME/urban-energy-savings-platform)
![GitHub license](https://img.shields.io/github/license/YOUR_USERNAME/urban-energy-savings-platform)
```

## Troubleshooting

### Authentication Issues

If you get authentication errors:

**Option 1: HTTPS with Personal Access Token**
```bash
# Generate token at: https://github.com/settings/tokens
# Use token as password when prompted
```

**Option 2: SSH**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Add to GitHub: Settings → SSH and GPG keys
# Change remote to SSH
git remote set-url origin git@github.com:YOUR_USERNAME/urban-energy-savings-platform.git
```

### Large Files

If you have large files (>100MB), use Git LFS:
```bash
git lfs install
git lfs track "*.large-file-extension"
```

## Next Steps

1. ✅ Create repository on GitHub
2. ✅ Push code
3. ✅ Add description and topics
4. ✅ Enable GitHub Pages (optional)
5. ✅ Share with the community!
6. ✅ Star your own repo 😄

## Resources

- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Markdown Guide](https://www.markdownguide.org/)

---

**Happy coding! 🚀**
