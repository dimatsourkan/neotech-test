(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Food = undefined;

var _Point2 = require("./Point");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Дмитрий on 07.07.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Food = exports.Food = function (_Point) {
    _inherits(Food, _Point);

    function Food(x, y) {
        _classCallCheck(this, Food);

        return _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).call(this, x, y));
    }

    return Food;
}(_Point2.Point);

},{"./Point":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Point = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Дмитрий on 07.07.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Settings = require('../Settings');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = exports.Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
        this.$element = document.createElement('div');
        this._initSnakeDotStyles();
    }

    _createClass(Point, [{
        key: '_initSnakeDotStyles',
        value: function _initSnakeDotStyles() {
            this.$element.style.width = _Settings.POINT_SIZE + 'px';
            this.$element.style.height = _Settings.POINT_SIZE + 'px';
            this.$element.style.left = this.x * _Settings.POINT_SIZE + 'px';
            this.$element.style.top = this.y * _Settings.POINT_SIZE + 'px';
            this.$element.style.background = this.background;
        }
    }]);

    return Point;
}();

},{"../Settings":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Snake = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Дмитрий on 07.07.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Settings = require('../Settings');

var _Point = require('./Point');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Snake = exports.Snake = function () {
    function Snake() {
        _classCallCheck(this, Snake);

        this._enableDirectionEdit = true;
        this.timeout = null;
        this.snake = [];
        this._moveTo = _Settings.SNAKE_MOVE.BOTTOM;
        this.snakeHead = null;
        this.$snake = document.querySelector('#snake');
        this._onMoveSnake = null;
        this._initSnake();
    }

    /**
     * Устанавливает направление движения змеи
     * @param moveTo
     */


    _createClass(Snake, [{
        key: '_initSnake',


        /**
         * Инициализация объекта змеи
         * @private
         */
        value: function _initSnake() {
            this.setSnakeDot(_Settings.TABLE_PARAMS.WIDTH / 2, _Settings.TABLE_PARAMS.HEIGHT / 2);
            this.setSnakeDot(_Settings.TABLE_PARAMS.WIDTH / 2, _Settings.TABLE_PARAMS.HEIGHT / 2 + 1);
            this.setSnakeDot(_Settings.TABLE_PARAMS.WIDTH / 2, _Settings.TABLE_PARAMS.HEIGHT / 2 + 2);
            this.renderSnake();
        }

        /**
         * Устанавливает точку в объект змеи
         * @param x - Координата по оси Х
         * @param y - координата по оси Y
         */

    }, {
        key: 'setSnakeDot',
        value: function setSnakeDot() {
            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            var dot = new _Point.Point(x, y);
            this.snake.push(dot);
            this.snakeHead = dot;
        }

        /**
         * Начать движение змеи
         */

    }, {
        key: 'startMove',
        value: function startMove() {
            var _this = this;

            this.timeout = setTimeout(function () {
                _this.startMove();
                _this.moveSnake();
            }, _Settings.MOVE_INTERVAL / this.snake.length);
        }

        /**
         * Остановить движение змеи
         */

    }, {
        key: 'stopMove',
        value: function stopMove() {
            clearTimeout(this.timeout);
        }

        /**
         * Сдвигает положение змеи на одну точку
         */

    }, {
        key: 'moveSnake',
        value: function moveSnake() {
            this.snake.splice(0, 1);
            switch (this._moveTo) {
                case _Settings.SNAKE_MOVE.TOP:
                    this.setSnakeDot(this.snakeHead.x, this.snakeHead.y - 1);break;
                case _Settings.SNAKE_MOVE.LEFT:
                    this.setSnakeDot(this.snakeHead.x - 1, this.snakeHead.y);break;
                case _Settings.SNAKE_MOVE.RIGHT:
                    this.setSnakeDot(this.snakeHead.x + 1, this.snakeHead.y);break;
                case _Settings.SNAKE_MOVE.BOTTOM:
                    this.setSnakeDot(this.snakeHead.x, this.snakeHead.y + 1);break;
            }
            this._enableDirectionEdit = true;
            if (this._onMoveSnake) this._onMoveSnake(this.snakeHead, this.snake);
        }
    }, {
        key: 'removeSnake',
        value: function removeSnake() {
            this.$snake.innerHTML = '';
        }

        /**
         * Прорисовка змеи на холсте
         */

    }, {
        key: 'renderSnake',
        value: function renderSnake() {
            var _this2 = this;

            this.removeSnake();
            this.snake.map(function (dot) {
                _this2.$snake.appendChild(dot.$element);
            });
        }

        /**
         * Подписывает на изменение положения змеи
         * @param callback
         */

    }, {
        key: 'moveTo',
        set: function set(moveTo) {
            if (this._enableDirectionEdit) {
                this._moveTo = moveTo;
            }
            this._enableDirectionEdit = false;
        }
    }, {
        key: 'onMoveSnake',
        set: function set(callback) {
            this._onMoveSnake = callback;
        }

        /**
         * Отдает true если змея движется по горизонтали
         * @returns {boolean}
         */

    }, {
        key: 'isMoveHorisontal',
        get: function get() {
            return this._moveTo === _Settings.SNAKE_MOVE.LEFT || this._moveTo === _Settings.SNAKE_MOVE.RIGHT;
        }

        /**
         * Отдает true если змея движется по вертикали
         * @returns {boolean}
         */

    }, {
        key: 'isMoveVertical',
        get: function get() {
            return this._moveTo === _Settings.SNAKE_MOVE.TOP || this._moveTo === _Settings.SNAKE_MOVE.BOTTOM;
        }
    }]);

    return Snake;
}();

},{"../Settings":5,"./Point":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Table = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Дмитрий on 07.07.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Settings = require('../Settings');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Table = exports.Table = function () {
    function Table() {
        _classCallCheck(this, Table);

        this.table = document.querySelector('#table');
        this._initTableStyles();
    }

    _createClass(Table, [{
        key: '_initTableStyles',
        value: function _initTableStyles() {
            this.table.style.position = 'relative';
            this.table.style.width = _Settings.TABLE_PARAMS.WIDTH * _Settings.POINT_SIZE + 'px';
            this.table.style.height = _Settings.TABLE_PARAMS.HEIGHT * _Settings.POINT_SIZE + 'px';
        }
    }]);

    return Table;
}();

},{"../Settings":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by Дмитрий on 07.07.2017.
 */
var MOVE_INTERVAL = exports.MOVE_INTERVAL = 600;
var POINT_SIZE = exports.POINT_SIZE = 10;

var TABLE_PARAMS = exports.TABLE_PARAMS = {
    WIDTH: 30,
    HEIGHT: 30
};

var SNAKE_MOVE = exports.SNAKE_MOVE = {
    TOP: 'top',
    LEFT: 'left',
    RIGHT: 'right',
    BOTTOM: 'bottom'
};

var KEYS = exports.KEYS = {
    UP: 38,
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13,
    ESC: 27
};

},{}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Дмитрий on 07.07.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Table = require("./Components/Table");

var _Snake = require("./Components/Snake");

var _Settings = require("./Settings");

var _Food = require("./Components/Food");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.foodContainer = document.querySelector('#food-container');
        this.splash = document.querySelector('#splashscreen');
        this.splash2 = document.querySelector('#gameOver');
        this.score1 = document.querySelector('#score-1');
        this.score2 = document.querySelector('#score-2');

        this.Table = new _Table.Table();
        this.Snake = null;
        this.Food = null;
        this.score = 0;

        this._initNavigation();
        this._events();
    }

    _createClass(App, [{
        key: "_events",
        value: function _events() {
            var _this = this;

            document.addEventListener('keydown', function (e) {
                switch (e.keyCode || e.which) {
                    case _Settings.KEYS.ENTER:
                        _this.startGame();break;
                    case _Settings.KEYS.ESC:
                        _this.stopGame();break;
                }
            });
        }

        /**
         * Стартует игру
         */

    }, {
        key: "startGame",
        value: function startGame() {
            this.stopGame();
            this.hideSplash();
            this.hideSplash2();
            this.cleareScore();

            this.Snake = new _Snake.Snake();
            this.snakeEvents();
            this.Snake.startMove();

            this.setFood();
        }

        /**
         * Останавливает игру
         */

    }, {
        key: "stopGame",
        value: function stopGame() {
            this.showSplash2();
            if (this.Snake) {
                this.Snake.stopMove();
                this.Snake.removeSnake();
                this.Snake = null;
            }

            if (this.Food) {
                this.clearFoodContainer();
                this.Food = null;
            }
        }

        /**
         * Инициализация событий змеи
         */

    }, {
        key: "snakeEvents",
        value: function snakeEvents() {
            var _this2 = this;

            this.Snake.onMoveSnake = function (snakeHead, snake) {
                _this2.checkCollisions(snakeHead, snake);
            };
        }

        /**
         * Устанавливает добычу на холст
         */

    }, {
        key: "setFood",
        value: function setFood() {
            this.clearFoodContainer();

            var foodPos = this.getFoodPosition();
            this.Food = new _Food.Food(foodPos.x, foodPos.y);

            /**
             * Если полученая точка на ходится на координатах точки змеи то получаем другую
             */
            if (this.checkSnakeCollision(this.Food, this.Snake.snake)) {
                this.setFood();
            }

            this.foodContainer.appendChild(this.Food.$element);
        }

        /**
         * Проверка всех коллизий змеи
         * @param snakeHead - голова змеи
         * @param snake - точки змеи
         * @returns {*}
         */

    }, {
        key: "checkCollisions",
        value: function checkCollisions(snakeHead, snake) {

            /**
             * Проверка на столкновения змеи с рамками холста и на замкнутый круг
             */
            if (this.checkSnakeCollision(snakeHead, snake) || this.checkSnakeTableCollision(snakeHead)) {
                return this.stopGame();
            }

            /**
             * Проверка на столкновение змеи с едой
             */
            if (this.checkSnakeCollision(this.Food, snake)) {
                this.Snake.setSnakeDot(this.Food.x, this.Food.y);
                this.increaseScore();
                this.setFood();
            }

            if (this.Snake) {
                this.Snake.renderSnake();
            }
        }

        /**
         * Проверка на столкновения змеи с рамками холста
         * @param snakeHead - голова змеи
         */

    }, {
        key: "checkSnakeTableCollision",
        value: function checkSnakeTableCollision(snakeHead) {
            if (!this.Snake) return false;

            if (snakeHead.x < 0 || snakeHead.y < 0 || snakeHead.x >= _Settings.TABLE_PARAMS.WIDTH || snakeHead.y >= _Settings.TABLE_PARAMS.HEIGHT) {
                return true;
            }
        }

        /**
         * Проверка на столкновения какой либо точки с змеёй
         * @param point - точка
         * @param snake - точки змеи
         * @returns {boolean}
         */

    }, {
        key: "checkSnakeCollision",
        value: function checkSnakeCollision(point, snake) {
            if (!point || !snake) return false;

            var collision = false;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = snake[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var sPoint = _step.value;

                    if (point.$element !== sPoint.$element) {
                        if (sPoint.x === point.x && sPoint.y === point.y) {
                            collision = true;
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return collision;
        }

        /**
         * Отдает рандомные точки для расположения добычи
         * @returns {{x: number, y: number}}
         */

    }, {
        key: "getFoodPosition",
        value: function getFoodPosition(snake) {
            return {
                x: Math.floor(Math.random() * _Settings.TABLE_PARAMS.WIDTH - 1) + 1,
                y: Math.floor(Math.random() * _Settings.TABLE_PARAMS.HEIGHT - 1) + 1
            };
        }

        /**
         * Инициализация управления
         * @private
         */

    }, {
        key: "_initNavigation",
        value: function _initNavigation() {
            var _this3 = this;

            document.addEventListener('keydown', function (e) {
                if (_this3.Snake) {
                    switch (e.keyCode || e.which) {
                        case _Settings.KEYS.UP:
                            if (_this3.Snake.isMoveHorisontal) {
                                _this3.Snake.moveTo = _Settings.SNAKE_MOVE.TOP;
                            }
                            break;
                        case _Settings.KEYS.LEFT:
                            if (_this3.Snake.isMoveVertical) {
                                _this3.Snake.moveTo = _Settings.SNAKE_MOVE.LEFT;
                            }
                            break;
                        case _Settings.KEYS.RIGHT:
                            if (_this3.Snake.isMoveVertical) {
                                _this3.Snake.moveTo = _Settings.SNAKE_MOVE.RIGHT;
                            }
                            break;
                        case _Settings.KEYS.DOWN:
                            if (_this3.Snake.isMoveHorisontal) {
                                _this3.Snake.moveTo = _Settings.SNAKE_MOVE.BOTTOM;
                            }
                            break;
                    }
                }
            });
        }

        /**
         * Чистит контейнер с добычей
         */

    }, {
        key: "clearFoodContainer",
        value: function clearFoodContainer() {
            this.foodContainer.innerHTML = '';
        }
    }, {
        key: "hideSplash",
        value: function hideSplash() {
            this.splash.style.display = 'none';
        }
    }, {
        key: "showSplash",
        value: function showSplash() {
            this.splash2.style.display = '';
        }
    }, {
        key: "showSplash2",
        value: function showSplash2() {
            this.splash2.style.display = 'flex';
        }
    }, {
        key: "hideSplash2",
        value: function hideSplash2() {
            this.splash2.style.display = '';
        }
    }, {
        key: "increaseScore",
        value: function increaseScore() {
            this.score++;
            this.renderScore();
        }
    }, {
        key: "cleareScore",
        value: function cleareScore() {
            this.score = 0;
            this.score1.innerHTML = 0;
            this.score2.innerHTML = 0;
        }
    }, {
        key: "renderScore",
        value: function renderScore() {
            this.score1.innerHTML = this.score;
            this.score2.innerHTML = this.score;
        }
    }]);

    return App;
}();

new App();

},{"./Components/Food":1,"./Components/Snake":3,"./Components/Table":4,"./Settings":5}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXENvbXBvbmVudHNcXEZvb2QuanMiLCJzcmNcXENvbXBvbmVudHNcXFBvaW50LmpzIiwic3JjXFxDb21wb25lbnRzXFxTbmFrZS5qcyIsInNyY1xcQ29tcG9uZW50c1xcVGFibGUuanMiLCJzcmNcXFNldHRpbmdzLmpzIiwic3JjXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNHQTs7Ozs7OytlQUhBOzs7OztJQU1hLEksV0FBQSxJOzs7QUFFVCxrQkFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQjtBQUFBOztBQUFBLDJHQUNSLENBRFEsRUFDTCxDQURLO0FBRWpCOzs7Ozs7Ozs7Ozs7O3FqQkNWTDs7Ozs7QUFHSTs7OztJQUVTLEssV0FBQSxLO0FBRVQsbUJBQVksQ0FBWixFQUFlLENBQWYsRUFBa0I7QUFBQTs7QUFDZCxhQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsYUFBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUssUUFBTCxHQUFnQixTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQSxhQUFLLG1CQUFMO0FBQ0g7Ozs7OENBRXFCO0FBQ2xCLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLEdBQWlDLHVCQUFXLElBQTVDO0FBQ0EsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsTUFBcEIsR0FBaUMsdUJBQVcsSUFBNUM7QUFDQSxpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixJQUFwQixHQUFpQyxLQUFLLENBQUwsMEJBQWtCLElBQW5EO0FBQ0EsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsR0FBcEIsR0FBaUMsS0FBSyxDQUFMLDBCQUFrQixJQUFuRDtBQUNBLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFVBQXBCLEdBQWlDLEtBQUssVUFBdEM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7cWpCQ3BCTDs7Ozs7QUFH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QUwsQ0FBYSxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLEVBQTdCO0FBQ0g7OztzQ0FFYTtBQUNWLGlCQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0g7OztzQ0FFYTtBQUNWLGlCQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLEVBQTdCO0FBQ0g7Ozt3Q0FFZTtBQUNaLGlCQUFLLEtBQUw7QUFDQSxpQkFBSyxXQUFMO0FBQ0g7OztzQ0FFYTtBQUNWLGlCQUFLLEtBQUwsR0FBYSxDQUFiO0FBQ0EsaUJBQUssTUFBTCxDQUFZLFNBQVosR0FBd0IsQ0FBeEI7QUFDQSxpQkFBSyxNQUFMLENBQVksU0FBWixHQUF3QixDQUF4QjtBQUNIOzs7c0NBRWE7QUFDVixpQkFBSyxNQUFMLENBQVksU0FBWixHQUF3QixLQUFLLEtBQTdCO0FBQ0EsaUJBQUssTUFBTCxDQUFZLFNBQVosR0FBd0IsS0FBSyxLQUE3QjtBQUNIOzs7Ozs7QUFJTCxJQUFJLEdBQUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkg0JTQvNC40YLRgNC40Lkgb24gMDcuMDcuMjAxNy5cclxuICovXHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuL1BvaW50XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEZvb2QgZXh0ZW5kcyBQb2ludCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHN1cGVyKHgsIHkpO1xyXG4gICAgfVxyXG5cclxufSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5INCU0LzQuNGC0YDQuNC5IG9uIDA3LjA3LjIwMTcuXHJcbiAqL1xyXG4gICAgaW1wb3J0IHtQT0lOVF9TSVpFfSBmcm9tIFwiLi4vU2V0dGluZ3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5faW5pdFNuYWtlRG90U3R5bGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRTbmFrZURvdFN0eWxlcygpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LnN0eWxlLndpZHRoICAgICAgPSBQT0lOVF9TSVpFKydweCc7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5zdHlsZS5oZWlnaHQgICAgID0gUE9JTlRfU0laRSsncHgnO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuc3R5bGUubGVmdCAgICAgICA9IHRoaXMueCpQT0lOVF9TSVpFKydweCc7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5zdHlsZS50b3AgICAgICAgID0gdGhpcy55KlBPSU5UX1NJWkUrJ3B4JztcclxuICAgICAgICB0aGlzLiRlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSB0aGlzLmJhY2tncm91bmQ7XHJcbiAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkg0JTQvNC40YLRgNC40Lkgb24gMDcuMDcuMjAxNy5cclxuICovXHJcbmltcG9ydCB7U05BS0VfTU9WRSwgTU9WRV9JTlRFUlZBTCwgVEFCTEVfUEFSQU1TLCBTTkFLRV9DT0xPUn0gZnJvbSBcIi4uL1NldHRpbmdzXCI7XHJcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4vUG9pbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNuYWtlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9lbmFibGVEaXJlY3Rpb25FZGl0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRpbWVvdXQgICAgICA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zbmFrZSAgICAgICAgPSBbXTtcclxuICAgICAgICB0aGlzLl9tb3ZlVG8gICAgICA9IFNOQUtFX01PVkUuQk9UVE9NO1xyXG4gICAgICAgIHRoaXMuc25ha2VIZWFkICAgID0gbnVsbDtcclxuICAgICAgICB0aGlzLiRzbmFrZSAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbmFrZScpO1xyXG4gICAgICAgIHRoaXMuX29uTW92ZVNuYWtlID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9pbml0U25ha2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC90LDQv9GA0LDQstC70LXQvdC40LUg0LTQstC40LbQtdC90LjRjyDQt9C80LXQuFxyXG4gICAgICogQHBhcmFtIG1vdmVUb1xyXG4gICAgICovXHJcbiAgICBzZXQgbW92ZVRvKG1vdmVUbykge1xyXG4gICAgICAgIGlmKHRoaXMuX2VuYWJsZURpcmVjdGlvbkVkaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW92ZVRvID0gbW92ZVRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lbmFibGVEaXJlY3Rpb25FZGl0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQvtCx0YrQtdC60YLQsCDQt9C80LXQuFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2luaXRTbmFrZSgpIHtcclxuICAgICAgICB0aGlzLnNldFNuYWtlRG90KFRBQkxFX1BBUkFNUy5XSURUSC8yLCBUQUJMRV9QQVJBTVMuSEVJR0hULzIpO1xyXG4gICAgICAgIHRoaXMuc2V0U25ha2VEb3QoVEFCTEVfUEFSQU1TLldJRFRILzIsIFRBQkxFX1BBUkFNUy5IRUlHSFQvMisxKTtcclxuICAgICAgICB0aGlzLnNldFNuYWtlRG90KFRBQkxFX1BBUkFNUy5XSURUSC8yLCBUQUJMRV9QQVJBTVMuSEVJR0hULzIrMik7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTbmFrZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0YLQvtGH0LrRgyDQsiDQvtCx0YrQtdC60YIg0LfQvNC10LhcclxuICAgICAqIEBwYXJhbSB4IC0g0JrQvtC+0YDQtNC40L3QsNGC0LAg0L/QviDQvtGB0Lgg0KVcclxuICAgICAqIEBwYXJhbSB5IC0g0LrQvtC+0YDQtNC40L3QsNGC0LAg0L/QviDQvtGB0LggWVxyXG4gICAgICovXHJcbiAgICBzZXRTbmFrZURvdCh4ID0gMCwgeSA9IDApIHtcclxuICAgICAgICBsZXQgZG90ID0gbmV3IFBvaW50KHgsIHkpO1xyXG4gICAgICAgIHRoaXMuc25ha2UucHVzaChkb3QpO1xyXG4gICAgICAgIHRoaXMuc25ha2VIZWFkID0gZG90O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J3QsNGH0LDRgtGMINC00LLQuNC20LXQvdC40LUg0LfQvNC10LhcclxuICAgICAqL1xyXG4gICAgc3RhcnRNb3ZlKCkge1xyXG4gICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0TW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVTbmFrZSgpO1xyXG4gICAgICAgIH0sIE1PVkVfSU5URVJWQUwvdGhpcy5zbmFrZS5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7RgdGC0LDQvdC+0LLQuNGC0Ywg0LTQstC40LbQtdC90LjQtSDQt9C80LXQuFxyXG4gICAgICovXHJcbiAgICBzdG9wTW92ZSgpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCh0LTQstC40LPQsNC10YIg0L/QvtC70L7QttC10L3QuNC1INC30LzQtdC4INC90LAg0L7QtNC90YMg0YLQvtGH0LrRg1xyXG4gICAgICovXHJcbiAgICBtb3ZlU25ha2UoKSB7XHJcbiAgICAgICAgdGhpcy5zbmFrZS5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMuX21vdmVUbykge1xyXG4gICAgICAgICAgICBjYXNlIFNOQUtFX01PVkUuVE9QICAgIDogdGhpcy5zZXRTbmFrZURvdCh0aGlzLnNuYWtlSGVhZC54LCB0aGlzLnNuYWtlSGVhZC55LTEpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTTkFLRV9NT1ZFLkxFRlQgICA6IHRoaXMuc2V0U25ha2VEb3QodGhpcy5zbmFrZUhlYWQueC0xLCB0aGlzLnNuYWtlSGVhZC55KTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU05BS0VfTU9WRS5SSUdIVCAgOiB0aGlzLnNldFNuYWtlRG90KHRoaXMuc25ha2VIZWFkLngrMSwgdGhpcy5zbmFrZUhlYWQueSk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNOQUtFX01PVkUuQk9UVE9NIDogdGhpcy5zZXRTbmFrZURvdCh0aGlzLnNuYWtlSGVhZC54LCB0aGlzLnNuYWtlSGVhZC55KzEpOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZW5hYmxlRGlyZWN0aW9uRWRpdCA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy5fb25Nb3ZlU25ha2UpIHRoaXMuX29uTW92ZVNuYWtlKHRoaXMuc25ha2VIZWFkLCB0aGlzLnNuYWtlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTbmFrZSgpIHtcclxuICAgICAgICB0aGlzLiRzbmFrZS5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtGA0LjRgdC+0LLQutCwINC30LzQtdC4INC90LAg0YXQvtC70YHRgtC1XHJcbiAgICAgKi9cclxuICAgIHJlbmRlclNuYWtlKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU25ha2UoKTtcclxuICAgICAgICB0aGlzLnNuYWtlLm1hcChkb3QgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRzbmFrZS5hcHBlbmRDaGlsZChkb3QuJGVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/QvtC00L/QuNGB0YvQstCw0LXRgiDQvdCwINC40LfQvNC10L3QtdC90LjQtSDQv9C+0LvQvtC20LXQvdC40Y8g0LfQvNC10LhcclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBzZXQgb25Nb3ZlU25ha2UoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9vbk1vdmVTbmFrZSA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7RgtC00LDQtdGCIHRydWUg0LXRgdC70Lgg0LfQvNC10Y8g0LTQstC40LbQtdGC0YHRjyDQv9C+INCz0L7RgNC40LfQvtC90YLQsNC70LhcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBnZXQgaXNNb3ZlSG9yaXNvbnRhbCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX21vdmVUbyA9PT0gU05BS0VfTU9WRS5MRUZUIHx8IHRoaXMuX21vdmVUbyA9PT0gU05BS0VfTU9WRS5SSUdIVCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0LTQsNC10YIgdHJ1ZSDQtdGB0LvQuCDQt9C80LXRjyDQtNCy0LjQttC10YLRgdGPINC/0L4g0LLQtdGA0YLQuNC60LDQu9C4XHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZ2V0IGlzTW92ZVZlcnRpY2FsKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fbW92ZVRvID09PSBTTkFLRV9NT1ZFLlRPUCB8fCB0aGlzLl9tb3ZlVG8gPT09IFNOQUtFX01PVkUuQk9UVE9NKTtcclxuICAgIH1cclxuXHJcbn0iLCIvKipcclxuICogQ3JlYXRlZCBieSDQlNC80LjRgtGA0LjQuSBvbiAwNy4wNy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtUQUJMRV9QQVJBTVMsIFBPSU5UX1NJWkV9IGZyb20gXCIuLi9TZXR0aW5nc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpO1xyXG4gICAgICAgIHRoaXMuX2luaXRUYWJsZVN0eWxlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0VGFibGVTdHlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgdGhpcy50YWJsZS5zdHlsZS53aWR0aCAgICA9IFRBQkxFX1BBUkFNUy5XSURUSCpQT0lOVF9TSVpFKydweCc7XHJcbiAgICAgICAgdGhpcy50YWJsZS5zdHlsZS5oZWlnaHQgICA9IFRBQkxFX1BBUkFNUy5IRUlHSFQqUE9JTlRfU0laRSsncHgnO1xyXG4gICAgfVxyXG5cclxufSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5INCU0LzQuNGC0YDQuNC5IG9uIDA3LjA3LjIwMTcuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTU9WRV9JTlRFUlZBTCA9IDYwMDtcclxuZXhwb3J0IGNvbnN0IFBPSU5UX1NJWkUgICAgPSAxMDtcclxuXHJcbmV4cG9ydCBjb25zdCBUQUJMRV9QQVJBTVMgPSB7XHJcbiAgICBXSURUSCA6IDMwLFxyXG4gICAgSEVJR0hUIDogMzBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTTkFLRV9NT1ZFID0ge1xyXG4gICAgVE9QICAgIDogJ3RvcCcsXHJcbiAgICBMRUZUICAgOiAnbGVmdCcsXHJcbiAgICBSSUdIVCAgOiAncmlnaHQnLFxyXG4gICAgQk9UVE9NIDogJ2JvdHRvbSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBLRVlTID0ge1xyXG4gICAgVVAgICAgOiAzOCxcclxuICAgIExFRlQgIDogMzcsXHJcbiAgICBSSUdIVCA6IDM5LFxyXG4gICAgRE9XTiAgOiA0MCxcclxuICAgIEVOVEVSIDogMTMsXHJcbiAgICBFU0MgICA6IDI3XHJcbn07IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkg0JTQvNC40YLRgNC40Lkgb24gMDcuMDcuMjAxNy5cclxuICovXHJcbmltcG9ydCB7VGFibGV9IGZyb20gXCIuL0NvbXBvbmVudHMvVGFibGVcIjtcclxuaW1wb3J0IHtTbmFrZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9TbmFrZVwiO1xyXG5pbXBvcnQge0tFWVMsIFNOQUtFX01PVkUsIFRBQkxFX1BBUkFNU30gZnJvbSBcIi4vU2V0dGluZ3NcIjtcclxuaW1wb3J0IHtGb29kfSBmcm9tIFwiLi9Db21wb25lbnRzL0Zvb2RcIjtcclxuXHJcblxyXG5cclxuY2xhc3MgQXBwIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmZvb2RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vZC1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLnNwbGFzaCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BsYXNoc2NyZWVuJyk7XHJcbiAgICAgICAgdGhpcy5zcGxhc2gyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVPdmVyJyk7XHJcbiAgICAgICAgdGhpcy5zY29yZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUtMScpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlLTInKTtcclxuXHJcbiAgICAgICAgdGhpcy5UYWJsZSA9IG5ldyBUYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuU25ha2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuRm9vZCAgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9pbml0TmF2aWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9ldmVudHMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2goZS5rZXlDb2RlIHx8IGUud2hpY2gpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgS0VZUy5FTlRFUiA6IHRoaXMuc3RhcnRHYW1lKCk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBLRVlTLkVTQyAgIDogdGhpcy5zdG9wR2FtZSgpOyBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQodGC0LDRgNGC0YPQtdGCINC40LPRgNGDXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlU3BsYXNoKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlU3BsYXNoMigpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJlU2NvcmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5TbmFrZSA9IG5ldyBTbmFrZSgpO1xyXG4gICAgICAgIHRoaXMuc25ha2VFdmVudHMoKTtcclxuICAgICAgICB0aGlzLlNuYWtlLnN0YXJ0TW92ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEZvb2QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC40LPRgNGDXHJcbiAgICAgKi9cclxuICAgIHN0b3BHYW1lKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd1NwbGFzaDIoKTtcclxuICAgICAgICBpZih0aGlzLlNuYWtlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuU25ha2Uuc3RvcE1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5TbmFrZS5yZW1vdmVTbmFrZSgpO1xyXG4gICAgICAgICAgICB0aGlzLlNuYWtlID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuRm9vZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyRm9vZENvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICB0aGlzLkZvb2QgID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQvtCx0YvRgtC40Lkg0LfQvNC10LhcclxuICAgICAqL1xyXG4gICAgc25ha2VFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5TbmFrZS5vbk1vdmVTbmFrZSA9IChzbmFrZUhlYWQsIHNuYWtlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb25zKHNuYWtlSGVhZCwgc25ha2UpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9GB0YLQsNC90LDQstC70LjQstCw0LXRgiDQtNC+0LHRi9GH0YMg0L3QsCDRhdC+0LvRgdGCXHJcbiAgICAgKi9cclxuICAgIHNldEZvb2QoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckZvb2RDb250YWluZXIoKTtcclxuXHJcbiAgICAgICAgbGV0IGZvb2RQb3MgPSB0aGlzLmdldEZvb2RQb3NpdGlvbigpO1xyXG4gICAgICAgIHRoaXMuRm9vZCAgID0gbmV3IEZvb2QoZm9vZFBvcy54LCBmb29kUG9zLnkpO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDQldGB0LvQuCDQv9C+0LvRg9GH0LXQvdCw0Y8g0YLQvtGH0LrQsCDQvdCwINGF0L7QtNC40YLRgdGPINC90LAg0LrQvtC+0YDQtNC40L3QsNGC0LDRhSDRgtC+0YfQutC4INC30LzQtdC4INGC0L4g0L/QvtC70YPRh9Cw0LXQvCDQtNGA0YPQs9GD0Y5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpZih0aGlzLmNoZWNrU25ha2VDb2xsaXNpb24odGhpcy5Gb29kLCB0aGlzLlNuYWtlLnNuYWtlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEZvb2QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZm9vZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLkZvb2QuJGVsZW1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9GA0L7QstC10YDQutCwINCy0YHQtdGFINC60L7Qu9C70LjQt9C40Lkg0LfQvNC10LhcclxuICAgICAqIEBwYXJhbSBzbmFrZUhlYWQgLSDQs9C+0LvQvtCy0LAg0LfQvNC10LhcclxuICAgICAqIEBwYXJhbSBzbmFrZSAtINGC0L7Rh9C60Lgg0LfQvNC10LhcclxuICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICovXHJcbiAgICBjaGVja0NvbGxpc2lvbnMoc25ha2VIZWFkLCBzbmFrZSkge1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDQn9GA0L7QstC10YDQutCwINC90LAg0YHRgtC+0LvQutC90L7QstC10L3QuNGPINC30LzQtdC4INGBINGA0LDQvNC60LDQvNC4INGF0L7Qu9GB0YLQsCDQuCDQvdCwINC30LDQvNC60L3Rg9GC0YvQuSDQutGA0YPQs1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tTbmFrZUNvbGxpc2lvbihzbmFrZUhlYWQsIHNuYWtlKSB8fCB0aGlzLmNoZWNrU25ha2VUYWJsZUNvbGxpc2lvbihzbmFrZUhlYWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0b3BHYW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDQn9GA0L7QstC10YDQutCwINC90LAg0YHRgtC+0LvQutC90L7QstC10L3QuNC1INC30LzQtdC4INGBINC10LTQvtC5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYodGhpcy5jaGVja1NuYWtlQ29sbGlzaW9uKHRoaXMuRm9vZCwgc25ha2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuU25ha2Uuc2V0U25ha2VEb3QodGhpcy5Gb29kLngsIHRoaXMuRm9vZC55KTtcclxuICAgICAgICAgICAgdGhpcy5pbmNyZWFzZVNjb3JlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9vZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5TbmFrZSkge1xyXG4gICAgICAgICAgICB0aGlzLlNuYWtlLnJlbmRlclNuYWtlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0YLQvtC70LrQvdC+0LLQtdC90LjRjyDQt9C80LXQuCDRgSDRgNCw0LzQutCw0LzQuCDRhdC+0LvRgdGC0LBcclxuICAgICAqIEBwYXJhbSBzbmFrZUhlYWQgLSDQs9C+0LvQvtCy0LAg0LfQvNC10LhcclxuICAgICAqL1xyXG4gICAgY2hlY2tTbmFrZVRhYmxlQ29sbGlzaW9uKHNuYWtlSGVhZCkge1xyXG4gICAgICAgIGlmKCF0aGlzLlNuYWtlKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgICBzbmFrZUhlYWQueCA8IDAgfHxcclxuICAgICAgICAgICAgc25ha2VIZWFkLnkgPCAwIHx8XHJcbiAgICAgICAgICAgIHNuYWtlSGVhZC54ID49IFRBQkxFX1BBUkFNUy5XSURUSCB8fFxyXG4gICAgICAgICAgICBzbmFrZUhlYWQueSA+PSBUQUJMRV9QQVJBTVMuSEVJR0hUKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0YLQvtC70LrQvdC+0LLQtdC90LjRjyDQutCw0LrQvtC5INC70LjQsdC+INGC0L7Rh9C60Lgg0YEg0LfQvNC10ZHQuVxyXG4gICAgICogQHBhcmFtIHBvaW50IC0g0YLQvtGH0LrQsFxyXG4gICAgICogQHBhcmFtIHNuYWtlIC0g0YLQvtGH0LrQuCDQt9C80LXQuFxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGNoZWNrU25ha2VDb2xsaXNpb24ocG9pbnQsIHNuYWtlKSB7XHJcbiAgICAgICAgaWYoIXBvaW50IHx8ICFzbmFrZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgY29sbGlzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKGxldCBzUG9pbnQgb2Ygc25ha2UpIHtcclxuICAgICAgICAgICAgaWYocG9pbnQuJGVsZW1lbnQgIT09IHNQb2ludC4kZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYoc1BvaW50LnggPT09IHBvaW50LnggJiYgc1BvaW50LnkgPT09IHBvaW50LnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb2xsaXNpb247XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0LTQsNC10YIg0YDQsNC90LTQvtC80L3Ri9C1INGC0L7Rh9C60Lgg0LTQu9GPINGA0LDRgdC/0L7Qu9C+0LbQtdC90LjRjyDQtNC+0LHRi9GH0LhcclxuICAgICAqIEByZXR1cm5zIHt7eDogbnVtYmVyLCB5OiBudW1iZXJ9fVxyXG4gICAgICovXHJcbiAgICBnZXRGb29kUG9zaXRpb24oc25ha2UpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4IDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogVEFCTEVfUEFSQU1TLldJRFRILTEpKzEsXHJcbiAgICAgICAgICAgIHkgOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBUQUJMRV9QQVJBTVMuSEVJR0hULTEpKzFcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRg9C/0YDQsNCy0LvQtdC90LjRj1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgX2luaXROYXZpZ2F0aW9uKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5TbmFrZSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGUua2V5Q29kZSB8fCBlLndoaWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBLRVlTLlVQICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5TbmFrZS5pc01vdmVIb3Jpc29udGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNuYWtlLm1vdmVUbyA9IFNOQUtFX01PVkUuVE9QO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgS0VZUy5MRUZUICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuU25ha2UuaXNNb3ZlVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU25ha2UubW92ZVRvID0gU05BS0VfTU9WRS5MRUZUO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgS0VZUy5SSUdIVCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuU25ha2UuaXNNb3ZlVmVydGljYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU25ha2UubW92ZVRvID0gU05BS0VfTU9WRS5SSUdIVDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEtFWVMuRE9XTiAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLlNuYWtlLmlzTW92ZUhvcmlzb250YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU25ha2UubW92ZVRvID0gU05BS0VfTU9WRS5CT1RUT007XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KfQuNGB0YLQuNGCINC60L7QvdGC0LXQudC90LXRgCDRgSDQtNC+0LHRi9GH0LXQuVxyXG4gICAgICovXHJcbiAgICBjbGVhckZvb2RDb250YWluZXIoKSB7XHJcbiAgICAgICAgdGhpcy5mb29kQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVTcGxhc2goKSB7XHJcbiAgICAgICAgdGhpcy5zcGxhc2guc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBzaG93U3BsYXNoKCkge1xyXG4gICAgICAgIHRoaXMuc3BsYXNoMi5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NwbGFzaDIoKSB7XHJcbiAgICAgICAgdGhpcy5zcGxhc2gyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVNwbGFzaDIoKSB7XHJcbiAgICAgICAgdGhpcy5zcGxhc2gyLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZWFzZVNjb3JlKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUrKztcclxuICAgICAgICB0aGlzLnJlbmRlclNjb3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJlU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZTEuaW5uZXJIVE1MID0gMDtcclxuICAgICAgICB0aGlzLnNjb3JlMi5pbm5lckhUTUwgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclNjb3JlKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUxLmlubmVySFRNTCA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgdGhpcy5zY29yZTIuaW5uZXJIVE1MID0gdGhpcy5zY29yZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm5ldyBBcHAoKTsiXX0=
