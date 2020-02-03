import action from '../components/action'
import crumbs from '../components/nav'
let mycomponent = {
    install:(Vue)=>{
        Vue.component('actionList',action)
        Vue.component('crumbs',crumbs)
    }
}
export default mycomponent
