export declare class VoteCreate {
    vote_option_id: string;
    voter_id: string;
}
export declare class Vote {
    id: number;
    vote_option_id: string;
    voter_id: string;
    created_at: Date;
    updated_at: Date;
}
