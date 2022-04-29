export enum ACTION_TYPES {
  SET_SELECTED_OPTION_REQUEST = '@@navbar/SET_SELECTED_OPTION_REQUEST',
  SET_SELECTED_OPTION_SUCCESS = '@@navbar/SET_SELECTED_OPTION_SUCCESS',
}

export interface NavBarState {
  selectedOption: string | undefined;
}
