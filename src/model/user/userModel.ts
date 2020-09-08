import { types } from 'mobx-state-tree';

interface IUserModel {
    allPoints: number;
    multiplier: number;
    currentLevel: number;
    nextLevelRequirePoints: number;
}

const UserModel = types
    .model('UserModel', {
        allPoints: 0,
        multiplier: 1,
        currentLevel: 1,
        nextLevelRequirePoints: 10,
    })
    .actions((self: IUserModel) => ({
        addPointByClick() {
            self.allPoints = self.allPoints + self.multiplier;
        },
        addPoints(points: number) {
            self.allPoints = self.allPoints + points;
        },
        subtractPoints(points: number) {
            self.allPoints = self.allPoints - points;
        },
        setPointsMultiplier(multiplier: number) {
            self.multiplier = multiplier;
        },
        setNextLevel() {
            self.currentLevel = self.currentLevel + 1;
            self.nextLevelRequirePoints = self.nextLevelRequirePoints * 2;
        },
    }));

export default UserModel.create();
