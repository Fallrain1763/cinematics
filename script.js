var isLeveloneLock = true;
var isLeveltwoLock = true;
var isLevelthreeLock = true;

class start extends Phaser.Scene {
    constructor() {
        super('start');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#FFFFFF');
        this.add.text(640, 240, "Cinematics", { fontSize: 64, color: '#000000' }).setOrigin(0.5);
        this.add.text(640, 480, "Start Screen\nTap the screen to continue", { fontSize: 48, color: '#000000' }).setOrigin(0.5);

        this.input.on('pointerup', () => {
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('Title'));
        });
    }
    update() {

    }
}

class Title extends Phaser.Scene {
    constructor() {
        super('Title');
    }
    preload() {
        this.load.path = './assets/Title/';
        this.load.image('bg','/Background.png');
		this.load.image('t','/Text.png');
    }
    create() {
        this.add.image(480, 360, 'bg');

        let t1 = this.add.image(560, 300, 't');
        t1.alpha = 0;

        this.tweens.chain({
            targets: t1,
            tweens: [
                {
                    alpha: 1,
                    duration: 1000,
                    ease: 'Linear'
                },
                {
                    y: '-=100',
                    duration: 1000,
                    ease: 'Linear',
                    onComplete: () => {
                        let tapText =  this.add.text(560, 480, "Tap the screen to Start",  { 
                            fontSize: 48, 
                            color: '#000000' 
                        });
                        tapText.setOrigin(0.5);
                        tapText.alpha = 0;
                        
                        this.tweens.add({
                            targets: tapText,
                            alpha: 1,
                            duration: 1000,
                            ease: 'Linear',
                            yoyo: true,
                            repeat: -1
                        });
                    }
                }
            ]
        });

       
        
        this.input.on('pointerup', () => {
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('LS'));
        });
    }
    update() {

    }
}

class LS extends Phaser.Scene {
	constructor() {
			super('LS');
	}
	preload() {
		this.load.path = './assets/LevelUI/';
		this.load.image('l0u','/Level0_unlocked.png');
		this.load.image('l1l','/Level1_locked.png');
		this.load.image('l1u','/Level1_unlocked.png');
		this.load.image('l2l','/Level2_locked.png');
		this.load.image('l2u','/Level2_unlocked.png');
		this.load.image('l3l','/Level3_locked.png');
		this.load.image('l3u','/Level3_unlocked.png');
	}

	create() {
        this.cameras.main.setBackgroundColor('#FFFFFF');
		this.add.image(180, 360, 'l0u')
        .setInteractive()
        .on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('L0'));
		});

		if(isLeveloneLock) {
			this.add.image(480, 360, 'l1l')
        }
		else {
            this.add.image(480, 360, 'l1u')
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fade(1000, 0,0,0);
                this.time.delayedCall(1000, () => this.scene.start('L1'));
            });
        }

		if(isLeveltwoLock) {
			this.add.image(780, 360, 'l2l')
        }
		else {
            this.add.image(780, 360, 'l2u')
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fade(1000, 0,0,0);
                this.time.delayedCall(1000, () => this.scene.start('L2'));
            });
        }

		if(isLevelthreeLock) {
			this.add.image(1080, 360, 'l3l')
        }
		else {
            this.add.image(1080, 360, 'l3u')
            .setInteractive()
            .on('pointerdown', () => {
                this.cameras.main.fade(1000, 0,0,0);
                this.time.delayedCall(1000, () => this.scene.start('L3'));
            });
        }
        
	}
	update() {
        
	}
}

class L0 extends Phaser.Scene {
    constructor() {
        super('L0');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#FFFFFF');
        this.add.text(640, 240, "Level 0", { fontSize: 64, color: '#000000' }).setOrigin(0.5);
        this.add.text(640, 480, "Tap the screen to return", { fontSize: 48, color: '#000000' }).setOrigin(0.5);
        isLeveloneLock = false;
        this.input.on('pointerup', () => {
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('LS'));
        });
    }
    update() {

    }
}

class L1 extends Phaser.Scene {
    constructor() {
        super('L1');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#FFFFFF');
        this.add.text(640, 240, "Level 1", { fontSize: 64, color: '#000000' }).setOrigin(0.5);
        this.add.text(640, 480, "Tap the screen to return", { fontSize: 48, color: '#000000' }).setOrigin(0.5);
        isLeveltwoLock = false;
        this.input.on('pointerup', () => {
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('LS'));
        });
    }
    update() {

    }
}

class L2 extends Phaser.Scene {
    constructor() {
        super('L2');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#FFFFFF');
        this.add.text(640, 240, "Level 2", { fontSize: 64, color: '#000000' }).setOrigin(0.5);
        this.add.text(640, 480, "Tap the screen to return", { fontSize: 48, color: '#000000' }).setOrigin(0.5);
        isLevelthreeLock = false;
        this.input.on('pointerup', () => {
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('LS'));
        });
    }
    update() {

    }
}

class L3 extends Phaser.Scene {
    constructor() {
        super('L3');
    }
    preload() {
        this.load.path = './assets/';
    }
    create() {
        this.cameras.main.setBackgroundColor('#FFFFFF');
        this.add.text(640, 240, "Level 3", { fontSize: 64, color: '#000000' }).setOrigin(0.5);
        this.add.text(640, 480, "Tap the screen to return", { fontSize: 48, color: '#000000' }).setOrigin(0.5);
        isLeveloneLock = false;
        this.input.on('pointerup', () => {
            this.cameras.main.fade(1000, 0,0,0);
			this.time.delayedCall(1000, () => this.scene.start('LS'));
        });
    }
    update() {

    }
}




let config = {
		type: Phaser.WEBGL,
		width: 1280,
		height: 720,
		backgroundColor: '#ffffff',
		scene: [start,Title, LS, L0, L1, L2, L3]
}

let game = new Phaser.Game(config);