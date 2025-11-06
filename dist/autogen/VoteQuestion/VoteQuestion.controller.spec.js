"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const VoteQuestion_dto_1 = require("./dtos/VoteQuestion.dto");
const VoteQuestion_controller_1 = require("./VoteQuestion.controller");
const VoteQuestion_service_1 = require("./VoteQuestion.service");
const baseRequest = {
    parsed: {
        fields: [],
        paramsFilter: [],
        search: {},
        filter: [],
        or: [],
        join: [],
        sort: [],
        authPersist: undefined,
        limit: 10,
        offset: 0,
        page: 1,
        cache: undefined,
    },
    options: {},
};
describe('VoteQuestionController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: VoteQuestion_service_1.VoteQuestionService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [VoteQuestion_controller_1.VoteQuestionController],
            providers: [VoteQuestion_service_1.VoteQuestionService, ApiServiceProvider],
        }).compile();
        controller = module.get(VoteQuestion_controller_1.VoteQuestionController);
        spyService = module.get(VoteQuestion_service_1.VoteQuestionService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call VoteQuestionController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call VoteQuestionController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new VoteQuestion_dto_1.VoteQuestion();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=VoteQuestion.controller.spec.js.map