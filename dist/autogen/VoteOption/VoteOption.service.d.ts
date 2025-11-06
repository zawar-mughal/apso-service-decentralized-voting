import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { QueryOptions } from '@nestjsx/crud';
import { ParsedRequestParams } from '@nestjsx/crud-request';
import { VoteOption } from './VoteOption.entity';
export declare class VoteOptionService extends TypeOrmCrudService<VoteOption> {
    constructor(repo: any);
    getSelect(query: ParsedRequestParams, options: QueryOptions): string[];
}
