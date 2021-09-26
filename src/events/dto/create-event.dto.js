"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateEventDto = void 0;
var class_validator_1 = require("class-validator");
var CreateEventDto = /** @class */ (function () {
    function CreateEventDto() {
    }
    __decorate([
        class_validator_1.IsInt()
    ], CreateEventDto.prototype, "id");
    __decorate([
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateEventDto.prototype, "title");
    __decorate([
        class_validator_1.IsString()
    ], CreateEventDto.prototype, "description");
    __decorate([
        class_validator_1.IsString()
    ], CreateEventDto.prototype, "dateCreated");
    __decorate([
        class_validator_1.IsString()
    ], CreateEventDto.prototype, "dateUpdated");
    __decorate([
        class_validator_1.IsArray()
    ], CreateEventDto.prototype, "medias");
    __decorate([
        class_validator_1.IsArray()
    ], CreateEventDto.prototype, "comments");
    return CreateEventDto;
}());
exports.CreateEventDto = CreateEventDto;
