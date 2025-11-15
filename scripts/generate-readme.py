#!/usr/bin/env python3
"""
Script to auto-generate README.md with repository structure and images
Works on Windows, Linux, and macOS
"""

import os
import glob
from pathlib import Path

REPO_NAME = "Lumen"
README_FILE = "README.md"

def get_image_markdown(img_path, alt_text):
    """Generate markdown for an image"""
    return f"![{alt_text}]({img_path})"

def find_images(directory="."):
    """Find all image files in the repository"""
    image_extensions = ['*.png', '*.jpg', '*.jpeg', '*.gif', '*.svg']
    images = []
    
    for root, dirs, files in os.walk(directory):
        # Skip hidden directories and common ignore paths
        dirs[:] = [d for d in dirs if not d.startswith('.') and d not in ['node_modules']]
        
        for ext in image_extensions:
            for img_path in glob.glob(os.path.join(root, ext)):
                rel_path = os.path.relpath(img_path, directory)
                if '.git' not in rel_path and 'node_modules' not in rel_path:
                    images.append(rel_path)
    
    return sorted(images)

def format_name(filename):
    """Format filename to readable name"""
    name = os.path.splitext(filename)[0]
    name = name.replace('-', ' ').replace('_', ' ')
    return name.title()

def generate_readme():
    """Generate the README.md file"""
    
    readme_content = """# 🌟 Lumen - Solana Payment Gateway

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
    └── generate-readme.py
```

---

## 🖼️ Images & Assets

### Logos

"""
    
    # Add logo images
    logos_dir = Path("assets/logos")
    if logos_dir.exists():
        for img_file in sorted(logos_dir.glob("*.*")):
            if img_file.suffix.lower() in ['.png', '.jpg', '.jpeg', '.gif', '.svg']:
                img_path = str(img_file).replace('\\', '/')
                name = format_name(img_file.name)
                readme_content += f"#### {name}\n\n"
                readme_content += f"{get_image_markdown(img_path, name)}\n\n"
    
    readme_content += "\n### Main Images\n\n"
    
    # Add main images
    for main_img in ["Lumen.png", "icon1.png"]:
        if os.path.exists(main_img):
            name = format_name(main_img)
            readme_content += f"#### {name}\n\n"
            readme_content += f"{get_image_markdown(main_img, name)}\n\n"
    
    # Add images from Pics directory
    pics_dir = Path("assets/Pics")
    if pics_dir.exists():
        readme_content += "### Gallery\n\n"
        
        for category_dir in sorted(pics_dir.iterdir()):
            if category_dir.is_dir():
                category = category_dir.name
                readme_content += f"#### {category}\n\n"
                
                for img_file in sorted(category_dir.glob("*.*")):
                    if img_file.suffix.lower() in ['.png', '.jpg', '.jpeg', '.gif', '.svg']:
                        img_path = str(img_file).replace('\\', '/')
                        name = format_name(img_file.name)
                        readme_content += f"**{name}**\n\n"
                        readme_content += f"{get_image_markdown(img_path, name)}\n\n"
    
    readme_content += """---

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
"""
    
    # Write README
    with open(README_FILE, 'w', encoding='utf-8') as f:
        f.write(readme_content)
    
    print(f"[SUCCESS] {README_FILE} generated successfully!")

if __name__ == "__main__":
    generate_readme()

