import {App} from "vue";
import draggable from "./modules/draggable";
import lazyLoad from './modules/LazyLoad';
import auth from './modules/auth';

const directivesList: any = {
    draggable,
    lazyLoad,
    auth
};

const directives = {
    install: function (app: App<Element>) {
        Object.keys(directivesList).forEach(key => {
            // 注册自定义指令
            app.directive(key, directivesList[key]);
        });
    }
};

export default directives;
