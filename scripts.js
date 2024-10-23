const canvas = document.getElementById('networkCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

const users = [
    { x: 100, y: 100, label: 'User  1' },
    { x: 100, y: 200, label: 'User  2' },
    { x: 100, y: 300, label: 'User  3' },
];
const servers = [
    { x: 400, y: 100, label: 'Server 1' },
    { x: 400, y: 300, label: 'Server 2' },
];
const attacker = { x: 400, y: 450, label: 'Attacker' };
let messages = [];

function drawHuman(x, y, label, color) {
    // Draw head
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();

    // Draw body
    ctx.fillStyle = color;
    ctx.fillRect(x - 5, y + 15, 10, 30);

    // Draw label
    ctx.fillStyle = '#000';
    ctx.fillText(label, x - 20, y - 20);
}

function drawMessage(message) {
    ctx.beginPath();
    ctx.moveTo(message.from.x, message.from.y);
    ctx.lineTo(message.to.x, message.to.y);
    ctx.strokeStyle = message.intercepted ? 'rgba(255, 0, 0, 0.7)' : 'rgba(0, 150, 255, 0.7)';
    ctx.lineWidth = 2;
    ctx.stroke();
}

function sendMessage(fromUser ) {
    const server = servers[Math.floor(Math.random() * servers.length)];
    const message = {
        from: fromUser ,
        to: server,
        intercepted: false
    };
    messages.push(message);

    // Simulate the attack
    setTimeout(() => {
        message.intercepted = true;
        drawMessage({ from: attacker, to: server });
    }, 1000);
    
    setTimeout(() => {
        const toUser  = users[Math.floor(Math.random() * users.length)];
        drawMessage({ from: server, to: toUser  });
    }, 1500);
}

function drawNetwork() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw users
    users.forEach(user => drawHuman(user.x, user.y, user.label, '#28A745'));
    
    // Draw servers
    servers.forEach(server => drawHuman(server.x, server.y, server.label, '#007BFF'));
    
    // Draw attacker
    drawHuman(attacker.x, attacker.y, attacker.label, '#DC3545');
    
    // Draw messages
    messages.forEach(message => drawMessage(message));
}

// Animation Loop
function animate() {
    drawNetwork();
    requestAnimationFrame(animate);
}

document.getElementById('send-message').addEventListener('click', () => {
    users.forEach(user => sendMessage(user));
});

animate();