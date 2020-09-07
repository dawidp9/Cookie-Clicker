import { observable, action, reaction } from 'mobx';

class UserStore {
    @observable allPoints: number = 0;
    @observable multiplier: number = 1;
    @observable currentLevel: number = 1;
    @observable nextLevelRequirePoints: number = 10;

    constructor() {
        reaction(
            () => this.allPoints,
            (points) => {
                if (points >= this.nextLevelRequirePoints) {
                    this.setNextLevel();
                }
            },
        );
    }

    @action addPointByClick = () => {
        this.allPoints = this.allPoints + this.multiplier;
    };

    @action addPoints = (points: number) => {
        this.allPoints = this.allPoints + points;
    };

    @action subtractPoints = (points: number) => {
        this.allPoints = this.allPoints - points;
    };

    @action setPointsMultiplier = (multiplier: number) => {
        this.multiplier = multiplier;
    };

    @action setNextLevel = () => {
        this.currentLevel = this.currentLevel + 1;
        this.nextLevelRequirePoints = this.nextLevelRequirePoints * 2;
    };
}

export default new UserStore();
