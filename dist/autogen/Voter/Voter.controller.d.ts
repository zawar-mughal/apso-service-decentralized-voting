import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Voter } from './dtos/Voter.dto';
import { VoterService } from './Voter.service';
export declare class VoterController implements CrudController<Voter> {
    service: VoterService;
    constructor(service: VoterService);
    get base(): CrudController<Voter>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Voter> | Voter[]>;
    get(req: CrudRequest): Promise<Voter>;
    create(req: CrudRequest, dto: Voter): Promise<Voter>;
    createMany(req: CrudRequest, dto: CreateManyDto<Voter>): Promise<Voter[]>;
    update(req: CrudRequest, dto: Voter): Promise<Voter>;
    replace(req: CrudRequest, dto: Voter): Promise<Voter>;
    delete(req: CrudRequest): Promise<void | Voter>;
}
