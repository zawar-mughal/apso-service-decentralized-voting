import { CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { VoteQuestion } from './dtos/VoteQuestion.dto';
import { VoteQuestionService } from './VoteQuestion.service';
export declare class VoteQuestionController implements CrudController<VoteQuestion> {
    service: VoteQuestionService;
    constructor(service: VoteQuestionService);
    get base(): CrudController<VoteQuestion>;
    getMany(req: CrudRequest): Promise<import("@nestjsx/crud").GetManyDefaultResponse<VoteQuestion> | VoteQuestion[]>;
    get(req: CrudRequest): Promise<VoteQuestion>;
    create(req: CrudRequest, dto: VoteQuestion): Promise<VoteQuestion>;
    createMany(req: CrudRequest, dto: CreateManyDto<VoteQuestion>): Promise<VoteQuestion[]>;
    update(req: CrudRequest, dto: VoteQuestion): Promise<VoteQuestion>;
    replace(req: CrudRequest, dto: VoteQuestion): Promise<VoteQuestion>;
    delete(req: CrudRequest): Promise<void | VoteQuestion>;
}
