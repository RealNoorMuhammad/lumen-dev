#!/bin/bash

# Script to auto-generate README.md with repository structure and images

REPO_NAME="Lumen"
README_FILE="README.md"

# Function to get image markdown
get_image_markdown() {
    local img_path=$1
    local alt_text=$2
    echo "![$alt_text]($img_path)"
}

# Function to find all images
find_images() {
    find . -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.gif" -o -iname "*.svg" \) \
        ! -path "./.git/*" \
        ! -path "./node_modules/*" \
        ! -path "./.github/*" \
        | sort
}

# Start generating README
cat > "$README_FILE" << 'EOF'
# 🌟 Lumen - Solana Payment Gateway

<div align="center">

![Lumen Logo](assets/logos/header-logo.png)

**The Best Solana Payment Gateway**

[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Images & Assets](#-images--assets)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About

Lumen is a modern Solana payment gateway solution that provides seamless payment processing capabilities. This project offers a comprehensive web interface for managing payments, tokenomics, and exchange operations.

---

## ✨ Features

- 💳 **Accept Payments** - Easy payment processing
- 🔄 **Manage & Exchange** - Token management and exchange
- 📊 **Tokenomics** - Comprehensive token economics
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Beautiful and intuitive interface

---

## 📁 Project Structure

```
Lumen/
├── assets/
│   ├── logos/
│   │   ├── footer-logo.png
│   │   ├── header-logo.png
│   │   └── logonow.png
│   ├── Pics/
│   │   ├── About/
│   │   ├── AcceptPayments/
│   │   ├── Main/
│   │   ├── ManageandExchange/
│   │   └── Tokenomics/
│   └── Video/
│       └── token-video.mp4
├── public/
│   ├── *.html (Web pages)
│   ├── *.css (Stylesheets)
│   └── *.js (JavaScript files)
├── .github/
│   └── workflows/
│       └── auto-structure-repo.yml
└── scripts/
    └── generate-readme.sh
```

---

## 🖼️ Images & Assets

### Logos

EOF

# Add logo images
if [ -d "assets/logos" ]; then
    for img in assets/logos/*.{png,jpg,jpeg,gif,svg} 2>/dev/null; do
        if [ -f "$img" ]; then
            filename=$(basename "$img")
            name=$(echo "$filename" | sed 's/\.[^.]*$//' | tr '[:upper:]' '[:lower:]' | sed 's/-/ /g')
            echo "#### ${name^}" >> "$README_FILE"
            get_image_markdown "$img" "$name" >> "$README_FILE"
            echo "" >> "$README_FILE"
        fi
    done
fi

cat >> "$README_FILE" << 'EOF'

### Main Images

EOF

# Add main images
if [ -f "Lumen.png" ]; then
    echo "#### Project Logo" >> "$README_FILE"
    get_image_markdown "Lumen.png" "Lumen Project Logo" >> "$README_FILE"
    echo "" >> "$README_FILE"
fi

if [ -f "icon1.png" ]; then
    echo "#### Icon" >> "$README_FILE"
    get_image_markdown "icon1.png" "Lumen Icon" >> "$README_FILE"
    echo "" >> "$README_FILE"
fi

# Add images from Pics directory
if [ -d "assets/Pics" ]; then
    echo "### Gallery" >> "$README_FILE"
    echo "" >> "$README_FILE"
    
    for category_dir in assets/Pics/*/; do
        if [ -d "$category_dir" ]; then
            category=$(basename "$category_dir")
            echo "#### ${category}" >> "$README_FILE"
            echo "" >> "$README_FILE"
            
            for img in "$category_dir"*.{png,jpg,jpeg,gif,svg} 2>/dev/null; do
                if [ -f "$img" ]; then
                    filename=$(basename "$img")
                    name=$(echo "$filename" | sed 's/\.[^.]*$//' | tr '[:upper:]' '[:lower:]' | sed 's/-/ /g')
                    echo "**${name^}**" >> "$README_FILE"
                    get_image_markdown "$img" "$name" >> "$README_FILE"
                    echo "" >> "$README_FILE"
                fi
            done
        fi
    done
fi

cat >> "$README_FILE" << 'EOF'

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A web server (optional, for local development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Lumen.git
cd Lumen
```

2. Open the project:
   - Simply open `public/index.html` in your web browser, or
   - Use a local web server for better experience

### Running Locally

You can use Python's built-in server:
```bash
cd public
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

---

## 💻 Usage

1. Navigate to the main page (`public/index.html`)
2. Explore different sections:
   - **Home** - Main landing page
   - **About** - Learn about the project
   - **Accept Payments** - Payment processing
   - **Manage & Exchange** - Token management
   - **Tokenomics** - Token economics
   - **Documentation** - Project documentation

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📞 Contact

For questions or support, please open an issue on GitHub.

---

<div align="center">

**Made with ❤️ by the Lumen Team**

⭐ Star this repo if you find it helpful!

</div>

EOF

echo "✅ README.md generated successfully!"



