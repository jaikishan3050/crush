// Proposal Website JavaScript
class ProposalJourney {
    constructor() {
        this.currentScreen = 'welcome-screen';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupMusicControl();
        this.createMoreHearts();
        this.setupSpecialEffects();
    }

    setupEventListeners() {
        // Start button
        document.getElementById('start-btn').addEventListener('click', () => {
            this.showScreen('question1');
            this.playTransitionSound();
        });

        // Choice buttons
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const nextScreen = e.target.getAttribute('data-next');
                this.showScreen(nextScreen);
                this.playTransitionSound();
            });
        });

        // Ready button
        document.getElementById('ready-btn').addEventListener('click', () => {
            this.showScreen('letter-reveal');
            this.playTransitionSound();
        });

        // Question button
        document.getElementById('question-btn').addEventListener('click', () => {
            this.showScreen('big-question');
            this.createRomanticAtmosphere();
            this.playTransitionSound();
        });

        // Proposal buttons
        document.getElementById('yes-btn').addEventListener('click', () => {
            this.showScreen('success-screen');
            this.celebrate();
            this.playSuccessSound();
        });

        document.getElementById('no-btn').addEventListener('click', () => {
            this.showScreen('think-screen');
            this.playThinkingSound();
        });

        // Think screen buttons
        document.getElementById('reconsider-btn').addEventListener('click', () => {
            this.showScreen('big-question');
            this.playTransitionSound();
        });

        document.getElementById('restart-btn').addEventListener('click', () => {
            this.showScreen('welcome-screen');
            this.resetEffects();
            this.playTransitionSound();
        });

        // Celebrate button
        document.getElementById('celebrate-btn').addEventListener('click', () => {
            this.triggerCelebration();
        });
    }

    showScreen(screenId) {
        // Hide current screen
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show new screen with animation
        setTimeout(() => {
            document.getElementById(screenId).classList.add('active');
            this.currentScreen = screenId;
        }, 300);
    }

    setupMusicControl() {
        const musicToggle = document.getElementById('music-toggle');
        const backgroundMusic = document.getElementById('background-music');
        let isPlaying = false;

        musicToggle.addEventListener('click', () => {
            if (isPlaying) {
                backgroundMusic.pause();
                musicToggle.textContent = '🎵';
                musicToggle.style.opacity = '0.6';
            } else {
                // Note: Most browsers require user interaction to play audio
                backgroundMusic.play().catch(e => {
                    console.log('Audio play failed:', e);
                });
                musicToggle.textContent = '🎶';
                musicToggle.style.opacity = '1';
            }
            isPlaying = !isPlaying;
        });
    }

    createMoreHearts() {
        const heartsContainer = document.querySelector('.hearts-container');
        const heartEmojis = ['💖', '💕', '💝', '💗', '💓', '💘', '💞', '💟'];
        
        setInterval(() => {
            if (Math.random() < 0.3) { // 30% chance every interval
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
                heart.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
                heartsContainer.appendChild(heart);

                // Remove heart after animation
                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }, 7000);
            }
        }, 2000);
    }

    createRomanticAtmosphere() {
        // Add special effects for the proposal moment
        this.createSparkles();
        this.intensifyHearts();
        
        // Change background temporarily
        document.body.style.background = 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)';
        
        setTimeout(() => {
            document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)';
        }, 5000);
    }

    createSparkles() {
        const sparkleContainer = document.createElement('div');
        sparkleContainer.style.position = 'fixed';
        sparkleContainer.style.top = '0';
        sparkleContainer.style.left = '0';
        sparkleContainer.style.width = '100%';
        sparkleContainer.style.height = '100%';
        sparkleContainer.style.pointerEvents = 'none';
        sparkleContainer.style.zIndex = '5';
        document.body.appendChild(sparkleContainer);

        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.textContent = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.fontSize = (Math.random() * 0.5 + 0.8) + 'rem';
            sparkle.style.animation = `twinkle ${Math.random() * 2 + 1}s infinite`;
            sparkleContainer.appendChild(sparkle);
        }

        // Remove sparkles after a while
        setTimeout(() => {
            if (sparkleContainer.parentNode) {
                sparkleContainer.parentNode.removeChild(sparkleContainer);
            }
        }, 10000);
    }

    intensifyHearts() {
        const heartsContainer = document.querySelector('.hearts-container');
        const heartEmojis = ['💖', '💕', '💝', '💗', '💓', '💘'];
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDuration = '3s';
                heart.style.fontSize = '2.5rem';
                heartsContainer.appendChild(heart);

                setTimeout(() => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }, 4000);
            }, i * 200);
        }
    }

    celebrate() {
        // Create celebration effects
        this.createConfetti();
        this.createFireworks();
        this.showCelebrationMessage();
        
        // Change page background to celebration colors
        document.body.style.background = 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 25%, #fad0c4 75%, #ff9a9e 100%)';
    }

    createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.style.position = 'fixed';
        confettiContainer.style.top = '0';
        confettiContainer.style.left = '0';
        confettiContainer.style.width = '100%';
        confettiContainer.style.height = '100%';
        confettiContainer.style.pointerEvents = 'none';
        confettiContainer.style.zIndex = '1000';
        document.body.appendChild(confettiContainer);

        const confettiEmojis = ['🎉', '🎊', '🎈', '🌟', '⭐', '💕', '💖', '🎆'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
            confetti.style.position = 'absolute';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.fontSize = (Math.random() * 1 + 1) + 'rem';
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
            confettiContainer.appendChild(confetti);
        }

        // Add fall animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);

        // Remove confetti after animation
        setTimeout(() => {
            if (confettiContainer.parentNode) {
                confettiContainer.parentNode.removeChild(confettiContainer);
            }
            if (style.parentNode) {
                style.parentNode.removeChild(style);
            }
        }, 6000);
    }

    createFireworks() {
        // Add screen flash effect
        const flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.top = '0';
        flash.style.left = '0';
        flash.style.width = '100%';
        flash.style.height = '100%';
        flash.style.background = 'rgba(255, 255, 255, 0.8)';
        flash.style.zIndex = '999';
        flash.style.animation = 'flash 0.5s ease-out';
        document.body.appendChild(flash);

        const style = document.createElement('style');
        style.textContent = `
            @keyframes flash {
                0% { opacity: 0; }
                50% { opacity: 1; }
                100% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            if (flash.parentNode) {
                flash.parentNode.removeChild(flash);
            }
            if (style.parentNode) {
                style.parentNode.removeChild(style);
            }
        }, 500);
    }

    showCelebrationMessage() {
        // Create floating celebration messages
        const messages = [
            "She said YES! 💕",
            "Best day ever! 🎉",
            "Love wins! 💖",
            "Happily ever after! ✨",
            "Dreams come true! 🌟"
        ];

        messages.forEach((message, index) => {
            setTimeout(() => {
                const messageEl = document.createElement('div');
                messageEl.textContent = message;
                messageEl.style.position = 'fixed';
                messageEl.style.left = Math.random() * 60 + 20 + '%';
                messageEl.style.top = Math.random() * 40 + 30 + '%';
                messageEl.style.fontSize = '1.5rem';
                messageEl.style.fontWeight = 'bold';
                messageEl.style.color = '#ff6b6b';
                messageEl.style.zIndex = '1001';
                messageEl.style.animation = 'float-message 3s ease-out forwards';
                messageEl.style.pointerEvents = 'none';
                document.body.appendChild(messageEl);

                const style = document.createElement('style');
                style.textContent = `
                    @keyframes float-message {
                        0% { opacity: 0; transform: translateY(50px) scale(0.5); }
                        50% { opacity: 1; transform: translateY(0) scale(1.2); }
                        100% { opacity: 0; transform: translateY(-50px) scale(0.8); }
                    }
                `;
                document.head.appendChild(style);

                setTimeout(() => {
                    if (messageEl.parentNode) {
                        messageEl.parentNode.removeChild(messageEl);
                    }
                    if (style.parentNode) {
                        style.parentNode.removeChild(style);
                    }
                }, 3000);
            }, index * 800);
        });
    }

    triggerCelebration() {
        // Additional celebration when celebrate button is clicked
        this.createConfetti();
        this.createMoreHearts();
        
        // Vibrate the screen slightly
        document.body.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);

        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            if (style.parentNode) {
                style.parentNode.removeChild(style);
            }
        }, 600);
    }

    resetEffects() {
        // Reset background
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)';
        
        // Remove any temporary elements
        document.querySelectorAll('[style*="position: fixed"]').forEach(el => {
            if (el.parentNode && !el.classList.contains('hearts-container') && !el.classList.contains('stars') && !el.id) {
                el.parentNode.removeChild(el);
            }
        });
    }

    setupSpecialEffects() {
        // Add hover effects to buttons
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = btn.style.transform || '' + ' scale(1.05)';
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = btn.style.transform.replace('scale(1.05)', '');
            });
        });

        // Add click ripple effect
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.pointerEvents = 'none';
                
                btn.style.position = 'relative';
                btn.style.overflow = 'hidden';
                btn.appendChild(ripple);
                
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes ripple {
                        to {
                            transform: scale(2);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
                
                setTimeout(() => {
                    ripple.remove();
                    style.remove();
                }, 600);
            });
        });
    }

    // Sound effects (using Web Audio API for simple tones)
    playTransitionSound() {
        this.playTone(800, 0.1, 'sine');
    }

    playSuccessSound() {
        // Play a happy melody
        const notes = [523, 659, 784, 1047]; // C, E, G, C (major chord)
        notes.forEach((freq, index) => {
            setTimeout(() => {
                this.playTone(freq, 0.2, 'sine');
            }, index * 150);
        });
    }

    playThinkingSound() {
        this.playTone(400, 0.3, 'sine');
    }

    playTone(frequency, duration, waveType = 'sine') {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            oscillator.type = waveType;
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + duration);
        } catch (e) {
            console.log('Audio not supported:', e);
        }
    }
}

// Initialize the proposal journey when page loads
document.addEventListener('DOMContentLoaded', () => {
    new ProposalJourney();
    
    // Add some initial magic
    console.log('💕 Welcome to your magical proposal journey! 💕');
    
    // Add a subtle breathing effect to the page
    setTimeout(() => {
        document.body.style.animation = 'breathe 4s ease-in-out infinite';
        const style = document.createElement('style');
        style.textContent = `
            @keyframes breathe {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.02); }
            }
        `;
        document.head.appendChild(style);
    }, 1000);
});

// Add some Easter eggs
let clickCount = 0;
document.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 50) {
        alert('🎉 Wow! Someone is really excited! 🎉');
    }
});

// Konami code Easter egg (up, up, down, down, left, right, left, right, B, A)
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Secret message
        const secret = document.createElement('div');
        secret.innerHTML = '🎊 SECRET UNLOCKED: You both deserve all the happiness in the world! 🎊';
        secret.style.position = 'fixed';
        secret.style.top = '50%';
        secret.style.left = '50%';
        secret.style.transform = 'translate(-50%, -50%)';
        secret.style.background = 'rgba(255, 255, 255, 0.95)';
        secret.style.padding = '20px';
        secret.style.borderRadius = '10px';
        secret.style.fontSize = '1.2rem';
        secret.style.fontWeight = 'bold';
        secret.style.zIndex = '10000';
        secret.style.animation = 'fadeInOut 5s ease-in-out';
        document.body.appendChild(secret);
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInOut {
                0%, 100% { opacity: 0; }
                50% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            if (secret.parentNode) secret.parentNode.removeChild(secret);
            if (style.parentNode) style.parentNode.removeChild(style);
        }, 5000);
        
        konamiCode = [];
    }
});
