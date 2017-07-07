/**
 * Created by Дмитрий on 07.07.2017.
 */
import {TABLE_PARAMS, POINT_SIZE} from "../Settings";


export class Table {

    constructor() {
        this.table = document.querySelector('#table');
        this._initTableStyles();
    }

    _initTableStyles() {
        this.table.style.position = 'relative';
        this.table.style.width    = TABLE_PARAMS.WIDTH*POINT_SIZE+'px';
        this.table.style.height   = TABLE_PARAMS.HEIGHT*POINT_SIZE+'px';
    }

}