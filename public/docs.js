// Docs Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Docs JavaScript loaded successfully');
    const searchBar = document.getElementById('docsSearchBar');
    const searchOverlay = document.getElementById('docsSearchOverlay');
    const searchInput = document.getElementById('docsSearchInput');
    const searchTabs = document.querySelectorAll('.docs-search-tab');
    const navButtons = document.querySelectorAll('.docs-nav-btn');

    // Show search overlay when search bar is clicked
    searchBar.addEventListener('click', function() {
        searchOverlay.classList.add('active');
        searchInput.focus();
    });

    // Hide search overlay when clicking outside
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
        }
    });

    // Handle ESC key to close search
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
            searchInput.value = '';
        }
        
        // Handle Ctrl+K to open search
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            searchOverlay.classList.add('active');
            searchInput.focus();
        }
    });

    // Handle search tab switching
    searchTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            searchTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });

    // Handle navigation button switching
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            navButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
        });
    });

    // Search input functionality (placeholder for future implementation)
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        
        if (query.length > 0) {
            // TODO: Implement actual search functionality
            console.log('Searching for:', query);
        }
    });

    // Sidebar navigation functionality
    const sidebarLinks = document.querySelectorAll('.docs-nav-link');
    const jumpInput = document.querySelector('.docs-jump-input');

    // Function to load page content
    function loadPageContent(pageTitle) {
        console.log('Loading page content for:', pageTitle);
        const mainContent = document.querySelector('.docs-content');
        
        if (!mainContent) {
            console.error('Main content element not found');
            return;
        }
        
        if (pageTitle === "LUMEN's History") {
            mainContent.innerHTML = `
                <div class="docs-page">
                    <h1>LUMEN's History</h1>
                    <p class="docs-intro">LUMEN is a cryptocurrency payment gateway built on the Solana blockchain, founded in 2024 and based in the United States. Our journey has been marked by continuous innovation and growth in the crypto payment space.</p>
                    
                    <h2>Company Foundation</h2>
                    <p>LUMEN was established in 2024 with a vision to revolutionize cryptocurrency payments on the Solana blockchain. We recognized the need for fast, low-cost, and scalable payment solutions that leverage Solana's high-performance infrastructure.</p>
                    
                    <h2>Key Milestones</h2>
                    
                    <div class="timeline-section">
                        <h3>2024 - Launch Year</h3>
                        <ul>
                            <li><strong>Solana Network Integration:</strong> Full integration with Solana blockchain for fast, low-cost transactions</li>
                            <li><strong>Circle Alliance Program:</strong> Joined the Circle Alliance Program for enhanced USDC support</li>
                            <li><strong>Crypto Payouts:</strong> Launched comprehensive crypto payout features</li>
                            <li><strong>Account Management:</strong> Updated account management system with enhanced security</li>
                            <li><strong>Invoicing System:</strong> Advanced invoicing features for businesses</li>
                        </ul>
                        
                        <h3>2025 - Current Year</h3>
                        <ul>
                            <li><strong>Base Network Integration:</strong> Expanded support to Base network for broader ecosystem access</li>
                            <li><strong>Enhanced Security:</strong> Implemented advanced AML/KYC compliance tools</li>
                            <li><strong>API Improvements:</strong> Released comprehensive REST API for developers</li>
                        </ul>
                    </div>
                    
                    <h2>Our Mission</h2>
                    <p>LUMEN aims to provide businesses with a secure, compliant, and efficient payment gateway that takes full advantage of Solana's capabilities. We focus on:</p>
                    <ul>
                        <li>Fast transaction processing (sub-second finality)</li>
                        <li>Low transaction fees (fractions of a cent)</li>
                        <li>Scalability to handle millions of transactions</li>
                        <li>Full regulatory compliance (AML/KYC)</li>
                        <li>Developer-friendly APIs and integrations</li>
                    </ul>
                    
                    <h2>Technology Stack</h2>
                    <p>LUMEN is built on:</p>
                    <ul>
                        <li><strong>Solana Blockchain:</strong> High-performance blockchain with 400ms block times</li>
                        <li><strong>Rust & Web3.js:</strong> Core infrastructure for blockchain interactions</li>
                        <li><strong>RESTful APIs:</strong> Easy integration for developers</li>
                        <li><strong>Real-time Monitoring:</strong> Advanced transaction tracking and reporting</li>
                    </ul>
                </div>
            `;
        } else if (pageTitle === 'Introduction') {
            mainContent.innerHTML = `
                <div class="docs-page">
                    <h1>Introduction to LUMEN</h1>
                    
                    <p class="docs-intro">LUMEN is a comprehensive cryptocurrency payment gateway built specifically for the Solana blockchain. It enables businesses to accept, process, and manage cryptocurrency payments with enterprise-grade security and compliance.</p>
                    
                    <h2>What is LUMEN?</h2>
                    <p>LUMEN is a payment processing platform that allows businesses to:</p>
                    <ul>
                        <li>Accept cryptocurrency payments from customers worldwide</li>
                        <li>Process transactions on the Solana blockchain for speed and efficiency</li>
                        <li>Convert crypto to fiat currencies automatically</li>
                        <li>Manage refunds and payouts seamlessly</li>
                        <li>Maintain full regulatory compliance with built-in AML/KYC tools</li>
                    </ul>
                    
                    <h2>Why Solana?</h2>
                    <p>Solana offers several advantages for payment processing:</p>
                    <ul>
                        <li><strong>Speed:</strong> Transactions finalize in under 1 second</li>
                        <li><strong>Cost:</strong> Transaction fees are typically less than $0.001</li>
                        <li><strong>Scalability:</strong> Can handle 65,000+ transactions per second</li>
                        <li><strong>Ecosystem:</strong> Growing DeFi and NFT ecosystem with USDC support</li>
                        <li><strong>Reliability:</strong> 99.9% uptime with distributed validator network</li>
                    </ul>
                    
                    <h2>Key Features</h2>
                    
                    <h3>Payment Processing</h3>
                    <ul>
                        <li>Accept SOL, USDC, and other SPL tokens</li>
                        <li>Real-time payment notifications</li>
                        <li>Automatic conversion to fiat (optional)</li>
                        <li>Multi-currency support</li>
                    </ul>
                    
                    <h3>Security & Compliance</h3>
                    <ul>
                        <li>Built-in AML/KYC screening</li>
                        <li>Regulatory compliance tools</li>
                        <li>Secure wallet management</li>
                        <li>Transaction monitoring and reporting</li>
                    </ul>
                    
                    <h3>Developer Tools</h3>
                    <ul>
                        <li>RESTful API for easy integration</li>
                        <li>Webhook support for real-time updates</li>
                        <li>Comprehensive documentation</li>
                        <li>SDKs for popular programming languages</li>
                    </ul>
                    
                    <h2>Getting Started</h2>
                    <p>To start using LUMEN:</p>
                    <ol>
                        <li>Create a merchant account</li>
                        <li>Complete KYC verification</li>
                        <li>Generate API keys</li>
                        <li>Integrate using our API or plugins</li>
                        <li>Start accepting payments!</li>
                    </ol>
                    
                    <h2>Supported Currencies</h2>
                    <p>LUMEN currently supports:</p>
                    <ul>
                        <li><strong>SOL:</strong> Solana's native token</li>
                        <li><strong>USDC:</strong> USD Coin on Solana (SPL)</li>
                        <li><strong>SPL Tokens:</strong> Various Solana Program Library tokens</li>
                        <li><strong>Fiat Conversion:</strong> Automatic conversion to USD, EUR, GBP</li>
                    </ul>
                </div>
            `;
        } else if (pageTitle === 'Trait Descriptions') {
            mainContent.innerHTML = `
                <div class="docs-page">
                    <h1>API Trait Descriptions</h1>
                    <p class="docs-intro">LUMEN provides a comprehensive REST API for integrating cryptocurrency payments into your application. This section describes the main API traits and endpoints.</p>
                    
                    <h2>Authentication</h2>
                    <p>All API requests require authentication using API keys. Include your API key in the request header:</p>
                    <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
                    
                    <h2>Base URL</h2>
                    <pre><code>https://api.lumen.com/v1</code></pre>
                    
                    <h2>Core Endpoints</h2>
                    
                    <h3>Create Payment</h3>
                    <p><strong>POST</strong> <code>/payments</code></p>
                    <p>Creates a new payment request. Returns a payment URL and QR code for the customer.</p>
                    <pre><code>{
  "amount": "100.00",
  "currency": "USDC",
  "order_id": "order_123",
  "callback_url": "https://yoursite.com/webhook"
}</code></pre>
                    
                    <h3>Get Payment Status</h3>
                    <p><strong>GET</strong> <code>/payments/{payment_id}</code></p>
                    <p>Retrieves the current status of a payment transaction.</p>
                    
                    <h3>List Payments</h3>
                    <p><strong>GET</strong> <code>/payments</code></p>
                    <p>Retrieves a list of all payments with optional filtering and pagination.</p>
                    
                    <h3>Create Refund</h3>
                    <p><strong>POST</strong> <code>/refunds</code></p>
                    <p>Creates a refund for a completed payment.</p>
                    <pre><code>{
  "payment_id": "pay_123",
  "amount": "50.00",
  "reason": "Customer request"
}</code></pre>
                    
                    <h3>Get Balance</h3>
                    <p><strong>GET</strong> <code>/balance</code></p>
                    <p>Retrieves your account balance in all supported currencies.</p>
                    
                    <h3>Create Payout</h3>
                    <p><strong>POST</strong> <code>/payouts</code></p>
                    <p>Creates a payout to a specified wallet address.</p>
                    <pre><code>{
  "amount": "1000.00",
  "currency": "USDC",
  "address": "So11111111111111111111111111111111111111112",
  "network": "solana"
}</code></pre>
                    
                    <h2>Webhooks</h2>
                    <p>LUMEN sends webhook notifications for payment events:</p>
                    <ul>
                        <li><code>payment.completed</code> - Payment successfully received</li>
                        <li><code>payment.failed</code> - Payment failed</li>
                        <li><code>payment.pending</code> - Payment is pending confirmation</li>
                        <li><code>refund.completed</code> - Refund processed</li>
                    </ul>
                    
                    <h2>Error Handling</h2>
                    <p>All errors follow a consistent format:</p>
                    <pre><code>{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The amount must be greater than 0",
    "type": "validation_error"
  }
}</code></pre>
                    
                    <h2>Rate Limits</h2>
                    <p>API rate limits:</p>
                    <ul>
                        <li>100 requests per minute per API key</li>
                        <li>1000 requests per hour per API key</li>
                    </ul>
                </div>
            `;
        } else if (pageTitle === 'Roadmap') {
            mainContent.innerHTML = `
                <div class="docs-page">
                    <h1>LUMEN Roadmap</h1>
                    <p class="docs-intro">Our roadmap outlines the planned features and improvements for LUMEN. We're committed to continuously enhancing our platform to better serve our users.</p>
                    
                    <h2>Q1 2025</h2>
                    <div class="roadmap-section">
                        <h3>✅ Completed</h3>
                        <ul>
                            <li>Base network integration</li>
                            <li>Enhanced API documentation</li>
                            <li>Improved dashboard UI/UX</li>
                            <li>Advanced reporting features</li>
                        </ul>
                    </div>
                    
                    <h2>Q2 2025</h2>
                    <div class="roadmap-section">
                        <h3>🚧 In Progress</h3>
                        <ul>
                            <li><strong>Multi-chain Support:</strong> Integration with Ethereum, Polygon, and other EVM chains</li>
                            <li><strong>NFT Payments:</strong> Accept payments in NFTs and process NFT-based transactions</li>
                            <li><strong>Staking Integration:</strong> Allow merchants to stake SOL and earn rewards</li>
                            <li><strong>Mobile SDK:</strong> Native iOS and Android SDKs for mobile app integration</li>
                        </ul>
                    </div>
                    
                    <h2>Q3 2025</h2>
                    <div class="roadmap-section">
                        <h3>📋 Planned</h3>
                        <ul>
                            <li><strong>DeFi Integration:</strong> Direct integration with Solana DeFi protocols</li>
                            <li><strong>Smart Contracts:</strong> Customizable smart contract templates for businesses</li>
                            <li><strong>Recurring Payments:</strong> Subscription and recurring payment support</li>
                            <li><strong>Multi-signature Wallets:</strong> Enhanced security with multi-sig support</li>
                            <li><strong>Analytics Dashboard:</strong> Advanced analytics and business intelligence tools</li>
                        </ul>
                    </div>
                    
                    <h2>Q4 2025</h2>
                    <div class="roadmap-section">
                        <h3>🔮 Future Vision</h3>
                        <ul>
                            <li><strong>AI-Powered Fraud Detection:</strong> Machine learning-based fraud prevention</li>
                            <li><strong>Cross-chain Bridges:</strong> Seamless transfers between different blockchains</li>
                            <li><strong>Merchant Marketplace:</strong> Platform for merchants to discover and integrate services</li>
                            <li><strong>Token Launchpad:</strong> Help businesses launch their own tokens</li>
                            <li><strong>Global Expansion:</strong> Support for additional fiat currencies and regions</li>
                        </ul>
                    </div>
                    
                    <h2>Long-term Goals</h2>
                    <ul>
                        <li>Become the leading payment gateway for Solana ecosystem</li>
                        <li>Process $1B+ in transaction volume annually</li>
                        <li>Support 100+ cryptocurrencies and tokens</li>
                        <li>Expand to 50+ countries with full regulatory compliance</li>
                        <li>Build the largest Solana payment infrastructure</li>
                    </ul>
                    
                    <h2>Community Feedback</h2>
                    <p>We value input from our community. If you have feature requests or suggestions, please contact us through our support channels or submit a feature request on our GitHub repository.</p>
                </div>
            `;
        } else if (pageTitle === 'Infographics') {
            mainContent.innerHTML = `
                <div class="docs-page">
                    <h1>Infographics & Visual Documentation</h1>
                    <p class="docs-intro">Visual guides and diagrams to help you understand LUMEN's architecture, payment flow, and integration process.</p>
                    
                    <h2>Payment Flow Diagram</h2>
                    <div class="infographic-section">
                        <h3>Standard Payment Process</h3>
                        <ol class="flow-list">
                            <li><strong>Customer Initiates Payment:</strong> Customer selects crypto payment option at checkout</li>
                            <li><strong>Payment Request Created:</strong> Merchant creates payment request via API</li>
                            <li><strong>QR Code Generated:</strong> LUMEN generates QR code with payment details</li>
                            <li><strong>Customer Scans QR:</strong> Customer scans QR code with Solana wallet</li>
                            <li><strong>Transaction Submitted:</strong> Customer confirms transaction in wallet</li>
                            <li><strong>Blockchain Confirmation:</strong> Transaction confirmed on Solana blockchain (~400ms)</li>
                            <li><strong>Webhook Notification:</strong> LUMEN sends webhook to merchant</li>
                            <li><strong>Payment Complete:</strong> Funds available in merchant account</li>
                        </ol>
                    </div>
                    
                    <h2>Architecture Overview</h2>
                    <div class="infographic-section">
                        <h3>System Components</h3>
                        <ul>
                            <li><strong>API Gateway:</strong> RESTful API for all operations</li>
                            <li><strong>Payment Processor:</strong> Core payment processing engine</li>
                            <li><strong>Blockchain Interface:</strong> Direct connection to Solana network</li>
                            <li><strong>Wallet Manager:</strong> Secure wallet and key management</li>
                            <li><strong>Compliance Engine:</strong> AML/KYC screening and monitoring</li>
                            <li><strong>Notification Service:</strong> Webhook and email notifications</li>
                            <li><strong>Reporting System:</strong> Transaction logs and analytics</li>
                        </ul>
                    </div>
                    
                    <h2>Integration Methods</h2>
                    <div class="infographic-section">
                        <h3>Available Integration Options</h3>
                        <ul>
                            <li><strong>REST API:</strong> Direct API integration for custom solutions</li>
                            <li><strong>Payment Buttons:</strong> Simple embeddable payment buttons</li>
                            <li><strong>E-commerce Plugins:</strong> Pre-built plugins for WooCommerce, Shopify, etc.</li>
                            <li><strong>Email Invoicing:</strong> Send payment links via email</li>
                            <li><strong>Mobile SDK:</strong> Native mobile app integration (coming soon)</li>
                        </ul>
                    </div>
                    
                    <h2>Security Layers</h2>
                    <div class="infographic-section">
                        <h3>Multi-layer Security</h3>
                        <ul>
                            <li><strong>API Authentication:</strong> Secure API key management</li>
                            <li><strong>HTTPS Encryption:</strong> All communications encrypted</li>
                            <li><strong>Cold Storage:</strong> Majority of funds in offline cold wallets</li>
                            <li><strong>Multi-signature:</strong> Critical operations require multiple signatures</li>
                            <li><strong>Real-time Monitoring:</strong> 24/7 transaction monitoring</li>
                            <li><strong>Compliance Checks:</strong> Automated AML/KYC screening</li>
                        </ul>
                    </div>
                    
                    <h2>Supported Networks</h2>
                    <div class="infographic-section">
                        <h3>Current & Planned Network Support</h3>
                        <ul>
                            <li>✅ <strong>Solana Mainnet:</strong> Full support</li>
                            <li>✅ <strong>Solana Devnet:</strong> Testing environment</li>
                            <li>✅ <strong>Base Network:</strong> Full support</li>
                            <li>🚧 <strong>Ethereum:</strong> In development</li>
                            <li>🚧 <strong>Polygon:</strong> In development</li>
                        </ul>
                    </div>
                </div>
            `;
        } else if (pageTitle === 'White Paper') {
            mainContent.innerHTML = `
                <div class="docs-page">
                    <h1>LUMEN White Paper</h1>
                    <p class="docs-intro">Technical documentation and specifications for the LUMEN payment gateway platform.</p>
                    
                    <h2>Executive Summary</h2>
                    <p>LUMEN is a next-generation cryptocurrency payment gateway built on the Solana blockchain. It provides businesses with a fast, secure, and cost-effective solution for accepting cryptocurrency payments while maintaining full regulatory compliance.</p>
                    
                    <h2>1. Introduction</h2>
                    <h3>1.1 Problem Statement</h3>
                    <p>Traditional payment gateways face challenges with cryptocurrency integration:</p>
                    <ul>
                        <li>High transaction fees on legacy blockchains</li>
                        <li>Slow transaction confirmation times</li>
                        <li>Complex integration requirements</li>
                        <li>Regulatory compliance concerns</li>
                        <li>Limited scalability</li>
                    </ul>
                    
                    <h3>1.2 Solution</h3>
                    <p>LUMEN leverages Solana's high-performance blockchain to provide:</p>
                    <ul>
                        <li>Sub-second transaction finality</li>
                        <li>Ultra-low transaction fees (&lt;$0.001)</li>
                        <li>Simple REST API integration</li>
                        <li>Built-in AML/KYC compliance</li>
                        <li>Scalability for millions of transactions</li>
                    </ul>
                    
                    <h2>2. Technical Architecture</h2>
                    <h3>2.1 Blockchain Infrastructure</h3>
                    <p>LUMEN operates on Solana's mainnet, utilizing:</p>
                    <ul>
                        <li><strong>Proof of History (PoH):</strong> Cryptographic clock for transaction ordering</li>
                        <li><strong>Proof of Stake (PoS):</strong> Consensus mechanism for network security</li>
                        <li><strong>Turbine:</strong> Block propagation protocol for fast network communication</li>
                        <li><strong>Gulf Stream:</strong> Transaction forwarding protocol</li>
                    </ul>
                    
                    <h3>2.2 Payment Processing</h3>
                    <p>Payment processing flow:</p>
                    <ol>
                        <li>Merchant creates payment request via API</li>
                        <li>LUMEN generates unique payment address</li>
                        <li>Customer sends payment to address</li>
                        <li>Solana validators confirm transaction</li>
                        <li>LUMEN detects payment and updates merchant</li>
                        <li>Funds are credited to merchant account</li>
                    </ol>
                    
                    <h3>2.3 Security Model</h3>
                    <p>Security is implemented through multiple layers:</p>
                    <ul>
                        <li><strong>Hot Wallets:</strong> Small amounts for immediate processing</li>
                        <li><strong>Cold Storage:</strong> Majority of funds in offline wallets</li>
                        <li><strong>Multi-signature:</strong> Critical operations require multiple approvals</li>
                        <li><strong>Encryption:</strong> All sensitive data encrypted at rest and in transit</li>
                        <li><strong>Monitoring:</strong> Real-time fraud detection and anomaly detection</li>
                    </ul>
                    
                    <h2>3. Token Economics</h2>
                    <h3>3.1 LUMEN Token ($LUMEN)</h3>
                    <p>The LUMEN token serves multiple purposes:</p>
                    <ul>
                        <li><strong>Fee Reduction:</strong> Holders receive reduced transaction fees</li>
                        <li><strong>Governance:</strong> Token holders can vote on platform decisions</li>
                        <li><strong>Staking:</strong> Stake tokens to earn rewards</li>
                        <li><strong>Access:</strong> Unlock premium features and services</li>
                    </ul>
                    
                    <h3>3.2 Token Distribution</h3>
                    <ul>
                        <li>Community: 30%</li>
                        <li>Treasury: 25%</li>
                        <li>Team: 25%</li>
                        <li>Staking Rewards: 10%</li>
                        <li>Investors: 10%</li>
                    </ul>
                    
                    <h2>4. Compliance & Regulation</h2>
                    <h3>4.1 AML/KYC</h3>
                    <p>LUMEN implements comprehensive AML/KYC procedures:</p>
                    <ul>
                        <li>Customer identity verification</li>
                        <li>Transaction monitoring</li>
                        <li>Suspicious activity reporting</li>
                        <li>Sanctions screening</li>
                    </ul>
                    
                    <h3>4.2 Regulatory Compliance</h3>
                    <p>LUMEN maintains compliance with:</p>
                    <ul>
                        <li>Bank Secrecy Act (BSA)</li>
                        <li>Anti-Money Laundering (AML) regulations</li>
                        <li>Know Your Customer (KYC) requirements</li>
                        <li>Data protection regulations (GDPR, CCPA)</li>
                    </ul>
                    
                    <h2>5. API Specifications</h2>
                    <h3>5.1 REST API</h3>
                    <p>LUMEN provides a RESTful API with the following characteristics:</p>
                    <ul>
                        <li>JSON request/response format</li>
                        <li>HTTPS-only communication</li>
                        <li>API key authentication</li>
                        <li>Rate limiting for abuse prevention</li>
                        <li>Comprehensive error handling</li>
                    </ul>
                    
                    <h3>5.2 Webhooks</h3>
                    <p>Real-time event notifications via webhooks:</p>
                    <ul>
                        <li>Payment status updates</li>
                        <li>Refund notifications</li>
                        <li>Account balance changes</li>
                        <li>Compliance alerts</li>
                    </ul>
                    
                    <h2>6. Future Development</h2>
                    <p>Planned enhancements include:</p>
                    <ul>
                        <li>Multi-chain support (Ethereum, Polygon, etc.)</li>
                        <li>NFT payment processing</li>
                        <li>DeFi protocol integration</li>
                        <li>Mobile SDKs</li>
                        <li>Advanced analytics and reporting</li>
                    </ul>
                    
                    <h2>7. Conclusion</h2>
                    <p>LUMEN represents a significant advancement in cryptocurrency payment processing, combining Solana's technical advantages with comprehensive compliance and developer-friendly tools. We are committed to building the future of digital payments.</p>
                </div>
            `;
        } else if (pageTitle === 'Changelog') {
            mainContent.innerHTML = `
                <div class="changelog-page">
                    <h1>Changelog</h1>
                    
                    <div class="changelog-entry">
                        <div class="changelog-status">
                            <span class="changelog-icon">💜</span>
                            <span class="changelog-status-text">Improved</span>
                        </div>
                        <h2 class="changelog-title">Added Symbol Search to Get Currencies API Endpoint</h2>
                        <div class="changelog-meta">
                            <span class="changelog-time-icon">🕐</span>
                            <span class="changelog-meta-text">5 months ago by LUMEN</span>
                        </div>
                        <div class="changelog-description">
                            <p>
                                <span class="changelog-check">✅</span>
                                Added search by symbol parameter in the Get Currencies API endpoint. You can now query currencies directly by their symbol, e.g., <a href="#" class="changelog-link">https://api.lumen.com/v2/currencies?symbol=SOL</a>.
                            </p>
                            <p>
                                Read more: <a href="#" class="changelog-link">Get Currencies API</a>
                            </p>
                        </div>
                    </div>

                    <div class="changelog-entry">
                        <div class="changelog-status">
                            <span class="changelog-icon">➕</span>
                            <span class="changelog-status-text">Added</span>
                        </div>
                        <h2 class="changelog-title">New Convert API endpoint!</h2>
                        <div class="changelog-meta">
                            <span class="changelog-time-icon">🕐</span>
                            <span class="changelog-meta-text">5 months ago by LUMEN</span>
                        </div>
                        <div class="changelog-description">
                            <p>
                                We've introduced a flexible Conversions API that lets you seamlessly convert between currencies directly from your ledger account. This provides a simple and powerful way to integrate currency conversions into your workflows or applications.
                            </p>
                        </div>
                    </div>

                    <div class="changelog-entry">
                        <div class="changelog-status">
                            <span class="changelog-icon">⚠️</span>
                            <span class="changelog-status-text">Updated</span>
                        </div>
                        <h2 class="changelog-title">Update POST /checkout endpoint</h2>
                        <div class="changelog-meta">
                            <span class="changelog-time-icon">🕐</span>
                            <span class="changelog-meta-text">7 months ago by LUMEN</span>
                        </div>
                        <div class="changelog-description">
                            <p>
                                <span class="changelog-warning">⚠️</span>
                                <strong>Deprecation Notice:</strong> The <code>lightning_network</code> parameter will be deprecated by 1 of June.
                            </p>
                            <ul class="changelog-list">
                                <li>Instead, please use the <code>platform_id</code> parameter for specifying Lightning Network payments.</li>
                                <li>The Lightning platform ID can be found <a href="#" class="changelog-link">here</a>.</li>
                                <li>Update your integration accordingly to avoid issues with future API versions.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="changelog-entry">
                        <div class="changelog-status">
                            <span class="changelog-icon">🔧</span>
                            <span class="changelog-status-text">Enhanced</span>
                        </div>
                        <h2 class="changelog-title">Additional filters for GET#Refunds endpoint</h2>
                        <div class="changelog-meta">
                            <span class="changelog-time-icon">🕐</span>
                            <span class="changelog-meta-text">8 months ago by LUMEN</span>
                        </div>
                        <div class="changelog-description">
                            <p>
                                <span class="changelog-check">✅</span>
                                Added new filtering options to the Refunds API endpoint to help you better manage and track refund transactions.
                            </p>
                            <ul class="changelog-list">
                                <li>Filter by refund status (pending, completed, failed)</li>
                                <li>Filter by date range with improved date handling</li>
                                <li>Filter by transaction amount and currency</li>
                                <li>Enhanced pagination for better performance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Default content for other pages
            mainContent.innerHTML = `
                <div class="docs-page">
                <h1>${pageTitle}</h1>
                <p>Content for ${pageTitle} will be implemented here.</p>
                </div>
            `;
        }
    }

    // Load default content on page load
    const defaultPage = document.querySelector('.docs-nav-link.active');
    if (defaultPage) {
        const defaultPageTitle = defaultPage.textContent.trim();
        loadPageContent(defaultPageTitle);
    }

    // Handle sidebar link clicks
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Link clicked:', this.textContent.trim());
            
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Load content for the selected page
            const pageTitle = this.textContent.trim();
            loadPageContent(pageTitle);
        });
    });

    // Handle jump to functionality
    jumpInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        
        if (query.length > 0) {
            sidebarLinks.forEach(link => {
                const linkText = link.textContent.toLowerCase();
                if (linkText.includes(query)) {
                    link.style.display = 'block';
                    link.style.backgroundColor = linkText === query ? 'rgba(153, 69, 255, 0.2)' : 'transparent';
                } else {
                    link.style.display = 'none';
                }
            });
        } else {
            // Reset all links
            sidebarLinks.forEach(link => {
                link.style.display = 'block';
                link.style.backgroundColor = '';
            });
        }
    });

    // Handle Ctrl+/ shortcut for jump to
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === '/') {
            e.preventDefault();
            jumpInput.focus();
        }
    });

    // Test function to manually load changelog (for debugging)
    window.loadChangelog = function() {
        console.log('Manually loading changelog...');
        loadPageContent('Changelog');
    };

    // Close search when Enter is pressed (for now)
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query.length > 0) {
                // TODO: Implement search results display
                console.log('Search submitted:', query);
            }
        }
    });
});
