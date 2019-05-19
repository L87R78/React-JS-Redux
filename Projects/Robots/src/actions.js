import { ChangeSearchField } from './constants'; 

export const  setSearchField = (text) => ({
        type: ChangeSearchField,
        payload: text
})