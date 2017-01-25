import {observable, extendObservable, computed} from 'mobx';

export default class RootState {

    constructor() {
        extendObservable(this, {
            timer: 0,
            count: computed(() => {
                return this.timer * 2
            })
        });

        // setInterval(() => {
        //     this.timer++;
        // }, 1000);
    }

    increase(){
        this.timer++;
    }

    decrease(){
        this.timer--;
    }

    reset() {
        this.timer = 0;
    }

}