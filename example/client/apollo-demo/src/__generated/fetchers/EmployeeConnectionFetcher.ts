import type { FieldOptions, DirectiveArgs } from 'graphql-ts-client-api';
import { Fetcher, createFetcher, createFetchableType } from 'graphql-ts-client-api';
import type { WithTypeName, ImplementationType } from '../CommonTypes';

/*
 * Any instance of this interface is immutable,
 * all the properties and functions can only be used to create new instances,
 * they cannot modify the current instance.
 * 
 * So any instance of this interface is reuseable.
 */
export interface EmployeeConnectionFetcher<T extends object, TVariables extends object> extends Fetcher<'EmployeeConnection', T, TVariables> {

	on<XName extends ImplementationType<'EmployeeConnection'>, X extends object, XVariables extends object>(
		child: Fetcher<XName, X, XVariables>, 
		fragmentName?: string // undefined: inline fragment; otherwise, otherwise, real fragment
	): EmployeeConnectionFetcher<
		XName extends 'EmployeeConnection' ?
		T & X :
		WithTypeName<T, ImplementationType<'EmployeeConnection'>> & (
			WithTypeName<X, ImplementationType<XName>> | 
			{__typename: Exclude<ImplementationType<'EmployeeConnection'>, ImplementationType<XName>>}
		), 
		TVariables & XVariables
	>;


	directive(name: string, args?: DirectiveArgs): EmployeeConnectionFetcher<T, TVariables>;


	readonly __typename: EmployeeConnectionFetcher<T & {__typename: ImplementationType<'EmployeeConnection'>}, TVariables>;


	readonly totalCount: EmployeeConnectionFetcher<T & {readonly "totalCount": number}, TVariables>;

	"totalCount+"<
		XAlias extends string = "totalCount", 
		XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
		XDirectiveVariables extends object = {}
	>(
		optionsConfigurer?: (
			options: FieldOptions<"totalCount", {}, {}>
		) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
	): EmployeeConnectionFetcher<
		T & (
			XDirectives extends { readonly include: any } | { readonly skip: any } ? 
				{readonly [key in XAlias]?: number} : 
				{readonly [key in XAlias]: number}
		), 
		TVariables & XDirectiveVariables
	>;

	readonly "~totalCount": EmployeeConnectionFetcher<Omit<T, 'totalCount'>, TVariables>;


	edges<
		X extends object, 
		XVariables extends object, 
		XAlias extends string = "edges", 
		XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
		XDirectiveVariables extends object = {}
	>(
		child: Fetcher<'EmployeeEdge', X, XVariables>, 
		optionsConfigurer?: (
			options: FieldOptions<"edges", {}, {}>
		) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
	): EmployeeConnectionFetcher<
		T & (
			XDirectives extends { readonly include: any } | { readonly skip: any } ? 
				{readonly [key in XAlias]?: readonly X[]} : 
				{readonly [key in XAlias]: readonly X[]}
		), 
		TVariables & XVariables & XDirectiveVariables
	>;


	pageInfo<
		X extends object, 
		XVariables extends object, 
		XAlias extends string = "pageInfo", 
		XDirectives extends { readonly [key: string]: DirectiveArgs } = {}, 
		XDirectiveVariables extends object = {}
	>(
		child: Fetcher<'PageInfo', X, XVariables>, 
		optionsConfigurer?: (
			options: FieldOptions<"pageInfo", {}, {}>
		) => FieldOptions<XAlias, XDirectives, XDirectiveVariables>
	): EmployeeConnectionFetcher<
		T & (
			XDirectives extends { readonly include: any } | { readonly skip: any } ? 
				{readonly [key in XAlias]?: X} : 
				{readonly [key in XAlias]: X}
		), 
		TVariables & XVariables & XDirectiveVariables
	>;
}

export const employeeConnection$: EmployeeConnectionFetcher<{}, {}> = 
	createFetcher(
		createFetchableType(
			"EmployeeConnection", 
			[], 
			[
				"totalCount", 
				{
					isFunction: true, 
					isPlural: true, 
					name: "edges"
				}, 
				{
					isFunction: true, 
					isPlural: false, 
					name: "pageInfo"
				}
			]
		), 
		undefined
	)
;

export const employeeConnection$$ = 
	employeeConnection$
		.totalCount
;