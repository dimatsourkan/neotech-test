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
        this.timeinterval = null;
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

            this.timeinterval = setInterval(function () {
                _this.moveSnake();
            }, _Settings.MOVE_INTERVAL);
        }

        /**
         * Остановить движение змеи
         */

    }, {
        key: 'stopMove',
        value: function stopMove() {
            if (this.timeinterval) {
                clearInterval(this.timeinterval);
            }
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
var MOVE_INTERVAL = exports.MOVE_INTERVAL = 100;
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
                        _this.initGame();break;
                    case _Settings.KEYS.ESC:
                        _this.stopGame();break;
                }
            });
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
         * Стартует игру
         */

    }, {
        key: "initGame",
        value: function initGame() {
            this.stopGame();
            this.hideSplash();
            this.hideSplash2();
            this.cleareScore();
            this.Snake = new _Snake.Snake();
            this.setFood();
            this.snakeEvents();
            this.Snake.startMove();
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

            this.Snake.renderSnake();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXENvbXBvbmVudHNcXEZvb2QuanMiLCJzcmNcXENvbXBvbmVudHNcXFBvaW50LmpzIiwic3JjXFxDb21wb25lbnRzXFxTbmFrZS5qcyIsInNyY1xcQ29tcG9uZW50c1xcVGFibGUuanMiLCJzcmNcXFNldHRpbmdzLmpzIiwic3JjXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNHQTs7Ozs7OytlQUhBOzs7OztJQU1hLEksV0FBQSxJOzs7QUFFVCxrQkFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQjtBQUFBOztBQUFBLDJHQUNSLENBRFEsRUFDTCxDQURLO0FBRWpCOzs7Ozs7Ozs7Ozs7O3FqQkNWTDs7Ozs7QUFHSTs7OztJQUVTLEssV0FBQSxLO0FBRVQsbUJBQVksQ0FBWixFQUFlLENBQWYsRUFBa0I7QUFBQTs7QUFDZCxhQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsYUFBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUssUUFBTCxHQUFnQixTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQSxhQUFLLG1CQUFMO0FBQ0g7Ozs7OENBRXFCO0FBQ2xCLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLEdBQWlDLHVCQUFXLElBQTVDO0FBQ0EsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsTUFBcEIsR0FBaUMsdUJBQVcsSUFBNUM7QUFDQSxpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixJQUFwQixHQUFpQyxLQUFLLENBQUwsMEJBQWtCLElBQW5EO0FBQ0EsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsR0FBcEIsR0FBaUMsS0FBSyxDQUFMLDBCQUFrQixJQUFuRDtBQUNBLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFVBQXBCLEdBQWlDLEtBQUssVUFBdEM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7cWpCQ3BCTDs7Ozs7QUFH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OztzQ0FFYTtBQUNWLGlCQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0g7OztzQ0FFYTtBQUNWLGlCQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLE9BQW5CLEdBQTZCLEVBQTdCO0FBQ0g7Ozt3Q0FFZTtBQUNaLGlCQUFLLEtBQUw7QUFDQSxpQkFBSyxXQUFMO0FBQ0g7OztzQ0FFYTtBQUNWLGlCQUFLLE1BQUwsQ0FBWSxTQUFaLEdBQXdCLENBQXhCO0FBQ0EsaUJBQUssTUFBTCxDQUFZLFNBQVosR0FBd0IsQ0FBeEI7QUFDSDs7O3NDQUVhO0FBQ1YsaUJBQUssTUFBTCxDQUFZLFNBQVosR0FBd0IsS0FBSyxLQUE3QjtBQUNBLGlCQUFLLE1BQUwsQ0FBWSxTQUFaLEdBQXdCLEtBQUssS0FBN0I7QUFDSDs7Ozs7O0FBSUwsSUFBSSxHQUFKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5INCU0LzQuNGC0YDQuNC5IG9uIDA3LjA3LjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi9Qb2ludFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb29kIGV4dGVuZHMgUG9pbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgICBzdXBlcih4LCB5KTtcclxuICAgIH1cclxuXHJcbn0iLCIvKipcclxuICogQ3JlYXRlZCBieSDQlNC80LjRgtGA0LjQuSBvbiAwNy4wNy4yMDE3LlxyXG4gKi9cclxuICAgIGltcG9ydCB7UE9JTlRfU0laRX0gZnJvbSBcIi4uL1NldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9pbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuX2luaXRTbmFrZURvdFN0eWxlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0U25ha2VEb3RTdHlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5zdHlsZS53aWR0aCAgICAgID0gUE9JTlRfU0laRSsncHgnO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuc3R5bGUuaGVpZ2h0ICAgICA9IFBPSU5UX1NJWkUrJ3B4JztcclxuICAgICAgICB0aGlzLiRlbGVtZW50LnN0eWxlLmxlZnQgICAgICAgPSB0aGlzLngqUE9JTlRfU0laRSsncHgnO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuc3R5bGUudG9wICAgICAgICA9IHRoaXMueSpQT0lOVF9TSVpFKydweCc7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5iYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG5cclxufSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5INCU0LzQuNGC0YDQuNC5IG9uIDA3LjA3LjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQge1NOQUtFX01PVkUsIE1PVkVfSU5URVJWQUwsIFRBQkxFX1BBUkFNUywgU05BS0VfQ09MT1J9IGZyb20gXCIuLi9TZXR0aW5nc1wiO1xyXG5pbXBvcnQge1BvaW50fSBmcm9tICcuL1BvaW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTbmFrZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZW5hYmxlRGlyZWN0aW9uRWRpdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50aW1laW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc25ha2UgICAgICAgID0gW107XHJcbiAgICAgICAgdGhpcy5fbW92ZVRvICAgICAgPSBTTkFLRV9NT1ZFLkJPVFRPTTtcclxuICAgICAgICB0aGlzLnNuYWtlSGVhZCAgICA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kc25ha2UgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc25ha2UnKTtcclxuICAgICAgICB0aGlzLl9vbk1vdmVTbmFrZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5faW5pdFNuYWtlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9GB0YLQsNC90LDQstC70LjQstCw0LXRgiDQvdCw0L/RgNCw0LLQu9C10L3QuNC1INC00LLQuNC20LXQvdC40Y8g0LfQvNC10LhcclxuICAgICAqIEBwYXJhbSBtb3ZlVG9cclxuICAgICAqL1xyXG4gICAgc2V0IG1vdmVUbyhtb3ZlVG8pIHtcclxuICAgICAgICBpZih0aGlzLl9lbmFibGVEaXJlY3Rpb25FZGl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vdmVUbyA9IG1vdmVUbztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZW5hYmxlRGlyZWN0aW9uRWRpdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0L7QsdGK0LXQutGC0LAg0LfQvNC10LhcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9pbml0U25ha2UoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTbmFrZURvdChUQUJMRV9QQVJBTVMuV0lEVEgvMiwgVEFCTEVfUEFSQU1TLkhFSUdIVC8yKTtcclxuICAgICAgICB0aGlzLnNldFNuYWtlRG90KFRBQkxFX1BBUkFNUy5XSURUSC8yLCBUQUJMRV9QQVJBTVMuSEVJR0hULzIrMSk7XHJcbiAgICAgICAgdGhpcy5zZXRTbmFrZURvdChUQUJMRV9QQVJBTVMuV0lEVEgvMiwgVEFCTEVfUEFSQU1TLkhFSUdIVC8yKzIpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyU25ha2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINGC0L7Rh9C60YMg0LIg0L7QsdGK0LXQutGCINC30LzQtdC4XHJcbiAgICAgKiBAcGFyYW0geCAtINCa0L7QvtGA0LTQuNC90LDRgtCwINC/0L4g0L7RgdC4INClXHJcbiAgICAgKiBAcGFyYW0geSAtINC60L7QvtGA0LTQuNC90LDRgtCwINC/0L4g0L7RgdC4IFlcclxuICAgICAqL1xyXG4gICAgc2V0U25ha2VEb3QoeCA9IDAsIHkgPSAwKSB7XHJcbiAgICAgICAgbGV0IGRvdCA9IG5ldyBQb2ludCh4LCB5KTtcclxuICAgICAgICB0aGlzLnNuYWtlLnB1c2goZG90KTtcclxuICAgICAgICB0aGlzLnNuYWtlSGVhZCA9IGRvdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCd0LDRh9Cw0YLRjCDQtNCy0LjQttC10L3QuNC1INC30LzQtdC4XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0TW92ZSgpIHtcclxuICAgICAgICB0aGlzLnRpbWVpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlU25ha2UoKTtcclxuICAgICAgICB9LCBNT1ZFX0lOVEVSVkFMKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YHRgtCw0L3QvtCy0LjRgtGMINC00LLQuNC20LXQvdC40LUg0LfQvNC10LhcclxuICAgICAqL1xyXG4gICAgc3RvcE1vdmUoKSB7XHJcbiAgICAgICAgaWYodGhpcy50aW1laW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVpbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KHQtNCy0LjQs9Cw0LXRgiDQv9C+0LvQvtC20LXQvdC40LUg0LfQvNC10Lgg0L3QsCDQvtC00L3RgyDRgtC+0YfQutGDXHJcbiAgICAgKi9cclxuICAgIG1vdmVTbmFrZSgpIHtcclxuICAgICAgICB0aGlzLnNuYWtlLnNwbGljZSgwLCAxKTtcclxuICAgICAgICBzd2l0Y2godGhpcy5fbW92ZVRvKSB7XHJcbiAgICAgICAgICAgIGNhc2UgU05BS0VfTU9WRS5UT1AgICAgOiB0aGlzLnNldFNuYWtlRG90KHRoaXMuc25ha2VIZWFkLngsIHRoaXMuc25ha2VIZWFkLnktMSk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNOQUtFX01PVkUuTEVGVCAgIDogdGhpcy5zZXRTbmFrZURvdCh0aGlzLnNuYWtlSGVhZC54LTEsIHRoaXMuc25ha2VIZWFkLnkpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTTkFLRV9NT1ZFLlJJR0hUICA6IHRoaXMuc2V0U25ha2VEb3QodGhpcy5zbmFrZUhlYWQueCsxLCB0aGlzLnNuYWtlSGVhZC55KTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU05BS0VfTU9WRS5CT1RUT00gOiB0aGlzLnNldFNuYWtlRG90KHRoaXMuc25ha2VIZWFkLngsIHRoaXMuc25ha2VIZWFkLnkrMSk7IGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lbmFibGVEaXJlY3Rpb25FZGl0ID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLl9vbk1vdmVTbmFrZSkgdGhpcy5fb25Nb3ZlU25ha2UodGhpcy5zbmFrZUhlYWQsIHRoaXMuc25ha2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNuYWtlKCkge1xyXG4gICAgICAgIHRoaXMuJHNuYWtlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0YDQuNGB0L7QstC60LAg0LfQvNC10Lgg0L3QsCDRhdC+0LvRgdGC0LVcclxuICAgICAqL1xyXG4gICAgcmVuZGVyU25ha2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTbmFrZSgpO1xyXG4gICAgICAgIHRoaXMuc25ha2UubWFwKGRvdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJHNuYWtlLmFwcGVuZENoaWxkKGRvdC4kZWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9C+0LTQv9C40YHRi9Cy0LDQtdGCINC90LAg0LjQt9C80LXQvdC10L3QuNC1INC/0L7Qu9C+0LbQtdC90LjRjyDQt9C80LXQuFxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHNldCBvbk1vdmVTbmFrZShjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX29uTW92ZVNuYWtlID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0LTQsNC10YIgdHJ1ZSDQtdGB0LvQuCDQt9C80LXRjyDQtNCy0LjQttC10YLRgdGPINC/0L4g0LPQvtGA0LjQt9C+0L3RgtCw0LvQuFxyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGdldCBpc01vdmVIb3Jpc29udGFsKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fbW92ZVRvID09PSBTTkFLRV9NT1ZFLkxFRlQgfHwgdGhpcy5fbW92ZVRvID09PSBTTkFLRV9NT1ZFLlJJR0hUKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YLQtNCw0LXRgiB0cnVlINC10YHQu9C4INC30LzQtdGPINC00LLQuNC20LXRgtGB0Y8g0L/QviDQstC10YDRgtC40LrQsNC70LhcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBnZXQgaXNNb3ZlVmVydGljYWwoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9tb3ZlVG8gPT09IFNOQUtFX01PVkUuVE9QIHx8IHRoaXMuX21vdmVUbyA9PT0gU05BS0VfTU9WRS5CT1RUT00pO1xyXG4gICAgfVxyXG5cclxufSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5INCU0LzQuNGC0YDQuNC5IG9uIDA3LjA3LjIwMTcuXHJcbiAqL1xyXG5pbXBvcnQge1RBQkxFX1BBUkFNUywgUE9JTlRfU0laRX0gZnJvbSBcIi4uL1NldHRpbmdzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RhYmxlJyk7XHJcbiAgICAgICAgdGhpcy5faW5pdFRhYmxlU3R5bGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2luaXRUYWJsZVN0eWxlcygpIHtcclxuICAgICAgICB0aGlzLnRhYmxlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgICAgICB0aGlzLnRhYmxlLnN0eWxlLndpZHRoICAgID0gVEFCTEVfUEFSQU1TLldJRFRIKlBPSU5UX1NJWkUrJ3B4JztcclxuICAgICAgICB0aGlzLnRhYmxlLnN0eWxlLmhlaWdodCAgID0gVEFCTEVfUEFSQU1TLkhFSUdIVCpQT0lOVF9TSVpFKydweCc7XHJcbiAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkg0JTQvNC40YLRgNC40Lkgb24gMDcuMDcuMjAxNy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBNT1ZFX0lOVEVSVkFMID0gMTAwO1xyXG5leHBvcnQgY29uc3QgUE9JTlRfU0laRSAgICA9IDEwO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRBQkxFX1BBUkFNUyA9IHtcclxuICAgIFdJRFRIIDogMzAsXHJcbiAgICBIRUlHSFQgOiAzMFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNOQUtFX01PVkUgPSB7XHJcbiAgICBUT1AgICAgOiAndG9wJyxcclxuICAgIExFRlQgICA6ICdsZWZ0JyxcclxuICAgIFJJR0hUICA6ICdyaWdodCcsXHJcbiAgICBCT1RUT00gOiAnYm90dG9tJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEtFWVMgPSB7XHJcbiAgICBVUCAgICA6IDM4LFxyXG4gICAgTEVGVCAgOiAzNyxcclxuICAgIFJJR0hUIDogMzksXHJcbiAgICBET1dOICA6IDQwLFxyXG4gICAgRU5URVIgOiAxMyxcclxuICAgIEVTQyAgIDogMjdcclxufTsiLCIvKipcclxuICogQ3JlYXRlZCBieSDQlNC80LjRgtGA0LjQuSBvbiAwNy4wNy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtUYWJsZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9UYWJsZVwiO1xyXG5pbXBvcnQge1NuYWtlfSBmcm9tIFwiLi9Db21wb25lbnRzL1NuYWtlXCI7XHJcbmltcG9ydCB7S0VZUywgU05BS0VfTU9WRSwgVEFCTEVfUEFSQU1TfSBmcm9tIFwiLi9TZXR0aW5nc1wiO1xyXG5pbXBvcnQge0Zvb2R9IGZyb20gXCIuL0NvbXBvbmVudHMvRm9vZFwiO1xyXG5cclxuXHJcblxyXG5jbGFzcyBBcHAge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZm9vZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb29kLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMuc3BsYXNoICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGxhc2hzY3JlZW4nKTtcclxuICAgICAgICB0aGlzLnNwbGFzaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZU92ZXInKTtcclxuICAgICAgICB0aGlzLnNjb3JlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY29yZS0xJyk7XHJcbiAgICAgICAgdGhpcy5zY29yZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUtMicpO1xyXG5cclxuICAgICAgICB0aGlzLlRhYmxlID0gbmV3IFRhYmxlKCk7XHJcbiAgICAgICAgdGhpcy5TbmFrZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5Gb29kICA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuX2luaXROYXZpZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgX2V2ZW50cygpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaChlLmtleUNvZGUgfHwgZS53aGljaCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBLRVlTLkVOVEVSIDogdGhpcy5pbml0R2FtZSgpOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgS0VZUy5FU0MgICA6IHRoaXMuc3RvcEdhbWUoKTsgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7RgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0LjQs9GA0YNcclxuICAgICAqL1xyXG4gICAgc3RvcEdhbWUoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1NwbGFzaDIoKTtcclxuICAgICAgICBpZih0aGlzLlNuYWtlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuU25ha2Uuc3RvcE1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5TbmFrZS5yZW1vdmVTbmFrZSgpO1xyXG4gICAgICAgICAgICB0aGlzLlNuYWtlID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuRm9vZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyRm9vZENvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICB0aGlzLkZvb2QgID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KHRgtCw0YDRgtGD0LXRgiDQuNCz0YDRg1xyXG4gICAgICovXHJcbiAgICBpbml0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlU3BsYXNoKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlU3BsYXNoMigpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJlU2NvcmUoKTtcclxuICAgICAgICB0aGlzLlNuYWtlID0gbmV3IFNuYWtlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRGb29kKCk7XHJcbiAgICAgICAgdGhpcy5zbmFrZUV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuU25ha2Uuc3RhcnRNb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC+0LHRi9GC0LjQuSDQt9C80LXQuFxyXG4gICAgICovXHJcbiAgICBzbmFrZUV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLlNuYWtlLm9uTW92ZVNuYWtlID0gKHNuYWtlSGVhZCwgc25ha2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoc25ha2VIZWFkLCBzbmFrZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC00L7QsdGL0YfRgyDQvdCwINGF0L7Qu9GB0YJcclxuICAgICAqL1xyXG4gICAgc2V0Rm9vZCgpIHtcclxuICAgICAgICB0aGlzLmNsZWFyRm9vZENvbnRhaW5lcigpO1xyXG5cclxuICAgICAgICBsZXQgZm9vZFBvcyA9IHRoaXMuZ2V0Rm9vZFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5Gb29kICAgPSBuZXcgRm9vZChmb29kUG9zLngsIGZvb2RQb3MueSk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINCV0YHQu9C4INC/0L7Qu9GD0YfQtdC90LDRjyDRgtC+0YfQutCwINC90LAg0YXQvtC00LjRgtGB0Y8g0L3QsCDQutC+0L7RgNC00LjQvdCw0YLQsNGFINGC0L7Rh9C60Lgg0LfQvNC10Lgg0YLQviDQv9C+0LvRg9GH0LDQtdC8INC00YDRg9Cz0YPRjlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tTbmFrZUNvbGxpc2lvbih0aGlzLkZvb2QsIHRoaXMuU25ha2Uuc25ha2UpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9vZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mb29kQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuRm9vZC4kZWxlbWVudClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtCy0LXRgNC60LAg0LLRgdC10YUg0LrQvtC70LvQuNC30LjQuSDQt9C80LXQuFxyXG4gICAgICogQHBhcmFtIHNuYWtlSGVhZCAtINCz0L7Qu9C+0LLQsCDQt9C80LXQuFxyXG4gICAgICogQHBhcmFtIHNuYWtlIC0g0YLQvtGH0LrQuCDQt9C80LXQuFxyXG4gICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgKi9cclxuICAgIGNoZWNrQ29sbGlzaW9ucyhzbmFrZUhlYWQsIHNuYWtlKSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINCf0YDQvtCy0LXRgNC60LAg0L3QsCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40Y8g0LfQvNC10Lgg0YEg0YDQsNC80LrQsNC80Lgg0YXQvtC70YHRgtCwINC4INC90LAg0LfQsNC80LrQvdGD0YLRi9C5INC60YDRg9CzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYodGhpcy5jaGVja1NuYWtlQ29sbGlzaW9uKHNuYWtlSGVhZCwgc25ha2UpIHx8IHRoaXMuY2hlY2tTbmFrZVRhYmxlQ29sbGlzaW9uKHNuYWtlSGVhZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcEdhbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINCf0YDQvtCy0LXRgNC60LAg0L3QsCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40LUg0LfQvNC10Lgg0YEg0LXQtNC+0LlcclxuICAgICAgICAgKi9cclxuICAgICAgICBpZih0aGlzLmNoZWNrU25ha2VDb2xsaXNpb24odGhpcy5Gb29kLCBzbmFrZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5TbmFrZS5zZXRTbmFrZURvdCh0aGlzLkZvb2QueCwgdGhpcy5Gb29kLnkpO1xyXG4gICAgICAgICAgICB0aGlzLmluY3JlYXNlU2NvcmUoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGb29kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLlNuYWtlLnJlbmRlclNuYWtlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9GA0L7QstC10YDQutCwINC90LAg0YHRgtC+0LvQutC90L7QstC10L3QuNGPINC30LzQtdC4INGBINGA0LDQvNC60LDQvNC4INGF0L7Qu9GB0YLQsFxyXG4gICAgICogQHBhcmFtIHNuYWtlSGVhZCAtINCz0L7Qu9C+0LLQsCDQt9C80LXQuFxyXG4gICAgICovXHJcbiAgICBjaGVja1NuYWtlVGFibGVDb2xsaXNpb24oc25ha2VIZWFkKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuU25ha2UpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAgIHNuYWtlSGVhZC54IDwgMCB8fFxyXG4gICAgICAgICAgICBzbmFrZUhlYWQueSA8IDAgfHxcclxuICAgICAgICAgICAgc25ha2VIZWFkLnggPj0gVEFCTEVfUEFSQU1TLldJRFRIIHx8XHJcbiAgICAgICAgICAgIHNuYWtlSGVhZC55ID49IFRBQkxFX1BBUkFNUy5IRUlHSFQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQn9GA0L7QstC10YDQutCwINC90LAg0YHRgtC+0LvQutC90L7QstC10L3QuNGPINC60LDQutC+0Lkg0LvQuNCx0L4g0YLQvtGH0LrQuCDRgSDQt9C80LXRkdC5XHJcbiAgICAgKiBAcGFyYW0gcG9pbnQgLSDRgtC+0YfQutCwXHJcbiAgICAgKiBAcGFyYW0gc25ha2UgLSDRgtC+0YfQutC4INC30LzQtdC4XHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgY2hlY2tTbmFrZUNvbGxpc2lvbihwb2ludCwgc25ha2UpIHtcclxuICAgICAgICBpZighcG9pbnQgfHwgIXNuYWtlKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBjb2xsaXNpb24gPSBmYWxzZTtcclxuICAgICAgICBmb3IobGV0IHNQb2ludCBvZiBzbmFrZSkge1xyXG4gICAgICAgICAgICBpZihwb2ludC4kZWxlbWVudCAhPT0gc1BvaW50LiRlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZihzUG9pbnQueCA9PT0gcG9pbnQueCAmJiBzUG9pbnQueSA9PT0gcG9pbnQueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YLQtNCw0LXRgiDRgNCw0L3QtNC+0LzQvdGL0LUg0YLQvtGH0LrQuCDQtNC70Y8g0YDQsNGB0L/QvtC70L7QttC10L3QuNGPINC00L7QsdGL0YfQuFxyXG4gICAgICogQHJldHVybnMge3t4OiBudW1iZXIsIHk6IG51bWJlcn19XHJcbiAgICAgKi9cclxuICAgIGdldEZvb2RQb3NpdGlvbihzbmFrZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHggOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBUQUJMRV9QQVJBTVMuV0lEVEgtMSkrMSxcclxuICAgICAgICAgICAgeSA6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFRBQkxFX1BBUkFNUy5IRUlHSFQtMSkrMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGD0L/RgNCw0LLQu9C10L3QuNGPXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfaW5pdE5hdmlnYXRpb24oKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLlNuYWtlKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goZS5rZXlDb2RlIHx8IGUud2hpY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEtFWVMuVVAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLlNuYWtlLmlzTW92ZUhvcmlzb250YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU25ha2UubW92ZVRvID0gU05BS0VfTU9WRS5UT1A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBLRVlTLkxFRlQgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5TbmFrZS5pc01vdmVWZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TbmFrZS5tb3ZlVG8gPSBTTkFLRV9NT1ZFLkxFRlQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBLRVlTLlJJR0hUIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5TbmFrZS5pc01vdmVWZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TbmFrZS5tb3ZlVG8gPSBTTkFLRV9NT1ZFLlJJR0hUO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgS0VZUy5ET1dOICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuU25ha2UuaXNNb3ZlSG9yaXNvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TbmFrZS5tb3ZlVG8gPSBTTkFLRV9NT1ZFLkJPVFRPTTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQp9C40YHRgtC40YIg0LrQvtC90YLQtdC50L3QtdGAINGBINC00L7QsdGL0YfQtdC5XHJcbiAgICAgKi9cclxuICAgIGNsZWFyRm9vZENvbnRhaW5lcigpIHtcclxuICAgICAgICB0aGlzLmZvb2RDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVNwbGFzaCgpIHtcclxuICAgICAgICB0aGlzLnNwbGFzaC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dTcGxhc2goKSB7XHJcbiAgICAgICAgdGhpcy5zcGxhc2gyLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBzaG93U3BsYXNoMigpIHtcclxuICAgICAgICB0aGlzLnNwbGFzaDIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH1cclxuXHJcbiAgICBoaWRlU3BsYXNoMigpIHtcclxuICAgICAgICB0aGlzLnNwbGFzaDIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlYXNlU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZSsrO1xyXG4gICAgICAgIHRoaXMucmVuZGVyU2NvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcmVTY29yZSgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlMS5pbm5lckhUTUwgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmUyLmlubmVySFRNTCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyU2NvcmUoKSB7XHJcbiAgICAgICAgdGhpcy5zY29yZTEuaW5uZXJIVE1MID0gdGhpcy5zY29yZTtcclxuICAgICAgICB0aGlzLnNjb3JlMi5pbm5lckhUTUwgPSB0aGlzLnNjb3JlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubmV3IEFwcCgpOyJdfQ==
