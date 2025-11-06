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
exports.VoteQuestion = exports.VoteQuestionCreate = void 0;
const swagger_1 = require("@nestjs/swagger");
class VoteQuestionCreate {
}
exports.VoteQuestionCreate = VoteQuestionCreate;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VoteQuestionCreate.prototype, "question_text", void 0);
class VoteQuestion {
}
exports.VoteQuestion = VoteQuestion;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], VoteQuestion.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], VoteQuestion.prototype, "question_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], VoteQuestion.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], VoteQuestion.prototype, "updated_at", void 0);
//# sourceMappingURL=VoteQuestion.dto.js.map