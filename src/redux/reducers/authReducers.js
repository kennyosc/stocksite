const init = {
    _id: '',
    name: '',
    email: '',
    password: '',
    noKtp: '',
    noNpwp: '',
    alamat: '',
    kecamatan: '',
    kelurahan: '',
    kodePos: '',
    noHandphone: '',
    jenisKelamin: '',
    verification: '',
    auth: null
}

/* 
...PENDING
...FULFILLED
...REJECTED*/

const userAuth = (state = init, action) => {
    switch (action.type) {
        case "LOGIN_FULFILLED": {
            const data = action.payload.data.user
            return {
                ...state,
                _id: data._id,
                name: data.name,
                email: data.email,
                noKtp: data.noKtp,
                noNpwp: data.noNpwp,
                alamat: data.alamat,
                kecamatan: data.kecamatan,
                kelurahan: data.kelurahan,
                kodePos: data.kodePos,
                noHandphone: data.noHandphone,
                jenisKelamin: data.jenisKelamin,
                verification: data.verification,
                auth: action.payload.data.auth,

            }
        }
        default:
            return state
    }
}

export default userAuth