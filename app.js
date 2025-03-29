// Main application state
const AppState = {
    currentUser: null,
    currentView: 'home',
    isLoading: false
};

// DOM Elements
const contentElement = document.getElementById('content');

// View templates
const views = {
    home: `
        <section class="max-w-4xl mx-auto">
            <div class="text-center py-12">
                <h1 class="text-4xl font-bold text-gray-800 mb-6">Welcome to Our App</h1>
                <p class="text-xl text-gray-600 mb-8">A modern web application built with vanilla JavaScript and Tailwind CSS</p>
                <div class="flex justify-center space-x-4">
                    <button id="loginBtn" class="btn-primary">Login</button>
                    <button id="registerBtn" class="btn-secondary">Register</button>
                </div>
            </div>
        </section>
    `,
    dashboard: `
        <section class="max-w-6xl mx-auto">
            <h2 class="text-2xl font-semibold mb-6">Dashboard</h2>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow animate-fade-in">
                    <h3 class="text-lg font-medium mb-2">Recent Activity</h3>
                    <p class="text-gray-600">No recent activity</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow animate-fade-in" style="animation-delay: 0.1s">
                    <h3 class="text-lg font-medium mb-2">Statistics</h3>
                    <p class="text-gray-600">No data available</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow animate-fade-in" style="animation-delay: 0.2s">
                    <h3 class="text-lg font-medium mb-2">Quick Actions</h3>
                    <button class="btn-primary w-full">New Item</button>
                </div>
            </div>
        </section>
    `
};

// Initialize the application
function initApp() {
    renderView('home');
    setupEventListeners();
}

// Render a view based on current state
function renderView(viewName) {
    if (!views[viewName]) return;
    
    AppState.currentView = viewName;
    contentElement.innerHTML = views[viewName];
    
    // Re-attach event listeners for the new view
    setupViewEventListeners();
}

// Setup global event listeners
function setupEventListeners() {
    // Navigation events would be added here
}

// Setup view-specific event listeners
function setupViewEventListeners() {
    if (AppState.currentView === 'home') {
        document.getElementById('loginBtn')?.addEventListener('click', () => {
            console.log('Login button clicked');
            // Would navigate to login view
        });
        
        document.getElementById('registerBtn')?.addEventListener('click', () => {
            console.log('Register button clicked');
            // Would navigate to register view
        });
    }
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);