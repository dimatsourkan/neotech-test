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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXENvbXBvbmVudHNcXEZvb2QuanMiLCJzcmNcXENvbXBvbmVudHNcXFBvaW50LmpzIiwic3JjXFxDb21wb25lbnRzXFxTbmFrZS5qcyIsInNyY1xcQ29tcG9uZW50c1xcVGFibGUuanMiLCJzcmNcXFNldHRpbmdzLmpzIiwic3JjXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNHQTs7Ozs7OytlQUhBOzs7OztJQU1hLEksV0FBQSxJOzs7QUFFVCxrQkFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQjtBQUFBOztBQUFBLDJHQUNSLENBRFEsRUFDTCxDQURLO0FBRWpCOzs7Ozs7Ozs7Ozs7O3FqQkNWTDs7Ozs7QUFHSTs7OztJQUVTLEssV0FBQSxLO0FBRVQsbUJBQVksQ0FBWixFQUFlLENBQWYsRUFBa0I7QUFBQTs7QUFDZCxhQUFLLENBQUwsR0FBUyxDQUFUO0FBQ0EsYUFBSyxDQUFMLEdBQVMsQ0FBVDtBQUNBLGFBQUssUUFBTCxHQUFnQixTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQSxhQUFLLG1CQUFMO0FBQ0g7Ozs7OENBRXFCO0FBQ2xCLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLEtBQXBCLEdBQWlDLHVCQUFXLElBQTVDO0FBQ0EsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsTUFBcEIsR0FBaUMsdUJBQVcsSUFBNUM7QUFDQSxpQkFBSyxRQUFMLENBQWMsS0FBZCxDQUFvQixJQUFwQixHQUFpQyxLQUFLLENBQUwsMEJBQWtCLElBQW5EO0FBQ0EsaUJBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsR0FBcEIsR0FBaUMsS0FBSyxDQUFMLDBCQUFrQixJQUFuRDtBQUNBLGlCQUFLLFFBQUwsQ0FBYyxLQUFkLENBQW9CLFVBQXBCLEdBQWlDLEtBQUssVUFBdEM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7cWpCQ3BCTDs7Ozs7QUFH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SDs7O3NDQUVhO0FBQ1YsaUJBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsT0FBbkIsR0FBNkIsTUFBN0I7QUFDSDs7O3NDQUVhO0FBQ1YsaUJBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsT0FBbkIsR0FBNkIsRUFBN0I7QUFDSDs7O3dDQUVlO0FBQ1osaUJBQUssS0FBTDtBQUNBLGlCQUFLLFdBQUw7QUFDSDs7O3NDQUVhO0FBQ1YsaUJBQUssS0FBTCxHQUFhLENBQWI7QUFDQSxpQkFBSyxNQUFMLENBQVksU0FBWixHQUF3QixDQUF4QjtBQUNBLGlCQUFLLE1BQUwsQ0FBWSxTQUFaLEdBQXdCLENBQXhCO0FBQ0g7OztzQ0FFYTtBQUNWLGlCQUFLLE1BQUwsQ0FBWSxTQUFaLEdBQXdCLEtBQUssS0FBN0I7QUFDQSxpQkFBSyxNQUFMLENBQVksU0FBWixHQUF3QixLQUFLLEtBQTdCO0FBQ0g7Ozs7OztBQUlMLElBQUksR0FBSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuICogQ3JlYXRlZCBieSDQlNC80LjRgtGA0LjQuSBvbiAwNy4wNy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4vUG9pbnRcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRm9vZCBleHRlbmRzIFBvaW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSk7XHJcbiAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkg0JTQvNC40YLRgNC40Lkgb24gMDcuMDcuMjAxNy5cclxuICovXHJcbiAgICBpbXBvcnQge1BPSU5UX1NJWkV9IGZyb20gXCIuLi9TZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLl9pbml0U25ha2VEb3RTdHlsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBfaW5pdFNuYWtlRG90U3R5bGVzKCkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuc3R5bGUud2lkdGggICAgICA9IFBPSU5UX1NJWkUrJ3B4JztcclxuICAgICAgICB0aGlzLiRlbGVtZW50LnN0eWxlLmhlaWdodCAgICAgPSBQT0lOVF9TSVpFKydweCc7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5zdHlsZS5sZWZ0ICAgICAgID0gdGhpcy54KlBPSU5UX1NJWkUrJ3B4JztcclxuICAgICAgICB0aGlzLiRlbGVtZW50LnN0eWxlLnRvcCAgICAgICAgPSB0aGlzLnkqUE9JTlRfU0laRSsncHgnO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuYmFja2dyb3VuZDtcclxuICAgIH1cclxuXHJcbn0iLCIvKipcclxuICogQ3JlYXRlZCBieSDQlNC80LjRgtGA0LjQuSBvbiAwNy4wNy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtTTkFLRV9NT1ZFLCBNT1ZFX0lOVEVSVkFMLCBUQUJMRV9QQVJBTVMsIFNOQUtFX0NPTE9SfSBmcm9tIFwiLi4vU2V0dGluZ3NcIjtcclxuaW1wb3J0IHtQb2ludH0gZnJvbSAnLi9Qb2ludCc7XHJcblxyXG5leHBvcnQgY2xhc3MgU25ha2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2VuYWJsZURpcmVjdGlvbkVkaXQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudGltZWludGVydmFsID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNuYWtlICAgICAgICA9IFtdO1xyXG4gICAgICAgIHRoaXMuX21vdmVUbyAgICAgID0gU05BS0VfTU9WRS5CT1RUT007XHJcbiAgICAgICAgdGhpcy5zbmFrZUhlYWQgICAgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJHNuYWtlICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NuYWtlJyk7XHJcbiAgICAgICAgdGhpcy5fb25Nb3ZlU25ha2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2luaXRTbmFrZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0L3QsNC/0YDQsNCy0LvQtdC90LjQtSDQtNCy0LjQttC10L3QuNGPINC30LzQtdC4XHJcbiAgICAgKiBAcGFyYW0gbW92ZVRvXHJcbiAgICAgKi9cclxuICAgIHNldCBtb3ZlVG8obW92ZVRvKSB7XHJcbiAgICAgICAgaWYodGhpcy5fZW5hYmxlRGlyZWN0aW9uRWRpdCkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb3ZlVG8gPSBtb3ZlVG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2VuYWJsZURpcmVjdGlvbkVkaXQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC+0LHRitC10LrRgtCwINC30LzQtdC4XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfaW5pdFNuYWtlKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U25ha2VEb3QoVEFCTEVfUEFSQU1TLldJRFRILzIsIFRBQkxFX1BBUkFNUy5IRUlHSFQvMik7XHJcbiAgICAgICAgdGhpcy5zZXRTbmFrZURvdChUQUJMRV9QQVJBTVMuV0lEVEgvMiwgVEFCTEVfUEFSQU1TLkhFSUdIVC8yKzEpO1xyXG4gICAgICAgIHRoaXMuc2V0U25ha2VEb3QoVEFCTEVfUEFSQU1TLldJRFRILzIsIFRBQkxFX1BBUkFNUy5IRUlHSFQvMisyKTtcclxuICAgICAgICB0aGlzLnJlbmRlclNuYWtlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQo9GB0YLQsNC90LDQstC70LjQstCw0LXRgiDRgtC+0YfQutGDINCyINC+0LHRitC10LrRgiDQt9C80LXQuFxyXG4gICAgICogQHBhcmFtIHggLSDQmtC+0L7RgNC00LjQvdCw0YLQsCDQv9C+INC+0YHQuCDQpVxyXG4gICAgICogQHBhcmFtIHkgLSDQutC+0L7RgNC00LjQvdCw0YLQsCDQv9C+INC+0YHQuCBZXHJcbiAgICAgKi9cclxuICAgIHNldFNuYWtlRG90KHggPSAwLCB5ID0gMCkge1xyXG4gICAgICAgIGxldCBkb3QgPSBuZXcgUG9pbnQoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5zbmFrZS5wdXNoKGRvdCk7XHJcbiAgICAgICAgdGhpcy5zbmFrZUhlYWQgPSBkb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQndCw0YfQsNGC0Ywg0LTQstC40LbQtdC90LjQtSDQt9C80LXQuFxyXG4gICAgICovXHJcbiAgICBzdGFydE1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy50aW1laW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZVNuYWtlKCk7XHJcbiAgICAgICAgfSwgTU9WRV9JTlRFUlZBTCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGB0YLQsNC90L7QstC40YLRjCDQtNCy0LjQttC10L3QuNC1INC30LzQtdC4XHJcbiAgICAgKi9cclxuICAgIHN0b3BNb3ZlKCkge1xyXG4gICAgICAgIGlmKHRoaXMudGltZWludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1laW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCh0LTQstC40LPQsNC10YIg0L/QvtC70L7QttC10L3QuNC1INC30LzQtdC4INC90LAg0L7QtNC90YMg0YLQvtGH0LrRg1xyXG4gICAgICovXHJcbiAgICBtb3ZlU25ha2UoKSB7XHJcbiAgICAgICAgdGhpcy5zbmFrZS5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgc3dpdGNoKHRoaXMuX21vdmVUbykge1xyXG4gICAgICAgICAgICBjYXNlIFNOQUtFX01PVkUuVE9QICAgIDogdGhpcy5zZXRTbmFrZURvdCh0aGlzLnNuYWtlSGVhZC54LCB0aGlzLnNuYWtlSGVhZC55LTEpOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTTkFLRV9NT1ZFLkxFRlQgICA6IHRoaXMuc2V0U25ha2VEb3QodGhpcy5zbmFrZUhlYWQueC0xLCB0aGlzLnNuYWtlSGVhZC55KTsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU05BS0VfTU9WRS5SSUdIVCAgOiB0aGlzLnNldFNuYWtlRG90KHRoaXMuc25ha2VIZWFkLngrMSwgdGhpcy5zbmFrZUhlYWQueSk7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNOQUtFX01PVkUuQk9UVE9NIDogdGhpcy5zZXRTbmFrZURvdCh0aGlzLnNuYWtlSGVhZC54LCB0aGlzLnNuYWtlSGVhZC55KzEpOyBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZW5hYmxlRGlyZWN0aW9uRWRpdCA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy5fb25Nb3ZlU25ha2UpIHRoaXMuX29uTW92ZVNuYWtlKHRoaXMuc25ha2VIZWFkLCB0aGlzLnNuYWtlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTbmFrZSgpIHtcclxuICAgICAgICB0aGlzLiRzbmFrZS5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtGA0LjRgdC+0LLQutCwINC30LzQtdC4INC90LAg0YXQvtC70YHRgtC1XHJcbiAgICAgKi9cclxuICAgIHJlbmRlclNuYWtlKCkge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU25ha2UoKTtcclxuICAgICAgICB0aGlzLnNuYWtlLm1hcChkb3QgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRzbmFrZS5hcHBlbmRDaGlsZChkb3QuJGVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/QvtC00L/QuNGB0YvQstCw0LXRgiDQvdCwINC40LfQvNC10L3QtdC90LjQtSDQv9C+0LvQvtC20LXQvdC40Y8g0LfQvNC10LhcclxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBzZXQgb25Nb3ZlU25ha2UoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9vbk1vdmVTbmFrZSA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7RgtC00LDQtdGCIHRydWUg0LXRgdC70Lgg0LfQvNC10Y8g0LTQstC40LbQtdGC0YHRjyDQv9C+INCz0L7RgNC40LfQvtC90YLQsNC70LhcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBnZXQgaXNNb3ZlSG9yaXNvbnRhbCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuX21vdmVUbyA9PT0gU05BS0VfTU9WRS5MRUZUIHx8IHRoaXMuX21vdmVUbyA9PT0gU05BS0VfTU9WRS5SSUdIVCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQntGC0LTQsNC10YIgdHJ1ZSDQtdGB0LvQuCDQt9C80LXRjyDQtNCy0LjQttC10YLRgdGPINC/0L4g0LLQtdGA0YLQuNC60LDQu9C4XHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgZ2V0IGlzTW92ZVZlcnRpY2FsKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fbW92ZVRvID09PSBTTkFLRV9NT1ZFLlRPUCB8fCB0aGlzLl9tb3ZlVG8gPT09IFNOQUtFX01PVkUuQk9UVE9NKTtcclxuICAgIH1cclxuXHJcbn0iLCIvKipcclxuICogQ3JlYXRlZCBieSDQlNC80LjRgtGA0LjQuSBvbiAwNy4wNy4yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHtUQUJMRV9QQVJBTVMsIFBPSU5UX1NJWkV9IGZyb20gXCIuLi9TZXR0aW5nc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsZScpO1xyXG4gICAgICAgIHRoaXMuX2luaXRUYWJsZVN0eWxlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9pbml0VGFibGVTdHlsZXMoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcbiAgICAgICAgdGhpcy50YWJsZS5zdHlsZS53aWR0aCAgICA9IFRBQkxFX1BBUkFNUy5XSURUSCpQT0lOVF9TSVpFKydweCc7XHJcbiAgICAgICAgdGhpcy50YWJsZS5zdHlsZS5oZWlnaHQgICA9IFRBQkxFX1BBUkFNUy5IRUlHSFQqUE9JTlRfU0laRSsncHgnO1xyXG4gICAgfVxyXG5cclxufSIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5INCU0LzQuNGC0YDQuNC5IG9uIDA3LjA3LjIwMTcuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgTU9WRV9JTlRFUlZBTCA9IDEwMDtcclxuZXhwb3J0IGNvbnN0IFBPSU5UX1NJWkUgICAgPSAxMDtcclxuXHJcbmV4cG9ydCBjb25zdCBUQUJMRV9QQVJBTVMgPSB7XHJcbiAgICBXSURUSCA6IDMwLFxyXG4gICAgSEVJR0hUIDogMzBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTTkFLRV9NT1ZFID0ge1xyXG4gICAgVE9QICAgIDogJ3RvcCcsXHJcbiAgICBMRUZUICAgOiAnbGVmdCcsXHJcbiAgICBSSUdIVCAgOiAncmlnaHQnLFxyXG4gICAgQk9UVE9NIDogJ2JvdHRvbSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBLRVlTID0ge1xyXG4gICAgVVAgICAgOiAzOCxcclxuICAgIExFRlQgIDogMzcsXHJcbiAgICBSSUdIVCA6IDM5LFxyXG4gICAgRE9XTiAgOiA0MCxcclxuICAgIEVOVEVSIDogMTMsXHJcbiAgICBFU0MgICA6IDI3XHJcbn07IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkg0JTQvNC40YLRgNC40Lkgb24gMDcuMDcuMjAxNy5cclxuICovXHJcbmltcG9ydCB7VGFibGV9IGZyb20gXCIuL0NvbXBvbmVudHMvVGFibGVcIjtcclxuaW1wb3J0IHtTbmFrZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9TbmFrZVwiO1xyXG5pbXBvcnQge0tFWVMsIFNOQUtFX01PVkUsIFRBQkxFX1BBUkFNU30gZnJvbSBcIi4vU2V0dGluZ3NcIjtcclxuaW1wb3J0IHtGb29kfSBmcm9tIFwiLi9Db21wb25lbnRzL0Zvb2RcIjtcclxuXHJcblxyXG5cclxuY2xhc3MgQXBwIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmZvb2RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9vZC1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLnNwbGFzaCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3BsYXNoc2NyZWVuJyk7XHJcbiAgICAgICAgdGhpcy5zcGxhc2gyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVPdmVyJyk7XHJcbiAgICAgICAgdGhpcy5zY29yZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUtMScpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlLTInKTtcclxuXHJcbiAgICAgICAgdGhpcy5UYWJsZSA9IG5ldyBUYWJsZSgpO1xyXG4gICAgICAgIHRoaXMuU25ha2UgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuRm9vZCAgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLl9pbml0TmF2aWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9ldmVudHMoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2goZS5rZXlDb2RlIHx8IGUud2hpY2gpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgS0VZUy5FTlRFUiA6IHRoaXMuc3RhcnRHYW1lKCk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBLRVlTLkVTQyAgIDogdGhpcy5zdG9wR2FtZSgpOyBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQodGC0LDRgNGC0YPQtdGCINC40LPRgNGDXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0R2FtZSgpIHtcclxuICAgICAgICB0aGlzLnN0b3BHYW1lKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlU3BsYXNoKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlU3BsYXNoMigpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJlU2NvcmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5TbmFrZSA9IG5ldyBTbmFrZSgpO1xyXG4gICAgICAgIHRoaXMuc25ha2VFdmVudHMoKTtcclxuICAgICAgICB0aGlzLlNuYWtlLnN0YXJ0TW92ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEZvb2QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCe0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGCINC40LPRgNGDXHJcbiAgICAgKi9cclxuICAgIHN0b3BHYW1lKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNob3dTcGxhc2gyKCk7XHJcbiAgICAgICAgaWYodGhpcy5TbmFrZSkge1xyXG4gICAgICAgICAgICB0aGlzLlNuYWtlLnN0b3BNb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuU25ha2UucmVtb3ZlU25ha2UoKTtcclxuICAgICAgICAgICAgdGhpcy5TbmFrZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLkZvb2QpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckZvb2RDb250YWluZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5Gb29kICA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0L7QsdGL0YLQuNC5INC30LzQtdC4XHJcbiAgICAgKi9cclxuICAgIHNuYWtlRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuU25ha2Uub25Nb3ZlU25ha2UgPSAoc25ha2VIZWFkLCBzbmFrZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9ucyhzbmFrZUhlYWQsIHNuYWtlKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YIg0LTQvtCx0YvRh9GDINC90LAg0YXQvtC70YHRglxyXG4gICAgICovXHJcbiAgICBzZXRGb29kKCkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJGb29kQ29udGFpbmVyKCk7XHJcblxyXG4gICAgICAgIGxldCBmb29kUG9zID0gdGhpcy5nZXRGb29kUG9zaXRpb24oKTtcclxuICAgICAgICB0aGlzLkZvb2QgICA9IG5ldyBGb29kKGZvb2RQb3MueCwgZm9vZFBvcy55KTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0JXRgdC70Lgg0L/QvtC70YPRh9C10L3QsNGPINGC0L7Rh9C60LAg0L3QsCDRhdC+0LTQuNGC0YHRjyDQvdCwINC60L7QvtGA0LTQuNC90LDRgtCw0YUg0YLQvtGH0LrQuCDQt9C80LXQuCDRgtC+INC/0L7Qu9GD0YfQsNC10Lwg0LTRgNGD0LPRg9GOXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYodGhpcy5jaGVja1NuYWtlQ29sbGlzaW9uKHRoaXMuRm9vZCwgdGhpcy5TbmFrZS5zbmFrZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRGb29kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZvb2RDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5Gb29kLiRlbGVtZW50KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J/RgNC+0LLQtdGA0LrQsCDQstGB0LXRhSDQutC+0LvQu9C40LfQuNC5INC30LzQtdC4XHJcbiAgICAgKiBAcGFyYW0gc25ha2VIZWFkIC0g0LPQvtC70L7QstCwINC30LzQtdC4XHJcbiAgICAgKiBAcGFyYW0gc25ha2UgLSDRgtC+0YfQutC4INC30LzQtdC4XHJcbiAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAqL1xyXG4gICAgY2hlY2tDb2xsaXNpb25zKHNuYWtlSGVhZCwgc25ha2UpIHtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0YLQvtC70LrQvdC+0LLQtdC90LjRjyDQt9C80LXQuCDRgSDRgNCw0LzQutCw0LzQuCDRhdC+0LvRgdGC0LAg0Lgg0L3QsCDQt9Cw0LzQutC90YPRgtGL0Lkg0LrRgNGD0LNcclxuICAgICAgICAgKi9cclxuICAgICAgICBpZih0aGlzLmNoZWNrU25ha2VDb2xsaXNpb24oc25ha2VIZWFkLCBzbmFrZSkgfHwgdGhpcy5jaGVja1NuYWtlVGFibGVDb2xsaXNpb24oc25ha2VIZWFkKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdG9wR2FtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0J/RgNC+0LLQtdGA0LrQsCDQvdCwINGB0YLQvtC70LrQvdC+0LLQtdC90LjQtSDQt9C80LXQuCDRgSDQtdC00L7QuVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tTbmFrZUNvbGxpc2lvbih0aGlzLkZvb2QsIHNuYWtlKSkge1xyXG4gICAgICAgICAgICB0aGlzLlNuYWtlLnNldFNuYWtlRG90KHRoaXMuRm9vZC54LCB0aGlzLkZvb2QueSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5jcmVhc2VTY29yZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZvb2QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuU25ha2UucmVuZGVyU25ha2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtCy0LXRgNC60LAg0L3QsCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40Y8g0LfQvNC10Lgg0YEg0YDQsNC80LrQsNC80Lgg0YXQvtC70YHRgtCwXHJcbiAgICAgKiBAcGFyYW0gc25ha2VIZWFkIC0g0LPQvtC70L7QstCwINC30LzQtdC4XHJcbiAgICAgKi9cclxuICAgIGNoZWNrU25ha2VUYWJsZUNvbGxpc2lvbihzbmFrZUhlYWQpIHtcclxuICAgICAgICBpZighdGhpcy5TbmFrZSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZihcclxuICAgICAgICAgICAgc25ha2VIZWFkLnggPCAwIHx8XHJcbiAgICAgICAgICAgIHNuYWtlSGVhZC55IDwgMCB8fFxyXG4gICAgICAgICAgICBzbmFrZUhlYWQueCA+PSBUQUJMRV9QQVJBTVMuV0lEVEggfHxcclxuICAgICAgICAgICAgc25ha2VIZWFkLnkgPj0gVEFCTEVfUEFSQU1TLkhFSUdIVClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQvtCy0LXRgNC60LAg0L3QsCDRgdGC0L7Qu9C60L3QvtCy0LXQvdC40Y8g0LrQsNC60L7QuSDQu9C40LHQviDRgtC+0YfQutC4INGBINC30LzQtdGR0LlcclxuICAgICAqIEBwYXJhbSBwb2ludCAtINGC0L7Rh9C60LBcclxuICAgICAqIEBwYXJhbSBzbmFrZSAtINGC0L7Rh9C60Lgg0LfQvNC10LhcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBjaGVja1NuYWtlQ29sbGlzaW9uKHBvaW50LCBzbmFrZSkge1xyXG4gICAgICAgIGlmKCFwb2ludCB8fCAhc25ha2UpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgIGZvcihsZXQgc1BvaW50IG9mIHNuYWtlKSB7XHJcbiAgICAgICAgICAgIGlmKHBvaW50LiRlbGVtZW50ICE9PSBzUG9pbnQuJGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmKHNQb2ludC54ID09PSBwb2ludC54ICYmIHNQb2ludC55ID09PSBwb2ludC55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0J7RgtC00LDQtdGCINGA0LDQvdC00L7QvNC90YvQtSDRgtC+0YfQutC4INC00LvRjyDRgNCw0YHQv9C+0LvQvtC20LXQvdC40Y8g0LTQvtCx0YvRh9C4XHJcbiAgICAgKiBAcmV0dXJucyB7e3g6IG51bWJlciwgeTogbnVtYmVyfX1cclxuICAgICAqL1xyXG4gICAgZ2V0Rm9vZFBvc2l0aW9uKHNuYWtlKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgeCA6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIFRBQkxFX1BBUkFNUy5XSURUSC0xKSsxLFxyXG4gICAgICAgICAgICB5IDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogVEFCTEVfUEFSQU1TLkhFSUdIVC0xKSsxXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YPQv9GA0LDQstC70LXQvdC40Y9cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9pbml0TmF2aWdhdGlvbigpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuU25ha2UpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaChlLmtleUNvZGUgfHwgZS53aGljaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgS0VZUy5VUCAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuU25ha2UuaXNNb3ZlSG9yaXNvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TbmFrZS5tb3ZlVG8gPSBTTkFLRV9NT1ZFLlRPUDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEtFWVMuTEVGVCAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLlNuYWtlLmlzTW92ZVZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNuYWtlLm1vdmVUbyA9IFNOQUtFX01PVkUuTEVGVDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIEtFWVMuUklHSFQgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLlNuYWtlLmlzTW92ZVZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNuYWtlLm1vdmVUbyA9IFNOQUtFX01PVkUuUklHSFQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBLRVlTLkRPV04gIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5TbmFrZS5pc01vdmVIb3Jpc29udGFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNuYWtlLm1vdmVUbyA9IFNOQUtFX01PVkUuQk9UVE9NO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCn0LjRgdGC0LjRgiDQutC+0L3RgtC10LnQvdC10YAg0YEg0LTQvtCx0YvRh9C10LlcclxuICAgICAqL1xyXG4gICAgY2xlYXJGb29kQ29udGFpbmVyKCkge1xyXG4gICAgICAgIHRoaXMuZm9vZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBoaWRlU3BsYXNoKCkge1xyXG4gICAgICAgIHRoaXMuc3BsYXNoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NwbGFzaCgpIHtcclxuICAgICAgICB0aGlzLnNwbGFzaDIuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dTcGxhc2gyKCkge1xyXG4gICAgICAgIHRoaXMuc3BsYXNoMi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGVTcGxhc2gyKCkge1xyXG4gICAgICAgIHRoaXMuc3BsYXNoMi5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jcmVhc2VTY29yZSgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlKys7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJTY29yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyZVNjb3JlKCkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmUxLmlubmVySFRNTCA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZTIuaW5uZXJIVE1MID0gMDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTY29yZSgpIHtcclxuICAgICAgICB0aGlzLnNjb3JlMS5pbm5lckhUTUwgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIHRoaXMuc2NvcmUyLmlubmVySFRNTCA9IHRoaXMuc2NvcmU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5uZXcgQXBwKCk7Il19
