import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { VoteOption } from './dtos/VoteOption.dto';
import { VoteOptionService } from './VoteOption.service';
export declare class VoteOptionController implements CrudController<VoteOption> {
    service: VoteOptionService;
    constructor(service: VoteOptionService);
    get base(): CrudController<VoteOption>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<VoteOption> | VoteOption[]>;
    get(req: CrudRequest): Promise<VoteOption>;
    create(req: CrudRequest, dto: VoteOption): Promise<VoteOption>;
    createMany(req: CrudRequest, dto: CreateManyDto<VoteOption>): Promise<VoteOption[]>;
    update(req: CrudRequest, dto: VoteOption): Promise<VoteOption>;
    replace(req: CrudRequest, dto: VoteOption): Promise<VoteOption>;
    delete(req: CrudRequest): Promise<void | VoteOption>;
}
