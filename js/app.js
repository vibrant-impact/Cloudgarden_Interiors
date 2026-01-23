/**
 * AI generated code file since I don't know how to code JS myself.
 * CloudGarden App Logic (js/app.js)
 * Handles mobile menu functionality and dynamic navigation link highlighting.
 */

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const desktopNav = document.getElementById('desktopNav');
    const fixedNavBar = document.getElementById('fixedNavBar');
    
    // --- 1. Populate and Initialize Mobile Menu ---

    /**
     * Clones desktop navigation links and social icons into the mobile menu container.
     */
    function setupMobileMenu() {
        // Clear existing content just in case
        mobileMenu.innerHTML = '';

        // Clone and append desktop links
        const navLinks = desktopNav.querySelectorAll('.navLink');
        navLinks.forEach(link => {
            const mobileLink = link.cloneNode(true);
            mobileMenu.appendChild(mobileLink);
        });

        // Clone and append social icons from #socialIcons (if it exists)
        const socialIcons = document.getElementById('socialIcons');
        if (socialIcons) {
            const mobileSocialDiv = document.createElement('div');
            mobileSocialDiv.id = 'mobileSocial';
            mobileSocialDiv.innerHTML = socialIcons.innerHTML;
            mobileMenu.appendChild(mobileSocialDiv);
        }
    }
    
    // Initial setup
    setupMobileMenu();

    // --- 2. Mobile Menu Toggle Logic ---

    menuToggle.addEventListener('click', () => {
        const isMenuOpen = mobileMenu.classList.contains('open');
        
        if (isMenuOpen) {
            // Close menu
            mobileMenu.classList.remove('open');
            // Remove overflow hidden from body
            document.body.style.overflow = ''; 
        } else {
            // Open menu
            mobileMenu.classList.add('open');
            // Prevent scrolling when menu is open
            document.body.style.overflow = 'hidden'; 
        }
    });

    // Close mobile menu when a link is clicked
    mobileMenu.addEventListener('click', (event) => {
        if (event.target.classList.contains('navLink')) {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        }
    });


    // --- 3. Dynamic Active Navigation State ---

    /**
     * Determines the current page and sets the 'active' class on the corresponding link.
     */
    function setActiveLink() {
        // Get the current page filename (e.g., 'portfolio.html')
        const path = window.location.pathname;
        const page = path.split('/').pop(); 
        
        // Handle empty path (which defaults to index.html)
        const currentPage = page === "" ? "index.html" : page; 

        // Get all navigation links (desktop and mobile)
        const allLinks = document.querySelectorAll('.navLink');

        allLinks.forEach(link => {
            // Remove 'active' class from all links initially
            link.classList.remove('active');

            // Check if the link's href matches the current page file name
            if (link.href.includes(currentPage)) {
                link.classList.add('active');
            }
        });
    }

    // Set the active link on page load
    setActiveLink();
});
