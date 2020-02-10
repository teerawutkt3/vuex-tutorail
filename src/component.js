import { bSave, bCancel, bBack, bPrint, bDelete, bReset, bCreate, bEdit } from './components/base/button/index'
import bCard from './components/base/card/card'
import bFormInput from './components/base/input/input-form-group/input-form-group'
const buttons = [
    { name: 'b-save', component: bSave },
    { name: 'b-cancel', component: bCancel },
    { name: 'b-back', component: bBack },
    { name: 'b-print', component: bPrint },
    { name: 'b-delete', component: bDelete },
    { name: 'b-reset', component: bReset },
    { name: 'b-create', component: bCreate },
    { name: 'b-edit', component: bEdit },
]

const card = {
    name: 'b-card', component: bCard
}

const input = {
    name: 'b-form-input', component: bFormInput
}

export default {
    buttons,
    card,
    input

}