"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteOption = exports.VoteOptionCreate = void 0;
const swagger_1 = require("@nestjs/swagger");
class VoteOptionCreate {
}
exports.VoteOptionCreate = VoteOptionCreate;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VoteOptionCreate.prototype, "option_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VoteOptionCreate.prototype, "vote_question_id", void 0);
class VoteOption {
}
exports.VoteOption = VoteOption;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], VoteOption.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VoteOption.prototype, "option_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VoteOption.prototype, "vote_question_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], VoteOption.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], VoteOption.prototype, "updated_at", void 0);
//# sourceMappingURL=VoteOption.dto.js.map