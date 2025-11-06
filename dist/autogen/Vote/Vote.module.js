"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteModule = void 0;
const common_1 = require("@nestjs/common");
const Vote_entity_1 = require("./Vote.entity");
const typeorm_1 = require("@nestjs/typeorm");
const Vote_service_1 = require("./Vote.service");
const Vote_controller_1 = require("./Vote.controller");
let VoteModule = class VoteModule {
};
exports.VoteModule = VoteModule;
exports.VoteModule = VoteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Vote_entity_1.Vote])],
        providers: [Vote_service_1.VoteService],
        exports: [Vote_service_1.VoteService],
        controllers: [Vote_controller_1.VoteController],
    })
], VoteModule);
//# sourceMappingURL=Vote.module.js.map