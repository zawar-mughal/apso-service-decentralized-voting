"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Vote_dto_1 = require("./dtos/Vote.dto");
const Vote_controller_1 = require("./Vote.controller");
const Vote_service_1 = require("./Vote.service");
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
describe('VoteController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Vote_service_1.VoteService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Vote_controller_1.VoteController],
            providers: [Vote_service_1.VoteService, ApiServiceProvider],
        }).compile();
        controller = module.get(Vote_controller_1.VoteController);
        spyService = module.get(Vote_service_1.VoteService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call VoteController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call VoteController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Vote_dto_1.Vote();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Vote.controller.spec.js.map