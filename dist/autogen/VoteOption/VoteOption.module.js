"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteOptionModule = void 0;
const common_1 = require("@nestjs/common");
const VoteOption_entity_1 = require("./VoteOption.entity");
const typeorm_1 = require("@nestjs/typeorm");
const VoteOption_service_1 = require("./VoteOption.service");
const VoteOption_controller_1 = require("./VoteOption.controller");
let VoteOptionModule = class VoteOptionModule {
};
exports.VoteOptionModule = VoteOptionModule;
exports.VoteOptionModule = VoteOptionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([VoteOption_entity_1.VoteOption])],
        providers: [VoteOption_service_1.VoteOptionService],
        exports: [VoteOption_service_1.VoteOptionService],
        controllers: [VoteOption_controller_1.VoteOptionController],
    })
], VoteOptionModule);
//# sourceMappingURL=VoteOption.module.js.map