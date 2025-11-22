document.addEventListener('DOMContentLoaded', () => {
    
    // ================= Data Definitions =================

    // Simple SVG icon strings
    const ICONS = {
        notepad: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600" width="100%" height="100%"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>`,
        paint: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500" width="100%" height="100%"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"></path><path d="M12 22v-6"></path><path d="M12 16H8a4 4 0 0 0-4 4"></path><path d="m9 16 3-3 3 3"></path><path d="M16 16h-4"></path></svg>`,
        gallery: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500" width="100%" height="100%"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>`,
        cookie: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-700" width="100%" height="100%"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5A10 10 0 0 0 12 2z"></path><circle cx="8" cy="8" r="1"></circle><circle cx="12" cy="16" r="1"></circle><circle cx="16" cy="10" r="1"></circle></svg>`,
        media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500" width="100%" height="100%"><path d="M10 13l5-3-5-3v6z"></path><path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0z"></path></svg>`,
        browser: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500" width="100%" height="100%"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>`,
        settings: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600" width="100%" height="100%"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
        folder: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-500" width="100%" height="100%"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg>`
    };

    const APPS = [
        { id: 'notepad', name: "Notepad", icon: ICONS.notepad },
        { id: 'paint', name: "Paint", icon: ICONS.paint },
        { id: 'gallery', name: "Photo Gallery", icon: ICONS.gallery },
        { id: 'cookie', name: "Cookie Clicker", icon: ICONS.cookie },
        { id: 'media', name: "Media Player", icon: ICONS.media },
        { id: 'browser', name: "Web Browser", icon: ICONS.browser },
        { id: 'settings', name: "Settings", icon: ICONS.settings },
        { id: 'docs', name: "My Documents", icon: ICONS.folder },
    ];

    // ================= Get DOM Elements =================
    const desktop = document.getElementById('desktop');
    const startMenu = document.getElementById('start-menu');
    const startButton = document.getElementById('start-button');
    const startMenuApps = document.getElementById('start-menu-apps');
    const clockElement = document.getElementById('clock');

    // Check if elements are retrieved to prevent errors
    if (!desktop || !startMenu || !startButton || !startMenuApps || !clockElement) {
        console.error("Missing DOM elements! Check HTML IDs.");
        return;
    }

    // ================= Utility Functions =================

    // 1. Clock Update
    function updateClock() {
        const now = new Date();
        // This format is more like XP (e.g., 12:05 PM)
        clockElement.textContent = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Render Desktop Icons
    function renderDesktopIcons() {
        desktop.innerHTML = ''; // Clear
        APPS.forEach(app => {
            const iconEl = document.createElement('div');
            iconEl.className = 'desktop-icon';
            iconEl.innerHTML = `
                <div class="desktop-icon-image">${app.icon}</div>
                <div class="desktop-icon-name">${app.name}</div>
            `;
            
            // Selection Logic
            iconEl.addEventListener('click', (e) => {
                e.stopPropagation();
                document.querySelectorAll('.desktop-icon').forEach(el => el.classList.remove('selected'));
                iconEl.classList.add('selected');
            });

            desktop.appendChild(iconEl);
        });
    }

    // 3. Render Start Menu
    function renderStartMenu() {
        startMenuApps.innerHTML = ''; // Clear
        APPS.forEach(app => {
            const itemEl = document.createElement('div');
            itemEl.className = 'menu-item';
            itemEl.innerHTML = `
                ${app.icon}
                <span class="menu-text">${app.name}</span>
            `;
            itemEl.onclick = (e) => {
                e.stopPropagation();
                alert(`Starting ${app.name}...`);
                toggleStartMenu(false);
            };
            startMenuApps.appendChild(itemEl);
        });
    }

    // 4. Start Menu Toggle Logic
    function toggleStartMenu(forceState) {
        const isVisible = startMenu.style.display === 'block';
        // If forceState (true/false) is passed, force set to that state
        // Otherwise, toggle
        const shouldShow = forceState !== undefined ? forceState : !isVisible;

        if (shouldShow) {
            startMenu.style.display = 'block';
            startButton.classList.add('active');
        } else {
            startMenu.style.display = 'none';
            startButton.classList.remove('active');
        }
    }

    // ================= Event Listeners =================

    // Start Button Click
    startButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Stop propagation to document
        toggleStartMenu();
    });

    // Global Click (Click desktop or elsewhere to close menu)
    document.addEventListener('click', () => {
        toggleStartMenu(false); // Force close
        // Also deselect icons
        document.querySelectorAll('.desktop-icon').forEach(el => el.classList.remove('selected'));
    });

    // Prevent clicks inside the start menu from closing the menu
    startMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // ================= Initialization =================
    renderDesktopIcons();
    renderStartMenu();
});