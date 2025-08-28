javascript:(function(){
    // Enhanced RTL/LTR Toggle Bookmarklet
    var d = document;
    var b = d.body || d.documentElement;
    var s = b.style;
    var c = s.direction;
    var r = 'rtl';
    var l = 'ltr';
    
    // Toggle direction
    if (c === r) {
        s.direction = l;
        s.textAlign = 'left';
        localStorage.setItem('rtl-toggle', 'ltr');
    } else {
        s.direction = r;
        s.textAlign = 'right';
        localStorage.setItem('rtl-toggle', 'rtl');
    }
    
    // Create enhanced notification
    var n = d.createElement('div');
    n.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 30px;
        z-index: 99999;
        font-family: 'Segoe UI', Arial, sans-serif;
        font-size: 16px;
        font-weight: bold;
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        border: 2px solid rgba(255,255,255,0.2);
        backdrop-filter: blur(10px);
        transform: translateY(-10px);
        opacity: 0;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    // Add icon based on direction
    var icon = s.direction === r ? '🔄' : '🔄';
    var direction = s.direction === r ? 'RTL ←' : 'LTR →';
    
    n.innerHTML = `
        <span style="font-size: 20px;">${icon}</span>
        <span>Direction: ${direction}</span>
    `;
    
    d.body.appendChild(n);
    
    // Animate in
    setTimeout(function() {
        n.style.transform = 'translateY(0)';
        n.style.opacity = '1';
    }, 10);
    
    // Remove after 2.5 seconds with fade out
    setTimeout(function() {
        n.style.transform = 'translateY(-10px)';
        n.style.opacity = '0';
        setTimeout(function() {
            if (n.parentNode) {
                n.remove();
            }
        }, 300);
    }, 2500);
    
    // Add subtle page animation
    b.style.transition = 'all 0.3s ease';
    setTimeout(function() {
        b.style.transition = '';
    }, 300);
})();
