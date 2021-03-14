export default class products{

    constructor(pId:number, pName:string, pDesc:string, pCost:string){

        this.pId=pId;
        this.pName=pName;
        this.pDesc=pDesc;
        this.pCost=pCost;
    }
    pId!: number;
    pName!: string;
    pDesc!: string;
    pCost!: string;
}