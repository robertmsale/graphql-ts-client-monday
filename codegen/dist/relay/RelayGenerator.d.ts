/// <reference types="node" />
import { WriteStream } from "fs";
import { GraphQLField, GraphQLInterfaceType, GraphQLObjectType, GraphQLSchema, GraphQLUnionType } from "graphql";
import { FetcherWriter } from "../FetcherWriter";
import { Generator } from "../Generator";
import { GeneratorConfig } from "../GeneratorConfig";
import { InheritanceInfo } from "../InheritanceInfo";
export declare class RelayGenerator extends Generator {
    constructor(config: GeneratorConfig);
    protected createFetcheWriter(modelType: GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType, inheritanceInfo: InheritanceInfo, stream: WriteStream, config: GeneratorConfig): FetcherWriter;
    protected generateServices(_1: GraphQLField<unknown, unknown>[], _2: GraphQLField<unknown, unknown>[], promises: Promise<void>[]): Promise<void>;
    private generateRelayFragment;
    protected writeIndexCode(stream: WriteStream, schema: GraphQLSchema): Promise<void>;
}