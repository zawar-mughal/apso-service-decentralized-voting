import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { Vote } from './dtos/Vote.dto';
import { VoteService } from './Vote.service';
export declare class VoteController implements CrudController<Vote> {
    service: VoteService;
    constructor(service: VoteService);
    get base(): CrudController<Vote>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<Vote> | Vote[]>;
    get(req: CrudRequest): Promise<Vote>;
    create(req: CrudRequest, dto: Vote): Promise<Vote>;
    createMany(req: CrudRequest, dto: CreateManyDto<Vote>): Promise<Vote[]>;
    update(req: CrudRequest, dto: Vote): Promise<Vote>;
    replace(req: CrudRequest, dto: Vote): Promise<Vote>;
    delete(req: CrudRequest): Promise<void | Vote>;
}
