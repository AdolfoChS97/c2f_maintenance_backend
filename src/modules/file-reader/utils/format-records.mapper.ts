export const formatRecord = (record: any) => {
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
        control: control, 
        wtn: wtn, 
        btn: btn, 
        gbluid: gbluid, 
        subcdt: subcdt, 
        subddt: subddt,
        subexc: subexc, 
        subln: subln, 
        subres: subres, 
        substp: substp, 
        stpmsc: stpmsc,
        stpmscDs: stpmscDs,
        bundle: bundle, 
        maxSpeed: maxSpeed,
        voipInd: voipInd,
        ftrIdAcctInd: ftrIdAcctInd,
        emailInd: emailInd,
        emailAddress: emailAddress,
        rundte: rundte
    }

}