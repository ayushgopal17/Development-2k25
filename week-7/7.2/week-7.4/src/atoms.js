import {atom, selector} from "recoil"


export const networkAtom = atom ({
    key: "networkatom",
    default: 104
});

export const jobsAtom = atom ({
    key: "jobsAtom",
    default: 0
});

export const notificationsAtom = atom ({
    key: "notificationsAtom",
    default: 0
});

export const messagingAtom = atom ({
    key: "messagingAtom ",
    default: 12
});

export const totalNotificationSelector=selector({ 
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkAtomCount=get(networkAtom);
        const jobsAtom=get(networkAtom);
        const notificationsAtom=get(networkAtom);
        const messagingAtom=get(networkAtom);
        return networkAtomCount +jobsAtom +notificationsAtom +messagingAtom

    }
})

