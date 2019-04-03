/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Todoes
// ====================================================

export interface Todoes_todoes {
  __typename: "Todo";
  id: string;
  title: string;
  done: boolean;
}

export interface Todoes {
  todoes: Todoes_todoes[];
}

export interface TodoesVariables {
  first: number;
}
