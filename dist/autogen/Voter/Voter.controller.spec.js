"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const Voter_dto_1 = require("./dtos/Voter.dto");
const Voter_controller_1 = require("./Voter.controller");
const Voter_service_1 = require("./Voter.service");
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
describe('VoterController', () => {
    let controller;
    let spyService;
    beforeEach(async () => {
        const ApiServiceProvider = {
            provide: Voter_service_1.VoterService,
            useFactory: () => ({
                createOne: jest.fn(() => []),
                getOne: jest.fn(() => { }),
            }),
        };
        const module = await testing_1.Test.createTestingModule({
            controllers: [Voter_controller_1.VoterController],
            providers: [Voter_service_1.VoterService, ApiServiceProvider],
        }).compile();
        controller = module.get(Voter_controller_1.VoterController);
        spyService = module.get(Voter_service_1.VoterService);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
    it('should call VoterController get method', () => {
        const req = Object.assign({}, baseRequest);
        expect(controller.get(req)).not.toEqual(null);
        expect(spyService.getOne).toHaveBeenCalled();
    });
    it('should call VoterController create method', () => {
        const req = Object.assign({}, baseRequest);
        const dto = new Voter_dto_1.Voter();
        controller.create(req, dto);
        expect(controller.create(req, dto)).not.toEqual(null);
        expect(spyService.createOne).toHaveBeenCalled();
    });
});
//# sourceMappingURL=Voter.controller.spec.js.map