# 🤖 Auto-Structure Repository Guide

This repository is configured to automatically structure and update the README.md file whenever you push code to GitHub.

## How It Works

1. **GitHub Actions Workflow**: Located at `.github/workflows/auto-structure-repo.yml`
   - Automatically runs on every push to `main`, `master`, or `develop` branches
   - Can also be triggered manually via GitHub Actions tab

2. **README Generator Script**: Located at `scripts/generate-readme.py`
   - Scans your repository structure
   - Finds all images in `assets/` directory
   - Generates a beautiful, structured README.md with:
     - Project description
     - Features list
     - Project structure
     - All images organized by category
     - Getting started guide
     - Contributing guidelines

## Manual Usage

You can also run the script locally:

### On Windows:
```powershell
python scripts/generate-readme.py
```

### On Linux/Mac:
```bash
python3 scripts/generate-readme.py
# or
bash scripts/generate-readme.sh
```

## What Gets Updated

- ✅ README.md structure
- ✅ All images from `assets/` directory
- ✅ Project structure tree
- ✅ Image gallery organized by category

## Customization

To customize the README:
1. Edit `scripts/generate-readme.py`
2. Modify the template sections
3. Push your changes - the workflow will auto-update the README

## Notes

- The workflow uses `[skip ci]` in commit messages to prevent infinite loops
- Images are automatically discovered and added to the README
- The README is updated in a separate commit after your code push



