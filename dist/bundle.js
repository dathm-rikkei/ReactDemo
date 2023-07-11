
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (React, ReactDOM) {
  'use strict';

  function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);
  var ReactDOM__namespace = /*#__PURE__*/_interopNamespaceDefault(ReactDOM);

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$6 = "div.itemStyle { \r\n    color: brown; \r\n    font-size: 14px; \r\n }";
  styleInject(css_248z$6);

  var css_248z$5 = "div.ExpenseEntryItem-module_itemStyle__6uDwr {\r\n    color: red; \r\n    font-size: 14px; \r\n }";
  styleInject(css_248z$5);

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf$1(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf$1(o, p) {
    _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf$1(o, p);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized$1(self);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
        result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  /*#__PURE__*/(function (_React$Component) {
    _inherits(FormattedMoney, _React$Component);
    var _super = _createSuper(FormattedMoney);
    function FormattedMoney(props) {
      _classCallCheck(this, FormattedMoney);
      return _super.call(this, props);
    }
    _createClass(FormattedMoney, [{
      key: "format",
      value: function format(amount) {
        return parseFloat(amount).toFixed(2);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("span", null, this.format(this.props.value));
      }
    }]);
    return FormattedMoney;
  })(React.Component);

  /*#__PURE__*/(function (_React$Component) {
    _inherits(FormattedDate, _React$Component);
    var _super = _createSuper(FormattedDate);
    function FormattedDate(props) {
      _classCallCheck(this, FormattedDate);
      return _super.call(this, props);
    }
    _createClass(FormattedDate, [{
      key: "format",
      value: function format(val) {
        var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        var parsed_date = new Date(Date.parse(val));
        var formatted_date = parsed_date.getDate() + "-" + months[parsed_date.getMonth()] + "-" + parsed_date.getFullYear();
        return formatted_date;
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("span", null, this.format(this.props.value));
      }
    }]);
    return FormattedDate;
  })(React.Component);

  var css_248z$4 = "html {\r\n    font-family: sans-serif;\r\n  }\r\n  table {\r\n     border-collapse: collapse;\r\n     border: 2px solid rgb(200,200,200);\r\n     letter-spacing: 1px;\r\n     font-size: 0.8rem;\r\n  }\r\n  td, th {\r\n     border: 1px solid rgb(190,190,190);\r\n     padding: 10px 20px;\r\n  }\r\n  th {\r\n     background-color: rgb(235,235,235);\r\n  }\r\n  td, th {\r\n     text-align: left;\r\n  }\r\n  tr:nth-child(even) td {\r\n     background-color: rgb(250,250,250);\r\n  }\r\n  tr:nth-child(odd) td {\r\n     background-color: rgb(245,245,245);\r\n  }\r\n  caption {\r\n     padding: 10px;\r\n  }\r\n  tr.highlight td { \r\n    background-color: #a6a8bd; \r\n }";
  styleInject(css_248z$4);

  var ExpenseEntryItemList = /*#__PURE__*/function (_React$Component) {
    _inherits(ExpenseEntryItemList, _React$Component);
    var _super = _createSuper(ExpenseEntryItemList);
    function ExpenseEntryItemList(props) {
      var _this;
      _classCallCheck(this, ExpenseEntryItemList);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized$1(_this), "handleDelete", function (id, e) {
        console.log(id);
        _this.props.onClick(id, e);
      });
      _this.state = {
        items: _this.props.items
      };
      _this.handleMouseEnter = _this.handleMouseEnter.bind();
      _this.handleMouseLeave = _this.handleMouseLeave.bind();
      _this.handleMouseOver = _this.handleMouseOver.bind();
      return _this;
    }
    _createClass(ExpenseEntryItemList, [{
      key: "handleMouseEnter",
      value: function handleMouseEnter(e) {
        e.target.parentNode.classList.add("highlight");
      }
    }, {
      key: "handleMouseLeave",
      value: function handleMouseLeave(e) {
        e.target.parentNode.classList.remove("highlight");
      }
    }, {
      key: "handleMouseOver",
      value: function handleMouseOver(e) {
        console.log("The mouse is at (" + e.clientX + ", " + e.clientY + ")");
      }
    }, {
      key: "getTotal",
      value: function getTotal() {
        var total = 0;
        for (var i = 0; i < ((_this$state$items = this.state.items) === null || _this$state$items === void 0 ? void 0 : _this$state$items.length); i++) {
          var _this$state$items;
          total += this.state.items[i].amount;
        }
        return total;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state$items2,
          _this2 = this;
        var lists = (_this$state$items2 = this.state.items) === null || _this$state$items2 === void 0 ? void 0 : _this$state$items2.map(function (item) {
          return /*#__PURE__*/React.createElement("tr", {
            key: item.id,
            onMouseEnter: _this2.handleMouseEnter,
            onMouseLeave: _this2.handleMouseLeave
          }, /*#__PURE__*/React.createElement("td", null, item.name), /*#__PURE__*/React.createElement("td", null, item.amount), /*#__PURE__*/React.createElement("td", null, new Date(item.spendDate).toDateString()), /*#__PURE__*/React.createElement("td", null, item.category), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
            href: "#",
            onClick: function onClick(e) {
              return _this2.handleDelete(item.id, e);
            }
          }, "Remove")));
        });
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", {
          onMouseOver: this.handleMouseOver
        }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Item"), /*#__PURE__*/React.createElement("th", null, "Amount"), /*#__PURE__*/React.createElement("th", null, "Date"), /*#__PURE__*/React.createElement("th", null, "Category"), /*#__PURE__*/React.createElement("th", null, "Remove"))), /*#__PURE__*/React.createElement("tbody", null, lists, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
          colSpan: "1",
          style: {
            textAlign: "right"
          }
        }, "Total Amount"), /*#__PURE__*/React.createElement("td", {
          colSpan: "4",
          style: {
            textAlign: "left"
          }
        }, this.getTotal())))));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var newState = {
          items: props.items
        };
        return newState;
      }
    }]);
    return ExpenseEntryItemList;
  }(React.Component);

  var css_248z$3 = "a{\r\n    text-decoration: none;\r\n }\r\n p, li, a{\r\n    font-size: 12px;\r\n } \r\n .container{\r\n    width: 720px;\r\n    max-width: 340px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    text-align: center;\r\n }\r\n .pagination{\r\n    padding: 14px 0;\r\n }\r\n .pagination ul{\r\n    margin: 0 auto; \r\n    padding: 0;\r\n    list-style-type: none;\r\n    text-align: left;\r\n }\r\n .pagination a{\r\n    display: inline-block;\r\n    padding: 10px 18px;\r\n    color: #222;\r\n }\r\n .p1 a{\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    padding: 0;\r\n    text-align: center;\r\n }\r\n .p1 a.is-active{\r\n    background-color: #887cb8;\r\n    border-radius: 25%;\r\n    color: #fff;\r\n }";
  styleInject(css_248z$3);

  var Pager = /*#__PURE__*/function (_React$Component) {
    _inherits(Pager, _React$Component);
    var _super = _createSuper(Pager);
    function Pager(props) {
      var _this;
      _classCallCheck(this, Pager);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized$1(_this), "handleDelete", function (id, e) {
        e.preventDefault();
        _this.deleteRemoteItem(id);
      });
      _this.state = _defineProperty({
        items: [],
        isLoaded: false,
        pageCount: 3,
        filteredItems: [],
        currentPage: 1,
        totalPages: 1
      }, "pageCount", 3);
      return _this;
    }
    _createClass(Pager, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.fetchRemoteItems();
      }
    }, {
      key: "setItems",
      value: function setItems(remoteItems) {
        var items = [];
        remoteItems.forEach(function (item) {
          var newItem = {
            id: item._id,
            name: item.name,
            amount: item.amount,
            spendDate: item.spendDate,
            category: item.category
          };
          items.push(newItem);
        });
        this.setState({
          items: items,
          isLoaded: true
        });
        this.calculate(this.state, 1);
      }
    }, {
      key: "fetchRemoteItems",
      value: function fetchRemoteItems() {
        var _this2 = this;
        fetch("http://localhost:8000/api/expenses").then(function (res) {
          return res.json();
        }).then(function (result) {
          _this2.setItems(result);
          console.log(_this2.state);
        }, function (error) {
          _this2.setState({
            isLoaded: false,
            error: error
          });
        });
      }
    }, {
      key: "deleteRemoteItem",
      value: function deleteRemoteItem(id) {
        var _this3 = this;
        fetch('http://localhost:8000/api/expense/' + id, {
          method: 'DELETE'
        }).then(function (res) {
          return res.json();
        }).then(function () {
          _this3.fetchRemoteItems();
        });
      }
    }, {
      key: "calculate",
      value: function calculate(state, pageNo) {
        var currentPage = pageNo;
        var totalPages = Math.ceil(state.items.length / state.pageCount);
        if (currentPage > totalPages) currentPage = totalPages;
        var first = (currentPage - 1) * state.pageCount;
        var last = first + state.pageCount;
        var filteredItems = state.items.slice(first, last);
        this.setState({
          items: state.items,
          filteredItems: filteredItems,
          currentPage: currentPage,
          totalPages: totalPages,
          pageCount: state.pageCount
        });
      }
    }, {
      key: "handleClick",
      value: function handleClick(pageNo, e) {
        var _this4 = this;
        e.preventDefault();
        this.setState(function (state, props) {
          return _this4.calculate(state, pageNo);
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this;
        var pageArray = new Array();
        var i = 1;
        for (i = 1; i <= this.state.totalPages; i++) pageArray.push(i);
        var pages = pageArray.map(function (idx) {
          return /*#__PURE__*/React.createElement("a", {
            href: "#",
            key: idx,
            onClick: _this5.handleClick.bind(_this5, idx),
            className: idx == _this5.state.currentPage ? "is-active" : ""
          }, /*#__PURE__*/React.createElement("li", null, idx));
        });
        var propsToPass = {
          items: this.state.filteredItems,
          deleteHandler: this.handleDelete
        };
        return /*#__PURE__*/React.createElement("div", {
          className: "container"
        }, this.props.render(propsToPass), /*#__PURE__*/React.createElement("div", {
          style: {
            width: 720,
            margin: 0
          }
        }, /*#__PURE__*/React.createElement("div", {
          "class": "container"
        }, /*#__PURE__*/React.createElement("div", {
          className: "pagination p1"
        }, /*#__PURE__*/React.createElement("ul", null, this.state.currentPage != 1 ? /*#__PURE__*/React.createElement("a", {
          href: "#",
          onClick: this.handleClick.bind(this, this.state.currentPage - 1)
        }, /*#__PURE__*/React.createElement("li", null, "Pre")) : /*#__PURE__*/React.createElement("span", null, " "), pages, this.state.currentPage != this.state.totalPages ? /*#__PURE__*/React.createElement("a", {
          href: "#",
          onClick: this.handleClick.bind(this, this.state.currentPage + 1)
        }, /*#__PURE__*/React.createElement("li", null, "Next")) : /*#__PURE__*/React.createElement("span", null, " "))))));
      }
    }]);
    return Pager;
  }(React.Component);

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var propTypes = {exports: {}};

  var reactIs$1 = {exports: {}};

  var reactIs_production_min$1 = {};

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactIs_production_min$1;

  function requireReactIs_production_min$1 () {
  	if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
  	hasRequiredReactIs_production_min$1 = 1;
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
  	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
  	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min$1.AsyncMode=l;reactIs_production_min$1.ConcurrentMode=m;reactIs_production_min$1.ContextConsumer=k;reactIs_production_min$1.ContextProvider=h;reactIs_production_min$1.Element=c;reactIs_production_min$1.ForwardRef=n;reactIs_production_min$1.Fragment=e;reactIs_production_min$1.Lazy=t;reactIs_production_min$1.Memo=r;reactIs_production_min$1.Portal=d;
  	reactIs_production_min$1.Profiler=g;reactIs_production_min$1.StrictMode=f;reactIs_production_min$1.Suspense=p;reactIs_production_min$1.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min$1.isConcurrentMode=A;reactIs_production_min$1.isContextConsumer=function(a){return z(a)===k};reactIs_production_min$1.isContextProvider=function(a){return z(a)===h};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min$1.isForwardRef=function(a){return z(a)===n};reactIs_production_min$1.isFragment=function(a){return z(a)===e};reactIs_production_min$1.isLazy=function(a){return z(a)===t};
  	reactIs_production_min$1.isMemo=function(a){return z(a)===r};reactIs_production_min$1.isPortal=function(a){return z(a)===d};reactIs_production_min$1.isProfiler=function(a){return z(a)===g};reactIs_production_min$1.isStrictMode=function(a){return z(a)===f};reactIs_production_min$1.isSuspense=function(a){return z(a)===p};
  	reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min$1.typeOf=z;
  	return reactIs_production_min$1;
  }

  var hasRequiredReactIs;

  function requireReactIs () {
  	if (hasRequiredReactIs) return reactIs$1.exports;
  	hasRequiredReactIs = 1;

  	{
  	  reactIs$1.exports = requireReactIs_production_min$1();
  	}
  	return reactIs$1.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  var objectAssign;
  var hasRequiredObjectAssign;

  function requireObjectAssign () {
  	if (hasRequiredObjectAssign) return objectAssign;
  	hasRequiredObjectAssign = 1;
  	/* eslint-disable no-unused-vars */
  	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  	var hasOwnProperty = Object.prototype.hasOwnProperty;
  	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  	function toObject(val) {
  		if (val === null || val === undefined) {
  			throw new TypeError('Object.assign cannot be called with null or undefined');
  		}

  		return Object(val);
  	}

  	function shouldUseNative() {
  		try {
  			if (!Object.assign) {
  				return false;
  			}

  			// Detect buggy property enumeration order in older V8 versions.

  			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  			test1[5] = 'de';
  			if (Object.getOwnPropertyNames(test1)[0] === '5') {
  				return false;
  			}

  			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  			var test2 = {};
  			for (var i = 0; i < 10; i++) {
  				test2['_' + String.fromCharCode(i)] = i;
  			}
  			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  				return test2[n];
  			});
  			if (order2.join('') !== '0123456789') {
  				return false;
  			}

  			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  			var test3 = {};
  			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  				test3[letter] = letter;
  			});
  			if (Object.keys(Object.assign({}, test3)).join('') !==
  					'abcdefghijklmnopqrst') {
  				return false;
  			}

  			return true;
  		} catch (err) {
  			// We don't expect any of the above to throw, but better to be safe.
  			return false;
  		}
  	}

  	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  		var from;
  		var to = toObject(target);
  		var symbols;

  		for (var s = 1; s < arguments.length; s++) {
  			from = Object(arguments[s]);

  			for (var key in from) {
  				if (hasOwnProperty.call(from, key)) {
  					to[key] = from[key];
  				}
  			}

  			if (getOwnPropertySymbols) {
  				symbols = getOwnPropertySymbols(from);
  				for (var i = 0; i < symbols.length; i++) {
  					if (propIsEnumerable.call(from, symbols[i])) {
  						to[symbols[i]] = from[symbols[i]];
  					}
  				}
  			}
  		}

  		return to;
  	};
  	return objectAssign;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret_1;
  var hasRequiredReactPropTypesSecret;

  function requireReactPropTypesSecret () {
  	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  	hasRequiredReactPropTypesSecret = 1;

  	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  	ReactPropTypesSecret_1 = ReactPropTypesSecret;
  	return ReactPropTypesSecret_1;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var factoryWithThrowingShims;
  var hasRequiredFactoryWithThrowingShims;

  function requireFactoryWithThrowingShims () {
  	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  	hasRequiredFactoryWithThrowingShims = 1;

  	var ReactPropTypesSecret = requireReactPropTypesSecret();

  	function emptyFunction() {}
  	function emptyFunctionWithReset() {}
  	emptyFunctionWithReset.resetWarningCache = emptyFunction;

  	factoryWithThrowingShims = function() {
  	  function shim(props, propName, componentName, location, propFullName, secret) {
  	    if (secret === ReactPropTypesSecret) {
  	      // It is still safe when called from React.
  	      return;
  	    }
  	    var err = new Error(
  	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
  	      'Use PropTypes.checkPropTypes() to call them. ' +
  	      'Read more at http://fb.me/use-check-prop-types'
  	    );
  	    err.name = 'Invariant Violation';
  	    throw err;
  	  }	  shim.isRequired = shim;
  	  function getShim() {
  	    return shim;
  	  }	  // Important!
  	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  	  var ReactPropTypes = {
  	    array: shim,
  	    bigint: shim,
  	    bool: shim,
  	    func: shim,
  	    number: shim,
  	    object: shim,
  	    string: shim,
  	    symbol: shim,

  	    any: shim,
  	    arrayOf: getShim,
  	    element: shim,
  	    elementType: shim,
  	    instanceOf: getShim,
  	    node: shim,
  	    objectOf: getShim,
  	    oneOf: getShim,
  	    oneOfType: getShim,
  	    shape: getShim,
  	    exact: getShim,

  	    checkPropTypes: emptyFunctionWithReset,
  	    resetWarningCache: emptyFunction
  	  };

  	  ReactPropTypes.PropTypes = ReactPropTypes;

  	  return ReactPropTypes;
  	};
  	return factoryWithThrowingShims;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes.exports = requireFactoryWithThrowingShims()();
  }

  var propTypesExports = propTypes.exports;
  var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  function isAbsolute(pathname) {
    return pathname.charAt(0) === '/';
  }

  // About 1.5x faster than the two-arg version of Array#splice()
  function spliceOne(list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
      list[i] = list[k];
    }

    list.pop();
  }

  // This implementation is based heavily on node's url.parse
  function resolvePathname(to, from) {
    if (from === undefined) from = '';

    var toParts = (to && to.split('/')) || [];
    var fromParts = (from && from.split('/')) || [];

    var isToAbs = to && isAbsolute(to);
    var isFromAbs = from && isAbsolute(from);
    var mustEndAbs = isToAbs || isFromAbs;

    if (to && isAbsolute(to)) {
      // to is absolute
      fromParts = toParts;
    } else if (toParts.length) {
      // to is relative, drop the filename
      fromParts.pop();
      fromParts = fromParts.concat(toParts);
    }

    if (!fromParts.length) return '/';

    var hasTrailingSlash;
    if (fromParts.length) {
      var last = fromParts[fromParts.length - 1];
      hasTrailingSlash = last === '.' || last === '..' || last === '';
    } else {
      hasTrailingSlash = false;
    }

    var up = 0;
    for (var i = fromParts.length; i >= 0; i--) {
      var part = fromParts[i];

      if (part === '.') {
        spliceOne(fromParts, i);
      } else if (part === '..') {
        spliceOne(fromParts, i);
        up++;
      } else if (up) {
        spliceOne(fromParts, i);
        up--;
      }
    }

    if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

    if (
      mustEndAbs &&
      fromParts[0] !== '' &&
      (!fromParts[0] || !isAbsolute(fromParts[0]))
    )
      fromParts.unshift('');

    var result = fromParts.join('/');

    if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

    return result;
  }

  var isProduction = "production" === 'production';
  var prefix$1 = 'Invariant failed';
  function invariant(condition, message) {
      if (condition) {
          return;
      }
      if (isProduction) {
          throw new Error(prefix$1);
      }
      var provided = typeof message === 'function' ? message() : message;
      var value = provided ? "".concat(prefix$1, ": ").concat(provided) : prefix$1;
      throw new Error(value);
  }

  function addLeadingSlash$1(path) {
    return path.charAt(0) === '/' ? path : '/' + path;
  }
  function stripLeadingSlash(path) {
    return path.charAt(0) === '/' ? path.substr(1) : path;
  }
  function hasBasename(path, prefix) {
    return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
  }
  function stripBasename$1(path, prefix) {
    return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
  }
  function stripTrailingSlash(path) {
    return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
  }
  function parsePath(path) {
    var pathname = path || '/';
    var search = '';
    var hash = '';
    var hashIndex = pathname.indexOf('#');

    if (hashIndex !== -1) {
      hash = pathname.substr(hashIndex);
      pathname = pathname.substr(0, hashIndex);
    }

    var searchIndex = pathname.indexOf('?');

    if (searchIndex !== -1) {
      search = pathname.substr(searchIndex);
      pathname = pathname.substr(0, searchIndex);
    }

    return {
      pathname: pathname,
      search: search === '?' ? '' : search,
      hash: hash === '#' ? '' : hash
    };
  }
  function createPath(location) {
    var pathname = location.pathname,
        search = location.search,
        hash = location.hash;
    var path = pathname || '/';
    if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
    if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
    return path;
  }

  function createLocation(path, state, key, currentLocation) {
    var location;

    if (typeof path === 'string') {
      // Two-arg form: push(path, state)
      location = parsePath(path);
      location.state = state;
    } else {
      // One-arg form: push(location)
      location = _extends({}, path);
      if (location.pathname === undefined) location.pathname = '';

      if (location.search) {
        if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
      } else {
        location.search = '';
      }

      if (location.hash) {
        if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
      } else {
        location.hash = '';
      }

      if (state !== undefined && location.state === undefined) location.state = state;
    }

    try {
      location.pathname = decodeURI(location.pathname);
    } catch (e) {
      if (e instanceof URIError) {
        throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
      } else {
        throw e;
      }
    }

    if (key) location.key = key;

    if (currentLocation) {
      // Resolve incomplete/relative pathname relative to current location.
      if (!location.pathname) {
        location.pathname = currentLocation.pathname;
      } else if (location.pathname.charAt(0) !== '/') {
        location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
      }
    } else {
      // When there is no prior location and pathname is empty, set it to /
      if (!location.pathname) {
        location.pathname = '/';
      }
    }

    return location;
  }

  function createTransitionManager() {
    var prompt = null;

    function setPrompt(nextPrompt) {
      prompt = nextPrompt;
      return function () {
        if (prompt === nextPrompt) prompt = null;
      };
    }

    function confirmTransitionTo(location, action, getUserConfirmation, callback) {
      // TODO: If another transition starts while we're still confirming
      // the previous one, we may end up in a weird state. Figure out the
      // best way to handle this.
      if (prompt != null) {
        var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

        if (typeof result === 'string') {
          if (typeof getUserConfirmation === 'function') {
            getUserConfirmation(result, callback);
          } else {
            callback(true);
          }
        } else {
          // Return false from a transition hook to cancel the transition.
          callback(result !== false);
        }
      } else {
        callback(true);
      }
    }

    var listeners = [];

    function appendListener(fn) {
      var isActive = true;

      function listener() {
        if (isActive) fn.apply(void 0, arguments);
      }

      listeners.push(listener);
      return function () {
        isActive = false;
        listeners = listeners.filter(function (item) {
          return item !== listener;
        });
      };
    }

    function notifyListeners() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      listeners.forEach(function (listener) {
        return listener.apply(void 0, args);
      });
    }

    return {
      setPrompt: setPrompt,
      confirmTransitionTo: confirmTransitionTo,
      appendListener: appendListener,
      notifyListeners: notifyListeners
    };
  }

  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  function getConfirmation(message, callback) {
    callback(window.confirm(message)); // eslint-disable-line no-alert
  }
  /**
   * Returns true if the HTML5 history API is supported. Taken from Modernizr.
   *
   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
   * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
   */

  function supportsHistory() {
    var ua = window.navigator.userAgent;
    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
    return window.history && 'pushState' in window.history;
  }
  /**
   * Returns true if browser fires popstate on hash change.
   * IE10 and IE11 do not.
   */

  function supportsPopStateOnHashChange() {
    return window.navigator.userAgent.indexOf('Trident') === -1;
  }
  /**
   * Returns false if using go(n) with hash history causes a full page reload.
   */

  function supportsGoWithoutReloadUsingHash() {
    return window.navigator.userAgent.indexOf('Firefox') === -1;
  }
  /**
   * Returns true if a given popstate event is an extraneous WebKit event.
   * Accounts for the fact that Chrome on iOS fires real popstate events
   * containing undefined state when pressing the back button.
   */

  function isExtraneousPopstateEvent(event) {
    return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
  }

  var PopStateEvent = 'popstate';
  var HashChangeEvent = 'hashchange';

  function getHistoryState() {
    try {
      return window.history.state || {};
    } catch (e) {
      // IE 11 sometimes throws when accessing window.history.state
      // See https://github.com/ReactTraining/history/pull/289
      return {};
    }
  }
  /**
   * Creates a history object that uses the HTML5 history API including
   * pushState, replaceState, and the popstate event.
   */


  function createBrowserHistory(props) {
    if (props === void 0) {
      props = {};
    }

    !canUseDOM ? invariant(false) : void 0;
    var globalHistory = window.history;
    var canUseHistory = supportsHistory();
    var needsHashChangeListener = !supportsPopStateOnHashChange();
    var _props = props,
        _props$forceRefresh = _props.forceRefresh,
        forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
        _props$getUserConfirm = _props.getUserConfirmation,
        getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
        _props$keyLength = _props.keyLength,
        keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
    var basename = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : '';

    function getDOMLocation(historyState) {
      var _ref = historyState || {},
          key = _ref.key,
          state = _ref.state;

      var _window$location = window.location,
          pathname = _window$location.pathname,
          search = _window$location.search,
          hash = _window$location.hash;
      var path = pathname + search + hash;
      if (basename) path = stripBasename$1(path, basename);
      return createLocation(path, state, key);
    }

    function createKey() {
      return Math.random().toString(36).substr(2, keyLength);
    }

    var transitionManager = createTransitionManager();

    function setState(nextState) {
      _extends(history, nextState);

      history.length = globalHistory.length;
      transitionManager.notifyListeners(history.location, history.action);
    }

    function handlePopState(event) {
      // Ignore extraneous popstate events in WebKit.
      if (isExtraneousPopstateEvent(event)) return;
      handlePop(getDOMLocation(event.state));
    }

    function handleHashChange() {
      handlePop(getDOMLocation(getHistoryState()));
    }

    var forceNextPop = false;

    function handlePop(location) {
      if (forceNextPop) {
        forceNextPop = false;
        setState();
      } else {
        var action = 'POP';
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({
              action: action,
              location: location
            });
          } else {
            revertPop(location);
          }
        });
      }
    }

    function revertPop(fromLocation) {
      var toLocation = history.location; // TODO: We could probably make this more reliable by
      // keeping a list of keys we've seen in sessionStorage.
      // Instead, we just default to 0 for keys we don't know.

      var toIndex = allKeys.indexOf(toLocation.key);
      if (toIndex === -1) toIndex = 0;
      var fromIndex = allKeys.indexOf(fromLocation.key);
      if (fromIndex === -1) fromIndex = 0;
      var delta = toIndex - fromIndex;

      if (delta) {
        forceNextPop = true;
        go(delta);
      }
    }

    var initialLocation = getDOMLocation(getHistoryState());
    var allKeys = [initialLocation.key]; // Public interface

    function createHref(location) {
      return basename + createPath(location);
    }

    function push(path, state) {
      var action = 'PUSH';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var href = createHref(location);
        var key = location.key,
            state = location.state;

        if (canUseHistory) {
          globalHistory.pushState({
            key: key,
            state: state
          }, null, href);

          if (forceRefresh) {
            window.location.href = href;
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);
            var nextKeys = allKeys.slice(0, prevIndex + 1);
            nextKeys.push(location.key);
            allKeys = nextKeys;
            setState({
              action: action,
              location: location
            });
          }
        } else {
          window.location.href = href;
        }
      });
    }

    function replace(path, state) {
      var action = 'REPLACE';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var href = createHref(location);
        var key = location.key,
            state = location.state;

        if (canUseHistory) {
          globalHistory.replaceState({
            key: key,
            state: state
          }, null, href);

          if (forceRefresh) {
            window.location.replace(href);
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);
            if (prevIndex !== -1) allKeys[prevIndex] = location.key;
            setState({
              action: action,
              location: location
            });
          }
        } else {
          window.location.replace(href);
        }
      });
    }

    function go(n) {
      globalHistory.go(n);
    }

    function goBack() {
      go(-1);
    }

    function goForward() {
      go(1);
    }

    var listenerCount = 0;

    function checkDOMListeners(delta) {
      listenerCount += delta;

      if (listenerCount === 1 && delta === 1) {
        window.addEventListener(PopStateEvent, handlePopState);
        if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
      } else if (listenerCount === 0) {
        window.removeEventListener(PopStateEvent, handlePopState);
        if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
      }
    }

    var isBlocked = false;

    function block(prompt) {
      if (prompt === void 0) {
        prompt = false;
      }

      var unblock = transitionManager.setPrompt(prompt);

      if (!isBlocked) {
        checkDOMListeners(1);
        isBlocked = true;
      }

      return function () {
        if (isBlocked) {
          isBlocked = false;
          checkDOMListeners(-1);
        }

        return unblock();
      };
    }

    function listen(listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);
      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    }

    var history = {
      length: globalHistory.length,
      action: 'POP',
      location: initialLocation,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      block: block,
      listen: listen
    };
    return history;
  }

  var HashChangeEvent$1 = 'hashchange';
  var HashPathCoders = {
    hashbang: {
      encodePath: function encodePath(path) {
        return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
      },
      decodePath: function decodePath(path) {
        return path.charAt(0) === '!' ? path.substr(1) : path;
      }
    },
    noslash: {
      encodePath: stripLeadingSlash,
      decodePath: addLeadingSlash$1
    },
    slash: {
      encodePath: addLeadingSlash$1,
      decodePath: addLeadingSlash$1
    }
  };

  function stripHash(url) {
    var hashIndex = url.indexOf('#');
    return hashIndex === -1 ? url : url.slice(0, hashIndex);
  }

  function getHashPath() {
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    var href = window.location.href;
    var hashIndex = href.indexOf('#');
    return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
  }

  function pushHashPath(path) {
    window.location.hash = path;
  }

  function replaceHashPath(path) {
    window.location.replace(stripHash(window.location.href) + '#' + path);
  }

  function createHashHistory(props) {
    if (props === void 0) {
      props = {};
    }

    !canUseDOM ? invariant(false) : void 0;
    var globalHistory = window.history;
    supportsGoWithoutReloadUsingHash();
    var _props = props,
        _props$getUserConfirm = _props.getUserConfirmation,
        getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
        _props$hashType = _props.hashType,
        hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
    var basename = props.basename ? stripTrailingSlash(addLeadingSlash$1(props.basename)) : '';
    var _HashPathCoders$hashT = HashPathCoders[hashType],
        encodePath = _HashPathCoders$hashT.encodePath,
        decodePath = _HashPathCoders$hashT.decodePath;

    function getDOMLocation() {
      var path = decodePath(getHashPath());
      if (basename) path = stripBasename$1(path, basename);
      return createLocation(path);
    }

    var transitionManager = createTransitionManager();

    function setState(nextState) {
      _extends(history, nextState);

      history.length = globalHistory.length;
      transitionManager.notifyListeners(history.location, history.action);
    }

    var forceNextPop = false;
    var ignorePath = null;

    function locationsAreEqual$$1(a, b) {
      return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
    }

    function handleHashChange() {
      var path = getHashPath();
      var encodedPath = encodePath(path);

      if (path !== encodedPath) {
        // Ensure we always have a properly-encoded hash.
        replaceHashPath(encodedPath);
      } else {
        var location = getDOMLocation();
        var prevLocation = history.location;
        if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

        if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

        ignorePath = null;
        handlePop(location);
      }
    }

    function handlePop(location) {
      if (forceNextPop) {
        forceNextPop = false;
        setState();
      } else {
        var action = 'POP';
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({
              action: action,
              location: location
            });
          } else {
            revertPop(location);
          }
        });
      }
    }

    function revertPop(fromLocation) {
      var toLocation = history.location; // TODO: We could probably make this more reliable by
      // keeping a list of paths we've seen in sessionStorage.
      // Instead, we just default to 0 for paths we don't know.

      var toIndex = allPaths.lastIndexOf(createPath(toLocation));
      if (toIndex === -1) toIndex = 0;
      var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
      if (fromIndex === -1) fromIndex = 0;
      var delta = toIndex - fromIndex;

      if (delta) {
        forceNextPop = true;
        go(delta);
      }
    } // Ensure the hash is encoded properly before doing anything else.


    var path = getHashPath();
    var encodedPath = encodePath(path);
    if (path !== encodedPath) replaceHashPath(encodedPath);
    var initialLocation = getDOMLocation();
    var allPaths = [createPath(initialLocation)]; // Public interface

    function createHref(location) {
      var baseTag = document.querySelector('base');
      var href = '';

      if (baseTag && baseTag.getAttribute('href')) {
        href = stripHash(window.location.href);
      }

      return href + '#' + encodePath(basename + createPath(location));
    }

    function push(path, state) {
      var action = 'PUSH';
      var location = createLocation(path, undefined, undefined, history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var path = createPath(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          // We cannot tell if a hashchange was caused by a PUSH, so we'd
          // rather setState here and ignore the hashchange. The caveat here
          // is that other hash histories in the page will consider it a POP.
          ignorePath = path;
          pushHashPath(encodedPath);
          var prevIndex = allPaths.lastIndexOf(createPath(history.location));
          var nextPaths = allPaths.slice(0, prevIndex + 1);
          nextPaths.push(path);
          allPaths = nextPaths;
          setState({
            action: action,
            location: location
          });
        } else {
          setState();
        }
      });
    }

    function replace(path, state) {
      var action = 'REPLACE';
      var location = createLocation(path, undefined, undefined, history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var path = createPath(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          // We cannot tell if a hashchange was caused by a REPLACE, so we'd
          // rather setState here and ignore the hashchange. The caveat here
          // is that other hash histories in the page will consider it a POP.
          ignorePath = path;
          replaceHashPath(encodedPath);
        }

        var prevIndex = allPaths.indexOf(createPath(history.location));
        if (prevIndex !== -1) allPaths[prevIndex] = path;
        setState({
          action: action,
          location: location
        });
      });
    }

    function go(n) {
      globalHistory.go(n);
    }

    function goBack() {
      go(-1);
    }

    function goForward() {
      go(1);
    }

    var listenerCount = 0;

    function checkDOMListeners(delta) {
      listenerCount += delta;

      if (listenerCount === 1 && delta === 1) {
        window.addEventListener(HashChangeEvent$1, handleHashChange);
      } else if (listenerCount === 0) {
        window.removeEventListener(HashChangeEvent$1, handleHashChange);
      }
    }

    var isBlocked = false;

    function block(prompt) {
      if (prompt === void 0) {
        prompt = false;
      }

      var unblock = transitionManager.setPrompt(prompt);

      if (!isBlocked) {
        checkDOMListeners(1);
        isBlocked = true;
      }

      return function () {
        if (isBlocked) {
          isBlocked = false;
          checkDOMListeners(-1);
        }

        return unblock();
      };
    }

    function listen(listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);
      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    }

    var history = {
      length: globalHistory.length,
      action: 'POP',
      location: initialLocation,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      block: block,
      listen: listen
    };
    return history;
  }

  function clamp$1(n, lowerBound, upperBound) {
    return Math.min(Math.max(n, lowerBound), upperBound);
  }
  /**
   * Creates a history object that stores locations in memory.
   */


  function createMemoryHistory(props) {
    if (props === void 0) {
      props = {};
    }

    var _props = props,
        getUserConfirmation = _props.getUserConfirmation,
        _props$initialEntries = _props.initialEntries,
        initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
        _props$initialIndex = _props.initialIndex,
        initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
        _props$keyLength = _props.keyLength,
        keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
    var transitionManager = createTransitionManager();

    function setState(nextState) {
      _extends(history, nextState);

      history.length = history.entries.length;
      transitionManager.notifyListeners(history.location, history.action);
    }

    function createKey() {
      return Math.random().toString(36).substr(2, keyLength);
    }

    var index = clamp$1(initialIndex, 0, initialEntries.length - 1);
    var entries = initialEntries.map(function (entry) {
      return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
    }); // Public interface

    var createHref = createPath;

    function push(path, state) {
      var action = 'PUSH';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        var prevIndex = history.index;
        var nextIndex = prevIndex + 1;
        var nextEntries = history.entries.slice(0);

        if (nextEntries.length > nextIndex) {
          nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
        } else {
          nextEntries.push(location);
        }

        setState({
          action: action,
          location: location,
          index: nextIndex,
          entries: nextEntries
        });
      });
    }

    function replace(path, state) {
      var action = 'REPLACE';
      var location = createLocation(path, state, createKey(), history.location);
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;
        history.entries[history.index] = location;
        setState({
          action: action,
          location: location
        });
      });
    }

    function go(n) {
      var nextIndex = clamp$1(history.index + n, 0, history.entries.length - 1);
      var action = 'POP';
      var location = history.entries[nextIndex];
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location,
            index: nextIndex
          });
        } else {
          // Mimic the behavior of DOM histories by
          // causing a render after a cancelled POP.
          setState();
        }
      });
    }

    function goBack() {
      go(-1);
    }

    function goForward() {
      go(1);
    }

    function canGo(n) {
      var nextIndex = history.index + n;
      return nextIndex >= 0 && nextIndex < history.entries.length;
    }

    function block(prompt) {
      if (prompt === void 0) {
        prompt = false;
      }

      return transitionManager.setPrompt(prompt);
    }

    function listen(listener) {
      return transitionManager.appendListener(listener);
    }

    var history = {
      length: entries.length,
      action: 'POP',
      location: entries[index],
      index: index,
      entries: entries,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      canGo: canGo,
      block: block,
      listen: listen
    };
    return history;
  }

  var MAX_SIGNED_31_BIT_INT = 1073741823;
  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

  function getUniqueId() {
    var key = '__global_unique_id__';
    return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
  }

  function objectIs(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }

  function createEventEmitter(value) {
    var handlers = [];
    return {
      on: function on(handler) {
        handlers.push(handler);
      },
      off: function off(handler) {
        handlers = handlers.filter(function (h) {
          return h !== handler;
        });
      },
      get: function get() {
        return value;
      },
      set: function set(newValue, changedBits) {
        value = newValue;
        handlers.forEach(function (handler) {
          return handler(value, changedBits);
        });
      }
    };
  }

  function onlyChild(children) {
    return Array.isArray(children) ? children[0] : children;
  }

  function createReactContext(defaultValue, calculateChangedBits) {
    var _Provider$childContex, _Consumer$contextType;

    var contextProp = '__create-react-context-' + getUniqueId() + '__';

    var Provider = /*#__PURE__*/function (_Component) {
      _inheritsLoose(Provider, _Component);

      function Provider() {
        var _this;

        _this = _Component.apply(this, arguments) || this;
        _this.emitter = createEventEmitter(_this.props.value);
        return _this;
      }

      var _proto = Provider.prototype;

      _proto.getChildContext = function getChildContext() {
        var _ref;

        return _ref = {}, _ref[contextProp] = this.emitter, _ref;
      };

      _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
          var oldValue = this.props.value;
          var newValue = nextProps.value;
          var changedBits;

          if (objectIs(oldValue, newValue)) {
            changedBits = 0;
          } else {
            changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

            changedBits |= 0;

            if (changedBits !== 0) {
              this.emitter.set(nextProps.value, changedBits);
            }
          }
        }
      };

      _proto.render = function render() {
        return this.props.children;
      };

      return Provider;
    }(React.Component);

    Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = PropTypes.object.isRequired, _Provider$childContex);

    var Consumer = /*#__PURE__*/function (_Component2) {
      _inheritsLoose(Consumer, _Component2);

      function Consumer() {
        var _this2;

        _this2 = _Component2.apply(this, arguments) || this;
        _this2.state = {
          value: _this2.getValue()
        };

        _this2.onUpdate = function (newValue, changedBits) {
          var observedBits = _this2.observedBits | 0;

          if ((observedBits & changedBits) !== 0) {
            _this2.setState({
              value: _this2.getValue()
            });
          }
        };

        return _this2;
      }

      var _proto2 = Consumer.prototype;

      _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var observedBits = nextProps.observedBits;
        this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
      };

      _proto2.componentDidMount = function componentDidMount() {
        if (this.context[contextProp]) {
          this.context[contextProp].on(this.onUpdate);
        }

        var observedBits = this.props.observedBits;
        this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
      };

      _proto2.componentWillUnmount = function componentWillUnmount() {
        if (this.context[contextProp]) {
          this.context[contextProp].off(this.onUpdate);
        }
      };

      _proto2.getValue = function getValue() {
        if (this.context[contextProp]) {
          return this.context[contextProp].get();
        } else {
          return defaultValue;
        }
      };

      _proto2.render = function render() {
        return onlyChild(this.props.children)(this.state.value);
      };

      return Consumer;
    }(React.Component);

    Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = PropTypes.object, _Consumer$contextType);
    return {
      Provider: Provider,
      Consumer: Consumer
    };
  }

  var index = React.createContext || createReactContext;

  var pathToRegexp$2 = {exports: {}};

  var isarray$1 = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };

  var isarray = isarray$1;

  /**
   * Expose `pathToRegexp`.
   */
  pathToRegexp$2.exports = pathToRegexp;
  pathToRegexp$2.exports.parse = parse$1;
  pathToRegexp$2.exports.compile = compile$1;
  pathToRegexp$2.exports.tokensToFunction = tokensToFunction;
  pathToRegexp$2.exports.tokensToRegExp = tokensToRegExp;

  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
    // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
    '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
  ].join('|'), 'g');

  /**
   * Parse a string for the raw tokens.
   *
   * @param  {string}  str
   * @param  {Object=} options
   * @return {!Array}
   */
  function parse$1 (str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var defaultDelimiter = options && options.delimiter || '/';
    var res;

    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0];
      var escaped = res[1];
      var offset = res.index;
      path += str.slice(index, offset);
      index = offset + m.length;

      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1];
        continue
      }

      var next = str[index];
      var prefix = res[2];
      var name = res[3];
      var capture = res[4];
      var group = res[5];
      var modifier = res[6];
      var asterisk = res[7];

      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path);
        path = '';
      }

      var partial = prefix != null && next != null && next !== prefix;
      var repeat = modifier === '+' || modifier === '*';
      var optional = modifier === '?' || modifier === '*';
      var delimiter = res[2] || defaultDelimiter;
      var pattern = capture || group;

      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        partial: partial,
        asterisk: !!asterisk,
        pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
      });
    }

    // Match any characters still remaining.
    if (index < str.length) {
      path += str.substr(index);
    }

    // If the path exists, push it onto the end.
    if (path) {
      tokens.push(path);
    }

    return tokens
  }

  /**
   * Compile a string to a template function for the path.
   *
   * @param  {string}             str
   * @param  {Object=}            options
   * @return {!function(Object=, Object=)}
   */
  function compile$1 (str, options) {
    return tokensToFunction(parse$1(str, options), options)
  }

  /**
   * Prettier encoding of URI path segments.
   *
   * @param  {string}
   * @return {string}
   */
  function encodeURIComponentPretty (str) {
    return encodeURI(str).replace(/[\/?#]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase()
    })
  }

  /**
   * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
   *
   * @param  {string}
   * @return {string}
   */
  function encodeAsterisk (str) {
    return encodeURI(str).replace(/[?#]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase()
    })
  }

  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction (tokens, options) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length);

    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
      }
    }

    return function (obj, opts) {
      var path = '';
      var data = obj || {};
      var options = opts || {};
      var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          path += token;

          continue
        }

        var value = data[token.name];
        var segment;

        if (value == null) {
          if (token.optional) {
            // Prepend partial segment prefixes.
            if (token.partial) {
              path += token.prefix;
            }

            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined')
          }
        }

        if (isarray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
          }

          if (value.length === 0) {
            if (token.optional) {
              continue
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty')
            }
          }

          for (var j = 0; j < value.length; j++) {
            segment = encode(value[j]);

            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
            }

            path += (j === 0 ? token.prefix : token.delimiter) + segment;
          }

          continue
        }

        segment = token.asterisk ? encodeAsterisk(value) : encode(value);

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
        }

        path += token.prefix + segment;
      }

      return path
    }
  }

  /**
   * Escape a regular expression string.
   *
   * @param  {string} str
   * @return {string}
   */
  function escapeString (str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
  }

  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {string} group
   * @return {string}
   */
  function escapeGroup (group) {
    return group.replace(/([=!:$\/()])/g, '\\$1')
  }

  /**
   * Attach the keys as a property of the regexp.
   *
   * @param  {!RegExp} re
   * @param  {Array}   keys
   * @return {!RegExp}
   */
  function attachKeys (re, keys) {
    re.keys = keys;
    return re
  }

  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {string}
   */
  function flags (options) {
    return options && options.sensitive ? '' : 'i'
  }

  /**
   * Pull out keys from a regexp.
   *
   * @param  {!RegExp} path
   * @param  {!Array}  keys
   * @return {!RegExp}
   */
  function regexpToRegexp (path, keys) {
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);

    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          partial: false,
          asterisk: false,
          pattern: null
        });
      }
    }

    return attachKeys(path, keys)
  }

  /**
   * Transform an array into a regexp.
   *
   * @param  {!Array}  path
   * @param  {Array}   keys
   * @param  {!Object} options
   * @return {!RegExp}
   */
  function arrayToRegexp (path, keys, options) {
    var parts = [];

    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source);
    }

    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

    return attachKeys(regexp, keys)
  }

  /**
   * Create a path regexp from string input.
   *
   * @param  {string}  path
   * @param  {!Array}  keys
   * @param  {!Object} options
   * @return {!RegExp}
   */
  function stringToRegexp (path, keys, options) {
    return tokensToRegExp(parse$1(path, options), keys, options)
  }

  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {!Array}          tokens
   * @param  {(Array|Object)=} keys
   * @param  {Object=}         options
   * @return {!RegExp}
   */
  function tokensToRegExp (tokens, keys, options) {
    if (!isarray(keys)) {
      options = /** @type {!Object} */ (keys || options);
      keys = [];
    }

    options = options || {};

    var strict = options.strict;
    var end = options.end !== false;
    var route = '';

    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        route += escapeString(token);
      } else {
        var prefix = escapeString(token.prefix);
        var capture = '(?:' + token.pattern + ')';

        keys.push(token);

        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*';
        }

        if (token.optional) {
          if (!token.partial) {
            capture = '(?:' + prefix + '(' + capture + '))?';
          } else {
            capture = prefix + '(' + capture + ')?';
          }
        } else {
          capture = prefix + '(' + capture + ')';
        }

        route += capture;
      }
    }

    var delimiter = escapeString(options.delimiter || '/');
    var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

    // In non-strict mode we allow a slash at the end of match. If the path to
    // match already ends with a slash, we remove it for consistency. The slash
    // is valid at the end of a path match, not in the middle. This is important
    // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
      route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
    }

    if (end) {
      route += '$';
    } else {
      // In non-ending mode, we need the capturing groups to match as much as
      // possible by using a positive lookahead to the end or next path segment.
      route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
    }

    return attachKeys(new RegExp('^' + route, flags(options)), keys)
  }

  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(string|RegExp|Array)} path
   * @param  {(Array|Object)=}       keys
   * @param  {Object=}               options
   * @return {!RegExp}
   */
  function pathToRegexp (path, keys, options) {
    if (!isarray(keys)) {
      options = /** @type {!Object} */ (keys || options);
      keys = [];
    }

    options = options || {};

    if (path instanceof RegExp) {
      return regexpToRegexp(path, /** @type {!Array} */ (keys))
    }

    if (isarray(path)) {
      return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
    }

    return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
  }

  var pathToRegexpExports = pathToRegexp$2.exports;
  var pathToRegexp$1 = /*@__PURE__*/getDefaultExportFromCjs(pathToRegexpExports);

  requireReactIs();

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }

  var reactIs = requireReactIs();
  var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  };
  var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  // TODO: Replace with React.createContext once we can assume React 16+

  var createNamedContext = function createNamedContext(name) {
    var context = index();
    context.displayName = name;
    return context;
  };

  var historyContext =
  /*#__PURE__*/
  createNamedContext("Router-History");

  // TODO: Replace with React.createContext once we can assume React 16+

  var createNamedContext$1 = function createNamedContext(name) {
    var context = index();
    context.displayName = name;
    return context;
  };

  var context =
  /*#__PURE__*/
  createNamedContext$1("Router");

  /**
   * The public API for putting history on context.
   */

  var Router =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Router, _React$Component);

    Router.computeRootMatch = function computeRootMatch(pathname) {
      return {
        path: "/",
        url: "/",
        params: {},
        isExact: pathname === "/"
      };
    };

    function Router(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        location: props.history.location
      }; // This is a bit of a hack. We have to start listening for location
      // changes here in the constructor in case there are any <Redirect>s
      // on the initial render. If there are, they will replace/push when
      // they mount and since cDM fires in children before parents, we may
      // get a new location before the <Router> is mounted.

      _this._isMounted = false;
      _this._pendingLocation = null;

      if (!props.staticContext) {
        _this.unlisten = props.history.listen(function (location) {
          if (_this._isMounted) {
            _this.setState({
              location: location
            });
          } else {
            _this._pendingLocation = location;
          }
        });
      }

      return _this;
    }

    var _proto = Router.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this._isMounted = true;

      if (this._pendingLocation) {
        this.setState({
          location: this._pendingLocation
        });
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.unlisten) this.unlisten();
    };

    _proto.render = function render() {
      return React.createElement(context.Provider, {
        value: {
          history: this.props.history,
          location: this.state.location,
          match: Router.computeRootMatch(this.state.location.pathname),
          staticContext: this.props.staticContext
        }
      }, React.createElement(historyContext.Provider, {
        children: this.props.children || null,
        value: this.props.history
      }));
    };

    return Router;
  }(React.Component);

  /**
   * The public API for a <Router> that stores location in memory.
   */

  /*#__PURE__*/
  (function (_React$Component) {
    _inheritsLoose(MemoryRouter, _React$Component);

    function MemoryRouter() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.history = createMemoryHistory(_this.props);
      return _this;
    }

    var _proto = MemoryRouter.prototype;

    _proto.render = function render() {
      return React.createElement(Router, {
        history: this.history,
        children: this.props.children
      });
    };

    return MemoryRouter;
  })(React.Component);

  /*#__PURE__*/
  (function (_React$Component) {
    _inheritsLoose(Lifecycle, _React$Component);

    function Lifecycle() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Lifecycle.prototype;

    _proto.componentDidMount = function componentDidMount() {
      if (this.props.onMount) this.props.onMount.call(this, this);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.props.onUnmount) this.props.onUnmount.call(this, this);
    };

    _proto.render = function render() {
      return null;
    };

    return Lifecycle;
  })(React.Component);

  var cache$1 = {};
  var cacheLimit$1 = 10000;
  var cacheCount$1 = 0;

  function compilePath$1(path, options) {
    var cacheKey = "" + options.end + options.strict + options.sensitive;
    var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
    if (pathCache[path]) return pathCache[path];
    var keys = [];
    var regexp = pathToRegexp$1(path, keys, options);
    var result = {
      regexp: regexp,
      keys: keys
    };

    if (cacheCount$1 < cacheLimit$1) {
      pathCache[path] = result;
      cacheCount$1++;
    }

    return result;
  }
  /**
   * Public API for matching a URL pathname to a path.
   */


  function matchPath(pathname, options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof options === "string" || Array.isArray(options)) {
      options = {
        path: options
      };
    }

    var _options = options,
        path = _options.path,
        _options$exact = _options.exact,
        exact = _options$exact === void 0 ? false : _options$exact,
        _options$strict = _options.strict,
        strict = _options$strict === void 0 ? false : _options$strict,
        _options$sensitive = _options.sensitive,
        sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
    var paths = [].concat(path);
    return paths.reduce(function (matched, path) {
      if (!path && path !== "") return null;
      if (matched) return matched;

      var _compilePath = compilePath$1(path, {
        end: exact,
        strict: strict,
        sensitive: sensitive
      }),
          regexp = _compilePath.regexp,
          keys = _compilePath.keys;

      var match = regexp.exec(pathname);
      if (!match) return null;
      var url = match[0],
          values = match.slice(1);
      var isExact = pathname === url;
      if (exact && !isExact) return null;
      return {
        path: path,
        // the path used to match
        url: path === "/" && url === "" ? "/" : url,
        // the matched portion of the URL
        isExact: isExact,
        // whether or not we matched exactly
        params: keys.reduce(function (memo, key, index) {
          memo[key.name] = values[index];
          return memo;
        }, {})
      };
    }, null);
  }
  /**
   * The public API for matching a single path and rendering.
   */


  var Route =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Route, _React$Component);

    function Route() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Route.prototype;

    _proto.render = function render() {
      var _this = this;

      return React.createElement(context.Consumer, null, function (context$1) {
        !context$1 ? invariant(false) : void 0;
        var location = _this.props.location || context$1.location;
        var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
        : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

        var props = _extends({}, context$1, {
          location: location,
          match: match
        });

        var _this$props = _this.props,
            children = _this$props.children,
            component = _this$props.component,
            render = _this$props.render; // Preact uses an empty array as children by
        // default, so use null if that's the case.

        if (Array.isArray(children) && children.length === 0) {
          children = null;
        }

        return React.createElement(context.Provider, {
          value: props
        }, props.match ? children ? typeof children === "function" ? children(props) : children : component ? React.createElement(component, props) : render ? render(props) : null : typeof children === "function" ? children(props) : null);
      });
    };

    return Route;
  }(React.Component);

  function addLeadingSlash(path) {
    return path.charAt(0) === "/" ? path : "/" + path;
  }

  function addBasename(basename, location) {
    if (!basename) return location;
    return _extends({}, location, {
      pathname: addLeadingSlash(basename) + location.pathname
    });
  }

  function stripBasename(basename, location) {
    if (!basename) return location;
    var base = addLeadingSlash(basename);
    if (location.pathname.indexOf(base) !== 0) return location;
    return _extends({}, location, {
      pathname: location.pathname.substr(base.length)
    });
  }

  function createURL(location) {
    return typeof location === "string" ? location : createPath(location);
  }

  function staticHandler(methodName) {
    return function () {
       invariant(false) ;
    };
  }

  function noop$1() {}
  /**
   * The public top-level API for a "static" <Router>, so-called because it
   * can't actually change the current location. Instead, it just records
   * location changes in a context object. Useful mainly in testing and
   * server-rendering scenarios.
   */


  /*#__PURE__*/
  (function (_React$Component) {
    _inheritsLoose(StaticRouter, _React$Component);

    function StaticRouter() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _this.handlePush = function (location) {
        return _this.navigateTo(location, "PUSH");
      };

      _this.handleReplace = function (location) {
        return _this.navigateTo(location, "REPLACE");
      };

      _this.handleListen = function () {
        return noop$1;
      };

      _this.handleBlock = function () {
        return noop$1;
      };

      return _this;
    }

    var _proto = StaticRouter.prototype;

    _proto.navigateTo = function navigateTo(location, action) {
      var _this$props = this.props,
          _this$props$basename = _this$props.basename,
          basename = _this$props$basename === void 0 ? "" : _this$props$basename,
          _this$props$context = _this$props.context,
          context = _this$props$context === void 0 ? {} : _this$props$context;
      context.action = action;
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    };

    _proto.render = function render() {
      var _this$props2 = this.props,
          _this$props2$basename = _this$props2.basename,
          basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
          _this$props2$context = _this$props2.context,
          context = _this$props2$context === void 0 ? {} : _this$props2$context,
          _this$props2$location = _this$props2.location,
          location = _this$props2$location === void 0 ? "/" : _this$props2$location,
          rest = _objectWithoutPropertiesLoose(_this$props2, ["basename", "context", "location"]);

      var history = {
        createHref: function createHref(path) {
          return addLeadingSlash(basename + createURL(path));
        },
        action: "POP",
        location: stripBasename(basename, createLocation(location)),
        push: this.handlePush,
        replace: this.handleReplace,
        go: staticHandler(),
        goBack: staticHandler(),
        goForward: staticHandler(),
        listen: this.handleListen,
        block: this.handleBlock
      };
      return React.createElement(Router, _extends({}, rest, {
        history: history,
        staticContext: context
      }));
    };

    return StaticRouter;
  })(React.Component);

  /**
   * The public API for rendering the first <Route> that matches.
   */

  var Switch =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Switch, _React$Component);

    function Switch() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Switch.prototype;

    _proto.render = function render() {
      var _this = this;

      return React.createElement(context.Consumer, null, function (context) {
        !context ? invariant(false) : void 0;
        var location = _this.props.location || context.location;
        var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
        // here because toArray adds keys to all child elements and we do not want
        // to trigger an unmount/remount for two <Route>s that render the same
        // component at different URLs.

        React.Children.forEach(_this.props.children, function (child) {
          if (match == null && React.isValidElement(child)) {
            element = child;
            var path = child.props.path || child.props.from;
            match = path ? matchPath(location.pathname, _extends({}, child.props, {
              path: path
            })) : context.match;
          }
        });
        return match ? React.cloneElement(element, {
          location: location,
          computedMatch: match
        }) : null;
      });
    };

    return Switch;
  }(React.Component);

  var useContext = React.useContext;
  function useHistory() {

    return useContext(historyContext);
  }

  /**
   * The public API for a <Router> that uses HTML5 history.
   */

  var BrowserRouter =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(BrowserRouter, _React$Component);

    function BrowserRouter() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.history = createBrowserHistory(_this.props);
      return _this;
    }

    var _proto = BrowserRouter.prototype;

    _proto.render = function render() {
      return React.createElement(Router, {
        history: this.history,
        children: this.props.children
      });
    };

    return BrowserRouter;
  }(React.Component);

  /**
   * The public API for a <Router> that uses window.location.hash.
   */

  /*#__PURE__*/
  (function (_React$Component) {
    _inheritsLoose(HashRouter, _React$Component);

    function HashRouter() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.history = createHashHistory(_this.props);
      return _this;
    }

    var _proto = HashRouter.prototype;

    _proto.render = function render() {
      return React.createElement(Router, {
        history: this.history,
        children: this.props.children
      });
    };

    return HashRouter;
  })(React.Component);

  var resolveToLocation = function resolveToLocation(to, currentLocation) {
    return typeof to === "function" ? to(currentLocation) : to;
  };
  var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
    return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
  };

  var forwardRefShim = function forwardRefShim(C) {
    return C;
  };

  var forwardRef = React.forwardRef;

  if (typeof forwardRef === "undefined") {
    forwardRef = forwardRefShim;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
    var innerRef = _ref.innerRef,
        navigate = _ref.navigate,
        _onClick = _ref.onClick,
        rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);

    var target = rest.target;

    var props = _extends({}, rest, {
      onClick: function onClick(event) {
        try {
          if (_onClick) _onClick(event);
        } catch (ex) {
          event.preventDefault();
          throw ex;
        }

        if (!event.defaultPrevented && // onClick prevented default
        event.button === 0 && ( // ignore everything but left clicks
        !target || target === "_self") && // let browser handle "target=_blank" etc.
        !isModifiedEvent(event) // ignore clicks with modifier keys
        ) {
            event.preventDefault();
            navigate();
          }
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.ref = innerRef;
    }
    /* eslint-disable-next-line jsx-a11y/anchor-has-content */


    return React.createElement("a", props);
  });
  /**
   * The public API for rendering a history-aware <a>.
   */


  var Link = forwardRef(function (_ref2, forwardedRef) {
    var _ref2$component = _ref2.component,
        component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
        replace = _ref2.replace,
        to = _ref2.to,
        innerRef = _ref2.innerRef,
        rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);

    return React.createElement(context.Consumer, null, function (context) {
      !context ? invariant(false) : void 0;
      var history = context.history;
      var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
      var href = location ? history.createHref(location) : "";

      var props = _extends({}, rest, {
        href: href,
        navigate: function navigate() {
          var location = resolveToLocation(to, context.location);
          var method = replace ? history.replace : history.push;
          method(location);
        }
      }); // React 15 compat


      if (forwardRefShim !== forwardRef) {
        props.ref = forwardedRef || innerRef;
      } else {
        props.innerRef = innerRef;
      }

      return React.createElement(component, props);
    });
  });

  var forwardRefShim$1 = function forwardRefShim(C) {
    return C;
  };

  var forwardRef$1 = React.forwardRef;

  if (typeof forwardRef$1 === "undefined") {
    forwardRef$1 = forwardRefShim$1;
  }

  function joinClassnames() {
    for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
      classnames[_key] = arguments[_key];
    }

    return classnames.filter(function (i) {
      return i;
    }).join(" ");
  }
  /**
   * A <Link> wrapper that knows if it's "active" or not.
   */


  forwardRef$1(function (_ref, forwardedRef) {
    var _ref$ariaCurrent = _ref["aria-current"],
        ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
        _ref$activeClassName = _ref.activeClassName,
        activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
        activeStyle = _ref.activeStyle,
        classNameProp = _ref.className,
        exact = _ref.exact,
        isActiveProp = _ref.isActive,
        locationProp = _ref.location,
        sensitive = _ref.sensitive,
        strict = _ref.strict,
        styleProp = _ref.style,
        to = _ref.to,
        innerRef = _ref.innerRef,
        rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

    return React.createElement(context.Consumer, null, function (context) {
      !context ? invariant(false) : void 0;
      var currentLocation = locationProp || context.location;
      var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
      var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

      var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      var match = escapedPath ? matchPath(currentLocation.pathname, {
        path: escapedPath,
        exact: exact,
        sensitive: sensitive,
        strict: strict
      }) : null;
      var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
      var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
      var style = isActive ? _extends({}, styleProp, {}, activeStyle) : styleProp;

      var props = _extends({
        "aria-current": isActive && ariaCurrent || null,
        className: className,
        style: style,
        to: toLocation
      }, rest); // React 15 compat


      if (forwardRefShim$1 !== forwardRef$1) {
        props.ref = forwardedRef || innerRef;
      } else {
        props.innerRef = innerRef;
      }

      return React.createElement(Link, props);
    });
  });

  /*#__PURE__*/(function (_React$Component) {
    _inherits(Home, _React$Component);
    var _super = _createSuper(Home);
    function Home(props) {
      _classCallCheck(this, Home);
      return _super.call(this, props);
    }
    _createClass(Home, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Welcome to the React tutorial"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Link, {
          to: "/list"
        }, "Click here"), " to view expense list"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Link, {
          to: "/add"
        }, "Click here"), " to add new expenses"));
      }
    }]);
    return Home;
  })(React.Component);

  var css_248z$2 = "a.navbar-brand {\r\n    white-space: normal;\r\n    text-align: center;\r\n    word-break: break-all;\r\n  }\r\n  \r\n  a {\r\n    color: #0077cc;\r\n  }\r\n  \r\n  .btn-primary {\r\n    color: #fff;\r\n    background-color: #1b6ec2;\r\n    border-color: #1861ac;\r\n  }\r\n  \r\n  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {\r\n    color: #fff;\r\n    background-color: #1b6ec2;\r\n    border-color: #1861ac;\r\n  }\r\n  \r\n  .border-top {\r\n    border-top: 1px solid #e5e5e5;\r\n  }\r\n  .border-bottom {\r\n    border-bottom: 1px solid #e5e5e5;\r\n  }\r\n  \r\n  .box-shadow {\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n  }\r\n  \r\n  button.accept-policy {\r\n    font-size: 1rem;\r\n    line-height: inherit;\r\n  }\r\n  \r\n  .footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    line-height: 60px;\r\n  }\r\n\r\n\r\n  ";
  styleInject(css_248z$2);

  var css_248z$1 = "@charset \"UTF-8\";/*!\r\n * Bootstrap v5.0.2 (https://getbootstrap.com/)\r\n * Copyright 2011-2021 The Bootstrap Authors\r\n * Copyright 2011-2021 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\r\n */:root{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-font-sans-serif:system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",\"Liberation Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))}*,::after,::before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-font-sans-serif);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}hr{margin:1rem 0;color:inherit;background-color:currentColor;border:0;opacity:.25}hr:not([size]){height:1px}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[data-bs-original-title],abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{padding:.2em;background-color:#fcf8e3}sub,sup{position:relative;font-size:.75em;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#0d6efd;text-decoration:underline}a:hover{color:#0a58ca}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:var(--bs-font-monospace);font-size:1em;direction:ltr;unicode-bidi:bidi-override}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:.875em;color:#d63384;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:.875em;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:1em;font-weight:700}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]::-webkit-calendar-picker-indicator{display:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + .3vw);line-height:inherit}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:.875em;color:#6c757d}.blockquote-footer::before{content:\"— \"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:.875em;color:#6c757d}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{width:100%;padding-right:var(--bs-gutter-x,.75rem);padding-left:var(--bs-gutter-x,.75rem);margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-top:calc(var(--bs-gutter-y) * -1);margin-right:calc(var(--bs-gutter-x) * -.5);margin-left:calc(var(--bs-gutter-x) * -.5)}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x) * .5);padding-left:calc(var(--bs-gutter-x) * .5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}@media (min-width:576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}}@media (min-width:768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}}@media (min-width:992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}}@media (min-width:1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}}@media (min-width:1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:0.25rem}.g-1,.gy-1{--bs-gutter-y:0.25rem}.g-2,.gx-2{--bs-gutter-x:0.5rem}.g-2,.gy-2{--bs-gutter-y:0.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-bg:transparent;--bs-table-accent-bg:transparent;--bs-table-striped-color:#212529;--bs-table-striped-bg:rgba(0, 0, 0, 0.05);--bs-table-active-color:#212529;--bs-table-active-bg:rgba(0, 0, 0, 0.1);--bs-table-hover-color:#212529;--bs-table-hover-bg:rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:#212529;vertical-align:top;border-color:#dee2e6}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table>:not(:last-child)>:last-child>*{border-bottom-color:currentColor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-striped>tbody>tr:nth-of-type(odd){--bs-table-accent-bg:var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg:var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover{--bs-table-accent-bg:var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-bg:#cfe2ff;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000;color:#000;border-color:#bacbe6}.table-secondary{--bs-table-bg:#e2e3e5;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000;color:#000;border-color:#cbccce}.table-success{--bs-table-bg:#d1e7dd;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000;color:#000;border-color:#bcd0c7}.table-info{--bs-table-bg:#cff4fc;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000;color:#000;border-color:#badce3}.table-warning{--bs-table-bg:#fff3cd;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000;color:#000;border-color:#e6dbb9}.table-danger{--bs-table-bg:#f8d7da;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000;color:#000;border-color:#dfc2c4}.table-light{--bs-table-bg:#f8f9fa;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000;color:#000;border-color:#dfe0e1}.table-dark{--bs-table-bg:#212529;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff;color:#fff;border-color:#373b3e}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media (max-width:575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media (max-width:1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem}.form-text{margin-top:.25rem;font-size:.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control::-webkit-file-upload-button{padding:.375rem .75rem;margin:-.375rem -.75rem;-webkit-margin-end:.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;-webkit-transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::-webkit-file-upload-button{-webkit-transition:none;transition:none}}.form-control:hover:not(:disabled):not([readonly])::-webkit-file-upload-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + (.5rem + 2px));padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-sm::-webkit-file-upload-button{padding:.25rem .5rem;margin:-.25rem -.5rem;-webkit-margin-end:.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + (1rem + 2px));padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}.form-control-lg::-webkit-file-upload-button{padding:.5rem 1rem;margin:-.5rem -1rem;-webkit-margin-end:1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + (.75rem + 2px))}textarea.form-control-sm{min-height:calc(1.5em + (.5rem + 2px))}textarea.form-control-lg{min-height:calc(1.5em + (1rem + 2px))}.form-control-color{max-width:3rem;height:auto;padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{height:1.5em;border-radius:.25rem}.form-control-color::-webkit-color-swatch{height:1.5em;border-radius:.25rem}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(0.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size=\"1\"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-print-color-adjust:exact;color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e\")}.form-check-input:checked[type=radio]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\")}.form-switch .form-check-input:checked{background-position:right center;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#0d6efd;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;height:100%;padding:1rem .75rem;pointer-events:none;border:1px solid transparent;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control{padding:1rem .75rem}.form-floating>.form-control::-moz-placeholder{color:transparent}.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control:not(:-moz-placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu){border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.25rem}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{border-color:#198754;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:#198754}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size=\"1\"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size=\"1\"]{padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:#198754}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:#198754}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.input-group .form-control.is-valid,.input-group .form-select.is-valid,.was-validated .input-group .form-control:valid,.was-validated .input-group .form-select:valid{z-index:1}.input-group .form-control.is-valid:focus,.input-group .form-select.is-valid:focus,.was-validated .input-group .form-control:valid:focus,.was-validated .input-group .form-select:valid:focus{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:#dc3545}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size=\"1\"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size=\"1\"]{padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem)}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:#dc3545}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:#dc3545}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.input-group .form-control.is-invalid,.input-group .form-select.is-invalid,.was-validated .input-group .form-control:invalid,.was-validated .input-group .form-select:invalid{z-index:2}.input-group .form-control.is-invalid:focus,.input-group .form-select.is-invalid:focus,.was-validated .input-group .form-control:invalid:focus,.was-validated .input-group .form-select:invalid:focus{z-index:3}.btn{display:inline-block;font-weight:400;line-height:1.5;color:#212529;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{color:#212529}.btn-check:focus+.btn,.btn:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{pointer-events:none;opacity:.65}.btn-primary{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-primary:hover{color:#fff;background-color:#0b5ed7;border-color:#0a58ca}.btn-check:focus+.btn-primary,.btn-primary:focus{color:#fff;background-color:#0b5ed7;border-color:#0a58ca;box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-check:active+.btn-primary,.btn-check:checked+.btn-primary,.btn-primary.active,.btn-primary:active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0a58ca;border-color:#0a53be}.btn-check:active+.btn-primary:focus,.btn-check:checked+.btn-primary:focus,.btn-primary.active:focus,.btn-primary:active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(49,132,253,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5c636a;border-color:#565e64}.btn-check:focus+.btn-secondary,.btn-secondary:focus{color:#fff;background-color:#5c636a;border-color:#565e64;box-shadow:0 0 0 .25rem rgba(130,138,145,.5)}.btn-check:active+.btn-secondary,.btn-check:checked+.btn-secondary,.btn-secondary.active,.btn-secondary:active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#565e64;border-color:#51585e}.btn-check:active+.btn-secondary:focus,.btn-check:checked+.btn-secondary:focus,.btn-secondary.active:focus,.btn-secondary:active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(130,138,145,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-success{color:#fff;background-color:#198754;border-color:#198754}.btn-success:hover{color:#fff;background-color:#157347;border-color:#146c43}.btn-check:focus+.btn-success,.btn-success:focus{color:#fff;background-color:#157347;border-color:#146c43;box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-check:active+.btn-success,.btn-check:checked+.btn-success,.btn-success.active,.btn-success:active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#146c43;border-color:#13653f}.btn-check:active+.btn-success:focus,.btn-check:checked+.btn-success:focus,.btn-success.active:focus,.btn-success:active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(60,153,110,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#198754;border-color:#198754}.btn-info{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-info:hover{color:#000;background-color:#31d2f2;border-color:#25cff2}.btn-check:focus+.btn-info,.btn-info:focus{color:#000;background-color:#31d2f2;border-color:#25cff2;box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-check:active+.btn-info,.btn-check:checked+.btn-info,.btn-info.active,.btn-info:active,.show>.btn-info.dropdown-toggle{color:#000;background-color:#3dd5f3;border-color:#25cff2}.btn-check:active+.btn-info:focus,.btn-check:checked+.btn-info:focus,.btn-info.active:focus,.btn-info:active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(11,172,204,.5)}.btn-info.disabled,.btn-info:disabled{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-warning{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#000;background-color:#ffca2c;border-color:#ffc720}.btn-check:focus+.btn-warning,.btn-warning:focus{color:#000;background-color:#ffca2c;border-color:#ffc720;box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-check:active+.btn-warning,.btn-check:checked+.btn-warning,.btn-warning.active,.btn-warning:active,.show>.btn-warning.dropdown-toggle{color:#000;background-color:#ffcd39;border-color:#ffc720}.btn-check:active+.btn-warning:focus,.btn-check:checked+.btn-warning:focus,.btn-warning.active:focus,.btn-warning:active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(217,164,6,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#bb2d3b;border-color:#b02a37}.btn-check:focus+.btn-danger,.btn-danger:focus{color:#fff;background-color:#bb2d3b;border-color:#b02a37;box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-check:active+.btn-danger,.btn-check:checked+.btn-danger,.btn-danger.active,.btn-danger:active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#b02a37;border-color:#a52834}.btn-check:active+.btn-danger:focus,.btn-check:checked+.btn-danger:focus,.btn-danger.active:focus,.btn-danger:active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(225,83,97,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-light{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:focus+.btn-light,.btn-light:focus{color:#000;background-color:#f9fafb;border-color:#f9fafb;box-shadow:0 0 0 .25rem rgba(211,212,213,.5)}.btn-check:active+.btn-light,.btn-check:checked+.btn-light,.btn-light.active,.btn-light:active,.show>.btn-light.dropdown-toggle{color:#000;background-color:#f9fafb;border-color:#f9fafb}.btn-check:active+.btn-light:focus,.btn-check:checked+.btn-light:focus,.btn-light.active:focus,.btn-light:active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(211,212,213,.5)}.btn-light.disabled,.btn-light:disabled{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-dark{color:#fff;background-color:#212529;border-color:#212529}.btn-dark:hover{color:#fff;background-color:#1c1f23;border-color:#1a1e21}.btn-check:focus+.btn-dark,.btn-dark:focus{color:#fff;background-color:#1c1f23;border-color:#1a1e21;box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-check:active+.btn-dark,.btn-check:checked+.btn-dark,.btn-dark.active,.btn-dark:active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1a1e21;border-color:#191c1f}.btn-check:active+.btn-dark:focus,.btn-check:checked+.btn-dark:focus,.btn-dark.active:focus,.btn-dark:active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .25rem rgba(66,70,73,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#212529;border-color:#212529}.btn-outline-primary{color:#0d6efd;border-color:#0d6efd}.btn-outline-primary:hover{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:focus+.btn-outline-primary,.btn-outline-primary:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-check:active+.btn-outline-primary,.btn-check:checked+.btn-outline-primary,.btn-outline-primary.active,.btn-outline-primary.dropdown-toggle.show,.btn-outline-primary:active{color:#fff;background-color:#0d6efd;border-color:#0d6efd}.btn-check:active+.btn-outline-primary:focus,.btn-check:checked+.btn-outline-primary:focus,.btn-outline-primary.active:focus,.btn-outline-primary.dropdown-toggle.show:focus,.btn-outline-primary:active:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#0d6efd;background-color:transparent}.btn-outline-secondary{color:#6c757d;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:focus+.btn-outline-secondary,.btn-outline-secondary:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,.5)}.btn-check:active+.btn-outline-secondary,.btn-check:checked+.btn-outline-secondary,.btn-outline-secondary.active,.btn-outline-secondary.dropdown-toggle.show,.btn-outline-secondary:active{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-check:active+.btn-outline-secondary:focus,.btn-check:checked+.btn-outline-secondary:focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.dropdown-toggle.show:focus,.btn-outline-secondary:active:focus{box-shadow:0 0 0 .25rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-success{color:#198754;border-color:#198754}.btn-outline-success:hover{color:#fff;background-color:#198754;border-color:#198754}.btn-check:focus+.btn-outline-success,.btn-outline-success:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-check:active+.btn-outline-success,.btn-check:checked+.btn-outline-success,.btn-outline-success.active,.btn-outline-success.dropdown-toggle.show,.btn-outline-success:active{color:#fff;background-color:#198754;border-color:#198754}.btn-check:active+.btn-outline-success:focus,.btn-check:checked+.btn-outline-success:focus,.btn-outline-success.active:focus,.btn-outline-success.dropdown-toggle.show:focus,.btn-outline-success:active:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#198754;background-color:transparent}.btn-outline-info{color:#0dcaf0;border-color:#0dcaf0}.btn-outline-info:hover{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:focus+.btn-outline-info,.btn-outline-info:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-check:active+.btn-outline-info,.btn-check:checked+.btn-outline-info,.btn-outline-info.active,.btn-outline-info.dropdown-toggle.show,.btn-outline-info:active{color:#000;background-color:#0dcaf0;border-color:#0dcaf0}.btn-check:active+.btn-outline-info:focus,.btn-check:checked+.btn-outline-info:focus,.btn-outline-info.active:focus,.btn-outline-info.dropdown-toggle.show:focus,.btn-outline-info:active:focus{box-shadow:0 0 0 .25rem rgba(13,202,240,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#0dcaf0;background-color:transparent}.btn-outline-warning{color:#ffc107;border-color:#ffc107}.btn-outline-warning:hover{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:focus+.btn-outline-warning,.btn-outline-warning:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-check:active+.btn-outline-warning,.btn-check:checked+.btn-outline-warning,.btn-outline-warning.active,.btn-outline-warning.dropdown-toggle.show,.btn-outline-warning:active{color:#000;background-color:#ffc107;border-color:#ffc107}.btn-check:active+.btn-outline-warning:focus,.btn-check:checked+.btn-outline-warning:focus,.btn-outline-warning.active:focus,.btn-outline-warning.dropdown-toggle.show:focus,.btn-outline-warning:active:focus{box-shadow:0 0 0 .25rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-danger{color:#dc3545;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:focus+.btn-outline-danger,.btn-outline-danger:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-check:active+.btn-outline-danger,.btn-check:checked+.btn-outline-danger,.btn-outline-danger.active,.btn-outline-danger.dropdown-toggle.show,.btn-outline-danger:active{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-check:active+.btn-outline-danger:focus,.btn-check:checked+.btn-outline-danger:focus,.btn-outline-danger.active:focus,.btn-outline-danger.dropdown-toggle.show:focus,.btn-outline-danger:active:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-light{color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:hover{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:focus+.btn-outline-light,.btn-outline-light:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-check:active+.btn-outline-light,.btn-check:checked+.btn-outline-light,.btn-outline-light.active,.btn-outline-light.dropdown-toggle.show,.btn-outline-light:active{color:#000;background-color:#f8f9fa;border-color:#f8f9fa}.btn-check:active+.btn-outline-light:focus,.btn-check:checked+.btn-outline-light:focus,.btn-outline-light.active:focus,.btn-outline-light.dropdown-toggle.show:focus,.btn-outline-light:active:focus{box-shadow:0 0 0 .25rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-dark{color:#212529;border-color:#212529}.btn-outline-dark:hover{color:#fff;background-color:#212529;border-color:#212529}.btn-check:focus+.btn-outline-dark,.btn-outline-dark:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-check:active+.btn-outline-dark,.btn-check:checked+.btn-outline-dark,.btn-outline-dark.active,.btn-outline-dark.dropdown-toggle.show,.btn-outline-dark:active{color:#fff;background-color:#212529;border-color:#212529}.btn-check:active+.btn-outline-dark:focus,.btn-check:checked+.btn-outline-dark:focus,.btn-outline-dark.active:focus,.btn-outline-dark.dropdown-toggle.show:focus,.btn-outline-dark:active:focus{box-shadow:0 0 0 .25rem rgba(33,37,41,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#212529;background-color:transparent}.btn-link{font-weight:400;color:#0d6efd;text-decoration:underline}.btn-link:hover{color:#0a58ca}.btn-link.disabled,.btn-link:disabled{color:#6c757d}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropend,.dropstart,.dropup{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;z-index:1000;display:none;min-width:10rem;padding:.5rem 0;margin:0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:.125rem}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid rgba(0,0,0,.15)}.dropdown-item{display:block;width:100%;padding:.25rem 1rem;clear:both;font-weight:400;color:#212529;text-align:inherit;text-decoration:none;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#1e2125;background-color:#e9ecef}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#0d6efd}.dropdown-item.disabled,.dropdown-item:disabled{color:#adb5bd;pointer-events:none;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1rem;color:#212529}.dropdown-menu-dark{color:#dee2e6;background-color:#343a40;border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item{color:#dee2e6}.dropdown-menu-dark .dropdown-item:focus,.dropdown-menu-dark .dropdown-item:hover{color:#fff;background-color:rgba(255,255,255,.15)}.dropdown-menu-dark .dropdown-item.active,.dropdown-menu-dark .dropdown-item:active{color:#fff;background-color:#0d6efd}.dropdown-menu-dark .dropdown-item.disabled,.dropdown-menu-dark .dropdown-item:disabled{color:#adb5bd}.dropdown-menu-dark .dropdown-divider{border-color:rgba(0,0,0,.15)}.dropdown-menu-dark .dropdown-item-text{color:#dee2e6}.dropdown-menu-dark .dropdown-header{color:#adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;flex:1 1 auto}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child){margin-left:-1px}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem;color:#0d6efd;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:#0a58ca}.nav-link.disabled{color:#6c757d;pointer-events:none;cursor:default}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-link{margin-bottom:-1px;background:0 0;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6;isolation:isolate}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{background:0 0;border:0;border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#0d6efd}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding-top:.5rem;padding-bottom:.5rem}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;text-decoration:none;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem;transition:box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 .25rem}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.55)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.55);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-light .navbar-text{color:rgba(0,0,0,.55)}.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.55)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.55);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.navbar-dark .navbar-text{color:rgba(255,255,255,.55)}.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:1rem 1rem}.card-title{margin-bottom:.5rem}.card-subtitle{margin-top:-.25rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1rem}.card-header{padding:.5rem 1rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.5rem 1rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.5rem;margin-bottom:-.5rem;margin-left:-.5rem;border-bottom:0}.card-header-pills{margin-right:-.5rem;margin-left:-.5rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1rem;border-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img,.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-group>.card{margin-bottom:.75rem}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:1rem 1.25rem;font-size:1rem;color:#212529;text-align:left;background-color:#fff;border:0;border-radius:0;overflow-anchor:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,border-radius .15s ease}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:#0c63e4;background-color:#e7f1ff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.125)}.accordion-button:not(.collapsed)::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");transform:rotate(-180deg)}.accordion-button::after{flex-shrink:0;width:1.25rem;height:1.25rem;margin-left:auto;content:\"\";background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-size:1.25rem;transition:transform .2s ease-in-out}@media (prefers-reduced-motion:reduce){.accordion-button::after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.accordion-header{margin-bottom:0}.accordion-item{background-color:#fff;border:1px solid rgba(0,0,0,.125)}.accordion-item:first-of-type{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.accordion-item:first-of-type .accordion-button{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.accordion-item:last-of-type .accordion-collapse{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.accordion-body{padding:1rem 1.25rem}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button{border-radius:0}.breadcrumb{display:flex;flex-wrap:wrap;padding:0 0;margin-bottom:1rem;list-style:none}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:.5rem;color:#6c757d;content:var(--bs-breadcrumb-divider, \"/\")}.breadcrumb-item.active{color:#6c757d}.pagination{display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;color:#0d6efd;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:#0a58ca;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:3;color:#0a58ca;background-color:#e9ecef;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item.active .page-link{z-index:3;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;background-color:#fff;border-color:#dee2e6}.page-link{padding:.375rem .75rem}.page-item:first-child .page-link{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.35em .65em;font-size:.75em;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{position:relative;padding:1rem 1rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{color:#084298;background-color:#cfe2ff;border-color:#b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{color:#41464b;background-color:#e2e3e5;border-color:#d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{color:#0f5132;background-color:#d1e7dd;border-color:#badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{color:#055160;background-color:#cff4fc;border-color:#b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{color:#664d03;background-color:#fff3cd;border-color:#ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{color:#842029;background-color:#f8d7da;border-color:#f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{color:#636464;background-color:#fefefe;border-color:#fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{color:#141619;background-color:#d3d3d4;border-color:#bcbebf}.alert-dark .alert-link{color:#101214}@-webkit-keyframes progress-bar-stripes{0%{background-position-x:1rem}}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#0d6efd;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:1s linear infinite progress-bar-stripes;animation:1s linear infinite progress-bar-stripes}@media (prefers-reduced-motion:reduce){.progress-bar-animated{-webkit-animation:none;animation:none}}.list-group{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:.25rem}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>li::before{content:counters(section, \".\") \". \";counter-increment:section}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.5rem 1rem;color:#212529;text-decoration:none;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#0d6efd;border-color:#0d6efd}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:-1px;border-top-width:1px}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:1px;border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:-1px;border-left-width:1px}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 1px}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:#000;background:transparent url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;border:0;border-radius:.25rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1}.btn-close.disabled,.btn-close:disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{width:350px;max-width:100%;font-size:.875rem;pointer-events:auto;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .5rem 1rem rgba(0,0,0,.15);border-radius:.25rem}.toast:not(.showing):not(.show){opacity:0}.toast.hide{display:none}.toast-container{width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:.75rem}.toast-header{display:flex;align-items:center;padding:.5rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05);border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.toast-header .btn-close{margin-right:-.375rem;margin-left:.75rem}.toast-body{padding:.75rem;word-wrap:break-word}.modal{position:fixed;top:0;left:0;z-index:1060;display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - 1rem)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - 1rem)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .btn-close{padding:.5rem .5rem;margin:-.5rem -.5rem -.5rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;flex:1 1 auto;padding:1rem}.modal-footer{display:flex;flex-wrap:wrap;flex-shrink:0;align-items:center;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.modal-footer>*{margin:.25rem}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-scrollable{height:calc(100% - 3.5rem)}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{max-width:800px}}@media (min-width:1200px){.modal-xl{max-width:1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}.modal-fullscreen .modal-footer{border-radius:0}@media (max-width:575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}.modal-fullscreen-sm-down .modal-footer{border-radius:0}}@media (max-width:767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}.modal-fullscreen-md-down .modal-footer{border-radius:0}}@media (max-width:991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}.modal-fullscreen-lg-down .modal-footer{border-radius:0}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}.modal-fullscreen-xl-down .modal-footer{border-radius:0}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}.modal-fullscreen-xxl-down .modal-footer{border-radius:0}}.tooltip{position:absolute;z-index:1080;display:block;margin:0;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .tooltip-arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .tooltip-arrow::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bs-tooltip-auto[data-popper-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:0}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before,.bs-tooltip-top .tooltip-arrow::before{top:-1px;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[data-popper-placement^=right],.bs-tooltip-end{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before,.bs-tooltip-end .tooltip-arrow::before{right:-1px;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[data-popper-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:0}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before,.bs-tooltip-bottom .tooltip-arrow::before{bottom:-1px;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[data-popper-placement^=left],.bs-tooltip-start{padding:0 .4rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before,.bs-tooltip-start .tooltip-arrow::before{left:-1px;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1070;display:block;max-width:276px;font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .popover-arrow{position:absolute;display:block;width:1rem;height:.5rem}.popover .popover-arrow::after,.popover .popover-arrow::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after,.bs-popover-top>.popover-arrow::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{left:calc(-.5rem - 1px);width:.5rem;height:1rem}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after,.bs-popover-end>.popover-arrow::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc(-.5rem - 1px)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after,.bs-popover-bottom>.popover-arrow::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bs-popover-auto[data-popper-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f0f0f0}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{right:calc(-.5rem - 1px);width:.5rem;height:1rem}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after,.bs-popover-start>.popover-arrow::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.popover-header{padding:.5rem 1rem;margin-bottom:0;font-size:1rem;background-color:#f0f0f0;border-bottom:1px solid rgba(0,0,0,.2);border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:1rem 1rem;color:#212529}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translateX(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{z-index:1;opacity:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:0 0;border:0;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%;list-style:none}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}@-webkit-keyframes spinner-border{to{transform:rotate(360deg)}}@keyframes spinner-border{to{transform:rotate(360deg)}}.spinner-border{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:.75s linear infinite spinner-border;animation:.75s linear infinite spinner-border}.spinner-border-sm{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{display:inline-block;width:2rem;height:2rem;vertical-align:-.125em;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:.75s linear infinite spinner-grow;animation:.75s linear infinite spinner-grow}.spinner-grow-sm{width:1rem;height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{-webkit-animation-duration:1.5s;animation-duration:1.5s}}.offcanvas{position:fixed;bottom:0;z-index:1050;display:flex;flex-direction:column;max-width:100%;visibility:hidden;background-color:#fff;background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:1rem 1rem}.offcanvas-header .btn-close{padding:.5rem .5rem;margin-top:-.5rem;margin-right:-.5rem;margin-bottom:-.5rem}.offcanvas-title{margin-bottom:0;line-height:1.5}.offcanvas-body{flex-grow:1;padding:1rem 1rem;overflow-y:auto}.offcanvas-start{top:0;left:0;width:400px;border-right:1px solid rgba(0,0,0,.2);transform:translateX(-100%)}.offcanvas-end{top:0;right:0;width:400px;border-left:1px solid rgba(0,0,0,.2);transform:translateX(100%)}.offcanvas-top{top:0;right:0;left:0;height:30vh;max-height:100%;border-bottom:1px solid rgba(0,0,0,.2);transform:translateY(-100%)}.offcanvas-bottom{right:0;left:0;height:30vh;max-height:100%;border-top:1px solid rgba(0,0,0,.2);transform:translateY(100%)}.offcanvas.show{transform:none}.clearfix::after{display:block;clear:both;content:\"\"}.link-primary{color:#0d6efd}.link-primary:focus,.link-primary:hover{color:#0a58ca}.link-secondary{color:#6c757d}.link-secondary:focus,.link-secondary:hover{color:#565e64}.link-success{color:#198754}.link-success:focus,.link-success:hover{color:#146c43}.link-info{color:#0dcaf0}.link-info:focus,.link-info:hover{color:#3dd5f3}.link-warning{color:#ffc107}.link-warning:focus,.link-warning:hover{color:#ffcd39}.link-danger{color:#dc3545}.link-danger:focus,.link-danger:hover{color:#b02a37}.link-light{color:#f8f9fa}.link-light:focus,.link-light:hover{color:#f9fafb}.link-dark{color:#212529}.link-dark:focus,.link-dark:hover{color:#1a1e21}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:\"\"}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:calc(3 / 4 * 100%)}.ratio-16x9{--bs-aspect-ratio:calc(9 / 16 * 100%)}.ratio-21x9{--bs-aspect-ratio:calc(9 / 21 * 100%)}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}@media (min-width:576px){.sticky-sm-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:768px){.sticky-md-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:992px){.sticky-lg-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:1200px){.sticky-xl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}@media (min-width:1400px){.sticky-xxl-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:\"\"}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{transform:translate(-50%,-50%)!important}.translate-middle-x{transform:translateX(-50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-top{border-top:1px solid #dee2e6!important}.border-top-0{border-top:0!important}.border-end{border-right:1px solid #dee2e6!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:1px solid #dee2e6!important}.border-start-0{border-left:0!important}.border-primary{border-color:#0d6efd!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#198754!important}.border-info{border-color:#0dcaf0!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#212529!important}.border-white{border-color:#fff!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-right:0!important;margin-left:0!important}.mx-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-3{margin-right:1rem!important;margin-left:1rem!important}.mx-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-5{margin-right:3rem!important;margin-left:3rem!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.my-0{margin-top:0!important;margin-bottom:0!important}.my-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-right:0!important;padding-left:0!important}.px-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-3{padding-right:1rem!important;padding-left:1rem!important}.px-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-5{padding-right:3rem!important;padding-left:3rem!important}.py-0{padding-top:0!important;padding-bottom:0!important}.py-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.font-monospace{font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-light{font-weight:300!important}.fw-lighter{font-weight:lighter!important}.fw-normal{font-weight:400!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-decoration-line-through{text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.text-primary{color:#0d6efd!important}.text-secondary{color:#6c757d!important}.text-success{color:#198754!important}.text-info{color:#0dcaf0!important}.text-warning{color:#ffc107!important}.text-danger{color:#dc3545!important}.text-light{color:#f8f9fa!important}.text-dark{color:#212529!important}.text-white{color:#fff!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-reset{color:inherit!important}.bg-primary{background-color:#0d6efd!important}.bg-secondary{background-color:#6c757d!important}.bg-success{background-color:#198754!important}.bg-info{background-color:#0dcaf0!important}.bg-warning{background-color:#ffc107!important}.bg-danger{background-color:#dc3545!important}.bg-light{background-color:#f8f9fa!important}.bg-dark{background-color:#212529!important}.bg-body{background-color:#fff!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.bg-gradient{background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:.25rem!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:.2rem!important}.rounded-2{border-radius:.25rem!important}.rounded-3{border-radius:.3rem!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:50rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-end{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-start{border-bottom-left-radius:.25rem!important;border-top-left-radius:.25rem!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-right:0!important;margin-left:0!important}.mx-sm-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-sm-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-sm-3{margin-right:1rem!important;margin-left:1rem!important}.mx-sm-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-sm-5{margin-right:3rem!important;margin-left:3rem!important}.mx-sm-auto{margin-right:auto!important;margin-left:auto!important}.my-sm-0{margin-top:0!important;margin-bottom:0!important}.my-sm-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-sm-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-sm-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-sm-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-sm-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-sm-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-right:0!important;padding-left:0!important}.px-sm-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-sm-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-sm-3{padding-right:1rem!important;padding-left:1rem!important}.px-sm-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-sm-5{padding-right:3rem!important;padding-left:3rem!important}.py-sm-0{padding-top:0!important;padding-bottom:0!important}.py-sm-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-sm-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-sm-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-sm-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-sm-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-right:0!important;margin-left:0!important}.mx-md-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-md-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-md-3{margin-right:1rem!important;margin-left:1rem!important}.mx-md-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-md-5{margin-right:3rem!important;margin-left:3rem!important}.mx-md-auto{margin-right:auto!important;margin-left:auto!important}.my-md-0{margin-top:0!important;margin-bottom:0!important}.my-md-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-md-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-md-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-md-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-md-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-md-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-right:0!important;padding-left:0!important}.px-md-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-md-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-md-3{padding-right:1rem!important;padding-left:1rem!important}.px-md-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-md-5{padding-right:3rem!important;padding-left:3rem!important}.py-md-0{padding-top:0!important;padding-bottom:0!important}.py-md-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-md-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-md-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-md-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-md-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-right:0!important;margin-left:0!important}.mx-lg-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-lg-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-lg-3{margin-right:1rem!important;margin-left:1rem!important}.mx-lg-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-lg-5{margin-right:3rem!important;margin-left:3rem!important}.mx-lg-auto{margin-right:auto!important;margin-left:auto!important}.my-lg-0{margin-top:0!important;margin-bottom:0!important}.my-lg-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-lg-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-lg-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-lg-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-lg-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-lg-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-right:0!important;padding-left:0!important}.px-lg-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-lg-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-lg-3{padding-right:1rem!important;padding-left:1rem!important}.px-lg-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-lg-5{padding-right:3rem!important;padding-left:3rem!important}.py-lg-0{padding-top:0!important;padding-bottom:0!important}.py-lg-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-lg-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-lg-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-lg-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-lg-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-right:0!important;margin-left:0!important}.mx-xl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xl-auto{margin-right:auto!important;margin-left:auto!important}.my-xl-0{margin-top:0!important;margin-bottom:0!important}.my-xl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-right:0!important;padding-left:0!important}.px-xl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xl-0{padding-top:0!important;padding-bottom:0!important}.py-xl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-right:0!important;margin-left:0!important}.mx-xxl-1{margin-right:.25rem!important;margin-left:.25rem!important}.mx-xxl-2{margin-right:.5rem!important;margin-left:.5rem!important}.mx-xxl-3{margin-right:1rem!important;margin-left:1rem!important}.mx-xxl-4{margin-right:1.5rem!important;margin-left:1.5rem!important}.mx-xxl-5{margin-right:3rem!important;margin-left:3rem!important}.mx-xxl-auto{margin-right:auto!important;margin-left:auto!important}.my-xxl-0{margin-top:0!important;margin-bottom:0!important}.my-xxl-1{margin-top:.25rem!important;margin-bottom:.25rem!important}.my-xxl-2{margin-top:.5rem!important;margin-bottom:.5rem!important}.my-xxl-3{margin-top:1rem!important;margin-bottom:1rem!important}.my-xxl-4{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.my-xxl-5{margin-top:3rem!important;margin-bottom:3rem!important}.my-xxl-auto{margin-top:auto!important;margin-bottom:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-right:0!important;padding-left:0!important}.px-xxl-1{padding-right:.25rem!important;padding-left:.25rem!important}.px-xxl-2{padding-right:.5rem!important;padding-left:.5rem!important}.px-xxl-3{padding-right:1rem!important;padding-left:1rem!important}.px-xxl-4{padding-right:1.5rem!important;padding-left:1.5rem!important}.px-xxl-5{padding-right:3rem!important;padding-left:3rem!important}.py-xxl-0{padding-top:0!important;padding-bottom:0!important}.py-xxl-1{padding-top:.25rem!important;padding-bottom:.25rem!important}.py-xxl-2{padding-top:.5rem!important;padding-bottom:.5rem!important}.py-xxl-3{padding-top:1rem!important;padding-bottom:1rem!important}.py-xxl-4{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.py-xxl-5{padding-top:3rem!important;padding-bottom:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}\r\n";
  styleInject(css_248z$1);

  /**
   * Determines if a given element is a DOM element name (i.e. not a React component).
   */
  function isHostComponent(element) {
    return typeof element === 'string';
  }

  /**
   * Type of the ownerState based on the type of an element it applies to.
   * This resolves to the provided OwnerState for React components and `undefined` for host components.
   * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
   */

  /**
   * Appends the ownerState object to the props, merging with the existing one if necessary.
   *
   * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
   * @param otherProps Props of the element.
   * @param ownerState
   */
  function appendOwnerState(elementType, otherProps, ownerState) {
    if (elementType === undefined || isHostComponent(elementType)) {
      return otherProps;
    }
    return _extends({}, otherProps, {
      ownerState: _extends({}, otherProps.ownerState, ownerState)
    });
  }

  var jsxRuntime = {exports: {}};

  var reactJsxRuntime_production_min = {};

  /** @license React v17.0.0
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactJsxRuntime_production_min;

  function requireReactJsxRuntime_production_min () {
  	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  	hasRequiredReactJsxRuntime_production_min = 1;
  requireObjectAssign();var f=React,g=60103;reactJsxRuntime_production_min.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");reactJsxRuntime_production_min.Fragment=h("react.fragment");}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
  	function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
  	return reactJsxRuntime_production_min;
  }

  var hasRequiredJsxRuntime;

  function requireJsxRuntime () {
  	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  	hasRequiredJsxRuntime = 1;

  	{
  	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
  	}
  	return jsxRuntime.exports;
  }

  var jsxRuntimeExports = requireJsxRuntime();

  const defaultContextValue = {
    disableDefaultClasses: false
  };
  const ClassNameConfiguratorContext = /*#__PURE__*/React__namespace.createContext(defaultContextValue);
  /**
   * @ignore - internal hook.
   *
   * Wraps the `generateUtilityClass` function and controls how the classes are generated.
   * Currently it only affects whether the classes are applied or not.
   *
   * @returns Function to be called with the `generateUtilityClass` function specific to a component to generate the classes.
   */
  function useClassNamesOverride(generateUtilityClass) {
    const {
      disableDefaultClasses
    } = React__namespace.useContext(ClassNameConfiguratorContext);
    return slot => {
      if (disableDefaultClasses) {
        return '';
      }
      return generateUtilityClass(slot);
    };
  }

  /**
   * Extracts event handlers from a given object.
   * A prop is considered an event handler if it is a function and its name starts with `on`.
   *
   * @param object An object to extract event handlers from.
   * @param excludeKeys An array of keys to exclude from the returned object.
   */
  function extractEventHandlers(object, excludeKeys = []) {
    if (object === undefined) {
      return {};
    }
    const result = {};
    Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
      result[prop] = object[prop];
    });
    return result;
  }

  /**
   * If `componentProps` is a function, calls it with the provided `ownerState`.
   * Otherwise, just returns `componentProps`.
   */
  function resolveComponentProps(componentProps, ownerState, slotState) {
    if (typeof componentProps === 'function') {
      return componentProps(ownerState, slotState);
    }
    return componentProps;
  }

  function isPlainObject(item) {
    return item !== null && typeof item === 'object' && item.constructor === Object;
  }
  function deepClone(source) {
    if (!isPlainObject(source)) {
      return source;
    }
    const output = {};
    Object.keys(source).forEach(key => {
      output[key] = deepClone(source[key]);
    });
    return output;
  }
  function deepmerge(target, source, options = {
    clone: true
  }) {
    const output = options.clone ? _extends({}, target) : target;
    if (isPlainObject(target) && isPlainObject(source)) {
      Object.keys(source).forEach(key => {
        // Avoid prototype pollution
        if (key === '__proto__') {
          return;
        }
        if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
          // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
          output[key] = deepmerge(target[key], source[key], options);
        } else if (options.clone) {
          output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
        } else {
          output[key] = source[key];
        }
      });
    }
    return output;
  }

  /**
   * WARNING: Don't import this directly.
   * Use `MuiError` from `@mui/utils/macros/MuiError.macro` instead.
   * @param {number} code
   */
  function formatMuiErrorMessage(code) {
    // Apply babel-plugin-transform-template-literals in loose mode
    // loose mode is safe iff we're concatenating primitives
    // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose
    /* eslint-disable prefer-template */
    let url = 'https://mui.com/production-error/?code=' + code;
    for (let i = 1; i < arguments.length; i += 1) {
      // rest params over-transpile for this case
      // eslint-disable-next-line prefer-rest-params
      url += '&args[]=' + encodeURIComponent(arguments[i]);
    }
    return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
    /* eslint-enable prefer-template */
  }

  // It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
  //
  // A strict capitalization should uppercase the first letter of each word in the sentence.
  // We only handle the first word.
  function capitalize(string) {
    if (typeof string !== 'string') {
      throw new Error(formatMuiErrorMessage(7));
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * Safe chained function.
   *
   * Will only create a new function if needed,
   * otherwise will pass back existing functions or null.
   */
  function createChainedFunction(...funcs) {
    return funcs.reduce((acc, func) => {
      if (func == null) {
        return acc;
      }
      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    }, () => {});
  }

  // Corresponds to 10 frames at 60 Hz.
  // A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
  function debounce(func, wait = 166) {
    let timeout;
    function debounced(...args) {
      const later = () => {
        // @ts-ignore
        func.apply(this, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }
    debounced.clear = () => {
      clearTimeout(timeout);
    };
    return debounced;
  }

  function isMuiElement(element, muiNames) {
    return /*#__PURE__*/React__namespace.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
  }

  function ownerDocument(node) {
    return node && node.ownerDocument || document;
  }

  function ownerWindow(node) {
    const doc = ownerDocument(node);
    return doc.defaultView || window;
  }

  /**
   * TODO v5: consider making it private
   *
   * passes {value} to {ref}
   *
   * WARNING: Be sure to only call this inside a callback that is passed as a ref.
   * Otherwise, make sure to cleanup the previous {ref} if it changes. See
   * https://github.com/mui/material-ui/issues/13539
   *
   * Useful if you want to expose the ref of an inner component to the public API
   * while still using it inside the component.
   * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
   */
  function setRef(ref, value) {
    if (typeof ref === 'function') {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }

  const useEnhancedEffect = typeof window !== 'undefined' ? React__namespace.useLayoutEffect : React__namespace.useEffect;
  var useEnhancedEffect$1 = useEnhancedEffect;

  /* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
  function useControlled({
    controlled,
    default: defaultProp,
    name,
    state = 'value'
  }) {
    // isControlled is ignored in the hook dependency lists as it should never change.
    const {
      current: isControlled
    } = React__namespace.useRef(controlled !== undefined);
    const [valueState, setValue] = React__namespace.useState(defaultProp);
    const value = isControlled ? controlled : valueState;
    const setValueIfUncontrolled = React__namespace.useCallback(newValue => {
      if (!isControlled) {
        setValue(newValue);
      }
    }, []);
    return [value, setValueIfUncontrolled];
  }

  /**
   * https://github.com/facebook/react/issues/14099#issuecomment-440013892
   */
  function useEventCallback(fn) {
    const ref = React__namespace.useRef(fn);
    useEnhancedEffect$1(() => {
      ref.current = fn;
    });
    return React__namespace.useCallback((...args) =>
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, ref.current)(...args), []);
  }

  function useForkRef(...refs) {
    /**
     * This will create a new function if the refs passed to this hook change and are all defined.
     * This means react will call the old forkRef with `null` and the new forkRef
     * with the ref. Cleanup naturally emerges from this behavior.
     */
    return React__namespace.useMemo(() => {
      if (refs.every(ref => ref == null)) {
        return null;
      }
      return instance => {
        refs.forEach(ref => {
          setRef(ref, instance);
        });
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, refs);
  }

  // based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
  let hadKeyboardEvent = true;
  let hadFocusVisibleRecently = false;
  let hadFocusVisibleRecentlyTimeout;
  const inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} node
   * @returns {boolean}
   */
  function focusTriggersKeyboardModality(node) {
    const {
      type,
      tagName
    } = node;
    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
      return true;
    }
    if (tagName === 'TEXTAREA' && !node.readOnly) {
      return true;
    }
    if (node.isContentEditable) {
      return true;
    }
    return false;
  }

  /**
   * Keep track of our keyboard modality state with `hadKeyboardEvent`.
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * @param {KeyboardEvent} event
   */
  function handleKeyDown(event) {
    if (event.metaKey || event.altKey || event.ctrlKey) {
      return;
    }
    hadKeyboardEvent = true;
  }

  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   */
  function handlePointerDown() {
    hadKeyboardEvent = false;
  }
  function handleVisibilityChange() {
    if (this.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
    }
  }
  function prepare(doc) {
    doc.addEventListener('keydown', handleKeyDown, true);
    doc.addEventListener('mousedown', handlePointerDown, true);
    doc.addEventListener('pointerdown', handlePointerDown, true);
    doc.addEventListener('touchstart', handlePointerDown, true);
    doc.addEventListener('visibilitychange', handleVisibilityChange, true);
  }
  function isFocusVisible(event) {
    const {
      target
    } = event;
    try {
      return target.matches(':focus-visible');
    } catch (error) {
      // Browsers not implementing :focus-visible will throw a SyntaxError.
      // We use our own heuristic for those browsers.
      // Rethrow might be better if it's not the expected error but do we really
      // want to crash if focus-visible malfunctioned?
    }

    // No need for validFocusTarget check. The user does that by attaching it to
    // focusable events only.
    return hadKeyboardEvent || focusTriggersKeyboardModality(target);
  }
  function useIsFocusVisible() {
    const ref = React__namespace.useCallback(node => {
      if (node != null) {
        prepare(node.ownerDocument);
      }
    }, []);
    const isFocusVisibleRef = React__namespace.useRef(false);

    /**
     * Should be called if a blur event is fired
     */
    function handleBlurVisible() {
      // checking against potential state variable does not suffice if we focus and blur synchronously.
      // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
      // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
      // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
      // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
      if (isFocusVisibleRef.current) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
          hadFocusVisibleRecently = false;
        }, 100);
        isFocusVisibleRef.current = false;
        return true;
      }
      return false;
    }

    /**
     * Should be called if a blur event is fired
     */
    function handleFocusVisible(event) {
      if (isFocusVisible(event)) {
        isFocusVisibleRef.current = true;
        return true;
      }
      return false;
    }
    return {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref
    };
  }

  // A change of the browser zoom change the scrollbar size.
  // Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
  function getScrollbarSize(doc) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = doc.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }

  /**
   * Add keys, values of `defaultProps` that does not exist in `props`
   * @param {object} defaultProps
   * @param {object} props
   * @returns {object} resolved props
   */
  function resolveProps(defaultProps, props) {
    const output = _extends({}, props);
    Object.keys(defaultProps).forEach(propName => {
      if (propName.toString().match(/^(components|slots)$/)) {
        output[propName] = _extends({}, defaultProps[propName], output[propName]);
      } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
        const defaultSlotProps = defaultProps[propName] || {};
        const slotProps = props[propName];
        output[propName] = {};
        if (!slotProps || !Object.keys(slotProps)) {
          // Reduce the iteration if the slot props is empty
          output[propName] = defaultSlotProps;
        } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
          // Reduce the iteration if the default slot props is empty
          output[propName] = slotProps;
        } else {
          output[propName] = _extends({}, slotProps);
          Object.keys(defaultSlotProps).forEach(slotPropName => {
            output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
          });
        }
      } else if (output[propName] === undefined) {
        output[propName] = defaultProps[propName];
      }
    });
    return output;
  }

  function composeClasses(slots, getUtilityClass, classes = undefined) {
    const output = {};
    Object.keys(slots).forEach(
    // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    slot => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          const utilityClass = getUtilityClass(key);
          if (utilityClass !== '') {
            acc.push(utilityClass);
          }
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }
        }
        return acc;
      }, []).join(' ');
    });
    return output;
  }

  const defaultGenerator = componentName => componentName;
  const createClassNameGenerator = () => {
    let generate = defaultGenerator;
    return {
      configure(generator) {
        generate = generator;
      },
      generate(componentName) {
        return generate(componentName);
      },
      reset() {
        generate = defaultGenerator;
      }
    };
  };
  const ClassNameGenerator = createClassNameGenerator();
  var ClassNameGenerator$1 = ClassNameGenerator;

  const globalStateClassesMapping = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    readOnly: 'readOnly',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    required: 'required',
    selected: 'selected'
  };
  function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
    const globalStateClass = globalStateClassesMapping[slot];
    return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator$1.generate(componentName)}-${slot}`;
  }

  function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
    const result = {};
    slots.forEach(slot => {
      result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
    });
    return result;
  }

  function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

  /**
   * Removes event handlers from the given object.
   * A field is considered an event handler if it is a function with a name beginning with `on`.
   *
   * @param object Object to remove event handlers from.
   * @returns Object with event handlers removed.
   */
  function omitEventHandlers(object) {
    if (object === undefined) {
      return {};
    }
    const result = {};
    Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
      result[prop] = object[prop];
    });
    return result;
  }

  /**
   * Merges the slot component internal props (usually coming from a hook)
   * with the externally provided ones.
   *
   * The merge order is (the latter overrides the former):
   * 1. The internal props (specified as a getter function to work with get*Props hook result)
   * 2. Additional props (specified internally on a Base UI component)
   * 3. External props specified on the owner component. These should only be used on a root slot.
   * 4. External props specified in the `slotProps.*` prop.
   * 5. The `className` prop - combined from all the above.
   * @param parameters
   * @returns
   */
  function mergeSlotProps(parameters) {
    const {
      getSlotProps,
      additionalProps,
      externalSlotProps,
      externalForwardedProps,
      className
    } = parameters;
    if (!getSlotProps) {
      // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
      // so we can simply merge all the props without having to worry about extracting event handlers.
      const joinedClasses = clsx(externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className, className, additionalProps == null ? void 0 : additionalProps.className);
      const mergedStyle = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
      const props = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
      if (joinedClasses.length > 0) {
        props.className = joinedClasses;
      }
      if (Object.keys(mergedStyle).length > 0) {
        props.style = mergedStyle;
      }
      return {
        props,
        internalRef: undefined
      };
    }

    // In this case, getSlotProps is responsible for calling the external event handlers.
    // We don't need to include them in the merged props because of this.

    const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
    const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
    const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
    const internalSlotProps = getSlotProps(eventHandlers);

    // The order of classes is important here.
    // Emotion (that we use in libraries consuming Base UI) depends on this order
    // to properly override style. It requires the most important classes to be last
    // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
    const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: internalSlotProps.ref
    };
  }

  const _excluded$K = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
  /**
   * @ignore - do not document.
   * Builds the props to be passed into the slot of an unstyled component.
   * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
   * If the slot component is not a host component, it also merges in the `ownerState`.
   *
   * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
   */
  function useSlotProps(parameters) {
    var _parameters$additiona;
    const {
        elementType,
        externalSlotProps,
        ownerState,
        skipResolvingSlotProps = false
      } = parameters,
      rest = _objectWithoutPropertiesLoose(parameters, _excluded$K);
    const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
    const {
      props: mergedProps,
      internalRef
    } = mergeSlotProps(_extends({}, rest, {
      externalSlotProps: resolvedComponentsProps
    }));
    const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
    const props = appendOwnerState(elementType, _extends({}, mergedProps, {
      ref
    }), ownerState);
    return props;
  }

  /* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */
  // Inspired by https://github.com/focus-trap/tabbable
  const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');
  function getTabIndex(node) {
    const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);
    if (!Number.isNaN(tabindexAttr)) {
      return tabindexAttr;
    }

    // Browsers do not return `tabIndex` correctly for contentEditable nodes;
    // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    //  yet they are still part of the regular tab order; in FF, they get a default
    //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    //  order, consider their tab index to be 0.
    if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
      return 0;
    }
    return node.tabIndex;
  }
  function isNonTabbableRadio(node) {
    if (node.tagName !== 'INPUT' || node.type !== 'radio') {
      return false;
    }
    if (!node.name) {
      return false;
    }
    const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
    let roving = getRadio(`[name="${node.name}"]:checked`);
    if (!roving) {
      roving = getRadio(`[name="${node.name}"]`);
    }
    return roving !== node;
  }
  function isNodeMatchingSelectorFocusable(node) {
    if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
      return false;
    }
    return true;
  }
  function defaultGetTabbable(root) {
    const regularTabNodes = [];
    const orderedTabNodes = [];
    Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
      const nodeTabIndex = getTabIndex(node);
      if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
        return;
      }
      if (nodeTabIndex === 0) {
        regularTabNodes.push(node);
      } else {
        orderedTabNodes.push({
          documentOrder: i,
          tabIndex: nodeTabIndex,
          node: node
        });
      }
    });
    return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
  }
  function defaultIsEnabled() {
    return true;
  }

  /**
   * Utility component that locks focus inside the component.
   *
   * Demos:
   *
   * - [Focus Trap](https://mui.com/base-ui/react-focus-trap/)
   *
   * API:
   *
   * - [FocusTrap API](https://mui.com/base-ui/react-focus-trap/components-api/#focus-trap)
   */
  function FocusTrap(props) {
    const {
      children,
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableRestoreFocus = false,
      getTabbable = defaultGetTabbable,
      isEnabled = defaultIsEnabled,
      open
    } = props;
    const ignoreNextEnforceFocus = React__namespace.useRef(false);
    const sentinelStart = React__namespace.useRef(null);
    const sentinelEnd = React__namespace.useRef(null);
    const nodeToRestore = React__namespace.useRef(null);
    const reactFocusEventTarget = React__namespace.useRef(null);
    // This variable is useful when disableAutoFocus is true.
    // It waits for the active element to move into the component to activate.
    const activated = React__namespace.useRef(false);
    const rootRef = React__namespace.useRef(null);
    // @ts-expect-error TODO upstream fix
    const handleRef = useForkRef(children.ref, rootRef);
    const lastKeydown = React__namespace.useRef(null);
    React__namespace.useEffect(() => {
      // We might render an empty child.
      if (!open || !rootRef.current) {
        return;
      }
      activated.current = !disableAutoFocus;
    }, [disableAutoFocus, open]);
    React__namespace.useEffect(() => {
      // We might render an empty child.
      if (!open || !rootRef.current) {
        return;
      }
      const doc = ownerDocument(rootRef.current);
      if (!rootRef.current.contains(doc.activeElement)) {
        if (!rootRef.current.hasAttribute('tabIndex')) {
          rootRef.current.setAttribute('tabIndex', '-1');
        }
        if (activated.current) {
          rootRef.current.focus();
        }
      }
      return () => {
        // restoreLastFocus()
        if (!disableRestoreFocus) {
          // In IE11 it is possible for document.activeElement to be null resulting
          // in nodeToRestore.current being null.
          // Not all elements in IE11 have a focus method.
          // Once IE11 support is dropped the focus() call can be unconditional.
          if (nodeToRestore.current && nodeToRestore.current.focus) {
            ignoreNextEnforceFocus.current = true;
            nodeToRestore.current.focus();
          }
          nodeToRestore.current = null;
        }
      };
      // Missing `disableRestoreFocus` which is fine.
      // We don't support changing that prop on an open FocusTrap
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);
    React__namespace.useEffect(() => {
      // We might render an empty child.
      if (!open || !rootRef.current) {
        return;
      }
      const doc = ownerDocument(rootRef.current);
      const contain = nativeEvent => {
        const {
          current: rootElement
        } = rootRef;

        // Cleanup functions are executed lazily in React 17.
        // Contain can be called between the component being unmounted and its cleanup function being run.
        if (rootElement === null) {
          return;
        }
        if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
          ignoreNextEnforceFocus.current = false;
          return;
        }
        if (!rootElement.contains(doc.activeElement)) {
          // if the focus event is not coming from inside the children's react tree, reset the refs
          if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
            reactFocusEventTarget.current = null;
          } else if (reactFocusEventTarget.current !== null) {
            return;
          }
          if (!activated.current) {
            return;
          }
          let tabbable = [];
          if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
            tabbable = getTabbable(rootRef.current);
          }
          if (tabbable.length > 0) {
            var _lastKeydown$current, _lastKeydown$current2;
            const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
            const focusNext = tabbable[0];
            const focusPrevious = tabbable[tabbable.length - 1];
            if (typeof focusNext !== 'string' && typeof focusPrevious !== 'string') {
              if (isShiftTab) {
                focusPrevious.focus();
              } else {
                focusNext.focus();
              }
            }
          } else {
            rootElement.focus();
          }
        }
      };
      const loopFocus = nativeEvent => {
        lastKeydown.current = nativeEvent;
        if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
          return;
        }

        // Make sure the next tab starts from the right place.
        // doc.activeElement refers to the origin.
        if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
          // We need to ignore the next contain as
          // it will try to move the focus back to the rootRef element.
          ignoreNextEnforceFocus.current = true;
          if (sentinelEnd.current) {
            sentinelEnd.current.focus();
          }
        }
      };
      doc.addEventListener('focusin', contain);
      doc.addEventListener('keydown', loopFocus, true);

      // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
      // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
      // Instead, we can look if the active element was restored on the BODY element.
      //
      // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
      // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
      const interval = setInterval(() => {
        if (doc.activeElement && doc.activeElement.tagName === 'BODY') {
          contain(null);
        }
      }, 50);
      return () => {
        clearInterval(interval);
        doc.removeEventListener('focusin', contain);
        doc.removeEventListener('keydown', loopFocus, true);
      };
    }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
    const onFocus = event => {
      if (nodeToRestore.current === null) {
        nodeToRestore.current = event.relatedTarget;
      }
      activated.current = true;
      reactFocusEventTarget.current = event.target;
      const childrenPropsHandler = children.props.onFocus;
      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };
    const handleFocusSentinel = event => {
      if (nodeToRestore.current === null) {
        nodeToRestore.current = event.relatedTarget;
      }
      activated.current = true;
    };
    return /*#__PURE__*/jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        tabIndex: open ? 0 : -1,
        onFocus: handleFocusSentinel,
        ref: sentinelStart,
        "data-testid": "sentinelStart"
      }), /*#__PURE__*/React__namespace.cloneElement(children, {
        ref: handleRef,
        onFocus
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        tabIndex: open ? 0 : -1,
        onFocus: handleFocusSentinel,
        ref: sentinelEnd,
        "data-testid": "sentinelEnd"
      })]
    });
  }

  function getContainer$1(container) {
    return typeof container === 'function' ? container() : container;
  }

  /**
   * Portals provide a first-class way to render children into a DOM node
   * that exists outside the DOM hierarchy of the parent component.
   *
   * Demos:
   *
   * - [Portal](https://mui.com/base-ui/react-portal/)
   *
   * API:
   *
   * - [Portal API](https://mui.com/base-ui/react-portal/components-api/#portal)
   */
  const Portal = /*#__PURE__*/React__namespace.forwardRef(function Portal(props, forwardedRef) {
    const {
      children,
      container,
      disablePortal = false
    } = props;
    const [mountNode, setMountNode] = React__namespace.useState(null);
    // @ts-expect-error TODO upstream fix
    const handleRef = useForkRef( /*#__PURE__*/React__namespace.isValidElement(children) ? children.ref : null, forwardedRef);
    useEnhancedEffect$1(() => {
      if (!disablePortal) {
        setMountNode(getContainer$1(container) || document.body);
      }
    }, [container, disablePortal]);
    useEnhancedEffect$1(() => {
      if (mountNode && !disablePortal) {
        setRef(forwardedRef, mountNode);
        return () => {
          setRef(forwardedRef, null);
        };
      }
      return undefined;
    }, [forwardedRef, mountNode, disablePortal]);
    if (disablePortal) {
      if ( /*#__PURE__*/React__namespace.isValidElement(children)) {
        const newProps = {
          ref: handleRef
        };
        return /*#__PURE__*/React__namespace.cloneElement(children, newProps);
      }
      return /*#__PURE__*/jsxRuntimeExports.jsx(React__namespace.Fragment, {
        children: children
      });
    }
    return /*#__PURE__*/jsxRuntimeExports.jsx(React__namespace.Fragment, {
      children: mountNode ? /*#__PURE__*/ReactDOM__namespace.createPortal(children, mountNode) : mountNode
    });
  });
  var Portal$1 = Portal;

  // Is a vertical scrollbar displayed?
  function isOverflowing(container) {
    const doc = ownerDocument(container);
    if (doc.body === container) {
      return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
    }
    return container.scrollHeight > container.clientHeight;
  }
  function ariaHidden(element, show) {
    if (show) {
      element.setAttribute('aria-hidden', 'true');
    } else {
      element.removeAttribute('aria-hidden');
    }
  }
  function getPaddingRight(element) {
    return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
  }
  function isAriaHiddenForbiddenOnElement(element) {
    // The forbidden HTML tags are the ones from ARIA specification that
    // can be children of body and can't have aria-hidden attribute.
    // cf. https://www.w3.org/TR/html-aria/#docconformance
    const forbiddenTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE', 'LINK', 'MAP', 'META', 'NOSCRIPT', 'PICTURE', 'COL', 'COLGROUP', 'PARAM', 'SLOT', 'SOURCE', 'TRACK'];
    const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
    const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
    return isForbiddenTagName || isInputHidden;
  }
  function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
    const blacklist = [mountElement, currentElement, ...elementsToExclude];
    [].forEach.call(container.children, element => {
      const isNotExcludedElement = blacklist.indexOf(element) === -1;
      const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
      if (isNotExcludedElement && isNotForbiddenElement) {
        ariaHidden(element, show);
      }
    });
  }
  function findIndexOf(items, callback) {
    let idx = -1;
    items.some((item, index) => {
      if (callback(item)) {
        idx = index;
        return true;
      }
      return false;
    });
    return idx;
  }
  function handleContainer(containerInfo, props) {
    const restoreStyle = [];
    const container = containerInfo.container;
    if (!props.disableScrollLock) {
      if (isOverflowing(container)) {
        // Compute the size before applying overflow hidden to avoid any scroll jumps.
        const scrollbarSize = getScrollbarSize(ownerDocument(container));
        restoreStyle.push({
          value: container.style.paddingRight,
          property: 'padding-right',
          el: container
        });
        // Use computed style, here to get the real padding to add our scrollbar width.
        container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;

        // .mui-fixed is a global helper.
        const fixedElements = ownerDocument(container).querySelectorAll('.mui-fixed');
        [].forEach.call(fixedElements, element => {
          restoreStyle.push({
            value: element.style.paddingRight,
            property: 'padding-right',
            el: element
          });
          element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
        });
      }
      let scrollContainer;
      if (container.parentNode instanceof DocumentFragment) {
        scrollContainer = ownerDocument(container).body;
      } else {
        // Improve Gatsby support
        // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
        const parent = container.parentElement;
        const containerWindow = ownerWindow(container);
        scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
      }

      // Block the scroll even if no scrollbar is visible to account for mobile keyboard
      // screensize shrink.
      restoreStyle.push({
        value: scrollContainer.style.overflow,
        property: 'overflow',
        el: scrollContainer
      }, {
        value: scrollContainer.style.overflowX,
        property: 'overflow-x',
        el: scrollContainer
      }, {
        value: scrollContainer.style.overflowY,
        property: 'overflow-y',
        el: scrollContainer
      });
      scrollContainer.style.overflow = 'hidden';
    }
    const restore = () => {
      restoreStyle.forEach(({
        value,
        el,
        property
      }) => {
        if (value) {
          el.style.setProperty(property, value);
        } else {
          el.style.removeProperty(property);
        }
      });
    };
    return restore;
  }
  function getHiddenSiblings(container) {
    const hiddenSiblings = [];
    [].forEach.call(container.children, element => {
      if (element.getAttribute('aria-hidden') === 'true') {
        hiddenSiblings.push(element);
      }
    });
    return hiddenSiblings;
  }
  /**
   * @ignore - do not document.
   *
   * Proper state management for containers and the modals in those containers.
   * Simplified, but inspired by react-overlay's ModalManager class.
   * Used by the Modal to ensure proper styling of containers.
   */
  class ModalManager {
    constructor() {
      this.containers = void 0;
      this.modals = void 0;
      this.modals = [];
      this.containers = [];
    }
    add(modal, container) {
      let modalIndex = this.modals.indexOf(modal);
      if (modalIndex !== -1) {
        return modalIndex;
      }
      modalIndex = this.modals.length;
      this.modals.push(modal);

      // If the modal we are adding is already in the DOM.
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }
      const hiddenSiblings = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
      const containerIndex = findIndexOf(this.containers, item => item.container === container);
      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }
      this.containers.push({
        modals: [modal],
        container,
        restore: null,
        hiddenSiblings
      });
      return modalIndex;
    }
    mount(modal, props) {
      const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
      const containerInfo = this.containers[containerIndex];
      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
    remove(modal, ariaHiddenState = true) {
      const modalIndex = this.modals.indexOf(modal);
      if (modalIndex === -1) {
        return modalIndex;
      }
      const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
      const containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1);

      // If that was the last modal in a container, clean up the container.
      if (containerInfo.modals.length === 0) {
        // The modal might be closed before it had the chance to be mounted in the DOM.
        if (containerInfo.restore) {
          containerInfo.restore();
        }
        if (modal.modalRef) {
          // In case the modal wasn't in the DOM yet.
          ariaHidden(modal.modalRef, ariaHiddenState);
        }
        ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
        this.containers.splice(containerIndex, 1);
      } else {
        // Otherwise make sure the next top modal is visible to a screen reader.
        const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
        // as soon as a modal is adding its modalRef is undefined. it can't set
        // aria-hidden because the dom element doesn't exist either
        // when modal was unmounted before modalRef gets null
        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }
      return modalIndex;
    }
    isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
  }

  function getModalUtilityClass(slot) {
    return generateUtilityClass('MuiModal', slot);
  }
  generateUtilityClasses('MuiModal', ['root', 'hidden', 'backdrop']);

  const _excluded$J = ["children", "closeAfterTransition", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "onTransitionEnter", "onTransitionExited", "slotProps", "slots"];
  const useUtilityClasses$t = ownerState => {
    const {
      open,
      exited
    } = ownerState;
    const slots = {
      root: ['root', !open && exited && 'hidden'],
      backdrop: ['backdrop']
    };
    return composeClasses(slots, useClassNamesOverride(getModalUtilityClass));
  };
  function getContainer(container) {
    return typeof container === 'function' ? container() : container;
  }
  function getHasTransition(children) {
    return children ? children.props.hasOwnProperty('in') : false;
  }

  // A modal manager used to track and manage the state of open Modals.
  // Modals don't open on the server so this won't conflict with concurrent requests.
  const defaultManager = new ModalManager();

  /**
   * Modal is a lower-level construct that is leveraged by the following components:
   *
   * *   [Dialog](https://mui.com/material-ui/api/dialog/)
   * *   [Drawer](https://mui.com/material-ui/api/drawer/)
   * *   [Menu](https://mui.com/material-ui/api/menu/)
   * *   [Popover](https://mui.com/material-ui/api/popover/)
   *
   * If you are creating a modal dialog, you probably want to use the [Dialog](https://mui.com/material-ui/api/dialog/) component
   * rather than directly using Modal.
   *
   * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
   *
   * Demos:
   *
   * - [Modal](https://mui.com/base-ui/react-modal/)
   *
   * API:
   *
   * - [Modal API](https://mui.com/base-ui/react-modal/components-api/#modal)
   */
  const Modal$2 = /*#__PURE__*/React__namespace.forwardRef(function Modal(props, forwardedRef) {
    var _props$ariaHidden, _slots$root;
    const {
        children,
        closeAfterTransition = false,
        container,
        disableAutoFocus = false,
        disableEnforceFocus = false,
        disableEscapeKeyDown = false,
        disablePortal = false,
        disableRestoreFocus = false,
        disableScrollLock = false,
        hideBackdrop = false,
        keepMounted = false,
        // private
        manager: managerProp = defaultManager,
        onBackdropClick,
        onClose,
        onKeyDown,
        open,
        onTransitionEnter,
        onTransitionExited,
        slotProps = {},
        slots = {}
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$J);
    // TODO: `modal`` must change its type in this file to match the type of methods
    // provided by `ModalManager`
    const manager = managerProp;
    const [exited, setExited] = React__namespace.useState(!open);
    const modal = React__namespace.useRef({});
    const mountNodeRef = React__namespace.useRef(null);
    const modalRef = React__namespace.useRef(null);
    const handleRef = useForkRef(modalRef, forwardedRef);
    const hasTransition = getHasTransition(children);
    const ariaHiddenProp = (_props$ariaHidden = props['aria-hidden']) != null ? _props$ariaHidden : true;
    const getDoc = () => ownerDocument(mountNodeRef.current);
    const getModal = () => {
      modal.current.modalRef = modalRef.current;
      modal.current.mountNode = mountNodeRef.current;
      return modal.current;
    };
    const handleMounted = () => {
      manager.mount(getModal(), {
        disableScrollLock
      });

      // Fix a bug on Chrome where the scroll isn't initially 0.
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    };
    const handleOpen = useEventCallback(() => {
      const resolvedContainer = getContainer(container) || getDoc().body;
      manager.add(getModal(), resolvedContainer);

      // The element was already mounted.
      if (modalRef.current) {
        handleMounted();
      }
    });
    const isTopModal = React__namespace.useCallback(() => manager.isTopModal(getModal()), [manager]);
    const handlePortalRef = useEventCallback(node => {
      mountNodeRef.current = node;
      if (!node || !modalRef.current) {
        return;
      }
      if (open && isTopModal()) {
        handleMounted();
      } else {
        ariaHidden(modalRef.current, ariaHiddenProp);
      }
    });
    const handleClose = React__namespace.useCallback(() => {
      manager.remove(getModal(), ariaHiddenProp);
    }, [manager, ariaHiddenProp]);
    React__namespace.useEffect(() => {
      return () => {
        handleClose();
      };
    }, [handleClose]);
    React__namespace.useEffect(() => {
      if (open) {
        handleOpen();
      } else if (!hasTransition || !closeAfterTransition) {
        handleClose();
      }
    }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
    const ownerState = _extends({}, props, {
      closeAfterTransition,
      disableAutoFocus,
      disableEnforceFocus,
      disableEscapeKeyDown,
      disablePortal,
      disableRestoreFocus,
      disableScrollLock,
      exited,
      hideBackdrop,
      keepMounted
    });
    const classes = useUtilityClasses$t(ownerState);
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    const handleBackdropClick = event => {
      if (event.target !== event.currentTarget) {
        return;
      }
      if (onBackdropClick) {
        onBackdropClick(event);
      }
      if (onClose) {
        onClose(event, 'backdropClick');
      }
    };
    const handleKeyDown = event => {
      if (onKeyDown) {
        onKeyDown(event);
      }

      // The handler doesn't take event.defaultPrevented into account:
      //
      // event.preventDefault() is meant to stop default behaviors like
      // clicking a checkbox to check it, hitting a button to submit a form,
      // and hitting left arrow to move the cursor in a text input etc.
      // Only special HTML elements have these default behaviors.
      if (event.key !== 'Escape' || !isTopModal()) {
        return;
      }
      if (!disableEscapeKeyDown) {
        // Swallow the event, in case someone is listening for the escape key on the body.
        event.stopPropagation();
        if (onClose) {
          onClose(event, 'escapeKeyDown');
        }
      }
    };
    const childProps = {};
    if (children.props.tabIndex === undefined) {
      childProps.tabIndex = '-1';
    }

    // It's a Transition like component
    if (hasTransition) {
      childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
      childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
    }
    const Root = (_slots$root = slots.root) != null ? _slots$root : 'div';
    const rootProps = useSlotProps({
      elementType: Root,
      externalSlotProps: slotProps.root,
      externalForwardedProps: other,
      additionalProps: {
        ref: handleRef,
        role: 'presentation',
        onKeyDown: handleKeyDown
      },
      className: classes.root,
      ownerState
    });
    const BackdropComponent = slots.backdrop;
    const backdropProps = useSlotProps({
      elementType: BackdropComponent,
      externalSlotProps: slotProps.backdrop,
      additionalProps: {
        'aria-hidden': true,
        onClick: handleBackdropClick,
        open
      },
      className: classes.backdrop,
      ownerState
    });
    if (!keepMounted && !open && (!hasTransition || exited)) {
      return null;
    }
    return /*#__PURE__*/jsxRuntimeExports.jsx(Portal$1
    // @ts-expect-error TODO: include ref to Base UI Portal props
    , {
      ref: handlePortalRef,
      container: container,
      disablePortal: disablePortal,
      children: /*#__PURE__*/jsxRuntimeExports.jsxs(Root, _extends({}, rootProps, {
        children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/jsxRuntimeExports.jsx(BackdropComponent, _extends({}, backdropProps)) : null, /*#__PURE__*/jsxRuntimeExports.jsx(FocusTrap, {
          disableEnforceFocus: disableEnforceFocus,
          disableAutoFocus: disableAutoFocus,
          disableRestoreFocus: disableRestoreFocus,
          isEnabled: isTopModal,
          open: open,
          children: /*#__PURE__*/React__namespace.cloneElement(children, childProps)
        })]
      }))
    });
  });
  var ModalUnstyled = Modal$2;

  const _excluded$I = ["onChange", "maxRows", "minRows", "style", "value"];
  function getStyleValue$1(value) {
    return parseInt(value, 10) || 0;
  }
  const styles$2 = {
    shadow: {
      // Visibility needed to hide the extra text area on iPads
      visibility: 'hidden',
      // Remove from the content flow
      position: 'absolute',
      // Ignore the scrollbar width
      overflow: 'hidden',
      height: 0,
      top: 0,
      left: 0,
      // Create a new layer, increase the isolation of the computed values
      transform: 'translateZ(0)'
    }
  };
  function isEmpty$4(obj) {
    return obj === undefined || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflow;
  }

  /**
   *
   * Demos:
   *
   * - [Textarea Autosize](https://mui.com/base-ui/react-textarea-autosize/)
   * - [Textarea Autosize](https://mui.com/material-ui/react-textarea-autosize/)
   *
   * API:
   *
   * - [TextareaAutosize API](https://mui.com/base-ui/react-textarea-autosize/components-api/#textarea-autosize)
   */
  const TextareaAutosize = /*#__PURE__*/React__namespace.forwardRef(function TextareaAutosize(props, forwardedRef) {
    const {
        onChange,
        maxRows,
        minRows = 1,
        style,
        value
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$I);
    const {
      current: isControlled
    } = React__namespace.useRef(value != null);
    const inputRef = React__namespace.useRef(null);
    const handleRef = useForkRef(forwardedRef, inputRef);
    const shadowRef = React__namespace.useRef(null);
    const renders = React__namespace.useRef(0);
    const [state, setState] = React__namespace.useState({
      outerHeightStyle: 0
    });
    const getUpdatedState = React__namespace.useCallback(() => {
      const input = inputRef.current;
      const containerWindow = ownerWindow(input);
      const computedStyle = containerWindow.getComputedStyle(input);

      // If input's width is shrunk and it's not visible, don't sync height.
      if (computedStyle.width === '0px') {
        return {
          outerHeightStyle: 0
        };
      }
      const inputShallow = shadowRef.current;
      inputShallow.style.width = computedStyle.width;
      inputShallow.value = input.value || props.placeholder || 'x';
      if (inputShallow.value.slice(-1) === '\n') {
        // Certain fonts which overflow the line height will cause the textarea
        // to report a different scrollHeight depending on whether the last line
        // is empty. Make it non-empty to avoid this issue.
        inputShallow.value += ' ';
      }
      const boxSizing = computedStyle.boxSizing;
      const padding = getStyleValue$1(computedStyle.paddingBottom) + getStyleValue$1(computedStyle.paddingTop);
      const border = getStyleValue$1(computedStyle.borderBottomWidth) + getStyleValue$1(computedStyle.borderTopWidth);

      // The height of the inner content
      const innerHeight = inputShallow.scrollHeight;

      // Measure height of a textarea with a single row
      inputShallow.value = 'x';
      const singleRowHeight = inputShallow.scrollHeight;

      // The height of the outer content
      let outerHeight = innerHeight;
      if (minRows) {
        outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
      }
      if (maxRows) {
        outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
      }
      outerHeight = Math.max(outerHeight, singleRowHeight);

      // Take the box sizing into account for applying this value as a style.
      const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
      const overflow = Math.abs(outerHeight - innerHeight) <= 1;
      return {
        outerHeightStyle,
        overflow
      };
    }, [maxRows, minRows, props.placeholder]);
    const updateState = (prevState, newState) => {
      const {
        outerHeightStyle,
        overflow
      } = newState;
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow,
          outerHeightStyle
        };
      }
      return prevState;
    };
    const syncHeight = React__namespace.useCallback(() => {
      const newState = getUpdatedState();
      if (isEmpty$4(newState)) {
        return;
      }
      setState(prevState => {
        return updateState(prevState, newState);
      });
    }, [getUpdatedState]);
    const syncHeightWithFlushSync = () => {
      const newState = getUpdatedState();
      if (isEmpty$4(newState)) {
        return;
      }

      // In React 18, state updates in a ResizeObserver's callback are happening after the paint which causes flickering
      // when doing some visual updates in it. Using flushSync ensures that the dom will be painted after the states updates happen
      // Related issue - https://github.com/facebook/react/issues/24331
      ReactDOM__namespace.flushSync(() => {
        setState(prevState => {
          return updateState(prevState, newState);
        });
      });
    };
    React__namespace.useEffect(() => {
      const handleResize = debounce(() => {
        renders.current = 0;

        // If the TextareaAutosize component is replaced by Suspense with a fallback, the last
        // ResizeObserver's handler that runs because of the change in the layout is trying to
        // access a dom node that is no longer there (as the fallback component is being shown instead).
        // See https://github.com/mui/material-ui/issues/32640
        if (inputRef.current) {
          syncHeightWithFlushSync();
        }
      });
      let resizeObserver;
      const input = inputRef.current;
      const containerWindow = ownerWindow(input);
      containerWindow.addEventListener('resize', handleResize);
      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(input);
      }
      return () => {
        handleResize.clear();
        containerWindow.removeEventListener('resize', handleResize);
        if (resizeObserver) {
          resizeObserver.disconnect();
        }
      };
    });
    useEnhancedEffect$1(() => {
      syncHeight();
    });
    React__namespace.useEffect(() => {
      renders.current = 0;
    }, [value]);
    const handleChange = event => {
      renders.current = 0;
      if (!isControlled) {
        syncHeight();
      }
      if (onChange) {
        onChange(event);
      }
    };
    return /*#__PURE__*/jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("textarea", _extends({
        value: value,
        onChange: handleChange,
        ref: handleRef
        // Apply the rows prop to get a "correct" first SSR paint
        ,
        rows: minRows,
        style: _extends({
          height: state.outerHeightStyle,
          // Need a large enough difference to allow scrolling.
          // This prevents infinite rendering loop.
          overflow: state.overflow ? 'hidden' : undefined
        }, style)
      }, other)), /*#__PURE__*/jsxRuntimeExports.jsx("textarea", {
        "aria-hidden": true,
        className: props.className,
        readOnly: true,
        ref: shadowRef,
        tabIndex: -1,
        style: _extends({}, styles$2.shadow, style, {
          paddingTop: 0,
          paddingBottom: 0
        })
      })]
    });
  });
  var TextareaAutosize$1 = TextareaAutosize;

  function formControlState({
    props,
    states,
    muiFormControl
  }) {
    return states.reduce((acc, state) => {
      acc[state] = props[state];
      if (muiFormControl) {
        if (typeof props[state] === 'undefined') {
          acc[state] = muiFormControl[state];
        }
      }
      return acc;
    }, {});
  }

  /**
   * @ignore - internal component.
   */
  const FormControlContext = /*#__PURE__*/React__namespace.createContext(undefined);
  var FormControlContext$1 = FormControlContext;

  function useFormControl() {
    return React__namespace.useContext(FormControlContext$1);
  }

  function memoize$1(fn) {
    var cache = Object.create(null);
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

  var isPropValid = /* #__PURE__ */memoize$1(function (prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
    /* o */
    && prop.charCodeAt(1) === 110
    /* n */
    && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
  );

  /*

  Based off glamor's StyleSheet, thanks Sunil ❤️

  high performance StyleSheet for css-in-js systems

  - uses multiple style tags behind the scenes for millions of rules
  - uses `insertRule` for appending in production for *much* faster performance

  // usage

  import { StyleSheet } from '@emotion/sheet'

  let styleSheet = new StyleSheet({ key: '', container: document.head })

  styleSheet.insert('#box { border: 1px solid red; }')
  - appends a css rule into the stylesheet

  styleSheet.flush()
  - empties the stylesheet of all its contents

  */
  // $FlowFixMe
  function sheetForTag(tag) {
    if (tag.sheet) {
      // $FlowFixMe
      return tag.sheet;
    } // this weirdness brought to you by firefox

    /* istanbul ignore next */


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        // $FlowFixMe
        return document.styleSheets[i];
      }
    }
  }

  function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);

    if (options.nonce !== undefined) {
      tag.setAttribute('nonce', options.nonce);
    }

    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
  }

  var StyleSheet = /*#__PURE__*/function () {
    // Using Node instead of HTMLElement since container may be a ShadowRoot
    function StyleSheet(options) {
      var _this = this;

      this._insertTag = function (tag) {
        var before;

        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }

        _this.container.insertBefore(tag, before);

        _this.tags.push(tag);
      };

      this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }

    var _proto = StyleSheet.prototype;

    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };

    _proto.insert = function insert(rule) {
      // the max length is how many rules we have per style tag, it's 65000 in speedy mode
      // it's 1 in dev because we insert source maps that map a single rule to a location
      // and you can only have one source map per style tag
      if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }

      var tag = this.tags[this.tags.length - 1];

      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);

        try {
          // this is the ultrafast version, works across browsers
          // the big drawback is that the css won't be editable in devtools
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {
        }
      } else {
        tag.appendChild(document.createTextNode(rule));
      }

      this.ctr++;
    };

    _proto.flush = function flush() {
      // $FlowFixMe
      this.tags.forEach(function (tag) {
        return tag.parentNode && tag.parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };

    return StyleSheet;
  }();

  var MS = '-ms-';
  var MOZ = '-moz-';
  var WEBKIT = '-webkit-';

  var COMMENT = 'comm';
  var RULESET = 'rule';
  var DECLARATION = 'decl';
  var IMPORT = '@import';
  var KEYFRAMES = '@keyframes';
  var LAYER = '@layer';

  /**
   * @param {number}
   * @return {number}
   */
  var abs = Math.abs;

  /**
   * @param {number}
   * @return {string}
   */
  var from = String.fromCharCode;

  /**
   * @param {object}
   * @return {object}
   */
  var assign = Object.assign;

  /**
   * @param {string} value
   * @param {number} length
   * @return {number}
   */
  function hash (value, length) {
  	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
  }

  /**
   * @param {string} value
   * @return {string}
   */
  function trim (value) {
  	return value.trim()
  }

  /**
   * @param {string} value
   * @param {RegExp} pattern
   * @return {string?}
   */
  function match (value, pattern) {
  	return (value = pattern.exec(value)) ? value[0] : value
  }

  /**
   * @param {string} value
   * @param {(string|RegExp)} pattern
   * @param {string} replacement
   * @return {string}
   */
  function replace (value, pattern, replacement) {
  	return value.replace(pattern, replacement)
  }

  /**
   * @param {string} value
   * @param {string} search
   * @return {number}
   */
  function indexof (value, search) {
  	return value.indexOf(search)
  }

  /**
   * @param {string} value
   * @param {number} index
   * @return {number}
   */
  function charat (value, index) {
  	return value.charCodeAt(index) | 0
  }

  /**
   * @param {string} value
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function substr (value, begin, end) {
  	return value.slice(begin, end)
  }

  /**
   * @param {string} value
   * @return {number}
   */
  function strlen (value) {
  	return value.length
  }

  /**
   * @param {any[]} value
   * @return {number}
   */
  function sizeof (value) {
  	return value.length
  }

  /**
   * @param {any} value
   * @param {any[]} array
   * @return {any}
   */
  function append (value, array) {
  	return array.push(value), value
  }

  /**
   * @param {string[]} array
   * @param {function} callback
   * @return {string}
   */
  function combine (array, callback) {
  	return array.map(callback).join('')
  }

  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = '';

  /**
   * @param {string} value
   * @param {object | null} root
   * @param {object | null} parent
   * @param {string} type
   * @param {string[] | string} props
   * @param {object[] | string} children
   * @param {number} length
   */
  function node (value, root, parent, type, props, children, length) {
  	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
  }

  /**
   * @param {object} root
   * @param {object} props
   * @return {object}
   */
  function copy (root, props) {
  	return assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
  }

  /**
   * @return {number}
   */
  function char () {
  	return character
  }

  /**
   * @return {number}
   */
  function prev () {
  	character = position > 0 ? charat(characters, --position) : 0;

  	if (column--, character === 10)
  		column = 1, line--;

  	return character
  }

  /**
   * @return {number}
   */
  function next () {
  	character = position < length ? charat(characters, position++) : 0;

  	if (column++, character === 10)
  		column = 1, line++;

  	return character
  }

  /**
   * @return {number}
   */
  function peek () {
  	return charat(characters, position)
  }

  /**
   * @return {number}
   */
  function caret () {
  	return position
  }

  /**
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function slice (begin, end) {
  	return substr(characters, begin, end)
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function token (type) {
  	switch (type) {
  		// \0 \t \n \r \s whitespace token
  		case 0: case 9: case 10: case 13: case 32:
  			return 5
  		// ! + , / > @ ~ isolate token
  		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
  		// ; { } breakpoint token
  		case 59: case 123: case 125:
  			return 4
  		// : accompanied token
  		case 58:
  			return 3
  		// " ' ( [ opening delimit token
  		case 34: case 39: case 40: case 91:
  			return 2
  		// ) ] closing delimit token
  		case 41: case 93:
  			return 1
  	}

  	return 0
  }

  /**
   * @param {string} value
   * @return {any[]}
   */
  function alloc (value) {
  	return line = column = 1, length = strlen(characters = value), position = 0, []
  }

  /**
   * @param {any} value
   * @return {any}
   */
  function dealloc (value) {
  	return characters = '', value
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function delimit (type) {
  	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function whitespace (type) {
  	while (character = peek())
  		if (character < 33)
  			next();
  		else
  			break

  	return token(type) > 2 || token(character) > 3 ? '' : ' '
  }

  /**
   * @param {number} index
   * @param {number} count
   * @return {string}
   */
  function escaping (index, count) {
  	while (--count && next())
  		// not 0-9 A-F a-f
  		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
  			break

  	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function delimiter (type) {
  	while (next())
  		switch (character) {
  			// ] ) " '
  			case type:
  				return position
  			// " '
  			case 34: case 39:
  				if (type !== 34 && type !== 39)
  					delimiter(character);
  				break
  			// (
  			case 40:
  				if (type === 41)
  					delimiter(type);
  				break
  			// \
  			case 92:
  				next();
  				break
  		}

  	return position
  }

  /**
   * @param {number} type
   * @param {number} index
   * @return {number}
   */
  function commenter (type, index) {
  	while (next())
  		// //
  		if (type + character === 47 + 10)
  			break
  		// /*
  		else if (type + character === 42 + 42 && peek() === 47)
  			break

  	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
  }

  /**
   * @param {number} index
   * @return {string}
   */
  function identifier (index) {
  	while (!token(peek()))
  		next();

  	return slice(index, position)
  }

  /**
   * @param {string} value
   * @return {object[]}
   */
  function compile (value) {
  	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {string[]} rule
   * @param {string[]} rules
   * @param {string[]} rulesets
   * @param {number[]} pseudo
   * @param {number[]} points
   * @param {string[]} declarations
   * @return {object}
   */
  function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  	var index = 0;
  	var offset = 0;
  	var length = pseudo;
  	var atrule = 0;
  	var property = 0;
  	var previous = 0;
  	var variable = 1;
  	var scanning = 1;
  	var ampersand = 1;
  	var character = 0;
  	var type = '';
  	var props = rules;
  	var children = rulesets;
  	var reference = rule;
  	var characters = type;

  	while (scanning)
  		switch (previous = character, character = next()) {
  			// (
  			case 40:
  				if (previous != 108 && charat(characters, length - 1) == 58) {
  					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
  						ampersand = -1;
  					break
  				}
  			// " ' [
  			case 34: case 39: case 91:
  				characters += delimit(character);
  				break
  			// \t \n \r \s
  			case 9: case 10: case 13: case 32:
  				characters += whitespace(previous);
  				break
  			// \
  			case 92:
  				characters += escaping(caret() - 1, 7);
  				continue
  			// /
  			case 47:
  				switch (peek()) {
  					case 42: case 47:
  						append(comment(commenter(next(), caret()), root, parent), declarations);
  						break
  					default:
  						characters += '/';
  				}
  				break
  			// {
  			case 123 * variable:
  				points[index++] = strlen(characters) * ampersand;
  			// } ; \0
  			case 125 * variable: case 59: case 0:
  				switch (character) {
  					// \0 }
  					case 0: case 125: scanning = 0;
  					// ;
  					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
  						if (property > 0 && (strlen(characters) - length))
  							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
  						break
  					// @ ;
  					case 59: characters += ';';
  					// { rule/at-rule
  					default:
  						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

  						if (character === 123)
  							if (offset === 0)
  								parse(characters, root, reference, reference, props, rulesets, length, points, children);
  							else
  								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
  									// d l m s
  									case 100: case 108: case 109: case 115:
  										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
  										break
  									default:
  										parse(characters, reference, reference, reference, [''], children, 0, points, children);
  								}
  				}

  				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
  				break
  			// :
  			case 58:
  				length = 1 + strlen(characters), property = previous;
  			default:
  				if (variable < 1)
  					if (character == 123)
  						--variable;
  					else if (character == 125 && variable++ == 0 && prev() == 125)
  						continue

  				switch (characters += from(character), character * variable) {
  					// &
  					case 38:
  						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
  						break
  					// ,
  					case 44:
  						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
  						break
  					// @
  					case 64:
  						// -
  						if (peek() === 45)
  							characters += delimit(next());

  						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
  						break
  					// -
  					case 45:
  						if (previous === 45 && strlen(characters) == 2)
  							variable = 0;
  				}
  		}

  	return rulesets
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} index
   * @param {number} offset
   * @param {string[]} rules
   * @param {number[]} points
   * @param {string} type
   * @param {string[]} props
   * @param {string[]} children
   * @param {number} length
   * @return {object}
   */
  function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
  	var post = offset - 1;
  	var rule = offset === 0 ? rules : [''];
  	var size = sizeof(rule);

  	for (var i = 0, j = 0, k = 0; i < index; ++i)
  		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
  			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
  				props[k++] = z;

  	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
  }

  /**
   * @param {number} value
   * @param {object} root
   * @param {object?} parent
   * @return {object}
   */
  function comment (value, root, parent) {
  	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} length
   * @return {object}
   */
  function declaration (value, root, parent, length) {
  	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
  }

  /**
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function serialize (children, callback) {
  	var output = '';
  	var length = sizeof(children);

  	for (var i = 0; i < length; i++)
  		output += callback(children[i], i, children, callback) || '';

  	return output
  }

  /**
   * @param {object} element
   * @param {number} index
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function stringify (element, index, children, callback) {
  	switch (element.type) {
  		case LAYER: if (element.children.length) break
  		case IMPORT: case DECLARATION: return element.return = element.return || element.value
  		case COMMENT: return ''
  		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
  		case RULESET: element.value = element.props.join(',');
  	}

  	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
  }

  /**
   * @param {function[]} collection
   * @return {function}
   */
  function middleware (collection) {
  	var length = sizeof(collection);

  	return function (element, index, children, callback) {
  		var output = '';

  		for (var i = 0; i < length; i++)
  			output += collection[i](element, index, children, callback) || '';

  		return output
  	}
  }

  /**
   * @param {function} callback
   * @return {function}
   */
  function rulesheet (callback) {
  	return function (element) {
  		if (!element.root)
  			if (element = element.return)
  				callback(element);
  	}
  }

  var weakMemoize = function weakMemoize(func) {
    // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
    var cache = new WeakMap();
    return function (arg) {
      if (cache.has(arg)) {
        // $FlowFixMe
        return cache.get(arg);
      }

      var ret = func(arg);
      cache.set(arg, ret);
      return ret;
    };
  };

  var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;

    while (true) {
      previous = character;
      character = peek(); // &\f

      if (previous === 38 && character === 12) {
        points[index] = 1;
      }

      if (token(character)) {
        break;
      }

      next();
    }

    return slice(begin, position);
  };

  var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;

    do {
      switch (token(character)) {
        case 0:
          // &\f
          if (character === 38 && peek() === 12) {
            // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
          }

          parsed[index] += identifierWithPointTracking(position - 1, points, index);
          break;

        case 2:
          parsed[index] += delimit(character);
          break;

        case 4:
          // comma
          if (character === 44) {
            // colon
            parsed[++index] = peek() === 58 ? '&\f' : '';
            points[index] = parsed[index].length;
            break;
          }

        // fallthrough

        default:
          parsed[index] += from(character);
      }
    } while (character = next());

    return parsed;
  };

  var getRules = function getRules(value, points) {
    return dealloc(toRules(alloc(value), points));
  }; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


  var fixedElements = /* #__PURE__ */new WeakMap();
  var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }

    var value = element.value,
        parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;

    while (parent.type !== 'rule') {
      parent = parent.parent;
      if (!parent) return;
    } // short-circuit for the simplest case


    if (element.props.length === 1 && value.charCodeAt(0) !== 58
    /* colon */
    && !fixedElements.get(parent)) {
      return;
    } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


    if (isImplicitRule) {
      return;
    }

    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;

    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
      var value = element.value;

      if ( // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98) {
        // this ignores label
        element["return"] = '';
        element.value = '';
      }
    }
  };

  /* eslint-disable no-fallthrough */

  function prefix(value, length) {
    switch (hash(value, length)) {
      // color-adjust
      case 5103:
        return WEBKIT + 'print-' + value + value;
      // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      // appearance, user-select, transform, hyphens, text-size-adjust

      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      // flex, flex-direction

      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      // order

      case 6165:
        return WEBKIT + value + MS + 'flex-' + value + value;
      // align-items

      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
      // align-self

      case 5443:
        return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
      // align-content

      case 4675:
        return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
      // flex-shrink

      case 5548:
        return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
      // flex-basis

      case 5292:
        return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
      // flex-grow

      case 6060:
        return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
      // transition

      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
      // cursor

      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
      // background, background-image

      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
      // justify-content

      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
      // (margin|padding)-inline-(start|end)

      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
      // (min|max)?(width|height|inline-size|block-size)

      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        // stretch, max-content, min-content, fill-available
        if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            // -
            if (charat(value, length + 4) !== 45) break;
          // (f)ill-available, (f)it-content

          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
          // (s)tretch

          case 115:
            return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
        }
        break;
      // position: sticky

      case 4949:
        // (s)ticky?
        if (charat(value, length + 1) !== 115) break;
      // display: (flex|inline-flex)

      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
          // stic(k)y
          case 107:
            return replace(value, ':', ':' + WEBKIT) + value;
          // (inline-)?fl(e)x

          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
        }

        break;
      // writing-mode

      case 5936:
        switch (charat(value, length + 11)) {
          // vertical-l(r)
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
          // vertical-r(l)

          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
          // horizontal(-)tb

          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
        }

        return WEBKIT + value + MS + value + value;
    }

    return value;
  }

  var prefixer = function prefixer(element, index, children, callback) {
    if (element.length > -1) if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix(element.value, element.length);
        break;

      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, '@', '@' + WEBKIT)
        })], callback);

      case RULESET:
        if (element.length) return combine(element.props, function (value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ':read-only':
            case ':read-write':
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
              })], callback);
            // :placeholder

            case '::placeholder':
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
              })], callback);
          }

          return '';
        });
    }
  };

  var isBrowser$4 = typeof document !== 'undefined';
  var getServerStylisCache = isBrowser$4 ? undefined : weakMemoize(function () {
    return memoize$1(function () {
      var cache = {};
      return function (name) {
        return cache[name];
      };
    });
  });
  var defaultStylisPlugins = [prefixer];

  var createCache = function createCache(options) {
    var key = options.key;

    if (isBrowser$4 && key === 'css') {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
      // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
      // note this very very intentionally targets all style elements regardless of the key to ensure
      // that creating a cache works inside of render of a React component

      Array.prototype.forEach.call(ssrStyles, function (node) {
        // we want to only move elements which have a space in the data-emotion attribute value
        // because that indicates that it is an Emotion 11 server-side rendered style elements
        // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
        // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
        // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
        // will not result in the Emotion 10 styles being destroyed
        var dataEmotionAttribute = node.getAttribute('data-emotion');

        if (dataEmotionAttribute.indexOf(' ') === -1) {
          return;
        }
        document.head.appendChild(node);
        node.setAttribute('data-s', '');
      });
    }

    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

    var inserted = {};
    var container;
    var nodesToHydrate = [];

    if (isBrowser$4) {
      container = options.container || document.head;
      Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
        var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }

        nodesToHydrate.push(node);
      });
    }

    var _insert;

    var omnipresentPlugins = [compat, removeLabel];

    if (isBrowser$4) {
      var currentSheet;
      var finalizingPlugins = [stringify, rulesheet(function (rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

      var stylis = function stylis(styles) {
        return serialize(compile(styles), serializer);
      };

      _insert = function insert(selector, serialized, sheet, shouldCache) {
        currentSheet = sheet;

        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    } else {
      var _finalizingPlugins = [stringify];

      var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

      var _stylis = function _stylis(styles) {
        return serialize(compile(styles), _serializer);
      }; // $FlowFixMe


      var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

      var getRules = function getRules(selector, serialized) {
        var name = serialized.name;

        if (serverStylisCache[name] === undefined) {
          serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        }

        return serverStylisCache[name];
      };

      _insert = function _insert(selector, serialized, sheet, shouldCache) {
        var name = serialized.name;
        var rules = getRules(selector, serialized);

        if (cache.compat === undefined) {
          // in regular mode, we don't set the styles on the inserted cache
          // since we don't need to and that would be wasting memory
          // we return them so that they are rendered in a style tag
          if (shouldCache) {
            cache.inserted[name] = true;
          }

          return rules;
        } else {
          // in compat mode, we put the styles on the inserted cache so
          // that emotion-server can pull out the styles
          // except when we don't want to cache it which was in Global but now
          // is nowhere but we don't want to do a major right now
          // and just in case we're going to leave the case here
          // it's also not affecting client side bundle size
          // so it's really not a big deal
          if (shouldCache) {
            cache.inserted[name] = rules;
          } else {
            return rules;
          }
        }
      };
    }

    var cache = {
      key: key,
      sheet: new StyleSheet({
        key: key,
        container: container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted: inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };

  var isBrowser$3 = typeof document !== 'undefined';
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (registered[className] !== undefined) {
        registeredStyles.push(registered[className] + ";");
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;

    if ( // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser$3 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;

    if (cache.inserted[serialized.name] === undefined) {
      var stylesForSSR = '';
      var current = serialized;

      do {
        var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

        if (!isBrowser$3 && maybeStyles !== undefined) {
          stylesForSSR += maybeStyles;
        }

        current = current.next;
      } while (current !== undefined);

      if (!isBrowser$3 && stylesForSSR.length !== 0) {
        return stylesForSSR;
      }
    }
  };

  /* eslint-disable */
  // Inspired by https://github.com/garycourt/murmurhash-js
  // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
  function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash

    var k,
        i = 0,
        len = str.length;

    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
      k =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
      k ^=
      /* k >>> r: */
      k >>> 24;
      h =
      /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array


    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

      case 1:
        h ^= str.charCodeAt(i) & 0xff;
        h =
        /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.


    h ^= h >>> 13;
    h =
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

  var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
  };

  var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
  };

  var processStyleName = /* #__PURE__ */memoize$1(function (styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
  });

  var processStyleValue = function processStyleValue(key, value) {
    switch (key) {
      case 'animation':
      case 'animationName':
        {
          if (typeof value === 'string') {
            return value.replace(animationRegex, function (match, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
    }

    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
      return value + 'px';
    }

    return value;
  };

  var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return '';
    }

    if (interpolation.__emotion_styles !== undefined) {

      return interpolation;
    }

    switch (typeof interpolation) {
      case 'boolean':
        {
          return '';
        }

      case 'object':
        {
          if (interpolation.anim === 1) {
            cursor = {
              name: interpolation.name,
              styles: interpolation.styles,
              next: cursor
            };
            return interpolation.name;
          }

          if (interpolation.styles !== undefined) {
            var next = interpolation.next;

            if (next !== undefined) {
              // not the most efficient thing ever but this is a pretty rare case
              // and there will be very few iterations of this generally
              while (next !== undefined) {
                cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor
                };
                next = next.next;
              }
            }

            var styles = interpolation.styles + ";";

            return styles;
          }

          return createStringFromObject(mergedProps, registered, interpolation);
        }

      case 'function':
        {
          if (mergedProps !== undefined) {
            var previousCursor = cursor;
            var result = interpolation(mergedProps);
            cursor = previousCursor;
            return handleInterpolation(mergedProps, registered, result);
          }

          break;
        }
    } // finalize string values (regular strings and functions interpolated into css calls)


    if (registered == null) {
      return interpolation;
    }

    var cached = registered[interpolation];
    return cached !== undefined ? cached : interpolation;
  }

  function createStringFromObject(mergedProps, registered, obj) {
    var string = '';

    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var _key in obj) {
        var value = obj[_key];

        if (typeof value !== 'object') {
          if (registered != null && registered[value] !== undefined) {
            string += _key + "{" + registered[value] + "}";
          } else if (isProcessableValue(value)) {
            string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
          }
        } else {
          if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
            throw new Error(noComponentSelectorMessage);
          }

          if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);

            switch (_key) {
              case 'animation':
              case 'animationName':
                {
                  string += processStyleName(_key) + ":" + interpolated + ";";
                  break;
                }

              default:
                {

                  string += _key + "{" + interpolated + "}";
                }
            }
          }
        }
      }
    }

    return string;
  }

  var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
  // keyframes are stored on the SerializedStyles object as a linked list


  var cursor;
  var serializeStyles = function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
      return args[0];
    }

    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {

      styles += strings[0];
    } // we start at 1 since we've already handled the first arg


    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);

      if (stringMode) {

        styles += strings[i];
      }
    }


    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

    while ((match = labelPattern.exec(styles)) !== null) {
      identifierName += '-' + // $FlowFixMe we know it's not null
      match[1];
    }

    var name = murmur2(styles) + identifierName;

    return {
      name: name,
      styles: styles,
      next: cursor
    };
  };

  var isBrowser$2 = typeof document !== 'undefined';

  var syncFallback = function syncFallback(create) {
    return create();
  };

  var useInsertionEffect = React__namespace['useInsertion' + 'Effect'] ? React__namespace['useInsertion' + 'Effect'] : false;
  var useInsertionEffectAlwaysWithSyncFallback = !isBrowser$2 ? syncFallback : useInsertionEffect || syncFallback;
  var useInsertionEffectWithLayoutFallback = useInsertionEffect || React__namespace.useLayoutEffect;

  var isBrowser$1 = typeof document !== 'undefined';

  var EmotionCacheContext = /* #__PURE__ */React__namespace.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
    key: 'css'
  }) : null);

  EmotionCacheContext.Provider;

  var withEmotionCache = function withEmotionCache(func) {
    // $FlowFixMe
    return /*#__PURE__*/React.forwardRef(function (props, ref) {
      // the cache will never be null in the browser
      var cache = React.useContext(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };

  if (!isBrowser$1) {
    withEmotionCache = function withEmotionCache(func) {
      return function (props) {
        var cache = React.useContext(EmotionCacheContext);

        if (cache === null) {
          // yes, we're potentially creating this on every render
          // it doesn't actually matter though since it's only on the server
          // so there will only every be a single render
          // that could change in the future because of suspense and etc. but for now,
          // this works and i don't want to optimise for a future thing that we aren't sure about
          cache = createCache({
            key: 'css'
          });
          return /*#__PURE__*/React__namespace.createElement(EmotionCacheContext.Provider, {
            value: cache
          }, func(props, cache));
        } else {
          return func(props, cache);
        }
      };
    };
  }

  var ThemeContext = /* #__PURE__ */React__namespace.createContext({});

  // initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
  // initial client-side render from SSR, use place of hydrating tag

  var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {

    var styles = props.styles;
    var serialized = serializeStyles([styles], undefined, React__namespace.useContext(ThemeContext));

    if (!isBrowser$1) {
      var _ref;

      var serializedNames = serialized.name;
      var serializedStyles = serialized.styles;
      var next = serialized.next;

      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        serializedStyles += next.styles;
        next = next.next;
      }

      var shouldCache = cache.compat === true;
      var rules = cache.insert("", {
        name: serializedNames,
        styles: serializedStyles
      }, cache.sheet, shouldCache);

      if (shouldCache) {
        return null;
      }

      return /*#__PURE__*/React__namespace.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = cache.sheet.nonce, _ref));
    } // yes, i know these hooks are used conditionally
    // but it is based on a constant that will never change at runtime
    // it's effectively like having two implementations and switching them out
    // so it's not actually breaking anything


    var sheetRef = React__namespace.useRef();
    useInsertionEffectWithLayoutFallback(function () {
      var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

      var sheet = new cache.sheet.constructor({
        key: key,
        nonce: cache.sheet.nonce,
        container: cache.sheet.container,
        speedy: cache.sheet.isSpeedy
      });
      var rehydrating = false; // $FlowFixMe

      var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

      if (cache.sheet.tags.length) {
        sheet.before = cache.sheet.tags[0];
      }

      if (node !== null) {
        rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

        node.setAttribute('data-emotion', key);
        sheet.hydrate([node]);
      }

      sheetRef.current = [sheet, rehydrating];
      return function () {
        sheet.flush();
      };
    }, [cache]);
    useInsertionEffectWithLayoutFallback(function () {
      var sheetRefCurrent = sheetRef.current;
      var sheet = sheetRefCurrent[0],
          rehydrating = sheetRefCurrent[1];

      if (rehydrating) {
        sheetRefCurrent[1] = false;
        return;
      }

      if (serialized.next !== undefined) {
        // insert keyframes
        insertStyles(cache, serialized.next, true);
      }

      if (sheet.tags.length) {
        // if this doesn't exist then it will be null so the style element will be appended
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element;
        sheet.flush();
      }

      cache.insert("", serialized, sheet, false);
    }, [cache, serialized.name]);
    return null;
  });

  function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return serializeStyles(args);
  }

  var keyframes = function keyframes() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name; // $FlowFixMe

    return {
      name: name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };

  var testOmitPropsOnStringTag = isPropValid;

  var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
    return key !== 'theme';
  };

  var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
    return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  };
  var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
    var shouldForwardProp;

    if (options) {
      var optionsShouldForwardProp = options.shouldForwardProp;
      shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
        return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
      } : optionsShouldForwardProp;
    }

    if (typeof shouldForwardProp !== 'function' && isReal) {
      shouldForwardProp = tag.__emotion_forwardProp;
    }

    return shouldForwardProp;
  };
  var isBrowser = typeof document !== 'undefined';

  var Insertion = function Insertion(_ref) {
    var cache = _ref.cache,
        serialized = _ref.serialized,
        isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
      return insertStyles(cache, serialized, isStringTag);
    });

    if (!isBrowser && rules !== undefined) {
      var _ref2;

      var serializedNames = serialized.name;
      var next = serialized.next;

      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        next = next.next;
      }

      return /*#__PURE__*/React__namespace.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref2.nonce = cache.sheet.nonce, _ref2));
    }

    return null;
  };

  var createStyled$1 = function createStyled(tag, options) {

    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;

    if (options !== undefined) {
      identifierName = options.label;
      targetClassName = options.target;
    }

    var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp('as');
    return function () {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

      if (identifierName !== undefined) {
        styles.push("label:" + identifierName + ";");
      }

      if (args[0] == null || args[0].raw === undefined) {
        styles.push.apply(styles, args);
      } else {

        styles.push(args[0][0]);
        var len = args.length;
        var i = 1;

        for (; i < len; i++) {

          styles.push(args[i], args[0][i]);
        }
      } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


      var Styled = withEmotionCache(function (props, cache, ref) {
        var FinalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = React__namespace.useContext(ThemeContext);
        }

        if (typeof props.className === 'string') {
          className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
        className += cache.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref;
        return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(Insertion, {
          cache: cache,
          serialized: serialized,
          isStringTag: typeof FinalTag === 'string'
        }), /*#__PURE__*/React__namespace.createElement(FinalTag, newProps));
      });
      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
      Styled.defaultProps = tag.defaultProps;
      Styled.__emotion_real = Styled;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_styles = styles;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, 'toString', {
        value: function value() {
          if (targetClassName === undefined && "production" !== 'production') {
            return 'NO_COMPONENT_SELECTOR';
          } // $FlowFixMe: coerce undefined to string


          return "." + targetClassName;
        }
      });

      Styled.withComponent = function (nextTag, nextOptions) {
        return createStyled(nextTag, _extends({}, options, nextOptions, {
          shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
        })).apply(void 0, styles);
      };

      return Styled;
    };
  };

  var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
  'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

  var newStyled = createStyled$1.bind();
  tags.forEach(function (tagName) {
    // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
    newStyled[tagName] = newStyled(tagName);
  });

  function isEmpty$3(obj) {
    return obj === undefined || obj === null || Object.keys(obj).length === 0;
  }
  function GlobalStyles$2(props) {
    const {
      styles,
      defaultTheme = {}
    } = props;
    const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty$3(themeInput) ? defaultTheme : themeInput) : styles;
    return /*#__PURE__*/jsxRuntimeExports.jsx(Global, {
      styles: globalStyles
    });
  }

  /**
   * @mui/styled-engine v5.13.2
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  /* eslint-disable no-underscore-dangle */
  function styled$2(tag, options) {
    const stylesFactory = newStyled(tag, options);
    return stylesFactory;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const internal_processStyles = (tag, processor) => {
    // Emotion attaches all the styles as `__emotion_styles`.
    // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
    if (Array.isArray(tag.__emotion_styles)) {
      tag.__emotion_styles = processor(tag.__emotion_styles);
    }
  };

  const _excluded$H = ["values", "unit", "step"];
  const sortBreakpointsValues = values => {
    const breakpointsAsArray = Object.keys(values).map(key => ({
      key,
      val: values[key]
    })) || [];
    // Sort in ascending order
    breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
    return breakpointsAsArray.reduce((acc, obj) => {
      return _extends({}, acc, {
        [obj.key]: obj.val
      });
    }, {});
  };

  // Keep in mind that @media is inclusive by the CSS specification.
  function createBreakpoints(breakpoints) {
    const {
        // The breakpoint **start** at this value.
        // For instance with the first breakpoint xs: [xs, sm).
        values = {
          xs: 0,
          // phone
          sm: 600,
          // tablet
          md: 900,
          // small laptop
          lg: 1200,
          // desktop
          xl: 1536 // large screen
        },

        unit = 'px',
        step = 5
      } = breakpoints,
      other = _objectWithoutPropertiesLoose(breakpoints, _excluded$H);
    const sortedValues = sortBreakpointsValues(values);
    const keys = Object.keys(sortedValues);
    function up(key) {
      const value = typeof values[key] === 'number' ? values[key] : key;
      return `@media (min-width:${value}${unit})`;
    }
    function down(key) {
      const value = typeof values[key] === 'number' ? values[key] : key;
      return `@media (max-width:${value - step / 100}${unit})`;
    }
    function between(start, end) {
      const endIndex = keys.indexOf(end);
      return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
    }
    function only(key) {
      if (keys.indexOf(key) + 1 < keys.length) {
        return between(key, keys[keys.indexOf(key) + 1]);
      }
      return up(key);
    }
    function not(key) {
      // handle first and last key separately, for better readability
      const keyIndex = keys.indexOf(key);
      if (keyIndex === 0) {
        return up(keys[1]);
      }
      if (keyIndex === keys.length - 1) {
        return down(keys[keyIndex]);
      }
      return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
    }
    return _extends({
      keys,
      values: sortedValues,
      up,
      down,
      between,
      only,
      not,
      unit
    }, other);
  }

  const shape = {
    borderRadius: 4
  };
  var shape$1 = shape;

  function merge(acc, item) {
    if (!item) {
      return acc;
    }
    return deepmerge(acc, item, {
      clone: false // No need to clone deep, it's way faster.
    });
  }

  // The breakpoint **start** at this value.
  // For instance with the first breakpoint xs: [xs, sm[.
  const values$1 = {
    xs: 0,
    // phone
    sm: 600,
    // tablet
    md: 900,
    // small laptop
    lg: 1200,
    // desktop
    xl: 1536 // large screen
  };

  const defaultBreakpoints = {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: key => `@media (min-width:${values$1[key]}px)`
  };
  function handleBreakpoints(props, propValue, styleFromPropValue) {
    const theme = props.theme || {};
    if (Array.isArray(propValue)) {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return propValue.reduce((acc, item, index) => {
        acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
        return acc;
      }, {});
    }
    if (typeof propValue === 'object') {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return Object.keys(propValue).reduce((acc, breakpoint) => {
        // key is breakpoint
        if (Object.keys(themeBreakpoints.values || values$1).indexOf(breakpoint) !== -1) {
          const mediaKey = themeBreakpoints.up(breakpoint);
          acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        } else {
          const cssKey = breakpoint;
          acc[cssKey] = propValue[cssKey];
        }
        return acc;
      }, {});
    }
    const output = styleFromPropValue(propValue);
    return output;
  }
  function createEmptyBreakpointObject(breakpointsInput = {}) {
    var _breakpointsInput$key;
    const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
      const breakpointStyleKey = breakpointsInput.up(key);
      acc[breakpointStyleKey] = {};
      return acc;
    }, {});
    return breakpointsInOrder || {};
  }
  function removeUnusedBreakpoints(breakpointKeys, style) {
    return breakpointKeys.reduce((acc, key) => {
      const breakpointOutput = acc[key];
      const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
      if (isBreakpointUnused) {
        delete acc[key];
      }
      return acc;
    }, style);
  }

  function getPath(obj, path, checkVars = true) {
    if (!path || typeof path !== 'string') {
      return null;
    }

    // Check if CSS variables are used
    if (obj && obj.vars && checkVars) {
      const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
      if (val != null) {
        return val;
      }
    }
    return path.split('.').reduce((acc, item) => {
      if (acc && acc[item] != null) {
        return acc[item];
      }
      return null;
    }, obj);
  }
  function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
    let value;
    if (typeof themeMapping === 'function') {
      value = themeMapping(propValueFinal);
    } else if (Array.isArray(themeMapping)) {
      value = themeMapping[propValueFinal] || userValue;
    } else {
      value = getPath(themeMapping, propValueFinal) || userValue;
    }
    if (transform) {
      value = transform(value, userValue, themeMapping);
    }
    return value;
  }
  function style$1(options) {
    const {
      prop,
      cssProperty = options.prop,
      themeKey,
      transform
    } = options;

    // false positive
    // eslint-disable-next-line react/function-component-definition
    const fn = props => {
      if (props[prop] == null) {
        return null;
      }
      const propValue = props[prop];
      const theme = props.theme;
      const themeMapping = getPath(theme, themeKey) || {};
      const styleFromPropValue = propValueFinal => {
        let value = getStyleValue(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === 'string') {
          // Haven't found value
          value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, propValue, styleFromPropValue);
    };
    fn.propTypes = {};
    fn.filterProps = [prop];
    return fn;
  }

  function memoize(fn) {
    const cache = {};
    return arg => {
      if (cache[arg] === undefined) {
        cache[arg] = fn(arg);
      }
      return cache[arg];
    };
  }

  const properties = {
    m: 'margin',
    p: 'padding'
  };
  const directions = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  };
  const aliases = {
    marginX: 'mx',
    marginY: 'my',
    paddingX: 'px',
    paddingY: 'py'
  };

  // memoize() impact:
  // From 300,000 ops/sec
  // To 350,000 ops/sec
  const getCssProperties = memoize(prop => {
    // It's not a shorthand notation.
    if (prop.length > 2) {
      if (aliases[prop]) {
        prop = aliases[prop];
      } else {
        return [prop];
      }
    }
    const [a, b] = prop.split('');
    const property = properties[a];
    const direction = directions[b] || '';
    return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
  });
  const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
  const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
  [...marginKeys, ...paddingKeys];
  function createUnaryUnit(theme, themeKey, defaultValue, propName) {
    var _getPath;
    const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
    if (typeof themeSpacing === 'number') {
      return abs => {
        if (typeof abs === 'string') {
          return abs;
        }
        return themeSpacing * abs;
      };
    }
    if (Array.isArray(themeSpacing)) {
      return abs => {
        if (typeof abs === 'string') {
          return abs;
        }
        return themeSpacing[abs];
      };
    }
    if (typeof themeSpacing === 'function') {
      return themeSpacing;
    }
    return () => undefined;
  }
  function createUnarySpacing(theme) {
    return createUnaryUnit(theme, 'spacing', 8);
  }
  function getValue(transformer, propValue) {
    if (typeof propValue === 'string' || propValue == null) {
      return propValue;
    }
    const abs = Math.abs(propValue);
    const transformed = transformer(abs);
    if (propValue >= 0) {
      return transformed;
    }
    if (typeof transformed === 'number') {
      return -transformed;
    }
    return `-${transformed}`;
  }
  function getStyleFromPropValue(cssProperties, transformer) {
    return propValue => cssProperties.reduce((acc, cssProperty) => {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  }
  function resolveCssProperty(props, keys, prop, transformer) {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (keys.indexOf(prop) === -1) {
      return null;
    }
    const cssProperties = getCssProperties(prop);
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    const propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }
  function style(props, keys) {
    const transformer = createUnarySpacing(props.theme);
    return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
  }
  function margin(props) {
    return style(props, marginKeys);
  }
  margin.propTypes = {};
  margin.filterProps = marginKeys;
  function padding(props) {
    return style(props, paddingKeys);
  }
  padding.propTypes = {};
  padding.filterProps = paddingKeys;

  // The different signatures imply different meaning for their arguments that can't be expressed structurally.
  // We express the difference with variable names.
  /* tslint:disable:unified-signatures */
  /* tslint:enable:unified-signatures */

  function createSpacing(spacingInput = 8) {
    // Already transformed.
    if (spacingInput.mui) {
      return spacingInput;
    }

    // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
    // Smaller components, such as icons, can align to a 4dp grid.
    // https://m2.material.io/design/layout/understanding-layout.html
    const transform = createUnarySpacing({
      spacing: spacingInput
    });
    const spacing = (...argsInput) => {
      const args = argsInput.length === 0 ? [1] : argsInput;
      return args.map(argument => {
        const output = transform(argument);
        return typeof output === 'number' ? `${output}px` : output;
      }).join(' ');
    };
    spacing.mui = true;
    return spacing;
  }

  function compose(...styles) {
    const handlers = styles.reduce((acc, style) => {
      style.filterProps.forEach(prop => {
        acc[prop] = style;
      });
      return acc;
    }, {});

    // false positive
    // eslint-disable-next-line react/function-component-definition
    const fn = props => {
      return Object.keys(props).reduce((acc, prop) => {
        if (handlers[prop]) {
          return merge(acc, handlers[prop](props));
        }
        return acc;
      }, {});
    };
    fn.propTypes = {};
    fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
    return fn;
  }

  function borderTransform(value) {
    if (typeof value !== 'number') {
      return value;
    }
    return `${value}px solid`;
  }
  const border = style$1({
    prop: 'border',
    themeKey: 'borders',
    transform: borderTransform
  });
  const borderTop = style$1({
    prop: 'borderTop',
    themeKey: 'borders',
    transform: borderTransform
  });
  const borderRight = style$1({
    prop: 'borderRight',
    themeKey: 'borders',
    transform: borderTransform
  });
  const borderBottom = style$1({
    prop: 'borderBottom',
    themeKey: 'borders',
    transform: borderTransform
  });
  const borderLeft = style$1({
    prop: 'borderLeft',
    themeKey: 'borders',
    transform: borderTransform
  });
  const borderColor = style$1({
    prop: 'borderColor',
    themeKey: 'palette'
  });
  const borderTopColor = style$1({
    prop: 'borderTopColor',
    themeKey: 'palette'
  });
  const borderRightColor = style$1({
    prop: 'borderRightColor',
    themeKey: 'palette'
  });
  const borderBottomColor = style$1({
    prop: 'borderBottomColor',
    themeKey: 'palette'
  });
  const borderLeftColor = style$1({
    prop: 'borderLeftColor',
    themeKey: 'palette'
  });

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const borderRadius = props => {
    if (props.borderRadius !== undefined && props.borderRadius !== null) {
      const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4);
      const styleFromPropValue = propValue => ({
        borderRadius: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
    }
    return null;
  };
  borderRadius.propTypes = {};
  borderRadius.filterProps = ['borderRadius'];
  compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const gap = props => {
    if (props.gap !== undefined && props.gap !== null) {
      const transformer = createUnaryUnit(props.theme, 'spacing', 8);
      const styleFromPropValue = propValue => ({
        gap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.gap, styleFromPropValue);
    }
    return null;
  };
  gap.propTypes = {};
  gap.filterProps = ['gap'];

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const columnGap = props => {
    if (props.columnGap !== undefined && props.columnGap !== null) {
      const transformer = createUnaryUnit(props.theme, 'spacing', 8);
      const styleFromPropValue = propValue => ({
        columnGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.columnGap, styleFromPropValue);
    }
    return null;
  };
  columnGap.propTypes = {};
  columnGap.filterProps = ['columnGap'];

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const rowGap = props => {
    if (props.rowGap !== undefined && props.rowGap !== null) {
      const transformer = createUnaryUnit(props.theme, 'spacing', 8);
      const styleFromPropValue = propValue => ({
        rowGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.rowGap, styleFromPropValue);
    }
    return null;
  };
  rowGap.propTypes = {};
  rowGap.filterProps = ['rowGap'];
  const gridColumn = style$1({
    prop: 'gridColumn'
  });
  const gridRow = style$1({
    prop: 'gridRow'
  });
  const gridAutoFlow = style$1({
    prop: 'gridAutoFlow'
  });
  const gridAutoColumns = style$1({
    prop: 'gridAutoColumns'
  });
  const gridAutoRows = style$1({
    prop: 'gridAutoRows'
  });
  const gridTemplateColumns = style$1({
    prop: 'gridTemplateColumns'
  });
  const gridTemplateRows = style$1({
    prop: 'gridTemplateRows'
  });
  const gridTemplateAreas = style$1({
    prop: 'gridTemplateAreas'
  });
  const gridArea = style$1({
    prop: 'gridArea'
  });
  compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

  function paletteTransform(value, userValue) {
    if (userValue === 'grey') {
      return userValue;
    }
    return value;
  }
  const color = style$1({
    prop: 'color',
    themeKey: 'palette',
    transform: paletteTransform
  });
  const bgcolor = style$1({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: paletteTransform
  });
  const backgroundColor = style$1({
    prop: 'backgroundColor',
    themeKey: 'palette',
    transform: paletteTransform
  });
  compose(color, bgcolor, backgroundColor);

  function sizingTransform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }
  const width = style$1({
    prop: 'width',
    transform: sizingTransform
  });
  const maxWidth = props => {
    if (props.maxWidth !== undefined && props.maxWidth !== null) {
      const styleFromPropValue = propValue => {
        var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;
        const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values$1[propValue];
        return {
          maxWidth: breakpoint || sizingTransform(propValue)
        };
      };
      return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
    }
    return null;
  };
  maxWidth.filterProps = ['maxWidth'];
  const minWidth = style$1({
    prop: 'minWidth',
    transform: sizingTransform
  });
  const height = style$1({
    prop: 'height',
    transform: sizingTransform
  });
  const maxHeight = style$1({
    prop: 'maxHeight',
    transform: sizingTransform
  });
  const minHeight = style$1({
    prop: 'minHeight',
    transform: sizingTransform
  });
  style$1({
    prop: 'size',
    cssProperty: 'width',
    transform: sizingTransform
  });
  style$1({
    prop: 'size',
    cssProperty: 'height',
    transform: sizingTransform
  });
  const boxSizing = style$1({
    prop: 'boxSizing'
  });
  compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

  const defaultSxConfig = {
    // borders
    border: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderTop: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderRight: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderBottom: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderLeft: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderColor: {
      themeKey: 'palette'
    },
    borderTopColor: {
      themeKey: 'palette'
    },
    borderRightColor: {
      themeKey: 'palette'
    },
    borderBottomColor: {
      themeKey: 'palette'
    },
    borderLeftColor: {
      themeKey: 'palette'
    },
    borderRadius: {
      themeKey: 'shape.borderRadius',
      style: borderRadius
    },
    // palette
    color: {
      themeKey: 'palette',
      transform: paletteTransform
    },
    bgcolor: {
      themeKey: 'palette',
      cssProperty: 'backgroundColor',
      transform: paletteTransform
    },
    backgroundColor: {
      themeKey: 'palette',
      transform: paletteTransform
    },
    // spacing
    p: {
      style: padding
    },
    pt: {
      style: padding
    },
    pr: {
      style: padding
    },
    pb: {
      style: padding
    },
    pl: {
      style: padding
    },
    px: {
      style: padding
    },
    py: {
      style: padding
    },
    padding: {
      style: padding
    },
    paddingTop: {
      style: padding
    },
    paddingRight: {
      style: padding
    },
    paddingBottom: {
      style: padding
    },
    paddingLeft: {
      style: padding
    },
    paddingX: {
      style: padding
    },
    paddingY: {
      style: padding
    },
    paddingInline: {
      style: padding
    },
    paddingInlineStart: {
      style: padding
    },
    paddingInlineEnd: {
      style: padding
    },
    paddingBlock: {
      style: padding
    },
    paddingBlockStart: {
      style: padding
    },
    paddingBlockEnd: {
      style: padding
    },
    m: {
      style: margin
    },
    mt: {
      style: margin
    },
    mr: {
      style: margin
    },
    mb: {
      style: margin
    },
    ml: {
      style: margin
    },
    mx: {
      style: margin
    },
    my: {
      style: margin
    },
    margin: {
      style: margin
    },
    marginTop: {
      style: margin
    },
    marginRight: {
      style: margin
    },
    marginBottom: {
      style: margin
    },
    marginLeft: {
      style: margin
    },
    marginX: {
      style: margin
    },
    marginY: {
      style: margin
    },
    marginInline: {
      style: margin
    },
    marginInlineStart: {
      style: margin
    },
    marginInlineEnd: {
      style: margin
    },
    marginBlock: {
      style: margin
    },
    marginBlockStart: {
      style: margin
    },
    marginBlockEnd: {
      style: margin
    },
    // display
    displayPrint: {
      cssProperty: false,
      transform: value => ({
        '@media print': {
          display: value
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    // flexbox
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    // grid
    gap: {
      style: gap
    },
    rowGap: {
      style: rowGap
    },
    columnGap: {
      style: columnGap
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    // positions
    position: {},
    zIndex: {
      themeKey: 'zIndex'
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    // shadows
    boxShadow: {
      themeKey: 'shadows'
    },
    // sizing
    width: {
      transform: sizingTransform
    },
    maxWidth: {
      style: maxWidth
    },
    minWidth: {
      transform: sizingTransform
    },
    height: {
      transform: sizingTransform
    },
    maxHeight: {
      transform: sizingTransform
    },
    minHeight: {
      transform: sizingTransform
    },
    boxSizing: {},
    // typography
    fontFamily: {
      themeKey: 'typography'
    },
    fontSize: {
      themeKey: 'typography'
    },
    fontStyle: {
      themeKey: 'typography'
    },
    fontWeight: {
      themeKey: 'typography'
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: 'typography'
    }
  };
  var defaultSxConfig$1 = defaultSxConfig;

  function objectsHaveSameKeys(...objects) {
    const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
    const union = new Set(allKeys);
    return objects.every(object => union.size === Object.keys(object).length);
  }
  function callIfFn(maybeFn, arg) {
    return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  function unstable_createStyleFunctionSx() {
    function getThemeValue(prop, val, theme, config) {
      const props = {
        [prop]: val,
        theme
      };
      const options = config[prop];
      if (!options) {
        return {
          [prop]: val
        };
      }
      const {
        cssProperty = prop,
        themeKey,
        transform,
        style
      } = options;
      if (val == null) {
        return null;
      }
      if (themeKey === 'typography' && val === 'inherit') {
        return {
          [prop]: val
        };
      }
      const themeMapping = getPath(theme, themeKey) || {};
      if (style) {
        return style(props);
      }
      const styleFromPropValue = propValueFinal => {
        let value = getStyleValue(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === 'string') {
          // Haven't found value
          value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, val, styleFromPropValue);
    }
    function styleFunctionSx(props) {
      var _theme$unstable_sxCon;
      const {
        sx,
        theme = {}
      } = props || {};
      if (!sx) {
        return null; // Emotion & styled-components will neglect null
      }

      const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig$1;

      /*
       * Receive `sxInput` as object or callback
       * and then recursively check keys & values to create media query object styles.
       * (the result will be used in `styled`)
       */
      function traverse(sxInput) {
        let sxObject = sxInput;
        if (typeof sxInput === 'function') {
          sxObject = sxInput(theme);
        } else if (typeof sxInput !== 'object') {
          // value
          return sxInput;
        }
        if (!sxObject) {
          return null;
        }
        const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
        const breakpointsKeys = Object.keys(emptyBreakpoints);
        let css = emptyBreakpoints;
        Object.keys(sxObject).forEach(styleKey => {
          const value = callIfFn(sxObject[styleKey], theme);
          if (value !== null && value !== undefined) {
            if (typeof value === 'object') {
              if (config[styleKey]) {
                css = merge(css, getThemeValue(styleKey, value, theme, config));
              } else {
                const breakpointsValues = handleBreakpoints({
                  theme
                }, value, x => ({
                  [styleKey]: x
                }));
                if (objectsHaveSameKeys(breakpointsValues, value)) {
                  css[styleKey] = styleFunctionSx({
                    sx: value,
                    theme
                  });
                } else {
                  css = merge(css, breakpointsValues);
                }
              }
            } else {
              css = merge(css, getThemeValue(styleKey, value, theme, config));
            }
          }
        });
        return removeUnusedBreakpoints(breakpointsKeys, css);
      }
      return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
    }
    return styleFunctionSx;
  }
  const styleFunctionSx = unstable_createStyleFunctionSx();
  styleFunctionSx.filterProps = ['sx'];
  var styleFunctionSx$1 = styleFunctionSx;

  const _excluded$G = ["breakpoints", "palette", "spacing", "shape"];
  function createTheme$1(options = {}, ...args) {
    const {
        breakpoints: breakpointsInput = {},
        palette: paletteInput = {},
        spacing: spacingInput,
        shape: shapeInput = {}
      } = options,
      other = _objectWithoutPropertiesLoose(options, _excluded$G);
    const breakpoints = createBreakpoints(breakpointsInput);
    const spacing = createSpacing(spacingInput);
    let muiTheme = deepmerge({
      breakpoints,
      direction: 'ltr',
      components: {},
      // Inject component definitions.
      palette: _extends({
        mode: 'light'
      }, paletteInput),
      spacing,
      shape: _extends({}, shape$1, shapeInput)
    }, other);
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
    muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx$1({
        sx: props,
        theme: this
      });
    };
    return muiTheme;
  }

  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  function useTheme$2(defaultTheme = null) {
    const contextTheme = React__namespace.useContext(ThemeContext);
    return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
  }

  const systemDefaultTheme$1 = createTheme$1();
  function useTheme$1(defaultTheme = systemDefaultTheme$1) {
    return useTheme$2(defaultTheme);
  }

  function GlobalStyles$1({
    styles,
    themeId,
    defaultTheme = {}
  }) {
    const upperTheme = useTheme$1(defaultTheme);
    const globalStyles = typeof styles === 'function' ? styles(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles;
    return /*#__PURE__*/jsxRuntimeExports.jsx(GlobalStyles$2, {
      styles: globalStyles
    });
  }

  const _excluded$F = ["sx"];
  const splitProps = props => {
    var _props$theme$unstable, _props$theme;
    const result = {
      systemProps: {},
      otherProps: {}
    };
    const config = (_props$theme$unstable = props == null ? void 0 : (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig$1;
    Object.keys(props).forEach(prop => {
      if (config[prop]) {
        result.systemProps[prop] = props[prop];
      } else {
        result.otherProps[prop] = props[prop];
      }
    });
    return result;
  };
  function extendSxProp(props) {
    const {
        sx: inSx
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$F);
    const {
      systemProps,
      otherProps
    } = splitProps(other);
    let finalSx;
    if (Array.isArray(inSx)) {
      finalSx = [systemProps, ...inSx];
    } else if (typeof inSx === 'function') {
      finalSx = (...args) => {
        const result = inSx(...args);
        if (!isPlainObject(result)) {
          return systemProps;
        }
        return _extends({}, systemProps, result);
      };
    } else {
      finalSx = _extends({}, systemProps, inSx);
    }
    return _extends({}, otherProps, {
      sx: finalSx
    });
  }

  const _excluded$E = ["variant"];
  function isEmpty$2(string) {
    return string.length === 0;
  }

  /**
   * Generates string classKey based on the properties provided. It starts with the
   * variant if defined, and then it appends all other properties in alphabetical order.
   * @param {object} props - the properties for which the classKey should be created.
   */
  function propsToClassKey(props) {
    const {
        variant
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$E);
    let classKey = variant || '';
    Object.keys(other).sort().forEach(key => {
      if (key === 'color') {
        classKey += isEmpty$2(classKey) ? props[key] : capitalize(props[key]);
      } else {
        classKey += `${isEmpty$2(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
      }
    });
    return classKey;
  }

  const _excluded$D = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
  function isEmpty$1(obj) {
    return Object.keys(obj).length === 0;
  }

  // https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
  function isStringTag(tag) {
    return typeof tag === 'string' &&
    // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96;
  }
  const getStyleOverrides = (name, theme) => {
    if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
      return theme.components[name].styleOverrides;
    }
    return null;
  };
  const getVariantStyles = (name, theme) => {
    let variants = [];
    if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
      variants = theme.components[name].variants;
    }
    const variantsStyles = {};
    variants.forEach(definition => {
      const key = propsToClassKey(definition.props);
      variantsStyles[key] = definition.style;
    });
    return variantsStyles;
  };
  const variantsResolver = (props, styles, theme, name) => {
    var _theme$components, _theme$components$nam;
    const {
      ownerState = {}
    } = props;
    const variantsStyles = [];
    const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;
    if (themeVariants) {
      themeVariants.forEach(themeVariant => {
        let isMatch = true;
        Object.keys(themeVariant.props).forEach(key => {
          if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
            isMatch = false;
          }
        });
        if (isMatch) {
          variantsStyles.push(styles[propsToClassKey(themeVariant.props)]);
        }
      });
    }
    return variantsStyles;
  };

  // Update /system/styled/#api in case if this changes
  function shouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
  }
  const systemDefaultTheme = createTheme$1();
  function resolveTheme({
    defaultTheme,
    theme,
    themeId
  }) {
    return isEmpty$1(theme) ? defaultTheme : theme[themeId] || theme;
  }
  function createStyled(input = {}) {
    const {
      themeId,
      defaultTheme = systemDefaultTheme,
      rootShouldForwardProp = shouldForwardProp,
      slotShouldForwardProp = shouldForwardProp
    } = input;
    const systemSx = props => {
      return styleFunctionSx$1(_extends({}, props, {
        theme: resolveTheme(_extends({}, props, {
          defaultTheme,
          themeId
        }))
      }));
    };
    systemSx.__mui_systemSx = true;
    return (tag, inputOptions = {}) => {
      // Filter out the `sx` style function from the previous styled component to prevent unnecessary styles generated by the composite components.
      internal_processStyles(tag, styles => styles.filter(style => !(style != null && style.__mui_systemSx)));
      const {
          name: componentName,
          slot: componentSlot,
          skipVariantsResolver: inputSkipVariantsResolver,
          skipSx: inputSkipSx,
          overridesResolver
        } = inputOptions,
        options = _objectWithoutPropertiesLoose(inputOptions, _excluded$D);

      // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
      const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== 'Root' || false;
      const skipSx = inputSkipSx || false;
      let label;
      let shouldForwardPropOption = shouldForwardProp;
      if (componentSlot === 'Root') {
        shouldForwardPropOption = rootShouldForwardProp;
      } else if (componentSlot) {
        // any other slot specified
        shouldForwardPropOption = slotShouldForwardProp;
      } else if (isStringTag(tag)) {
        // for string (html) tag, preserve the behavior in emotion & styled-components.
        shouldForwardPropOption = undefined;
      }
      const defaultStyledResolver = styled$2(tag, _extends({
        shouldForwardProp: shouldForwardPropOption,
        label
      }, options));
      const muiStyledResolver = (styleArg, ...expressions) => {
        const expressionsWithDefaultTheme = expressions ? expressions.map(stylesArg => {
          // On the server Emotion doesn't use React.forwardRef for creating components, so the created
          // component stays as a function. This condition makes sure that we do not interpolate functions
          // which are basically components used as a selectors.
          return typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg ? props => {
            return stylesArg(_extends({}, props, {
              theme: resolveTheme(_extends({}, props, {
                defaultTheme,
                themeId
              }))
            }));
          } : stylesArg;
        }) : [];
        let transformedStyleArg = styleArg;
        if (componentName && overridesResolver) {
          expressionsWithDefaultTheme.push(props => {
            const theme = resolveTheme(_extends({}, props, {
              defaultTheme,
              themeId
            }));
            const styleOverrides = getStyleOverrides(componentName, theme);
            if (styleOverrides) {
              const resolvedStyleOverrides = {};
              Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
                resolvedStyleOverrides[slotKey] = typeof slotStyle === 'function' ? slotStyle(_extends({}, props, {
                  theme
                })) : slotStyle;
              });
              return overridesResolver(props, resolvedStyleOverrides);
            }
            return null;
          });
        }
        if (componentName && !skipVariantsResolver) {
          expressionsWithDefaultTheme.push(props => {
            const theme = resolveTheme(_extends({}, props, {
              defaultTheme,
              themeId
            }));
            return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
          });
        }
        if (!skipSx) {
          expressionsWithDefaultTheme.push(systemSx);
        }
        const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
        if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
          const placeholders = new Array(numOfCustomFnsApplied).fill('');
          // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.
          transformedStyleArg = [...styleArg, ...placeholders];
          transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
        } else if (typeof styleArg === 'function' &&
        // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        styleArg.__emotion_real !== styleArg) {
          // If the type is function, we need to define the default theme.
          transformedStyleArg = props => styleArg(_extends({}, props, {
            theme: resolveTheme(_extends({}, props, {
              defaultTheme,
              themeId
            }))
          }));
        }
        const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
        if (tag.muiName) {
          Component.muiName = tag.muiName;
        }
        return Component;
      };
      if (defaultStyledResolver.withConfig) {
        muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
      }
      return muiStyledResolver;
    };
  }

  function getThemeProps(params) {
    const {
      theme,
      name,
      props
    } = params;
    if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
      return props;
    }
    return resolveProps(theme.components[name].defaultProps, props);
  }

  function useThemeProps$1({
    props,
    name,
    defaultTheme,
    themeId
  }) {
    let theme = useTheme$1(defaultTheme);
    if (themeId) {
      theme = theme[themeId] || theme;
    }
    const mergedProps = getThemeProps({
      theme,
      name,
      props
    });
    return mergedProps;
  }

  /* eslint-disable @typescript-eslint/naming-convention */
  /**
   * Returns a number whose value is limited to the given range.
   * @param {number} value The value to be clamped
   * @param {number} min The lower boundary of the output range
   * @param {number} max The upper boundary of the output range
   * @returns {number} A number in the range [min, max]
   */
  function clamp(value, min = 0, max = 1) {
    return Math.min(Math.max(min, value), max);
  }

  /**
   * Converts a color from CSS hex format to CSS rgb format.
   * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
   * @returns {string} A CSS rgb color string
   */
  function hexToRgb(color) {
    color = color.slice(1);
    const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
    let colors = color.match(re);
    if (colors && colors[0].length === 1) {
      colors = colors.map(n => n + n);
    }
    return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
  }

  /**
   * Returns an object with the type and values of a color.
   *
   * Note: Does not support rgb % values.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @returns {object} - A MUI color object: {type: string, values: number[]}
   */
  function decomposeColor(color) {
    // Idempotent
    if (color.type) {
      return color;
    }
    if (color.charAt(0) === '#') {
      return decomposeColor(hexToRgb(color));
    }
    const marker = color.indexOf('(');
    const type = color.substring(0, marker);
    if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
      throw new Error(formatMuiErrorMessage(9, color));
    }
    let values = color.substring(marker + 1, color.length - 1);
    let colorSpace;
    if (type === 'color') {
      values = values.split(' ');
      colorSpace = values.shift();
      if (values.length === 4 && values[3].charAt(0) === '/') {
        values[3] = values[3].slice(1);
      }
      if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
        throw new Error(formatMuiErrorMessage(10, colorSpace));
      }
    } else {
      values = values.split(',');
    }
    values = values.map(value => parseFloat(value));
    return {
      type,
      values,
      colorSpace
    };
  }

  /**
   * Converts a color object with type and values to a string.
   * @param {object} color - Decomposed color
   * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
   * @param {array} color.values - [n,n,n] or [n,n,n,n]
   * @returns {string} A CSS color string
   */
  function recomposeColor(color) {
    const {
      type,
      colorSpace
    } = color;
    let {
      values
    } = color;
    if (type.indexOf('rgb') !== -1) {
      // Only convert the first 3 values to int (i.e. not alpha)
      values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
    } else if (type.indexOf('hsl') !== -1) {
      values[1] = `${values[1]}%`;
      values[2] = `${values[2]}%`;
    }
    if (type.indexOf('color') !== -1) {
      values = `${colorSpace} ${values.join(' ')}`;
    } else {
      values = `${values.join(', ')}`;
    }
    return `${type}(${values})`;
  }

  /**
   * Converts a color from hsl format to rgb format.
   * @param {string} color - HSL color values
   * @returns {string} rgb color values
   */
  function hslToRgb(color) {
    color = decomposeColor(color);
    const {
      values
    } = color;
    const h = values[0];
    const s = values[1] / 100;
    const l = values[2] / 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    let type = 'rgb';
    const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
    if (color.type === 'hsla') {
      type += 'a';
      rgb.push(values[3]);
    }
    return recomposeColor({
      type,
      values: rgb
    });
  }
  /**
   * The relative brightness of any point in a color space,
   * normalized to 0 for darkest black and 1 for lightest white.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @returns {number} The relative brightness of the color in the range 0 - 1
   */
  function getLuminance(color) {
    color = decomposeColor(color);
    let rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
    rgb = rgb.map(val => {
      if (color.type !== 'color') {
        val /= 255; // normalized
      }

      return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });

    // Truncate at 3 digits
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  }

  /**
   * Calculates the contrast ratio between two colors.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} A contrast ratio value in the range 0 - 21.
   */
  function getContrastRatio(foreground, background) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }

  /**
   * Sets the absolute transparency of a color.
   * Any existing alpha values are overwritten.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} value - value to set the alpha channel to in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */
  function alpha(color, value) {
    color = decomposeColor(color);
    value = clamp(value);
    if (color.type === 'rgb' || color.type === 'hsl') {
      color.type += 'a';
    }
    if (color.type === 'color') {
      color.values[3] = `/${value}`;
    } else {
      color.values[3] = value;
    }
    return recomposeColor(color);
  }

  /**
   * Darkens a color.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */
  function darken(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);
    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] *= 1 - coefficient;
      }
    }
    return recomposeColor(color);
  }

  /**
   * Lightens a color.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */
  function lighten(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);
    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] += (255 - color.values[i]) * coefficient;
      }
    } else if (color.type.indexOf('color') !== -1) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] += (1 - color.values[i]) * coefficient;
      }
    }
    return recomposeColor(color);
  }

  function createMixins(breakpoints, mixins) {
    return _extends({
      toolbar: {
        minHeight: 56,
        [breakpoints.up('xs')]: {
          '@media (orientation: landscape)': {
            minHeight: 48
          }
        },
        [breakpoints.up('sm')]: {
          minHeight: 64
        }
      }
    }, mixins);
  }

  const common = {
    black: '#000',
    white: '#fff'
  };
  var common$1 = common;

  const grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161'
  };
  var grey$1 = grey;

  const purple = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff'
  };
  var purple$1 = purple;

  const red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  };
  var red$1 = red;

  const orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
  };
  var orange$1 = orange;

  const blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
  };
  var blue$1 = blue;

  const lightBlue = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea'
  };
  var lightBlue$1 = lightBlue;

  const green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
  };
  var green$1 = green;

  const _excluded$C = ["mode", "contrastThreshold", "tonalOffset"];
  const light = {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.6)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common$1.white,
      default: common$1.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
  const dark = {
    text: {
      primary: common$1.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: '#121212',
      default: '#121212'
    },
    action: {
      active: common$1.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
  function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === 'light') {
        intent.light = lighten(intent.main, tonalOffsetLight);
      } else if (direction === 'dark') {
        intent.dark = darken(intent.main, tonalOffsetDark);
      }
    }
  }
  function getDefaultPrimary(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: blue$1[200],
        light: blue$1[50],
        dark: blue$1[400]
      };
    }
    return {
      main: blue$1[700],
      light: blue$1[400],
      dark: blue$1[800]
    };
  }
  function getDefaultSecondary(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: purple$1[200],
        light: purple$1[50],
        dark: purple$1[400]
      };
    }
    return {
      main: purple$1[500],
      light: purple$1[300],
      dark: purple$1[700]
    };
  }
  function getDefaultError(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: red$1[500],
        light: red$1[300],
        dark: red$1[700]
      };
    }
    return {
      main: red$1[700],
      light: red$1[400],
      dark: red$1[800]
    };
  }
  function getDefaultInfo(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: lightBlue$1[400],
        light: lightBlue$1[300],
        dark: lightBlue$1[700]
      };
    }
    return {
      main: lightBlue$1[700],
      light: lightBlue$1[500],
      dark: lightBlue$1[900]
    };
  }
  function getDefaultSuccess(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: green$1[400],
        light: green$1[300],
        dark: green$1[700]
      };
    }
    return {
      main: green$1[800],
      light: green$1[500],
      dark: green$1[900]
    };
  }
  function getDefaultWarning(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: orange$1[400],
        light: orange$1[300],
        dark: orange$1[700]
      };
    }
    return {
      main: '#ed6c02',
      // closest to orange[800] that pass 3:1.
      light: orange$1[500],
      dark: orange$1[900]
    };
  }
  function createPalette(palette) {
    const {
        mode = 'light',
        contrastThreshold = 3,
        tonalOffset = 0.2
      } = palette,
      other = _objectWithoutPropertiesLoose(palette, _excluded$C);
    const primary = palette.primary || getDefaultPrimary(mode);
    const secondary = palette.secondary || getDefaultSecondary(mode);
    const error = palette.error || getDefaultError(mode);
    const info = palette.info || getDefaultInfo(mode);
    const success = palette.success || getDefaultSuccess(mode);
    const warning = palette.warning || getDefaultWarning(mode);

    // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
    function getContrastText(background) {
      const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
      return contrastText;
    }
    const augmentColor = ({
      color,
      name,
      mainShade = 500,
      lightShade = 300,
      darkShade = 700
    }) => {
      color = _extends({}, color);
      if (!color.main && color[mainShade]) {
        color.main = color[mainShade];
      }
      if (!color.hasOwnProperty('main')) {
        throw new Error(formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade));
      }
      if (typeof color.main !== 'string') {
        throw new Error(formatMuiErrorMessage(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
      }
      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);
      if (!color.contrastText) {
        color.contrastText = getContrastText(color.main);
      }
      return color;
    };
    const modes = {
      dark,
      light
    };
    const paletteOutput = deepmerge(_extends({
      // A collection of common colors.
      common: _extends({}, common$1),
      // prevent mutable object.
      // The palette mode, can be light or dark.
      mode,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor({
        color: primary,
        name: 'primary'
      }),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor({
        color: secondary,
        name: 'secondary',
        mainShade: 'A400',
        lightShade: 'A200',
        darkShade: 'A700'
      }),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor({
        color: error,
        name: 'error'
      }),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor({
        color: warning,
        name: 'warning'
      }),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor({
        color: info,
        name: 'info'
      }),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor({
        color: success,
        name: 'success'
      }),
      // The grey colors.
      grey: grey$1,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText,
      // Generate a rich color object.
      augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset
    }, modes[mode]), other);
    return paletteOutput;
  }

  const _excluded$B = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }
  const caseAllCaps = {
    textTransform: 'uppercase'
  };
  const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

  /**
   * @see @link{https://m2.material.io/design/typography/the-type-system.html}
   * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
   */
  function createTypography(palette, typography) {
    const _ref = typeof typography === 'function' ? typography(palette) : typography,
      {
        fontFamily = defaultFontFamily,
        // The default font size of the Material Specification.
        fontSize = 14,
        // px
        fontWeightLight = 300,
        fontWeightRegular = 400,
        fontWeightMedium = 500,
        fontWeightBold = 700,
        // Tell MUI what's the font-size on the html element.
        // 16px is the default font-size used by browsers.
        htmlFontSize = 16,
        // Apply the CSS properties to all the variants.
        allVariants,
        pxToRem: pxToRem2
      } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, _excluded$B);
    const coef = fontSize / 14;
    const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);
    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
      fontFamily,
      fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: `${round(letterSpacing / size)}em`
    } : {}, casing, allVariants);
    const variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit'
      }
    };
    return deepmerge(_extends({
      htmlFontSize,
      pxToRem,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold
    }, variants), other, {
      clone: false // No need to clone deep
    });
  }

  const shadowKeyUmbraOpacity = 0.2;
  const shadowKeyPenumbraOpacity = 0.14;
  const shadowAmbientShadowOpacity = 0.12;
  function createShadow(...px) {
    return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
  }

  // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
  const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
  var shadows$1 = shadows;

  const _excluded$A = ["duration", "easing", "delay"];
  // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
  // to learn the context in which each easing should be used.
  const easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  };

  // Follow https://m2.material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
  // to learn when use what timing
  const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };
  function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
  }
  function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }
    const constant = height / 36;

    // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
  }
  function createTransitions(inputTransitions) {
    const mergedEasing = _extends({}, easing, inputTransitions.easing);
    const mergedDuration = _extends({}, duration, inputTransitions.duration);
    const create = (props = ['all'], options = {}) => {
      const {
          duration: durationOption = mergedDuration.standard,
          easing: easingOption = mergedEasing.easeInOut,
          delay = 0
        } = options;
        _objectWithoutPropertiesLoose(options, _excluded$A);
      return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
    };
    return _extends({
      getAutoHeightDuration,
      create
    }, inputTransitions, {
      easing: mergedEasing,
      duration: mergedDuration
    });
  }

  // We need to centralize the zIndex definitions as they work
  // like global values in the browser.
  const zIndex = {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  var zIndex$1 = zIndex;

  const _excluded$z = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
  function createTheme(options = {}, ...args) {
    const {
        mixins: mixinsInput = {},
        palette: paletteInput = {},
        transitions: transitionsInput = {},
        typography: typographyInput = {}
      } = options,
      other = _objectWithoutPropertiesLoose(options, _excluded$z);
    if (options.vars) {
      throw new Error(formatMuiErrorMessage(18));
    }
    const palette = createPalette(paletteInput);
    const systemTheme = createTheme$1(options);
    let muiTheme = deepmerge(systemTheme, {
      mixins: createMixins(systemTheme.breakpoints, mixinsInput),
      palette,
      // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
      shadows: shadows$1.slice(),
      typography: createTypography(palette, typographyInput),
      transitions: createTransitions(transitionsInput),
      zIndex: _extends({}, zIndex$1)
    });
    muiTheme = deepmerge(muiTheme, other);
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
    muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx$1({
        sx: props,
        theme: this
      });
    };
    return muiTheme;
  }

  const defaultTheme = createTheme();
  var defaultTheme$1 = defaultTheme;

  var THEME_ID = '$$material';

  function useThemeProps({
    props,
    name
  }) {
    return useThemeProps$1({
      props,
      name,
      defaultTheme: defaultTheme$1,
      themeId: THEME_ID
    });
  }

  const rootShouldForwardProp = prop => shouldForwardProp(prop) && prop !== 'classes';
  const slotShouldForwardProp = shouldForwardProp;
  const styled = createStyled({
    themeId: THEME_ID,
    defaultTheme: defaultTheme$1,
    rootShouldForwardProp
  });
  var styled$1 = styled;

  /**
   * @ignore - internal component.
   */
  const ListContext = /*#__PURE__*/React__namespace.createContext({});
  var ListContext$1 = ListContext;

  var config = {
    disabled: false
  };

  var TransitionGroupContext = React.createContext(null);

  var forceReflow = function forceReflow(node) {
    return node.scrollTop;
  };

  var UNMOUNTED = 'unmounted';
  var EXITED = 'exited';
  var ENTERING = 'entering';
  var ENTERED = 'entered';
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * ---
   *
   * **Note**: `Transition` is a platform-agnostic base component. If you're using
   * transitions in CSS, you'll probably want to use
   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
   * instead. It inherits all the features of `Transition`, but contains
   * additional features necessary to play nice with CSS transitions (hence the
   * name of the component).
   *
   * ---
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the
   * components. It's up to you to give meaning and effect to those states. For
   * example we can add styles to a component when it enters or exits:
   *
   * ```jsx
   * import { Transition } from 'react-transition-group';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 1 },
   *   entered:  { opacity: 1 },
   *   exiting:  { opacity: 0 },
   *   exited:  { opacity: 0 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {state => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component
   * begins the "Enter" stage. During this stage, the component will shift from
   * its current transition state, to `'entering'` for the duration of the
   * transition and then to the `'entered'` stage once it's complete. Let's take
   * the following example (we'll use the
   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <Transition in={inProp} timeout={500}>
   *         {state => (
   *           // ...
   *         )}
   *       </Transition>
   *       <button onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state
   * and stay there for 500ms (the value of `timeout`) before it finally switches
   * to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from
   * `'exiting'` to `'exited'`.
   */

  var Transition = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(Transition, _React$Component);

    function Transition(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }

    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;

      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }

      return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }
    ;

    var _proto = Transition.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;

      if (prevProps !== this.props) {
        var status = this.state.status;

        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }

      this.updateStatus(false, nextStatus);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter; // TODO: remove fallback for next major

        appear = timeout.appear !== undefined ? timeout.appear : enter;
      }

      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };

    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }

      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();

        if (nextStatus === ENTERING) {
          if (this.props.unmountOnExit || this.props.mountOnEnter) {
            var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
            // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
            // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

            if (node) forceReflow(node);
          }

          this.performEnter(mounting);
        } else {
          this.performExit();
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };

    _proto.performEnter = function performEnter(mounting) {
      var _this2 = this;

      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;

      var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
          maybeNode = _ref2[0],
          maybeAppearing = _ref2[1];

      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if (!mounting && !enter || config.disabled) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode);
        });
        return;
      }

      this.props.onEnter(maybeNode, maybeAppearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(maybeNode, maybeAppearing);

        _this2.onTransitionEnd(enterTimeout, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(maybeNode, maybeAppearing);
          });
        });
      });
    };

    _proto.performExit = function performExit() {
      var _this3 = this;

      var exit = this.props.exit;
      var timeouts = this.getTimeouts();
      var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

      if (!exit || config.disabled) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
        return;
      }

      this.props.onExit(maybeNode);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(maybeNode);

        _this3.onTransitionEnd(timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(maybeNode);
          });
        });
      });
    };

    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };

    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
      this.setNextCallback(handler);
      var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }

      if (this.props.addEndListener) {
        var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
            maybeNode = _ref3[0],
            maybeNextCallback = _ref3[1];

        this.props.addEndListener(maybeNode, maybeNextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };

    _proto.render = function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _this$props = this.props,
          children = _this$props.children;
          _this$props.in;
          _this$props.mountOnEnter;
          _this$props.unmountOnExit;
          _this$props.appear;
          _this$props.enter;
          _this$props.exit;
          _this$props.timeout;
          _this$props.addEndListener;
          _this$props.onEnter;
          _this$props.onEntering;
          _this$props.onEntered;
          _this$props.onExit;
          _this$props.onExiting;
          _this$props.onExited;
          _this$props.nodeRef;
          var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

      return (
        /*#__PURE__*/
        // allows for nested Transitions
        React.createElement(TransitionGroupContext.Provider, {
          value: null
        }, typeof children === 'function' ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps))
      );
    };

    return Transition;
  }(React.Component);

  Transition.contextType = TransitionGroupContext;
  Transition.propTypes = {}; // Name the function so it is clearer in the documentation

  function noop() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop,
    onEntering: noop,
    onEntered: noop,
    onExit: noop,
    onExiting: noop,
    onExited: noop
  };
  Transition.UNMOUNTED = UNMOUNTED;
  Transition.EXITED = EXITED;
  Transition.ENTERING = ENTERING;
  Transition.ENTERED = ENTERED;
  Transition.EXITING = EXITING;
  var Transition$1 = Transition;

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }

  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */

  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && React.isValidElement(child) ? mapFn(child) : child;
    };

    var result = Object.create(null);
    if (children) React.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */

  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list


    var nextKeysPending = Object.create(null);
    var pendingKeys = [];

    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};

    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }

      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`


    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }

  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }

  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (!React.isValidElement(child)) return;
      var hasPrev = (key in prevChildMapping);
      var hasNext = (key in nextChildMapping);
      var prevChild = prevChildMapping[key];
      var isLeaving = React.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = React.cloneElement(child, {
          in: false
        });
      } else if (hasNext && hasPrev && React.isValidElement(prevChild)) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      }
    });
    return children;
  }

  var values = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

  var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
  };
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

  var TransitionGroup = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: handleExited,
        firstRender: true
      };
      return _this;
    }

    var _proto = TransitionGroup.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children,
          handleExited = _ref.handleExited,
          firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    } // node is `undefined` when user provided `nodeRef` prop
    ;

    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;

      if (child.props.onExited) {
        child.props.onExited(node);
      }

      if (this.mounted) {
        this.setState(function (state) {
          var children = _extends({}, state.children);

          delete children[child.key];
          return {
            children: children
          };
        });
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          Component = _this$props.component,
          childFactory = _this$props.childFactory,
          props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

      var contextValue = this.state.contextValue;
      var children = values(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;

      if (Component === null) {
        return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, children);
      }

      return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, /*#__PURE__*/React.createElement(Component, props, children));
    };

    return TransitionGroup;
  }(React.Component);

  TransitionGroup.propTypes = {};
  TransitionGroup.defaultProps = defaultProps;
  var TransitionGroup$1 = TransitionGroup;

  function Ripple(props) {
    const {
      className,
      classes,
      pulsate = false,
      rippleX,
      rippleY,
      rippleSize,
      in: inProp,
      onExited,
      timeout
    } = props;
    const [leaving, setLeaving] = React__namespace.useState(false);
    const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    const rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX
    };
    const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    if (!inProp && !leaving) {
      setLeaving(true);
    }
    React__namespace.useEffect(() => {
      if (!inProp && onExited != null) {
        // react-transition-group#onExited
        const timeoutId = setTimeout(onExited, timeout);
        return () => {
          clearTimeout(timeoutId);
        };
      }
      return undefined;
    }, [onExited, inProp, timeout]);
    return /*#__PURE__*/jsxRuntimeExports.jsx("span", {
      className: rippleClassName,
      style: rippleStyles,
      children: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        className: childClassName
      })
    });
  }

  const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);
  var touchRippleClasses$1 = touchRippleClasses;

  const _excluded$y = ["center", "classes", "className"];
  let _$1 = t => t,
    _t$1,
    _t2$1,
    _t3$1,
    _t4$1;
  const DURATION = 550;
  const DELAY_RIPPLE = 80;
  const enterKeyframe = keyframes(_t$1 || (_t$1 = _$1`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
  const exitKeyframe = keyframes(_t2$1 || (_t2$1 = _$1`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
  const pulsateKeyframe = keyframes(_t3$1 || (_t3$1 = _$1`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
  const TouchRippleRoot = styled$1('span', {
    name: 'MuiTouchRipple',
    slot: 'Root'
  })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit'
  });

  // This `styled()` function invokes keyframes. `styled-components` only supports keyframes
  // in string templates. Do not convert these styles in JS object as it will break.
  const TouchRippleRipple = styled$1(Ripple, {
    name: 'MuiTouchRipple',
    slot: 'Ripple'
  })(_t4$1 || (_t4$1 = _$1`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses$1.rippleVisible, enterKeyframe, DURATION, ({
    theme
  }) => theme.transitions.easing.easeInOut, touchRippleClasses$1.ripplePulsate, ({
    theme
  }) => theme.transitions.duration.shorter, touchRippleClasses$1.child, touchRippleClasses$1.childLeaving, exitKeyframe, DURATION, ({
    theme
  }) => theme.transitions.easing.easeInOut, touchRippleClasses$1.childPulsate, pulsateKeyframe, ({
    theme
  }) => theme.transitions.easing.easeInOut);

  /**
   * @ignore - internal component.
   *
   * TODO v5: Make private
   */
  const TouchRipple = /*#__PURE__*/React__namespace.forwardRef(function TouchRipple(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiTouchRipple'
    });
    const {
        center: centerProp = false,
        classes = {},
        className
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$y);
    const [ripples, setRipples] = React__namespace.useState([]);
    const nextKey = React__namespace.useRef(0);
    const rippleCallback = React__namespace.useRef(null);
    React__namespace.useEffect(() => {
      if (rippleCallback.current) {
        rippleCallback.current();
        rippleCallback.current = null;
      }
    }, [ripples]);

    // Used to filter out mouse emulated events on mobile.
    const ignoringMouseDown = React__namespace.useRef(false);
    // We use a timer in order to only show the ripples for touch "click" like events.
    // We don't want to display the ripple for touch scroll events.
    const startTimer = React__namespace.useRef(0);

    // This is the hook called once the previous timeout is ready.
    const startTimerCommit = React__namespace.useRef(null);
    const container = React__namespace.useRef(null);
    React__namespace.useEffect(() => {
      return () => {
        if (startTimer.current) {
          clearTimeout(startTimer.current);
        }
      };
    }, []);
    const startCommit = React__namespace.useCallback(params => {
      const {
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      } = params;
      setRipples(oldRipples => [...oldRipples, /*#__PURE__*/jsxRuntimeExports.jsx(TouchRippleRipple, {
        classes: {
          ripple: clsx(classes.ripple, touchRippleClasses$1.ripple),
          rippleVisible: clsx(classes.rippleVisible, touchRippleClasses$1.rippleVisible),
          ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses$1.ripplePulsate),
          child: clsx(classes.child, touchRippleClasses$1.child),
          childLeaving: clsx(classes.childLeaving, touchRippleClasses$1.childLeaving),
          childPulsate: clsx(classes.childPulsate, touchRippleClasses$1.childPulsate)
        },
        timeout: DURATION,
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize
      }, nextKey.current)]);
      nextKey.current += 1;
      rippleCallback.current = cb;
    }, [classes]);
    const start = React__namespace.useCallback((event = {}, options = {}, cb = () => {}) => {
      const {
        pulsate = false,
        center = centerProp || options.pulsate,
        fakeElement = false // For test purposes
      } = options;
      if ((event == null ? void 0 : event.type) === 'mousedown' && ignoringMouseDown.current) {
        ignoringMouseDown.current = false;
        return;
      }
      if ((event == null ? void 0 : event.type) === 'touchstart') {
        ignoringMouseDown.current = true;
      }
      const element = fakeElement ? null : container.current;
      const rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };

      // Get the size of the ripple
      let rippleX;
      let rippleY;
      let rippleSize;
      if (center || event === undefined || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        const {
          clientX,
          clientY
        } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }
      if (center) {
        rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);

        // For some reason the animation is broken on Mobile Chrome if the size is even.
        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
      }

      // Touche devices
      if (event != null && event.touches) {
        // check that this isn't another touchstart due to multitouch
        // otherwise we will only clear a single timer when unmounting while two
        // are running
        if (startTimerCommit.current === null) {
          // Prepare the ripple effect.
          startTimerCommit.current = () => {
            startCommit({
              pulsate,
              rippleX,
              rippleY,
              rippleSize,
              cb
            });
          };
          // Delay the execution of the ripple effect.
          startTimer.current = setTimeout(() => {
            if (startTimerCommit.current) {
              startTimerCommit.current();
              startTimerCommit.current = null;
            }
          }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
        }
      } else {
        startCommit({
          pulsate,
          rippleX,
          rippleY,
          rippleSize,
          cb
        });
      }
    }, [centerProp, startCommit]);
    const pulsate = React__namespace.useCallback(() => {
      start({}, {
        pulsate: true
      });
    }, [start]);
    const stop = React__namespace.useCallback((event, cb) => {
      clearTimeout(startTimer.current);

      // The touch interaction occurs too quickly.
      // We still want to show ripple effect.
      if ((event == null ? void 0 : event.type) === 'touchend' && startTimerCommit.current) {
        startTimerCommit.current();
        startTimerCommit.current = null;
        startTimer.current = setTimeout(() => {
          stop(event, cb);
        });
        return;
      }
      startTimerCommit.current = null;
      setRipples(oldRipples => {
        if (oldRipples.length > 0) {
          return oldRipples.slice(1);
        }
        return oldRipples;
      });
      rippleCallback.current = cb;
    }, []);
    React__namespace.useImperativeHandle(ref, () => ({
      pulsate,
      start,
      stop
    }), [pulsate, start, stop]);
    return /*#__PURE__*/jsxRuntimeExports.jsx(TouchRippleRoot, _extends({
      className: clsx(touchRippleClasses$1.root, classes.root, className),
      ref: container
    }, other, {
      children: /*#__PURE__*/jsxRuntimeExports.jsx(TransitionGroup$1, {
        component: null,
        exit: true,
        children: ripples
      })
    }));
  });
  var TouchRipple$1 = TouchRipple;

  function getButtonBaseUtilityClass(slot) {
    return generateUtilityClass('MuiButtonBase', slot);
  }
  const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);
  var buttonBaseClasses$1 = buttonBaseClasses;

  const _excluded$x = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
  const useUtilityClasses$s = ownerState => {
    const {
      disabled,
      focusVisible,
      focusVisibleClassName,
      classes
    } = ownerState;
    const slots = {
      root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
    };
    const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
    if (focusVisible && focusVisibleClassName) {
      composedClasses.root += ` ${focusVisibleClassName}`;
    }
    return composedClasses;
  };
  const ButtonBaseRoot = styled$1('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.
    },

    [`&.${buttonBaseClasses$1.disabled}`]: {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    },
    '@media print': {
      colorAdjust: 'exact'
    }
  });

  /**
   * `ButtonBase` contains as few styles as possible.
   * It aims to be a simple building block for creating a button.
   * It contains a load of style reset and some focus/ripple logic.
   */
  const ButtonBase = /*#__PURE__*/React__namespace.forwardRef(function ButtonBase(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiButtonBase'
    });
    const {
        action,
        centerRipple = false,
        children,
        className,
        component = 'button',
        disabled = false,
        disableRipple = false,
        disableTouchRipple = false,
        focusRipple = false,
        LinkComponent = 'a',
        onBlur,
        onClick,
        onContextMenu,
        onDragLeave,
        onFocus,
        onFocusVisible,
        onKeyDown,
        onKeyUp,
        onMouseDown,
        onMouseLeave,
        onMouseUp,
        onTouchEnd,
        onTouchMove,
        onTouchStart,
        tabIndex = 0,
        TouchRippleProps,
        touchRippleRef,
        type
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$x);
    const buttonRef = React__namespace.useRef(null);
    const rippleRef = React__namespace.useRef(null);
    const handleRippleRef = useForkRef(rippleRef, touchRippleRef);
    const {
      isFocusVisibleRef,
      onFocus: handleFocusVisible,
      onBlur: handleBlurVisible,
      ref: focusVisibleRef
    } = useIsFocusVisible();
    const [focusVisible, setFocusVisible] = React__namespace.useState(false);
    if (disabled && focusVisible) {
      setFocusVisible(false);
    }
    React__namespace.useImperativeHandle(action, () => ({
      focusVisible: () => {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    }), []);
    const [mountedState, setMountedState] = React__namespace.useState(false);
    React__namespace.useEffect(() => {
      setMountedState(true);
    }, []);
    const enableTouchRipple = mountedState && !disableRipple && !disabled;
    React__namespace.useEffect(() => {
      if (focusVisible && focusRipple && !disableRipple && mountedState) {
        rippleRef.current.pulsate();
      }
    }, [disableRipple, focusRipple, focusVisible, mountedState]);
    function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
      return useEventCallback(event => {
        if (eventCallback) {
          eventCallback(event);
        }
        const ignore = skipRippleAction;
        if (!ignore && rippleRef.current) {
          rippleRef.current[rippleAction](event);
        }
        return true;
      });
    }
    const handleMouseDown = useRippleHandler('start', onMouseDown);
    const handleContextMenu = useRippleHandler('stop', onContextMenu);
    const handleDragLeave = useRippleHandler('stop', onDragLeave);
    const handleMouseUp = useRippleHandler('stop', onMouseUp);
    const handleMouseLeave = useRippleHandler('stop', event => {
      if (focusVisible) {
        event.preventDefault();
      }
      if (onMouseLeave) {
        onMouseLeave(event);
      }
    });
    const handleTouchStart = useRippleHandler('start', onTouchStart);
    const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
    const handleTouchMove = useRippleHandler('stop', onTouchMove);
    const handleBlur = useRippleHandler('stop', event => {
      handleBlurVisible(event);
      if (isFocusVisibleRef.current === false) {
        setFocusVisible(false);
      }
      if (onBlur) {
        onBlur(event);
      }
    }, false);
    const handleFocus = useEventCallback(event => {
      // Fix for https://github.com/facebook/react/issues/7769
      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }
      handleFocusVisible(event);
      if (isFocusVisibleRef.current === true) {
        setFocusVisible(true);
        if (onFocusVisible) {
          onFocusVisible(event);
        }
      }
      if (onFocus) {
        onFocus(event);
      }
    });
    const isNonNativeButton = () => {
      const button = buttonRef.current;
      return component && component !== 'button' && !(button.tagName === 'A' && button.href);
    };

    /**
     * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
     */
    const keydownRef = React__namespace.useRef(false);
    const handleKeyDown = useEventCallback(event => {
      // Check if key is already down to avoid repeats being counted as multiple activations
      if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
        keydownRef.current = true;
        rippleRef.current.stop(event, () => {
          rippleRef.current.start(event);
        });
      }
      if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
        event.preventDefault();
      }
      if (onKeyDown) {
        onKeyDown(event);
      }

      // Keyboard accessibility for non interactive elements
      if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
        event.preventDefault();
        if (onClick) {
          onClick(event);
        }
      }
    });
    const handleKeyUp = useEventCallback(event => {
      // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
      // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
      if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
        keydownRef.current = false;
        rippleRef.current.stop(event, () => {
          rippleRef.current.pulsate(event);
        });
      }
      if (onKeyUp) {
        onKeyUp(event);
      }

      // Keyboard accessibility for non interactive elements
      if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
        onClick(event);
      }
    });
    let ComponentProp = component;
    if (ComponentProp === 'button' && (other.href || other.to)) {
      ComponentProp = LinkComponent;
    }
    const buttonProps = {};
    if (ComponentProp === 'button') {
      buttonProps.type = type === undefined ? 'button' : type;
      buttonProps.disabled = disabled;
    } else {
      if (!other.href && !other.to) {
        buttonProps.role = 'button';
      }
      if (disabled) {
        buttonProps['aria-disabled'] = disabled;
      }
    }
    const handleRef = useForkRef(ref, focusVisibleRef, buttonRef);
    const ownerState = _extends({}, props, {
      centerRipple,
      component,
      disabled,
      disableRipple,
      disableTouchRipple,
      focusRipple,
      tabIndex,
      focusVisible
    });
    const classes = useUtilityClasses$s(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsxs(ButtonBaseRoot, _extends({
      as: ComponentProp,
      className: clsx(classes.root, className),
      ownerState: ownerState,
      onBlur: handleBlur,
      onClick: onClick,
      onContextMenu: handleContextMenu,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseUp: handleMouseUp,
      onDragLeave: handleDragLeave,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
      onTouchStart: handleTouchStart,
      ref: handleRef,
      tabIndex: disabled ? -1 : tabIndex,
      type: type
    }, buttonProps, other, {
      children: [children, enableTouchRipple ?
      /*#__PURE__*/
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      jsxRuntimeExports.jsx(TouchRipple$1, _extends({
        ref: handleRippleRef,
        center: centerRipple
      }, TouchRippleProps)) : null]
    }));
  });
  var ButtonBase$1 = ButtonBase;

  const dividerClasses = generateUtilityClasses('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);
  var dividerClasses$1 = dividerClasses;

  const listItemIconClasses = generateUtilityClasses('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
  var listItemIconClasses$1 = listItemIconClasses;

  function getTypographyUtilityClass(slot) {
    return generateUtilityClass('MuiTypography', slot);
  }
  generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);

  const _excluded$w = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
  const useUtilityClasses$r = ownerState => {
    const {
      align,
      gutterBottom,
      noWrap,
      paragraph,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ['root', variant, ownerState.align !== 'inherit' && `align${capitalize(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
    };
    return composeClasses(slots, getTypographyUtilityClass, classes);
  };
  const TypographyRoot = styled$1('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    margin: 0
  }, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
    textAlign: ownerState.align
  }, ownerState.noWrap && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, ownerState.gutterBottom && {
    marginBottom: '0.35em'
  }, ownerState.paragraph && {
    marginBottom: 16
  }));
  const defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p'
  };

  // TODO v6: deprecate these color values in v5.x and remove the transformation in v6
  const colorTransformations = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main'
  };
  const transformDeprecatedColors = color => {
    return colorTransformations[color] || color;
  };
  const Typography = /*#__PURE__*/React__namespace.forwardRef(function Typography(inProps, ref) {
    const themeProps = useThemeProps({
      props: inProps,
      name: 'MuiTypography'
    });
    const color = transformDeprecatedColors(themeProps.color);
    const props = extendSxProp(_extends({}, themeProps, {
      color
    }));
    const {
        align = 'inherit',
        className,
        component,
        gutterBottom = false,
        noWrap = false,
        paragraph = false,
        variant = 'body1',
        variantMapping = defaultVariantMapping
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$w);
    const ownerState = _extends({}, props, {
      align,
      color,
      className,
      component,
      gutterBottom,
      noWrap,
      paragraph,
      variant,
      variantMapping
    });
    const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
    const classes = useUtilityClasses$r(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsx(TypographyRoot, _extends({
      as: Component,
      ref: ref,
      ownerState: ownerState,
      className: clsx(classes.root, className)
    }, other));
  });
  var Typography$1 = Typography;

  const listItemTextClasses = generateUtilityClasses('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']);
  var listItemTextClasses$1 = listItemTextClasses;

  function getMenuItemUtilityClass(slot) {
    return generateUtilityClass('MuiMenuItem', slot);
  }
  const menuItemClasses = generateUtilityClasses('MuiMenuItem', ['root', 'focusVisible', 'dense', 'disabled', 'divider', 'gutters', 'selected']);
  var menuItemClasses$1 = menuItemClasses;

  const _excluded$v = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"];
  const overridesResolver = (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.dense && styles.dense, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
  };
  const useUtilityClasses$q = ownerState => {
    const {
      disabled,
      dense,
      divider,
      disableGutters,
      selected,
      classes
    } = ownerState;
    const slots = {
      root: ['root', dense && 'dense', disabled && 'disabled', !disableGutters && 'gutters', divider && 'divider', selected && 'selected']
    };
    const composedClasses = composeClasses(slots, getMenuItemUtilityClass, classes);
    return _extends({}, classes, composedClasses);
  };
  const MenuItemRoot = styled$1(ButtonBase$1, {
    shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
    name: 'MuiMenuItem',
    slot: 'Root',
    overridesResolver
  })(({
    theme,
    ownerState
  }) => _extends({}, theme.typography.body1, {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    textDecoration: 'none',
    minHeight: 48,
    paddingTop: 6,
    paddingBottom: 6,
    boxSizing: 'border-box',
    whiteSpace: 'nowrap'
  }, !ownerState.disableGutters && {
    paddingLeft: 16,
    paddingRight: 16
  }, ownerState.divider && {
    borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
    backgroundClip: 'padding-box'
  }, {
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: (theme.vars || theme).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    [`&.${menuItemClasses$1.selected}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      [`&.${menuItemClasses$1.focusVisible}`]: {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
      }
    },
    [`&.${menuItemClasses$1.selected}:hover`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    },
    [`&.${menuItemClasses$1.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    [`&.${menuItemClasses$1.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity
    },
    [`& + .${dividerClasses$1.root}`]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    [`& + .${dividerClasses$1.inset}`]: {
      marginLeft: 52
    },
    [`& .${listItemTextClasses$1.root}`]: {
      marginTop: 0,
      marginBottom: 0
    },
    [`& .${listItemTextClasses$1.inset}`]: {
      paddingLeft: 36
    },
    [`& .${listItemIconClasses$1.root}`]: {
      minWidth: 36
    }
  }, !ownerState.dense && {
    [theme.breakpoints.up('sm')]: {
      minHeight: 'auto'
    }
  }, ownerState.dense && _extends({
    minHeight: 32,
    // https://m2.material.io/components/menus#specs > Dense
    paddingTop: 4,
    paddingBottom: 4
  }, theme.typography.body2, {
    [`& .${listItemIconClasses$1.root} svg`]: {
      fontSize: '1.25rem'
    }
  })));
  const MenuItem = /*#__PURE__*/React__namespace.forwardRef(function MenuItem(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiMenuItem'
    });
    const {
        autoFocus = false,
        component = 'li',
        dense = false,
        divider = false,
        disableGutters = false,
        focusVisibleClassName,
        role = 'menuitem',
        tabIndex: tabIndexProp,
        className
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$v);
    const context = React__namespace.useContext(ListContext$1);
    const childContext = React__namespace.useMemo(() => ({
      dense: dense || context.dense || false,
      disableGutters
    }), [context.dense, dense, disableGutters]);
    const menuItemRef = React__namespace.useRef(null);
    useEnhancedEffect$1(() => {
      if (autoFocus) {
        if (menuItemRef.current) {
          menuItemRef.current.focus();
        }
      }
    }, [autoFocus]);
    const ownerState = _extends({}, props, {
      dense: childContext.dense,
      divider,
      disableGutters
    });
    const classes = useUtilityClasses$q(props);
    const handleRef = useForkRef(menuItemRef, ref);
    let tabIndex;
    if (!props.disabled) {
      tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
    }
    return /*#__PURE__*/jsxRuntimeExports.jsx(ListContext$1.Provider, {
      value: childContext,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(MenuItemRoot, _extends({
        ref: handleRef,
        role: role,
        tabIndex: tabIndex,
        component: component,
        focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
        className: clsx(classes.root, className)
      }, other, {
        ownerState: ownerState,
        classes: classes
      }))
    });
  });
  var MenuItem$1 = MenuItem;

  // Supports determination of isControlled().
  // Controlled input accepts its current value as a prop.
  //
  // @see https://facebook.github.io/react/docs/forms.html#controlled-components
  // @param value
  // @returns {boolean} true if string (including '') or number (including zero)
  function hasValue(value) {
    return value != null && !(Array.isArray(value) && value.length === 0);
  }

  // Determine if field is empty or filled.
  // Response determines if label is presented above field or as placeholder.
  //
  // @param obj
  // @param SSR
  // @returns {boolean} False when not present or empty string.
  //                    True when any number or string with length.
  function isFilled(obj, SSR = false) {
    return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
  }

  // Determine if an Input is adorned on start.
  // It's corresponding to the left with LTR.
  //
  // @param obj
  // @returns {boolean} False when no adornments.
  //                    True when adorned at the start.
  function isAdornedStart(obj) {
    return obj.startAdornment;
  }

  function getFormControlUtilityClasses(slot) {
    return generateUtilityClass('MuiFormControl', slot);
  }
  generateUtilityClasses('MuiFormControl', ['root', 'marginNone', 'marginNormal', 'marginDense', 'fullWidth', 'disabled']);

  const _excluded$u = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"];
  const useUtilityClasses$p = ownerState => {
    const {
      classes,
      margin,
      fullWidth
    } = ownerState;
    const slots = {
      root: ['root', margin !== 'none' && `margin${capitalize(margin)}`, fullWidth && 'fullWidth']
    };
    return composeClasses(slots, getFormControlUtilityClasses, classes);
  };
  const FormControlRoot = styled$1('div', {
    name: 'MuiFormControl',
    slot: 'Root',
    overridesResolver: ({
      ownerState
    }, styles) => {
      return _extends({}, styles.root, styles[`margin${capitalize(ownerState.margin)}`], ownerState.fullWidth && styles.fullWidth);
    }
  })(({
    ownerState
  }) => _extends({
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top'
  }, ownerState.margin === 'normal' && {
    marginTop: 16,
    marginBottom: 8
  }, ownerState.margin === 'dense' && {
    marginTop: 8,
    marginBottom: 4
  }, ownerState.fullWidth && {
    width: '100%'
  }));

  /**
   * Provides context such as filled/focused/error/required for form inputs.
   * Relying on the context provides high flexibility and ensures that the state always stays
   * consistent across the children of the `FormControl`.
   * This context is used by the following components:
   *
   *  - FormLabel
   *  - FormHelperText
   *  - Input
   *  - InputLabel
   *
   * You can find one composition example below and more going to [the demos](/material-ui/react-text-field/#components).
   *
   * ```jsx
   * <FormControl>
   *   <InputLabel htmlFor="my-input">Email address</InputLabel>
   *   <Input id="my-input" aria-describedby="my-helper-text" />
   *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
   * </FormControl>
   * ```
   *
   * ⚠️ Only one `InputBase` can be used within a FormControl because it creates visual inconsistencies.
   * For instance, only one input can be focused at the same time, the state shouldn't be shared.
   */
  const FormControl = /*#__PURE__*/React__namespace.forwardRef(function FormControl(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiFormControl'
    });
    const {
        children,
        className,
        color = 'primary',
        component = 'div',
        disabled = false,
        error = false,
        focused: visuallyFocused,
        fullWidth = false,
        hiddenLabel = false,
        margin = 'none',
        required = false,
        size = 'medium',
        variant = 'outlined'
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$u);
    const ownerState = _extends({}, props, {
      color,
      component,
      disabled,
      error,
      fullWidth,
      hiddenLabel,
      margin,
      required,
      size,
      variant
    });
    const classes = useUtilityClasses$p(ownerState);
    const [adornedStart, setAdornedStart] = React__namespace.useState(() => {
      // We need to iterate through the children and find the Input in order
      // to fully support server-side rendering.
      let initialAdornedStart = false;
      if (children) {
        React__namespace.Children.forEach(children, child => {
          if (!isMuiElement(child, ['Input', 'Select'])) {
            return;
          }
          const input = isMuiElement(child, ['Select']) ? child.props.input : child;
          if (input && isAdornedStart(input.props)) {
            initialAdornedStart = true;
          }
        });
      }
      return initialAdornedStart;
    });
    const [filled, setFilled] = React__namespace.useState(() => {
      // We need to iterate through the children and find the Input in order
      // to fully support server-side rendering.
      let initialFilled = false;
      if (children) {
        React__namespace.Children.forEach(children, child => {
          if (!isMuiElement(child, ['Input', 'Select'])) {
            return;
          }
          if (isFilled(child.props, true) || isFilled(child.props.inputProps, true)) {
            initialFilled = true;
          }
        });
      }
      return initialFilled;
    });
    const [focusedState, setFocused] = React__namespace.useState(false);
    if (disabled && focusedState) {
      setFocused(false);
    }
    const focused = visuallyFocused !== undefined && !disabled ? visuallyFocused : focusedState;
    let registerEffect;
    const childContext = React__namespace.useMemo(() => {
      return {
        adornedStart,
        setAdornedStart,
        color,
        disabled,
        error,
        filled,
        focused,
        fullWidth,
        hiddenLabel,
        size,
        onBlur: () => {
          setFocused(false);
        },
        onEmpty: () => {
          setFilled(false);
        },
        onFilled: () => {
          setFilled(true);
        },
        onFocus: () => {
          setFocused(true);
        },
        registerEffect,
        required,
        variant
      };
    }, [adornedStart, color, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, required, size, variant]);
    return /*#__PURE__*/jsxRuntimeExports.jsx(FormControlContext$1.Provider, {
      value: childContext,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(FormControlRoot, _extends({
        as: component,
        ownerState: ownerState,
        className: clsx(classes.root, className),
        ref: ref
      }, other, {
        children: children
      }))
    });
  });
  var FormControl$1 = FormControl;

  var reactIs_production_min = {};

  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var hasRequiredReactIs_production_min;

  function requireReactIs_production_min () {
  	if (hasRequiredReactIs_production_min) return reactIs_production_min;
  	hasRequiredReactIs_production_min = 1;
  var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
  	function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}reactIs_production_min.ContextConsumer=h;reactIs_production_min.ContextProvider=g;reactIs_production_min.Element=b;reactIs_production_min.ForwardRef=l;reactIs_production_min.Fragment=d;reactIs_production_min.Lazy=q;reactIs_production_min.Memo=p;reactIs_production_min.Portal=c;reactIs_production_min.Profiler=f;reactIs_production_min.StrictMode=e;reactIs_production_min.Suspense=m;
  	reactIs_production_min.SuspenseList=n;reactIs_production_min.isAsyncMode=function(){return !1};reactIs_production_min.isConcurrentMode=function(){return !1};reactIs_production_min.isContextConsumer=function(a){return v(a)===h};reactIs_production_min.isContextProvider=function(a){return v(a)===g};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};reactIs_production_min.isForwardRef=function(a){return v(a)===l};reactIs_production_min.isFragment=function(a){return v(a)===d};reactIs_production_min.isLazy=function(a){return v(a)===q};reactIs_production_min.isMemo=function(a){return v(a)===p};
  	reactIs_production_min.isPortal=function(a){return v(a)===c};reactIs_production_min.isProfiler=function(a){return v(a)===f};reactIs_production_min.isStrictMode=function(a){return v(a)===e};reactIs_production_min.isSuspense=function(a){return v(a)===m};reactIs_production_min.isSuspenseList=function(a){return v(a)===n};
  	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};reactIs_production_min.typeOf=v;
  	return reactIs_production_min;
  }

  {
    requireReactIs_production_min();
  }

  function getListUtilityClass(slot) {
    return generateUtilityClass('MuiList', slot);
  }
  generateUtilityClasses('MuiList', ['root', 'padding', 'dense', 'subheader']);

  const _excluded$t = ["children", "className", "component", "dense", "disablePadding", "subheader"];
  const useUtilityClasses$o = ownerState => {
    const {
      classes,
      disablePadding,
      dense,
      subheader
    } = ownerState;
    const slots = {
      root: ['root', !disablePadding && 'padding', dense && 'dense', subheader && 'subheader']
    };
    return composeClasses(slots, getListUtilityClass, classes);
  };
  const ListRoot = styled$1('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, !ownerState.disablePadding && styles.padding, ownerState.dense && styles.dense, ownerState.subheader && styles.subheader];
    }
  })(({
    ownerState
  }) => _extends({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  }, !ownerState.disablePadding && {
    paddingTop: 8,
    paddingBottom: 8
  }, ownerState.subheader && {
    paddingTop: 0
  }));
  const List = /*#__PURE__*/React__namespace.forwardRef(function List(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiList'
    });
    const {
        children,
        className,
        component = 'ul',
        dense = false,
        disablePadding = false,
        subheader
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$t);
    const context = React__namespace.useMemo(() => ({
      dense
    }), [dense]);
    const ownerState = _extends({}, props, {
      component,
      dense,
      disablePadding
    });
    const classes = useUtilityClasses$o(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsx(ListContext$1.Provider, {
      value: context,
      children: /*#__PURE__*/jsxRuntimeExports.jsxs(ListRoot, _extends({
        as: component,
        className: clsx(classes.root, className),
        ref: ref,
        ownerState: ownerState
      }, other, {
        children: [subheader, children]
      }))
    });
  });
  var List$1 = List;

  const _excluded$s = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
  function nextItem(list, item, disableListWrap) {
    if (list === item) {
      return list.firstChild;
    }
    if (item && item.nextElementSibling) {
      return item.nextElementSibling;
    }
    return disableListWrap ? null : list.firstChild;
  }
  function previousItem(list, item, disableListWrap) {
    if (list === item) {
      return disableListWrap ? list.firstChild : list.lastChild;
    }
    if (item && item.previousElementSibling) {
      return item.previousElementSibling;
    }
    return disableListWrap ? null : list.lastChild;
  }
  function textCriteriaMatches(nextFocus, textCriteria) {
    if (textCriteria === undefined) {
      return true;
    }
    let text = nextFocus.innerText;
    if (text === undefined) {
      // jsdom doesn't support innerText
      text = nextFocus.textContent;
    }
    text = text.trim().toLowerCase();
    if (text.length === 0) {
      return false;
    }
    if (textCriteria.repeating) {
      return text[0] === textCriteria.keys[0];
    }
    return text.indexOf(textCriteria.keys.join('')) === 0;
  }
  function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
    let wrappedOnce = false;
    let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
    while (nextFocus) {
      // Prevent infinite loop.
      if (nextFocus === list.firstChild) {
        if (wrappedOnce) {
          return false;
        }
        wrappedOnce = true;
      }

      // Same logic as useAutocomplete.js
      const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';
      if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
        // Move to the next element.
        nextFocus = traversalFunction(list, nextFocus, disableListWrap);
      } else {
        nextFocus.focus();
        return true;
      }
    }
    return false;
  }

  /**
   * A permanently displayed menu following https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/.
   * It's exposed to help customization of the [`Menu`](/material-ui/api/menu/) component if you
   * use it separately you need to move focus into the component manually. Once
   * the focus is placed inside the component it is fully keyboard accessible.
   */
  const MenuList = /*#__PURE__*/React__namespace.forwardRef(function MenuList(props, ref) {
    const {
        // private
        // eslint-disable-next-line react/prop-types
        actions,
        autoFocus = false,
        autoFocusItem = false,
        children,
        className,
        disabledItemsFocusable = false,
        disableListWrap = false,
        onKeyDown,
        variant = 'selectedMenu'
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$s);
    const listRef = React__namespace.useRef(null);
    const textCriteriaRef = React__namespace.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    useEnhancedEffect$1(() => {
      if (autoFocus) {
        listRef.current.focus();
      }
    }, [autoFocus]);
    React__namespace.useImperativeHandle(actions, () => ({
      adjustStyleForScrollbar: (containerElement, theme) => {
        // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.
        const noExplicitWidth = !listRef.current.style.width;
        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          const scrollbarSize = `${getScrollbarSize(ownerDocument(containerElement))}px`;
          listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
          listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
        }
        return listRef.current;
      }
    }), []);
    const handleKeyDown = event => {
      const list = listRef.current;
      const key = event.key;
      /**
       * @type {Element} - will always be defined since we are in a keydown handler
       * attached to an element. A keydown event is either dispatched to the activeElement
       * or document.body or document.documentElement. Only the first case will
       * trigger this specific handler.
       */
      const currentFocus = ownerDocument(list).activeElement;
      if (key === 'ArrowDown') {
        // Prevent scroll of the page
        event.preventDefault();
        moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
      } else if (key === 'ArrowUp') {
        event.preventDefault();
        moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
      } else if (key === 'Home') {
        event.preventDefault();
        moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
      } else if (key === 'End') {
        event.preventDefault();
        moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
      } else if (key.length === 1) {
        const criteria = textCriteriaRef.current;
        const lowerKey = key.toLowerCase();
        const currTime = performance.now();
        if (criteria.keys.length > 0) {
          // Reset
          if (currTime - criteria.lastTime > 500) {
            criteria.keys = [];
            criteria.repeating = true;
            criteria.previousKeyMatched = true;
          } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
            criteria.repeating = false;
          }
        }
        criteria.lastTime = currTime;
        criteria.keys.push(lowerKey);
        const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
        if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
          event.preventDefault();
        } else {
          criteria.previousKeyMatched = false;
        }
      }
      if (onKeyDown) {
        onKeyDown(event);
      }
    };
    const handleRef = useForkRef(listRef, ref);

    /**
     * the index of the item should receive focus
     * in a `variant="selectedMenu"` it's the first `selected` item
     * otherwise it's the very first item.
     */
    let activeItemIndex = -1;
    // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback
    React__namespace.Children.forEach(children, (child, index) => {
      if (! /*#__PURE__*/React__namespace.isValidElement(child)) {
        if (activeItemIndex === index) {
          activeItemIndex += 1;
          if (activeItemIndex >= children.length) {
            // there are no focusable items within the list.
            activeItemIndex = -1;
          }
        }
        return;
      }
      if (!child.props.disabled) {
        if (variant === 'selectedMenu' && child.props.selected) {
          activeItemIndex = index;
        } else if (activeItemIndex === -1) {
          activeItemIndex = index;
        }
      }
      if (activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
        activeItemIndex += 1;
        if (activeItemIndex >= children.length) {
          // there are no focusable items within the list.
          activeItemIndex = -1;
        }
      }
    });
    const items = React__namespace.Children.map(children, (child, index) => {
      if (index === activeItemIndex) {
        const newChildProps = {};
        if (autoFocusItem) {
          newChildProps.autoFocus = true;
        }
        if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
          newChildProps.tabIndex = 0;
        }
        return /*#__PURE__*/React__namespace.cloneElement(child, newChildProps);
      }
      return child;
    });
    return /*#__PURE__*/jsxRuntimeExports.jsx(List$1, _extends({
      role: "menu",
      ref: handleRef,
      className: className,
      onKeyDown: handleKeyDown,
      tabIndex: autoFocus ? 0 : -1
    }, other, {
      children: items
    }));
  });
  var MenuList$1 = MenuList;

  function useTheme() {
    const theme = useTheme$1(defaultTheme$1);
    return theme[THEME_ID] || theme;
  }

  const reflow = node => node.scrollTop;
  function getTransitionProps(props, options) {
    var _style$transitionDura, _style$transitionTimi;
    const {
      timeout,
      easing,
      style = {}
    } = props;
    return {
      duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
      easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
      delay: style.transitionDelay
    };
  }

  const _excluded$r = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
  function getScale(value) {
    return `scale(${value}, ${value ** 2})`;
  }
  const styles$1 = {
    entering: {
      opacity: 1,
      transform: getScale(1)
    },
    entered: {
      opacity: 1,
      transform: 'none'
    }
  };

  /*
   TODO v6: remove
   Conditionally apply a workaround for the CSS transition bug in Safari 15.4 / WebKit browsers.
   */
  const isWebKit154 = typeof navigator !== 'undefined' && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);

  /**
   * The Grow transition is used by the [Tooltip](/material-ui/react-tooltip/) and
   * [Popover](/material-ui/react-popover/) components.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */
  const Grow = /*#__PURE__*/React__namespace.forwardRef(function Grow(props, ref) {
    const {
        addEndListener,
        appear = true,
        children,
        easing,
        in: inProp,
        onEnter,
        onEntered,
        onEntering,
        onExit,
        onExited,
        onExiting,
        style,
        timeout = 'auto',
        // eslint-disable-next-line react/prop-types
        TransitionComponent = Transition$1
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$r);
    const timer = React__namespace.useRef();
    const autoTimeout = React__namespace.useRef();
    const theme = useTheme();
    const nodeRef = React__namespace.useRef(null);
    const handleRef = useForkRef(nodeRef, children.ref, ref);
    const normalizedTransitionCallback = callback => maybeIsAppearing => {
      if (callback) {
        const node = nodeRef.current;

        // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
        if (maybeIsAppearing === undefined) {
          callback(node);
        } else {
          callback(node, maybeIsAppearing);
        }
      }
    };
    const handleEntering = normalizedTransitionCallback(onEntering);
    const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
      reflow(node); // So the animation always start from the start.

      const {
        duration: transitionDuration,
        delay,
        easing: transitionTimingFunction
      } = getTransitionProps({
        style,
        timeout,
        easing
      }, {
        mode: 'enter'
      });
      let duration;
      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }
      node.style.transition = [theme.transitions.create('opacity', {
        duration,
        delay
      }), theme.transitions.create('transform', {
        duration: isWebKit154 ? duration : duration * 0.666,
        delay,
        easing: transitionTimingFunction
      })].join(',');
      if (onEnter) {
        onEnter(node, isAppearing);
      }
    });
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExit = normalizedTransitionCallback(node => {
      const {
        duration: transitionDuration,
        delay,
        easing: transitionTimingFunction
      } = getTransitionProps({
        style,
        timeout,
        easing
      }, {
        mode: 'exit'
      });
      let duration;
      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }
      node.style.transition = [theme.transitions.create('opacity', {
        duration,
        delay
      }), theme.transitions.create('transform', {
        duration: isWebKit154 ? duration : duration * 0.666,
        delay: isWebKit154 ? delay : delay || duration * 0.333,
        easing: transitionTimingFunction
      })].join(',');
      node.style.opacity = 0;
      node.style.transform = getScale(0.75);
      if (onExit) {
        onExit(node);
      }
    });
    const handleExited = normalizedTransitionCallback(onExited);
    const handleAddEndListener = next => {
      if (timeout === 'auto') {
        timer.current = setTimeout(next, autoTimeout.current || 0);
      }
      if (addEndListener) {
        // Old call signature before `react-transition-group` implemented `nodeRef`
        addEndListener(nodeRef.current, next);
      }
    };
    React__namespace.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
    return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
      appear: appear,
      in: inProp,
      nodeRef: nodeRef,
      onEnter: handleEnter,
      onEntered: handleEntered,
      onEntering: handleEntering,
      onExit: handleExit,
      onExited: handleExited,
      onExiting: handleExiting,
      addEndListener: handleAddEndListener,
      timeout: timeout === 'auto' ? null : timeout
    }, other, {
      children: (state, childProps) => {
        return /*#__PURE__*/React__namespace.cloneElement(children, _extends({
          style: _extends({
            opacity: 0,
            transform: getScale(0.75),
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined
          }, styles$1[state], style, children.props.style),
          ref: handleRef
        }, childProps));
      }
    }));
  });
  Grow.muiSupportAuto = true;
  var Grow$1 = Grow;

  const _excluded$q = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
  const styles = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };

  /**
   * The Fade transition is used by the [Modal](/material-ui/react-modal/) component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */
  const Fade = /*#__PURE__*/React__namespace.forwardRef(function Fade(props, ref) {
    const theme = useTheme();
    const defaultTimeout = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    };
    const {
        addEndListener,
        appear = true,
        children,
        easing,
        in: inProp,
        onEnter,
        onEntered,
        onEntering,
        onExit,
        onExited,
        onExiting,
        style,
        timeout = defaultTimeout,
        // eslint-disable-next-line react/prop-types
        TransitionComponent = Transition$1
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$q);
    const nodeRef = React__namespace.useRef(null);
    const handleRef = useForkRef(nodeRef, children.ref, ref);
    const normalizedTransitionCallback = callback => maybeIsAppearing => {
      if (callback) {
        const node = nodeRef.current;

        // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
        if (maybeIsAppearing === undefined) {
          callback(node);
        } else {
          callback(node, maybeIsAppearing);
        }
      }
    };
    const handleEntering = normalizedTransitionCallback(onEntering);
    const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
      reflow(node); // So the animation always start from the start.

      const transitionProps = getTransitionProps({
        style,
        timeout,
        easing
      }, {
        mode: 'enter'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);
      if (onEnter) {
        onEnter(node, isAppearing);
      }
    });
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExit = normalizedTransitionCallback(node => {
      const transitionProps = getTransitionProps({
        style,
        timeout,
        easing
      }, {
        mode: 'exit'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);
      if (onExit) {
        onExit(node);
      }
    });
    const handleExited = normalizedTransitionCallback(onExited);
    const handleAddEndListener = next => {
      if (addEndListener) {
        // Old call signature before `react-transition-group` implemented `nodeRef`
        addEndListener(nodeRef.current, next);
      }
    };
    return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
      appear: appear,
      in: inProp,
      nodeRef: nodeRef ,
      onEnter: handleEnter,
      onEntered: handleEntered,
      onEntering: handleEntering,
      onExit: handleExit,
      onExited: handleExited,
      onExiting: handleExiting,
      addEndListener: handleAddEndListener,
      timeout: timeout
    }, other, {
      children: (state, childProps) => {
        return /*#__PURE__*/React__namespace.cloneElement(children, _extends({
          style: _extends({
            opacity: 0,
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined
          }, styles[state], style, children.props.style),
          ref: handleRef
        }, childProps));
      }
    }));
  });
  var Fade$1 = Fade;

  function getBackdropUtilityClass(slot) {
    return generateUtilityClass('MuiBackdrop', slot);
  }
  generateUtilityClasses('MuiBackdrop', ['root', 'invisible']);

  const _excluded$p = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"];
  const useUtilityClasses$n = ownerState => {
    const {
      classes,
      invisible
    } = ownerState;
    const slots = {
      root: ['root', invisible && 'invisible']
    };
    return composeClasses(slots, getBackdropUtilityClass, classes);
  };
  const BackdropRoot = styled$1('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.invisible && styles.invisible];
    }
  })(({
    ownerState
  }) => _extends({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  }, ownerState.invisible && {
    backgroundColor: 'transparent'
  }));
  const Backdrop = /*#__PURE__*/React__namespace.forwardRef(function Backdrop(inProps, ref) {
    var _slotProps$root, _ref, _slots$root;
    const props = useThemeProps({
      props: inProps,
      name: 'MuiBackdrop'
    });
    const {
        children,
        className,
        component = 'div',
        components = {},
        componentsProps = {},
        invisible = false,
        open,
        slotProps = {},
        slots = {},
        TransitionComponent = Fade$1,
        transitionDuration
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$p);
    const ownerState = _extends({}, props, {
      component,
      invisible
    });
    const classes = useUtilityClasses$n(ownerState);
    const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
    return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
      in: open,
      timeout: transitionDuration
    }, other, {
      children: /*#__PURE__*/jsxRuntimeExports.jsx(BackdropRoot, _extends({
        "aria-hidden": true
      }, rootSlotProps, {
        as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
        className: clsx(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
        ownerState: _extends({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
        classes: classes,
        ref: ref,
        children: children
      }))
    }));
  });
  var Backdrop$1 = Backdrop;

  const _excluded$o = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "open", "slotProps", "slots", "theme"];
  const ModalRoot = styled$1('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    position: 'fixed',
    zIndex: (theme.vars || theme).zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0
  }, !ownerState.open && ownerState.exited && {
    visibility: 'hidden'
  }));
  const ModalBackdrop = styled$1(Backdrop$1, {
    name: 'MuiModal',
    slot: 'Backdrop',
    overridesResolver: (props, styles) => {
      return styles.backdrop;
    }
  })({
    zIndex: -1
  });

  /**
   * Modal is a lower-level construct that is leveraged by the following components:
   *
   * - [Dialog](/material-ui/api/dialog/)
   * - [Drawer](/material-ui/api/drawer/)
   * - [Menu](/material-ui/api/menu/)
   * - [Popover](/material-ui/api/popover/)
   *
   * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
   * rather than directly using Modal.
   *
   * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
   */
  const Modal = /*#__PURE__*/React__namespace.forwardRef(function Modal(inProps, ref) {
    var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
    const props = useThemeProps({
      name: 'MuiModal',
      props: inProps
    });
    const {
        BackdropComponent = ModalBackdrop,
        BackdropProps,
        classes,
        className,
        closeAfterTransition = false,
        children,
        container,
        component,
        components = {},
        componentsProps = {},
        disableAutoFocus = false,
        disableEnforceFocus = false,
        disableEscapeKeyDown = false,
        disablePortal = false,
        disableRestoreFocus = false,
        disableScrollLock = false,
        hideBackdrop = false,
        keepMounted = false,
        onBackdropClick,
        onClose,
        open,
        slotProps,
        slots,
        // eslint-disable-next-line react/prop-types
        theme
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$o);
    const [exited, setExited] = React__namespace.useState(true);
    const commonProps = {
      container,
      closeAfterTransition,
      disableAutoFocus,
      disableEnforceFocus,
      disableEscapeKeyDown,
      disablePortal,
      disableRestoreFocus,
      disableScrollLock,
      hideBackdrop,
      keepMounted,
      onBackdropClick,
      onClose,
      open
    };
    const ownerState = _extends({}, props, commonProps, {
      exited
    });
    const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
    const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
    const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
    const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
    return /*#__PURE__*/jsxRuntimeExports.jsx(ModalUnstyled, _extends({
      slots: {
        root: RootSlot,
        backdrop: BackdropSlot
      },
      slotProps: {
        root: () => _extends({}, resolveComponentProps(rootSlotProps, ownerState), !isHostComponent(RootSlot) && {
          as: component,
          theme
        }, {
          className: clsx(className, rootSlotProps == null ? void 0 : rootSlotProps.className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
        }),
        backdrop: () => _extends({}, BackdropProps, resolveComponentProps(backdropSlotProps, ownerState), {
          className: clsx(backdropSlotProps == null ? void 0 : backdropSlotProps.className, BackdropProps == null ? void 0 : BackdropProps.className, classes == null ? void 0 : classes.backdrop)
        })
      },
      onTransitionEnter: () => setExited(false),
      onTransitionExited: () => setExited(true),
      ref: ref
    }, other, commonProps, {
      children: children
    }));
  });
  var Modal$1 = Modal;

  // Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
  const getOverlayAlpha = elevation => {
    let alphaValue;
    if (elevation < 1) {
      alphaValue = 5.11916 * elevation ** 2;
    } else {
      alphaValue = 4.5 * Math.log(elevation + 1) + 2;
    }
    return (alphaValue / 100).toFixed(2);
  };
  var getOverlayAlpha$1 = getOverlayAlpha;

  function getPaperUtilityClass(slot) {
    return generateUtilityClass('MuiPaper', slot);
  }
  generateUtilityClasses('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);

  const _excluded$n = ["className", "component", "elevation", "square", "variant"];
  const useUtilityClasses$m = ownerState => {
    const {
      square,
      elevation,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
    };
    return composeClasses(slots, getPaperUtilityClass, classes);
  };
  const PaperRoot = styled$1('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
    }
  })(({
    theme,
    ownerState
  }) => {
    var _theme$vars$overlays;
    return _extends({
      backgroundColor: (theme.vars || theme).palette.background.paper,
      color: (theme.vars || theme).palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    }, !ownerState.square && {
      borderRadius: theme.shape.borderRadius
    }, ownerState.variant === 'outlined' && {
      border: `1px solid ${(theme.vars || theme).palette.divider}`
    }, ownerState.variant === 'elevation' && _extends({
      boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
    }, !theme.vars && theme.palette.mode === 'dark' && {
      backgroundImage: `linear-gradient(${alpha('#fff', getOverlayAlpha$1(ownerState.elevation))}, ${alpha('#fff', getOverlayAlpha$1(ownerState.elevation))})`
    }, theme.vars && {
      backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
    }));
  });
  const Paper = /*#__PURE__*/React__namespace.forwardRef(function Paper(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiPaper'
    });
    const {
        className,
        component = 'div',
        elevation = 1,
        square = false,
        variant = 'elevation'
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$n);
    const ownerState = _extends({}, props, {
      component,
      elevation,
      square,
      variant
    });
    const classes = useUtilityClasses$m(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsx(PaperRoot, _extends({
      as: component,
      ownerState: ownerState,
      className: clsx(classes.root, className),
      ref: ref
    }, other));
  });
  var Paper$1 = Paper;

  function getPopoverUtilityClass(slot) {
    return generateUtilityClass('MuiPopover', slot);
  }
  generateUtilityClasses('MuiPopover', ['root', 'paper']);

  const _excluded$m = ["onEntering"],
    _excluded2$1 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"],
    _excluded3 = ["slotProps"];
  function getOffsetTop(rect, vertical) {
    let offset = 0;
    if (typeof vertical === 'number') {
      offset = vertical;
    } else if (vertical === 'center') {
      offset = rect.height / 2;
    } else if (vertical === 'bottom') {
      offset = rect.height;
    }
    return offset;
  }
  function getOffsetLeft(rect, horizontal) {
    let offset = 0;
    if (typeof horizontal === 'number') {
      offset = horizontal;
    } else if (horizontal === 'center') {
      offset = rect.width / 2;
    } else if (horizontal === 'right') {
      offset = rect.width;
    }
    return offset;
  }
  function getTransformOriginValue(transformOrigin) {
    return [transformOrigin.horizontal, transformOrigin.vertical].map(n => typeof n === 'number' ? `${n}px` : n).join(' ');
  }
  function resolveAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
  }
  const useUtilityClasses$l = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root'],
      paper: ['paper']
    };
    return composeClasses(slots, getPopoverUtilityClass, classes);
  };
  const PopoverRoot = styled$1(Modal$1, {
    name: 'MuiPopover',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({});
  const PopoverPaper = styled$1(Paper$1, {
    name: 'MuiPopover',
    slot: 'Paper',
    overridesResolver: (props, styles) => styles.paper
  })({
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  });
  const Popover = /*#__PURE__*/React__namespace.forwardRef(function Popover(inProps, ref) {
    var _slotProps$paper, _slots$root, _slots$paper;
    const props = useThemeProps({
      props: inProps,
      name: 'MuiPopover'
    });
    const {
        action,
        anchorEl,
        anchorOrigin = {
          vertical: 'top',
          horizontal: 'left'
        },
        anchorPosition,
        anchorReference = 'anchorEl',
        children,
        className,
        container: containerProp,
        elevation = 8,
        marginThreshold = 16,
        open,
        PaperProps: PaperPropsProp = {},
        slots,
        slotProps,
        transformOrigin = {
          vertical: 'top',
          horizontal: 'left'
        },
        TransitionComponent = Grow$1,
        transitionDuration: transitionDurationProp = 'auto',
        TransitionProps: {
          onEntering
        } = {}
      } = props,
      TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$m),
      other = _objectWithoutPropertiesLoose(props, _excluded2$1);
    const externalPaperSlotProps = (_slotProps$paper = slotProps == null ? void 0 : slotProps.paper) != null ? _slotProps$paper : PaperPropsProp;
    const paperRef = React__namespace.useRef();
    const handlePaperRef = useForkRef(paperRef, externalPaperSlotProps.ref);
    const ownerState = _extends({}, props, {
      anchorOrigin,
      anchorReference,
      elevation,
      marginThreshold,
      externalPaperSlotProps,
      transformOrigin,
      TransitionComponent,
      transitionDuration: transitionDurationProp,
      TransitionProps
    });
    const classes = useUtilityClasses$l(ownerState);

    // Returns the top/left offset of the position
    // to attach to on the anchor element (or body if none is provided)
    const getAnchorOffset = React__namespace.useCallback(() => {
      if (anchorReference === 'anchorPosition') {
        return anchorPosition;
      }
      const resolvedAnchorEl = resolveAnchorEl(anchorEl);

      // If an anchor element wasn't provided, just use the parent body element of this Popover
      const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
      const anchorRect = anchorElement.getBoundingClientRect();
      return {
        top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
        left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);

    // Returns the base transform origin using the element
    const getTransformOrigin = React__namespace.useCallback(elemRect => {
      return {
        vertical: getOffsetTop(elemRect, transformOrigin.vertical),
        horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }, [transformOrigin.horizontal, transformOrigin.vertical]);
    const getPositioningStyle = React__namespace.useCallback(element => {
      const elemRect = {
        width: element.offsetWidth,
        height: element.offsetHeight
      };

      // Get the transform origin point on the element itself
      const elemTransformOrigin = getTransformOrigin(elemRect);
      if (anchorReference === 'none') {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(elemTransformOrigin)
        };
      }

      // Get the offset of the anchoring element
      const anchorOffset = getAnchorOffset();

      // Calculate element positioning
      let top = anchorOffset.top - elemTransformOrigin.vertical;
      let left = anchorOffset.left - elemTransformOrigin.horizontal;
      const bottom = top + elemRect.height;
      const right = left + elemRect.width;

      // Use the parent window of the anchorEl if provided
      const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));

      // Window thresholds taking required margin into account
      const heightThreshold = containerWindow.innerHeight - marginThreshold;
      const widthThreshold = containerWindow.innerWidth - marginThreshold;

      // Check if the vertical axis needs shifting
      if (top < marginThreshold) {
        const diff = top - marginThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        const diff = bottom - heightThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      }

      // Check if the horizontal axis needs shifting
      if (left < marginThreshold) {
        const diff = left - marginThreshold;
        left -= diff;
        elemTransformOrigin.horizontal += diff;
      } else if (right > widthThreshold) {
        const diff = right - widthThreshold;
        left -= diff;
        elemTransformOrigin.horizontal += diff;
      }
      return {
        top: `${Math.round(top)}px`,
        left: `${Math.round(left)}px`,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
    const [isPositioned, setIsPositioned] = React__namespace.useState(open);
    const setPositioningStyles = React__namespace.useCallback(() => {
      const element = paperRef.current;
      if (!element) {
        return;
      }
      const positioning = getPositioningStyle(element);
      if (positioning.top !== null) {
        element.style.top = positioning.top;
      }
      if (positioning.left !== null) {
        element.style.left = positioning.left;
      }
      element.style.transformOrigin = positioning.transformOrigin;
      setIsPositioned(true);
    }, [getPositioningStyle]);
    const handleEntering = (element, isAppearing) => {
      if (onEntering) {
        onEntering(element, isAppearing);
      }
      setPositioningStyles();
    };
    const handleExited = () => {
      setIsPositioned(false);
    };
    React__namespace.useEffect(() => {
      if (open) {
        setPositioningStyles();
      }
    });
    React__namespace.useImperativeHandle(action, () => open ? {
      updatePosition: () => {
        setPositioningStyles();
      }
    } : null, [open, setPositioningStyles]);
    React__namespace.useEffect(() => {
      if (!open) {
        return undefined;
      }
      const handleResize = debounce(() => {
        setPositioningStyles();
      });
      const containerWindow = ownerWindow(anchorEl);
      containerWindow.addEventListener('resize', handleResize);
      return () => {
        handleResize.clear();
        containerWindow.removeEventListener('resize', handleResize);
      };
    }, [anchorEl, open, setPositioningStyles]);
    let transitionDuration = transitionDurationProp;
    if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
      transitionDuration = undefined;
    }

    // If the container prop is provided, use that
    // If the anchorEl prop is provided, use its parent body element as the container
    // If neither are provided let the Modal take care of choosing the container
    const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : undefined);
    const RootSlot = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : PopoverRoot;
    const PaperSlot = (_slots$paper = slots == null ? void 0 : slots.paper) != null ? _slots$paper : PopoverPaper;
    const paperProps = useSlotProps({
      elementType: PaperSlot,
      externalSlotProps: _extends({}, externalPaperSlotProps, {
        style: isPositioned ? externalPaperSlotProps.style : _extends({}, externalPaperSlotProps.style, {
          opacity: 0
        })
      }),
      additionalProps: {
        elevation,
        ref: handlePaperRef
      },
      ownerState,
      className: clsx(classes.paper, externalPaperSlotProps == null ? void 0 : externalPaperSlotProps.className)
    });
    const _useSlotProps = useSlotProps({
        elementType: RootSlot,
        externalSlotProps: (slotProps == null ? void 0 : slotProps.root) || {},
        externalForwardedProps: other,
        additionalProps: {
          ref,
          slotProps: {
            backdrop: {
              invisible: true
            }
          },
          container,
          open
        },
        ownerState,
        className: clsx(classes.root, className)
      }),
      {
        slotProps: rootSlotPropsProp
      } = _useSlotProps,
      rootProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded3);
    return /*#__PURE__*/jsxRuntimeExports.jsx(RootSlot, _extends({}, rootProps, !isHostComponent(RootSlot) && {
      slotProps: rootSlotPropsProp
    }, {
      children: /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends({
        appear: true,
        in: open,
        onEntering: handleEntering,
        onExited: handleExited,
        timeout: transitionDuration
      }, TransitionProps, {
        children: /*#__PURE__*/jsxRuntimeExports.jsx(PaperSlot, _extends({}, paperProps, {
          children: children
        }))
      }))
    }));
  });
  var Popover$1 = Popover;

  function getMenuUtilityClass(slot) {
    return generateUtilityClass('MuiMenu', slot);
  }
  generateUtilityClasses('MuiMenu', ['root', 'paper', 'list']);

  const _excluded$l = ["onEntering"],
    _excluded2 = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"];
  const RTL_ORIGIN = {
    vertical: 'top',
    horizontal: 'right'
  };
  const LTR_ORIGIN = {
    vertical: 'top',
    horizontal: 'left'
  };
  const useUtilityClasses$k = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root'],
      paper: ['paper'],
      list: ['list']
    };
    return composeClasses(slots, getMenuUtilityClass, classes);
  };
  const MenuRoot = styled$1(Popover$1, {
    shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
    name: 'MuiMenu',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({});
  const MenuPaper = styled$1(PopoverPaper, {
    name: 'MuiMenu',
    slot: 'Paper',
    overridesResolver: (props, styles) => styles.paper
  })({
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tappable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling for iOS < 13.0
    WebkitOverflowScrolling: 'touch'
  });
  const MenuMenuList = styled$1(MenuList$1, {
    name: 'MuiMenu',
    slot: 'List',
    overridesResolver: (props, styles) => styles.list
  })({
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  });
  const Menu = /*#__PURE__*/React__namespace.forwardRef(function Menu(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiMenu'
    });
    const {
        autoFocus = true,
        children,
        disableAutoFocusItem = false,
        MenuListProps = {},
        onClose,
        open,
        PaperProps = {},
        PopoverClasses,
        transitionDuration = 'auto',
        TransitionProps: {
          onEntering
        } = {},
        variant = 'selectedMenu'
      } = props,
      TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$l),
      other = _objectWithoutPropertiesLoose(props, _excluded2);
    const theme = useTheme();
    const isRtl = theme.direction === 'rtl';
    const ownerState = _extends({}, props, {
      autoFocus,
      disableAutoFocusItem,
      MenuListProps,
      onEntering,
      PaperProps,
      transitionDuration,
      TransitionProps,
      variant
    });
    const classes = useUtilityClasses$k(ownerState);
    const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
    const menuListActionsRef = React__namespace.useRef(null);
    const handleEntering = (element, isAppearing) => {
      if (menuListActionsRef.current) {
        menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
      }
      if (onEntering) {
        onEntering(element, isAppearing);
      }
    };
    const handleListKeyDown = event => {
      if (event.key === 'Tab') {
        event.preventDefault();
        if (onClose) {
          onClose(event, 'tabKeyDown');
        }
      }
    };

    /**
     * the index of the item should receive focus
     * in a `variant="selectedMenu"` it's the first `selected` item
     * otherwise it's the very first item.
     */
    let activeItemIndex = -1;
    // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback
    React__namespace.Children.map(children, (child, index) => {
      if (! /*#__PURE__*/React__namespace.isValidElement(child)) {
        return;
      }
      if (!child.props.disabled) {
        if (variant === 'selectedMenu' && child.props.selected) {
          activeItemIndex = index;
        } else if (activeItemIndex === -1) {
          activeItemIndex = index;
        }
      }
    });
    return /*#__PURE__*/jsxRuntimeExports.jsx(MenuRoot, _extends({
      onClose: onClose,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: isRtl ? 'right' : 'left'
      },
      transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
      slots: {
        paper: MenuPaper
      },
      slotProps: {
        paper: _extends({}, PaperProps, {
          classes: _extends({}, PaperProps.classes, {
            root: classes.paper
          })
        })
      },
      className: classes.root,
      open: open,
      ref: ref,
      transitionDuration: transitionDuration,
      TransitionProps: _extends({
        onEntering: handleEntering
      }, TransitionProps),
      ownerState: ownerState
    }, other, {
      classes: PopoverClasses,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(MenuMenuList, _extends({
        onKeyDown: handleListKeyDown,
        actions: menuListActionsRef,
        autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
        autoFocusItem: autoFocusItem,
        variant: variant
      }, MenuListProps, {
        className: clsx(classes.list, MenuListProps.className),
        children: children
      }))
    }));
  });
  var Menu$1 = Menu;

  function getNativeSelectUtilityClasses(slot) {
    return generateUtilityClass('MuiNativeSelect', slot);
  }
  const nativeSelectClasses = generateUtilityClasses('MuiNativeSelect', ['root', 'select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput', 'error']);
  var nativeSelectClasses$1 = nativeSelectClasses;

  const _excluded$k = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"];
  const useUtilityClasses$j = ownerState => {
    const {
      classes,
      variant,
      disabled,
      multiple,
      open,
      error
    } = ownerState;
    const slots = {
      select: ['select', variant, disabled && 'disabled', multiple && 'multiple', error && 'error'],
      icon: ['icon', `icon${capitalize(variant)}`, open && 'iconOpen', disabled && 'disabled']
    };
    return composeClasses(slots, getNativeSelectUtilityClasses, classes);
  };
  const nativeSelectSelectStyles = ({
    ownerState,
    theme
  }) => _extends({
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    // When interacting quickly, the text can end up selected.
    // Native select can't be selected either.
    userSelect: 'none',
    borderRadius: 0,
    // Reset
    cursor: 'pointer',
    '&:focus': _extends({}, theme.vars ? {
      backgroundColor: `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.05)`
    } : {
      backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'
    }, {
      borderRadius: 0 // Reset Chrome style
    }),

    // Remove IE11 arrow
    '&::-ms-expand': {
      display: 'none'
    },
    [`&.${nativeSelectClasses$1.disabled}`]: {
      cursor: 'default'
    },
    '&[multiple]': {
      height: 'auto'
    },
    '&:not([multiple]) option, &:not([multiple]) optgroup': {
      backgroundColor: (theme.vars || theme).palette.background.paper
    },
    // Bump specificity to allow extending custom inputs
    '&&&': {
      paddingRight: 24,
      minWidth: 16 // So it doesn't collapse.
    }
  }, ownerState.variant === 'filled' && {
    '&&&': {
      paddingRight: 32
    }
  }, ownerState.variant === 'outlined' && {
    borderRadius: (theme.vars || theme).shape.borderRadius,
    '&:focus': {
      borderRadius: (theme.vars || theme).shape.borderRadius // Reset the reset for Chrome style
    },

    '&&&': {
      paddingRight: 32
    }
  });
  const NativeSelectSelect = styled$1('select', {
    name: 'MuiNativeSelect',
    slot: 'Select',
    shouldForwardProp: rootShouldForwardProp,
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.select, styles[ownerState.variant], ownerState.error && styles.error, {
        [`&.${nativeSelectClasses$1.multiple}`]: styles.multiple
      }];
    }
  })(nativeSelectSelectStyles);
  const nativeSelectIconStyles = ({
    ownerState,
    theme
  }) => _extends({
    // We use a position absolute over a flexbox in order to forward the pointer events
    // to the input and to support wrapping tags..
    position: 'absolute',
    right: 0,
    top: 'calc(50% - .5em)',
    // Center vertically, height is 1em
    pointerEvents: 'none',
    // Don't block pointer events on the select under the icon.
    color: (theme.vars || theme).palette.action.active,
    [`&.${nativeSelectClasses$1.disabled}`]: {
      color: (theme.vars || theme).palette.action.disabled
    }
  }, ownerState.open && {
    transform: 'rotate(180deg)'
  }, ownerState.variant === 'filled' && {
    right: 7
  }, ownerState.variant === 'outlined' && {
    right: 7
  });
  const NativeSelectIcon = styled$1('svg', {
    name: 'MuiNativeSelect',
    slot: 'Icon',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.icon, ownerState.variant && styles[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles.iconOpen];
    }
  })(nativeSelectIconStyles);

  /**
   * @ignore - internal component.
   */
  const NativeSelectInput = /*#__PURE__*/React__namespace.forwardRef(function NativeSelectInput(props, ref) {
    const {
        className,
        disabled,
        error,
        IconComponent,
        inputRef,
        variant = 'standard'
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$k);
    const ownerState = _extends({}, props, {
      disabled,
      variant,
      error
    });
    const classes = useUtilityClasses$j(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(NativeSelectSelect, _extends({
        ownerState: ownerState,
        className: clsx(classes.select, className),
        disabled: disabled,
        ref: inputRef || ref
      }, other)), props.multiple ? null : /*#__PURE__*/jsxRuntimeExports.jsx(NativeSelectIcon, {
        as: IconComponent,
        ownerState: ownerState,
        className: classes.icon
      })]
    });
  });
  var NativeSelectInput$1 = NativeSelectInput;

  function getSelectUtilityClasses(slot) {
    return generateUtilityClass('MuiSelect', slot);
  }
  const selectClasses = generateUtilityClasses('MuiSelect', ['select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'focused', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput', 'error']);
  var selectClasses$1 = selectClasses;

  var _span$1;
  const _excluded$j = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"];
  const SelectSelect = styled$1('div', {
    name: 'MuiSelect',
    slot: 'Select',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [
      // Win specificity over the input base
      {
        [`&.${selectClasses$1.select}`]: styles.select
      }, {
        [`&.${selectClasses$1.select}`]: styles[ownerState.variant]
      }, {
        [`&.${selectClasses$1.error}`]: styles.error
      }, {
        [`&.${selectClasses$1.multiple}`]: styles.multiple
      }];
    }
  })(nativeSelectSelectStyles, {
    // Win specificity over the input base
    [`&.${selectClasses$1.select}`]: {
      height: 'auto',
      // Resets for multiple select with chips
      minHeight: '1.4375em',
      // Required for select\text-field height consistency
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    }
  });
  const SelectIcon = styled$1('svg', {
    name: 'MuiSelect',
    slot: 'Icon',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.icon, ownerState.variant && styles[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles.iconOpen];
    }
  })(nativeSelectIconStyles);
  const SelectNativeInput = styled$1('input', {
    shouldForwardProp: prop => slotShouldForwardProp(prop) && prop !== 'classes',
    name: 'MuiSelect',
    slot: 'NativeInput',
    overridesResolver: (props, styles) => styles.nativeInput
  })({
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    width: '100%',
    boxSizing: 'border-box'
  });
  function areEqualValues(a, b) {
    if (typeof b === 'object' && b !== null) {
      return a === b;
    }

    // The value could be a number, the DOM will stringify it anyway.
    return String(a) === String(b);
  }
  function isEmpty(display) {
    return display == null || typeof display === 'string' && !display.trim();
  }
  const useUtilityClasses$i = ownerState => {
    const {
      classes,
      variant,
      disabled,
      multiple,
      open,
      error
    } = ownerState;
    const slots = {
      select: ['select', variant, disabled && 'disabled', multiple && 'multiple', error && 'error'],
      icon: ['icon', `icon${capitalize(variant)}`, open && 'iconOpen', disabled && 'disabled'],
      nativeInput: ['nativeInput']
    };
    return composeClasses(slots, getSelectUtilityClasses, classes);
  };

  /**
   * @ignore - internal component.
   */
  const SelectInput = /*#__PURE__*/React__namespace.forwardRef(function SelectInput(props, ref) {
    const {
        'aria-describedby': ariaDescribedby,
        'aria-label': ariaLabel,
        autoFocus,
        autoWidth,
        children,
        className,
        defaultOpen,
        defaultValue,
        disabled,
        displayEmpty,
        error = false,
        IconComponent,
        inputRef: inputRefProp,
        labelId,
        MenuProps = {},
        multiple,
        name,
        onBlur,
        onChange,
        onClose,
        onFocus,
        onOpen,
        open: openProp,
        readOnly,
        renderValue,
        SelectDisplayProps = {},
        tabIndex: tabIndexProp
        // catching `type` from Input which makes no sense for SelectInput
        ,

        value: valueProp,
        variant = 'standard'
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$j);
    const [value, setValueState] = useControlled({
      controlled: valueProp,
      default: defaultValue,
      name: 'Select'
    });
    const [openState, setOpenState] = useControlled({
      controlled: openProp,
      default: defaultOpen,
      name: 'Select'
    });
    const inputRef = React__namespace.useRef(null);
    const displayRef = React__namespace.useRef(null);
    const [displayNode, setDisplayNode] = React__namespace.useState(null);
    const {
      current: isOpenControlled
    } = React__namespace.useRef(openProp != null);
    const [menuMinWidthState, setMenuMinWidthState] = React__namespace.useState();
    const handleRef = useForkRef(ref, inputRefProp);
    const handleDisplayRef = React__namespace.useCallback(node => {
      displayRef.current = node;
      if (node) {
        setDisplayNode(node);
      }
    }, []);
    const anchorElement = displayNode == null ? void 0 : displayNode.parentNode;
    React__namespace.useImperativeHandle(handleRef, () => ({
      focus: () => {
        displayRef.current.focus();
      },
      node: inputRef.current,
      value
    }), [value]);

    // Resize menu on `defaultOpen` automatic toggle.
    React__namespace.useEffect(() => {
      if (defaultOpen && openState && displayNode && !isOpenControlled) {
        setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
        displayRef.current.focus();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [displayNode, autoWidth]);
    // `isOpenControlled` is ignored because the component should never switch between controlled and uncontrolled modes.
    // `defaultOpen` and `openState` are ignored to avoid unnecessary callbacks.
    React__namespace.useEffect(() => {
      if (autoFocus) {
        displayRef.current.focus();
      }
    }, [autoFocus]);
    React__namespace.useEffect(() => {
      if (!labelId) {
        return undefined;
      }
      const label = ownerDocument(displayRef.current).getElementById(labelId);
      if (label) {
        const handler = () => {
          if (getSelection().isCollapsed) {
            displayRef.current.focus();
          }
        };
        label.addEventListener('click', handler);
        return () => {
          label.removeEventListener('click', handler);
        };
      }
      return undefined;
    }, [labelId]);
    const update = (open, event) => {
      if (open) {
        if (onOpen) {
          onOpen(event);
        }
      } else if (onClose) {
        onClose(event);
      }
      if (!isOpenControlled) {
        setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
        setOpenState(open);
      }
    };
    const handleMouseDown = event => {
      // Ignore everything but left-click
      if (event.button !== 0) {
        return;
      }
      // Hijack the default focus behavior.
      event.preventDefault();
      displayRef.current.focus();
      update(true, event);
    };
    const handleClose = event => {
      update(false, event);
    };
    const childrenArray = React__namespace.Children.toArray(children);

    // Support autofill.
    const handleChange = event => {
      const child = childrenArray.find(childItem => childItem.props.value === event.target.value);
      if (child === undefined) {
        return;
      }
      setValueState(child.props.value);
      if (onChange) {
        onChange(event, child);
      }
    };
    const handleItemClick = child => event => {
      let newValue;

      // We use the tabindex attribute to signal the available options.
      if (!event.currentTarget.hasAttribute('tabindex')) {
        return;
      }
      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        const itemIndex = value.indexOf(child.props.value);
        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }
      if (child.props.onClick) {
        child.props.onClick(event);
      }
      if (value !== newValue) {
        setValueState(newValue);
        if (onChange) {
          // Redefine target to allow name and value to be read.
          // This allows seamless integration with the most popular form libraries.
          // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
          // Clone the event to not override `target` of the original event.
          const nativeEvent = event.nativeEvent || event;
          const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
          Object.defineProperty(clonedEvent, 'target', {
            writable: true,
            value: {
              value: newValue,
              name
            }
          });
          onChange(clonedEvent, child);
        }
      }
      if (!multiple) {
        update(false, event);
      }
    };
    const handleKeyDown = event => {
      if (!readOnly) {
        const validKeys = [' ', 'ArrowUp', 'ArrowDown',
        // The native select doesn't respond to enter on macOS, but it's recommended by
        // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
        'Enter'];
        if (validKeys.indexOf(event.key) !== -1) {
          event.preventDefault();
          update(true, event);
        }
      }
    };
    const open = displayNode !== null && openState;
    const handleBlur = event => {
      // if open event.stopImmediatePropagation
      if (!open && onBlur) {
        // Preact support, target is read only property on a native event.
        Object.defineProperty(event, 'target', {
          writable: true,
          value: {
            value,
            name
          }
        });
        onBlur(event);
      }
    };
    delete other['aria-invalid'];
    let display;
    let displaySingle;
    const displayMultiple = [];
    let computeDisplay = false;

    // No need to display any value if the field is empty.
    if (isFilled({
      value
    }) || displayEmpty) {
      if (renderValue) {
        display = renderValue(value);
      } else {
        computeDisplay = true;
      }
    }
    const items = childrenArray.map(child => {
      if (! /*#__PURE__*/React__namespace.isValidElement(child)) {
        return null;
      }
      let selected;
      if (multiple) {
        if (!Array.isArray(value)) {
          throw new Error(formatMuiErrorMessage(2));
        }
        selected = value.some(v => areEqualValues(v, child.props.value));
        if (selected && computeDisplay) {
          displayMultiple.push(child.props.children);
        }
      } else {
        selected = areEqualValues(value, child.props.value);
        if (selected && computeDisplay) {
          displaySingle = child.props.children;
        }
      }
      return /*#__PURE__*/React__namespace.cloneElement(child, {
        'aria-selected': selected ? 'true' : 'false',
        onClick: handleItemClick(child),
        onKeyUp: event => {
          if (event.key === ' ') {
            // otherwise our MenuItems dispatches a click event
            // it's not behavior of the native <option> and causes
            // the select to close immediately since we open on space keydown
            event.preventDefault();
          }
          if (child.props.onKeyUp) {
            child.props.onKeyUp(event);
          }
        },
        role: 'option',
        selected,
        value: undefined,
        // The value is most likely not a valid HTML attribute.
        'data-value': child.props.value // Instead, we provide it as a data attribute.
      });
    });
    if (computeDisplay) {
      if (multiple) {
        if (displayMultiple.length === 0) {
          display = null;
        } else {
          display = displayMultiple.reduce((output, child, index) => {
            output.push(child);
            if (index < displayMultiple.length - 1) {
              output.push(', ');
            }
            return output;
          }, []);
        }
      } else {
        display = displaySingle;
      }
    }

    // Avoid performing a layout computation in the render method.
    let menuMinWidth = menuMinWidthState;
    if (!autoWidth && isOpenControlled && displayNode) {
      menuMinWidth = anchorElement.clientWidth;
    }
    let tabIndex;
    if (typeof tabIndexProp !== 'undefined') {
      tabIndex = tabIndexProp;
    } else {
      tabIndex = disabled ? null : 0;
    }
    const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : undefined);
    const ownerState = _extends({}, props, {
      variant,
      value,
      open,
      error
    });
    const classes = useUtilityClasses$i(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [/*#__PURE__*/jsxRuntimeExports.jsx(SelectSelect, _extends({
        ref: handleDisplayRef,
        tabIndex: tabIndex,
        role: "button",
        "aria-disabled": disabled ? 'true' : undefined,
        "aria-expanded": open ? 'true' : 'false',
        "aria-haspopup": "listbox",
        "aria-label": ariaLabel,
        "aria-labelledby": [labelId, buttonId].filter(Boolean).join(' ') || undefined,
        "aria-describedby": ariaDescribedby,
        onKeyDown: handleKeyDown,
        onMouseDown: disabled || readOnly ? null : handleMouseDown,
        onBlur: handleBlur,
        onFocus: onFocus
      }, SelectDisplayProps, {
        ownerState: ownerState,
        className: clsx(SelectDisplayProps.className, classes.select, className)
        // The id is required for proper a11y
        ,
        id: buttonId,
        children: isEmpty(display) ? // notranslate needed while Google Translate will not fix zero-width space issue
        _span$1 || (_span$1 = /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          className: "notranslate",
          children: "\u200B"
        })) : display
      })), /*#__PURE__*/jsxRuntimeExports.jsx(SelectNativeInput, _extends({
        "aria-invalid": error,
        value: Array.isArray(value) ? value.join(',') : value,
        name: name,
        ref: inputRef,
        "aria-hidden": true,
        onChange: handleChange,
        tabIndex: -1,
        disabled: disabled,
        className: classes.nativeInput,
        autoFocus: autoFocus,
        ownerState: ownerState
      }, other)), /*#__PURE__*/jsxRuntimeExports.jsx(SelectIcon, {
        as: IconComponent,
        className: classes.icon,
        ownerState: ownerState
      }), /*#__PURE__*/jsxRuntimeExports.jsx(Menu$1, _extends({
        id: `menu-${name || ''}`,
        anchorEl: anchorElement,
        open: open,
        onClose: handleClose,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'center'
        }
      }, MenuProps, {
        MenuListProps: _extends({
          'aria-labelledby': labelId,
          role: 'listbox',
          disableListWrap: true
        }, MenuProps.MenuListProps),
        PaperProps: _extends({}, MenuProps.PaperProps, {
          style: _extends({
            minWidth: menuMinWidth
          }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
        }),
        children: items
      }))]
    });
  });
  var SelectInput$1 = SelectInput;

  function getSvgIconUtilityClass(slot) {
    return generateUtilityClass('MuiSvgIcon', slot);
  }
  generateUtilityClasses('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

  const _excluded$i = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
  const useUtilityClasses$h = ownerState => {
    const {
      color,
      fontSize,
      classes
    } = ownerState;
    const slots = {
      root: ['root', color !== 'inherit' && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
    };
    return composeClasses(slots, getSvgIconUtilityClass, classes);
  };
  const SvgIconRoot = styled$1('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.color !== 'inherit' && styles[`color${capitalize(ownerState.color)}`], styles[`fontSize${capitalize(ownerState.fontSize)}`]];
    }
  })(({
    theme,
    ownerState
  }) => {
    var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$transitions2$d, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette$ownerState$c2, _palette2, _palette2$action, _palette3, _palette3$action;
    return {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      // the <svg> will define the property that has `currentColor`
      // e.g. heroicons uses fill="none" and stroke="currentColor"
      fill: ownerState.hasSvgAsChild ? undefined : 'currentColor',
      flexShrink: 0,
      transition: (_theme$transitions = theme.transitions) == null ? void 0 : (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, 'fill', {
        duration: (_theme$transitions2 = theme.transitions) == null ? void 0 : (_theme$transitions2$d = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2$d.shorter
      }),
      fontSize: {
        inherit: 'inherit',
        small: ((_theme$typography = theme.typography) == null ? void 0 : (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || '1.25rem',
        medium: ((_theme$typography2 = theme.typography) == null ? void 0 : (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || '1.5rem',
        large: ((_theme$typography3 = theme.typography) == null ? void 0 : (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || '2.1875rem'
      }[ownerState.fontSize],
      // TODO v5 deprecate, v6 remove for sx
      color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null ? void 0 : (_palette$ownerState$c2 = _palette[ownerState.color]) == null ? void 0 : _palette$ownerState$c2.main) != null ? _palette$ownerState$c : {
        action: (_palette2 = (theme.vars || theme).palette) == null ? void 0 : (_palette2$action = _palette2.action) == null ? void 0 : _palette2$action.active,
        disabled: (_palette3 = (theme.vars || theme).palette) == null ? void 0 : (_palette3$action = _palette3.action) == null ? void 0 : _palette3$action.disabled,
        inherit: undefined
      }[ownerState.color]
    };
  });
  const SvgIcon = /*#__PURE__*/React__namespace.forwardRef(function SvgIcon(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiSvgIcon'
    });
    const {
        children,
        className,
        color = 'inherit',
        component = 'svg',
        fontSize = 'medium',
        htmlColor,
        inheritViewBox = false,
        titleAccess,
        viewBox = '0 0 24 24'
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$i);
    const hasSvgAsChild = /*#__PURE__*/React__namespace.isValidElement(children) && children.type === 'svg';
    const ownerState = _extends({}, props, {
      color,
      component,
      fontSize,
      instanceFontSize: inProps.fontSize,
      inheritViewBox,
      viewBox,
      hasSvgAsChild
    });
    const more = {};
    if (!inheritViewBox) {
      more.viewBox = viewBox;
    }
    const classes = useUtilityClasses$h(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsxs(SvgIconRoot, _extends({
      as: component,
      className: clsx(classes.root, className),
      focusable: "false",
      color: htmlColor,
      "aria-hidden": titleAccess ? undefined : true,
      role: titleAccess ? 'img' : undefined,
      ref: ref
    }, more, other, hasSvgAsChild && children.props, {
      ownerState: ownerState,
      children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /*#__PURE__*/jsxRuntimeExports.jsx("title", {
        children: titleAccess
      }) : null]
    }));
  });
  SvgIcon.muiName = 'SvgIcon';
  var SvgIcon$1 = SvgIcon;

  function createSvgIcon(path, displayName) {
    function Component(props, ref) {
      return /*#__PURE__*/jsxRuntimeExports.jsx(SvgIcon$1, _extends({
        "data-testid": `${displayName}Icon`,
        ref: ref
      }, props, {
        children: path
      }));
    }
    Component.muiName = SvgIcon$1.muiName;
    return /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(Component));
  }

  var ArrowDropDownIcon = createSvgIcon( /*#__PURE__*/jsxRuntimeExports.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), 'ArrowDropDown');

  function GlobalStyles(props) {
    return /*#__PURE__*/jsxRuntimeExports.jsx(GlobalStyles$1, _extends({}, props, {
      defaultTheme: defaultTheme$1,
      themeId: THEME_ID
    }));
  }

  function getInputBaseUtilityClass(slot) {
    return generateUtilityClass('MuiInputBase', slot);
  }
  const inputBaseClasses = generateUtilityClasses('MuiInputBase', ['root', 'formControl', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'colorSecondary', 'fullWidth', 'hiddenLabel', 'readOnly', 'input', 'inputSizeSmall', 'inputMultiline', 'inputTypeSearch', 'inputAdornedStart', 'inputAdornedEnd', 'inputHiddenLabel']);
  var inputBaseClasses$1 = inputBaseClasses;

  const _excluded$h = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"];
  const rootOverridesResolver = (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.formControl && styles.formControl, ownerState.startAdornment && styles.adornedStart, ownerState.endAdornment && styles.adornedEnd, ownerState.error && styles.error, ownerState.size === 'small' && styles.sizeSmall, ownerState.multiline && styles.multiline, ownerState.color && styles[`color${capitalize(ownerState.color)}`], ownerState.fullWidth && styles.fullWidth, ownerState.hiddenLabel && styles.hiddenLabel];
  };
  const inputOverridesResolver = (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.input, ownerState.size === 'small' && styles.inputSizeSmall, ownerState.multiline && styles.inputMultiline, ownerState.type === 'search' && styles.inputTypeSearch, ownerState.startAdornment && styles.inputAdornedStart, ownerState.endAdornment && styles.inputAdornedEnd, ownerState.hiddenLabel && styles.inputHiddenLabel];
  };
  const useUtilityClasses$g = ownerState => {
    const {
      classes,
      color,
      disabled,
      error,
      endAdornment,
      focused,
      formControl,
      fullWidth,
      hiddenLabel,
      multiline,
      readOnly,
      size,
      startAdornment,
      type
    } = ownerState;
    const slots = {
      root: ['root', `color${capitalize(color)}`, disabled && 'disabled', error && 'error', fullWidth && 'fullWidth', focused && 'focused', formControl && 'formControl', size === 'small' && 'sizeSmall', multiline && 'multiline', startAdornment && 'adornedStart', endAdornment && 'adornedEnd', hiddenLabel && 'hiddenLabel', readOnly && 'readOnly'],
      input: ['input', disabled && 'disabled', type === 'search' && 'inputTypeSearch', multiline && 'inputMultiline', size === 'small' && 'inputSizeSmall', hiddenLabel && 'inputHiddenLabel', startAdornment && 'inputAdornedStart', endAdornment && 'inputAdornedEnd', readOnly && 'readOnly']
    };
    return composeClasses(slots, getInputBaseUtilityClass, classes);
  };
  const InputBaseRoot = styled$1('div', {
    name: 'MuiInputBase',
    slot: 'Root',
    overridesResolver: rootOverridesResolver
  })(({
    theme,
    ownerState
  }) => _extends({}, theme.typography.body1, {
    color: (theme.vars || theme).palette.text.primary,
    lineHeight: '1.4375em',
    // 23px
    boxSizing: 'border-box',
    // Prevent padding issue with fullWidth.
    position: 'relative',
    cursor: 'text',
    display: 'inline-flex',
    alignItems: 'center',
    [`&.${inputBaseClasses$1.disabled}`]: {
      color: (theme.vars || theme).palette.text.disabled,
      cursor: 'default'
    }
  }, ownerState.multiline && _extends({
    padding: '4px 0 5px'
  }, ownerState.size === 'small' && {
    paddingTop: 1
  }), ownerState.fullWidth && {
    width: '100%'
  }));
  const InputBaseComponent = styled$1('input', {
    name: 'MuiInputBase',
    slot: 'Input',
    overridesResolver: inputOverridesResolver
  })(({
    theme,
    ownerState
  }) => {
    const light = theme.palette.mode === 'light';
    const placeholder = _extends({
      color: 'currentColor'
    }, theme.vars ? {
      opacity: theme.vars.opacity.inputPlaceholder
    } : {
      opacity: light ? 0.42 : 0.5
    }, {
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shorter
      })
    });
    const placeholderHidden = {
      opacity: '0 !important'
    };
    const placeholderVisible = theme.vars ? {
      opacity: theme.vars.opacity.inputPlaceholder
    } : {
      opacity: light ? 0.42 : 0.5
    };
    return _extends({
      font: 'inherit',
      letterSpacing: 'inherit',
      color: 'currentColor',
      padding: '4px 0 5px',
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.4375em',
      // Reset 23pxthe native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE11 width issue
      animationName: 'mui-auto-fill-cancel',
      animationDuration: '10ms',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        WebkitAppearance: 'none'
      },
      // Show and hide the placeholder logic
      [`label[data-shrink=false] + .${inputBaseClasses$1.formControl} &`]: {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge
      },

      [`&.${inputBaseClasses$1.disabled}`]: {
        opacity: 1,
        // Reset iOS opacity
        WebkitTextFillColor: (theme.vars || theme).palette.text.disabled // Fix opacity Safari bug
      },

      '&:-webkit-autofill': {
        animationDuration: '5000s',
        animationName: 'mui-auto-fill'
      }
    }, ownerState.size === 'small' && {
      paddingTop: 1
    }, ownerState.multiline && {
      height: 'auto',
      resize: 'none',
      padding: 0,
      paddingTop: 0
    }, ownerState.type === 'search' && {
      // Improve type search style.
      MozAppearance: 'textfield'
    });
  });
  const inputGlobalStyles = /*#__PURE__*/jsxRuntimeExports.jsx(GlobalStyles, {
    styles: {
      '@keyframes mui-auto-fill': {
        from: {
          display: 'block'
        }
      },
      '@keyframes mui-auto-fill-cancel': {
        from: {
          display: 'block'
        }
      }
    }
  });

  /**
   * `InputBase` contains as few styles as possible.
   * It aims to be a simple building block for creating an input.
   * It contains a load of style reset and some state logic.
   */
  const InputBase = /*#__PURE__*/React__namespace.forwardRef(function InputBase(inProps, ref) {
    var _slotProps$input;
    const props = useThemeProps({
      props: inProps,
      name: 'MuiInputBase'
    });
    const {
        'aria-describedby': ariaDescribedby,
        autoComplete,
        autoFocus,
        className,
        components = {},
        componentsProps = {},
        defaultValue,
        disabled,
        disableInjectingGlobalStyles,
        endAdornment,
        fullWidth = false,
        id,
        inputComponent = 'input',
        inputProps: inputPropsProp = {},
        inputRef: inputRefProp,
        maxRows,
        minRows,
        multiline = false,
        name,
        onBlur,
        onChange,
        onClick,
        onFocus,
        onKeyDown,
        onKeyUp,
        placeholder,
        readOnly,
        renderSuffix,
        rows,
        slotProps = {},
        slots = {},
        startAdornment,
        type = 'text',
        value: valueProp
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$h);
    const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
    const {
      current: isControlled
    } = React__namespace.useRef(value != null);
    const inputRef = React__namespace.useRef();
    const handleInputRefWarning = React__namespace.useCallback(instance => {
    }, []);
    const handleInputRef = useForkRef(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
    const [focused, setFocused] = React__namespace.useState(false);
    const muiFormControl = useFormControl();
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled']
    });
    fcs.focused = muiFormControl ? muiFormControl.focused : focused;

    // The blur won't fire when the disabled state is set on a focused input.
    // We need to book keep the focused state manually.
    React__namespace.useEffect(() => {
      if (!muiFormControl && disabled && focused) {
        setFocused(false);
        if (onBlur) {
          onBlur();
        }
      }
    }, [muiFormControl, disabled, focused, onBlur]);
    const onFilled = muiFormControl && muiFormControl.onFilled;
    const onEmpty = muiFormControl && muiFormControl.onEmpty;
    const checkDirty = React__namespace.useCallback(obj => {
      if (isFilled(obj)) {
        if (onFilled) {
          onFilled();
        }
      } else if (onEmpty) {
        onEmpty();
      }
    }, [onFilled, onEmpty]);
    useEnhancedEffect$1(() => {
      if (isControlled) {
        checkDirty({
          value
        });
      }
    }, [value, checkDirty, isControlled]);
    const handleFocus = event => {
      // Fix a bug with IE11 where the focus/blur events are triggered
      // while the component is disabled.
      if (fcs.disabled) {
        event.stopPropagation();
        return;
      }
      if (onFocus) {
        onFocus(event);
      }
      if (inputPropsProp.onFocus) {
        inputPropsProp.onFocus(event);
      }
      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      } else {
        setFocused(true);
      }
    };
    const handleBlur = event => {
      if (onBlur) {
        onBlur(event);
      }
      if (inputPropsProp.onBlur) {
        inputPropsProp.onBlur(event);
      }
      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      } else {
        setFocused(false);
      }
    };
    const handleChange = (event, ...args) => {
      if (!isControlled) {
        const element = event.target || inputRef.current;
        if (element == null) {
          throw new Error(formatMuiErrorMessage(1));
        }
        checkDirty({
          value: element.value
        });
      }
      if (inputPropsProp.onChange) {
        inputPropsProp.onChange(event, ...args);
      }

      // Perform in the willUpdate
      if (onChange) {
        onChange(event, ...args);
      }
    };

    // Check the input state on mount, in case it was filled by the user
    // or auto filled by the browser before the hydration (for SSR).
    React__namespace.useEffect(() => {
      checkDirty(inputRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleClick = event => {
      if (inputRef.current && event.currentTarget === event.target) {
        inputRef.current.focus();
      }
      if (onClick && !fcs.disabled) {
        onClick(event);
      }
    };
    let InputComponent = inputComponent;
    let inputProps = inputPropsProp;
    if (multiline && InputComponent === 'input') {
      if (rows) {
        inputProps = _extends({
          type: undefined,
          minRows: rows,
          maxRows: rows
        }, inputProps);
      } else {
        inputProps = _extends({
          type: undefined,
          maxRows,
          minRows
        }, inputProps);
      }
      InputComponent = TextareaAutosize$1;
    }
    const handleAutoFill = event => {
      // Provide a fake value as Chrome might not let you access it for security reasons.
      checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
        value: 'x'
      });
    };
    React__namespace.useEffect(() => {
      if (muiFormControl) {
        muiFormControl.setAdornedStart(Boolean(startAdornment));
      }
    }, [muiFormControl, startAdornment]);
    const ownerState = _extends({}, props, {
      color: fcs.color || 'primary',
      disabled: fcs.disabled,
      endAdornment,
      error: fcs.error,
      focused: fcs.focused,
      formControl: muiFormControl,
      fullWidth,
      hiddenLabel: fcs.hiddenLabel,
      multiline,
      size: fcs.size,
      startAdornment,
      type
    });
    const classes = useUtilityClasses$g(ownerState);
    const Root = slots.root || components.Root || InputBaseRoot;
    const rootProps = slotProps.root || componentsProps.root || {};
    const Input = slots.input || components.Input || InputBaseComponent;
    inputProps = _extends({}, inputProps, (_slotProps$input = slotProps.input) != null ? _slotProps$input : componentsProps.input);
    return /*#__PURE__*/jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [!disableInjectingGlobalStyles && inputGlobalStyles, /*#__PURE__*/jsxRuntimeExports.jsxs(Root, _extends({}, rootProps, !isHostComponent(Root) && {
        ownerState: _extends({}, ownerState, rootProps.ownerState)
      }, {
        ref: ref,
        onClick: handleClick
      }, other, {
        className: clsx(classes.root, rootProps.className, className, readOnly && 'MuiInputBase-readOnly'),
        children: [startAdornment, /*#__PURE__*/jsxRuntimeExports.jsx(FormControlContext$1.Provider, {
          value: null,
          children: /*#__PURE__*/jsxRuntimeExports.jsx(Input, _extends({
            ownerState: ownerState,
            "aria-invalid": fcs.error,
            "aria-describedby": ariaDescribedby,
            autoComplete: autoComplete,
            autoFocus: autoFocus,
            defaultValue: defaultValue,
            disabled: fcs.disabled,
            id: id,
            onAnimationStart: handleAutoFill,
            name: name,
            placeholder: placeholder,
            readOnly: readOnly,
            required: fcs.required,
            rows: rows,
            value: value,
            onKeyDown: onKeyDown,
            onKeyUp: onKeyUp,
            type: type
          }, inputProps, !isHostComponent(Input) && {
            as: InputComponent,
            ownerState: _extends({}, ownerState, inputProps.ownerState)
          }, {
            ref: handleInputRef,
            className: clsx(classes.input, inputProps.className, readOnly && 'MuiInputBase-readOnly'),
            onBlur: handleBlur,
            onChange: handleChange,
            onFocus: handleFocus
          }))
        }), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
          startAdornment
        })) : null]
      }))]
    });
  });
  var InputBase$1 = InputBase;

  function getInputUtilityClass(slot) {
    return generateUtilityClass('MuiInput', slot);
  }
  const inputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses('MuiInput', ['root', 'underline', 'input']));
  var inputClasses$1 = inputClasses;

  const _excluded$g = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"];
  const useUtilityClasses$f = ownerState => {
    const {
      classes,
      disableUnderline
    } = ownerState;
    const slots = {
      root: ['root', !disableUnderline && 'underline'],
      input: ['input']
    };
    const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
    return _extends({}, classes, composedClasses);
  };
  const InputRoot = styled$1(InputBaseRoot, {
    shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
    name: 'MuiInput',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline];
    }
  })(({
    theme,
    ownerState
  }) => {
    const light = theme.palette.mode === 'light';
    let bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
    if (theme.vars) {
      bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
    }
    return _extends({
      position: 'relative'
    }, ownerState.formControl && {
      'label + &': {
        marginTop: 16
      }
    }, !ownerState.disableUnderline && {
      '&:after': {
        borderBottom: `2px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.
      },

      [`&.${inputClasses$1.focused}:after`]: {
        // translateX(0) is a workaround for Safari transform scale bug
        // See https://github.com/mui/material-ui/issues/31766
        transform: 'scaleX(1) translateX(0)'
      },
      [`&.${inputClasses$1.error}`]: {
        '&:before, &:after': {
          borderBottomColor: (theme.vars || theme).palette.error.main
        }
      },
      '&:before': {
        borderBottom: `1px solid ${bottomLineColor}`,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.
      },

      [`&:hover:not(.${inputClasses$1.disabled}, .${inputClasses$1.error}):before`]: {
        borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderBottom: `1px solid ${bottomLineColor}`
        }
      },
      [`&.${inputClasses$1.disabled}:before`]: {
        borderBottomStyle: 'dotted'
      }
    });
  });
  const InputInput = styled$1(InputBaseComponent, {
    name: 'MuiInput',
    slot: 'Input',
    overridesResolver: inputOverridesResolver
  })({});
  const Input = /*#__PURE__*/React__namespace.forwardRef(function Input(inProps, ref) {
    var _ref, _slots$root, _ref2, _slots$input;
    const props = useThemeProps({
      props: inProps,
      name: 'MuiInput'
    });
    const {
        disableUnderline,
        components = {},
        componentsProps: componentsPropsProp,
        fullWidth = false,
        inputComponent = 'input',
        multiline = false,
        slotProps,
        slots = {},
        type = 'text'
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$g);
    const classes = useUtilityClasses$f(props);
    const ownerState = {
      disableUnderline
    };
    const inputComponentsProps = {
      root: {
        ownerState
      }
    };
    const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(slotProps != null ? slotProps : componentsPropsProp, inputComponentsProps) : inputComponentsProps;
    const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot;
    const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
    return /*#__PURE__*/jsxRuntimeExports.jsx(InputBase$1, _extends({
      slots: {
        root: RootSlot,
        input: InputSlot
      },
      slotProps: componentsProps,
      fullWidth: fullWidth,
      inputComponent: inputComponent,
      multiline: multiline,
      ref: ref,
      type: type
    }, other, {
      classes: classes
    }));
  });
  Input.muiName = 'Input';
  var Input$1 = Input;

  function getFilledInputUtilityClass(slot) {
    return generateUtilityClass('MuiFilledInput', slot);
  }
  const filledInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses('MuiFilledInput', ['root', 'underline', 'input']));
  var filledInputClasses$1 = filledInputClasses;

  const _excluded$f = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"];
  const useUtilityClasses$e = ownerState => {
    const {
      classes,
      disableUnderline
    } = ownerState;
    const slots = {
      root: ['root', !disableUnderline && 'underline'],
      input: ['input']
    };
    const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
    return _extends({}, classes, composedClasses);
  };
  const FilledInputRoot = styled$1(InputBaseRoot, {
    shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
    name: 'MuiFilledInput',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline];
    }
  })(({
    theme,
    ownerState
  }) => {
    var _palette;
    const light = theme.palette.mode === 'light';
    const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
    const backgroundColor = light ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)';
    const hoverBackground = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)';
    const disabledBackground = light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
    return _extends({
      position: 'relative',
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
      borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
      borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      '&:hover': {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
        }
      },
      [`&.${filledInputClasses$1.focused}`]: {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      },
      [`&.${filledInputClasses$1.disabled}`]: {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
      }
    }, !ownerState.disableUnderline && {
      '&:after': {
        borderBottom: `2px solid ${(_palette = (theme.vars || theme).palette[ownerState.color || 'primary']) == null ? void 0 : _palette.main}`,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.
      },

      [`&.${filledInputClasses$1.focused}:after`]: {
        // translateX(0) is a workaround for Safari transform scale bug
        // See https://github.com/mui/material-ui/issues/31766
        transform: 'scaleX(1) translateX(0)'
      },
      [`&.${filledInputClasses$1.error}`]: {
        '&:before, &:after': {
          borderBottomColor: (theme.vars || theme).palette.error.main
        }
      },
      '&:before': {
        borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.
      },

      [`&:hover:not(.${filledInputClasses$1.disabled}, .${filledInputClasses$1.error}):before`]: {
        borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
      },
      [`&.${filledInputClasses$1.disabled}:before`]: {
        borderBottomStyle: 'dotted'
      }
    }, ownerState.startAdornment && {
      paddingLeft: 12
    }, ownerState.endAdornment && {
      paddingRight: 12
    }, ownerState.multiline && _extends({
      padding: '25px 12px 8px'
    }, ownerState.size === 'small' && {
      paddingTop: 21,
      paddingBottom: 4
    }, ownerState.hiddenLabel && {
      paddingTop: 16,
      paddingBottom: 17
    }));
  });
  const FilledInputInput = styled$1(InputBaseComponent, {
    name: 'MuiFilledInput',
    slot: 'Input',
    overridesResolver: inputOverridesResolver
  })(({
    theme,
    ownerState
  }) => _extends({
    paddingTop: 25,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12
  }, !theme.vars && {
    '&:-webkit-autofill': {
      WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
      WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
      caretColor: theme.palette.mode === 'light' ? null : '#fff',
      borderTopLeftRadius: 'inherit',
      borderTopRightRadius: 'inherit'
    }
  }, theme.vars && {
    '&:-webkit-autofill': {
      borderTopLeftRadius: 'inherit',
      borderTopRightRadius: 'inherit'
    },
    [theme.getColorSchemeSelector('dark')]: {
      '&:-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 100px #266798 inset',
        WebkitTextFillColor: '#fff',
        caretColor: '#fff'
      }
    }
  }, ownerState.size === 'small' && {
    paddingTop: 21,
    paddingBottom: 4
  }, ownerState.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, ownerState.multiline && {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0
  }, ownerState.startAdornment && {
    paddingLeft: 0
  }, ownerState.endAdornment && {
    paddingRight: 0
  }, ownerState.hiddenLabel && ownerState.size === 'small' && {
    paddingTop: 8,
    paddingBottom: 9
  }));
  const FilledInput = /*#__PURE__*/React__namespace.forwardRef(function FilledInput(inProps, ref) {
    var _ref, _slots$root, _ref2, _slots$input;
    const props = useThemeProps({
      props: inProps,
      name: 'MuiFilledInput'
    });
    const {
        components = {},
        componentsProps: componentsPropsProp,
        fullWidth = false,
        // declare here to prevent spreading to DOM
        inputComponent = 'input',
        multiline = false,
        slotProps,
        slots = {},
        type = 'text'
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$f);
    const ownerState = _extends({}, props, {
      fullWidth,
      inputComponent,
      multiline,
      type
    });
    const classes = useUtilityClasses$e(props);
    const filledInputComponentsProps = {
      root: {
        ownerState
      },
      input: {
        ownerState
      }
    };
    const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(slotProps != null ? slotProps : componentsPropsProp, filledInputComponentsProps) : filledInputComponentsProps;
    const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : FilledInputRoot;
    const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : FilledInputInput;
    return /*#__PURE__*/jsxRuntimeExports.jsx(InputBase$1, _extends({
      slots: {
        root: RootSlot,
        input: InputSlot
      },
      componentsProps: componentsProps,
      fullWidth: fullWidth,
      inputComponent: inputComponent,
      multiline: multiline,
      ref: ref,
      type: type
    }, other, {
      classes: classes
    }));
  });
  FilledInput.muiName = 'Input';
  var FilledInput$1 = FilledInput;

  var _span;
  const _excluded$e = ["children", "classes", "className", "label", "notched"];
  const NotchedOutlineRoot$1 = styled$1('fieldset')({
    textAlign: 'left',
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: '0 8px',
    pointerEvents: 'none',
    borderRadius: 'inherit',
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
    minWidth: '0%'
  });
  const NotchedOutlineLegend = styled$1('legend')(({
    ownerState,
    theme
  }) => _extends({
    float: 'unset',
    // Fix conflict with bootstrap
    width: 'auto',
    // Fix conflict with bootstrap
    overflow: 'hidden'
  }, !ownerState.withLabel && {
    padding: 0,
    lineHeight: '11px',
    // sync with `height` in `legend` styles
    transition: theme.transitions.create('width', {
      duration: 150,
      easing: theme.transitions.easing.easeOut
    })
  }, ownerState.withLabel && _extends({
    display: 'block',
    // Fix conflict with normalize.css and sanitize.css
    padding: 0,
    height: 11,
    // sync with `lineHeight` in `legend` styles
    fontSize: '0.75em',
    visibility: 'hidden',
    maxWidth: 0.01,
    transition: theme.transitions.create('max-width', {
      duration: 50,
      easing: theme.transitions.easing.easeOut
    }),
    whiteSpace: 'nowrap',
    '& > span': {
      paddingLeft: 5,
      paddingRight: 5,
      display: 'inline-block',
      opacity: 0,
      visibility: 'visible'
    }
  }, ownerState.notched && {
    maxWidth: '100%',
    transition: theme.transitions.create('max-width', {
      duration: 100,
      easing: theme.transitions.easing.easeOut,
      delay: 50
    })
  })));

  /**
   * @ignore - internal component.
   */
  function NotchedOutline(props) {
    const {
        className,
        label,
        notched
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$e);
    const withLabel = label != null && label !== '';
    const ownerState = _extends({}, props, {
      notched,
      withLabel
    });
    return /*#__PURE__*/jsxRuntimeExports.jsx(NotchedOutlineRoot$1, _extends({
      "aria-hidden": true,
      className: className,
      ownerState: ownerState
    }, other, {
      children: /*#__PURE__*/jsxRuntimeExports.jsx(NotchedOutlineLegend, {
        ownerState: ownerState,
        children: withLabel ? /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          children: label
        }) : // notranslate needed while Google Translate will not fix zero-width space issue
        _span || (_span = /*#__PURE__*/jsxRuntimeExports.jsx("span", {
          className: "notranslate",
          children: "\u200B"
        }))
      })
    }));
  }

  function getOutlinedInputUtilityClass(slot) {
    return generateUtilityClass('MuiOutlinedInput', slot);
  }
  const outlinedInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses('MuiOutlinedInput', ['root', 'notchedOutline', 'input']));
  var outlinedInputClasses$1 = outlinedInputClasses;

  const _excluded$d = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"];
  const useUtilityClasses$d = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root'],
      notchedOutline: ['notchedOutline'],
      input: ['input']
    };
    const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
    return _extends({}, classes, composedClasses);
  };
  const OutlinedInputRoot = styled$1(InputBaseRoot, {
    shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
    name: 'MuiOutlinedInput',
    slot: 'Root',
    overridesResolver: rootOverridesResolver
  })(({
    theme,
    ownerState
  }) => {
    const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
    return _extends({
      position: 'relative',
      borderRadius: (theme.vars || theme).shape.borderRadius,
      [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
        borderColor: (theme.vars || theme).palette.text.primary
      },
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
          borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
        }
      },
      [`&.${outlinedInputClasses$1.focused} .${outlinedInputClasses$1.notchedOutline}`]: {
        borderColor: (theme.vars || theme).palette[ownerState.color].main,
        borderWidth: 2
      },
      [`&.${outlinedInputClasses$1.error} .${outlinedInputClasses$1.notchedOutline}`]: {
        borderColor: (theme.vars || theme).palette.error.main
      },
      [`&.${outlinedInputClasses$1.disabled} .${outlinedInputClasses$1.notchedOutline}`]: {
        borderColor: (theme.vars || theme).palette.action.disabled
      }
    }, ownerState.startAdornment && {
      paddingLeft: 14
    }, ownerState.endAdornment && {
      paddingRight: 14
    }, ownerState.multiline && _extends({
      padding: '16.5px 14px'
    }, ownerState.size === 'small' && {
      padding: '8.5px 14px'
    }));
  });
  const NotchedOutlineRoot = styled$1(NotchedOutline, {
    name: 'MuiOutlinedInput',
    slot: 'NotchedOutline',
    overridesResolver: (props, styles) => styles.notchedOutline
  })(({
    theme
  }) => {
    const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
    return {
      borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
    };
  });
  const OutlinedInputInput = styled$1(InputBaseComponent, {
    name: 'MuiOutlinedInput',
    slot: 'Input',
    overridesResolver: inputOverridesResolver
  })(({
    theme,
    ownerState
  }) => _extends({
    padding: '16.5px 14px'
  }, !theme.vars && {
    '&:-webkit-autofill': {
      WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
      WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
      caretColor: theme.palette.mode === 'light' ? null : '#fff',
      borderRadius: 'inherit'
    }
  }, theme.vars && {
    '&:-webkit-autofill': {
      borderRadius: 'inherit'
    },
    [theme.getColorSchemeSelector('dark')]: {
      '&:-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 100px #266798 inset',
        WebkitTextFillColor: '#fff',
        caretColor: '#fff'
      }
    }
  }, ownerState.size === 'small' && {
    padding: '8.5px 14px'
  }, ownerState.multiline && {
    padding: 0
  }, ownerState.startAdornment && {
    paddingLeft: 0
  }, ownerState.endAdornment && {
    paddingRight: 0
  }));
  const OutlinedInput = /*#__PURE__*/React__namespace.forwardRef(function OutlinedInput(inProps, ref) {
    var _ref, _slots$root, _ref2, _slots$input, _React$Fragment;
    const props = useThemeProps({
      props: inProps,
      name: 'MuiOutlinedInput'
    });
    const {
        components = {},
        fullWidth = false,
        inputComponent = 'input',
        label,
        multiline = false,
        notched,
        slots = {},
        type = 'text'
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$d);
    const classes = useUtilityClasses$d(props);
    const muiFormControl = useFormControl();
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ['color', 'disabled', 'error', 'focused', 'hiddenLabel', 'size', 'required']
    });
    const ownerState = _extends({}, props, {
      color: fcs.color || 'primary',
      disabled: fcs.disabled,
      error: fcs.error,
      focused: fcs.focused,
      formControl: muiFormControl,
      fullWidth,
      hiddenLabel: fcs.hiddenLabel,
      multiline,
      size: fcs.size,
      type
    });
    const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : OutlinedInputRoot;
    const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : OutlinedInputInput;
    return /*#__PURE__*/jsxRuntimeExports.jsx(InputBase$1, _extends({
      slots: {
        root: RootSlot,
        input: InputSlot
      },
      renderSuffix: state => /*#__PURE__*/jsxRuntimeExports.jsx(NotchedOutlineRoot, {
        ownerState: ownerState,
        className: classes.notchedOutline,
        label: label != null && label !== '' && fcs.required ? _React$Fragment || (_React$Fragment = /*#__PURE__*/jsxRuntimeExports.jsxs(React__namespace.Fragment, {
          children: [label, "\u2009", '*']
        })) : label,
        notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
      }),
      fullWidth: fullWidth,
      inputComponent: inputComponent,
      multiline: multiline,
      ref: ref,
      type: type
    }, other, {
      classes: _extends({}, classes, {
        notchedOutline: null
      })
    }));
  });
  OutlinedInput.muiName = 'Input';
  var OutlinedInput$1 = OutlinedInput;

  const _excluded$c = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"];
  const useUtilityClasses$c = ownerState => {
    const {
      classes
    } = ownerState;
    return classes;
  };
  const styledRootConfig = {
    name: 'MuiSelect',
    overridesResolver: (props, styles) => styles.root,
    shouldForwardProp: prop => rootShouldForwardProp(prop) && prop !== 'variant',
    slot: 'Root'
  };
  const StyledInput = styled$1(Input$1, styledRootConfig)('');
  const StyledOutlinedInput = styled$1(OutlinedInput$1, styledRootConfig)('');
  const StyledFilledInput = styled$1(FilledInput$1, styledRootConfig)('');
  const Select = /*#__PURE__*/React__namespace.forwardRef(function Select(inProps, ref) {
    const props = useThemeProps({
      name: 'MuiSelect',
      props: inProps
    });
    const {
        autoWidth = false,
        children,
        classes: classesProp = {},
        className,
        defaultOpen = false,
        displayEmpty = false,
        IconComponent = ArrowDropDownIcon,
        id,
        input,
        inputProps,
        label,
        labelId,
        MenuProps,
        multiple = false,
        native = false,
        onClose,
        onOpen,
        open,
        renderValue,
        SelectDisplayProps,
        variant: variantProp = 'outlined'
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$c);
    const inputComponent = native ? NativeSelectInput$1 : SelectInput$1;
    const muiFormControl = useFormControl();
    const fcs = formControlState({
      props,
      muiFormControl,
      states: ['variant', 'error']
    });
    const variant = fcs.variant || variantProp;
    const ownerState = _extends({}, props, {
      variant,
      classes: classesProp
    });
    const classes = useUtilityClasses$c(ownerState);
    const InputComponent = input || {
      standard: /*#__PURE__*/jsxRuntimeExports.jsx(StyledInput, {
        ownerState: ownerState
      }),
      outlined: /*#__PURE__*/jsxRuntimeExports.jsx(StyledOutlinedInput, {
        label: label,
        ownerState: ownerState
      }),
      filled: /*#__PURE__*/jsxRuntimeExports.jsx(StyledFilledInput, {
        ownerState: ownerState
      })
    }[variant];
    const inputComponentRef = useForkRef(ref, InputComponent.ref);
    return /*#__PURE__*/jsxRuntimeExports.jsx(React__namespace.Fragment, {
      children: /*#__PURE__*/React__namespace.cloneElement(InputComponent, _extends({
        // Most of the logic is implemented in `SelectInput`.
        // The `Select` component is a simple API wrapper to expose something better to play with.
        inputComponent,
        inputProps: _extends({
          children,
          error: fcs.error,
          IconComponent,
          variant,
          type: undefined,
          // We render a select. We can ignore the type provided by the `Input`.
          multiple
        }, native ? {
          id
        } : {
          autoWidth,
          defaultOpen,
          displayEmpty,
          labelId,
          MenuProps,
          onClose,
          onOpen,
          open,
          renderValue,
          SelectDisplayProps: _extends({
            id
          }, SelectDisplayProps)
        }, inputProps, {
          classes: inputProps ? deepmerge(classes, inputProps.classes) : classes
        }, input ? input.props.inputProps : {})
      }, multiple && native && variant === 'outlined' ? {
        notched: true
      } : {}, {
        ref: inputComponentRef,
        className: clsx(InputComponent.props.className, className)
      }, !input && {
        variant
      }, other))
    });
  });
  Select.muiName = 'Select';
  var Select$1 = Select;

  var DropdowCustom = function DropdowCustom(_ref) {
    var value = _ref.value,
      onChange = _ref.onChange,
      items = _ref.items,
      className = _ref.className,
      style = _ref.style;
    return /*#__PURE__*/React__namespace.createElement("div", null, /*#__PURE__*/React__namespace.createElement(FormControl$1, {
      style: style,
      className: className,
      sx: {
        m: 1,
        minWidth: 120
      },
      size: "small"
    }, /*#__PURE__*/React__namespace.createElement(Select$1, {
      value: value,
      onChange: onChange,
      displayEmpty: true,
      inputProps: {
        "aria-label": "Without label"
      }
    }, items === null || items === void 0 ? void 0 : items.map(function (item, index) {
      return /*#__PURE__*/React__namespace.createElement(MenuItem$1, {
        key: item.key,
        value: item.value
      }, item.key);
    }))));
  };

  var css_248z = ".inputDnD .form-control-file {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    height: 10em;\r\n    outline: none;\r\n    visibility: hidden;\r\n    cursor: pointer;\r\n    background-color: #c61c23;\r\n    /*box-shadow: 0 0 5px solid currentColor;*/\r\n}\r\n\r\n.inputDnD .form-control-file:before {\r\n    content: attr(data-title);\r\n    position: absolute;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 5em;\r\n    line-height: 2em;\r\n    padding-top: 1.5em;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    text-align: center;\r\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\r\n    overflow: hidden;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    color: black;\r\n    font-size: x-large;\r\n    white-space: normal;\r\n    border: dashed 3px rgba(57, 57, 57, 0.6);\r\n}\r\n\r\n.inputDnD {\r\n    margin-top: 0%;\r\n}\r\n\r\nbody {\r\n    background-color: #f7f7f9;\r\n}\r\n\r\n.uploaded_img_css {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    width: auto;\r\n    height: auto;\r\n    object-fit: cover;\r\n}";
  styleInject(css_248z);

  function getButtonUtilityClass(slot) {
    return generateUtilityClass('MuiButton', slot);
  }
  const buttonClasses = generateUtilityClasses('MuiButton', ['root', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'textSuccess', 'textError', 'textInfo', 'textWarning', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'outlinedSuccess', 'outlinedError', 'outlinedInfo', 'outlinedWarning', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'containedSuccess', 'containedError', 'containedInfo', 'containedWarning', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge']);
  var buttonClasses$1 = buttonClasses;

  /**
   * @ignore - internal component.
   */
  const ButtonGroupContext = /*#__PURE__*/React__namespace.createContext({});
  var ButtonGroupContext$1 = ButtonGroupContext;

  const _excluded$b = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
  const useUtilityClasses$b = ownerState => {
    const {
      color,
      disableElevation,
      fullWidth,
      size,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ['root', variant, `${variant}${capitalize(color)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, color === 'inherit' && 'colorInherit', disableElevation && 'disableElevation', fullWidth && 'fullWidth'],
      label: ['label'],
      startIcon: ['startIcon', `iconSize${capitalize(size)}`],
      endIcon: ['endIcon', `iconSize${capitalize(size)}`]
    };
    const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
    return _extends({}, classes, composedClasses);
  };
  const commonIconStyles = ownerState => _extends({}, ownerState.size === 'small' && {
    '& > *:nth-of-type(1)': {
      fontSize: 18
    }
  }, ownerState.size === 'medium' && {
    '& > *:nth-of-type(1)': {
      fontSize: 20
    }
  }, ownerState.size === 'large' && {
    '& > *:nth-of-type(1)': {
      fontSize: 22
    }
  });
  const ButtonRoot = styled$1(ButtonBase$1, {
    shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color)}`], styles[`size${capitalize(ownerState.size)}`], styles[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === 'inherit' && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
    }
  })(({
    theme,
    ownerState
  }) => {
    var _theme$palette$getCon, _theme$palette;
    const inheritContainedBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800];
    const inheritContainedHoverBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey.A100 : theme.palette.grey[700];
    return _extends({}, theme.typography.button, {
      minWidth: 64,
      padding: '6px 16px',
      borderRadius: (theme.vars || theme).shape.borderRadius,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': _extends({
        textDecoration: 'none',
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
        border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }, ownerState.variant === 'contained' && {
        backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
        boxShadow: (theme.vars || theme).shadows[4],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: (theme.vars || theme).shadows[2],
          backgroundColor: (theme.vars || theme).palette.grey[300]
        }
      }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: (theme.vars || theme).palette[ownerState.color].main
        }
      }),
      '&:active': _extends({}, ownerState.variant === 'contained' && {
        boxShadow: (theme.vars || theme).shadows[8]
      }),
      [`&.${buttonClasses$1.focusVisible}`]: _extends({}, ownerState.variant === 'contained' && {
        boxShadow: (theme.vars || theme).shadows[6]
      }),
      [`&.${buttonClasses$1.disabled}`]: _extends({
        color: (theme.vars || theme).palette.action.disabled
      }, ownerState.variant === 'outlined' && {
        border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
      }, ownerState.variant === 'contained' && {
        color: (theme.vars || theme).palette.action.disabled,
        boxShadow: (theme.vars || theme).shadows[0],
        backgroundColor: (theme.vars || theme).palette.action.disabledBackground
      })
    }, ownerState.variant === 'text' && {
      padding: '6px 8px'
    }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
      color: (theme.vars || theme).palette[ownerState.color].main
    }, ownerState.variant === 'outlined' && {
      padding: '5px 15px',
      border: '1px solid currentColor'
    }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
      color: (theme.vars || theme).palette[ownerState.color].main,
      border: theme.vars ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : `1px solid ${alpha(theme.palette[ownerState.color].main, 0.5)}`
    }, ownerState.variant === 'contained' && {
      color: theme.vars ?
      // this is safe because grey does not change between default light/dark mode
      theme.vars.palette.text.primary : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
      backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
      boxShadow: (theme.vars || theme).shadows[2]
    }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
      color: (theme.vars || theme).palette[ownerState.color].contrastText,
      backgroundColor: (theme.vars || theme).palette[ownerState.color].main
    }, ownerState.color === 'inherit' && {
      color: 'inherit',
      borderColor: 'currentColor'
    }, ownerState.size === 'small' && ownerState.variant === 'text' && {
      padding: '4px 5px',
      fontSize: theme.typography.pxToRem(13)
    }, ownerState.size === 'large' && ownerState.variant === 'text' && {
      padding: '8px 11px',
      fontSize: theme.typography.pxToRem(15)
    }, ownerState.size === 'small' && ownerState.variant === 'outlined' && {
      padding: '3px 9px',
      fontSize: theme.typography.pxToRem(13)
    }, ownerState.size === 'large' && ownerState.variant === 'outlined' && {
      padding: '7px 21px',
      fontSize: theme.typography.pxToRem(15)
    }, ownerState.size === 'small' && ownerState.variant === 'contained' && {
      padding: '4px 10px',
      fontSize: theme.typography.pxToRem(13)
    }, ownerState.size === 'large' && ownerState.variant === 'contained' && {
      padding: '8px 22px',
      fontSize: theme.typography.pxToRem(15)
    }, ownerState.fullWidth && {
      width: '100%'
    });
  }, ({
    ownerState
  }) => ownerState.disableElevation && {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none'
    },
    [`&.${buttonClasses$1.focusVisible}`]: {
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none'
    },
    [`&.${buttonClasses$1.disabled}`]: {
      boxShadow: 'none'
    }
  });
  const ButtonStartIcon = styled$1('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.startIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
    }
  })(({
    ownerState
  }) => _extends({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4
  }, ownerState.size === 'small' && {
    marginLeft: -2
  }, commonIconStyles(ownerState)));
  const ButtonEndIcon = styled$1('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.endIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
    }
  })(({
    ownerState
  }) => _extends({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8
  }, ownerState.size === 'small' && {
    marginRight: -2
  }, commonIconStyles(ownerState)));
  const Button = /*#__PURE__*/React__namespace.forwardRef(function Button(inProps, ref) {
    // props priority: `inProps` > `contextProps` > `themeDefaultProps`
    const contextProps = React__namespace.useContext(ButtonGroupContext$1);
    const resolvedProps = resolveProps(contextProps, inProps);
    const props = useThemeProps({
      props: resolvedProps,
      name: 'MuiButton'
    });
    const {
        children,
        color = 'primary',
        component = 'button',
        className,
        disabled = false,
        disableElevation = false,
        disableFocusRipple = false,
        endIcon: endIconProp,
        focusVisibleClassName,
        fullWidth = false,
        size = 'medium',
        startIcon: startIconProp,
        type,
        variant = 'text'
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$b);
    const ownerState = _extends({}, props, {
      color,
      component,
      disabled,
      disableElevation,
      disableFocusRipple,
      fullWidth,
      size,
      type,
      variant
    });
    const classes = useUtilityClasses$b(ownerState);
    const startIcon = startIconProp && /*#__PURE__*/jsxRuntimeExports.jsx(ButtonStartIcon, {
      className: classes.startIcon,
      ownerState: ownerState,
      children: startIconProp
    });
    const endIcon = endIconProp && /*#__PURE__*/jsxRuntimeExports.jsx(ButtonEndIcon, {
      className: classes.endIcon,
      ownerState: ownerState,
      children: endIconProp
    });
    return /*#__PURE__*/jsxRuntimeExports.jsxs(ButtonRoot, _extends({
      ownerState: ownerState,
      className: clsx(contextProps.className, classes.root, className),
      component: component,
      disabled: disabled,
      focusRipple: !disableFocusRipple,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
      ref: ref,
      type: type
    }, other, {
      classes: classes,
      children: [startIcon, children, endIcon]
    }));
  });
  var Button$1 = Button;

  function getCardUtilityClass(slot) {
    return generateUtilityClass('MuiCard', slot);
  }
  generateUtilityClasses('MuiCard', ['root']);

  const _excluded$a = ["className", "raised"];
  const useUtilityClasses$a = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, getCardUtilityClass, classes);
  };
  const CardRoot = styled$1(Paper$1, {
    name: 'MuiCard',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })(() => {
    return {
      overflow: 'hidden'
    };
  });
  const Card = /*#__PURE__*/React__namespace.forwardRef(function Card(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiCard'
    });
    const {
        className,
        raised = false
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$a);
    const ownerState = _extends({}, props, {
      raised
    });
    const classes = useUtilityClasses$a(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsx(CardRoot, _extends({
      className: clsx(classes.root, className),
      elevation: raised ? 8 : undefined,
      ref: ref,
      ownerState: ownerState
    }, other));
  });
  var Card$1 = Card;

  function getCardActionsUtilityClass(slot) {
    return generateUtilityClass('MuiCardActions', slot);
  }
  generateUtilityClasses('MuiCardActions', ['root', 'spacing']);

  const _excluded$9 = ["disableSpacing", "className"];
  const useUtilityClasses$9 = ownerState => {
    const {
      classes,
      disableSpacing
    } = ownerState;
    const slots = {
      root: ['root', !disableSpacing && 'spacing']
    };
    return composeClasses(slots, getCardActionsUtilityClass, classes);
  };
  const CardActionsRoot = styled$1('div', {
    name: 'MuiCardActions',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, !ownerState.disableSpacing && styles.spacing];
    }
  })(({
    ownerState
  }) => _extends({
    display: 'flex',
    alignItems: 'center',
    padding: 8
  }, !ownerState.disableSpacing && {
    '& > :not(:first-of-type)': {
      marginLeft: 8
    }
  }));
  const CardActions = /*#__PURE__*/React__namespace.forwardRef(function CardActions(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiCardActions'
    });
    const {
        disableSpacing = false,
        className
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$9);
    const ownerState = _extends({}, props, {
      disableSpacing
    });
    const classes = useUtilityClasses$9(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsx(CardActionsRoot, _extends({
      className: clsx(classes.root, className),
      ownerState: ownerState,
      ref: ref
    }, other));
  });
  var CardActions$1 = CardActions;

  function getCardHeaderUtilityClass(slot) {
    return generateUtilityClass('MuiCardHeader', slot);
  }
  const cardHeaderClasses = generateUtilityClasses('MuiCardHeader', ['root', 'avatar', 'action', 'content', 'title', 'subheader']);
  var cardHeaderClasses$1 = cardHeaderClasses;

  const _excluded$8 = ["action", "avatar", "className", "component", "disableTypography", "subheader", "subheaderTypographyProps", "title", "titleTypographyProps"];
  const useUtilityClasses$8 = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root'],
      avatar: ['avatar'],
      action: ['action'],
      content: ['content'],
      title: ['title'],
      subheader: ['subheader']
    };
    return composeClasses(slots, getCardHeaderUtilityClass, classes);
  };
  const CardHeaderRoot = styled$1('div', {
    name: 'MuiCardHeader',
    slot: 'Root',
    overridesResolver: (props, styles) => _extends({
      [`& .${cardHeaderClasses$1.title}`]: styles.title,
      [`& .${cardHeaderClasses$1.subheader}`]: styles.subheader
    }, styles.root)
  })({
    display: 'flex',
    alignItems: 'center',
    padding: 16
  });
  const CardHeaderAvatar = styled$1('div', {
    name: 'MuiCardHeader',
    slot: 'Avatar',
    overridesResolver: (props, styles) => styles.avatar
  })({
    display: 'flex',
    flex: '0 0 auto',
    marginRight: 16
  });
  const CardHeaderAction = styled$1('div', {
    name: 'MuiCardHeader',
    slot: 'Action',
    overridesResolver: (props, styles) => styles.action
  })({
    flex: '0 0 auto',
    alignSelf: 'flex-start',
    marginTop: -4,
    marginRight: -8,
    marginBottom: -4
  });
  const CardHeaderContent = styled$1('div', {
    name: 'MuiCardHeader',
    slot: 'Content',
    overridesResolver: (props, styles) => styles.content
  })({
    flex: '1 1 auto'
  });
  const CardHeader = /*#__PURE__*/React__namespace.forwardRef(function CardHeader(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiCardHeader'
    });
    const {
        action,
        avatar,
        className,
        component = 'div',
        disableTypography = false,
        subheader: subheaderProp,
        subheaderTypographyProps,
        title: titleProp,
        titleTypographyProps
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$8);
    const ownerState = _extends({}, props, {
      component,
      disableTypography
    });
    const classes = useUtilityClasses$8(ownerState);
    let title = titleProp;
    if (title != null && title.type !== Typography$1 && !disableTypography) {
      title = /*#__PURE__*/jsxRuntimeExports.jsx(Typography$1, _extends({
        variant: avatar ? 'body2' : 'h5',
        className: classes.title,
        component: "span",
        display: "block"
      }, titleTypographyProps, {
        children: title
      }));
    }
    let subheader = subheaderProp;
    if (subheader != null && subheader.type !== Typography$1 && !disableTypography) {
      subheader = /*#__PURE__*/jsxRuntimeExports.jsx(Typography$1, _extends({
        variant: avatar ? 'body2' : 'body1',
        className: classes.subheader,
        color: "text.secondary",
        component: "span",
        display: "block"
      }, subheaderTypographyProps, {
        children: subheader
      }));
    }
    return /*#__PURE__*/jsxRuntimeExports.jsxs(CardHeaderRoot, _extends({
      className: clsx(classes.root, className),
      as: component,
      ref: ref,
      ownerState: ownerState
    }, other, {
      children: [avatar && /*#__PURE__*/jsxRuntimeExports.jsx(CardHeaderAvatar, {
        className: classes.avatar,
        ownerState: ownerState,
        children: avatar
      }), /*#__PURE__*/jsxRuntimeExports.jsxs(CardHeaderContent, {
        className: classes.content,
        ownerState: ownerState,
        children: [title, subheader]
      }), action && /*#__PURE__*/jsxRuntimeExports.jsx(CardHeaderAction, {
        className: classes.action,
        ownerState: ownerState,
        children: action
      })]
    }));
  });
  var CardHeader$1 = CardHeader;

  function getCardMediaUtilityClass(slot) {
    return generateUtilityClass('MuiCardMedia', slot);
  }
  generateUtilityClasses('MuiCardMedia', ['root', 'media', 'img']);

  const _excluded$7 = ["children", "className", "component", "image", "src", "style"];
  const useUtilityClasses$7 = ownerState => {
    const {
      classes,
      isMediaComponent,
      isImageComponent
    } = ownerState;
    const slots = {
      root: ['root', isMediaComponent && 'media', isImageComponent && 'img']
    };
    return composeClasses(slots, getCardMediaUtilityClass, classes);
  };
  const CardMediaRoot = styled$1('div', {
    name: 'MuiCardMedia',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      const {
        isMediaComponent,
        isImageComponent
      } = ownerState;
      return [styles.root, isMediaComponent && styles.media, isImageComponent && styles.img];
    }
  })(({
    ownerState
  }) => _extends({
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }, ownerState.isMediaComponent && {
    width: '100%'
  }, ownerState.isImageComponent && {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover'
  }));
  const MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
  const IMAGE_COMPONENTS = ['picture', 'img'];
  const CardMedia = /*#__PURE__*/React__namespace.forwardRef(function CardMedia(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiCardMedia'
    });
    const {
        children,
        className,
        component = 'div',
        image,
        src,
        style
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$7);
    const isMediaComponent = MEDIA_COMPONENTS.indexOf(component) !== -1;
    const composedStyle = !isMediaComponent && image ? _extends({
      backgroundImage: `url("${image}")`
    }, style) : style;
    const ownerState = _extends({}, props, {
      component,
      isMediaComponent,
      isImageComponent: IMAGE_COMPONENTS.indexOf(component) !== -1
    });
    const classes = useUtilityClasses$7(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsx(CardMediaRoot, _extends({
      className: clsx(classes.root, className),
      as: component,
      role: !isMediaComponent && image ? 'img' : undefined,
      ref: ref,
      style: composedStyle,
      ownerState: ownerState,
      src: isMediaComponent ? image || src : undefined
    }, other, {
      children: children
    }));
  });
  var CardMedia$1 = CardMedia;

  function getCircularProgressUtilityClass(slot) {
    return generateUtilityClass('MuiCircularProgress', slot);
  }
  generateUtilityClasses('MuiCircularProgress', ['root', 'determinate', 'indeterminate', 'colorPrimary', 'colorSecondary', 'svg', 'circle', 'circleDeterminate', 'circleIndeterminate', 'circleDisableShrink']);

  const _excluded$6 = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
  let _ = t => t,
    _t,
    _t2,
    _t3,
    _t4;
  const SIZE = 44;
  const circularRotateKeyframe = keyframes(_t || (_t = _`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`));
  const circularDashKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`));
  const useUtilityClasses$6 = ownerState => {
    const {
      classes,
      variant,
      color,
      disableShrink
    } = ownerState;
    const slots = {
      root: ['root', variant, `color${capitalize(color)}`],
      svg: ['svg'],
      circle: ['circle', `circle${capitalize(variant)}`, disableShrink && 'circleDisableShrink']
    };
    return composeClasses(slots, getCircularProgressUtilityClass, classes);
  };
  const CircularProgressRoot = styled$1('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], styles[`color${capitalize(ownerState.color)}`]];
    }
  })(({
    ownerState,
    theme
  }) => _extends({
    display: 'inline-block'
  }, ownerState.variant === 'determinate' && {
    transition: theme.transitions.create('transform')
  }, ownerState.color !== 'inherit' && {
    color: (theme.vars || theme).palette[ownerState.color].main
  }), ({
    ownerState
  }) => ownerState.variant === 'indeterminate' && css(_t3 || (_t3 = _`
      animation: ${0} 1.4s linear infinite;
    `), circularRotateKeyframe));
  const CircularProgressSVG = styled$1('svg', {
    name: 'MuiCircularProgress',
    slot: 'Svg',
    overridesResolver: (props, styles) => styles.svg
  })({
    display: 'block' // Keeps the progress centered
  });

  const CircularProgressCircle = styled$1('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.circle, styles[`circle${capitalize(ownerState.variant)}`], ownerState.disableShrink && styles.circleDisableShrink];
    }
  })(({
    ownerState,
    theme
  }) => _extends({
    stroke: 'currentColor'
  }, ownerState.variant === 'determinate' && {
    transition: theme.transitions.create('stroke-dashoffset')
  }, ownerState.variant === 'indeterminate' && {
    // Some default value that looks fine waiting for the animation to kicks in.
    strokeDasharray: '80px, 200px',
    strokeDashoffset: 0 // Add the unit to fix a Edge 16 and below bug.
  }), ({
    ownerState
  }) => ownerState.variant === 'indeterminate' && !ownerState.disableShrink && css(_t4 || (_t4 = _`
      animation: ${0} 1.4s ease-in-out infinite;
    `), circularDashKeyframe));

  /**
   * ## ARIA
   *
   * If the progress bar is describing the loading progress of a particular region of a page,
   * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
   * attribute to `true` on that region until it has finished loading.
   */
  const CircularProgress = /*#__PURE__*/React__namespace.forwardRef(function CircularProgress(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiCircularProgress'
    });
    const {
        className,
        color = 'primary',
        disableShrink = false,
        size = 40,
        style,
        thickness = 3.6,
        value = 0,
        variant = 'indeterminate'
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$6);
    const ownerState = _extends({}, props, {
      color,
      disableShrink,
      size,
      thickness,
      value,
      variant
    });
    const classes = useUtilityClasses$6(ownerState);
    const circleStyle = {};
    const rootStyle = {};
    const rootProps = {};
    if (variant === 'determinate') {
      const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
      circleStyle.strokeDasharray = circumference.toFixed(3);
      rootProps['aria-valuenow'] = Math.round(value);
      circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
      rootStyle.transform = 'rotate(-90deg)';
    }
    return /*#__PURE__*/jsxRuntimeExports.jsx(CircularProgressRoot, _extends({
      className: clsx(classes.root, className),
      style: _extends({
        width: size,
        height: size
      }, rootStyle, style),
      ownerState: ownerState,
      ref: ref,
      role: "progressbar"
    }, rootProps, other, {
      children: /*#__PURE__*/jsxRuntimeExports.jsx(CircularProgressSVG, {
        className: classes.svg,
        ownerState: ownerState,
        viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
        children: /*#__PURE__*/jsxRuntimeExports.jsx(CircularProgressCircle, {
          className: classes.circle,
          style: circleStyle,
          ownerState: ownerState,
          cx: SIZE,
          cy: SIZE,
          r: (SIZE - thickness) / 2,
          fill: "none",
          strokeWidth: thickness
        })
      })
    }));
  });
  var CircularProgress$1 = CircularProgress;

  /**
   * @ignore - internal component.
   */
  const TableContext = /*#__PURE__*/React__namespace.createContext();
  var TableContext$1 = TableContext;

  function getTableUtilityClass(slot) {
    return generateUtilityClass('MuiTable', slot);
  }
  generateUtilityClasses('MuiTable', ['root', 'stickyHeader']);

  const _excluded$5 = ["className", "component", "padding", "size", "stickyHeader"];
  const useUtilityClasses$5 = ownerState => {
    const {
      classes,
      stickyHeader
    } = ownerState;
    const slots = {
      root: ['root', stickyHeader && 'stickyHeader']
    };
    return composeClasses(slots, getTableUtilityClass, classes);
  };
  const TableRoot = styled$1('table', {
    name: 'MuiTable',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
    }
  })(({
    theme,
    ownerState
  }) => _extends({
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    '& caption': _extends({}, theme.typography.body2, {
      padding: theme.spacing(2),
      color: (theme.vars || theme).palette.text.secondary,
      textAlign: 'left',
      captionSide: 'bottom'
    })
  }, ownerState.stickyHeader && {
    borderCollapse: 'separate'
  }));
  const defaultComponent$3 = 'table';
  const Table = /*#__PURE__*/React__namespace.forwardRef(function Table(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiTable'
    });
    const {
        className,
        component = defaultComponent$3,
        padding = 'normal',
        size = 'medium',
        stickyHeader = false
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$5);
    const ownerState = _extends({}, props, {
      component,
      padding,
      size,
      stickyHeader
    });
    const classes = useUtilityClasses$5(ownerState);
    const table = React__namespace.useMemo(() => ({
      padding,
      size,
      stickyHeader
    }), [padding, size, stickyHeader]);
    return /*#__PURE__*/jsxRuntimeExports.jsx(TableContext$1.Provider, {
      value: table,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(TableRoot, _extends({
        as: component,
        role: component === defaultComponent$3 ? null : 'table',
        ref: ref,
        className: clsx(classes.root, className),
        ownerState: ownerState
      }, other))
    });
  });
  var Table$1 = Table;

  /**
   * @ignore - internal component.
   */
  const Tablelvl2Context = /*#__PURE__*/React__namespace.createContext();
  var Tablelvl2Context$1 = Tablelvl2Context;

  function getTableBodyUtilityClass(slot) {
    return generateUtilityClass('MuiTableBody', slot);
  }
  generateUtilityClasses('MuiTableBody', ['root']);

  const _excluded$4 = ["className", "component"];
  const useUtilityClasses$4 = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, getTableBodyUtilityClass, classes);
  };
  const TableBodyRoot = styled$1('tbody', {
    name: 'MuiTableBody',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    display: 'table-row-group'
  });
  const tablelvl2$1 = {
    variant: 'body'
  };
  const defaultComponent$2 = 'tbody';
  const TableBody = /*#__PURE__*/React__namespace.forwardRef(function TableBody(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiTableBody'
    });
    const {
        className,
        component = defaultComponent$2
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$4);
    const ownerState = _extends({}, props, {
      component
    });
    const classes = useUtilityClasses$4(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsx(Tablelvl2Context$1.Provider, {
      value: tablelvl2$1,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(TableBodyRoot, _extends({
        className: clsx(classes.root, className),
        as: component,
        ref: ref,
        role: component === defaultComponent$2 ? null : 'rowgroup',
        ownerState: ownerState
      }, other))
    });
  });
  var TableBody$1 = TableBody;

  function getTableCellUtilityClass(slot) {
    return generateUtilityClass('MuiTableCell', slot);
  }
  const tableCellClasses = generateUtilityClasses('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);
  var tableCellClasses$1 = tableCellClasses;

  const _excluded$3 = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"];
  const useUtilityClasses$3 = ownerState => {
    const {
      classes,
      variant,
      align,
      padding,
      size,
      stickyHeader
    } = ownerState;
    const slots = {
      root: ['root', variant, stickyHeader && 'stickyHeader', align !== 'inherit' && `align${capitalize(align)}`, padding !== 'normal' && `padding${capitalize(padding)}`, `size${capitalize(size)}`]
    };
    return composeClasses(slots, getTableCellUtilityClass, classes);
  };
  const TableCellRoot = styled$1('td', {
    name: 'MuiTableCell',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.padding !== 'normal' && styles[`padding${capitalize(ownerState.padding)}`], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
    }
  })(({
    theme,
    ownerState
  }) => _extends({}, theme.typography.body2, {
    display: 'table-cell',
    verticalAlign: 'inherit',
    // Workaround for a rendering bug with spanned columns in Chrome 62.0.
    // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
    borderBottom: theme.vars ? `1px solid ${theme.vars.palette.TableCell.border}` : `1px solid
    ${theme.palette.mode === 'light' ? lighten(alpha(theme.palette.divider, 1), 0.88) : darken(alpha(theme.palette.divider, 1), 0.68)}`,
    textAlign: 'left',
    padding: 16
  }, ownerState.variant === 'head' && {
    color: (theme.vars || theme).palette.text.primary,
    lineHeight: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightMedium
  }, ownerState.variant === 'body' && {
    color: (theme.vars || theme).palette.text.primary
  }, ownerState.variant === 'footer' && {
    color: (theme.vars || theme).palette.text.secondary,
    lineHeight: theme.typography.pxToRem(21),
    fontSize: theme.typography.pxToRem(12)
  }, ownerState.size === 'small' && {
    padding: '6px 16px',
    [`&.${tableCellClasses$1.paddingCheckbox}`]: {
      width: 24,
      // prevent the checkbox column from growing
      padding: '0 12px 0 16px',
      '& > *': {
        padding: 0
      }
    }
  }, ownerState.padding === 'checkbox' && {
    width: 48,
    // prevent the checkbox column from growing
    padding: '0 0 0 4px'
  }, ownerState.padding === 'none' && {
    padding: 0
  }, ownerState.align === 'left' && {
    textAlign: 'left'
  }, ownerState.align === 'center' && {
    textAlign: 'center'
  }, ownerState.align === 'right' && {
    textAlign: 'right',
    flexDirection: 'row-reverse'
  }, ownerState.align === 'justify' && {
    textAlign: 'justify'
  }, ownerState.stickyHeader && {
    position: 'sticky',
    top: 0,
    zIndex: 2,
    backgroundColor: (theme.vars || theme).palette.background.default
  }));

  /**
   * The component renders a `<th>` element when the parent context is a header
   * or otherwise a `<td>` element.
   */
  const TableCell = /*#__PURE__*/React__namespace.forwardRef(function TableCell(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiTableCell'
    });
    const {
        align = 'inherit',
        className,
        component: componentProp,
        padding: paddingProp,
        scope: scopeProp,
        size: sizeProp,
        sortDirection,
        variant: variantProp
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$3);
    const table = React__namespace.useContext(TableContext$1);
    const tablelvl2 = React__namespace.useContext(Tablelvl2Context$1);
    const isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
    let component;
    if (componentProp) {
      component = componentProp;
    } else {
      component = isHeadCell ? 'th' : 'td';
    }
    let scope = scopeProp;
    // scope is not a valid attribute for <td/> elements.
    // source: https://html.spec.whatwg.org/multipage/tables.html#the-td-element
    if (component === 'td') {
      scope = undefined;
    } else if (!scope && isHeadCell) {
      scope = 'col';
    }
    const variant = variantProp || tablelvl2 && tablelvl2.variant;
    const ownerState = _extends({}, props, {
      align,
      component,
      padding: paddingProp || (table && table.padding ? table.padding : 'normal'),
      size: sizeProp || (table && table.size ? table.size : 'medium'),
      sortDirection,
      stickyHeader: variant === 'head' && table && table.stickyHeader,
      variant
    });
    const classes = useUtilityClasses$3(ownerState);
    let ariaSort = null;
    if (sortDirection) {
      ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
    }
    return /*#__PURE__*/jsxRuntimeExports.jsx(TableCellRoot, _extends({
      as: component,
      ref: ref,
      className: clsx(classes.root, className),
      "aria-sort": ariaSort,
      scope: scope,
      ownerState: ownerState
    }, other));
  });
  var TableCell$1 = TableCell;

  function getTableContainerUtilityClass(slot) {
    return generateUtilityClass('MuiTableContainer', slot);
  }
  generateUtilityClasses('MuiTableContainer', ['root']);

  const _excluded$2 = ["className", "component"];
  const useUtilityClasses$2 = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, getTableContainerUtilityClass, classes);
  };
  const TableContainerRoot = styled$1('div', {
    name: 'MuiTableContainer',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    width: '100%',
    overflowX: 'auto'
  });
  const TableContainer = /*#__PURE__*/React__namespace.forwardRef(function TableContainer(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiTableContainer'
    });
    const {
        className,
        component = 'div'
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$2);
    const ownerState = _extends({}, props, {
      component
    });
    const classes = useUtilityClasses$2(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsx(TableContainerRoot, _extends({
      ref: ref,
      as: component,
      className: clsx(classes.root, className),
      ownerState: ownerState
    }, other));
  });
  var TableContainer$1 = TableContainer;

  function getTableHeadUtilityClass(slot) {
    return generateUtilityClass('MuiTableHead', slot);
  }
  generateUtilityClasses('MuiTableHead', ['root']);

  const _excluded$1 = ["className", "component"];
  const useUtilityClasses$1 = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, getTableHeadUtilityClass, classes);
  };
  const TableHeadRoot = styled$1('thead', {
    name: 'MuiTableHead',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    display: 'table-header-group'
  });
  const tablelvl2 = {
    variant: 'head'
  };
  const defaultComponent$1 = 'thead';
  const TableHead = /*#__PURE__*/React__namespace.forwardRef(function TableHead(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiTableHead'
    });
    const {
        className,
        component = defaultComponent$1
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$1);
    const ownerState = _extends({}, props, {
      component
    });
    const classes = useUtilityClasses$1(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsx(Tablelvl2Context$1.Provider, {
      value: tablelvl2,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(TableHeadRoot, _extends({
        as: component,
        className: clsx(classes.root, className),
        ref: ref,
        role: component === defaultComponent$1 ? null : 'rowgroup',
        ownerState: ownerState
      }, other))
    });
  });
  var TableHead$1 = TableHead;

  function getTableRowUtilityClass(slot) {
    return generateUtilityClass('MuiTableRow', slot);
  }
  const tableRowClasses = generateUtilityClasses('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']);
  var tableRowClasses$1 = tableRowClasses;

  const _excluded = ["className", "component", "hover", "selected"];
  const useUtilityClasses = ownerState => {
    const {
      classes,
      selected,
      hover,
      head,
      footer
    } = ownerState;
    const slots = {
      root: ['root', selected && 'selected', hover && 'hover', head && 'head', footer && 'footer']
    };
    return composeClasses(slots, getTableRowUtilityClass, classes);
  };
  const TableRowRoot = styled$1('tr', {
    name: 'MuiTableRow',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
    }
  })(({
    theme
  }) => ({
    color: 'inherit',
    display: 'table-row',
    verticalAlign: 'middle',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    [`&.${tableRowClasses$1.hover}:hover`]: {
      backgroundColor: (theme.vars || theme).palette.action.hover
    },
    [`&.${tableRowClasses$1.selected}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      '&:hover': {
        backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
      }
    }
  }));
  const defaultComponent = 'tr';
  /**
   * Will automatically set dynamic row height
   * based on the material table element parent (head, body, etc).
   */
  const TableRow = /*#__PURE__*/React__namespace.forwardRef(function TableRow(inProps, ref) {
    const props = useThemeProps({
      props: inProps,
      name: 'MuiTableRow'
    });
    const {
        className,
        component = defaultComponent,
        hover = false,
        selected = false
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded);
    const tablelvl2 = React__namespace.useContext(Tablelvl2Context$1);
    const ownerState = _extends({}, props, {
      component,
      hover,
      selected,
      head: tablelvl2 && tablelvl2.variant === 'head',
      footer: tablelvl2 && tablelvl2.variant === 'footer'
    });
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsx(TableRowRoot, _extends({
      as: component,
      ref: ref,
      className: clsx(classes.root, className),
      role: component === defaultComponent ? null : 'row',
      ownerState: ownerState
    }, other));
  });
  var TableRow$1 = TableRow;

  function Upload() {
    var _items$,
      _this = this;
    var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      imageUrl = _useState2[0],
      setImageUrl = _useState2[1];
    var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShowButton = _useState4[0],
      setIsShowButton = _useState4[1];
    var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];
    var history = useHistory();
    var items = [{
      value: 1,
      key: "a"
    }, {
      value: 2,
      key: "b"
    }];
    var _useState7 = React.useState((_items$ = items[0]) !== null && _items$ !== void 0 ? _items$ : 0),
      _useState8 = _slicedToArray(_useState7, 2),
      value1item = _useState8[0],
      setValue1item = _useState8[1];
    var readUrl = function readUrl(e) {
      var input = e.target.files[0];
      if (input) {
        var reader = new FileReader();
        reader.onload = function (a) {
          var imgName = input.name;
          e.target.setAttribute("data-title", imgName);
          var image = new Image();
          image.src = a.target.result;
          var imageUrl = URL.createObjectURL(input);
          setImageUrl(imageUrl);
          image.onload = function () {
            this.height;
            this.width;
          };
        };
        reader.readAsDataURL(input);
        console.log(input);
        setIsShowButton(true);
        var formData = new FormData();
        formData.append("image", input);
        fetch("http://localhost:8000/upload", {
          method: "POST",
          body: formData
        }).then(function (response) {
          // Handle the response from the server
        })["catch"](function (error) {
          // Handle errors
        });
      }
    };
    var submitImage = function submitImage() {
      setIsLoading(true);
      setTimeout(function () {
        history.push("/detail/".concat(imageUrl));
      }, 3000);
    };
    var handleChange = function handleChange(event) {
      setValue1item(event.target.value);
      console.log(event.target);
    };
    var handleClose = function handleClose() {
      setIsLoading(false);
    };
    var onSubmit = function onSubmit(e) {
      e.preventDefault();
      alert(JSON.stringify(_this.state.item));
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container-fuild"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: onSubmit
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-4"
    }, /*#__PURE__*/React.createElement("label", {
      "for": ""
    }, "\u90E8\u6750(\u30C7\u30E2\u7528)"), /*#__PURE__*/React.createElement(DropdowCustom, {
      onChange: handleChange,
      className: "form-control",
      items: items,
      value: value1item
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-4"
    }, /*#__PURE__*/React.createElement("label", {
      "for": ""
    }, "\u90E8\u6750(\u30C7\u30E2\u7528)"), /*#__PURE__*/React.createElement(DropdowCustom, {
      className: "form-control",
      items: items
    })), /*#__PURE__*/React.createElement("div", {
      className: "col-4"
    }, /*#__PURE__*/React.createElement("label", {
      "for": ""
    }, "\u90E8\u6750(\u30C7\u30E2\u7528)"), /*#__PURE__*/React.createElement(DropdowCustom, {
      className: "form-control",
      items: items
    }))), /*#__PURE__*/React.createElement("div", {
      className: "row mt-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-12"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group inputDnD"
    }, /*#__PURE__*/React.createElement("input", {
      type: "file",
      onChange: readUrl,
      className: "form-control-file text-primary font-weight-bold",
      id: "inputFile",
      accept: "image/*",
      "data-title": "\u753B\u50CF\u30C9\u30E9\u30C3\u30B0\uFF06\u30C9\u30ED\u30C3\u30D7"
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: "",
      name: "width",
      id: "width-image",
      hidden: true
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: "",
      name: "height",
      id: "height-image",
      hidden: true
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: "",
      name: "name",
      id: "name-image",
      hidden: true
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: "",
      name: "dateCreate",
      id: "date-create-image",
      hidden: true
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: "",
      name: "imageBase64",
      id: "base64-image",
      hidden: true
    }), /*#__PURE__*/React.createElement("div", null, isShowButton && /*#__PURE__*/React.createElement(Button$1, {
      id: "btn_submit",
      onClick: submitImage,
      variant: "contained"
    }, "AI\u5224\u5B9A\u5B9F\u884C")), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      id: "image-submit",
      hidden: true
    })))), isLoading && /*#__PURE__*/React.createElement("div", {
      id: "loader"
    }, /*#__PURE__*/React.createElement(Backdrop$1, {
      sx: {
        color: "#fff",
        zIndex: function zIndex(theme) {
          return theme.zIndex.drawer + 1;
        }
      },
      open: isLoading,
      onClick: handleClose
    }, /*#__PURE__*/React.createElement(CircularProgress$1, {
      color: "inherit"
    }), /*#__PURE__*/React.createElement("span", {
      className: ""
    }, "AI\u5224\u5B9A\u4E2D...\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002"))), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement("img", {
      className: "uploaded_img_css",
      id: "uploaded_img",
      src: imageUrl
    })))))));
  }

  var CardImage = function CardImage() {
    var manual_img = "/contents/manual_img.png";
    return /*#__PURE__*/React__namespace.createElement(Card$1, null, /*#__PURE__*/React__namespace.createElement(CardHeader$1, {
      title: "Sa",
      subheader: "September 14, 2016"
    }), /*#__PURE__*/React__namespace.createElement(CardMedia$1, {
      component: "img",
      height: "100",
      image: manual_img,
      alt: "Paella dish"
    }), /*#__PURE__*/React__namespace.createElement(CardActions$1, null));
  };

  function createData(name, calories, fat, carbs, protein) {
    return {
      name: name,
      calories: calories,
      fat: fat,
      carbs: carbs,
      protein: protein
    };
  }
  function Detail(image) {
    var halfbutton = {
      width: "50%"
    };
    var rows = [createData("Frozen yoghurt", 159, 6.0, 24, 4.0), createData("Ice cream sandwich", 237, 9.0, 37, 4.3), createData("Eclair", 262, 16.0, 24, 6.0), createData("Cupcake", 305, 3.7, 67, 4.3), createData("Gingerbread", 356, 16.0, 49, 3.9)];
    var toggleLabel = function toggleLabel(input) {
      console.log(input);
      var text = input.target.innerHTML;
      if (text == "-") {
        input.target.innerHTML = "〇";
      } else {
        input.target.innerHTML = "-";
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container-fuild"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("h2", null, "\u5065\u5168\u5EA6\u8A3A\u65AD\uFF08AI\u304C\u5224\u5B9A\u3057\u305F\u640D\u50B7\u7A2E\u985E\u3092\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u4FEE\u6B63\u3057\u3066\u304F\u3060\u3055\u3044\uFF09"), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-2"
    }), /*#__PURE__*/React.createElement(CardImage, null), /*#__PURE__*/React.createElement("div", {
      className: "col-md-2 card card-image m-2"
    }, /*#__PURE__*/React.createElement("h5", {
      className: "card-title text-center"
    }, "\u3046\u304D"), /*#__PURE__*/React.createElement("div", {
      className: "form-check form-switch"
    }, /*#__PURE__*/React.createElement("label", {
      className: "form-check-label",
      "for": "flexSwitchCheckDefault"
    }, "\u3042\u308A/\u306A\u3057"), /*#__PURE__*/React.createElement("input", {
      className: "form-check-input",
      type: "checkbox",
      id: "flexSwitchCheckDefault"
    }))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(TableContainer$1, {
      component: Paper$1
    }, /*#__PURE__*/React.createElement(Table$1, {
      sx: {
        minWidth: 650
      },
      "aria-label": "simple table"
    }, /*#__PURE__*/React.createElement(TableHead$1, null, /*#__PURE__*/React.createElement(TableRow$1, null, /*#__PURE__*/React.createElement(TableCell$1, null, "\u640D\u50B7\u7A2E\u985E"), /*#__PURE__*/React.createElement(TableCell$1, {
      align: "center"
    }, "a"), /*#__PURE__*/React.createElement(TableCell$1, {
      align: "center"
    }, "b"), /*#__PURE__*/React.createElement(TableCell$1, {
      align: "center"
    }, "c"), /*#__PURE__*/React.createElement(TableCell$1, {
      align: "center"
    }, "d"))), /*#__PURE__*/React.createElement(TableBody$1, null, rows.map(function (row, index) {
      return /*#__PURE__*/React.createElement(TableRow$1, {
        key: row.name,
        sx: {
          "&:last-child td, &:last-child th": {
            border: 0
          }
        }
      }, /*#__PURE__*/React.createElement(TableCell$1, {
        component: "th",
        scope: "row"
      }, row.name), /*#__PURE__*/React.createElement(TableCell$1, {
        align: "center"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        id: 'a' + index,
        "class": "btn btn-light",
        onClick: toggleLabel,
        style: halfbutton
      }, "-")), /*#__PURE__*/React.createElement(TableCell$1, {
        align: "center"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        id: 'b' + index,
        "class": "btn btn-light",
        onClick: toggleLabel,
        style: halfbutton
      }, "-")), /*#__PURE__*/React.createElement(TableCell$1, {
        align: "center"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        id: 'c' + index,
        "class": "btn btn-light",
        onClick: toggleLabel,
        style: halfbutton
      }, "-")), /*#__PURE__*/React.createElement(TableCell$1, {
        align: "center"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        id: 'd' + index,
        "class": "btn btn-light",
        onClick: toggleLabel,
        style: halfbutton
      }, "-")));
    })))), /*#__PURE__*/React.createElement("form", {
      method: "post"
    }, /*#__PURE__*/React.createElement("div", {
      "class": "row"
    }, /*#__PURE__*/React.createElement("div", {
      "class": "col-4"
    }, /*#__PURE__*/React.createElement("label", {
      "for": "kenzendo_btn"
    }, "\u3000"), /*#__PURE__*/React.createElement("input", {
      id: "kenzendo_btn",
      type: "button",
      "class": "btn btn-primary form-control",
      onclick: "calcKenzendo()",
      value: "\u5065\u5168\u5EA6\u7B97\u51FA"
    })), /*#__PURE__*/React.createElement("div", {
      "class": "col-5",
      style: {
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("label", {
      "for": "kenzendo"
    }, "\u5065\u5168\u5EA6AI\u7B97\u51FA:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      "class": "form-control",
      id: "lblKenzendo",
      value: "\u3007.\u3007"
    }))), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "listButton",
      id: "listButton"
    }), /*#__PURE__*/React.createElement("div", {
      "class": "row"
    }, /*#__PURE__*/React.createElement("div", {
      "class": "col-4"
    }, /*#__PURE__*/React.createElement("label", {
      "for": "kenzendo_btn"
    }, "\u3000"), /*#__PURE__*/React.createElement("input", {
      id: "kenzendo_btn",
      type: "button",
      "class": "btn btn-primary form-control",
      onclick: "calcKenzendo()",
      value: "\u5065\u5168\u5EA6AI\u7B97\u51FA"
    })), /*#__PURE__*/React.createElement("div", {
      "class": "col-5",
      style: {
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("label", {
      "for": "kenzendo"
    }, "\u5065\u5168\u5EA6\uFF08AI\u7B97\u51FA\uFF09:"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      "class": "form-control",
      id: "lblKenzendoAi",
      value: "0",
      min: "0",
      max: "100"
    }))), /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "listButton",
      id: "listButton"
    }), /*#__PURE__*/React.createElement("div", {
      "class": "row"
    }, /*#__PURE__*/React.createElement("div", {
      "class": "col-4"
    }), /*#__PURE__*/React.createElement("div", {
      "class": "col-5",
      style: {
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("label", {
      "for": "kenzendo"
    }, "\u5065\u5168\u5EA6\u2192\u5065\u5168\u5EA6\uFF08\u70B9\u691C\u8005\u306B\u3088\u308B\u4FEE\u6B63\uFF3B\u5FC5\u8981\u306B\u5FDC\u3058\uFF3D\uFF09:"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      "class": "form-control",
      id: "lblKenzendoUser",
      value: "0",
      min: "'0'",
      max: "100"
    })), /*#__PURE__*/React.createElement("div", {
      "class": "col-3"
    }, /*#__PURE__*/React.createElement("label", {
      "for": "kenzendo_btn"
    }, "\u3000"), /*#__PURE__*/React.createElement("input", {
      type: "button",
      "class": "btn btn-primary form-control",
      onclick: "submit()",
      value: "\u5065\u5168\u5EA6\u78BA\u5B9A"
    }))))))));
  }

  function App() {
    var style1 = {
      display: "inline"
    };
    var manual_img = "/contents/manual_img.png";
    console.log("aaa" + manual_img);
    return /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement("nav", {
      className: "navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3"
    }, /*#__PURE__*/React.createElement("div", {
      "class": "container-fluid"
    }, /*#__PURE__*/React.createElement("a", {
      className: "navbar-brand"
    }, "BM Star AI\u8A3A\u65AD\uFF08\u30D9\u30FC\u30BF\u7248\uFF09"), /*#__PURE__*/React.createElement("button", {
      className: "navbar-toggler"
    }, /*#__PURE__*/React.createElement("span", {
      className: "navbar-toggler-icon"
    })), /*#__PURE__*/React.createElement("ul", {
      className: "navbar-nav flex-grow-1"
    }, /*#__PURE__*/React.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/React.createElement(Link, {
      className: "nav-link text-dark",
      to: "/upload"
    }, "\u8A3A\u65AD\u753B\u9762")), /*#__PURE__*/React.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/React.createElement(Link, {
      className: "nav-link text-dark",
      to: "/list"
    }, "\u8A3A\u65AD\u5C65\u6B74\u95B2\u89A7")), /*#__PURE__*/React.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/React.createElement(Link, {
      className: "nav-link text-dark",
      to: "/"
    }, "\u7D44\u7E54\u7BA1\u7406"))), /*#__PURE__*/React.createElement("ul", {
      className: "nav navbar-nav navbar-right"
    }, /*#__PURE__*/React.createElement(Button$1, {
      variant: "contained"
    }, /*#__PURE__*/React.createElement("a", {
      className: "navbar-brand nav_guide text-white",
      target: "_blank",
      rel: "noopener noreferrer",
      style: style1
    }, /*#__PURE__*/React.createElement("img", {
      src: manual_img,
      width: "20",
      height: "30",
      className: "d-inline-block align-top wakaba",
      alt: ""
    }), "\u5229\u7528\u30AC\u30A4\u30C9")), /*#__PURE__*/React.createElement("li", {
      className: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      className: "nav-link"
    }, "\u30ED\u30B0\u30A2\u30A6\u30C8"))))), /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
      path: "/upload"
    }, /*#__PURE__*/React.createElement(Upload, null)), /*#__PURE__*/React.createElement(Route, {
      path: "/list"
    }, /*#__PURE__*/React.createElement(Pager, {
      render: function render(pagerState) {
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ExpenseEntryItemList, {
          items: pagerState.items,
          onClick: pagerState.deleteHandler
        }));
      }
    })), /*#__PURE__*/React.createElement(Route, {
      path: "/detail/:id"
    }, /*#__PURE__*/React.createElement(Detail, null)), /*#__PURE__*/React.createElement(Route, {
      path: "/"
    }, /*#__PURE__*/React.createElement(Upload, null))));
  }

  ({
    item: 1,
    amount: 30.00,
    spendDate: new Date("2020-10-10").toLocaleString(),
    category: "Food"
  });
  ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)), document.getElementById('root'));

})(React, ReactDOM);
