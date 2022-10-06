export type File = {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string,
    destination: string,
    filename: string,
    path: string,
    size: number
}

export type Customer {
    env: string, 
    samControlNumber: string, 
    btn: string, 
    uuid: string, 
    email: string,
}