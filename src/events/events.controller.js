"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.EventsController = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var EventsController = /** @class */ (function () {
    function EventsController(eventsService) {
        this.eventsService = eventsService;
    }
    /* @Get(':id')
    findOne(@Param('id') id) {} */
    EventsController.prototype.findAll = function () {
        return this.eventsService.findAll();
    };
    EventsController.prototype.create = function (files, newEvent) {
        console.log('****************', files);
        console.log('------------------------------>', newEvent);
        // this.eventsService.create(newEvent);
    };
    EventsController.prototype.update = function (id, updEvent) {
        return this.eventsService.udpdate(id, updEvent);
    };
    __decorate([
        common_1.Get()
    ], EventsController.prototype, "findAll");
    __decorate([
        common_1.Post(),
        common_1.UseInterceptors(platform_express_1.FileInterceptor('media[]', { dest: './media' })),
        __param(0, common_1.UploadedFiles()),
        __param(1, common_1.Body())
    ], EventsController.prototype, "create");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body())
    ], EventsController.prototype, "update");
    EventsController = __decorate([
        common_1.Controller('events')
    ], EventsController);
    return EventsController;
}());
exports.EventsController = EventsController;
