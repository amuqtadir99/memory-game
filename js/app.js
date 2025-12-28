// ===== Memory Master Game - Complete Rebuild =====

class MemoryGame {
    constructor() {
        // Game configuration
        this.config = {
            easy: { pairs: 4, starThresholds: { 3: 8, 2: 12, 1: Infinity } },
            medium: { pairs: 8, starThresholds: { 3: 16, 2: 24, 1: Infinity } },
            hard: { pairs: 12, starThresholds: { 3: 24, 2: 36, 1: Infinity } }
        };

        // Card symbols
        this.symbols = ['🎮', '🎯', '🎨', '🎭', '🎪', '🎸', '🎹', '🎺', '🎻', '🎬', '🎤', '🎧', '🎲', '🎰', '🎳', '⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏉', '🎱', '🏓'];

        // Game state
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.gameActive = false;
        this.isProcessing = false;

        // Timer
        this.timer = null;
        this.startTime = null;
        this.elapsedTime = 0;

        // Settings
        this.soundEnabled = true;
        this.theme = 'light';

        // DOM elements
        this.elements = {
            gameBoard: document.getElementById('gameBoard'),
            difficulty: document.getElementById('difficulty'),
            newGameBtn: document.getElementById('newGameBtn'),
            soundBtn: document.getElementById('soundBtn'),
            themeBtn: document.getElementById('themeBtn'),
            playAgainBtn: document.getElementById('playAgainBtn'),

            // Stats display
            starsDisplay: document.getElementById('starsDisplay'),
            movesDisplay: document.getElementById('movesDisplay'),
            timeDisplay: document.getElementById('timeDisplay'),
            bestTimeDisplay: document.getElementById('bestTimeDisplay'),

            // Statistics
            gamesPlayed: document.getElementById('gamesPlayed'),
            gamesWon: document.getElementById('gamesWon'),
            winRate: document.getElementById('winRate'),

            // Victory modal
            victoryModal: document.getElementById('victoryModal'),
            victoryTime: document.getElementById('victoryTime'),
            victoryMoves: document.getElementById('victoryMoves'),
            victoryStars: document.getElementById('victoryStars'),
            newRecordBadge: document.getElementById('newRecordBadge')
        };

        this.init();
    }

    init() {
        this.loadSettings();
        this.loadStatistics();
        this.setupEventListeners();
        this.startNewGame();
    }

    setupEventListeners() {
        this.elements.newGameBtn.addEventListener('click', () => this.startNewGame());
        this.elements.difficulty.addEventListener('change', () => this.startNewGame());
        this.elements.soundBtn.addEventListener('click', () => this.toggleSound());
        this.elements.themeBtn.addEventListener('click', () => this.toggleTheme());
        this.elements.playAgainBtn.addEventListener('click', () => {
            this.closeModal();
            this.startNewGame();
        });
    }

    startNewGame() {
        // Reset game state
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = 0;
        this.moves = 0;
        this.gameActive = true;
        this.isProcessing = false;

        this.stopTimer();
        this.elapsedTime = 0;

        // Update UI
        this.updateStats();
        this.loadBestTime();

        // Generate and render cards
        const difficulty = this.elements.difficulty.value;
        this.generateCards(difficulty);
        this.renderBoard(difficulty);
    }

    generateCards(difficulty) {
        const { pairs } = this.config[difficulty];
        const selectedSymbols = this.symbols.slice(0, pairs);

        // Create pairs and shuffle
        const cardPairs = [...selectedSymbols, ...selectedSymbols];
        this.cards = this.shuffle(cardPairs).map((symbol, index) => ({
            id: index,
            symbol,
            isFlipped: false,
            isMatched: false
        }));
    }

    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    renderBoard(difficulty) {
        this.elements.gameBoard.innerHTML = '';
        this.elements.gameBoard.className = `game-board ${difficulty}`;

        this.cards.forEach(card => {
            const cardElement = this.createCard(card);
            this.elements.gameBoard.appendChild(cardElement);
        });
    }

    createCard(card) {
        const cardEl = document.createElement('div');
        cardEl.className = 'card';
        cardEl.dataset.id = card.id;

        cardEl.innerHTML = `
            <div class="card-inner">
                <div class="card-face card-back"></div>
                <div class="card-face card-front">${card.symbol}</div>
            </div>
        `;

        cardEl.addEventListener('click', () => this.handleCardClick(card.id));
        return cardEl;
    }

    handleCardClick(cardId) {
        if (!this.gameActive || this.isProcessing) return;

        const card = this.cards[cardId];
        if (card.isFlipped || card.isMatched) return;

        // Start timer on first move
        if (this.moves === 0) {
            this.startTimer();
        }

        // Flip card
        this.flipCard(cardId, true);
        this.flippedCards.push(cardId);

        // Check for match when 2 cards are flipped
        if (this.flippedCards.length === 2) {
            this.isProcessing = true;
            this.moves++;
            this.updateStats();

            setTimeout(() => this.checkMatch(), 800);
        }
    }

    flipCard(cardId, isFlipped) {
        const card = this.cards[cardId];
        card.isFlipped = isFlipped;

        const cardEl = document.querySelector(`[data-id="${cardId}"]`);
        if (isFlipped) {
            cardEl.classList.add('flipped');
            this.playSound('flip');
        } else {
            cardEl.classList.remove('flipped');
        }
    }

    checkMatch() {
        const [firstId, secondId] = this.flippedCards;
        const firstCard = this.cards[firstId];
        const secondCard = this.cards[secondId];

        if (firstCard.symbol === secondCard.symbol) {
            // Match!
            firstCard.isMatched = true;
            secondCard.isMatched = true;

            const firstEl = document.querySelector(`[data-id="${firstId}"]`);
            const secondEl = document.querySelector(`[data-id="${secondId}"]`);
            firstEl.classList.add('matched');
            secondEl.classList.add('matched');

            this.matchedPairs++;
            this.playSound('match');

            // Check for win
            const difficulty = this.elements.difficulty.value;
            if (this.matchedPairs === this.config[difficulty].pairs) {
                setTimeout(() => this.handleWin(), 500);
            }
        } else {
            // No match
            const firstEl = document.querySelector(`[data-id="${firstId}"]`);
            const secondEl = document.querySelector(`[data-id="${secondId}"]`);

            firstEl.classList.add('shake');
            secondEl.classList.add('shake');

            this.playSound('wrong');

            setTimeout(() => {
                this.flipCard(firstId, false);
                this.flipCard(secondId, false);
                firstEl.classList.remove('shake');
                secondEl.classList.remove('shake');
            }, 600);
        }

        this.flippedCards = [];
        this.isProcessing = false;
    }

    handleWin() {
        this.gameActive = false;
        this.stopTimer();
        this.playSound('win');

        const stars = this.getStarCount();
        const isNewRecord = this.checkAndSaveBestTime();

        this.updateGameStatistics(true);
        this.showVictoryModal(stars, isNewRecord);
    }

    showVictoryModal(stars, isNewRecord) {
        this.elements.victoryTime.textContent = this.formatTime(this.elapsedTime);
        this.elements.victoryMoves.textContent = this.moves;
        this.elements.victoryStars.innerHTML = '⭐'.repeat(stars);

        this.elements.newRecordBadge.style.display = isNewRecord ? 'block' : 'none';
        this.elements.victoryModal.classList.add('active');
    }

    closeModal() {
        this.elements.victoryModal.classList.remove('active');
    }

    // ===== Timer =====
    startTimer() {
        this.startTime = Date.now();
        this.timer = setInterval(() => {
            this.elapsedTime = Date.now() - this.startTime;
            this.elements.timeDisplay.textContent = this.formatTime(this.elapsedTime);
        }, 100);
    }

    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // ===== Stats =====
    updateStats() {
        this.elements.movesDisplay.textContent = this.moves;
        this.updateStars();
    }

    getStarCount() {
        const difficulty = this.elements.difficulty.value;
        const thresholds = this.config[difficulty].starThresholds;

        if (this.moves <= thresholds[3]) return 3;
        if (this.moves <= thresholds[2]) return 2;
        return 1;
    }

    updateStars() {
        const stars = this.getStarCount();
        const starElements = this.elements.starsDisplay.querySelectorAll('.star');

        starElements.forEach((star, index) => {
            star.classList.toggle('active', index < stars);
        });
    }

    checkAndSaveBestTime() {
        const difficulty = this.elements.difficulty.value;
        const key = `bestTime_${difficulty}`;
        const currentBest = localStorage.getItem(key);

        if (!currentBest || this.elapsedTime < parseInt(currentBest)) {
            localStorage.setItem(key, this.elapsedTime);
            this.loadBestTime();
            return true;
        }
        return false;
    }

    loadBestTime() {
        const difficulty = this.elements.difficulty.value;
        const key = `bestTime_${difficulty}`;
        const bestTime = localStorage.getItem(key);

        this.elements.bestTimeDisplay.textContent = bestTime ?
            this.formatTime(parseInt(bestTime)) : '--:--';
    }

    // ===== Statistics =====
    updateGameStatistics(won) {
        const stats = this.getStatistics();
        stats.gamesPlayed++;
        if (won) stats.gamesWon++;
        stats.winRate = Math.round((stats.gamesWon / stats.gamesPlayed) * 100);

        localStorage.setItem('gameStatistics', JSON.stringify(stats));
        this.displayStatistics(stats);
    }

    getStatistics() {
        const defaultStats = { gamesPlayed: 0, gamesWon: 0, winRate: 0 };
        const stored = localStorage.getItem('gameStatistics');
        return stored ? JSON.parse(stored) : defaultStats;
    }

    loadStatistics() {
        const stats = this.getStatistics();
        this.displayStatistics(stats);
    }

    displayStatistics(stats) {
        this.elements.gamesPlayed.textContent = stats.gamesPlayed;
        this.elements.gamesWon.textContent = stats.gamesWon;
        this.elements.winRate.textContent = `${stats.winRate}%`;
    }

    // ===== Sound =====
    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        const icon = this.elements.soundBtn.querySelector('.icon');
        icon.textContent = this.soundEnabled ? '🔊' : '🔇';
        localStorage.setItem('soundEnabled', this.soundEnabled);
    }

    playSound(type) {
        if (!this.soundEnabled) return;

        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        const sounds = {
            flip: { freq: 400, duration: 0.1, volume: 0.1 },
            match: { freq: 600, duration: 0.2, volume: 0.15 },
            wrong: { freq: 200, duration: 0.15, volume: 0.1 },
            win: { freq: 800, duration: 0.3, volume: 0.2 }
        };

        const sound = sounds[type];
        if (sound) {
            oscillator.frequency.value = sound.freq;
            gainNode.gain.value = sound.volume;
            oscillator.start();
            oscillator.stop(audioContext.currentTime + sound.duration);
        }
    }

    // ===== Theme =====
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.theme);

        const icon = this.elements.themeBtn.querySelector('.icon');
        icon.textContent = this.theme === 'dark' ? '☀️' : '🌙';

        localStorage.setItem('theme', this.theme);
    }

    // ===== Settings =====
    loadSettings() {
        // Load theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.theme = savedTheme;
        document.documentElement.setAttribute('data-theme', savedTheme);
        const themeIcon = this.elements.themeBtn.querySelector('.icon');
        themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

        // Load sound
        const savedSound = localStorage.getItem('soundEnabled');
        this.soundEnabled = savedSound !== null ? savedSound === 'true' : true;
        const soundIcon = this.elements.soundBtn.querySelector('.icon');
        soundIcon.textContent = this.soundEnabled ? '🔊' : '🔇';
    }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new MemoryGame();
});
