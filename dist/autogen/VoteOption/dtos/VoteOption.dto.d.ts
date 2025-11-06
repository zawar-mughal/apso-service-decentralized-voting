export declare class VoteOptionCreate {
    option_text: string;
    vote_question_id: string;
}
export declare class VoteOption {
    id: number;
    option_text: string;
    vote_question_id: string;
    created_at: Date;
    updated_at: Date;
}
