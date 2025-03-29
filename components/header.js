// Header component
const Header = {
    render: () => {
        const headerElement = document.getElementById('header');
        if (!headerElement) return;

        headerElement.innerHTML = `
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <span class="text-xl font-bold text-indigo-600">AppLogo</span>
                    </div>
                    <nav class="hidden md:flex space-x-8">
                        <a href="#" class="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
                        <a href="#" class="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
                        <a href="#" class="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
                    </nav>
                    <div class="flex items-center space-x-4">
                        <button id="mobileMenuBtn" class="md:hidden text-gray-700">
                            <i class="fas fa-bars text-xl"></i>
                        </button>
                        <button id="themeToggle" class="text-gray-700 hover:text-indigo-600">
                            <i class="fas fa-moon text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Add event listeners
        document.getElementById('themeToggle')?.addEventListener('click', Header.toggleTheme);
        document.getElementById('mobileMenuBtn')?.addEventListener('click', Header.toggleMobileMenu);
    },

    toggleTheme: () => {
        const html = document.documentElement;
        const themeToggle = document.getElementById('themeToggle');
        
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            themeToggle.innerHTML = '<i class="fas fa-moon text-xl"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            themeToggle.innerHTML = '<i class="fas fa-sun text-xl"></i>';
            localStorage.setItem('theme', 'dark');
        }
    },

    toggleMobileMenu: () => {
        console.log('Mobile menu toggled');
        // Would implement mobile menu functionality
    },

    init: () => {
        // Check for saved theme preference
        if (localStorage.getItem('theme') === 'dark' || 
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }
    }
};

// Initialize header when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    Header.init();
    Header.render();
});