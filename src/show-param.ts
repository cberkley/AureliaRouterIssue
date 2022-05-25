import { Params } from "aurelia";

export class ShowParam {
    message: any = "HI";

    async load(params: Params) {
        console.log("LOADING", params);
        this.message = params.id;    
    }
}