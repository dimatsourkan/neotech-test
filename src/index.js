/**
 * Created by Дмитрий on 07.07.2017.
 */
import {Table} from "./Components/Table";
import {Snake} from "./Components/Snake";
import {KEYS, SNAKE_MOVE, TABLE_PARAMS} from "./Settings";
import {Food} from "./Components/Food";



class App {

    constructor() {
        this.foodContainer = document.querySelector('#food-container');
        this.splash  = document.querySelector('#splashscreen');
        this.splash2 = document.querySelector('#gameOver');
        this.score1 = document.querySelector('#score-1');
        this.score2 = document.querySelector('#score-2');

        this.Table = new Table();
        this.Snake = null;
        this.Food  = null;
        this.score = 0;

        this._initNavigation();
        this._events();
    }

    _events() {
        document.addEventListener('keydown', e => {
            switch(e.keyCode || e.which) {
                case KEYS.ENTER : this.startGame(); break;
                case KEYS.ESC   : this.stopGame(); break;
            }
        })
    }

    /**
     * Стартует игру
     */
    startGame() {
        this.stopGame();
        this.hideSplash();
        this.hideSplash2();
        this.cleareScore();

        this.Snake = new Snake();
        this.snakeEvents();
        this.Snake.startMove();

        this.setFood();
    }

    /**
     * Останавливает игру
     */
    stopGame() {

        this.showSplash2();
        if(this.Snake) {
            this.Snake.stopMove();
            this.Snake.removeSnake();
            this.Snake = null;
        }

        if(this.Food) {
            this.clearFoodContainer();
            this.Food  = null;
        }

    }

    /**
     * Инициализация событий змеи
     */
    snakeEvents() {
        this.Snake.onMoveSnake = (snakeHead, snake) => {
            this.checkCollisions(snakeHead, snake);
        };
    }

    /**
     * Устанавливает добычу на холст
     */
    setFood() {
        this.clearFoodContainer();

        let foodPos = this.getFoodPosition();
        this.Food   = new Food(foodPos.x, foodPos.y);

        /**
         * Если полученая точка на ходится на координатах точки змеи то получаем другую
         */
        if(this.checkSnakeCollision(this.Food, this.Snake.snake)) {
            this.setFood();
        }

        this.foodContainer.appendChild(this.Food.$element)
    }

    /**
     * Проверка всех коллизий змеи
     * @param snakeHead - голова змеи
     * @param snake - точки змеи
     * @returns {*}
     */
    checkCollisions(snakeHead, snake) {

        /**
         * Проверка на столкновения змеи с рамками холста и на замкнутый круг
         */
        if(this.checkSnakeCollision(snakeHead, snake) || this.checkSnakeTableCollision(snakeHead)) {
            return this.stopGame();
        }

        /**
         * Проверка на столкновение змеи с едой
         */
        if(this.checkSnakeCollision(this.Food, snake)) {
            this.Snake.setSnakeDot(this.Food.x, this.Food.y);
            this.increaseScore();
            this.setFood();
        }

        this.Snake.renderSnake();
    }

    /**
     * Проверка на столкновения змеи с рамками холста
     * @param snakeHead - голова змеи
     */
    checkSnakeTableCollision(snakeHead) {
        if(!this.Snake) return false;

        if(
            snakeHead.x < 0 ||
            snakeHead.y < 0 ||
            snakeHead.x >= TABLE_PARAMS.WIDTH ||
            snakeHead.y >= TABLE_PARAMS.HEIGHT)
        {
            return true;
        }
    }

    /**
     * Проверка на столкновения какой либо точки с змеёй
     * @param point - точка
     * @param snake - точки змеи
     * @returns {boolean}
     */
    checkSnakeCollision(point, snake) {
        if(!point || !snake) return false;

        let collision = false;
        for(let sPoint of snake) {
            if(point.$element !== sPoint.$element) {
                if(sPoint.x === point.x && sPoint.y === point.y) {
                    collision = true;
                }
            }
        }
        return collision;
    }

    /**
     * Отдает рандомные точки для расположения добычи
     * @returns {{x: number, y: number}}
     */
    getFoodPosition(snake) {
        return {
            x : Math.floor(Math.random() * TABLE_PARAMS.WIDTH-1)+1,
            y : Math.floor(Math.random() * TABLE_PARAMS.HEIGHT-1)+1
        }
    }

    /**
     * Инициализация управления
     * @private
     */
    _initNavigation() {
        document.addEventListener('keydown', e => {
            if(this.Snake) {
                switch(e.keyCode || e.which) {
                    case KEYS.UP    :
                        if(this.Snake.isMoveHorisontal) {
                            this.Snake.moveTo = SNAKE_MOVE.TOP;
                        }
                        break;
                    case KEYS.LEFT  :
                        if(this.Snake.isMoveVertical) {
                            this.Snake.moveTo = SNAKE_MOVE.LEFT;
                        }
                        break;
                    case KEYS.RIGHT :
                        if(this.Snake.isMoveVertical) {
                            this.Snake.moveTo = SNAKE_MOVE.RIGHT;
                        }
                        break;
                    case KEYS.DOWN  :
                        if(this.Snake.isMoveHorisontal) {
                            this.Snake.moveTo = SNAKE_MOVE.BOTTOM;
                        }
                        break;
                }
            }
        })
    }

    /**
     * Чистит контейнер с добычей
     */
    clearFoodContainer() {
        this.foodContainer.innerHTML = '';
    }

    hideSplash() {
        this.splash.style.display = 'none';
    }

    showSplash() {
        this.splash2.style.display = '';
    }

    showSplash2() {
        this.splash2.style.display = 'flex';
    }

    hideSplash2() {
        this.splash2.style.display = '';
    }

    increaseScore() {
        this.score++;
        this.renderScore();
    }

    cleareScore() {
        this.score = 0;
        this.score1.innerHTML = 0;
        this.score2.innerHTML = 0;
    }

    renderScore() {
        this.score1.innerHTML = this.score;
        this.score2.innerHTML = this.score;
    }

}

new App();