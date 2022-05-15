import {App} from "vue";
import draggable from "./modules/draggable";

const directivesList: any = {
    draggable,
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
