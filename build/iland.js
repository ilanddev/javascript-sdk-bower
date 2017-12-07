(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"), require("rxjs"), require("keycloak-js"));
	else if(typeof define === 'function' && define.amd)
		define("iland", ["axios", "rxjs", "keycloak-js"], factory);
	else if(typeof exports === 'object')
		exports["iland"] = factory(require("axios"), require("rxjs"), require("keycloak-js"));
	else
		root["iland"] = factory(root["axios"], root["rxjs"], root["Keycloak"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_35__, __WEBPACK_EXTERNAL_MODULE_43__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(10);
var DEFAULT_API_URL = 'https://api.ilandcloud.com/v1';
var Iland = (function () {
    function Iland() {
    }
    Iland.init = function (_authProvider, _config) {
        this._authProvider = _authProvider;
        var baseUrl = _config !== undefined && _config.baseUrl ? _config.baseUrl : DEFAULT_API_URL;
        this._http = new http_1.Http(baseUrl);
    };
    Iland.getAuthProvider = function () {
        if (Iland._authProvider === undefined) {
            throw new Error('The Iland SDK has not yet been initialized.');
        }
        return Iland._authProvider;
    };
    Iland.getHttp = function () {
        if (Iland._http === undefined) {
            throw new Error('The Iland SDK has not yet been initialized.');
        }
        return Iland._http;
    };
    return Iland;
}());
exports.Iland = Iland;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Entity.
 */
var Entity = (function () {
    function Entity(_apiEntity) {
        this._apiEntity = _apiEntity;
    }
    Object.defineProperty(Entity.prototype, "name", {
        /**
         * Gets the name.
         * @returns {string} name
         */
        get: function () {
            return this._apiEntity.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "uuid", {
        /**
         * Gets the UUID.
         * @returns {string} UUID
         */
        get: function () {
            return this._apiEntity.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "deleted", {
        /**
         * Indicates whether the entity is deleted.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiEntity.deleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "updatedDate", {
        /**
         * Gets the last date that the entity was updated.
         * @returns {Date} last updated date
         */
        get: function () {
            return new Date(this._apiEntity.updated_date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "deletedDate", {
        /**
         * Gets the date that the entity was deleted, or null if it is not deleted.
         * @returns {Date} deleted date or null if not applicable
         */
        get: function () {
            return this._apiEntity.deleted_date ? new Date(this._apiEntity.deleted_date) : null;
        },
        enumerable: true,
        configurable: true
    });
    return Entity;
}());
exports.Entity = Entity;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var task_1 = __webpack_require__(12);
var entity_1 = __webpack_require__(2);
var iland_1 = __webpack_require__(1);
var vnic_1 = __webpack_require__(13);
var virtual_disk_1 = __webpack_require__(14);
var metadata_1 = __webpack_require__(15);
var backup_restore_point_1 = __webpack_require__(16);
var snapshot_1 = __webpack_require__(17);
var screen_ticket_1 = __webpack_require__(18);
var mks_screen_ticket_1 = __webpack_require__(19);
var bill_1 = __webpack_require__(4);
var billing_summary_1 = __webpack_require__(21);
/**
 * Virtual Machine.
 */
var Vm = (function (_super) {
    tslib_1.__extends(Vm, _super);
    function Vm(_apiVm) {
        var _this = _super.call(this, _apiVm) || this;
        _this._apiVm = _apiVm;
        return _this;
    }
    /**
     * Gets a VM by UUID.
     * @param uuid VM UUID
     * @returns {Promise<Vm>} promise that resolves with the VM
     */
    Vm.getVm = function (uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vm/" + uuid).then(function (response) {
                        var apiVm = response.data;
                        return new Vm(apiVm);
                    })];
            });
        });
    };
    Object.defineProperty(Vm.prototype, "entityType", {
        get: function () {
            return 'VM';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vmLocalId", {
        /**
         * Gets the VM's local ID.
         * @returns {string} the VM's local ID
         */
        get: function () {
            return this._apiVm.vm_local_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vimDatastoreRef", {
        /**
         * Gets the VM's datastore reference.
         * @returns {string} datastore reference
         */
        get: function () {
            return this._apiVm.vim_datastore_ref;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vdcUuid", {
        /**
         * Gets the UUID of the vDC that the VM belongs to.
         * @returns {string} vDC UUID
         */
        get: function () {
            return this._apiVm.vdc_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vcloudHref", {
        /**
         * Gets the HREF of the vCloud Director instance that this VM is associated with.
         * @returns {string} vCloud HREF
         */
        get: function () {
            return this._apiVm.vcloud_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vcenterName", {
        /**
         * Gets the name of the vCenter server that the VM is associated with.
         * @returns {string} vCenter name
         */
        get: function () {
            return this._apiVm.vcenter_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vcenterMoRef", {
        /**
         * Gets the VM'r vCenter reference.
         * @returns {string} vCenter reference
         */
        get: function () {
            return this._apiVm.vcenter_moref;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vcenterInstanceUuid", {
        /**
         * Gets the UUID of the vCenter instance that the VM is associated with.
         * @returns {string} vCenter UUID
         */
        get: function () {
            return this._apiVm.vcenter_instance_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vcenterHref", {
        /**
         * Gets the HREF of the vCenter instance that the VM is associated with.
         * @returns {string} vCenter HREF
         */
        get: function () {
            return this._apiVm.vcenter_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "vappUuid", {
        /**
         * Gets the UUID of the vApp that this VM belongs to.
         * @returns {string} vApp UUID
         */
        get: function () {
            return this._apiVm.vapp_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "storageProfiles", {
        /**
         * Gets the list of storage profiles that are available to this VM.
         * @returns {Array<string>} list of storage profile UUIDs
         */
        get: function () {
            return this._apiVm.storage_profiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "powerStatus", {
        /**
         * Gets the power status of the VM.
         * @returns {VmPowerStatus} power status identifier
         */
        get: function () {
            if (this._apiVm.deployed && this._apiVm.status === 'POWERED_OFF') {
                return 'PARTIALLY_POWERED_OFF';
            }
            else {
                return this._apiVm.status;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "operatingSystem", {
        /**
         * Gets the VM's operating system.
         * @returns {OperatingSystem} operating system
         */
        get: function () {
            return this._apiVm.os;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "orgUuid", {
        /**
         * Gets the UUID of the Organization that the VM belongs to.
         * @returns {string} Org UUID
         */
        get: function () {
            return this._apiVm.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "locationId", {
        /**
         * Gets the datacenter location identifier for the VM.
         * @returns {string} datacenter location ID
         */
        get: function () {
            return this._apiVm.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "insertedMediaName", {
        /**
         * Gets the name of the media that is currently inserted in the VM.
         * @returns {string} the name of the inserted media or null if no media is currently inserted
         */
        get: function () {
            return this._apiVm.inserted_media_name && this._apiVm.inserted_media_name.length > 0 ?
                this._apiVm.inserted_media_name : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "mediaInserted", {
        /**
         * Indicates whether there is currently a media inserted in the VM.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiVm.media_inserted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "hardwareVersion", {
        /**
         * Gets the VM's hardware version.
         * @returns {string} hardware version
         */
        get: function () {
            return this._apiVm.hardware_version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "description", {
        /**
         * Gets the VM's description.
         * @returns {string} description
         */
        get: function () {
            return this._apiVm.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "deployed", {
        /**
         * Indicates whether the VM is deployed.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiVm.deployed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "createdDate", {
        /**
         * Gets the date that the VM was created.
         * @returns {Date} creation date
         */
        get: function () {
            return this._apiVm.created_date !== null ? new Date(this._apiVm.created_date) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "numberOfCpus", {
        /**
         * Gets the number of CPUs for the VM.
         * @returns {number} number of CPUs
         */
        get: function () {
            return this._apiVm.cpus_number;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "coresPerSocket", {
        /**
         * Gets the number of cores per CPU socket.
         * @returns {number} cores per CPU socket
         */
        get: function () {
            return this._apiVm.cores_per_socket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vm.prototype, "memorySize", {
        /**
         * Gets the VM's configured memory in MB.
         * @returns {number} the VM's configured memory in MB.
         */
        get: function () {
            return this._apiVm.memory_size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Vm.prototype.toString = function () {
        return JSON.stringify(this._apiVm, undefined, 2);
    };
    Object.defineProperty(Vm.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VmJson} the API VM object
         */
        get: function () {
            return Object.assign({}, this._apiVm);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the VM data by retrieving it from the API again.
     * @returns {Promise<Vm>}
     */
    Vm.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vm/" + this.uuid).then(function (response) {
                        _this._apiVm = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Gets the list of VNICs for this VM.
     * @returns {Promise<Vnic[]>}
     */
    Vm.prototype.getVnics = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vm/" + this.uuid + "/vnics").then(function (response) {
                        var apiVnics = response.data;
                        return apiVnics.map(function (apiVnic) { return new vnic_1.Vnic(apiVnic); });
                    })];
            });
        });
    };
    /**
     * Updates the VM's description.
     * @param description the new description
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateDescription = function (description) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var spec;
            return tslib_1.__generator(this, function (_a) {
                spec = {
                    description: description
                };
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vm/" + this.uuid + "/description", spec).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Updates the VM's name.
     * @param newName the new name
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateName = function (newName) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var json;
            return tslib_1.__generator(this, function (_a) {
                json = {
                    name: newName
                };
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vm/" + this.uuid + "/name", json).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Edit the memory size of the VM.
     * @param memorySizeMb {number} the new memory size in MB
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateMemorySize = function (memorySizeMb) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var spec;
            return tslib_1.__generator(this, function (_a) {
                spec = {
                    memory_size: String(memorySizeMb)
                };
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vm/" + this.uuid + "/mem", spec).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Edit the number of CPUs.
     * @param request {VmCpuUpdateRequest} specifying new number of CPUs
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateNumberOfCpus = function (request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vm/" + this.uuid + "/cpu", request.json).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Gets the VM's virtual disks.
     * @returns {Promise<VirtualDisk[]>} array of virtual disks
     */
    Vm.prototype.getVirtualDisks = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vm/" + this.uuid + "/virtual-disks").then(function (response) {
                        var apiDisks = response.data;
                        return apiDisks.map(function (apiDisk) { return new virtual_disk_1.VirtualDisk(apiDisk); });
                    })];
            });
        });
    };
    /**
     * Update the VM's virtual disks.
     * @param {Array<VirtualDiskJson>} disksJson array of specs for new disks
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateVirtualDisks = function (disksJson) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vm/" + this.uuid + "/virtual-disks", disksJson).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Update a virtual disk that is attached to this VM.
     * @param {VirtualDiskJson} diskJson updated specification for the disk
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateVirtualDisk = function (diskJson) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vm/" + this.uuid + "/virtual-disk", diskJson).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Create a new virtual disk for this VM.
     * @param {VirtualDiskJson} diskJson spec for the new disk
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.createVirtualDisk = function (diskJson) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vm/" + this.uuid + "/virtual-disk", diskJson).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Delete a virtual disk.
     * @param {string} name the name of the disk to delete
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.deleteVirtualDisk = function (name) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vm/" + this.uuid + "/disks/" + name).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Gets the VM's metadata.
     * @returns {Promise<Metadata<MetadataType>[]>}
     */
    Vm.prototype.getMetadata = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vm/" + this.uuid + "/metadata").then(function (response) {
                        var jsonMetadata = response.data;
                        return jsonMetadata.map(function (json) {
                            switch (json.type) {
                                case 'number':
                                    return new metadata_1.Metadata(json);
                                case 'boolean':
                                    return new metadata_1.Metadata(json);
                                case 'datetime':
                                    return new metadata_1.Metadata(json);
                                case 'string':
                                    return new metadata_1.Metadata(json);
                            }
                            throw new Error("Metadata with type " + json.type + " is unknown.");
                        });
                    })];
            });
        });
    };
    /**
     * Updates the VM's metadata.
     * @param {Array<MetadataJson<MetadataType>>} metadataJson the new array of metadata
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateMetadata = function (metadataJson) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vm/" + this.uuid + "/metadata", metadataJson).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Deletes a metadata entry.
     * @param {string} metadataKey the key of the metadata entry to delete
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.deleteMetadata = function (metadataKey) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vm/" + this.uuid + "/metadata/" + metadataKey).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Deletes this VM.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.delete = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vm/" + this.uuid).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Performs a power operation on the VM.
     * @param {VmPowerOperation} type the type of power operation to perform
     * @param {boolean} forceGuestCustomization whether to force guest customization (only applicable when powering on)
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.performPowerOperation = function (type, forceGuestCustomization) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var config;
            return tslib_1.__generator(this, function (_a) {
                config = undefined;
                if (type === 'poweron' && forceGuestCustomization) {
                    config = {
                        params: {
                            forceGuestCustomization: forceGuestCustomization
                        }
                    };
                }
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vm/" + this.uuid + "/" + type, undefined, config).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Powers on the VM.
     * @param {boolean} forceGuestCustomization whether to force guest customization
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.powerOn = function (forceGuestCustomization) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.performPowerOperation('poweron', forceGuestCustomization)];
            });
        });
    };
    /**
     * Powers off the VM.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.powerOff = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.performPowerOperation('poweroff')];
            });
        });
    };
    /**
     * Suspends VM.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.suspend = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.performPowerOperation('suspend')];
            });
        });
    };
    /**
     * Shuts down the VMs guest operating system.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.shutdownGuestOs = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.performPowerOperation('shutdown')];
            });
        });
    };
    /**
     * Performs a hard reset power operation.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.reset = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.performPowerOperation('reset')];
            });
        });
    };
    /**
     * Requests that the guest OS restart.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.rebootGuestOs = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.performPowerOperation('reboot')];
            });
        });
    };
    /**
     * Gets the VMs available backup restore points.
     * @returns {Promise<BackupRestorePoint[]>} promise that resolves with the list of backup restore points
     */
    Vm.prototype.getBackupRestorePoints = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vm/" + this.uuid + "/backups").then(function (response) {
                        var restorePointsJson = response.data;
                        return restorePointsJson.map(function (restorePointJson) { return new backup_restore_point_1.BackupRestorePoint(restorePointJson); });
                    })];
            });
        });
    };
    /**
     * Restores a backup of the VM.
     * @param {Date} timestamp the timestamp of the restore point to be restored
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.restoreBackup = function (timestamp) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var json;
            return tslib_1.__generator(this, function (_a) {
                json = {
                    time: timestamp.getTime()
                };
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vm/" + this.uuid + "/restore", json).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Gets the VMs snapshot details.
     * @returns {Promise<Snapshot>} promise that resolves with the current snapshot details
     * @throws {ApiError} as NotFoundError if the VM doesn't currently have a snapshot
     */
    Vm.prototype.getSnapshot = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vm/" + this.uuid + "/snapshot").then(function (response) {
                        var json = response.data;
                        return new snapshot_1.Snapshot(json);
                    })];
            });
        });
    };
    /**
     * Creates a snapshot of the VM.
     * @param {VmCreateSnapshotRequest} options the snapshot creation options
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.createSnapshot = function (options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vm/" + this.uuid + "/snapshot", options.json).then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Restore the VMs snapshot.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.restoreSnapshot = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vm/" + this.uuid + "/snapshot/restore").then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Deletes the VMs snapshot.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.deleteSnapshot = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/vm/" + this.uuid + "/snapshot").then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Updates the VM's virtual hardware to the latest version available.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.updateVirtualHardwareVersion = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vm/" + this.uuid + "/virtual-hardware-version").then(function (response) {
                        var apiTask = response.data;
                        return new task_1.Task(apiTask);
                    })];
            });
        });
    };
    /**
     * Gets the VMs screen ticket for a remote console connection.
     * @returns {Promise<ScreenTicket>} promise that resolves with the screen ticket
     */
    Vm.prototype.getScreenTicket = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vm/" + this.uuid + "/screen-ticket").then(function (response) {
                        var json = response.data;
                        return new screen_ticket_1.ScreenTicket(json);
                    })];
            });
        });
    };
    /**
     * Gets the VMs MKS screen ticket for a remote console connection.
     * @returns {Promise<MksScreenTicket>} promise that resolves with the MKS screen ticket
     */
    Vm.prototype.getMksScreenTicket = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vm/" + this.uuid + "/mks-screen-ticket").then(function (response) {
                        var json = response.data;
                        return new mks_screen_ticket_1.MksScreenTicket(json);
                    })];
            });
        });
    };
    /**
     * Gets the bill for the VM for the specified month and year. Month and year default to current month and year if left
     * unspecified.
     * @returns {Promise<Bill>} promise that resolves with the Bill
     */
    Vm.prototype.getBill = function (month, year) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vm/" + this.uuid + "/bill", {
                        params: {
                            month: month,
                            year: year
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return new bill_1.Bill(json);
                    })];
            });
        });
    };
    /**
     * Gets the current billing summary for the VM.
     * @returns {Promise<BillingSummary>} promise that resolves with the current billing summary
     */
    Vm.prototype.getCurrentBillingSummary = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vm/" + this.uuid + "/billing/current").then(function (response) {
                        var json = response.data;
                        return new billing_summary_1.BillingSummary(json);
                    })];
            });
        });
    };
    /**
     * Inserts a specified media into the VM.
     * @param {string} mediaUuid the UUID of the media to insert
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.insertMedia = function (mediaUuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var json;
            return tslib_1.__generator(this, function (_a) {
                json = {
                    media: mediaUuid
                };
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vm/" + this.uuid + "/media/insert", json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Ejects any media from the VM.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.ejectMedia = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/vm/" + this.uuid + "/media/eject").then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    /**
     * Move the VM to a different storage profile.
     * @returns {Promise<Task>} task promise
     */
    Vm.prototype.relocate = function (storageProfileUuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var json;
            return tslib_1.__generator(this, function (_a) {
                json = {
                    storage_profile: storageProfileUuid
                };
                return [2 /*return*/, iland_1.Iland.getHttp().put("/vm/" + this.uuid + "/storage-profile", json).then(function (response) {
                        var json = response.data;
                        return new task_1.Task(json);
                    })];
            });
        });
    };
    return Vm;
}(entity_1.Entity));
exports.Vm = Vm;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bill_line_item_1 = __webpack_require__(20);
/**
 * Bill Ticket.
 */
var Bill = (function () {
    function Bill(_json) {
        this._json = _json;
    }
    Object.defineProperty(Bill.prototype, "entityUuid", {
        /**
         * Gets the UUID of the entity that the bill is associated with.
         * @returns {string} entity UUID
         */
        get: function () {
            return this._json.entity_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "totalCost", {
        /**
         * Gets the total cost.
         * @returns {number} total
         */
        get: function () {
            return this._json.total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "cpuCost", {
        /**
         * Gets the cost of CPU.
         * @returns {number} cpu cost
         */
        get: function () {
            return this._json.cpu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "bandwidthCost", {
        /**
         * Gets the cost of bandwidth.
         * @returns {number} bandwidth cost
         */
        get: function () {
            return this._json.bandwidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "memoryCost", {
        /**
         * Gets the cost of memory.
         * @returns {number} memory cost
         */
        get: function () {
            return this._json.mem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "estimatedCost", {
        /**
         * Gets an estimate of what the cost could be at the end of the billing period.
         * @returns {number} estimated cost
         */
        get: function () {
            return this._json.estimate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "cpuUsage", {
        /**
         * Gets the CPU usage.
         * @returns {number} cpu usage
         */
        get: function () {
            return this._json.cpu_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "cpuBurstUsage", {
        /**
         * Gets the CPU burst usage.
         * @returns {number} cpu burst usage
         */
        get: function () {
            return this._json.cpu_burst_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "cpuReservedUsage", {
        /**
         * Gets the CPU reserved usage.
         * @returns {number} cpu reserved usage
         */
        get: function () {
            return this._json.cpu_res_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "memoryUsage", {
        /**
         * Gets the memory usage.
         * @returns {number} memory usage
         */
        get: function () {
            return this._json.mem_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "memoryReservedUsage", {
        /**
         * Gets the reserved memory usage.
         * @returns {number} reserved memory usage
         */
        get: function () {
            return this._json.mem_res_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "memoryBurstUsage", {
        /**
         * Gets the burst memory usage.
         * @returns {number} burst memory usage
         */
        get: function () {
            return this._json.mem_burst_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "bandwidthUsage", {
        /**
         * Gets the bandwidth usage.
         * @returns {number} bandwidth usage
         */
        get: function () {
            return this._json.bandwidth_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "cpuBurstCost", {
        /**
         * Gets the burst CPU cost.
         * @returns {number} burst cpu cost
         */
        get: function () {
            return this._json.cpu_burst;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "memoryBurstCost", {
        /**
         * Gets the burst memory cost.
         * @returns {number} burst memory cost
         */
        get: function () {
            return this._json.mem_burst;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "bandwidthBurstCost", {
        /**
         * Gets the burst bandwidth cost.
         * @returns {number} burst bandwidth cost
         */
        get: function () {
            return this._json.bandwidth_burst;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "currencyCode", {
        /**
         * Gets the currency code.
         * @returns {CurrencyCode} the currency code
         */
        get: function () {
            return this._json.currency_code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "timestamp", {
        /**
         * Gets the timestamp of the bill.
         * @returns {Date} the bill timestamp
         */
        get: function () {
            return new Date(this._json.time);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "testDrive", {
        /**
         * Indicates whether this is a test drive.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.test_drive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "lineItems", {
        /**
         * Gets the line items.
         * @returns {Array<BillLineItem>} line items
         */
        get: function () {
            return this._json.line_items.map(function (json) { return new bill_line_item_1.BillLineItem(json); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "discount", {
        /**
         * Gets the discount factor.
         * @returns {number} discount
         */
        get: function () {
            return this._json.discount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "diskUsage", {
        /**
         * Gets the disk usage for the billing period.
         * @returns {number} disk usage
         */
        get: function () {
            return this._json.disk_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "diskCost", {
        /**
         * Gets the disk cost for the billing period.
         * @returns {number} disk cost
         */
        get: function () {
            return this._json.disk;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "diskBurstUsage", {
        /**
         * Gets the disk burst usage for the billing period.
         * @returns {number} disk burst usage
         */
        get: function () {
            return this._json.disk_burst_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "diskBurstCost", {
        /**
         * Gets the disk burst cost for the billing period.
         * @returns {number} disk burst cost
         */
        get: function () {
            return this._json.disk_burst;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "hddStorageUsage", {
        /**
         * Gets the hard drive storage usage for the billing period.
         * @returns {number} hard drive storage usage
         */
        get: function () {
            return this._json.hdd_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "hddStorageCost", {
        /**
         * Gets the hard drive storage usage for the billing period.
         * @returns {number} hard drive storage usage
         */
        get: function () {
            return this._json.hdd_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "hddStorageBurstCost", {
        /**
         * Gets the hard drive storage burst cost for the billing period.
         * @returns {number} hard drive storage burst cost.
         */
        get: function () {
            return this._json.hdd_burst_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "hddStorageReservedCost", {
        /**
         * Gets the hard drive storage reserved cost for the billing period.
         * @returns {number} hard drive storage reserved cost.
         */
        get: function () {
            return this._json.hdd_reserved_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "hddStorageReservedUsage", {
        /**
         * Gets the hard drive storage reserved usage.
         * @returns {number} hard drive storage reserved usage.
         */
        get: function () {
            return this._json.hdd_reserved_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "ssdStorageReservedUsage", {
        /**
         * Gets the solid state storage reserved usage.
         * @returns {number} solid state storage reserved usage.
         */
        get: function () {
            return this._json.ssd_reserved_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "ssdStorageReservedCost", {
        /**
         * Gets the solid state storage reserved cost.
         * @returns {number} solid state storage reserved cost.
         */
        get: function () {
            return this._json.ssd_reserved_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "ssdStorageUsage", {
        /**
         * Gets the solid state storage usage.
         * @returns {number} solid state storage usage.
         */
        get: function () {
            return this._json.ssd_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "ssdStorageCost", {
        /**
         * Gets the solid state storage cost.
         * @returns {number} solid state storage cost
         */
        get: function () {
            return this._json.ssd_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "ssdStorageBurstUsage", {
        /**
         * Gets the solid state storage burst usage.
         * @returns {number} solid state storge burst usage
         */
        get: function () {
            return this._json.ssd_burst_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "ssdStorageBurstCost", {
        /**
         * Gets the solid state storage burst cost.
         * @returns {number} solid state storage burst cost
         */
        get: function () {
            return this._json.ssd_burst_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "archiveStorageUsage", {
        /**
         * Gets the archive storage usage.
         * @returns {number} archive storage usage
         */
        get: function () {
            return this._json.archive_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "archiveStorageCost", {
        /**
         * Gets the archive storage cost.
         * @returns {number} archive storage cost
         */
        get: function () {
            return this._json.archive_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "archiveStorageBurstUsage", {
        /**
         * Gets the archive storage burst usage.
         * @returns {number} archive storage burst usage
         */
        get: function () {
            return this._json.archive_burst_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "archiveStorageBurstCost", {
        /**
         * Gets the archive storage burst cost.
         * @returns {number} archive storage burst cost
         */
        get: function () {
            return this._json.archive_burst_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "archiveStorageReservedCost", {
        /**
         * Gets the archive storage reserved cost.
         * @returns {number} archive storage reserved cost
         */
        get: function () {
            return this._json.archive_reserved_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "archiveStorageReservedUsage", {
        /**
         * Gets the archive storage reserved usage.
         * @returns {number} archive storage reserved usage
         */
        get: function () {
            return this._json.archive_reserved_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "zertoArchiveStorageUsage", {
        /**
         * Gets the zerto archive storage usage.
         * @returns {number} zerto archive storage usage
         */
        get: function () {
            return this._json.zerto_archive_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "zertoArchiveStorageCost", {
        /**
         * Gets the zerto archive storage cost.
         * @returns {number} zerto archive storage cost
         */
        get: function () {
            return this._json.zerto_archive_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "zertoAdvancedStorageCost", {
        /**
         * Gets the zerto advanced storage cost.
         * @returns {number} zerto advanced storage cost
         */
        get: function () {
            return this._json.zerto_advanced_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "zertoAdvancedStorageUsage", {
        /**
         * Gets the zerto advanced storage usage.
         * @returns {number} zerto advanced storage usage
         */
        get: function () {
            return this._json.zerto_advanced_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "entityType", {
        /**
         * Gets the entity type that the bill is associated with.
         * @returns {EntityType} entity type
         */
        get: function () {
            return this._json.entity_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "entityName", {
        /**
         * Gets the name of the entity that the bill is associated with.
         * @returns {string} entity name
         */
        get: function () {
            return this._json.entity_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "bandwidthReservedUsage", {
        /**
         * Gets the bandwidth reserved usage.
         * @returns {number} bandwidth reserved usage
         */
        get: function () {
            return this._json.bandwidth_reserved_usage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "bandwidthReservedCost", {
        /**
         * Gets the bandwidth reserved cost.
         * @returns {number} bandwidth reserved cost
         */
        get: function () {
            return this._json.bandwidth_reserved_cost;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "bandwidthBurstUsage", {
        /**
         * Gets the bandwidth burst usage.
         * @returns {number} bandwidth burst usage
         */
        get: function () {
            return this._json.bandwidth_burst_usage;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Bill.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Bill.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {BillJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return Bill;
}());
exports.Bill = Bill;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * IP Range.
 */
var IpRange = (function () {
    function IpRange(_json) {
        this._json = _json;
    }
    Object.defineProperty(IpRange.prototype, "startAddress", {
        /**
         * Gets the IP address at the start of the range.
         * @returns {string} start IP
         */
        get: function () {
            return this._json.start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IpRange.prototype, "endAddress", {
        /**
         * Gets the IP address at the end of the range.
         * @returns {string} end IP
         */
        get: function () {
            return this._json.end;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    IpRange.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(IpRange.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {IpRangeJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return IpRange;
}());
exports.IpRange = IpRange;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var entity_1 = __webpack_require__(2);
var ip_range_1 = __webpack_require__(5);
/**
 * Abstract Network.
 */
var AbstractNetwork = (function (_super) {
    tslib_1.__extends(AbstractNetwork, _super);
    function AbstractNetwork(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    Object.defineProperty(AbstractNetwork.prototype, "description", {
        /**
         * Gets the description.
         * @returns {string} description
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "locationId", {
        /**
         * Gets the datacenter location identifier.
         * @returns {string} location ID
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "orgUuid", {
        /**
         * Gets the UUID of the Org that the network is associated with.
         * @returns {string} Org UUID
         */
        get: function () {
            return this._json.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "vdcUuid", {
        /**
         * Gets the UUID of the vDC that the network is associated with.
         * @returns {string} vDC UUID
         */
        get: function () {
            return this._json.vdc_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "primaryDns", {
        /**
         * Gets the primary DNS host.
         * @returns {string} primary DNS host
         */
        get: function () {
            return this._json.primary_dns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "secondaryDns", {
        /**
         * Gets the secondary DSN host.
         * @returns {string} secondary DNS host
         */
        get: function () {
            return this._json.secondary_dns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "dnsSuffix", {
        /**
         * Gets the DNS suffix.
         * @returns {string} DNS suffix
         */
        get: function () {
            return this._json.dns_suffix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "fenceMode", {
        /**
         * Gets the networks fence mode.
         * @returns {NetworkFenceMode} fence mode
         */
        get: function () {
            return this._json.fence_mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "gatewayAddress", {
        /**
         * Gets the gateway address of the network.
         * @returns {string} gateway address
         */
        get: function () {
            return this._json.gateway;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "netmask", {
        /**
         * Gets the netmask of the network.
         * @returns {string} netmask
         */
        get: function () {
            return this._json.netmask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "ipRanges", {
        /**
         * Gets the static IP Ranges for the newtork.
         * @returns {[IpRange]} static IP ranges
         */
        get: function () {
            return this._json.ip_ranges.map(function (ipRangeJson) { return new ip_range_1.IpRange(ipRangeJson); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "inherited", {
        /**
         * Indicates whether this network is inherited.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.inherited;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractNetwork.prototype, "parentNetworkUuid", {
        /**
         * Gets the UUID of the parent external network if this is a bridged network, otherwise null.
         * @returns {string|null} parent external network UUID
         */
        get: function () {
            return this._json.parent_network_uuid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    AbstractNetwork.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    return AbstractNetwork;
}(entity_1.Entity));
exports.AbstractNetwork = AbstractNetwork;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var entity_1 = __webpack_require__(2);
var iland_1 = __webpack_require__(1);
var vm_1 = __webpack_require__(3);
var vapp_network_1 = __webpack_require__(8);
/**
 * Virtual Application.
 */
var Vapp = (function (_super) {
    tslib_1.__extends(Vapp, _super);
    function Vapp(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    /**
     * Gets a vApp by UUID.
     * @param uuid vApp UUID
     * @returns {Promise<Vapp>} promise that resolves with the vApp
     */
    Vapp.getVapp = function (uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp/" + uuid).then(function (response) {
                        var json = response.data;
                        return new Vapp(json);
                    })];
            });
        });
    };
    Object.defineProperty(Vapp.prototype, "entityType", {
        get: function () {
            return 'VAPP';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "deployed", {
        /**
         * Indicates whether this vApp is currently deployed.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.deployed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "powerStatus", {
        /**
         * Gets the vApps current power status.
         * @returns {VappPowerStatus} power status
         */
        get: function () {
            if (this._json.deployed && this._json.status === 'POWERED_OFF') {
                return 'PARTIALLY_POWERED_OFF';
            }
            else {
                return this._json.status;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "storageProfiles", {
        /**
         * Gets the storage profiles that are associated with this VM
         * @returns {Array<string>} array of storage profile UUIDs
         */
        get: function () {
            return this._json.storage_profiles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "runtimeLease", {
        /**
         * Gets the runtime lease setting, in seconds.
         * @returns {number} runtime lease
         */
        get: function () {
            return this._json.runtime_lease;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "storageLease", {
        /**
         * Gets the storage lease setting, in seconds.
         * @returns {number} storage lease
         */
        get: function () {
            return this._json.storage_lease;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "runtimeLeaseExpirationDate", {
        /**
         * Gets the expiration date of the runtime lease, if one is currently active.
         * @returns {Date} runtime lease expiration date
         */
        get: function () {
            return this._json.runtime_expire === null ? null : new Date(this._json.runtime_expire);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "storageLeaseExpirationDate", {
        /**
         * Gets the expiration date of the storage lease, if one is currently active.
         * @returns {Date} storage lease expiration date
         */
        get: function () {
            return this._json.storage_expire === null ? null : new Date(this._json.storage_expire);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "vdcUuid", {
        /**
         * Gets the UUID of the vDC that this vApp is associated with.
         * @returns {string} vDC UUID
         */
        get: function () {
            return this._json.vdc_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "orgUuid", {
        /**
         * Gets the UUID of the Org that this vApp is associated with.
         * @returns {string} org UUID
         */
        get: function () {
            return this._json.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "locationId", {
        /**
         * Gets the datacenter location identifier for the vApp.
         * @returns {string} datacenter location ID
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "description", {
        /**
         * Gets the vApps description.
         * @returns {string} description
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "vcloudHref", {
        /**
         * Gets the vCloud HREF of the vApp.
         * @returns {string} vCloud HREF
         */
        get: function () {
            return this._json.vcloud_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "creationDate", {
        /**
         * Gets the date that this vApp was created.
         * @returns {Date} creation date
         */
        get: function () {
            return new Date(this._json.created_date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vapp.prototype, "expired", {
        /**
         * Indicates whether this vApp is currently in the expired items bin.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.is_expired;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Vapp.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Vapp.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VappJson} the API json object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the vApp data by retrieving it from the API again.
     * @returns {Promise<Vapp>}
     */
    Vapp.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Gets the vApps child VMs.
     * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
     */
    Vapp.prototype.getVms = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp/" + this.uuid + "/vms").then(function (response) {
                        var json = response.data;
                        return json.map(function (vmJson) { return new vm_1.Vm(vmJson); });
                    })];
            });
        });
    };
    /**
     * Gets the vApps child vApp Networks.
     * @returns {Promise<VappNetwork[]>} promise that resolves with an array of child vApp Networks
     */
    Vapp.prototype.getVappNetworks = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vapp/" + this.uuid + "/networks").then(function (response) {
                        var json = response.data;
                        return json.map(function (vappNetJson) { return new vapp_network_1.VappNetwork(vappNetJson); });
                    })];
            });
        });
    };
    return Vapp;
}(entity_1.Entity));
exports.Vapp = Vapp;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var iland_1 = __webpack_require__(1);
var abstract_network_1 = __webpack_require__(6);
/**
 * vApp Network.
 */
var VappNetwork = (function (_super) {
    tslib_1.__extends(VappNetwork, _super);
    function VappNetwork(_json) {
        return _super.call(this, _json) || this;
    }
    /**
     * Gets an vApp network by UUID.
     * @param uuid vApp network UUID
     * @returns {Promise<VappNetwork>} promise that resolves with the vApp network
     */
    VappNetwork.getVappNetwork = function (uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/network/" + uuid).then(function (response) {
                        var json = response.data;
                        return new VappNetwork(json);
                    })];
            });
        });
    };
    Object.defineProperty(VappNetwork.prototype, "entityType", {
        /**
         * Gets the entity type.
         * @returns {EntityType}
         */
        get: function () {
            return 'VAPP_NETWORK';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetwork.prototype, "vappUuid", {
        /**
         * Gets the UUID of the vApp that the network is associated with.
         * @returns {string} vApp UUID
         */
        get: function () {
            return this._json.vapp_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetwork.prototype, "routerExternalIp", {
        /**
         * If this is a NAT Routed network, gets the external IP of the router for the vApp Network edge gateway.
         * @returns {string} IP address
         */
        get: function () {
            return this._json.router_external_ip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VappNetwork.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VappNetworkJson} the API json object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the vApp network data by retrieving it from the API again.
     * @returns {Promise<VappNetwork>} promise that resolves with this object
     */
    VappNetwork.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/network/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    return VappNetwork;
}(abstract_network_1.AbstractNetwork));
exports.VappNetwork = VappNetwork;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_AUTH_URL = 'https://console.ilandcloud.com/auth';
exports.DEFAULT_REALM = 'iland-core';


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var axios_1 = __webpack_require__(11);
var iland_1 = __webpack_require__(1);
var api_error_1 = __webpack_require__(33);
var DEFAULT_API_VERSION = 1.0;
var ILAND_MIME_VND_PREFIX = 'vnd.ilandcloud.api';
/**
 * Iland API HTTP Client.
 */
var Http = (function () {
    /**
     * Constructs a new Http instance.
     * @param {string} baseUrl the base URL of the iland Cloud API
     */
    function Http(baseUrl) {
        var _this = this;
        var defaultMime = Http.versionMime('application/json');
        this._ilandAxios = axios_1.default.create({
            baseURL: baseUrl,
            headers: {
                'Accept': defaultMime,
                'Content-Type': defaultMime
            }
        });
        this._ilandAxios.interceptors.request.use(function (config) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getAuthProvider().getToken().then(function (token) {
                        config.headers['Authorization'] = 'Bearer ' + token;
                        return config;
                    })];
            });
        }); });
        this._ilandAxios.interceptors.response.use(function (response) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var str;
            return tslib_1.__generator(this, function (_a) {
                str = response.data;
                if (str.indexOf(")]}'\n") === 0) {
                    response.data = JSON.parse(str.substring(5));
                }
                return [2 /*return*/, response];
            });
        }); }, function (reason) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var str, error;
            return tslib_1.__generator(this, function (_a) {
                if (reason.response) {
                    str = reason.response.data;
                    if (str.indexOf(")]}'\n") === 0) {
                        str = str.substring(5);
                    }
                    error = JSON.parse(str);
                    throw new api_error_1.ApiError(error);
                }
                throw new Error(reason.message);
            });
        }); });
    }
    /**
     * Gets a formatted Accept header from a standard MIME and optional version number.
     * @param {string} mime the standard MIME string
     * @param {number} version the targeted version (defaults to the SDK version)
     * @returns {string} the formatted MIME type
     */
    Http.versionMime = function (mime, version) {
        if (mime.indexOf(ILAND_MIME_VND_PREFIX) > 0) {
            return mime;
        }
        var versionStr = (version ? version : DEFAULT_API_VERSION).toFixed(1);
        var parts = mime.split('/');
        if (parts.length === 2) {
            var prefix = parts[0];
            var suffix = parts[1];
            return prefix + "/" + ILAND_MIME_VND_PREFIX + ".v" + versionStr + "+" + suffix;
        }
        return mime;
    };
    /**
     * Performs a request against the iland Cloud API.
     * @param {AxiosRequestConfig} config request configuration
     * @returns {Promise<AxiosResponse>} promise that resolves with the server response
     * @throws {ApiError} if the server responds with an error
     */
    Http.prototype.request = function (config) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._ilandAxios.request(config)];
            });
        });
    };
    /**
     * Perform a GET request against the iland Cloud API.
     * @param {string} url the URL path
     * @param {AxiosRequestConfig} config request configuration
     * @returns {Promise<AxiosResponse>} promise that resolves with server response
     * @throws {ApiError} if the server responds with an error
     */
    Http.prototype.get = function (url, config) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._ilandAxios.get(url, config)];
            });
        });
    };
    /**
     * Perform a DELETE request against the iland Cloud API.
     * @param {string} url the URL path
     * @param {AxiosRequestConfig} config request configuration
     * @returns {Promise<AxiosResponse>} promise that resolves with the server response
     * @throws {ApiError} if the server responds with an error
     */
    Http.prototype.delete = function (url, config) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._ilandAxios.delete(url, config)];
            });
        });
    };
    /**
     * Perform a POST request against the iland Cloud API.
     * @param {string} url the URL path
     * @param data the data to include in the request body
     * @param {AxiosRequestConfig} config request configuration
     * @returns {Promise<AxiosResponse>} promise that resolves with the server response
     * @throws {ApiError} if the server responds with an error
     */
    Http.prototype.post = function (url, data, config) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._ilandAxios.post(url, data, config)];
            });
        });
    };
    /**
     * Perform a PUT request against the iland Cloud API.
     * @param {string} url the URL path
     * @param data the data to include in the request body
     * @param {AxiosRequestConfig} config request configuration
     * @returns {Promise<AxiosResponse>} promise that resolves with the server response
     * @throws {ApiError} if the server responds with an error
     */
    Http.prototype.put = function (url, data, config) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._ilandAxios.put(url, data, config)];
            });
        });
    };
    return Http;
}());
exports.Http = Http;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var rxjs_1 = __webpack_require__(35);
var iland_1 = __webpack_require__(1);
var TASK_CONFIG = {
    baseURL: 'https://api.ilandcloud.com/ecs',
    headers: {
        'Accept': 'application/vnd.ilandcloud.api.v0.9+json',
        'Content-Type': 'application/vnd.ilandcloud.api.v0.9+json'
    }
};
/**
 * Task.
 */
var Task = (function () {
    function Task(_apiTask) {
        this._apiTask = _apiTask;
    }
    /**
     * Gets a Task by datacenter and UUID.
     * @param locationId the datacenter identifier
     * @param taskUuid the task uuid
     * @returns {Promise<Task>} promise that resolves with the Task
     */
    Task.getTask = function (locationId, taskUuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/task/" + locationId + "/" + taskUuid, TASK_CONFIG).then(function (response) {
                        var apiTask = response.data;
                        return new Task(apiTask);
                    })];
            });
        });
    };
    Object.defineProperty(Task.prototype, "uuid", {
        /**
         * Gets the UUID of the task.
         * @returns {string} UUID
         */
        get: function () {
            return this._apiTask.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "locationId", {
        /**
         * Gets the datacenter location ID of the task.
         * @returns {string} datacenter location ID
         */
        get: function () {
            return this._apiTask.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "complete", {
        /**
         * Indicates whether the task is complete.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiTask.synchronized;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "status", {
        /**
         * Indicates the status of the task.
         * @returns {TaskStatus} task status
         */
        get: function () {
            return this._apiTask.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "operation", {
        /**
         * Gets the task's operation identifier.
         */
        get: function () {
            return this._apiTask.operation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "endTime", {
        /**
         * Gets the end time of the task.
         * @returns {Date|null} end time of the task or null if the task hasn't yet completed
         */
        get: function () {
            return this._apiTask.end_time !== null ? new Date(this._apiTask.end_time) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "entityUuid", {
        /**
         * Gets the UUID of the entity that is associated with the task.
         * @returns {string} the UUID of the associated entity
         */
        get: function () {
            return this._apiTask.entity_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "initiatedFromIlandApi", {
        /**
         * Indicates whether the task was initiated from the iland API.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiTask.initiated_from_ecs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "initiationTime", {
        /**
         * Gets the date/time that the task was received/queued by the API.
         * @returns {Date} the date that the task was initiated
         */
        get: function () {
            return new Date(this._apiTask.initiation_time);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "message", {
        /**
         * Gets the message associated with the task, if there is one. The message may provide extra information if the task
         * ended with an error status.
         * @returns {string|null} message string or null if no message is associated with the task
         */
        get: function () {
            return this._apiTask.message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "operationDescription", {
        /**
         * Returns an operation description that may provide more detail about the operation that the task is associated with.
         * @returns {string} description
         */
        get: function () {
            return this._apiTask.operation_description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "orgUuid", {
        /**
         * Returns the UUID of the organization that the task is associated with.
         */
        get: function () {
            return this._apiTask.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "otherAttributes", {
        /**
         * Gets a map of additional task details that are specific to the task operation type.
         * @returns {Map<string, any>} map of other task attributes
         */
        get: function () {
            return this._apiTask.other_attributes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "parentTaskUuid", {
        /**
         * If this is a sub-task, returns the UUID of the parent task, otherwise null.
         * @returns {string|null} returns the UUID of the parent task
         */
        get: function () {
            return this._apiTask.parent_task_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "progress", {
        /**
         * Gets the task progress as a percentage.
         * @returns {number} in the range 0-100
         */
        get: function () {
            return this._apiTask.progress;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "startTime", {
        /**
         * Gets the start time of the task, if the task has started. If the task is still queued, returns null.
         * @returns {Date|null} the start time of the task or null
         */
        get: function () {
            return this._apiTask.start_time === null ? null : new Date(this._apiTask.start_time);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "subTasks", {
        /**
         * Gets the task's sub-tasks, if this is a composite task.
         * @returns {Array<string>}
         */
        get: function () {
            return this._apiTask.sub_tasks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "taskId", {
        /**
         * If this task is a wrapper for a task from another service (vCloud director, Zerto, etc), this will return the ID of
         * the task known to that service. Otherwise returns Uhe task UUID.
         * @returns {string} the ID of the task
         */
        get: function () {
            return this._apiTask.task_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "taskType", {
        /**
         * Gets the task type.
         * @returns {TaskType} the type of the task
         */
        get: function () {
            return this._apiTask.task_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "username", {
        /**
         * Gets the username of the user that initiated the task.
         * @returns {string} username of the initiating user
         */
        get: function () {
            return this._apiTask.username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "userFullName", {
        /**
         * Gets the full name of the user that initiated the task.
         * @returns {string} full name of the user that initiated the task
         */
        get: function () {
            return this._apiTask.user_full_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Task.prototype.toString = function () {
        return JSON.stringify(this._apiTask, undefined, 2);
    };
    Object.defineProperty(Task.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {TaskJson} the API Task object
         */
        get: function () {
            return Object.assign({}, this._apiTask);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves a new representation of the task from the API.
     * @returns {Promise<Task>} promise that resolves with updated task
     */
    Task.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/task/" + this.locationId + "/" + this.uuid, TASK_CONFIG).then(function (response) {
                        _this._apiTask = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Gets a promise that resolves or rejects when the task is complete. An error status will cause rejection.
     * @returns {Promise<Task>} completion promise
     */
    Task.prototype.getPromise = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (_this.complete) {
                            if (self.status === 'error') {
                                reject(_this);
                            }
                            else {
                                resolve(_this);
                            }
                        }
                        else {
                            _this.getObservable().subscribe(function (task) {
                                if (task.complete) {
                                    if (task.status === 'error') {
                                        reject(task);
                                    }
                                    else {
                                        resolve(task);
                                    }
                                }
                            });
                        }
                    })];
            });
        });
    };
    /**
     * Gets an observable that is updated as the progress or status of the task changes.
     * @returns {Observable<Task>} task observable
     */
    Task.prototype.getObservable = function () {
        // tslint:disable-next-line:no-floating-promises
        this._updateUntilComplete();
        return this._subject.asObservable();
    };
    Task.prototype._updateUntilComplete = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var subject;
            return tslib_1.__generator(this, function (_a) {
                if (this._subject === undefined) {
                    this._subject = new rxjs_1.Subject();
                }
                subject = this._subject;
                return [2 /*return*/, this.refresh().then(function (task) {
                        subject.next(task);
                        if (task.complete) {
                            subject.complete();
                            return _this;
                        }
                        else {
                            return new Promise(function (resolve) {
                                setTimeout(function () {
                                    resolve(_this._updateUntilComplete());
                                }, 1000);
                            });
                        }
                    })];
            });
        });
    };
    return Task;
}());
exports.Task = Task;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Virtual Network Interface Card.
 */
var Vnic = (function () {
    function Vnic(_apiVnic) {
        this._apiVnic = _apiVnic;
    }
    Object.defineProperty(Vnic.prototype, "adapterType", {
        /**
         * Gets the type of the adapter.
         * @returns {string} adapter type
         */
        get: function () {
            return this._apiVnic.adapter_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "addressMode", {
        /**
         * Gets the address mode of the adapter.
         * @returns {string} address mode
         */
        get: function () {
            return this._apiVnic.address_mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "connected", {
        /**
         * Indicates whether the VNIC is currently connected.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiVnic.connected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "deleted", {
        /**
         * Indicates whether the VNIC is deleted.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiVnic.deleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "ipAddress", {
        /**
         * Gets the IP address that is assigned to the VNIC.
         * @returns {string} IP Address
         */
        get: function () {
            return this._apiVnic.ip_addr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "macAddress", {
        /**
         * Gets the MAC address that is assigned to the VNIC.
         * @returns {string} MAC address
         */
        get: function () {
            return this._apiVnic.mac_addr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "connectedNetworkName", {
        /**
         * Gets the name of the network that the VNIC is connected to.
         * @returns {string} vApp network name
         */
        get: function () {
            return this._apiVnic.net_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "primaryConnection", {
        /**
         * Indicates whether this is the VM's primary VNIC.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiVnic.primary_cnx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vnic.prototype, "vnicId", {
        /**
         * Gets the ID of the VNIC among other VNICs connected to the VM.
         * @returns {number} VNIC ID
         */
        get: function () {
            return this._apiVnic.vnic_id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Vnic.prototype.toString = function () {
        return JSON.stringify(this._apiVnic, undefined, 2);
    };
    Object.defineProperty(Vnic.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VnicJson} the API VNIC object
         */
        get: function () {
            return Object.assign({}, this._apiVnic);
        },
        enumerable: true,
        configurable: true
    });
    return Vnic;
}());
exports.Vnic = Vnic;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Virtual Disk.
 */
var VirtualDisk = (function () {
    function VirtualDisk(_apiDisk) {
        this._apiDisk = _apiDisk;
    }
    Object.defineProperty(VirtualDisk.prototype, "name", {
        /**
         * Gets the name of the virtual disk.
         * @returns {string} the name
         */
        get: function () {
            return this._apiDisk.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualDisk.prototype, "size", {
        /**
         * Gets the size of the virtual disk in MB.
         * @returns {number} size in MB
         */
        get: function () {
            return this._apiDisk.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VirtualDisk.prototype, "type", {
        /**
         * Gets the Virtual Hard Disk type.
         * @returns {VirtualDiskType} the type
         */
        get: function () {
            return this._apiDisk.type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    VirtualDisk.prototype.toString = function () {
        return JSON.stringify(this._apiDisk, undefined, 2);
    };
    Object.defineProperty(VirtualDisk.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VirtualDiskJson} the API virtual disk object
         */
        get: function () {
            return Object.assign({}, this._apiDisk);
        },
        enumerable: true,
        configurable: true
    });
    return VirtualDisk;
}());
exports.VirtualDisk = VirtualDisk;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Metadata.
 */
var Metadata = (function () {
    function Metadata(_json) {
        this._json = _json;
    }
    Object.defineProperty(Metadata.prototype, "key", {
        /**
         * Gets the metadata key.
         * @returns {string} the key
         */
        get: function () {
            return this._json.key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "access", {
        /**
         * Gets the metadata's access restriction type.
         * @returns {MetadataAccessMode} the type of access restriction
         */
        get: function () {
            return this._json.access;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "type", {
        /**
         * Gets the type of the metadata.
         * @returns {VirtualDiskType} the type
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "value", {
        /**
         * Gets the metadata value.
         * @returns {} the type
         */
        get: function () {
            return this._json.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Metadata.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Metadata.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {MetadataJson} the API JSON representation of the metadata
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return Metadata;
}());
exports.Metadata = Metadata;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM Backup Restore Point.
 */
var BackupRestorePoint = (function () {
    function BackupRestorePoint(_json) {
        this._json = _json;
    }
    Object.defineProperty(BackupRestorePoint.prototype, "name", {
        /**
         * Gets the name of the restore point.
         * @returns {string} the name
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackupRestorePoint.prototype, "timestamp", {
        /**
         * Gets the timestamp of the backup restore point.
         * @returns {Date} date of the restore point
         */
        get: function () {
            return new Date(this._json.timestamp);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BackupRestorePoint.prototype, "backupServerName", {
        /**
         * Gets the name of the backup server that the restore point is stored on.
         * @returns {string} the name of the backup server
         */
        get: function () {
            return this._json.backup_server_name;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    BackupRestorePoint.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(BackupRestorePoint.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {BackupRestorePointJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return BackupRestorePoint;
}());
exports.BackupRestorePoint = BackupRestorePoint;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Snapshot.
 */
var Snapshot = (function () {
    function Snapshot(_json) {
        this._json = _json;
    }
    Object.defineProperty(Snapshot.prototype, "creationDate", {
        /**
         * Gets the date that the snapshot was created.
         * @returns {Date} the creation date
         */
        get: function () {
            return new Date(this._json.creation_date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Snapshot.prototype, "size", {
        /**
         * Gets the size of the snapshot.
         * @returns {number} size
         */
        get: function () {
            return this._json.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Snapshot.prototype, "poweredOn", {
        /**
         * Indicates whether the snapshot is powered on.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.is_powered_on;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Snapshot.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Snapshot.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {SnapshotJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return Snapshot;
}());
exports.Snapshot = Snapshot;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM Screen Ticket.
 */
var ScreenTicket = (function () {
    function ScreenTicket(_json) {
        this._json = _json;
    }
    Object.defineProperty(ScreenTicket.prototype, "vmId", {
        /**
         * Gets the VM ID attribute.
         * @returns {string} VM ID
         */
        get: function () {
            return this._json.vm_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenTicket.prototype, "ticket", {
        /**
         * Gets the ticket.
         * @returns {string}
         */
        get: function () {
            return this._json.ticket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenTicket.prototype, "host", {
        /**
         * Gets the host.
         * @returns {string}
         */
        get: function () {
            return this._json.host;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScreenTicket.prototype, "sslThumbprint", {
        /**
         * Gets the SSL thumbprint.
         * @returns {string}
         */
        get: function () {
            return this._json.ssl_thumbprint;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    ScreenTicket.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(ScreenTicket.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {ScreenTicketJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return ScreenTicket;
}());
exports.ScreenTicket = ScreenTicket;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM MKS Screen Ticket.
 */
var MksScreenTicket = (function () {
    function MksScreenTicket(_json) {
        this._json = _json;
    }
    Object.defineProperty(MksScreenTicket.prototype, "vmx", {
        /**
         * Gets the VMX attribute.
         * @returns {string} vmx
         */
        get: function () {
            return this._json.vmx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MksScreenTicket.prototype, "ticket", {
        /**
         * Gets the ticket.
         * @returns {string}
         */
        get: function () {
            return this._json.ticket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MksScreenTicket.prototype, "host", {
        /**
         * Gets the host.
         * @returns {string}
         */
        get: function () {
            return this._json.host;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MksScreenTicket.prototype, "port", {
        /**
         * Gets the port.
         * @returns {string}
         */
        get: function () {
            return this._json.port;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    MksScreenTicket.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(MksScreenTicket.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {MksScreenTicketJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return MksScreenTicket;
}());
exports.MksScreenTicket = MksScreenTicket;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Bill Line Item.
 */
var BillLineItem = (function () {
    function BillLineItem(_json) {
        this._json = _json;
    }
    Object.defineProperty(BillLineItem.prototype, "name", {
        /**
         * Gets the line item name.
         * @returns {string} name
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillLineItem.prototype, "price", {
        /**
         * Gets the price.
         * @returns {number} price
         */
        get: function () {
            return this._json.price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillLineItem.prototype, "quantity", {
        /**
         * Gets the quantity.
         * @returns {number} quantity
         */
        get: function () {
            return this._json.quantity;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillLineItem.prototype, "productId", {
        /**
         * Gets the product ID.
         * @returns {string} the product ID
         */
        get: function () {
            return this._json.product_id;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    BillLineItem.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(BillLineItem.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {BillLineItemJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return BillLineItem;
}());
exports.BillLineItem = BillLineItem;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bill_1 = __webpack_require__(4);
/**
 * Billing Summary.
 */
var BillingSummary = (function () {
    function BillingSummary(_json) {
        this._json = _json;
    }
    Object.defineProperty(BillingSummary.prototype, "currentMonth", {
        /**
         * Gets the current month bill.
         * @returns {Bill} the current month bill
         */
        get: function () {
            return new bill_1.Bill(this._json.current_month);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingSummary.prototype, "previousMonth", {
        /**
         * Gets the previous month bill.
         * @returns {Bill} the previous month bill
         */
        get: function () {
            return new bill_1.Bill(this._json.previous_month);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingSummary.prototype, "currentHour", {
        /**
         * Gets the current hour bill.
         * @returns {Bill} the current hour bill
         */
        get: function () {
            return new bill_1.Bill(this._json.current_hour);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingSummary.prototype, "previousHour", {
        /**
         * Gets the previous hour bill.
         * @returns {Bill} the previous hour bill
         */
        get: function () {
            return new bill_1.Bill(this._json.previous_hour);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BillingSummary.prototype, "testDrive", {
        /**
         * Indicates whether this is a test drive bill.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.test_drive;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    BillingSummary.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(BillingSummary.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {BillingSummaryJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return BillingSummary;
}());
exports.BillingSummary = BillingSummary;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var iland_1 = __webpack_require__(1);
var company_inventory_1 = __webpack_require__(23);
var company_1 = __webpack_require__(24);
/**
 * User.
 */
var User = (function () {
    function User(_apiUser) {
        this._apiUser = _apiUser;
    }
    /**
     * Gets a user by username.
     * @param username the user's username
     * @returns {Promise<User>}
     */
    User.getUser = function (username) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/user/" + username).then(function (response) {
                        var apiUser = response.data;
                        return new User(apiUser);
                    })];
            });
        });
    };
    /**
     * Gets the currently authenticated user.
     * @returns {Promise<User>}
     */
    User.getCurrentUser = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getAuthProvider().getAuthenticatedUsername().then(function (username) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        return tslib_1.__generator(this, function (_a) {
                            if (username) {
                                return [2 /*return*/, User.getUser(username)];
                            }
                            else {
                                return [2 /*return*/, new Promise(function (_, reject) {
                                        reject();
                                    })];
                            }
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    Object.defineProperty(User.prototype, "username", {
        /**
         * Gets the user's username.
         * @returns {string} username
         */
        get: function () {
            return this._apiUser.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "address", {
        /**
         * Gets the user's address.
         * @returns {string} address
         */
        get: function () {
            return this._apiUser.address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "city", {
        /**
         * Gets the user's city.
         * @returns {string} city
         */
        get: function () {
            return this._apiUser.city;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "company", {
        /**
         * Gets the user's company.
         * @returns {string} company
         */
        get: function () {
            return this._apiUser.company;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "country", {
        /**
         * Gets the user's country.
         * @returns {string} country
         */
        get: function () {
            return this._apiUser.country;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "createdDate", {
        /**
         * Gets the user's created date.
         * @returns {Date} created date
         */
        get: function () {
            return new Date(this._apiUser.created_date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "domain", {
        /**
         * Gets the user's domain.
         * @returns {string} user domain
         */
        get: function () {
            return this._apiUser.domain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "deleted", {
        /**
         * Indicates whether the user is deleted.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiUser.deleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "deletedDate", {
        /**
         * Gets the deleted date of the user.
         * @returns {Date} deleted date or null if the user is not deleted
         */
        get: function () {
            return this._apiUser.deleted_date ? new Date(this._apiUser.deleted_date) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        /**
         * Gets the user's email address.
         * @returns {string} email address
         */
        get: function () {
            return this._apiUser.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "fullName", {
        /**
         * Gets the user's full name.
         * @returns {string} full name
         */
        get: function () {
            return this._apiUser.fullname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "locked", {
        /**
         * Indicates whether the user is locked out of their account.
         * @returns {boolean} value
         */
        get: function () {
            return this._apiUser.locked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "phoneNumber", {
        /**
         * Gets the phone number of the user.
         * @returns {string} phone number
         */
        get: function () {
            return this._apiUser.phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "state", {
        /**
         * Gets the user's state.
         * @returns {string} state
         */
        get: function () {
            return this._apiUser.state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "userType", {
        /**
         * Gets the user type.
         * @returns {UserType} user type
         */
        get: function () {
            return this._apiUser.user_type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "zip", {
        /**
         * Gets the user's zip code.
         * @returns {string} zip code.
         */
        get: function () {
            return this._apiUser.zip;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    User.prototype.toString = function () {
        return JSON.stringify(this._apiUser, undefined, 2);
    };
    Object.defineProperty(User.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {UserJson} the API User object
         */
        get: function () {
            return Object.assign({}, this._apiUser);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retrieves a new representation of the user from the API.
     * @returns {Promise<User>} promise that resolves with updated user
     */
    User.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/user/" + this.username).then(function (response) {
                        _this._apiUser = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Gets the user's inventory within the specified company..
     * @param {string} companyId the ID of the company to retrieve inventory for
     * @returns {Promise<CompanyInventory>}  entity inventory
     */
    User.prototype.getInventoryInCompany = function (companyId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/user/" + this.username + "/inventory", {
                        params: {
                            company: companyId
                        }
                    }).then(function (response) {
                        var userInventory = response.data;
                        if (!userInventory.inventory || userInventory.inventory.length === 0) {
                            throw new Error("No inventory found for company with id=" + companyId + ".");
                        }
                        return new company_inventory_1.CompanyInventory(userInventory.inventory[0]);
                    })];
            });
        });
    };
    /**
     * Gets the user's entity inventory.
     * @returns {Promise<Array<CompanyInventory>>} user's entity inventory
     */
    User.prototype.getInventory = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/user/" + this.username + "/inventory").then(function (response) {
                        var userInventory = response.data;
                        return userInventory.inventory.map(function (it) { return new company_inventory_1.CompanyInventory(it); });
                    })];
            });
        });
    };
    /**
     * Gets the user's list of companies.
     * @returns {Promise<Array<Company>>} user's list of companies
     */
    User.prototype.getCompanies = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/user/" + this.username + "/companies").then(function (response) {
                        var companiesList = response.data;
                        return companiesList.map(function (it) { return new company_1.Company(it); });
                    })];
            });
        });
    };
    return User;
}());
exports.User = User;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Inventory entity properties.
 */
var InventoryEntity = (function () {
    function InventoryEntity(_json) {
        this._json = _json;
    }
    Object.defineProperty(InventoryEntity.prototype, "uuid", {
        /**
         * Gets the UUID of the entity.
         * @returns {string} UUID
         */
        get: function () {
            return this._json.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryEntity.prototype, "type", {
        /**
         * Gets the type of the entity.
         * @returns {EntityDomain} entity type
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryEntity.prototype, "name", {
        /**
         * Gets the name of the entity.
         * @returns {string} entity name
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryEntity.prototype, "parentUuid", {
        /**
         * Gets the UUID of the parent entity.
         * @returns {string} the parent entity UUID
         */
        get: function () {
            return this._json.parent_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InventoryEntity.prototype, "parentType", {
        /**
         * Gets the type of the parent entity.
         * @returns {EntityDomain} the parent entity type
         */
        get: function () {
            return this._json.parent_type;
        },
        enumerable: true,
        configurable: true
    });
    return InventoryEntity;
}());
exports.InventoryEntity = InventoryEntity;
var CompanyInventory = (function () {
    function CompanyInventory(_inventory) {
        this._inventory = _inventory;
        this._uuidMap = {};
        this._childrenMap = {};
        for (var type in this._inventory.entities) {
            for (var _i = 0, _a = this._inventory.entities[type]; _i < _a.length; _i++) {
                var entity = _a[_i];
                var inventoryEntity = new InventoryEntity(entity);
                this._uuidMap[entity.uuid] = inventoryEntity;
                var parentUuid = 'root';
                if (entity.parent_uuid !== null) {
                    parentUuid = entity.parent_uuid;
                }
                if (!this._childrenMap[parentUuid]) {
                    this._childrenMap[parentUuid] = {};
                }
                if (!this._childrenMap[parentUuid][entity.type]) {
                    this._childrenMap[parentUuid][entity.type] = [];
                }
                this._childrenMap[parentUuid][entity.type].push(inventoryEntity);
            }
        }
    }
    /**
     * Get an inventory entity by UUID.
     * @param uuid {string} UUID of the entity
     * @returns {undefined|InventoryEntity}
     */
    CompanyInventory.prototype.getEntityByUuid = function (uuid) {
        return this._uuidMap[uuid];
    };
    /**
     * Get an array of inventory entities of the specified type.
     * @param type {EntityType} the type to retrieve
     * @returns {undefined|InventoryEntity}
     */
    CompanyInventory.prototype.getEntitiesByType = function (type) {
        var result = this._inventory.entities[type];
        return result ? result.map(function (it) { return new InventoryEntity(it); }) : undefined;
    };
    /**
     * Gets the map of children belonging to an entity.
     * @param {string} uuid the uuid of the entity
     * @returns {[type: string]: Array<InventoryEntity>} the map of children by type
     */
    CompanyInventory.prototype.getChildrenForEntity = function (uuid) {
        return this._childrenMap[uuid];
    };
    return CompanyInventory;
}());
exports.CompanyInventory = CompanyInventory;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var entity_1 = __webpack_require__(2);
var iland_1 = __webpack_require__(1);
var role_1 = __webpack_require__(25);
var user_1 = __webpack_require__(22);
/**
 * Company.
 */
var Company = (function (_super) {
    tslib_1.__extends(Company, _super);
    function Company(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    /**
     * Gets an Company by ID.
     * @param id Company ID
     * @returns {Promise<Company>} promise that resolves with the Company
     */
    Company.getCompany = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + id).then(function (response) {
                        var json = response.data;
                        return new Company(json);
                    })];
            });
        });
    };
    Object.defineProperty(Company.prototype, "entityType", {
        get: function () {
            return 'COMPANY';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "hasIlandCloud", {
        /**
         * Indicates whether the company has the iland cloud product.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.has_iaas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Company.prototype, "hasIlandBackup", {
        /**
         * Indicates whether the company has the iland backup product.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.has_vcc;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Company.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Company.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {CompanyJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the Company data by retrieving it from the API again.
     * @returns {Promise<Company>} promise that resolves with this object
     */
    Company.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Get company roles.
     * @returns {Promise<Array<Role>>} task promise
     */
    Company.prototype.getRoles = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/roles").then(function (response) {
                        var json = response.data;
                        return json.map(function (it) { return new role_1.Role(it); });
                    })];
            });
        });
    };
    /**
     * Get a company role.
     * @returns {Promise<Role>} a promise with the queried role
     */
    Company.prototype.getRole = function (uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/roles/" + uuid).then(function (response) {
                        var json = response.data;
                        return new role_1.Role(json);
                    })];
            });
        });
    };
    /**
     * Creates a new company role.
     * @returns {Promise<Role>} a promise with the newly created role
     */
    Company.prototype.createRole = function (request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/companies/" + this.uuid + "/roles", request.json).then(function (response) {
                        var json = response.data;
                        return new role_1.Role(json);
                    })];
            });
        });
    };
    /**
     * Updates a company role.
     * @returns {Promise<Role>} a promise with the newly created role that has replaced the original
     */
    Company.prototype.updateRole = function (uuid, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().put("/companies/" + this.uuid + "/roles/" + uuid, request.json).then(function (response) {
                        var json = response.data;
                        return new role_1.Role(json);
                    })];
            });
        });
    };
    /**
     * Deletes a new company role.
     * @returns {Promise<void>} a promise that indicates success or failure
     */
    Company.prototype.deleteRole = function (uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().delete("/companies/" + this.uuid + "/roles/" + uuid).then(function () { return undefined; })];
            });
        });
    };
    /**
     * Gets all company users.
     * @returns {Promise<Array<User>>} a promise with the list of the company users
     */
    Company.prototype.getUsers = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/users").then(function (response) {
                        var json = response.data;
                        return json.map(function (it) { return new user_1.User(it); });
                    })];
            });
        });
    };
    /**
     * Gets all company users that are assigned to a specified role.
     * @returns {Promise<Array<User>>} a promise with the list of the company users that are assigned to the role
     */
    Company.prototype.getUsersWithRole = function (roleUuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/users", {
                        params: {
                            role: roleUuid
                        }
                    }).then(function (response) {
                        var json = response.data;
                        return json.map(function (it) { return new user_1.User(it); });
                    })];
            });
        });
    };
    /**
     * A company may have multiple user domains if they have users that are shared with other companies. This method
     * returns the identifiers for all domains that are associated with this company.
     * @returns {Promise<Array<string>>} a promise with the list of the company user domains
     */
    Company.prototype.getUserDomains = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/companies/" + this.uuid + "/domains").then(function (response) {
                        return response.data;
                    })];
            });
        });
    };
    /**
     * Creates a new company user.
     * @returns {Promise<User>} a promise with the newly created user
     */
    Company.prototype.createUser = function (request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().post("/companies/" + this.uuid + "/users", request.json).then(function (response) {
                        var json = response.data;
                        return new user_1.User(json);
                    })];
            });
        });
    };
    return Company;
}(entity_1.Entity));
exports.Company = Company;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var policy_1 = __webpack_require__(26);
/**
 * Role.
 */
var Role = (function () {
    function Role(_json) {
        this._json = _json;
        this._policies = this._json.policies.map(function (it) { return new policy_1.Policy(it); });
    }
    Object.defineProperty(Role.prototype, "uuid", {
        /**
         * Gets the UUID of the role.
         * @returns {string} role UUID
         */
        get: function () {
            return this._json.uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "companyId", {
        /**
         * Gets the ID of the company that the role is associated with.
         * @returns {string} company ID
         */
        get: function () {
            return this._json.company_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "name", {
        /**
         * Gets the name of the role.
         * @returns {string} the role name
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "description", {
        /**
         * Gets the role description.
         * @returns {string}
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "policies", {
        /**
         * Gets the policies that define the role.
         * @returns {Array<Policy>} the array of role policies
         */
        get: function () {
            return this._policies.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "type", {
        /**
         * Gets the role type.
         * @returns {RoleType} role type
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Role.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Role.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {RoleJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return Role;
}());
exports.Role = Role;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Policy.
 */
var Policy = (function () {
    function Policy(_json) {
        this._json = _json;
    }
    Object.defineProperty(Policy.prototype, "entityUuid", {
        /**
         * Gets the entity UUID associated with the policy.
         * @returns {string} the entity UUID
         */
        get: function () {
            return this._json.entity_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "entityDomain", {
        /**
         * Gets the entity domain of the policy.
         * @returns {EntityDomain} the entity domain
         */
        get: function () {
            return this._json.domain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "type", {
        /**
         * Gets the policy type.
         * @returns {PolicyType} the policy type
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Policy.prototype, "permissions", {
        /**
         * Gets the permissions assigned to the policy.
         * @returns {Array<Permission>} the policy permissions
         */
        get: function () {
            return this._json.permissions.slice();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Policy.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Policy.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {PolicyJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return Policy;
}());
exports.Policy = Policy;
/**
 * Policy Builder.
 */
var PolicyBuilder = (function () {
    /**
     * Creates a new PolicyBuilder.
     * @param {string} _entityUuid the UUID of the entity that the policy will apply to
     * @param {EntityDomain} _entityDomain the EntityDomain of the entity that the policy will apply to
     * @param {PolicyType} _type the policy type
     */
    function PolicyBuilder(_entityUuid, _entityDomain, _type) {
        this._entityUuid = _entityUuid;
        this._entityDomain = _entityDomain;
        this._type = _type;
        this._permissions = [];
    }
    /**
     * Adds a permission.
     * @param {Permission} permission the permission to add
     * @returns {PolicyBuilder} the builder
     */
    PolicyBuilder.prototype.addPermission = function (permission) {
        if (!this._permissions.some(function (it) { return it === permission; })) {
            this._permissions.push(permission);
        }
        return this;
    };
    /**
     * Removes a permission.
     * @param {Permission} permission the permission to remove
     * @returns {PolicyBuilder} the builder
     */
    PolicyBuilder.prototype.removePermission = function (permission) {
        var idx = this._permissions.findIndex(function (it) { return it === permission; });
        if (idx >= 0) {
            this._permissions.splice(idx, 1);
        }
        return this;
    };
    /**
     * Builds the policy.
     * @returns {Policy} the new policy
     */
    PolicyBuilder.prototype.build = function () {
        return new Policy({
            entity_uuid: this._entityUuid,
            domain: this._entityDomain,
            type: this._type,
            permissions: this._permissions
        });
    };
    return PolicyBuilder;
}());
exports.PolicyBuilder = PolicyBuilder;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var entity_1 = __webpack_require__(2);
var iland_1 = __webpack_require__(1);
var edge_interface_1 = __webpack_require__(28);
/**
 * Edge Gateway.
 */
var Edge = (function (_super) {
    tslib_1.__extends(Edge, _super);
    function Edge(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    /**
     * Gets an Edge by UUID.
     * @param uuid Edge UUID
     * @returns {Promise<Edge>} promise that resolves with the Edge
     */
    Edge.getEdge = function (uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edge/" + uuid).then(function (response) {
                        var json = response.data;
                        return new Edge(json);
                    })];
            });
        });
    };
    Object.defineProperty(Edge.prototype, "entityType", {
        get: function () {
            return 'EDGE';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "status", {
        /**
         * Gets the status of the Edge gateway.
         * @returns {string} status
         */
        get: function () {
            return this._json.status === 1 ? 'UP' : 'DOWN';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "vdcUuid", {
        /**
         * Gets the UUID of the associated vDC.
         * @returns {string} vDC UUID
         */
        get: function () {
            return this._json.vdc_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "orgUuid", {
        /**
         * Gets the UUID of the associated Org.
         * @returns {string} org UUID
         */
        get: function () {
            return this._json.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "interfaces", {
        /**
         * Gets the Edges network interfaces.
         * @returns {[EdgeInterface]} array of interfaces
         */
        get: function () {
            return this._json.interfaces.map(function (interfaceJson) { return new edge_interface_1.EdgeInterface(interfaceJson); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "backwardCompatibilityMode", {
        /**
         * Indicates whether the edge is in backwards compatibility mode.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.backward_compatibility_mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "backingConfigurationType", {
        /**
         * Gets the type of backing configuration.
         * @returns {EdgeBackingConfigurationType} backing configuration type
         */
        get: function () {
            return this._json.gateway_backing_config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "highAvailabilityEnabled", {
        /**
         * Indicates whether high availability mode is enabled.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.high_availability_enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "defaultDnsRelayRoute", {
        /**
         * Indicates whether this edge is the default DNS relay route.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.default_dns_relay_route;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "locationId", {
        /**
         * Gets the data center location ID that the edge is associated with.
         * @returns {string} location ID
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "description", {
        /**
         * Gets the description.
         * @returns {string} description
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Edge.prototype, "vcloudHref", {
        /**
         * Gets the vCloud HREF.
         * @returns {string|null} vCloud HREF
         */
        get: function () {
            return this._json.vcloud_href;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Edge.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Edge.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {EdgeJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the Edge data by retrieving it from the API again.
     * @returns {Promise<Edge>} promise that resolves with this object
     */
    Edge.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/edge/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    return Edge;
}(entity_1.Entity));
exports.Edge = Edge;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var edge_subnet_participation_1 = __webpack_require__(29);
/**
 * Edge Gateway Interface.
 */
var EdgeInterface = (function () {
    function EdgeInterface(_json) {
        this._json = _json;
    }
    Object.defineProperty(EdgeInterface.prototype, "name", {
        /**
         * Gets the interface name.
         * @returns {string} interface name
         */
        get: function () {
            return this._json.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "displayName", {
        /**
         * Gets the display name.
         * @returns {string} display name
         */
        get: function () {
            return this._json.display_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "inRateLimit", {
        /**
         * Gets the incoming rate limit setting.
         * @returns {number} incoming rate limit
         */
        get: function () {
            return this._json.in_rate_limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "outRateLimit", {
        /**
         * Gets the outgoing rate limit setting.
         * @returns {number} outgoing rate limit
         */
        get: function () {
            return this._json.out_rate_limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "type", {
        /**
         * Gets the interface type.
         * @returns {EdgeInterfaceType} interface type
         */
        get: function () {
            return this._json.type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "rateLimitEnabled", {
        /**
         * Indicates whether rate limiting is enabled on this edge.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.apply_rate_limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "defaultRoute", {
        /**
         * Indicates whether this edge is used as the default DNS relay route.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.default_route;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "networkName", {
        /**
         * Gets the name of the network that is attached to this interface.
         * @returns {string} network name
         */
        get: function () {
            return this._json.network;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "networkUuid", {
        /**
         * Gets the UUID of the network that is attached to this interface.
         * @returns {string} network UUID
         */
        get: function () {
            return this._json.network_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeInterface.prototype, "subnetParticipation", {
        /**
         * Gets the subnet participation information.
         * @returns {[EdgeSubnetParticipation]} subnet participation array
         */
        get: function () {
            return this._json.subnet_participation.map(function (spJson) { return new edge_subnet_participation_1.EdgeSubnetParticipation(spJson); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    EdgeInterface.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(EdgeInterface.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {EdgeInterfaceJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return EdgeInterface;
}());
exports.EdgeInterface = EdgeInterface;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ip_range_1 = __webpack_require__(5);
/**
 * Edge Gateway Subnet Participation.
 */
var EdgeSubnetParticipation = (function () {
    function EdgeSubnetParticipation(_json) {
        this._json = _json;
    }
    Object.defineProperty(EdgeSubnetParticipation.prototype, "gatewayAddress", {
        /**
         * Gets the gateway address on the network.
         * @returns {string} gateway address
         */
        get: function () {
            return this._json.gateway;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSubnetParticipation.prototype, "netmask", {
        /**
         * Gets the networks netmask.
         * @returns {string} netmask
         */
        get: function () {
            return this._json.netmask;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSubnetParticipation.prototype, "ipAddress", {
        /**
         * Gets the IP address.
         * @returns {string} IP address
         */
        get: function () {
            return this._json.ip_address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EdgeSubnetParticipation.prototype, "ipRanges", {
        /**
         * Gets the assigned IP ranges.
         * @returns {[IpRange]} IP address ranges
         */
        get: function () {
            return this._json.ip_ranges.map(function (rangeJson) { return new ip_range_1.IpRange(rangeJson); });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    EdgeSubnetParticipation.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(EdgeSubnetParticipation.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {EdgeSubnetParticipationJson} the JSON representation
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    return EdgeSubnetParticipation;
}());
exports.EdgeSubnetParticipation = EdgeSubnetParticipation;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var iland_1 = __webpack_require__(1);
var abstract_network_1 = __webpack_require__(6);
/**
 * Internal Network.
 */
var InternalNetwork = (function (_super) {
    tslib_1.__extends(InternalNetwork, _super);
    function InternalNetwork(_json) {
        return _super.call(this, _json) || this;
    }
    /**
     * Gets an internal network by UUID.
     * @param uuid internal network UUID
     * @returns {Promise<InternalNetwork>} promise that resolves with the internal network
     */
    InternalNetwork.getInternalNetwork = function (uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/network/" + uuid).then(function (response) {
                        var json = response.data;
                        return new InternalNetwork(json);
                    })];
            });
        });
    };
    Object.defineProperty(InternalNetwork.prototype, "entityType", {
        get: function () {
            return 'ORG_VDC_NETWORK';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternalNetwork.prototype, "edgeUuid", {
        /**
         * Gets the UUID of the edge gateway that the network is connected to, if its a NAT routed network or null otherwise.
         * @returns {string|null} edge gateway UUID or null
         */
        get: function () {
            return this._json.edge_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternalNetwork.prototype, "shared", {
        /**
         * Indicates whether this network is shared with other vDCs within the same organization.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.shared;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InternalNetwork.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {InternalNetworkJson} the API json object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the internal network data by retrieving it from the API again.
     * @returns {Promise<InternalNetwork>} promise that resolves with this object
     */
    InternalNetwork.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/network/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    return InternalNetwork;
}(abstract_network_1.AbstractNetwork));
exports.InternalNetwork = InternalNetwork;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var entity_1 = __webpack_require__(2);
var iland_1 = __webpack_require__(1);
var vm_1 = __webpack_require__(3);
var vapp_1 = __webpack_require__(7);
/**
 * Virtual Data Center.
 */
var Vdc = (function (_super) {
    tslib_1.__extends(Vdc, _super);
    function Vdc(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    /**
     * Gets a vDC by UUID.
     * @param uuid vDC UUID
     * @returns {Promise<Vdc>} promise that resolves with the vDC
     */
    Vdc.getVdc = function (uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdc/" + uuid).then(function (response) {
                        var json = response.data;
                        return new Vdc(json);
                    })];
            });
        });
    };
    Object.defineProperty(Vdc.prototype, "entityType", {
        get: function () {
            return 'VDC';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "enabled", {
        /**
         * Indicates whether the vDC is enabled.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "vcenterMoref", {
        /**
         * Gets the vCenter HREF.
         * @returns {string} vCenter HREF
         */
        get: function () {
            return this._json.vcenter_moref;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "vcenterName", {
        /**
         * Gets the vCenter name.
         * @returns {string} vCenter name
         */
        get: function () {
            return this._json.vcenter_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "description", {
        /**
         * Gets the description.
         * @returns {string} description
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "vcloudHref", {
        /**
         * Gets the vCloud HREF
         * @returns {string} vCloud HREF
         */
        get: function () {
            return this._json.vcloud_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "vcenterInstanceUuid", {
        /**
         * Gets the vCenter instance UUID.
         * @returns {string} vCenter instance UUID
         */
        get: function () {
            return this._json.vcenter_instance_uuid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "vcenterHref", {
        /**
         * Gets the vCenter HREF
         * @returns {string} vCenter HREF
         */
        get: function () {
            return this._json.vcenter_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "allocationModel", {
        /**
         * Gets the vDC allocation model
         * @returns {VdcAllocationModel} allocation model identifier
         */
        get: function () {
            return this._json.allocation_model;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "reservedCpu", {
        /**
         * Gets the amount of reserved CPU
         * @returns {number} reserved cpu
         */
        get: function () {
            return this._json.reserved_cpu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "reservedMemory", {
        /**
         * Gets the amount of reserved memory.
         * @returns {number} reserved memory
         */
        get: function () {
            return this._json.reserved_mem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "diskLimit", {
        /**
         * Gets the disk limit within the vDc.
         * @returns {number} disk limit
         */
        get: function () {
            return this._json.disk_limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "allocatedCpu", {
        /**
         * Gets the amount of CPU allocated
         * @returns {number} allocated CPU
         */
        get: function () {
            return this._json.alloc_cpu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "allocatedMemory", {
        /**
         * Gets the amount of memory allocated
         * @returns {number} allocated memory
         */
        get: function () {
            return this._json.alloc_mem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "maxHardwareVersion", {
        /**
         * Gets the maximum hardware version of the vDC.
         * @returns {string} max hardware version
         */
        get: function () {
            return this._json.max_hdw_version;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "networkQuota", {
        /**
         * Gets the network quota.
         * @returns {number} network quota
         */
        get: function () {
            return this._json.network_quota;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "usedNetworkCount", {
        /**
         * Gets the number of networks that exist within this vDC.
         * @returns {number} used network count
         */
        get: function () {
            return this._json.used_network_count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "locationId", {
        /**
         * Gets the datacenter location identifier.
         * @returns {string} location ID
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vdc.prototype, "orgUuid", {
        /**
         * Gets the UUID of the organization that the vDC is associated with.
         * @returns {string} Org UUID
         */
        get: function () {
            return this._json.org_uuid;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Vdc.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Vdc.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {VdcJson} the API json object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the vDC data by retrieving it from the API again.
     * @returns {Promise<Vdc>}
     */
    Vdc.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdc/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Gets the vDCs child vApps.
     * @returns {Promise<Vapp[]>} promise that resolves with an array of child vApps
     */
    Vdc.prototype.getVapps = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdc/" + this.uuid + "/vapps").then(function (response) {
                        var json = response.data;
                        return json.map(function (vappJson) { return new vapp_1.Vapp(vappJson); });
                    })];
            });
        });
    };
    /**
     * Gets the vDCs child VMs.
     * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
     */
    Vdc.prototype.getVms = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/vdc/" + this.uuid + "/vms").then(function (response) {
                        var json = response.data;
                        return json.map(function (vmJson) { return new vm_1.Vm(vmJson); });
                    })];
            });
        });
    };
    return Vdc;
}(entity_1.Entity));
exports.Vdc = Vdc;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(1), exports);
tslib_1.__exportStar(__webpack_require__(10), exports);
tslib_1.__exportStar(__webpack_require__(34), exports);
tslib_1.__exportStar(__webpack_require__(41), exports);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/**
 * Wrapper for iland API errors.
 */
var ApiError = (function (_super) {
    tslib_1.__extends(ApiError, _super);
    /**
     * Constructor.
     * @param {ApiErrorJson} _json error JSON from the API
     */
    function ApiError(_json) {
        var _this = _super.call(this, _json.detail_message ? _json.detail_message : _json.message) || this;
        _this._json = _json;
        Object.setPrototypeOf(_this, ApiError.prototype);
        return _this;
    }
    /**
     * Gets the error message.
     * @returns {string}
     */
    ApiError.prototype.getMessage = function () {
        return this._json.message;
    };
    /**
     * Gets the error detail message.
     * @returns {string|any} detailed message or null if none exists
     */
    ApiError.prototype.getDetailMessage = function () {
        return this._json.detail_message || null;
    };
    /**
     * Gets the error type.
     * @returns {ApiErrorType} the type of API error
     */
    ApiError.prototype.getType = function () {
        return this._json.type;
    };
    /**
     * JSON format.
     * @returns {string}
     */
    ApiError.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    /**
     * Gets the raw JSON object from the API.
     * @returns {ApiErrorJson} the API Error JSON object
     */
    ApiError.prototype.getJson = function () {
        return Object.assign({}, this._json);
    };
    return ApiError;
}(Error));
exports.ApiError = ApiError;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(2), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(3), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(4), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);
tslib_1.__exportStar(__webpack_require__(30), exports);
tslib_1.__exportStar(__webpack_require__(5), exports);
tslib_1.__exportStar(__webpack_require__(15), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);
tslib_1.__exportStar(__webpack_require__(36), exports);
tslib_1.__exportStar(__webpack_require__(18), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(7), exports);
tslib_1.__exportStar(__webpack_require__(31), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);
tslib_1.__exportStar(__webpack_require__(8), exports);
tslib_1.__exportStar(__webpack_require__(6), exports);
tslib_1.__exportStar(__webpack_require__(37), exports);
tslib_1.__exportStar(__webpack_require__(38), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);
tslib_1.__exportStar(__webpack_require__(39), exports);
tslib_1.__exportStar(__webpack_require__(40), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);
tslib_1.__exportStar(__webpack_require__(23), exports);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_35__;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var entity_1 = __webpack_require__(2);
var iland_1 = __webpack_require__(1);
var vm_1 = __webpack_require__(3);
var vapp_1 = __webpack_require__(7);
var vdc_1 = __webpack_require__(31);
var edge_1 = __webpack_require__(27);
var internal_network_1 = __webpack_require__(30);
var vapp_network_1 = __webpack_require__(8);
/**
 * IaaS Organization.
 */
var Org = (function (_super) {
    tslib_1.__extends(Org, _super);
    function Org(_json) {
        var _this = _super.call(this, _json) || this;
        _this._json = _json;
        return _this;
    }
    /**
     * Gets an Org by UUID.
     * @param uuid Org UUID
     * @returns {Promise<Org>} promise that resolves with the Org
     */
    Org.getOrg = function (uuid) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/org/" + uuid).then(function (response) {
                        var json = response.data;
                        return new Org(json);
                    })];
            });
        });
    };
    Object.defineProperty(Org.prototype, "entityType", {
        get: function () {
            return 'ORG';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "enabled", {
        /**
         * Indicates whether the Org is enabled.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.enabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "description", {
        /**
         * Gets the description.
         * @returns {string} description
         */
        get: function () {
            return this._json.description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "vcloudHref", {
        /**
         * Gets the vCloud HREF
         * @returns {string} vCloud HREF
         */
        get: function () {
            return this._json.vcloud_href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "locationId", {
        /**
         * Gets the datacenter location identifier.
         * @returns {string} location ID
         */
        get: function () {
            return this._json.location_id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "vappMaxRuntimeLease", {
        /**
         * Gets the Orgs max vApp runtime lease setting.
         * @returns {number} vApp max runtime lease
         */
        get: function () {
            return this._json.vapp_max_runtime_lease;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "vappMaxStorageLease", {
        /**
         * Gets the vApps max storage lease setting.
         * @returns {number} vApp max storage lease
         */
        get: function () {
            return this._json.vapp_max_storage_lease;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "vappTemplateMaxStorageLease", {
        /**
         * Gets the Orgs vApp template max storage lease setting.
         * @returns {number} vApp template max storage lease
         */
        get: function () {
            return this._json.vapp_template_max_storage_lease;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "vappDeletedOnStorageLeaseExpiration", {
        /**
         * Indicates whether the Org is configured such that vApps are deleted upon storage lease expiration vs. being marked
         * as an expired item.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.vapp_delete_on_storage_expire;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "vappTemplateDeletedOnStorageLeaseExpiration", {
        /**
         * Indicates whether the Org is configured such that vApp templates are deleted upon storage lease expiration vs.
         * being marked as an expired item.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.vapp_template_delete_on_storage_expire;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "zertoTarget", {
        /**
         * Indicates whether the Org is a Zerto continuity target.
         * @returns {boolean} value
         */
        get: function () {
            return this._json.zerto_target;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "fullName", {
        /**
         * Gets the full name of the organization.
         * @returns {string} full name
         */
        get: function () {
            return this._json.fullname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Org.prototype, "companyId", {
        /**
         * Gets the company ID (CRM).
         * @returns {string} company ID
         */
        get: function () {
            return this._json.crm;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    Org.prototype.toString = function () {
        return JSON.stringify(this._json, undefined, 2);
    };
    Object.defineProperty(Org.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {OrgJson} the API json object
         */
        get: function () {
            return Object.assign({}, this._json);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Refreshes the Org data by retrieving it from the API again.
     * @returns {Promise<Org>} promise that resolves with this object
     */
    Org.prototype.refresh = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/org/" + this.uuid).then(function (response) {
                        _this._json = response.data;
                        return _this;
                    })];
            });
        });
    };
    /**
     * Gets the Orgs child vDCs.
     * @returns {Promise<Vdc[]>} promise that resolves with an array of child vDCs
     */
    Org.prototype.getVdcs = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/org/" + this.uuid + "/vdcs").then(function (response) {
                        var json = response.data;
                        return json.map(function (vdcJson) { return new vdc_1.Vdc(vdcJson); });
                    })];
            });
        });
    };
    /**
     * Gets the Orgs child vApps.
     * @returns {Promise<Vapp[]>} promise that resolves with an array of child vApps
     */
    Org.prototype.getVapps = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/org/" + this.uuid + "/vapps").then(function (response) {
                        var json = response.data;
                        return json.map(function (vappJson) { return new vapp_1.Vapp(vappJson); });
                    })];
            });
        });
    };
    /**
     * Gets the Orgs child VMs.
     * @returns {Promise<Vm[]>} promise that resolves with an array of child VMs
     */
    Org.prototype.getVms = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/org/" + this.uuid + "/vms").then(function (response) {
                        var json = response.data;
                        return json.map(function (vmJson) { return new vm_1.Vm(vmJson); });
                    })];
            });
        });
    };
    /**
     * Gets the Orgs child Edges.
     * @returns {Promise<Edge[]>} promise that resolves with an array of child Edges
     */
    Org.prototype.getEdges = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/org/" + this.uuid + "/edges").then(function (response) {
                        var json = response.data;
                        return json.map(function (edgeJson) { return new edge_1.Edge(edgeJson); });
                    })];
            });
        });
    };
    /**
     * Gets the Orgs child internal networks.
     * @returns {Promise<InternalNetwork[]>} promise that resolves with an array of child Internal networks
     */
    Org.prototype.getInternalNetworks = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/org/" + this.uuid + "/vdc-networks").then(function (response) {
                        var json = response.data;
                        return json.map(function (netJson) { return new internal_network_1.InternalNetwork(netJson); });
                    })];
            });
        });
    };
    /**
     * Gets the Orgs child vApp networks.
     * @returns {Promise<VappNetwork[]>} promise that resolves with an array of child vApp networks
     */
    Org.prototype.getVappNetworks = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, iland_1.Iland.getHttp().get("/org/" + this.uuid + "/vapp-networks").then(function (response) {
                        var json = response.data;
                        return json.map(function (netJson) { return new vapp_network_1.VappNetwork(netJson); });
                    })];
            });
        });
    };
    return Org;
}(entity_1.Entity));
exports.Org = Org;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM Cpu Update Request.
 */
var VmCpuUpdateRequest = (function () {
    /**
     * Creaets a new VM CPU update request.
     * @param {number} numberOfCpus the number of CPUs
     * @param {number} coresPerSocket the number of cores per socket
     */
    function VmCpuUpdateRequest(numberOfCpus, coresPerSocket) {
        this.numberOfCpus = numberOfCpus;
        this.coresPerSocket = coresPerSocket;
    }
    Object.defineProperty(VmCpuUpdateRequest.prototype, "json", {
        /**
         * Gets JSON API representation.
         * @returns {VmCpuUpdateRequestJson} the JSON API representation
         */
        get: function () {
            return {
                cpus_number: this.numberOfCpus,
                cores_per_socket: this.coresPerSocket
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    VmCpuUpdateRequest.prototype.toString = function () {
        return JSON.stringify(this.json, undefined, 2);
    };
    return VmCpuUpdateRequest;
}());
exports.VmCpuUpdateRequest = VmCpuUpdateRequest;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * VM Create Snapshot Request.
 */
var VmCreateSnapshotRequest = (function () {
    /**
     * Creates a new VM snapshot creation requeset.
     * @param {string} name the snapshot name
     * @param {string} description the snapshot description
     * @param {boolean} memory whether to snapshot the VM's memory
     * @param {boolean} quiesce whether to quiesce the filesystem before taking the snapshot
     */
    function VmCreateSnapshotRequest(name, description, memory, quiesce) {
        this.name = name;
        this.description = description;
        this.memory = memory;
        this.quiesce = quiesce;
    }
    Object.defineProperty(VmCreateSnapshotRequest.prototype, "json", {
        /**
         * Gets JSON API representation.
         * @returns {VmCreateSnapshotRequestJson} the JSON API representation
         */
        get: function () {
            return {
                name: this.name,
                description: this.description,
                memory: this.memory,
                quiesce: this.quiesce
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    VmCreateSnapshotRequest.prototype.toString = function () {
        return JSON.stringify(this.json, undefined, 2);
    };
    return VmCreateSnapshotRequest;
}());
exports.VmCreateSnapshotRequest = VmCreateSnapshotRequest;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * User Creation Request.
 */
var UserCreationRequest = (function () {
    /**
     * Creates a new user creation request.
     * @param {string} domain the users' domain
     * @param {string} username the user's username
     * @param {string} fullName the users's full name
     * @param {string} email the user's email address
     * @param {string} password the user's initial password
     */
    function UserCreationRequest(domain, username, fullName, email, password) {
        this.domain = domain;
        this.username = username;
        this.fullName = fullName;
        this.email = email;
        this.password = password;
    }
    Object.defineProperty(UserCreationRequest.prototype, "json", {
        /**
         * Gets the raw JSON object from the API.
         * @returns {UserCreationRequestJson} the JSON representation
         */
        get: function () {
            return {
                password: this.password,
                domain: this.domain,
                fullname: this.fullName,
                email: this.email,
                name: this.username
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    UserCreationRequest.prototype.toString = function () {
        return JSON.stringify(this.json, undefined, 2);
    };
    return UserCreationRequest;
}());
exports.UserCreationRequest = UserCreationRequest;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Role Creation Request Implementation.
 */
var RoleCreationRequest = (function () {
    /**
     * Creates a new role creation request.
     * @param {string} companyId the ID of the company that the role will be created in
     * @param {string} name the name of the role
     * @param {string} description the description of the role
     * @param {Array<Policy>} policies the policies that define the role
     */
    function RoleCreationRequest(companyId, name, description, policies) {
        this.companyId = companyId;
        this.name = name;
        this.description = description;
        this.policies = policies;
    }
    Object.defineProperty(RoleCreationRequest.prototype, "json", {
        /**
         * Gets the raw JSON object for the API.
         * @returns {RoleCreationRequestJson} JSON representation
         */
        get: function () {
            return {
                company_id: this.companyId,
                name: this.name,
                description: this.description,
                policies: this.policies.map(function (it) { return it.json; })
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * JSON format.
     * @returns {string}
     */
    RoleCreationRequest.prototype.toString = function () {
        return JSON.stringify(this.json, undefined, 2);
    };
    return RoleCreationRequest;
}());
exports.RoleCreationRequest = RoleCreationRequest;
/**
 * Role Creation Request Builder.
 */
var RoleCreationRequestBuilder = (function () {
    function RoleCreationRequestBuilder(_companyId, _name, _description) {
        this._companyId = _companyId;
        this._name = _name;
        this._description = _description;
        this._policies = {};
    }
    /**
     * Sets the name for the role creation request.
     * @param {string} name
     * @returns {RoleCreationRequestBuilder} the builder
     */
    RoleCreationRequestBuilder.prototype.setName = function (name) {
        this._name = name;
        return this;
    };
    /**
     * Sets the description for the role creation request.
     * @param {string} description
     * @returns {RoleCreationRequestBuilder} the builder
     */
    RoleCreationRequestBuilder.prototype.setDescription = function (description) {
        this._description = description;
        return this;
    };
    /**
     * Sets a policy on the role creation request.
     * @param {Policy} policy
     * @returns {RoleCreationRequestBuilder} the builder
     */
    RoleCreationRequestBuilder.prototype.setPolicy = function (policy) {
        this._policies[policy.entityUuid] = policy;
        return this;
    };
    /**
     * Removes a policy for a specified entity.
     * @param {string} entityUuid the UUID of the entity
     * @returns {RoleCreationRequestBuilder} the builder
     */
    RoleCreationRequestBuilder.prototype.removePolicy = function (entityUuid) {
        delete this._policies[entityUuid];
        return this;
    };
    /**
     * Clears all policies.
     * @returns {RoleCreationRequestBuilder} the builder
     */
    RoleCreationRequestBuilder.prototype.clearPolicies = function () {
        this._policies = {};
        return this;
    };
    /**
     * Builds the RoleCreationRequest.
     * @returns {RoleCreationRequest}
     */
    RoleCreationRequestBuilder.prototype.build = function () {
        var _this = this;
        return new RoleCreationRequest(this._companyId, this._name, this._description, Object.keys(this._policies).map(function (it) { return _this._policies[it]; }));
    };
    return RoleCreationRequestBuilder;
}());
exports.RoleCreationRequestBuilder = RoleCreationRequestBuilder;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(9), exports);
tslib_1.__exportStar(__webpack_require__(42), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var auth_provider_1 = __webpack_require__(9);
var Keycloak = __webpack_require__(43);
var IlandBrowserAuthProvider = (function () {
    function IlandBrowserAuthProvider(config) {
        var kcConfig = {
            clientId: config.clientId,
            resource: config.clientId,
            url: config.url ? config.url : auth_provider_1.DEFAULT_AUTH_URL,
            'public-client': true,
            realm: 'iland-core'
        };
        this._keycloak = Keycloak(kcConfig);
    }
    IlandBrowserAuthProvider.prototype.getToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._keycloak.updateToken(15).success(function () {
                            resolve(_this._keycloak.token);
                        }).error(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, this._init().then(function () {
                                        resolve(_this._keycloak.token);
                                    }, function (err) {
                                        reject(err);
                                    })];
                            });
                        }); });
                    })];
            });
        });
    };
    /**
     * Gets the username of the currently authenticated user.
     * @returns {string} username
     */
    IlandBrowserAuthProvider.prototype.getAuthenticatedUsername = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.getToken().then(function () {
                        var tokenParsed = _this._keycloak.tokenParsed;
                        return tokenParsed.preferred_username;
                    })];
            });
        });
    };
    /**
     * Log out the authenticated user.
     * @returns {Promise<any>} promise that resolves when logout is complete.
     */
    IlandBrowserAuthProvider.prototype.logout = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._keycloak.logout().success(function () {
                            resolve(null);
                        }).error(function () {
                            reject(null);
                        });
                    })];
            });
        });
    };
    IlandBrowserAuthProvider.prototype._init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._keycloak.init({
                            onLoad: 'login-required'
                        }).success(function (result) {
                            resolve(result);
                        }).error(function (error) {
                            reject(error);
                        });
                    })];
            });
        });
    };
    return IlandBrowserAuthProvider;
}());
exports.IlandBrowserAuthProvider = IlandBrowserAuthProvider;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var auth_provider_1 = __webpack_require__(9);
var axios_1 = __webpack_require__(11);
var querystring = __webpack_require__(45);
var TOKEN_REFRESH_THRESHOLD = 10;
var IlandDirectGrantAuthProvider = (function () {
    function IlandDirectGrantAuthProvider(_config) {
        this._config = _config;
    }
    IlandDirectGrantAuthProvider._epochSeconds = function () {
        return new Date().getTime() / 1000;
    };
    IlandDirectGrantAuthProvider.prototype.getToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var token;
            return tslib_1.__generator(this, function (_a) {
                token = this._token;
                if (token === undefined) {
                    // login required
                    return [2 /*return*/, this._login().then(function (token) {
                            return token.access_token;
                        })];
                }
                else {
                    if (IlandDirectGrantAuthProvider._epochSeconds() >= token.expires_at - TOKEN_REFRESH_THRESHOLD) {
                        // refresh required
                        return [2 /*return*/, this._refreshToken().catch(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    return [2 /*return*/, this._login()];
                                });
                            }); }).then(function (token) {
                                return token.access_token;
                            })];
                    }
                    else {
                        // no refresh necessary
                        return [2 /*return*/, new Promise(function (resolve) {
                                resolve(token.access_token);
                            })];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    IlandDirectGrantAuthProvider.prototype.logout = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, promise;
            return tslib_1.__generator(this, function (_a) {
                url = this._config.url || auth_provider_1.DEFAULT_AUTH_URL;
                promise = axios_1.default.post(url + "/realms/" + auth_provider_1.DEFAULT_REALM + "/protocol/openid-connect/logout", querystring.stringify({
                    client_id: this._config.clientId,
                    client_secret: this._config.clientSecret,
                    refresh_token: this._token.refresh_token
                }));
                return [2 /*return*/, promise.then(function () {
                        _this._token.expires_in = 0;
                        _this._token.expires_at = IlandDirectGrantAuthProvider._epochSeconds();
                    }, function (reason) {
                        if (reason.response) {
                            throw new Error(reason.response.status + ": " + JSON.stringify(reason.response.data));
                        }
                        else {
                            throw new Error(reason.code);
                        }
                    })];
            });
        });
    };
    IlandDirectGrantAuthProvider.prototype.getAuthenticatedUsername = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.getToken().then(function () {
                        return _this._config.username;
                    })];
            });
        });
    };
    IlandDirectGrantAuthProvider.prototype._refreshToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, promise;
            return tslib_1.__generator(this, function (_a) {
                url = this._config.url || auth_provider_1.DEFAULT_AUTH_URL;
                promise = axios_1.default.post(url + "/realms/" + auth_provider_1.DEFAULT_REALM + "/protocol/openid-connect/token", querystring.stringify({
                    client_id: this._config.clientId,
                    client_secret: this._config.clientSecret,
                    refresh_token: this._token.refresh_token,
                    grant_type: 'refresh_token'
                }));
                return [2 /*return*/, promise.then(function (response) {
                        _this._token = response.data;
                        _this._token.expires_at = _this._token.expires_in + IlandDirectGrantAuthProvider._epochSeconds();
                        return _this._token;
                    })];
            });
        });
    };
    IlandDirectGrantAuthProvider.prototype._login = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var url, promise;
            return tslib_1.__generator(this, function (_a) {
                url = this._config.url || auth_provider_1.DEFAULT_AUTH_URL;
                promise = axios_1.default.post(url + "/realms/" + auth_provider_1.DEFAULT_REALM + "/protocol/openid-connect/token", querystring.stringify({
                    client_id: this._config.clientId,
                    client_secret: this._config.clientSecret,
                    username: this._config.username,
                    password: this._config.password,
                    grant_type: 'password'
                }));
                return [2 /*return*/, promise.then(function (response) {
                        _this._token = response.data;
                        _this._token.expires_at = _this._token.expires_in + IlandDirectGrantAuthProvider._epochSeconds();
                        return _this._token;
                    }).catch(function (reason) {
                        if (reason.response) {
                            throw new Error(reason.response.status + ": " + JSON.stringify(reason.response.data));
                        }
                        else {
                            throw new Error(reason.code);
                        }
                    })];
            });
        });
    };
    return IlandDirectGrantAuthProvider;
}());
exports.IlandDirectGrantAuthProvider = IlandDirectGrantAuthProvider;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(46);
exports.encode = exports.stringify = __webpack_require__(47);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ })
/******/ ]);
});