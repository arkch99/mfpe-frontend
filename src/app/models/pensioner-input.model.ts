export class PensionerInput {
    constructor(
        public name: String,
        public dateOfBirth: Date,
        public pan: String,
        public adhaar: String,
        public pensionType: String,
    ) { }
}
