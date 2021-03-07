import { makeAjaxRequest } from '../utils/ajax.js';
import Session from '../models/Session.js';

const addSession = async ( session : Session ) : Promise<Session> => {
    return makeAjaxRequest({
        method: 'POST',
        endpoint: 'sessions',
        body: session,
        authenticated: true
    });
};

export {
    addSession
};