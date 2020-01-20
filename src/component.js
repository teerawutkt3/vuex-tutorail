import {bSave, bCancel, bBack, bPrint, bDelete, bReset, bCreate, bEdit} from './components/base/button/index'
import bCard from './components/base/card/card'
const buttons = [
    {name: 'b-save', component: bSave},
    {name: 'b-cancel',component: bCancel},
    {name: 'b-back',component: bBack},
    {name: 'b-print',component: bPrint},
    {name: 'b-delete',component: bDelete},
    {name: 'b-reset',component: bReset},
    {name: 'b-create',component: bCreate},
    {name: 'b-edit',component: bEdit},
]

const card = {
    name: 'b-card', component:bCard
}

export default {
    buttons,
    card

}