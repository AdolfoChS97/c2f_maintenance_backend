import { Customer } from "../models/file.dto";

export const formatRecord = (record: any): Customer => {
    const [
        empty,
        env, 
        control, 
        wtn, 
        btn, 
        gbluid, 
        subcdt, 
        subddt, 
        subexc, 
        subln, 
        subres, 
        substp, 
        stpmsc,
        stpmscDs,
        bundle, 
        maxSpeed,
        voipInd,
        ftrIdAcctInd,
        emailInd,
        emailAddress,
        rundte
    ] = record; 
    
    return {
        env: env, 
        samControlNumber: control, 
        btn: btn, 
        uuid: gbluid, 
        email: emailAddress,
    }

}