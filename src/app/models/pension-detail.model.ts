export class PensionDetail {
    constructor(
        public name: String,
        public dateofBirth: Date,
        public pan: String,
        public pensionType: String,
        public pensionAmount: number
    ) { }
}
