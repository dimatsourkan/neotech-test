/**
 * Created by Дмитрий on 07.07.2017.
 */
    import {POINT_SIZE} from "../Settings";

export class Point {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.$element = document.createElement('div');
        this._initSnakeDotStyles();
    }

    _initSnakeDotStyles() {
        this.$element.style.width      = POINT_SIZE+'px';
        this.$element.style.height     = POINT_SIZE+'px';
        this.$element.style.left       = this.x*POINT_SIZE+'px';
        this.$element.style.top        = this.y*POINT_SIZE+'px';
        this.$element.style.background = this.background;
    }

}