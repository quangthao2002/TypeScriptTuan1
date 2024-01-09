export class Triangle {
    private ma: number;
    private mb: number;
    private mc: number;
    

    constructor(ma: number, mb: number, mc: number) {
        if(this.isTrangle(ma,mb,mc)){ // neu la tam giac thi gan gia tri
            this.ma = ma;
            this.mb = mb;
            this.mc = mc;
        }else{ // neu khong phai tam giac thi gan gia tri bang 0
            this.ma = 0;
            this.mb = 0;
            this.mc = 0;
        }
    }

   
    public getMa(): number {
        return this.ma;
    }
    setMa(ma: number): void {
        this.ma = ma;
    }

    public getMb(): number {
        return this.mb;
    }
    setMb(mb: number): void {
        this.mb = mb;
    }

    getMc(): number {
        return this.mc; 
    }
    setMc(mc: number): void {
        this.mc = mc;
    }
// chu vi
    public perimeter(): number {
        return this.ma + this.mb + this.mc;
    }
// dien tich
public getArea(): number {
    const p = this.perimeter() / 2;
    
    return Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
}
// kiem tra tam giac
public triangleType(): string {
   if(this.ma === 0 || this.mb === 0 || this.mc === 0){
       return "khong phai tam giac";
   }
   if(this.ma === this.mb && this.mb === this.mc){
       return "tam giac deu";
   }
    if(this.ma === this.mb || this.mb === this.mc || this.ma === this.mc){
         return "tam giac can";
    }
    return "tam giac thuong";

}
// kiem tra co phai la tam giac
    private isTrangle(ma: number, mb:number,mc:number): boolean {
                return ma> 0 && mb>0 && mc>0 && ma + mb > mc && ma + mc > mb && mb + mc > ma;
    }

    // this tham chiếu đến đối tượng hiện tại của lớp đó.

    public toString(): string {
        return `
        Loai tam giac: ${this.triangleType()} \n
        Chu vi: ${this.perimeter()} \n
        Dien tich: ${this.getArea()} \n
        3 canh cua tam giac: ${this.ma}, ${this.mb}, ${this.mc}
        `
    }
}