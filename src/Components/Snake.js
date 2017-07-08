/**
 * Created by Дмитрий on 07.07.2017.
 */
import {SNAKE_MOVE, MOVE_INTERVAL, TABLE_PARAMS, SNAKE_COLOR} from "../Settings";
import {Point} from './Point';

export class Snake {

    constructor() {
        this._enableDirectionEdit = true;
        this._moveTo      = SNAKE_MOVE.BOTTOM;
        this._onMoveSnake = null;
        
        this.timeout      = null;
        this.snake        = [];
        this.snakeHead    = null;
        this.$snake       = document.querySelector('#snake');
        
        this._initSnake();
    }

    /**
     * Устанавливает направление движения змеи
     * @param moveTo
     */
    set moveTo(moveTo) {
        if(this._enableDirectionEdit) {
            this._moveTo = moveTo;
            this._enableDirectionEdit = false;
        }
    }

    /**
     * Инициализация объекта змеи
     * @private
     */
    _initSnake() {
        this.setSnakeDot(TABLE_PARAMS.WIDTH/2, TABLE_PARAMS.HEIGHT/2);
        this.setSnakeDot(TABLE_PARAMS.WIDTH/2, TABLE_PARAMS.HEIGHT/2+1);
        this.setSnakeDot(TABLE_PARAMS.WIDTH/2, TABLE_PARAMS.HEIGHT/2+2);
        this.renderSnake();
    }

    /**
     * Устанавливает точку в объект змеи
     * @param x - Координата по оси Х
     * @param y - координата по оси Y
     */
    setSnakeDot(x = 0, y = 0) {
        let dot = new Point(x, y);
        this.snake.push(dot);
        this.snakeHead = dot;
    }

    /**
     * Начать движение змеи
     */
    startMove() {
        this.timeout = setTimeout(() => {
            this.startMove();
            this.moveSnake();
        }, MOVE_INTERVAL/this.snake.length);
    }

    /**
     * Остановить движение змеи
     */
    stopMove() {
        clearTimeout(this.timeout);
    }

    /**
     * Сдвигает положение змеи на одну точку
     */
    moveSnake() {
        this.snake.splice(0, 1);
        switch(this._moveTo) {
            case SNAKE_MOVE.TOP    : this.setSnakeDot(this.snakeHead.x, this.snakeHead.y-1); break;
            case SNAKE_MOVE.LEFT   : this.setSnakeDot(this.snakeHead.x-1, this.snakeHead.y); break;
            case SNAKE_MOVE.RIGHT  : this.setSnakeDot(this.snakeHead.x+1, this.snakeHead.y); break;
            case SNAKE_MOVE.BOTTOM : this.setSnakeDot(this.snakeHead.x, this.snakeHead.y+1); break;
        }
        this._enableDirectionEdit = true;
        if(this._onMoveSnake) this._onMoveSnake(this.snakeHead, this.snake);
    }

    removeSnake() {
        this.$snake.innerHTML = '';
    }

    /**
     * Прорисовка змеи на холсте
     */
    renderSnake() {
        this.removeSnake();
        this.snake.map(dot => {
            this.$snake.appendChild(dot.$element);
        });
    }

    /**
     * Подписывает на изменение положения змеи
     * @param callback
     */
    set onMoveSnake(callback) {
        this._onMoveSnake = callback;
    }

    /**
     * Отдает true если змея движется по горизонтали
     * @returns {boolean}
     */
    get isMoveHorisontal() {
        return (this._moveTo === SNAKE_MOVE.LEFT || this._moveTo === SNAKE_MOVE.RIGHT);
    }

    /**
     * Отдает true если змея движется по вертикали
     * @returns {boolean}
     */
    get isMoveVertical() {
        return (this._moveTo === SNAKE_MOVE.TOP || this._moveTo === SNAKE_MOVE.BOTTOM);
    }

}
