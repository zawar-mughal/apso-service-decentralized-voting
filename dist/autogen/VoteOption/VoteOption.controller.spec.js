"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const VoteOption_dto_1 = require("./dtos/VoteOption.dto");
const VoteOption_controller_1 = require("./VoteOption.controller");
const VoteOption_service_1 = require("./VoteOption.service");
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
describe('VoteOptionController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: VoteOption_service_1.VoteOptionService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [VoteOption_controller_1.VoteOptionController],
            providers: [VoteOption_service_1.VoteOptionService, ApiServiceProvider],
        }).compile();
        controller = module.get(VoteOption_controller_1.VoteOptionController);
        spyService = module.get(VoteOption_service_1.VoteOptionService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call VoteOptionController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call VoteOptionController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new VoteOption_dto_1.VoteOption();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=VoteOption.controller.spec.js.map